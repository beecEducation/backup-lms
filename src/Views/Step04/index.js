import "./style.sass";

import { Row, Col, Container, Button } from "react-bootstrap";

import GreenTick from "../../assets/img/icons/greeenTick.svg";
import DullTick from "../../assets/img/icons/dullTick.svg";
import Youtube from "../../assets/img/icons/youtubeVedio.svg";
import QuizOption from "../../components/QuizOption";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Step4({ updateCount }) {
  const [question, setQuestion] = useState({});
  const navigate = useNavigate();
  const [questionState, selectedAnswer] = useSelector((state) => {
    return [state.review.singleQuestion, state.review.selectedAnswer];
  });

  useEffect(() => {
    if (questionState) {
      setQuestion(questionState);
    }
  }, [questionState]);

  const [passage, setPassage] = useState(`
  <div class="stimulus_reference " xmlns="http://www.imsglobal.org/xsd/apip/apipv1p0/qtisection/imsqti_v2p1">
	<div class="passage ">
		<div class="prose style:2 ">
			<div class="title ">
				<p class="title_line passage-title "><strong><span class="bold">Librarians Help Navigate in the Digital Age</span></strong></p>
			</div>

			<p class="passage_para ">In recent years, public libraries in the United States
				have experienced <a class="question-marker" id="question-1" name="question-1">1</a> <u>reducing</u> in their operating funds
				due to cuts imposed at the federal, state, and local
				government levels. <a class="question-marker" id="question-2" name="question-2">2</a> <u>However</u> , library staffing has been
				cut by almost four percent since 2008, and the demand
				for librarians continues to decrease, even though half of
				public libraries report that they have an insufficient
				number of staff to meet their patrons' needs.
				Employment in all job sectors in the United States is
				projected to grow by fourteen percent over the next decade, yet the expected growth rate for librarians is
				predicted to be only seven percent, or half of the overall
				rate. This trend, combined with the increasing
				accessibility of information via the Internet, <a class="question-marker" id="question-3" name="question-3">3</a> <u>has </u> led
				some to claim that librarianship is in decline as a
				profession. As public libraries adapt to rapid
				technological advances in information distribution,
				librarians’ roles are actually expanding. </p> 
				<p class="passage_para ">The share of library materials that is in nonprint
					formats
				<a class="question-marker" id="question-4" name="question-4">4</a> is increasing steadily; in 2010, at least
				18.5 million e-books were available <a class="question-marker" id="question-5" name="question-5">5</a> <u>for them to
circulate.</u> As a result, librarians must now be proficient
curators of electronic information, compiling, <a class="question-marker" id="question-6" name="question-6">6</a> <u>catalog</u> , and updating these collections. But perhaps
even more importantly, librarians function as first
responders for their communities' computer needs. Since one of the fastest growing library services is public access
computer use, there is great demand for computer
instruction. <a class="question-marker" id="question-7" name="question-7">7</a> <u>In fact, librarians’ training now includes
courses on research and Internet search methods. Many
of whom teach classes in Internet navigation, database
and software use, and digital information literacy</u> . While
these classes are particularly helpful to young students
developing basic research skills, <a class="question-marker" id="question-8" name="question-8">8</a> <u>but</u> adult patrons can
also benefit from librarian assistance in that they can acquire
job-relevant computer skills. <a class="question-marker" id="question-9" name="question-9">9</a><u>Free to all who utilize
their services</u>, public libraries and librarians are especially
valuable, because they offer free resources that may be
difficult to find elsewhere, such as help with online job searches as well as résumé and job material development.
An overwhelming number of public libraries also report
that they provide help with electronic government
resources related to income taxes, <a class="question-marker" id="question-10" name="question-10">10</a> law troubles, and
retirement programs </p>
<p class="passage_para ">In sum, the Internet does not replace the need for
librarians, and librarians are hardly obsolete. <a class="question-marker" id="question-11" name="question-11">11</a> Like
books, librarians have been around for a long time, but
the Internet is extremely useful for many types of
research.</p>
		</div>
	</div>
</div>
`);
  const [choices, setChoices] = useState([
    `<p class="choice_paragraph ">NO CHANGE</p>`,
    `<p class="choice_paragraph ">Consequently,</p>`,
    `<p class="choice_paragraph ">Nevertheless,</p>`,
    `<p class="choice_paragraph ">Previously,</p>`,
  ]);

  return (
    <>
      <Container>
        <Row style={{ marginRight: "0" }}>
          <Col md={6}>
            <div className="stepBox">
              <div style={{ display: "flex" }}>
                <h1>1.</h1>
                <div>
                  <h1
                    className="stepBoxText"
                    dangerouslySetInnerHTML={{
                      __html: '',
                    }}
                  ></h1>
                  {/* <div style={{ display: "flex" }}>
                    <input
                      name="option"
                      style={{ width: "20px", height: "20px" }}
                      type="radio"
                    />
                    <p style={{ marginLeft: "8px" }}>Checkbox List </p>
                  </div>

                  <div style={{ display: "flex" }}>
                    <input
                      name="option"
                      style={{ width: "20px", height: "20px" }}
                      type="radio"
                    />
                    <p style={{ marginLeft: "8px" }}>Checkbox List </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input
                      name="option"
                      style={{ width: "20px", height: "20px" }}
                      type="radio"
                    />
                    <p style={{ marginLeft: "8px" }}>Checkbox List </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <input
                      name="option"
                      style={{ width: "20px", height: "20px" }}
                      type="radio"
                    />
                    <p style={{ marginLeft: "8px" }}>Checkbox List </p>
                  </div> */}
                  <div style={{ display: "flex" }}>
                    <QuizOption
                      name={"question_option"}
                      label={"A"}
                      value={choices[0]}
                      checked={questionState?.answer?.isCorrect.toUpperCase()}
                      changeChecked={""}
                      // saveQuizAnswer={saveQuizAnswer}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <QuizOption
                      name={"question_option"}
                      label={"B"}
                      value={choices[1]}
                      checked={questionState?.answer?.isCorrect.toUpperCase()}
                      changeChecked={""}
                      // saveQuizAnswer={saveQuizAnswer}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <QuizOption
                      name={"question_option"}
                      label={"C"}
                      value={choices[2]}
                      checked={questionState?.answer?.isCorrect.toUpperCase()}
                      changeChecked={""}
                      // saveQuizAnswer={saveQuizAnswer}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <QuizOption
                      name={"question_option"}
                      label={"D"}
                      value={choices[3]}
                      checked={questionState?.answer?.isCorrect.toUpperCase()}
                      changeChecked={""}
                      // saveQuizAnswer={saveQuizAnswer}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="passageBox">
              <h1 className="passageBoxHeading">
                Questions 1-11 are based on the following passage
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: passage,
                }}
              ></div>
            </div>
          </Col>
          <Col style={{ background: " #FFFFFF", textAlign: "center" }} md={6}>
            <div className="categoryBox">
              {/* <img width={"100%"} src={'Youtube'} /> */}
              <video
                width={"100%"}
                controls
                src="https://beec-lms-videos.s3.amazonaws.com/sat-sats/test-2/writing/question-2-solution.mp4"
              ></video>
              <br />
              <br />
              <br />
              <br />
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Button
                  style={{
                    background: "#4EA2E2",
                    border: "none",
                    padding: "10px 50px",
                  }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  I Understand this question
                </Button>
                <br />
                <Button
                  style={{
                    background: "#4EA2E2",
                    border: "none",
                    padding: "10px 50px",
                  }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  I need help with this question
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
