import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const FooterMobX = () => {
  return (
    <AppBar position='fixed' color='secondary' sx={{top: 'auto', bottom: '0'}}>
        <Toolbar className='d-flex justify-content-between'>
            <Typography variant='h4'>Footer</Typography>
            <Typography variant='caption'>This is Footer</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default FooterMobX