/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line no-use-before-define
import React, { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Popconfirm, Form } from "antd";
import { FormInstance } from "antd/lib/form";
import { Unsubscribe } from "redux";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import axios from "axios";
import Cookie from "universal-cookie";

const EditableContext = React.createContext<FormInstance<any> | null>(null);
const cookie = new Cookie();

interface Item {
  readonly key: string;
  name: string;
  starting_hour: string;
  ending_hour: string;
  starting_minutes: string;
  ending_minutes: string;
  coefficient: number;
  status: number;
  break_time: string;
  // office_id: string;
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<Input>(null);
  const form = useContext(EditableContext)!;

  useEffect(() => {
    if (editing) {
      inputRef.current!.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} không hợp lệ.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

type DataType = Item;

interface EditableTableState {
  dataSource: DataType[];
  count: number;
}

type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;

export default class EditableTable extends React.Component<
  EditableTableProps,
  EditableTableState
> {
  columns: (ColumnTypes[number] & { editable?: boolean; dataIndex: string })[];

  private unsub?: Unsubscribe;

  constructor(props: EditableTableProps) {
    super(props);
    this.columns = [
      {
        title: "STT",
        dataIndex: "key",
        width: "20px",
      },
      {
        title: "Tên ca",
        dataIndex: "name",
        width: "10%",
      },
      {
        title: "Bắt đầu",
        dataIndex: "starting_hour",
      },
      {
        title: "Kết thúc",
        dataIndex: "ending_hour",
      },
      {
        title: "Trạng thái",
        dataIndex: "status",
        editable: true,
      },
      {
        title: "Hệ số",
        dataIndex: "coefficient",
      },
      {
        title: "Giờ nghỉ",
        dataIndex: "break_time",
      },
      {
        title: "#",
        dataIndex: "operation",
        render: (_, record: any) => (
          <>
            <Popconfirm
              title="Xóa ca làm việc?"
              // onConfirm={() => this.handleDelete(record)}
            >
              <a style={{ fontSize: "20px", color: "red" }}>
                <DeleteOutlined />
              </a>
            </Popconfirm>
            <a style={{ margin: "0 0 0 15px", fontSize: "20px" }}>
              <EditOutlined />
            </a>
          </>
        ),
      },
    ];

    this.state = {
      dataSource: [
        {
          key: "1",
          name: "Hành chính",
          starting_hour: "08",
          ending_hour: "17",
          starting_minutes: "00",
          ending_minutes: "00",
          status: 1,
          coefficient: 1.2,
          break_time: "08:00",
        },
        {
          key: "2",
          name: "Ca sáng",
          starting_hour: "08",
          ending_hour: "17",
          starting_minutes: "00",
          ending_minutes: "00",
          status: 1,
          coefficient: 1.2,
          break_time: "08:00",
        },
      ],
      // eslint-disable-next-line react/no-unused-state
      count: 4, //
    };
  }

  async componentDidMount() {
    const token = cookie.get("token");
    axios
      .get(
        "http://timekeeping.cssdemoco.com/api/office-shifts?page=1&limit=6&office_id=2",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // eslint-disable-next-line @typescript-eslint/comma-dangle
        }
      )
      .then((res) => {
        console.log(res.data);
      });
  }

  // componentWillUnmount(): void {
  //   if (this.unsub) this.unsub();
  // }

  handleDelete = (key: React.Key) => {
    // const dataSource = [...this.state.dataSource];
    // this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  // handleSave = async (row: DataType) => {
  //   const { id, ...dataWrite } = row;
  //   await setDoc(doc(db, "Point", id), dataWrite);
  // };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: DataType) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          // handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns as ColumnTypes}
          rowKey="id"
        />
      </div>
    );
  }
}
