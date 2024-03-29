import React from "react";
import { List, Typography } from "antd";
import Link from "next/link";

import houses from "./houses.json";

const { Title } = Typography;

const HousePage = () => {
  return (
    <div>
      <Title>Good Houses</Title>
      <p>
        Here's a list of the active houses I know of that I think foster great
        communities. Maybe you can check them out, apply, or be inspired to
        start your own. Message me if you'd like to add (yours or others) to
        this list!
      </p>
      <p>
        Do check out <Link href="/blog/2021-04-28-group-houses">this post</Link>{" "}
        if you haven't yet, this resource is most hepful if you are using it
        with the right intent.
      </p>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={houses}
        renderItem={(item) => (
          <List.Item
            key={item.name}
            extra={item.img && <img width={272} alt="logo" src={item.img} />}
          >
            <List.Item.Meta
              title={item.name}
              description={item.location}
            />
            {item.description}
            <br/>
            <a href={item.url}>link</a>
          </List.Item>
        )}
      />
      ,
    </div>
  );
};

export default HousePage;
