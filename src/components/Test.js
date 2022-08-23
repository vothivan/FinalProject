import React from 'react';
import { Box, Container, Tab, Card, Avatar, Grid } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';

export default function Test() {
    const [value, setValue] = React.useState('learn');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Card style={{alignItem: 'center', width: '800px', marginLeft: 'auto', marginRight: 'auto', height: '800px'}}>
            <Container>
                <Box>
                    <TabContext value={value}>
                        <Box >
                            <TabList alignItems='center' onChange={handleChange}>
                                <Tab lg={3} label="Learn" value="learn" src={'https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg'}>
                                </Tab>
                                <Tab lg={3} label="Shop" value="shop" />
                                <Tab lg={3} label="School" value="school" />
                                <Grid lg={3}><Avatar alt="Remy Sharp" src="https://simg-ssl.duolingo.com/avatars/989534973/O_Iq9fnCY-/medium" /></Grid>
                            </TabList>
                        </Box>
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