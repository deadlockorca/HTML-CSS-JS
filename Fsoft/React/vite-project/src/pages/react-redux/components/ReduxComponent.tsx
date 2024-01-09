import React, { Fragment, ReactNode, SyntheticEvent, useState } from 'react'
import HeaderRedux from './HeaderRedux'
import FooterRedux from './FooterRedux'
import { Box, Tab, Tabs } from '@mui/material'
import CounterRedux from './CounterRedux'
import AcademyInfo from './AcademyInfo'

const ReduxComponent = () => {
    const [value, setValue] = useState<number>(0);
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
  return (
    <Fragment>
        <HeaderRedux />
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label='Counter'></Tab>
                    <Tab label='INFO'></Tab>
                </Tabs>
            </Box>
            <CustomTabPanel index={0} value={value}><CounterRedux /></CustomTabPanel>
            <CustomTabPanel index={1} value={value}><AcademyInfo /></CustomTabPanel>
        </Box>
        <FooterRedux />
    </Fragment>
  )
}

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

export default ReduxComponent