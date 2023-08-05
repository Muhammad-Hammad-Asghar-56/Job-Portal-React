import React, { useEffect, useState } from 'react';
import '../Style/Navbar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Material-UI icon
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; // Material-UI icon
import WorkIcon from '@mui/icons-material/Work';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import AttachmentIcon from '@mui/icons-material/Attachment';


const Sidebar = (props) => {
    const { classes, style } = props;
    const [dropdownOpen, setDropdownOpen] = useState({ 'users': false, 'company': false, 'candidate': false, 'jobs': false });

    const toggleDropdown = (e) => {
        const dropdownName = e.currentTarget.getAttribute('name'); // Get the name attribute
        setDropdownOpen((prevState) => ({
            ...prevState,
            [dropdownName]: !prevState[dropdownName],
        }));
    };

    useEffect(() => {
        console.log(dropdownOpen);
    }, [dropdownOpen]);

    return (
        <div className={`sidebar ${classes} flexCol justifybetween`} style={style}>
            <div style={{ marginLeft: '20px' }}>
                <div className='flexRow align-Items-center'>
                    <img src="" alt="Logo" style={{ marginRight: '20px' }} />
                    <h4>Company</h4>
                </div>
                <ul className="menu">
                    <li className="menu-item"> <div className='flexRow align-Items-center' style={{ gap: "10px" }}>
                        <HomeIcon color='dark' />
                        Dashboard
                    </div></li>
                    <li className="menu-item"><div className='flexRow align-Items-center' style={{ gap: "10px" }}>
                        <FolderIcon color='dark' />
                        Application
                    </div></li>
                    <li className="menu-item"><div className='flexRow align-Items-center' style={{ gap: "10px" }}>
                        <ChatIcon color='dark' />
                        Messages
                    </div></li>
                    <li className={`menu-item ${dropdownOpen.users ? 'dropdown-active' : ''}`}>
                        <div className="dropdown-toggle" name="users" onClick={toggleDropdown}>
                            <div className='flexRow align-Items-center' style={{ gap: "10px" }}>
                                <PeopleOutlineIcon color='dark' />
                                Users
                            </div>
                            {dropdownOpen.users ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                        </div>
                        {dropdownOpen.users && (
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">Subitem 1</li>
                                <li className="dropdown-item">Subitem 2</li>
                            </ul>
                        )}
                    </li>
                    <li className={`menu-item ${dropdownOpen.company ? 'dropdown-active' : ''}`}>
                        <div className="dropdown-toggle" name="company" onClick={toggleDropdown}>
                            <div className='flexRow align-Items-center' style={{ gap: "10px" }}>
                                <ApartmentIcon color='dark' />
                                Company
                            </div>
                            {dropdownOpen.company ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                        </div>
                        {dropdownOpen.company && (
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">Subitem 1</li>
                                <li className="dropdown-item">Subitem 2</li>
                            </ul>
                        )}
                    </li>
                    <li className={`menu-item ${dropdownOpen.candidate ? 'dropdown-active' : ''}`}>
                        <div className="dropdown-toggle" name="candidate" onClick={toggleDropdown}>
                            <div className='flexRow align-Items-center' style={{ gap: "10px" }}>
                                <AccountBoxIcon color='dark' />
                                Candidate
                            </div>
                            {dropdownOpen.candidate ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                        </div>
                        {dropdownOpen.candidate && (
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">Subitem 1</li>
                                <li className="dropdown-item">Subitem 2</li>
                            </ul>
                        )}
                    </li>
                    <li className={`menu-item ${dropdownOpen.jobs ? 'dropdown-active' : ''}`}>
                        <div className="dropdown-toggle" name="jobs" onClick={toggleDropdown}>

                            <div className='flexRow align-Items-center' style={{ gap: "10px" }}>
                                <WorkIcon color='dark' />
                                Jobs
                            </div> {dropdownOpen.jobs ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                        </div>
                        {dropdownOpen.jobs && (
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">Subitem 1</li>
                                <li className="dropdown-item">Subitem 2</li>
                            </ul>
                        )}
                    </li>
                    <li className="menu-item"><div className='flexRow align-Items-center' style={{ gap: "10px" }}>
                        <HelpOutlineIcon color='dark' />
                        Help                        </div></li>
                </ul>
            </div>
            <div style={{ margin: '0px 20px 10px 20px', padding: '10px 0px 0px 0px', borderTop: '1px solid #424242' }}>
                <ul className="menu">
                    <li className={`menu-item`}>
                        <div className='flexRow align-Items-center' style={{ gap: "10px", marginBottom: '20px' }}>
                            <SettingsIcon color='dark' />
                            Settings
                        </div>
                    </li>
                    <li className={`menu-item`}>
                        <div className='flexRow align-Items-center' style={{ gap: "10px" }}>
                            <AttachmentIcon color='dark' />
                            Licsense
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
