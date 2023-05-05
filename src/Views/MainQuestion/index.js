import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../store/actions'
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Images, CheckboxGreen, RadioButtonWithoutSkip, ButtonCTA, ToggleButtonGreen, RadioButtonList, RadioButtonWithSkip } from '../../components';
import Layouts from '../../Layouts'
import './style.sass'
import { useNavigate } from 'react-router-dom';

export default function MainQuestion() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userId, setUserId] = useState('')
    const [hideAnswerSheet, setHideAnswerSheet] = useState(false)
    const [autoAdvanceQuestion, setAutoAdvanceQuestion] = useState(false)
    const [chooseOption, setChooseOption] = useState('')
    const [questionNumber, setQuestionNumber] = useState(0)
    const [newQuestionNumber, setNewQuestionNumber] = useState(0)
    const [quizAnswerLength, setQuizAnswerLength] = useState(0)
    const [submittedQuizData, setSubmittedQuizData] = useState([])
    const [userStartedQuizData, setUserStartedQuizData] = useState([])
    const [userFinishedQuizData, setUserFinishedQuizData] = useState([])
    const [allQuestionsData, setAllQuestionsData] = useState([])
    const [answerSubmission, setAnswerSubmission] = useState([])

    // get started quiz data and save it in constant
    const [
        startedQuizAllData,
        finisheddQuizAllData,
        retriveUserData,
        currentUser,
        allQuestionList,
        allQuizAnswersData

    ] = useSelector((state) => {
        return [
            state.startUserQuiz.quizStartedData,
            state.finishUserQuiz.quizFinishedData,
            state.currentUserAllData.saveAllDataofLoggedinUser,
            state.auth.cognito.username,
            state.byQuestionID.questionListWithSectionID,
            state.userQuizAllDataByUserQuizID.quizAnswersListData
        ]
    });

    // save started quiz data to usestate
    useEffect(() => {
        const userStartedQuiz = startedQuizAllData
        setUserStartedQuizData(userStartedQuiz)
    }, [startedQuizAllData])

    // save finished quiz data to usestate
    useEffect(() => {
        const userFinishedQuiz = finisheddQuizAllData
        setUserFinishedQuizData(userFinishedQuiz)
    }, [finisheddQuizAllData])

    // save user id to usestate
    useEffect(() => {
        if(currentUser) {
            setUserId(currentUser)
        }
    }, [currentUser])

    // send question id to get all questions
    useEffect(() => {
        const questionData = {
            id: '1b897e09-647e-4836-8afc-bebdc51f810a'
        }
        dispatch(Actions.questionList(questionData));
    }, [])


    // save all questions data related things into usestates
    useEffect(() => {
        setAllQuestionsData(allQuestionList)
    }, [allQuestionList])


    // send user quiz id to get all quiz answers submitted by user to fill answer sheet
    useEffect(() => {
        const userQuizId = {
            id: userStartedQuizData?.body?.data?.id
        }
        // dispatch(Actions.listQuizAnswers(userQuizId));
    }, [])

    // save all quiz answers related things to usestates
    useEffect(() => {
        setSubmittedQuizData(allQuizAnswersData)
        setQuizAnswerLength(allQuizAnswersData?.length)
        setNewQuestionNumber(allQuizAnswersData?.length)
        const newQuestionNumberTemp = allQuizAnswersData?.length
        // if (newQuestionNumberTemp !== 0) {
        //     setQuestionNumber(newQuestionNumberTemp)
        // }
        if (newQuestionNumberTemp !== 0) {
            setQuestionNumber(newQuestionNumberTemp)
            if (newQuestionNumberTemp === submittedQuizData.length) {
                setQuestionNumber(submittedQuizData.length - 1)
            }
        }
    }, [allQuizAnswersData])
    // user selected quiz answer all data
    const saveQuizAnswer = (currentAnswer, QuestionNumber) => {
        setAnswerSubmission({
            answer: currentAnswer,
            questionId: allQuestionsData[QuestionNumber].id,
            userId: userId ? userId : retriveUserData,
            userQuizId: userStartedQuizData?.body?.data?.id,
            quizId: allQuestionsData[QuestionNumber].quizId,
            time: 60
        })
    }

    // set and update quenstion number in useEffect
    useEffect(() => {
    }, [questionNumber])

    // next button click
    const NextQuestion = () => {
        if (questionNumber < allQuestionsData?.length) {
            if (chooseOption !== '') {
                if (submittedQuizData[questionNumber]?.answer !== undefined) {
                    let listItems = [...submittedQuizData]
                    let currentItem = { ...submittedQuizData[questionNumber] }
                    currentItem.answer = answerSubmission.answer
                    listItems[questionNumber] = currentItem
                    setSubmittedQuizData(listItems)
                    dispatch(Actions.submitQuizAnswerUpdate(answerSubmission));
                }
                else {
                    setSubmittedQuizData([...submittedQuizData, answerSubmission])
                    dispatch(Actions.submitQuizAnswer(answerSubmission));
                }
                if (questionNumber < allQuestionsData?.length - 1) {
                    setQuestionNumber(questionNumber + 1)
                    setChooseOption('')
                }
            }
        }
    }

    // previous button click
    const previousQuestion = () => {
        if (questionNumber === 0) {
            setChooseOption('')
        }
        else if (questionNumber > 0) {
            if (chooseOption !== '') {
                if (submittedQuizData[questionNumber]?.answer !== undefined) {
                    let listItems = [...submittedQuizData]
                    let currentItem = { ...submittedQuizData[questionNumber] }
                    currentItem.answer = answerSubmission.answer
                    listItems[questionNumber] = currentItem
                    setSubmittedQuizData(listItems)
                    dispatch(Actions.submitQuizAnswerUpdate(answerSubmission));
                }
                else {
                    setSubmittedQuizData([...submittedQuizData, answerSubmission])
                    dispatch(Actions.submitQuizAnswer(answerSubmission));
                }
            }
            setQuestionNumber(questionNumber - 1)
            setChooseOption('')
        }
    }

    // start quiz function
    const startQuiz = () => {
        const userQuizStart = {
            userId: userId ? userId : retriveUserData,
            quizId: allQuestionsData[0]?.quizId
        }
        dispatch(Actions.quizStart(userQuizStart));
        if (userStartedQuizData?.body?.status === 'Failed') {
            toast.error(userStartedQuizData?.body?.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    // finish quiz function
    const finishQuiz = () => {
        const userQuizFinish = {
            id: userStartedQuizData?.body?.data?.id,
            userId: userId ? userId : retriveUserData,
            status: 'FINISHED'
        }
        dispatch(Actions.quizFinish(userQuizFinish));
        navigate('/dashboard')
        if (userFinishedQuizData?.body?.status === 'Failed') {
            toast.error(userFinishedQuizData?.body?.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if (userFinishedQuizData?.body?.status === 'Success') {
            setUserStartedQuizData([{ body: undefined }])
            toast.success(userFinishedQuizData?.body?.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <Layouts
            questionTimer
            children={
                <>
                    {userStartedQuizData.body === undefined
                        ?
                        <Container>
                            <ButtonCTA
                                className={'mt-3'}
                                label={'Start Quiz'}
                                darkBlue
                                onClick={startQuiz}
                            />
                        </Container>
                        :
                        <div className="container-fluid main-question-section">
                            <div className="row">
                                <div className="col-md-6 mt-4">
                                    <div className="questionSide p-sm-3 ms-sm-4">
                                        {allQuestionsData[questionNumber]?.passage?.direction ?
                                            <div className='questionLabel mb-4' dangerouslySetInnerHTML={{ __html: allQuestionsData[questionNumber]?.passage?.direction }} />
                                            : null
                                        }
                                        {allQuestionsData[questionNumber]?.passage?.attribution ?
                                            <div className='questionPassage' dangerouslySetInnerHTML={{ __html: allQuestionsData[questionNumber]?.passage?.attribution }} />
                                            : null
                                        }
                                        {allQuestionsData[questionNumber]?.passage?.body ?
                                            <div
                                                className='questionPassage'
                                                dangerouslySetInnerHTML={{ __html: allQuestionsData[questionNumber]?.passage?.body }} />
                                            : null
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6 mt-4">
                                    <div className="answerSide p-sm-3 me-sm-4">
                                        <div className="flagQuestion d-flex justify-content-between align-items-center">
                                            <div>
                                                <img src={Images.flag} alt="" className="img-fluid" />
                                                <span className='questionLabel mb-4'>Flag Question</span>
                                            </div>
                                            <div>
                                                <CheckboxGreen
                                                    label={'Hide Answer Sheet'}
                                                    onChange={() => setHideAnswerSheet(!hideAnswerSheet)}
                                                />
                                            </div>
                                        </div>
                                        <div className="chooseMCQsSide mt-4">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="RadioButtonGreen d-flex align-items-center">
                                                    <RadioButtonWithoutSkip
                                                        label={'A'}
                                                        value={'A'}
                                                        id={'chooseA'}
                                                        checked={chooseOption === `A ${questionNumber}`}
                                                        onChange={() => {
                                                            setChooseOption(`A ${questionNumber}`);
                                                            saveQuizAnswer('A', questionNumber)
                                                        }}
                                                    />
                                                    <RadioButtonWithoutSkip
                                                        label={'B'}
                                                        value={'B'}
                                                        id={'chooseB'}
                                                        checked={chooseOption === `B ${questionNumber}`}
                                                        onChange={() => {
                                                            setChooseOption(`B ${questionNumber}`);
                                                            saveQuizAnswer('B', questionNumber)
                                                        }}
                                                    />
                                                    <RadioButtonWithoutSkip
                                                        label={'C'}
                                                        value={'C'}
                                                        id={'chooseC'}
                                                        checked={chooseOption === `C ${questionNumber}`}
                                                        onChange={() => {
                                                            setChooseOption(`C ${questionNumber}`);
                                                            saveQuizAnswer('C', questionNumber)
                                                        }}
                                                    />
                                                    <RadioButtonWithoutSkip
                                                        label={'D'}
                                                        value={'D'}
                                                        id={'chooseD'}
                                                        checked={chooseOption === `D ${questionNumber}`}
                                                        onChange={() => {
                                                            setChooseOption(`D ${questionNumber}`);
                                                            saveQuizAnswer('D', questionNumber)
                                                        }}
                                                    />
                                                </div>
                                                <ButtonCTA
                                                    label={'Skip'}
                                                    lightBlue
                                                    className={'d-none d-sm-flex'}
                                                    onClick={() => {
                                                        setChooseOption(`Skip ${questionNumber}`);
                                                        saveQuizAnswer('Skip', questionNumber)
                                                    }}
                                                />
                                            </div>
                                            <div className="d-sm-flex justify-content-between align-items-center mt-4">
                                                <div className='d-flex'>
                                                    <ButtonCTA
                                                        label={'Previous'}
                                                        darkBlue
                                                        onClick={previousQuestion}
                                                    />
                                                    <ButtonCTA
                                                        label={'Next'}
                                                        lightBlue
                                                        className={'ms-3'}
                                                        onClick={() => NextQuestion()}
                                                    />
                                                    <ButtonCTA
                                                        label={'Skip'}
                                                        lightBlue
                                                        className={'d-sm-none ms-3'}
                                                        onClick={() => {
                                                            setChooseOption(`Skip ${questionNumber}`);
                                                            saveQuizAnswer('A', questionNumber)
                                                        }}
                                                    />
                                                </div>
                                                {allQuestionsData.length === submittedQuizData.length ?
                                                    <div className='mt-3 mt-sm-0'>
                                                        <ButtonCTA
                                                            label={'Finsih Quiz'}
                                                            darkBlue
                                                            onClick={finishQuiz}
                                                        />
                                                    </div>
                                                    :
                                                    <div className='mt-3 mt-sm-0'>
                                                        <ToggleButtonGreen
                                                            label={'Auto-Advance Question'}
                                                            checked={autoAdvanceQuestion}
                                                            onChange={() => { setAutoAdvanceQuestion(!autoAdvanceQuestion) }}
                                                        />
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div className="paraQuestionSide mt-4">
                                            <div className="paraQuestion">
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="questionLabel me-3">{questionNumber + 1}</span>
                                                    <span
                                                        className='questionPassage'
                                                        dangerouslySetInnerHTML={{ __html: allQuestionsData[questionNumber]?.title }}
                                                    />
                                                </div>
                                                {/* <ol className=''>
                                                <li
                                                    className='questionPassage'
                                                    dangerouslySetInnerHTML={{ __html: allQuestionsData[questionNumber]?.title }}
                                                />
                                            </ol> */}
                                                <ul className='list-unstyled ps-4 MCQsListStyle'>
                                                    <li>
                                                        <RadioButtonList
                                                            label={allQuestionsData[questionNumber]?.answer.choices[0]}
                                                            name={'radioList'}
                                                            id={'radioListA'}
                                                            checked={chooseOption === `A ${questionNumber}`}
                                                            onChange={() => {
                                                                setChooseOption(`A ${questionNumber}`);
                                                                saveQuizAnswer('A', questionNumber)
                                                            }}
                                                        />
                                                    </li>
                                                    <li>
                                                        <RadioButtonList
                                                            label={allQuestionsData[questionNumber]?.answer.choices[1]}
                                                            name={'radioList'}
                                                            id={'radioListB'}
                                                            checked={chooseOption === `B ${questionNumber}`}
                                                            onChange={() => {
                                                                setChooseOption(`B ${questionNumber}`);
                                                                saveQuizAnswer('B', questionNumber)
                                                            }}
                                                        />
                                                    </li>
                                                    <li>
                                                        <RadioButtonList
                                                            label={allQuestionsData[questionNumber]?.answer.choices[2]}
                                                            name={'radioList'}
                                                            id={'radioListC'}
                                                            checked={chooseOption === `C ${questionNumber}`}
                                                            onChange={() => {
                                                                setChooseOption(`C ${questionNumber}`);
                                                                saveQuizAnswer('C', questionNumber)
                                                            }}
                                                        />
                                                    </li>
                                                    <li>
                                                        <RadioButtonList
                                                            label={allQuestionsData[questionNumber]?.answer.choices[3]}
                                                            name={'radioList'}
                                                            id={'radioListD'}
                                                            checked={chooseOption === `D ${questionNumber}`}
                                                            onChange={() => {
                                                                setChooseOption(`D ${questionNumber}`);
                                                                saveQuizAnswer('D', questionNumber)
                                                            }}
                                                        />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {!hideAnswerSheet ?
                                            <div className="answerSheet mt-4">
                                                <div className="radioButtonWithSkipList">
                                                    <div className="row m-0">
                                                        <div className="col-xl-6">
                                                            {allQuestionsData.map((answerSheetData, key) => (
                                                                <>
                                                                    {key + 1 <= (allQuestionsData.length) / 2 ?
                                                                        <div className="RadioButtonGreenWithSkip d-flex align-items-center">
                                                                            <span className="questionLabel me-3">{answerSheetData?.orderId}</span>
                                                                            <RadioButtonWithSkip
                                                                                label={'A'}
                                                                                name={`chooseMCQList ${key}`}
                                                                                id={`chooseAA ${key}`}
                                                                                disabled={questionNumber !== key}
                                                                                // checked={chooseOption === `A ${key}`}
                                                                                checked={submittedQuizData[key]?.answer === 'A'}
                                                                                onChange={() => {
                                                                                    setChooseOption(`A ${questionNumber}`);
                                                                                    saveQuizAnswer('A', questionNumber)
                                                                                }}
                                                                            />
                                                                            <RadioButtonWithSkip
                                                                                label={'B'}
                                                                                name={`chooseMCQList ${key}`}
                                                                                id={`chooseBB ${key}`}
                                                                                disabled={questionNumber !== key}
                                                                                // checked={chooseOption === `B ${key}`}
                                                                                checked={submittedQuizData[key]?.answer === 'B'}
                                                                                onChange={() => {
                                                                                    setChooseOption(`B ${questionNumber}`);
                                                                                    saveQuizAnswer('B', questionNumber)
                                                                                }}
                                                                            />
                                                                            <RadioButtonWithSkip
                                                                                label={'C'}
                                                                                name={`chooseMCQList ${key}`}
                                                                                id={`chooseCC ${key}`}
                                                                                disabled={questionNumber !== key}
                                                                                // checked={chooseOption === `C ${key}`}
                                                                                checked={submittedQuizData[key]?.answer === 'C'}
                                                                                onChange={() => {
                                                                                    setChooseOption(`C ${questionNumber}`);
                                                                                    saveQuizAnswer('C', questionNumber)
                                                                                }}
                                                                            />
                                                                            <RadioButtonWithSkip
                                                                                label={'D'}
                                                                                name={`chooseMCQList ${key}`}
                                                                                id={`chooseDD ${key}`}
                                                                                disabled={questionNumber !== key}
                                                                                // checked={chooseOption === `D ${key}`}
                                                                                checked={submittedQuizData[key]?.answer === 'D'}
                                                                                onChange={() => {
                                                                                    setChooseOption(`D ${questionNumber}`);
                                                                                    saveQuizAnswer('D', questionNumber)
                                                                                }}
                                                                            />
                                                                            <RadioButtonWithSkip
                                                                                skipLabel
                                                                                label={'Skip'}
                                                                                name={`chooseMCQList ${key}`}
                                                                                id={`chooseSkip ${key}`}
                                                                                disabled={questionNumber !== key}
                                                                                // checked={chooseOption === `Skip ${key}`}
                                                                                checked={submittedQuizData[key]?.answer === 'Skip'}
                                                                                onChange={() => {
                                                                                    setChooseOption(`Skip ${questionNumber}`);
                                                                                    saveQuizAnswer('Skip', questionNumber)
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        : null
                                                                    }
                                                                </>
                                                            ))}
                                                        </div>
                                                        <div className="col-xl-6">
                                                            {allQuestionsData.map((answerSheetData, key) => (
                                                                <>
                                                                    {key + 1 > (allQuestionsData.length) / 2 ?
                                                                        <div className="RadioButtonGreenWithSkip d-flex align-items-center">
                                                                            <span className="questionLabel me-3">{answerSheetData?.orderId}</span>
                                                                            <RadioButtonWithSkip
                                                                                label={'A'}
                                                                                name={`chooseMCQList ${key}`}
                                                                                id={`chooseAA ${key}`}
                                                                                disabled={questionNumber !== key}
                                                                                // checked={chooseOption === `A ${key}`}
                                                                                checked={submittedQuizData[key]?.answer === 'A'}
                                                                                onChange={() => {
                                                                                    setChooseOption(`A ${questionNumber}`);
                                                                                    saveQuizAnswer('A', questionNumber)
                                                                                }}
                                                                            />
                                                                            <RadioButtonWithSkip
                                                                                label={'B'}
                                                                                name={`chooseMCQList ${key}`}
                                                                                id={`chooseBB ${key}`}
                                                                                disabled={questionNumber !== key}
                                                                                // checked={chooseOption === `B ${key}`}
                                                                                checked={submittedQuizData[key]?.answer === 'B'}
                                                                                onChange={() => {
                                                                                    setChooseOption(`B ${questionNumber}`);
                                                                                    saveQuizAnswer('B', questionNumber)
                                                                                }}
                                                                            />
                                                                            <RadioButtonWithSkip
                                                                                label={'C'}
                                                                                name={`chooseMCQList ${key}`}
                                                                                id={`chooseCC ${key}`}
                                                                                disabled={questionNumber !== key}
                                                                                // checked={chooseOption === `C ${key}`}
                                                                                checked={submittedQuizData[key]?.answer === 'C'}
                                                                                onChange={() => {
                                                                                    setChooseOption(`C ${questionNumber}`);
                                                                                    saveQuizAnswer('C', questionNumber)
                                                                                }}
                                                                            />
                                                                            <RadioButtonWithSkip
                                                                                label={'D'}
                                                                                name={`chooseMCQList ${key}`}
                                                                                id={`chooseDD ${key}`}
                                                                                disabled={questionNumber !== key}
                                                                                // checked={chooseOption === `D ${key}`}
                                                                                checked={submittedQuizData[key]?.answer === 'D'}
                                                                                onChange={() => {
                                                                                    setChooseOption(`D ${questionNumber}`);
                                                                                    saveQuizAnswer('D', questionNumber)
                                                                                }}
                                                                            />
                                                                            <RadioButtonWithSkip
                                                                                skipLabel
                                                                                label={'Skip'}
                                                                                name={`chooseMCQList ${key}`}
                                                                                id={`chooseSkip ${key}`}
                                                                                disabled={questionNumber !== key}
                                                                                // checked={chooseOption === `Skip ${key}`}
                                                                                checked={submittedQuizData[key]?.answer === 'Skip'}
                                                                                onChange={() => {
                                                                                    setChooseOption(`Skip ${questionNumber}`);
                                                                                    saveQuizAnswer('Skip', questionNumber)
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        : null
                                                                    }
                                                                </>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </>
            }
        />
    )
}