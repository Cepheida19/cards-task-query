import { Layout } from "antd";
import { Card } from "./UserCard/Card";
import { GetContacts } from "./GetContacts";
import { fetchCoins } from "../scripts/reqContacts";
import { useState } from "react";
import { useQuery } from "react-query";
const { Content } = Layout;

export const Contacts = () => {
  const [count, setCount] = useState(10);
  const data = useQuery(["coins", count], fetchCoins, {keepPreviousData: true});

  return (
    <Layout style={{ minHeight: "100dvh", padding: "32px" }}>
      <Content
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <GetContacts setCount={setCount} count={count} />
        {data?.data?.results.map((item) => (
          <Card
            key={item.login.uuid}
            title={item.name}
            telephone={item.phone}
            email={item.email}
            address={item.location}
            company={item.nat}
          ></Card>
        ))}
      </Content>
    </Layout>
  );
};
