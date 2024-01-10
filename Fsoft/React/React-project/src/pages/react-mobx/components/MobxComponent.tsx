import React, { Fragment, ReactNode, SyntheticEvent, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { userStore } from "../store/user.store";
import { Box, Tab, Tabs } from "@mui/material";
import Couter from "./Counter";

const MobxComponent = () => {
  const [value, setValue] = useState<number>(0);
  const hanldeChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <Header />
      <Box sx={{ with: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={hanldeChange}>
            <Tab label="User Profile"></Tab>
            <Tab label="Counter"></Tab>
            <Tab label="Unknow "></Tab>
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <button
            className="btn btn-primary"
            onClick={() => userStore.updateUserName("FSoft Academy")}
          >
            Update username
          </button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <button
            className="btn btn-primary"
            onClick={() => userStore.updateUserName("FSoft Academy")}
          >
            Update username 1
          </button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Couter />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <button
            className="btn btn-primary"
            onClick={() => userStore.updateUserName("FSoft Academy")}
          >
            Update username 2
          </button>
        </CustomTabPanel>
      </Box>
      <Footer />
    </Fragment>
  );
};
interface TabPaneProps {
  children?: ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPaneProps) {
  const { children, value, index } = props;
  return (
    <div hidden={value != index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default MobxComponent;