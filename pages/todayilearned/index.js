import React, { useRef, useState } from "react";
import { PrismaClient } from "@prisma/client";
import "../../utils/prisma";

import Head from "next/head";
import Highlighter from "react-highlight-words";
import dayjs from "dayjs";
import { Typography, Table, Input, Space, Button } from "antd";

import { SearchOutlined } from "@ant-design/icons";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const lessons = await prisma.Lesson.findMany();
  lessons.forEach((lesson) => {
    lesson.createdAt = lesson.createdAt.getTime();
    lesson.id = Number(lesson.id);
  });

  return {
    props: { lessons },
  };
}

const { Title } = Typography;

const LessonsPage = ({ lessons }) => {
  const searchInput = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput.current = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => {
              clearFilters();
              setSearchText("");
            }}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (open) => {
      if (open) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Date",
      dataIndex: "createdAt",
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      // onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.createdAt - b.createdAt,
      defaultSortOrder: "descend",
      render: (text) => dayjs(text).format("MMM D YYYY"),
      width: 130,
    },
    {
      title: "What I learned",
      dataIndex: "lesson",
      sorter: (a, b) => a.lesson.localeCompare(b.lesson),
      ...getColumnSearchProps("lesson"),
    },
  ];

  return (
    <div>
      <Head>
        <title>Today I Learned</title>
      </Head>
      <Title>Today I Learned</Title>
      <p>
        I hope to use this as a place to log what I've learned each day. The
        universe is wonderfully big and complex - I'd like to make an evergreen
        habit of discovering more about the world I live in.
      </p>
      <Table columns={columns} dataSource={lessons} rowKey="id" />
    </div>
  );
};

export default LessonsPage;
