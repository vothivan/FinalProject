import React, { Component } from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import { Button } from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { redirectRouter } from "../../utils/common";
import api from "../../service/api";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";


const correctAudio = new Audio("/audio/correct-6033.mp3");
const errorAudio = new Audio("/audio/windows-error-sound-effect.mp3");
class LearnWords extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'question',
            check: null,
            gameId: '',
            exercise: [],
            id_exercise_current: 0,
            check_status: false,
            question_length: 0,
            open: false,
        }
    }
    async componentDidMount() {
        const vocabulary = await api.post("/vocabulary/start/" + this.props.match.params.id);
        if (vocabulary && vocabulary.status === 200) {
            this.setState({
                gameId: vocabulary.data.gameId,
            }, () => this.getExercise(vocabulary.data.gameId));
        }
    }

    getExercise = async (gameId) => {
        const res = await api.get("/vocabulary/game/" + gameId)
        const exercise_copy = (res.data.exercise.filter((item) => item.submitAt === null)).filter((it, index) => index < 10);
        this.setState({ exercise: exercise_copy, question_length: exercise_copy.length })
    }
    openDialog = () => {
        this.setState({ open: true })
    }
    checkQuestion = async (answer, true_answer) => {
        const { id_exercise_current, exercise } = this.state;
        this.setState({
            status: 'answer',
            check_status: true,
        })
        const payload = {
            choose: answer,
            answerId: true_answer,
        }
        const res = await api.post("/learn/vocabulary-check", payload)
        if (res && res.status === 200) {
            if (Number(res.data.incrementRewards) !== 0) {
                this.setState({
                    check: true,
                });
                correctAudio.play();
            } else {
                this.setState({
                    check: false,
                });
                errorAudio.play();
            }

        };
        if ((id_exercise_current + 1) === exercise.length) {
            setTimeout(() => this.openDialog(), 1000);
        }

    }
    onNextQuestion = (id_exercise_current) => {
        this.setState({
            id_exercise_current: (id_exercise_current + 1),
            check_status: false,
        })
    }
    handleClose = () => {
        this.setState({ open: false })
        redirectRouter(this.props, '/learn/word/list-word/' + this.props.match.params.id)
    }
    render() {
        const { exercise, id_exercise_current } = this.state;
        const exercise_current = exercise[id_exercise_current];
        let chooses = [];
        if (exercise_current?.chooses) {
            chooses = exercise_current?.chooses;
        }
        return (
            <div className="root">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button onClick={() => redirectRouter(this.props, '/learn/word/list-word/' + this.props.match.params.id)}>
                        <CancelIcon />
                    </Button>
                    <div style={{ textAlign: 'center', fontWeight: '600', marginLeft: '10px' }}>
                        <progress value={id_exercise_current + 1} max={exercise.length} style={{ marginRight: '5px' }}></progress>
                        <span>{id_exercise_current + 1}/{exercise.length} questions</span>
                    </div>
                </div>
                <div style={{ margin: '10px auto 10px auto', textAlign: 'center', fontWeight: '600', color: '#a1a1a1' }}>Choose the correct anwser!</div>
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    {this.state.check_status === true &&
                        <div>
                            {this.state.check === true ?
                                <div style={{ display: 'block' }}>
                                    <CheckIcon style={{ color: 'green', fontSize: '40px' }} />
                                    <div>Correct!</div>
                                </div> :
                                <div style={{ display: 'block' }}>
                                    <ClearIcon style={{ color: 'red', fontSize: '40px' }} />
                                    <div>Incorrect!</div>
                                </div>}
                            <Button
                                disabled={id_exercise_current === 9}
                                onClick={() => this.onNextQuestion(id_exercise_current)}
                                variant="contained"
                                style={{ background: 'linear-gradient(rgb(255, 235, 57) 0%, rgb(255, 223, 57) 100%)', alignItems: 'center', borderRadius: '20px', color: 'black', textTransform: 'none', fontWeight: '600', boxShadow: 'rgb(242 153 74) 0px 4px 0px', marginTop: '30px', fontSize: '20px' }}
                            >
                                Next
                            </Button>
                        </div>

                    }


                </div>
                <div>
                    {this.state.check_status !== true &&
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            {exercise_current && <TypeOfQuestion {...exercise_current} />}
                            {chooses && chooses.map((it) => {
                                return (
                                    <Button onClick={(event) => this.checkQuestion(it.id, exercise_current.id)} style={{ fontWeight: 'bold', fontSize: '17px', textTransform: 'none', height: '50px', borderRadius: '20px', marginBottom: '10px', width: '100%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', textAlign: 'center', alignItems: 'center' }}>
                                        {it.text}
                                    </Button>
                                )
                            })}
                        </div>
                    }
                </div>
                <Dialog
                    onClose={() => this.handleClose()}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.open}
                >
                    <DialogContent>
                        You done 10 question!
                        Congratulation
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClose={() => this.handleClose()} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
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
            return <h1>{question}</h1>
        case 'TRANSLATE_VI_EN':
            return <h1>{question}</h1>
        case 'IMAGE':
            return <img alt="" src={question} style={{ width: '180px', height: '180px', marginBottom: '10px' }} />
        case 'LISTEN':
            return (
                <Button onClick={() => playAudio(question)} >
                    <VolumeUpIcon style={{ color: 'rgb(70, 177, 255)', width: '150px', height: '200px' }} />
                </Button>
            )
        default:
            return <h3>{question}</h3>
    }
}

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions);
export default LearnWords;