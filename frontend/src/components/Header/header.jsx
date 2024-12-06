import React from 'react';
import { Button, Typography, IconButton, Box } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import logo from '../../assets/LOGO.png';

const Header = ({ onClickCategory }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: '8px 20px',
                backgroundColor: '#e6e6e6',
                color: '#c83131',
            }}
        >
            {/* Logo Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 65 }}>
                <img src={logo} alt="Logo" style={{ height: '70px', width: 'auto' }} />
            </Box>

            {/* Navbar Section */}
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
                <ul
                    style={{
                        display: 'flex',
                        listStyleType: 'none',
                        margin: 0,
                        padding: 0,
                    }}
                >
                    <li style={{ margin: '9px 20px' }}>
                        <Button
                            variant="text"
                            onClick={() => onClickCategory('technology')}
                            sx={{
                                color: '#191919',
                                fontSize: 20,
                                fontWeight: 'bold',
                                textTransform: 'none',
                                '&:hover': {
                                    color: '#aa3030',
                                },
                            }}
                        >
                            Information Technology
                        </Button>
                    </li>
                    <li style={{ margin: '9px 20px' }}>
                        <Button
                            variant="text"
                            onClick={() => onClickCategory('business')}
                            sx={{
                                color: '#191919',
                                fontSize: 20,
                                fontWeight: 'bold',
                                textTransform: 'none',
                                '&:hover': {
                                    color: '#aa3030',
                                },
                            }}
                        >
                            Business
                        </Button>
                    </li>
                    <li style={{ margin: '9px 20px' }}>
                        <Button
                            variant="text"
                            onClick={() => onClickCategory('education')}
                            sx={{
                                color: '#191919',
                                fontSize: 20,
                                fontWeight: 'bold',
                                textTransform: 'none',
                                '&:hover': {
                                    color: '#aa3030',
                                },
                            }}
                        >
                            Education
                        </Button>
                    </li>
                </ul>
            </Box>

            {/* Login Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 'bold' }}>
                <IconButton sx={{ marginRight: 1 }}>
                    <AccountCircle fontSize="large" />
                </IconButton>
                <Typography variant="body1" sx={{ color: '#191919' }}>
                    Login
                </Typography>
            </Box>
        </Box>
    );
};

export default Header;
