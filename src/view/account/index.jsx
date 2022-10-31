import { Button } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import { redirectRouter } from '../../utils/common';
class Account extends Component {
    render () {
        return (
        <div>
            <Button onClick={() => redirectRouter(this.props, '/login')}>Log Out</Button>
        </div>
        )
    }
}

export default Account