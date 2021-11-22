// libs
// import { Suspense } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { Provider as ReduxProvider } from "react-redux";
// import { CssBaseline } from "@mui/material";
// // routes
// import appRoutes from "@/routers";
// // others
// import { store } from "@/redux/store";
import {
  MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "./App.css";
import "@/styles/index.css";
import "antd/dist/antd.css";

const { Header, Sider, Content } = Layout;

/**
 * App
 */
export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">
            <img className="logo-img" alt="CSsoft" src="https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/102812805_102376864857997_8227153299313844344_n.png?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=cHWZyAQINywAX8TOgR9&_nc_ht=scontent.fhan3-1.fna&oh=cbed7809d2c7032b5a4447c77e4d4efa&oe=61C0AED2" />
            <h3 className="logo-titlte">CSsoft</h3>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger",
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            IMPORT PAGE CỦA MỖI NGƯỜI Ở ĐÂY NHA!

            {/* <BrowserRouter>
              <Suspense fallback="Suspensed">
                <ReduxProvider store={store}>
                  <CssBaseline />
                  <Switch>
                    {appRoutes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                      />
                    ))}
                  </Switch>
                </ReduxProvider>
              </Suspense>
            </BrowserRouter> */}

          </Content>
        </Layout>
      </Layout>
    </>

  );
}
