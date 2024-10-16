import React, { useState } from "react";
import Link from "next/link";
import {
  Modal,
  Form,
  Input,
  Typography,
  Button,
  message,
  DatePicker,
} from "antd";

const { Title } = Typography;

export default function AddPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const addLesson = async (values) => {
    setLoading(true);
    const res = await fetch("/api/insert-lesson", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${password}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const statusCode = res.status;

    // check statusCode and show message
    setLoading(false);
    if (statusCode === 200) {
      messageApi.open({
        type: "success",
        content: "Added lesson!",
      });
      form.resetFields();
    } else {
      messageApi.open({
        type: "error",
        content: "Failed to add lesson :(",
      });
    }
  };

  return (
    <div>
      {contextHolder}

      <Modal
        open={!authenticated}
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
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
