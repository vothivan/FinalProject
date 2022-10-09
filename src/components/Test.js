import React from 'react';
import { Box, Container, Tab, Card, Avatar, Grid, Button, FormControl, Select, InputLabel } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { MenuItem } from 'material-ui';
import { ArrowDropDown } from '@material-ui/icons';


export default function Test() {
    const [value, setValue] = React.useState('learn');
    const handleChange = (event, newValue) => {
        setValue(newValue);
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
                                    <div lg={3} src={'https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg'}>
                                        <img alt="cropped" src={'https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg'} />
                                    </div>
                                </Tab>
                                <Tab lg={3} label="Shop" value="shop" />
                                <Tab lg={3} label="School" value="school" />
                                <Button lg={3}>
                                        <ul>Quản lý tài khoản
                                            <li>Tài khoản</li>
                                            <li>Hồ sơ của bạn</li>
                                            {/* <MenuItem>Cài Đặt</MenuItem>
                                            <MenuItem>Trợ giúp</MenuItem>
                                            <MenuItem>Đăng xuất</MenuItem> */}
                                        </ul>
                                </Button>
                            </TabList>
                        </Grid>
                        <TabPanel value="learn">
                            <img alt="cropped" src={'https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg'} />
                        </TabPanel>
                        <TabPanel value="shop">
                            Shop
                        </TabPanel>
                        <TabPanel value="school">
                            School
                        </TabPanel>
                    </TabContext>
                </Box>
            </Container>
        </Card>

    );
}