import React, { Component } from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import { Button, Chip } from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { redirectRouter } from "../../utils/common";
import api from "../../service/api";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import MicIcon from '@material-ui/icons/Mic';

const correctAudio = new Audio("/audio/correct-6033.mp3");
const errorAudio = new Audio("/audio/windows-error-sound-effect.mp3");
const congraAudio = new Audio("/audio/congratulation.mp3");
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
            count_correct_answer: 0,
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
        const res = await api.get("/vocabulary/game/" + gameId);
        const list_exercise = res.data.exercise.sort(() => Math.random() - 0.5);
        const exercise_copy = list_exercise.filter((it, index) => index < 10);
        this.setState({ exercise: exercise_copy, question_length: exercise_copy.length })
    }
    openDialog = () => {
        this.setState({ open: true })
    }
    checkQuestion = async (answer, true_answer) => {
        const { id_exercise_current, exercise } = this.state;
        this.setState({
            status: 'answer',
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
                    count_correct_answer: this.state.count_correct_answer + 1,
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
            congraAudio.play()
        }
        this.setState({
            check_status: true,
        })
    }
    onNextQuestion = (id_exercise_current) => {
        this.setState({
            id_exercise_current: (id_exercise_current + 1),
            check_status: false,
        })
    }
    handleClose = () => {
        redirectRouter(this.props, '/learn/word/list-word/' + this.props.match.params.id)
    }
    dataPhone = (props) => {
        const chooses = props?.chooses || [];
        const {
            transcript,
            listening,
            resetTranscript,
            browserSupportsSpeechRecognition
        } = useSpeechRecognition();

        if (!browserSupportsSpeechRecognition) {
            return <span>Browser doesn't support speech recognition.</span>;
        }
        return (
            <div>
                {/* <p>Microphone: {listening ? "on" : "off"}</p> */}
                <h2>{props.question}</h2>
                <Button className="hover_record" style={{ marginBottom: '30px' }} onClick={SpeechRecognition.startListening}><MicIcon style={{ fontSize: '100px', color: '#099bd3' }} /></Button>
                <br></br>
                <b>Suggestions: </b>
                {chooses.map((item) => {
                    return <Chip style={{ marginBottom: '5px', marginRight: '5px', background: 'rgb(241, 136, 129)', fontSize: '11px', fontWeight: '600' }} size='small' label = {item.text}/>
                })}
                <br />
                <br/>
                <b>Your voice: {transcript}</b>
                <br></br>
                <br></br>
                <Button
                    onClick={(event) => {
                        const choose_id = (chooses.filter((item) => (item.text).toLowerCase() === transcript.toLowerCase())).map((it) => it.id)
                        return this.checkQuestion(choose_id[0] ? choose_id[0] : 1, props.id)
                    }}
                    variant="contained"
                    style={{ background: 'linear-gradient(rgb(255, 235, 57) 0%, rgb(255, 223, 57) 100%)', alignItems: 'center', borderRadius: '20px', color: 'black', textTransform: 'none', fontWeight: '600', boxShadow: 'rgb(242 153 74) 0px 4px 0px' }}
                >
                    Submit
                </Button>
            </div>
        );
    };
    render() {
        const { exercise, id_exercise_current } = this.state;
        console.log(exercise);
        const exercise_current = exercise[id_exercise_current];
        let chooses = [];
        let type = '';
        if (exercise_current?.type) {
            type = exercise[id_exercise_current]?.type;
        }
        if (exercise_current?.chooses) {
            chooses = exercise_current?.chooses;
        }
        const Dataphone = this.dataPhone;
        return (
            <div className="root" style={{ overflow: 'hidden hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button onClick={() => redirectRouter(this.props, '/learn/word/list-word/' + this.props.match.params.id)}>
                        <CancelIcon />
                    </Button>
                    <div style={{ textAlign: 'center', fontWeight: '600', marginLeft: '10px' }}>
                        <progress value={id_exercise_current + 1} max={exercise.length} style={{ marginRight: '5px' }}></progress>
                        <span>{id_exercise_current + 1}/{exercise.length} questions</span>
                    </div>
                </div>
                <div style={{ margin: '10px auto 10px auto', textAlign: 'center', fontWeight: '600', color: '#a1a1a1' }}>Choose the correct answer!</div>
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
                        (type === 'SPEAK' ?
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <Dataphone {...exercise_current} />
                            </div>
                            :
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
                        )
                    }
                </div>
                <div style={{ width: '100%', height: '100%' }}>
                    {this.state.open && <div class="pyro"><div class="before"></div><div class="after"></div></div>}
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Dialog
                        aria-labelledby="customized-dialog-title"
                        open={this.state.open}
                        style={{ overflowY: 'none' }}
                    >
                        <DialogContent style={{ fontWeight: '600' }}>
                            Congratulations on completing {this.state.count_correct_answer}/{exercise.length}
                        </DialogContent>
                        <DialogActions style={{ justifyContent: 'center' }}>
                            <Button onClick={() => this.handleClose()} color="primary" style={{ fontWeight: '600', fontSize: '18px' }}>
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>
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