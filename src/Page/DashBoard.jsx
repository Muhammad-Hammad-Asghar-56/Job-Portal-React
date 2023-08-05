import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { color } from '@mui/system';
import ProfileDropDown from '../Components/ProfileDropDown';
import '../Style/Dashboard.css'
const DashBoard = () => {
    const [isHovered, setIsHovered] = useState({ 'TotalApp': false, 'ActiveJobs': false, 'shortList': false, 'profileView': false });
    const handleOnHover = (e) => {
        console.log(e.currentTarget.getAttribute('name'));
        setIsHovered({ ...isHovered, [e.currentTarget.getAttribute('name')]: true });
    };

    const handleoffHover = (e) => {
        setIsHovered({ ...isHovered, [e.currentTarget.getAttribute('name')]: false });
    };
    return (
        <div className='flexRow' style={{ height: '100%' }}>
            <Navbar style={{ width: '20%', overflowY: 'scroll', height: '100%' }} />
            {/* <div style={{ width: '80%', overflowX: 'Hidden', backgroundColor: '#f7f6f9' }}> */}
            <div style={{ width: '80%', overflowX: 'Hidden', backgroundColor: '#f7f6f0' }}>
                <div className='flexRow align-Items-center justifybetween' style={{ margin: '20px', borderRadius: '2rem', paddingInline: '20px 10px', backgroundColor: 'white' }}>
                    <TextField
                        sx={{ m: 1, width: '80ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"> <SearchIcon fontSize='small' /> </InputAdornment>,
                        }}></TextField>
                    <div className='flexRow align-Items-center' style={{ gap: '10px', marginRight: '10px' }}>
                        <a style={{ color: "black", cursor: 'pointer' }}>
                            <SettingsIcon color='dark' />
                        </a>
                        <a style={{ color: "black", cursor: 'pointer' }}>
                            <NotificationsIcon color='dark' />
                        </a>
                        <ProfileDropDown />
                    </div>
                </div>
                <div className="content" style={{ color: 'black', fontSize: '25px', fontWeight: '600', marginTop: '50px', marginLeft: '30px' }}>
                    DashBoard
                    <div className="rectangles-1 flexRow">
                        
                    <div className="rectangle1" name='TotalApp' style={{
                            width: '7cm', height: '4cm', backgroundColor: 'white', marginRight: '2rem', borderRadius: '10px',
                            backgroundColor: isHovered.TotalApp ? 'lightgreen' : 'white', color: isHovered.TotalApp ? 'white' : 'black'
                        }} onMouseEnter={handleOnHover}
                            onMouseLeave={handleoffHover} >
                            <div className="rectangle1-content">
                                <p style={{ textAlign: 'center' }}>Total Application</p>
                                <p style={{ textAlign: 'center' }}>2250</p>
                            </div>
                        </div>
                        <div className="rectangle1" name='shortList' style={{
                            width: '7cm', height: '4cm', backgroundColor: 'white', marginRight: '2rem', borderRadius: '10px',
                            backgroundColor: isHovered.shortList ? 'lightgreen' : 'white', color: isHovered.shortList ? 'white' : 'black'
                        }} onMouseEnter={handleOnHover}
                            onMouseLeave={handleoffHover} >
                            <div className="rectangle1-content">
                                <p style={{ textAlign: 'center' }}>Shortlisted</p>
                                <p style={{ textAlign: 'center' }}>2250</p>
                            </div>
                        </div>

                        <div className="rectangle1" name='ActiveJobs' style={{
                            width: '7cm', height: '4cm', backgroundColor: 'white', marginRight: '2rem', borderRadius: '10px',
                            backgroundColor: isHovered.ActiveJobs ? 'lightgreen' : 'white', color: isHovered.ActiveJobs ? 'white' : 'black'
                        }} onMouseEnter={handleOnHover}
                            onMouseLeave={handleoffHover}>
                            <div className="rectangle1-content">
                                <p style={{ textAlign: 'center' }}>Active Jobs</p>
                                <p style={{ textAlign: 'center' }}>23</p>
                            </div>
                        </div>
                        <div className="rectangle1" name='profileView' style={{
                            width: '7cm', height: '4cm', backgroundColor: 'white', marginRight: '2rem', borderRadius: '10px',
                            backgroundColor: isHovered.profileView ? 'lightgreen' : 'white', color: isHovered.profileView ? 'white' : 'black'
                        }} onMouseEnter={handleOnHover}
                            onMouseLeave={handleoffHover} >
                            <div className="rectangle1-content">
                                <p style={{ textAlign: 'center' }}>Profiles Viewed</p>
                                <p style={{ textAlign: 'center' }}>7000</p>
                            </div>
                        </div>
                    </div>
                    <div className="rectangles-2" style={{ display: 'flex', marginTop: '30px', }}>
                        <div className="rectangle2" style={{ width: '12cm', height: '5cm', backgroundColor: 'white', marginRight: '2rem' }}>
                            <div className="rectangle2-content">
                                <h5 style={{ marginLeft: '30px', marginTop: '10px' }}>All Jobs</h5>
                                <p style={{ fontSize: '15px', textAlign: 'center' }}>You can see all previous posted jobs & <b>You can<br></br>
                                    Repost Job from here.</b> Click here to know more...</p>
                                <button style={{ height: "30px", marginLeft: '30px', backgroundColor: 'white', borderRadius: '5px', cursor: 'pointer' }}> Know More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default DashBoard
