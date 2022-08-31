import React from 'react';
import { Avatar, Container, Tab, Card, Grid, Button, Menu, MenuItem } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';


export default function Learn() {
    const [value, setValue] = React.useState('learn');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Grid>
            <Container>
                <TabContext value={value}>
                    <Card>
                        <Grid >
                            <TabList alignItems='center' onChange={handleChange}
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example">
                                <Button lg={3}><Tab label={<img src='https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg' />} value="learn"/>
                                    <text>Học</text>
                                </Button>
                                <Button lg={3}><Tab label={<img src='https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg' />} value="shop" />
                                    <text>Cửa hàng</text>
                                </Button>
                                <Button lg={3}><Tab label={<img src='https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg' />} value="school" />
                                    <text>Xem thêm</text>
                                </Button>
                                <div lg={3}>
                                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                        <Avatar alt="Remy Sharp" src="https://simg-ssl.duolingo.com/avatars/989534973/O_Iq9fnCY-/medium" />
                                        {/* <img src='https://simg-ssl.duolingo.com/avatars/989534973/O_Iq9fnCY-/medium' alt="Avatar" /> */}
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}>

                                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                    </Menu>
                                </div>
                            </TabList>

                        </Grid>
                    </Card>
                    <TabPanel value="learn">
                        <img alt="cropped" src={'https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg'} />
                    </TabPanel>
                    <TabPanel value="shop">
                        <img alt="cropped" src={'https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg'} />
                    </TabPanel>
                    <TabPanel value="school">
                        <img alt="cropped" src={'https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg'} />
                    </TabPanel>
                </TabContext>
            </Container>
        </Grid>

    );
}