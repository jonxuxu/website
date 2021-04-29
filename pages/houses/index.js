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
        Down here I'm going to share the active houses I know of that
        demonstrate authentic living quite well. Maybe you can check them out,
        apply, or be inspired to start your own. Message me if you'd like to add
        (yours or others) to this list!
      </p>
      <p>
        Please be sure to check out{" "}
        <Link href="/blog/2021-04-28-group-houses">this post</Link> if you
        haven't yet, these resources are most hepful if you are using them with
        the right intent.
      </p>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={houses}
        renderItem={(item) => (
          <List.Item
            key={item.name}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              title={<a href={item.url}>{item.name}</a>}
              description={item.location}
            />
            {item.description}
          </List.Item>
        )}
      />
      ,
    </div>
  );
};

export default HousePage;
