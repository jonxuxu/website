import React, { useState } from "react";
import Link from "next/link";
import { Modal, Form, Input, Typography, DatePicker, Button } from "antd";
import dayjs from "dayjs";

const { Title } = Typography;

export default function AddPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const addLesson = async (values) => {
    const res = await fetch("/api/insert-lesson", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${password}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(values),
    });
    console.log(res);
  };

  return (
    <div>
      <Modal
        visible={!authenticated}
        closable={false}
        okText="Login"
        cancelText={<Link href="/todayilearned">Cancel</Link>}
        onOk={() => setAuthenticated(true)}
        okButtonProps={{ disabled: !password }}
      >
        <Input.Password
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </Modal>

      <Title>Add a new lesson</Title>
      <Form
        onFinish={addLesson}
        initialValues={{
          ["createdAt"]: dayjs(),
        }}
      >
        <Form.Item
          label="Today I learned..."
          name="lesson"
          rules={[{ required: true, message: "Lesson is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Date" name="createdAt">
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
