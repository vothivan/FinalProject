import React from 'react';
import { Box, Container, Tab, Card, Grid, Button, Menu, MenuItem } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';


export default function Test() {
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
        <Card style={{ alignItem: 'center', width: '800px', marginLeft: 'auto', marginRight: 'auto', height: '800px' }}>
            <Container>
                <Box>
                    <TabContext value={value}>
                        <Grid >
                            <TabList alignItems='center' onChange={handleChange}
                                textColor="primary"
                                variant="fullWidth"
                                aria-label="full width tabs example">
                                <Tab lg={3} label="Learn" value="learn">
                                </Tab>
                                <Tab lg={3} label="Shop" value="shop" />
                                <Tab lg={3} label="School" value="school" />
                                <div alignItem='center' >
                                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                        Open Menu
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
                </Box>
            </Container>
        </Card >

    );
}