import { Card as AntdCard } from "antd";
import { Avatar } from "./Avatar";
import { Info } from "./Info";
const { Meta } = AntdCard;

export const Card = ({ title, telephone, email, company, address }) => {
  return (
    <AntdCard style={{ maxWidth: "480px" }}>
      <Meta
        avatar={<Avatar name={title.first} />}
        title={title.first + " " + title.last}
        description={
          <Info
            telephone={telephone}
            email={email}
            company={company}
            address={address.postcode + ", " + address.country + ", " + address.state
            + ", " + address.city + ", " + address.street.name + ", " + address.street.number}
          />
        }
      />
    </AntdCard>
  );
};