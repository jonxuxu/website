import React, { useState } from "react";
import Link from "next/link";
import { Modal, Form, Input, Typography, Button, message } from "antd";
import DatePicker from "../../components/DatePicker";

const { Title } = Typography;

export default function AddPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [form] = Form.useForm();

  const addLesson = async (values) => {
    const res = await fetch("/api/insert-lesson", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${password}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
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
      <Form onFinish={addLesson} form={form}>
        <Form.Item
          label="Today I learned..."
          name="lesson"
          rules={[{ required: true, message: "Lesson is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Date"
          name="createdAt"
          rules={[{ required: true, message: "Date is required" }]}
        >
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
