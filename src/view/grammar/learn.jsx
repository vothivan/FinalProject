import React, { Component, useEffect, useState } from "react";
import { Button, Chip } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import CancelIcon from '@material-ui/icons/Cancel';
import api from '../../service/api';
import { Link, useParams } from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay';
LoadingOverlay.propTypes = undefined

const btnStyle = { fontWeight: 'bold', fontSize: '17px', textTransform: 'none', height: '50px', borderRadius: '20px', marginBottom: '10px', width: '100%', boxShadow: 'rgb(0 0 0 / 15%) 0px 4px 32px', textAlign: 'center', alignItems: 'center' };

const correctAudio = new Audio("/audio/correct-6033.mp3");
const errorAudio = new Audio("/audio/windows-error-sound-effect.mp3");

export default function LearnGrammar(props) {

    const { id } = useParams();

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
            <div>
                <progress value={questionIndex + 1} max={questions.length}></progress>
                {questionIndex + 1}/{questions.length} questions
            </div>
            <div style={{ margin: '30px auto 30px auto', textAlign: 'center', fontWeight: '600', color: '#a1a1a1' }}>{question.questionNative}</div>
            <h3 style={{ textAlign: 'center' }}>{question.contentNative}</h3>

            {/* ---------------------CHOOSE-------------------- */}
            {
                (question.type === 'WRITE') && <div>
                    <h4 style={{ textAlign: 'center' }}>
                        {splitQuestion[0]}
                        <Chip size="small" label={userChoose} variant="outlined" style={{ minWidth: 40 }} />
                        {splitQuestion[1]}
                    </h4>
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
                        <div>
                            Answer: {[...userChoose].map(a => (
                                <Button size="small" variant="outlined" key={a}
                                    onClick={() => setUserChoose(old => {
                                        old.delete(a);
                                        return new Set(old);
                                    })}
                                >
                                    {a}
                                </Button>
                            ))}
                        </div>
                        <LoadingOverlay active={checking} spinner>
                            <div>
                                {question.choose?.map(choose => (
                                    <Button variant="outlined" key={choose} onClick={() => addChoose(choose)} >
                                        {choose}
                                    </Button>
                                ))}
                            </div>
                            <div>
                                <Button variant="outlined" disabled={userChoose.size == 0} onClick={() => onCheckAnswer([...userChoose])} >
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
                            <div>
                                <ClearIcon style={{ color: 'red', fontSize: '40px' }} />
                                <div>Incorrect!</div>
                                <div>Correct answer: {serverAnswer.correctAnswers}</div>
                            </div>
                        )}
                    </div>
                    <Button variant="outlined" onClick={onNextQuestion}>Next</Button>
                </div>
            }
        </div>
    )
}