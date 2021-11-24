// libs
import "@/styles/index.css";
import {
  Input, Space,
} from "antd";
import "antd/dist/antd.css";

const { Search } = Input;

/**
 * SubmitBtn
 */
export default function SearchInput() {
  return (
    <>
      <Space direction="vertical">
        <Search
          placeholder="Search name, address"
          allowClear
          enterButton="Search"
          size="large"
          style={{ width: 304 }}
        />
      </Space>
    </>
  );
}
