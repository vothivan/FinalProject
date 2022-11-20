import React, { Component } from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import { Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
class LearnWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'question',
            check: false,
        }
    }
    checkQuestion = (answer) => {
        this.setState({
            status: 'answer',
        })
        if (answer === 'Airline') {
            this.setState({
                check: true,
            })
        } else this.setState({
            check: false,
        })
    }
    render() {
        return (
            <div className="root">
                <div>
                    <CancelIcon />
                </div>
                <img src="https://lmscdn.org/storage/RD9eBBBRFTtHByxMTD5ZHg0iZgMhRUYuWAIuUUYjWAoHOl0SYVgKMg==?v=244" style={{ width: '100%', height: '220px' }}>
                </img>
                <div style={{ margin: '30px auto 30px auto', textAlign: 'center', fontWeight: '600', color: '#a1a1a1' }}>Choose the correct anwser!</div>
                {this.state.status === 'question' ? (
                    <div>
                        <Button onClick={() => this.checkQuestion('Arrive')} style={{ fontWeight: 'bold', fontSize: '17px', textTransform: 'none', height: '50px', borderRadius: '20px', marginBottom: '10px', width: '100%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', textAlign: 'center', alignItems: 'center' }}>
                            Arrive
                        </Button>
                        <Button onClick={() => this.checkQuestion('Airline')} style={{ fontWeight: 'bold', fontSize: '17px', textTransform: 'none', height: '50px', borderRadius: '20px', marginBottom: '10px', width: '100%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', textAlign: 'center', alignItems: 'center' }}>
                            Airline
                        </Button>
                        <Button onClick={() => this.checkQuestion('Bag')} style={{ fontWeight: 'bold', fontSize: '17px', textTransform: 'none', height: '50px', borderRadius: '20px', marginBottom: '10px', width: '100%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', textAlign: 'center', alignItems: 'center' }}>
                            Bag
                        </Button>
                    </div>
                ) : (
                    <div style={{ textAlign: 'center'}}>
                        {this.state.check === true ?
                            <div style={{display: 'block'}}>
                                <CheckIcon style={{color: 'green', fontSize: '40px'}}/>
                                <div>Correct!</div>
                            </div> :
                            <div style={{display: 'block'}}>
                                <ClearIcon style={{color: 'red', fontSize: '40px'}}/>
                                <div>Incorrect!</div>
                            </div>}
                    </div>

                )
                }
            </div>
        )
    }
};
export default LearnWords;