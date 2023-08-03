import React from 'react'
import Navbar from '../Components/Navbar'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { color } from '@mui/system';
const DashBoard = () => {
    return (
        <div className='flexRow' style={{ height: '100%' }}>
            <Navbar style={{ width: '20%', overflowY: 'scroll', height: '100%' }} />
            <div style={{ width: '80%', overflowX: 'Hidden', backgroundColor: '#f7f6f9' }}>
                <div className='flexRow align-Items-center justifybetween' style={{ margin: '20px', borderRadius: '2rem',paddingInline:'20px 10px', backgroundColor: 'white' }}>
                    <TextField
                        sx={{ m: 1, width: '80ch'}}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"> <SearchIcon fontSize='small' /> </InputAdornment>,
                    }}></TextField>
                    <div className='flexRow'style={{ gap: '10px', marginRight: '10px' }}>
                        <a style={{color:"black",cursor:'pointer'}}>
                        <SettingsIcon color='dark'/>
                        </a>
                        <a style={{color:"black",cursor:'pointer'}}>
                        <NotificationsIcon color='dark'/>
                        </a>
                        <a style={{color:"black",cursor:'pointer'}}>
                        <AccountCircleIcon color='dark'/>
                        </a>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default DashBoard
