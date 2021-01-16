import React, { useRef, useState } from "react";
import Head from "next/head";
import Highlighter from "react-highlight-words";
import moment from "moment";
import { Typography, Table, Input, Space, Button } from "antd";
import lessons from "./lessons.json";

import { SearchOutlined } from "@ant-design/icons";

const { Title } = Typography;

const LearnedPage = () => {
  const searchInput = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    console.log(dataIndex);
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
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
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
      dataIndex: "date",
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      // onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.date - b.date,
      defaultSortOrder: "descend",
      render: (text) => moment.unix(text).format("ll"),
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
        This is a special part of the digital woods where I try to log what I've
        learned every day. Let's see how long we can keep this ritual going.
      </p>
      <Table columns={columns} dataSource={lessons} rowKey="id" />
    </div>
  );
};

export default LearnedPage;
