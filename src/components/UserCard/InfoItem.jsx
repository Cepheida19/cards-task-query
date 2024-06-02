import { Typography } from "antd";
const { Text } = Typography;

export const InfoItem = ({ label, data }) => {
  return (
    <div>
      <Text type="secondary">
        {label}
        {": "}
      </Text>
      <Text>{data}</Text>
    </div>
  );
};