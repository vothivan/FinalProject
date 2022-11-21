import React, { Component } from "react";
import { Button } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import CancelIcon from '@material-ui/icons/Cancel';
import { redirectRouter } from "../../utils/common";
class LearnGrammar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'question',
            check: false,
            answer: '___'
        }
    }
    checkQuestion = (answer) => {
        this.setState({
            status: 'answer',
        })
        if (answer === true) {
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
                <Button onClick={() => redirectRouter(this.props, '/learn/word/list-word/' + this.props.match.params.id)}>
                    <CancelIcon />
                </Button>

                <div style={{ margin: '30px auto 30px auto', textAlign: 'center', fontWeight: '600', color: '#a1a1a1' }}>Choose the correct anwser!</div>
                <h3 style={{textAlign: 'center'}}>Tôi dậy sớm.</h3>
                <h4 style={{textAlign: 'center'}}>I {this.state.answer } early.</h4>
                <div>
                    <Button label="Get up"  onClick={() => this.checkQuestion(true)} style={{ fontWeight: 'bold', fontSize: '17px', textTransform: 'none', height: '50px', borderRadius: '20px', marginBottom: '10px', width: '100%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', textAlign: 'center', alignItems: 'center' }}>
                    </Button>
                    <Button onClick={() => this.checkQuestion(false)} style={{ fontWeight: 'bold', fontSize: '17px', textTransform: 'none', height: '50px', borderRadius: '20px', marginBottom: '10px', width: '100%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', textAlign: 'center', alignItems: 'center' }}>
                        Gets up
                    </Button>
                    <Button onClick={() => this.checkQuestion(false)} style={{ fontWeight: 'bold', fontSize: '17px', textTransform: 'none', height: '50px', borderRadius: '20px', marginBottom: '10px', width: '100%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', textAlign: 'center', alignItems: 'center' }}>
                        Gotten
                    </Button>
                </div>
                <div style={{ textAlign: 'center' }}>
                    {this.state.check === true ?
                        <div style={{ display: 'block' }}>
                            <CheckIcon style={{ color: 'green', fontSize: '40px' }} />
                            <div>Correct!</div>
                        </div> :
                        <div style={{ display: 'block' }}>
                            <ClearIcon style={{ color: 'red', fontSize: '40px' }} />
                            <div>Incorrect!</div>
                        </div>}
                </div>
            </div>
        )
    }
}
export default LearnGrammar;