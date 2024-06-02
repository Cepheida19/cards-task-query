import { Avatar as AntdAvatar } from "antd";

export const Avatar = ({ name }) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <AntdAvatar
      style={{ backgroundColor: getRandomColor(), verticalAlign: "middle" }}
      size="large"
      gap={4}
    >
      {name[0]}
    </AntdAvatar>
  );
};