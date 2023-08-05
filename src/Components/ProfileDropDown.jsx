import React, { useState } from 'react';
import { Avatar, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import AvatarImg from '../Assets/Avatar.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ProfileDropDown = () => {
    const [open, setOpen] = useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Avatar ref={anchorRef} onClick={handleToggle} style={{ cursor: 'pointer' }}>
                <img src={AvatarImg} style={{ width: '100%', height: 'auto' }} alt="Avatar"></img>
            </Avatar>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                style={{ borderRadius: '20px', position: 'relative', left: '-10px' }}
                placement="bottom-end"
                modifiers={[
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 10], // Adjust the offset as needed
                        },
                    },
                ]}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow">
                                    <MenuItem onClick={handleClose}>
                                        <AccountCircleIcon />
                                        <span style={{ marginLeft: '10px' }}>Profile</span>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <AccountCircleIcon />
                                        <span style={{ marginLeft: '10px' }}>Profile</span>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <AccountCircleIcon />
                                        <span style={{ marginLeft: '10px' }}>Profile</span>
                                    </MenuItem>


                                    <MenuItem style={{ borderTop: '1px solid black' }} onClick={handleClose}>
                                        Logout
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

export default ProfileDropDown;
