import React, { Component, useEffect, useState } from "react";
import { Button, Chip } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import CancelIcon from '@material-ui/icons/Cancel';
import api from '../../service/api';
import { Link, useParams } from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay';
import Dialog from "@material-ui/core/Dialog";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { redirectRouter } from "../../utils/common";
LoadingOverlay.propTypes = undefined

const btnStyle = { fontWeight: 'bold', fontSize: '17px', textTransform: 'none', height: '50px', borderRadius: '20px', marginBottom: '10px', width: '100%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', textAlign: 'center', alignItems: 'center' };

const correctAudio = new Audio("/audio/correct-6033.mp3");
const errorAudio = new Audio("/audio/windows-error-sound-effect.mp3");
const congraAudio = new Audio("/audio/congratulation.mp3");

export default function LearnGrammar(props) {

    const { id } = useParams();
    const [openDialog, setOpenDialog] = useState(false)

    const [countCorrect, setCountCorrect] = useState(0)

    const [questions, setQuestions] = useState([]);

    const [userChoose, setUserChoose] = useState(new Set());

    const [checking, setChecking] = useState(false);

    const [isCorrect, setIsCorrect] = useState(false);

    const [questionState, setQuestionState] = useState('start');

    const [serverAnswer, setServerAnswer] = useState({});

    const [questionIndex, setQuestionIndex] = useState(0);

    const question = { ...(questions[questionIndex] || {}) };

    const splitQuestion = (question.question || '').split(/{.+}/)

    useEffect(() => {
        api.get('/grammar/' + id)
            .then(res => setQuestions(res.data.questions))
    }, [])

    const onCheckAnswer = async (chooses) => {

        setChecking(true)
        const payload = {
            grammarQuestionId: question.id,
            answers: chooses
        }
        try {
            const { data } = await api.post("/grammar/check", payload);
            setIsCorrect(data.correct)
            setServerAnswer(data);
            if (data.correct) {
                setCountCorrect(countCorrect + 1)
                correctAudio.play();
            } else {
                errorAudio.play();
            }
        } finally {
            setQuestionState('end')
            setChecking(false)
        }
    }

    const checkAnswer = async (choose) => {
        setUserChoose([choose])
        onCheckAnswer([choose])
        if (questionIndex + 1 === questions.length) {
            {congraAudio.play()}
            setOpenDialog(true)

        };
    }
    const handleClose = () => {
        redirectRouter(props, '/learn/grammar/lesson_all/' + id)
    }

    const addChoose = choose => {
        setUserChoose(old => new Set([...old, choose]))
    }

    const onNextQuestion = () => {
        setQuestionState('start')
        setServerAnswer({})
        setUserChoose([])
        setQuestionIndex(id => id + 1)
    }

    return (
        <div className="root">
            <Link to={'/learn/grammar/lesson_all/' + id}>
                <CancelIcon />
            </Link>
            <div style={{ textAlign: 'center', fontWeight: '600' }}>
                <progress value={questionIndex + 1} max={questions.length} style={{ marginRight: '5px' }}></progress>
                <span>{questionIndex + 1}/{questions.length} questions</span>
            </div>
            <div style={{ margin: '30px auto 30px auto', textAlign: 'center', fontWeight: '600', color: '#a1a1a1' }}>{question.questionNative}</div>
            <h3 style={{ textAlign: 'center' }}>{question.contentNative}</h3>

            {/* ---------------------CHOOSE-------------------- */}
            {
                (question.type === 'WRITE') && <div>
                    <h3 style={{ textAlign: 'center', marginBottom: '50px' }}>
                        {splitQuestion[0]}
                        <Chip size="small" label={userChoose} variant="outlined" style={{ minWidth: 40 }} />
                        {splitQuestion[1]}
                    </h3>
                    {
                        (questionState === 'start') && (
                            <LoadingOverlay active={checking} spinner>
                                {question.choose?.map(choose => (
                                    <Button key={choose} style={btnStyle} onClick={() => checkAnswer(choose)} >
                                        {choose}
                                    </Button>
                                ))}
                            </LoadingOverlay>
                        )
                    }
                </div>

            }

            {/* ---------------------CHOOSE-------------------- */}
            {
                (question.type === 'SORT' && questionState === 'start') && (
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            <span style={{ marginRight: '10px', fontWeight: '600' }}>Answer:</span>
                            <div style={{ textAlign: 'center' }}>
                                {[...userChoose].map(a => (
                                    <Button size="small" variant="outlined" key={a}
                                        onClick={() => setUserChoose(old => {
                                            old.delete(a);
                                            return new Set(old);
                                        })}
                                        style={{ marginRight: '10px', marginBottom: '10px', borderRadius: '20px', textTransform: 'none', fontWeight: '600' }}
                                    >
                                        {a}
                                    </Button>
                                ))}
                            </div>

                        </div>
                        <LoadingOverlay active={checking} spinner>
                            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                {question.choose?.map(choose => (
                                    <Button variant="outlined" key={choose} onClick={() => addChoose(choose)} style={{ marginRight: '10px', marginBottom: '10px', borderRadius: '20px', textTransform: 'none', fontWeight: '600' }}>
                                        {choose}
                                    </Button>
                                ))}
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <Button
                                    disabled={userChoose.size === 0}
                                    onClick={() => onCheckAnswer([...userChoose])}
                                    variant="contained"
                                    style={{ background: 'linear-gradient(rgb(255, 235, 57) 0%, rgb(255, 223, 57) 100%)', alignItems: 'center', borderRadius: '20px', color: 'black', textTransform: 'none', fontWeight: '600', boxShadow: 'rgb(242 153 74) 0px 4px 0px' }}
                                >
                                    Submit
                                </Button>
                            </div>
                        </LoadingOverlay>
                    </div>
                )
            }
            {
                (questionState == 'end') &&
                <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'block' }}>
                        {isCorrect ? (
                            <div>
                                <CheckIcon style={{ color: 'green', fontSize: '40px' }} />
                                <div>Correct!</div>
                            </div>
                        ) : (
                            <div style={{ fontWeight: '600' }}>
                                <ClearIcon style={{ color: 'red', fontSize: '40px' }} />
                                <div>Incorrect!</div>
                                <div>Correct answer: {serverAnswer.correctAnswers}</div>
                            </div>
                        )}
                    </div>
                    <Button
                        onClick={onNextQuestion}
                        variant="contained"
                        style={{ background: 'linear-gradient(rgb(255, 235, 57) 0%, rgb(255, 223, 57) 100%)', alignItems: 'center', borderRadius: '20px', color: 'black', textTransform: 'none', fontWeight: '600', boxShadow: 'rgb(242 153 74) 0px 4px 0px', marginTop: '30px', fontSize: '20px' }}
                    >
                        Next
                    </Button>
                </div>
            }
            <Dialog
                aria-labelledby="customized-dialog-title"
                open={openDialog}
                style={{overflow: 'hidden'}}
                scroll='body'
            >
                <DialogContent style={{overflow: 'hidden', fontWeight: '600'}}>
                    Congratulations on completing {countCorrect}/10 questions
                    <div style={{height: '100%', width: '100%'}} class="pyro"><div class="before"></div><div class="after"></div></div>
                </DialogContent>
                <DialogActions style={{justifyContent: 'center'}}>
                    <Button onClick={handleClose} color="primary" style={{fontWeight: '600', fontSize: '18px'}}>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        overflow: 'hidden',
    }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
        overflow: 'hidden',
    }
}))(MuiDialogActions);