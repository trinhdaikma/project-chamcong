/* eslint-disable @typescript-eslint/semi */
/* eslint-disable array-callback-return */
import React from "react";
import "./shiftsEmployee.scss";
import { LeftOutlined, RightOutlined, PlusOutlined } from "@ant-design/icons";
import ModalAddShiftsEmployee from "../AddShiftsEmployee/modalAddShiftsEmployee";

const data = [
  {
    id: "1",
    name: "Nhân viên 1",
    shifts: "Ca 1",
  },
  {
    id: "2",
    name: "Nhân viên 1",
    shifts: "Ca 1",
  },
  {
    id: "3",
    name: "Nhân viên 1",
    shifts: "Ca 1",
  },
  {
    id: "4",
    name: "Nhân viên 1",
    shifts: "Ca 1",
  },
  {
    id: "5",
    name: "Nhân viên 1",
    shifts: "Ca 1",
  },
];
function TableShiftsEmployee() {
  return (
    <>
      <div className="ShiftsEmployee-wrapper">
        <div className="header-shiftEmployee">
          <h3>20/10/2021-30/10/2021 </h3>
          <div className="header-shiftEmployeeRight">
            <LeftOutlined />
            <RightOutlined />
            <input
              type="date"
              id="start"
              name="trip-start"
              value="2021-11-22"
              min="2021-11-22"
              max="2030-11-22"
            />
          </div>
        </div>
        <div className="content-shiftEmployee">
          <table>
            <thead>
              <tr className="table-title">
                <th className="table-text">STT</th>
                <th className="table-text">Nhân Viên</th>
                <th className="table-text">
                  22/11/2021
                  <ModalAddShiftsEmployee />
                </th>
                <th className="table-text">
                  23/11/2021
                  <ModalAddShiftsEmployee />
                </th>
                <th className="table-text">
                  24/11/2021
                  <ModalAddShiftsEmployee />
                </th>
                <th className="table-text">
                  25/11/2021
                  <ModalAddShiftsEmployee />
                </th>
                <th className="table-text">
                  26/11/2021
                  <ModalAddShiftsEmployee />
                </th>
                <th className="table-text">
                  27/11/2021
                  <ModalAddShiftsEmployee />
                </th>
                <th className="table-text">
                  28/11/2021
                  <ModalAddShiftsEmployee />
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((index, key) => (
                <tr key={key}>
                  <td style={{ textAlign: "center" }}>{index.id}</td>
                  <td
                    style={{
                      textAlign: "left",
                      padding: "0 0 0 7px",
                      width: 250,
                    }}
                  >
                    {index.name}
                  </td>
                  <td>{index.shifts}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default TableShiftsEmployee;
