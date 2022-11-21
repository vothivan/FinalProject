import React, { Component } from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import { Button } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { redirectRouter } from "../../utils/common";
import api from "../../service/api";
class LearnWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'question',
            check: false,
            gameId: '',
            exercise: [],
        }
    }
    async componentDidMount() {
        const vocabulary = await api.post("/vocabulary/start/" + this.props.match.params.id);
        if (vocabulary && vocabulary.status === 200) {
            this.setState({
                gameId: vocabulary.data.gameId,
            }, this.getExercise);
        }
    }

    getExercise = async () => {
        const gameId = this.state.gameId;
        const res = await api.get("/vocabulary/game/" + gameId)
        this.setState({ exercise: res.data.exercise })
    }
    checkQuestion = async (answer, true_answer) => {
        this.setState({
            status: 'answer',
        })
        const payload = {
            choose: answer,
            answerId: true_answer,
        }
        const res = await api.post("/learn/vocabulary-check", payload)
        if (res && res.status === 200) {
            this.setState({
                check: true,
            })
        } else this.setState({
            check: false,
        })
    }
    render() {
        const { exercise } = this.state;
        return (
            <div className="root">
                <Button onClick={() => redirectRouter(this.props, '/learn/word/list-word/' + this.props.match.params.id)}>
                    <CancelIcon />
                </Button>
                <div style={{ margin: '30px auto 30px auto', textAlign: 'center', fontWeight: '600', color: '#a1a1a1' }}>Choose the correct anwser!</div>
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
                <div>
                    {exercise.map((item, index) => {
                        if (item.submitAt === null) {
                            const chooses = item.chooses;
                            return (
                                <div style={{ width: '100%' }}>
                                    <TypeOfQuestion key={index} {...item} />
                                    {chooses.map((it) => {
                                        return (
                                            <Button onClick={(event) => this.checkQuestion(it.id, item.id)} style={{ fontWeight: 'bold', fontSize: '17px', textTransform: 'none', height: '50px', borderRadius: '20px', marginBottom: '10px', width: '100%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', textAlign: 'center', alignItems: 'center' }}>
                                                {it.text}
                                            </Button>
                                        )
                                    })}
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
};
function TypeOfQuestion({ type, question }) {
    const playAudio = (urlAudio) => {
        new Audio(urlAudio).play();
    }
    switch (type) {
        case 'TRANSLATE_EN_VI':
            return <h3>{question}</h3>
        case 'TRANSLATE_VI_EN':
            return <h3>{question}</h3>
        case 'IMAGE':
            return <img alt="" src={question} />
        case 'LISTEN':
            return (
                <Button onClick={() => playAudio(question)} >
                    <VolumeUpIcon style={{ color: 'rgb(70, 177, 255)' }} />
                </Button>
            )
        default:
            return <h3>{question}</h3>
    }
}
export default LearnWords;