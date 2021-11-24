import "@/styles/index.css";
import "antd/dist/antd.css";
import CreateMng from "../../components/CreateMng";
import SearchInput from "../../components/SearchInput";
import TableManager from "../../components/TableManager";
import styles from "./Contentmanager.module.scss";

export default function ContentManger() {
  return (
    <div>
      <div className={styles.listManager}>
        <div className={styles.listTop}>
          <div className={styles.topLeft}>
            <h2>Danh sách manager</h2>
            <SearchInput />
          </div>
          <div className={styles.topRight}>
            <CreateMng />
          </div>
        </div>
        <TableManager />
      </div>
    </div>
  );
}
