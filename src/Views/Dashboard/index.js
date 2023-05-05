import WithNavBar from "../../Layouts/WithNavBar";
import { Container } from "react-bootstrap";
import { MdArrowBackIosNew } from "react-icons/md";
import { Text, View } from "@aws-amplify/ui-react";
import ButtonCTA from "../../components/ButtonCTA";
import CustomCard from "../../components/CustomCard";
import { BsQuestionCircleFill } from "react-icons/bs";
import QuestionDifficulty from "../../components/QuestionDifficulty";
import QuestionAnswer from "../../components/QuestionAnswer";
import CustomInput from "../../components/CustomInput";
import CustomDropDown from "../../components/CustomDropDown";
import { TiArrowUnsorted } from "react-icons/ti";
import CustomFooter from "../../components/CustomFooter";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomTopbar from "../../components/CustomTopbar";
import CustomMenubar from "../../components/CustomMenubar";
import * as Actions from "../../store/actions";
import { ReactTable } from "../../components";
import Moment from "react-moment";

import "./style.sass";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quizFinish, setQuizFinish] = useState({});
  const [quizId, setQuizId] = useState("");
  const [answerFilter, setAnswerFilter] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [topicsFilter, setTopicsFilter] = useState("");
  const [topicsFilterOptions, setTopicsFilterOptions] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [userQuizSections, setUserQuizSections] = useState([]);
  const [selectedQuizSection, setSelectedQuizSection] = useState("");
  const [sectionTotal, setSectionTotal] = useState(0);
  const [sectionCorrect, setSectionCorrect] = useState(0);
  const [sectionIncorrect, setSectionIncorrect] = useState(0);
  const [sectionOmitted, setSectionOmitted] = useState(0);
  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [quizFinishedState, quizFinishedId, hsptReloadRequired] = useSelector(
    (state) => {
      return [
        state.finishUserQuiz.quizFinishedData,
        state.finishUserQuiz.quizFinishedId,
        state.helper.hsptReloadRequired,
      ];
    }
  );

  useEffect(() => {
    if (hsptReloadRequired === false) {
      dispatch(Actions.hsptNeedsReload(true));
    }
  }, [hsptReloadRequired]);
  const columns = React.useMemo(() => [
    {
      Header: "Question",
      accessor: "question",
    },
    {
      Header: "Your Answer",
      accessor: "yourAnswer",
    },
    {
      Header: "Correct Answer",
      accessor: "correctAnswer",
    },
    {
      Header: "Time",
      accessor: "time",
    },
    {
      Header: "Difficulty",
      accessor: "difficulty",
    },
    {
      Header: "Question Topic",
      accessor: "questionTopic",
    },
    {
      Header: "Question Sub-Topic",
      accessor: "questionSubTopic",
    },
  ]);

  const options1 = [
    {
      text: "All",
      value: "",
    },
    {
      text: "Correct",
      value: "TRUE",
    },
    {
      text: "Wrong",
      value: "FALSE",
    },
  ];

  const options2 = [
    {
      text: "All",
      value: "",
    },
    {
      text: "Easy",
      value: "Easy",
    },
    {
      text: "Medium",
      value: "Medium",
    },
    {
      text: "Hard",
      value: "Hard",
    },
  ];

  useEffect(() => {
  }, [sectionTotal, sectionCorrect, sectionIncorrect, sectionOmitted]);

  // save started quiz data to usestate
  useEffect(() => {
    if (quizFinishedState) {
      console.log("Quiz finished state : ", quizFinishedState)
      var tempTopics = [
        {
          text: "All",
          value: "",
        },
      ];
      const allSections = [
        ...new Set(quizFinishedState?.sections?.map((item) => item?.title)),
      ];
      const unique = [
        ...new Set(
          quizFinishedState?.userAnswer?.map((item) => JSON.parse(item)?.topic)
        ),
      ];
      unique?.map((item) => {
        tempTopics.push({
          text: item,
          value: item,
        });
      });
      // setTopicsFilter(tempTopics);
      setTopicsFilterOptions(tempTopics);
      var temp = [];
      quizFinishedState?.userAnswer?.map((item) => {
        temp.push(JSON.parse(item));
      });
      const filteredSectionAnswers = temp.filter((item2) => {
        return item2["sectionId"] === quizFinishedState?.sections[0]?.id;
      });
      setQuizFinish(temp);
      // setFilteredResult(temp);
      console.log("Quiz finish state is ", quizFinishedState);
      setFilteredResult(filteredSectionAnswers);
      setUserQuizSections(quizFinishedState?.sections);
      setSelectedQuizSection(quizFinishedState?.sections?.[0]?.id);
      setSelectedQuiz(quizFinishedState);
    }
  }, [quizFinishedState]);

  useEffect(() => {
    if (quizFinishedId) {
      setQuizId(quizFinishedId);
    }
  }, [quizFinishedId]);

  useEffect(() => {
    if (quizId !== "") {
      dispatch(Actions.dispatchGetQuizScores(quizId));
    }
  }, [quizId]);

  // handling
  const onFilterChange = (e) => {
    if (e.target.name === "answer") {
      setAnswerFilter(e.target.value);
      var selectedOptions = [
        {
          filter: false,
          key: "correct",
          value: e.target.value,
        },
        {
          filter: false,
          key: "difficulty",
          value: difficultyFilter,
        },
        {
          filter: false,
          key: "topic",
          value: topicsFilter,
        },
      ];
      if (e.target.value !== "") {
        selectedOptions[0].filter = true;
      }
      if (difficultyFilter !== "") {
        selectedOptions[1].filter = true;
      }
      if (topicsFilter !== "") {
        selectedOptions[2].filter = true;
      }
      // var fil = quizFinish;
      var fil = quizFinish.filter((item2) => {
        return item2["sectionId"] === selectedQuizSection;
      });
      selectedOptions.map((item) => {
        if (item.filter) {
          fil = fil.filter((item2) => {
            return item2[`${item.key}`] === item.value;
          });
        }
      });
      setFilteredResult(fil);
    } else if (e.target.name === "difficulty") {
      setDifficultyFilter(e.target.value);
      var selectedOptions = [
        {
          filter: false,
          key: "correct",
          value: answerFilter,
        },
        {
          filter: false,
          key: "difficulty",
          value: e.target.value,
        },
        {
          filter: false,
          key: "topic",
          value: topicsFilter,
        },
      ];
      if (answerFilter !== "") {
        selectedOptions[0].filter = true;
      }
      if (e.target.value !== "") {
        selectedOptions[1].filter = true;
      }
      if (topicsFilter !== "") {
        selectedOptions[2].filter = true;
      }
      // var fil = quizFinish;
      var fil = quizFinish.filter((item2) => {
        return item2["sectionId"] === selectedQuizSection;
      });
      selectedOptions.map((item) => {
        if (item.filter) {
          fil = fil.filter((item2) => {
            return item2[`${item.key}`] === item.value;
          });
        }
      });
      setFilteredResult(fil);
    } else if (e.target.name === "topic") {
      setTopicsFilter(e.target.value);
      var selectedOptions = [
        {
          filter: false,
          key: "correct",
          value: answerFilter,
        },
        {
          filter: false,
          key: "difficulty",
          value: difficultyFilter,
        },
        {
          filter: false,
          key: "topic",
          value: e.target.value,
        },
      ];
      if (answerFilter !== "") {
        selectedOptions[0].filter = true;
      }
      if (difficultyFilter !== "") {
        selectedOptions[1].filter = true;
      }
      if (e.target.value !== "") {
        selectedOptions[2].filter = true;
      }
      // var fil = quizFinish;
      var fil = quizFinish.filter((item2) => {
        return item2["sectionId"] === selectedQuizSection;
      });
      selectedOptions.map((item) => {
        if (item.filter) {
          fil = fil.filter((item2) => {
            return item2[`${item.key}`] === item.value;
          });
        }
      });
      setFilteredResult(fil);
    }
  };
  let data = [];
  useEffect(() => {
    data = [];
    if (filteredResult) {
      console.log("User quiz state", quizFinishedState)
      filteredResult.map((item, key) => {

        data.push({
          question: key + 1,
          yourAnswer: <span className={"answer-icon"}>{item.answer}</span>,
          correctAnswer: (
            <QuestionAnswer
              answer={
                item.answer == "skip"
                  ? "review"
                  : item.correct === "TRUE"
                  ? "correct"
                  : "review"
              }
              userQuizId={''} 
              questionId={item?.questionId}
            />
          ),
          time: new Date(item.time * 1000).toISOString().substr(14, 5),
          difficulty: <QuestionDifficulty level={item.difficulty} />,
          questionTopic: item.topic,
          questionSubTopic: item.subtopic,
        });
      });
      setTableData(data);
    }
  }, [filteredResult]);

  useEffect(() => {
    if (selectedQuizSection) {

      setAnswerFilter("");
      setDifficultyFilter("");
      setTopicsFilter("");
      const filteredSectionAnswers = quizFinish.filter((item2) => {
        return item2["sectionId"] === selectedQuizSection;
      });
      var tempCorrect = 0;
      var tempIncorrect = 0;
      var tempOmitted = 0;
      filteredSectionAnswers?.map((item) => {
        if (item?.answer === "skip") {
          tempOmitted++;
          tempIncorrect++;
        } else if (item.correct === "TRUE") {
          tempCorrect++;
        } else if (item.correct === "FALSE") {
          tempIncorrect++;
        }
      });
      setSectionTotal(filteredSectionAnswers?.length);
      setSectionCorrect(tempCorrect);
      setSectionIncorrect(tempIncorrect);
      setSectionOmitted(tempOmitted);
      setFilteredResult(filteredSectionAnswers);
    }
  }, [selectedQuizSection, quizFinish]);

  const onClearFilters = () => {
    setAnswerFilter("");
    setDifficultyFilter("");
    setTopicsFilter("");
    const filteredSectionAnswers = quizFinish.filter((item2) => {
      return item2["sectionId"] === selectedQuizSection;
    });
    setFilteredResult(filteredSectionAnswers);
  };

  return (
    <WithNavBar IsLoggedIn={true}>
      <CustomTopbar
        name={
          selectedQuiz?.quiz?.alias
            ? selectedQuiz?.quiz?.alias
            : selectedQuiz?.quiz?.title
        }
        finishedAt={selectedQuiz?.finishedAt}
        quizType={selectedQuiz?.quiz?.type}
      />
      <CustomMenubar active={"questions"} quizType={selectedQuiz?.quiz?.type} />
      <Container className={"dashboard-div"}>
        <div className="content">
          <ul className="nav nav-tabs mb-4 section-tabs">
            {userQuizSections?.map((item, key) => {
              return (
                <li key={key} className="nav-item">
                  <button
                    className={`nav-link ${
                      selectedQuizSection == item?.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedQuizSection(item?.id)}
                  >
                    {item?.title}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="content-header">
            Questions Overview <BsQuestionCircleFill />
          </div>
          <div className="content-body">
            <div className="tab-content">
              {userQuizSections?.map((item, key) => {
                return (
                  <div
                    key={key}
                    className={`tab-pane fade ${
                      selectedQuizSection == item?.id ? "show active" : ""
                    }`}
                  >
                    <div className="inner-cards">
                      <div className="cards-row">
                        <CustomCard
                          title={sectionTotal}
                          description={"Total Questions"}
                        />
                        <CustomCard
                          title={sectionCorrect}
                          description={"Correct Answers"}
                        />
                        <CustomCard
                          title={sectionIncorrect}
                          description={"Incorrect Answers"}
                        />
                        <CustomCard
                          title={sectionOmitted}
                          description={"Omitted Answers"}
                        />
                      </div>
                      <h4 style={{ marginLeft: "20px", marginTop: "30px" }}>
                        Test Questions key
                      </h4>
                      <div className="question-keys">
                        <div className="difficulty-levels">
                          <QuestionDifficulty level="Easy" showText={true} />
                          <QuestionDifficulty level="Medium" showText={true} />
                          <QuestionDifficulty level="Hard" showText={true} />
                        </div>
                        <div className="answer-levels">
                          <QuestionAnswer answer="correct" showText={true} />
                          <QuestionAnswer answer="incorrect" showText={true} />
                          <QuestionAnswer answer="skipped" showText={true} />
                        </div>
                      </div>
                      <h5 style={{ marginLeft: "30px", marginTop: "40px" }}>
                        Read Test Questions
                      </h5>
                      <Text
                        className="text-secondary"
                        style={{
                          marginLeft: "30px",
                          marginTop: "10px",
                          marginBottom: "30px",
                        }}
                      >
                        The questions in your score report may not be in same
                        order as you saw on test day
                      </Text>
                    </div>
                    <div className="filter-row">
                      <div className={"filter-col"}>
                        <CustomDropDown
                          label="Response"
                          name={"answer"}
                          onFilterChange={onFilterChange}
                          options={options1}
                          value={answerFilter}
                        />
                      </div>
                      <div className={"filter-col"}>
                        <CustomDropDown
                          label="Difficulty"
                          name={"difficulty"}
                          onFilterChange={onFilterChange}
                          options={options2}
                          value={difficultyFilter}
                        />
                      </div>
                      <div className={"filter-col"}>
                        <CustomDropDown
                          label="Subscores/Cross-Test Scores"
                          name={"topic"}
                          options={topicsFilterOptions}
                          onFilterChange={onFilterChange}
                          value={topicsFilter}
                        />
                      </div>
                      <div className={"filter-col2"}>
                        <ButtonCTA
                          height="60px"
                          marginTop="25px"
                          width="100%"
                          label={"Clear all filters"}
                          onClick={onClearFilters}
                          purple
                        />
                      </div>
                    </div>
                    <div className="table-responsive dashboardTable">
                      <ReactTable
                        columns={columns}
                        data={tableData}
                        pagination={false}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <CustomFooter />
    </WithNavBar>
  );
};

export default Dashboard;
