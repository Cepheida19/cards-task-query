import { Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

export const GetContacts = ({count, setCount}) => {
  const moreContacts = () => {
    if (count < 100) {
      setCount(count + 10);
    }
  };
  const lessContacts = () => {
    if (count > 10) {
      setCount(count - 10);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4px",
          alignItems: "center",
        }}
      >
        <Button>
          Get {count} contacts
        </Button>
        <Button
          onClick={() => moreContacts()}
          size="small"
          icon={<PlusOutlined />}
        />
        <Button
          onClick={() => lessContacts()}
          size="small"
          icon={<MinusOutlined />}
        />
      </div>
    </div>
  );
};
