// libs
import "@/styles/index.css";
import {
  Space, Table,
} from "antd";
import "antd/dist/antd.css";
import EditMng from "../EditMng";
import styles from "./Listmanager.module.scss";

const columns: any = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    // render: (text: any) => <a>{text}</a>,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    responsive: ["sm"],
  },
  {
    title: "Province_id",
    dataIndex: "province_id",
    key: "province_id",
    responsive: ["sm"],
  },
  {
    title: "Latitude",
    dataIndex: "latitude",
    key: "latitude",
    responsive: ["sm"],
  },
  {
    title: "Longitude",
    dataIndex: "longitude",
    key: "longitude",
    responsive: ["sm"],
  },
  {
    title: "Start Working",
    dataIndex: "startworking",
    key: "startworking",
    responsive: ["sm"],
  },
  {
    title: "Stop Working",
    dataIndex: "stopworking",
    key: "stopworking",
    responsive: ["sm"],
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a><EditMng /></a>
        <a style={{ color: "red" }}>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    name: "CSsoft",
    address: "583 - Nguyễn Trãi",
    province_id: "1123",
    latitude: "20.98",
    longitude: "105.79",
    startworking: "08:30",
    stopworking: "17:30",

  },
];
/**
 * SubmitBtn
 */
export default function TableManager() {
  return (

    <div className={styles.listtable}>
      <Table columns={columns} dataSource={data} />
    </div>

  );
}
