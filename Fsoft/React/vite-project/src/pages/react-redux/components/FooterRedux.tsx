import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const FooterRedux = () => {
  return (
    <AppBar position='fixed' sx={{top: 'auto', butom: 0}}>
        <Toolbar className='d-flex justify-content-between'>
            <Typography variant='h4'>Footer</Typography>
            <Typography variant='caption'>Counter Action:</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default FooterRedux