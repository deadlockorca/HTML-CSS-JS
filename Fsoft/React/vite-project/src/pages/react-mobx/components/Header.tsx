import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const HeaderMobX = () => {
  return (
    <AppBar position='static'>
        <Toolbar className='d-flex justify-content-between'>
            <Typography variant='h4'></Typography>
            <Typography variant='caption'>Username: FPT - <strong>17 Duy Tan</strong></Typography>
        </Toolbar>
    </AppBar>
  )
}

export default HeaderMobX