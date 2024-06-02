import { List } from "antd";
import { InfoItem } from "./InfoItem";

export const Info = ({ telephone, email, company, address }) => {
  return (
    <List>
      <InfoItem label={"Telephone"} data={telephone} />
      <InfoItem label={"Email"} data={email} />
      <InfoItem label={"Company"} data={company} />
      <InfoItem label={"Address"} data={address} />
    </List>
  );
};