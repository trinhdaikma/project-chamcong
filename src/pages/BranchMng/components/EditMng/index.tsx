import "@/styles/index.css";
import {
  Button,
  Modal,
  Input,
  Col,
  Row,
  Select,
} from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
// import axios from "axios";

const { Option } = Select;

export default function EditMng() {
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    setVisible(false);
    // axios.post("/offices", {
    //   name: data.name,
    //   address: data.address,
    //   province_id: data.province_id,
    //   latitude: data.latitude,
    //   longitude: data.longitude,
    //   starthour: data.start_hour,
    //   endhour: data.end_hour,
    // })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)} shape="round" size="small">
        Edit
      </Button>
      <Modal
        title="Sửa chi nhánh"
        centered
        visible={visible}
        onOk={() => handleSubmit()}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <div className="site-input-group-wrapper">
          <Input.Group size="large">
            <Row gutter={12}>
              <Col style={{ margin: "14px 0" }} span={10}>
                <label style={{ fontWeight: "500" }}>Tên chi nhánh</label>
                <Input defaultValue="" />
              </Col>
              <Col style={{ margin: "14px 0" }} span={10}>
                <label style={{ fontWeight: "500" }}>Address</label>
                <Input defaultValue="" />
              </Col>
              <Col style={{ margin: "14px 0" }} span={4}>
                <label style={{ fontWeight: "500" }}>Province_id</label>
                <Select
                  labelInValue
                  defaultValue=""
                  style={{ width: "100%" }}
                >
                  <Option value="jack">1111</Option>
                  <Option value="lucy">1112</Option>
                </Select>
              </Col>
              <Col style={{ margin: "14px 0" }} span={6}>
                <label style={{ fontWeight: "500" }}>Latitude</label>
                <Input defaultValue="" />
              </Col>
              <Col style={{ margin: "14px 0" }} span={6}>
                <label style={{ fontWeight: "500" }}>Longitude</label>
                <Input defaultValue="" />
              </Col>
              <Col style={{ margin: "14px 0" }} span={6}>
                <label style={{ fontWeight: "500" }}>Start Working</label>
                <Input defaultValue="" />
              </Col>
              <Col style={{ margin: "14px 0" }} span={6}>
                <label style={{ fontWeight: "500" }}>Stop Working</label>
                <Input defaultValue="" />
              </Col>
            </Row>
          </Input.Group>
        </div>
      </Modal>
    </>
  );
}
