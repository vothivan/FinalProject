import React from 'react';
import { Component } from "react";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
class Index extends Component {
    render() {
        return (
            <Grid maxWidth>
                <Box width={'60%'} >
                    <div color="red" ></div>
                </Box>
                <Box width={'40%'}>
            <div color="blue"></div>
                </Box>
            </Grid>

        );
    };
};
export default Index;