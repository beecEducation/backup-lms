import "./style.sass";

import { Row, Col, Container, Button } from "react-bootstrap";

import GreenTick from "../../assets/img/icons/greeenTick.svg";
import DullTick from "../../assets/img/icons/dullTick.svg";
import QuizOption from "../../components/QuizOption";
import { useEffect, useState } from "react";
import * as Actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Step1({ updateCount }) {
  const dispatch = useDispatch();
  const [occupancyChecked, setOccupancyChecked] = useState("C");
  const [typeAnswer, setTypeAnswer] = useState(null);
  const [question, setQuestion] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("Correct");
  const [writingTags, setWritingTags] = useState([
    "Sentence formation",
    "Introductions, conclusions, and transitions",
    "Interpreting words and phrases in context",
    "Focus",
    "Possessive nouns and pronouns",
    "Agreement",
    "Support",
    "Syntax",
    "Concision",
  ]);
  const [questionState] = useSelector((state) => {
    return [state.review.singleQuestion];
  });

  const changeOccupancyChecked = (val) => {
    setOccupancyChecked(val);
  };

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
  const categories = [
    "Writing Tags",
    "Sentence formation",
    "Introductions, conclusions, and transitions",
    "Interpreting words and phrases in context",
    "Focus",
    "Possessive nouns and pronouns",
    "Agreement",
    "Support",
    "Syntax",
    "Concision",
  ];

  useEffect(() => {
    dispatch(
      Actions.dispatchGetQuestion("0df07014-af88-40a0-8306-4ca632a377bd")
    );
    dispatch(Actions.saveSelectedAnswer(""));
  }, []);

  useEffect(() => {
    if (questionState) {
      console.log("QS", questionState);
      setQuestion(questionState);
    }
  }, [questionState]);

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
                      __html: question?.title,
                    }}
                  ></h1>

                  <div style={{ display: "flex" }}>
                    <QuizOption
                      name={"question_option"}
                      label={"A"}
                      value={choices[0]}
                      checked={occupancyChecked}
                      changeChecked={""}
                      // saveQuizAnswer={saveQuizAnswer}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <QuizOption
                      name={"question_option"}
                      label={"B"}
                      value={choices[1]}
                      checked={occupancyChecked}
                      changeChecked={""}
                      // saveQuizAnswer={saveQuizAnswer}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <QuizOption
                      name={"question_option"}
                      label={"C"}
                      value={choices[2]}
                      checked={occupancyChecked}
                      changeChecked={""}
                      // saveQuizAnswer={saveQuizAnswer}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <QuizOption
                      name={"question_option"}
                      label={"D"}
                      value={choices[3]}
                      checked={occupancyChecked}
                      changeChecked={""}
                      // saveQuizAnswer={saveQuizAnswer}
                    />
                  </div>
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
                </div>
              </div>
            </div>
            <div className="passageBox">
              <h1 className="passageBoxHeading">
                Questions 1-11 are based on the following passage
              </h1>
              {/* <p
                dangerouslySetInnerHTML={{
                  __html: question?.passage?.attribution,
                }}
              ></p> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: passage,
                }}
              ></div>
              {/* <ol>
                <li>
                  Once when I was a little boy I received as a gift a toy cement
                  mixer. It was made of wood except for its wheels—axles—which,
                  as I remember, were thin metal rods.
                </li>
                <br />
                <li>
                  It was the same overlarge miniature as many other toy
                  vehicles—about the size of a breadbox. It weighed three or
                  four pounds. It was a simple toy—no batteries. It had a
                  colored rope, with a yellow handle, and you held the handle
                  and walked pulling the cement mixer behind you—rather like a
                  wagon, although it was nowhere near the size of a wagon.
                </li>
                <br />
                <li>
                  I liked the cement mixer and played with it as much as or more
                  than I played with the other toy vehicles I owned. At some
                  point, several weeks or months after the holidays, however, my
                  biological parents led me to believe that it was a magic
                  and/or highly unusual cement mixer. Probably my mother told me
                  this in a moment of adult boredom or whimsy, and then my
                  father came home from work and joined in, also in a whimsical
                  way. The magic—which my mother likely reported to me from her
                  vantage on our living room’s sofa, while watching me pull the
                  cement mixer around the room by its rope, idly asking me if I
                  was aware that it had magical properties, no doubt making
                  sport of me in the bored half-cruel way that adults sometimes
                  do with small children, playfully telling them things that
                  they pass off to themselves as “tall tales” or “childlike
                  inventions,” unaware of the impact those tales may have (since
                  magic is a serious reality for small children). The “magic”
                  was that, unbeknown to me, as I happily pulled the cement
                  mixer behind me, the mixer’s main cylinder or drum—the thing
                  that, in a real cement mixer, mixes the cement; I do not know
                  the actual word for it—rotated, went around and around on its
                  horizontal axis, just as the drum on a real cement mixer does.
                  It did this, my mother said, only when the mixer was being
                  pulled by me and only, she stressed, when I wasn’t looking.
                  She insisted on this part, and my father later backed her up:
                  the magic was not just that the drum of a solid wood object
                  without batteries rotated but that it did so only when
                  unobserved, stopping whenever observed. If, while pulling, I
                  turned to look, my parents somberly maintained, the drum
                  magically ceased its rotation. How was this? I never, even for
                  a moment, doubted what they’d told me. This is why it is that
                  adults and even parents can, unwittingly, be cruel: they
                  cannot imagine doubt’s complete absence. They have forgotten.
                </li>
                <br />
                <li>
                  The point was that months were henceforward spent by me trying
                  to devise ways to catch the drum rotating. Evidence bore out
                  what they had told me: turning my head obviously and unsubtly
                  around always stopped the rotation of the drum. I also tried
                  sudden whirls. I tried having someone else pull the cement
                  mixer. I tried incremental turns of the head while pulling
                  (“incremental” meaning turning my head at roughly the rate of
                  a clock’s minute hand). I tried peering through a keyhole as
                  someone else pulled the cement mixer. Even turning my head at
                  the rate of the hour hand. I never doubted—it didn’t occur to
                  me. The magic was that the mixer seemed always to know. I
                  tried mirrors—first pulling the cement mixer straight toward a
                  mirror, then through rooms that had mirrors at the periphery
                  of my vision, then past mirrors hidden such that there was
                  little chance that the cement mixer could even “know” that
                  there was a mirror in the room. My strategies became very
                  involved. I was in kindergarten and home half the day. The
                  seriousness with which I tried must have caused my parents no
                  little anguish of conscience.{" "}
                </li>
              </ol> */}
            </div>
          </Col>

          <Col style={{ background: " #FFFFFF" }} md={6}>
            <div className="categoryBox">
              <div>
                <h1 className="categoryBoxText">
                  Which category or does this question fall into?
                </h1>
                <br />
                <div style={{ display: "flex" }}>
                  <input
                    name="select"
                    style={{ width: "20px", height: "20px" }}
                    type="radio"
                    value={categories[0]}
                    onChange={(e) => {
                      setTypeAnswer(e.target.value);
                    }}
                  />
                  <p style={{ marginLeft: "8px" }}>Writing Tags </p>
                </div>

                <div style={{ display: "flex" }}>
                  <input
                    name="select"
                    style={{ width: "20px", height: "20px" }}
                    type="radio"
                    value={categories[1]}
                    onChange={(e) => {
                      setTypeAnswer(e.target.value);
                    }}
                  />
                  <p style={{ marginLeft: "8px" }}>Sentence formation</p>
                </div>
                <div style={{ display: "flex" }}>
                  <input
                    name="select"
                    style={{ width: "20px", height: "20px" }}
                    type="radio"
                    value={categories[2]}
                    onChange={(e) => {
                      setTypeAnswer(e.target.value);
                    }}
                  />
                  <p style={{ marginLeft: "8px" }}>
                    Introductions, conclusions, and transitions
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <input
                    name="select"
                    style={{ width: "20px", height: "20px" }}
                    type="radio"
                    value={categories[3]}
                    onChange={(e) => {
                      setTypeAnswer(e.target.value);
                    }}
                  />
                  <p style={{ marginLeft: "8px" }}>Focus</p>
                </div>
                <div style={{ display: "flex" }}>
                  <input
                    name="select"
                    style={{ width: "20px", height: "20px" }}
                    type="radio"
                    value={categories[4]}
                    onChange={(e) => {
                      setTypeAnswer(e.target.value);
                    }}
                  />
                  <p style={{ marginLeft: "8px" }}>
                    Possessive nouns and pronouns
                  </p>
                </div>
                <div style={{ display: "flex" }}>
                  <input
                    name="select"
                    style={{ width: "20px", height: "20px" }}
                    type="radio"
                    value={categories[5]}
                    onChange={(e) => {
                      setTypeAnswer(e.target.value);
                    }}
                  />
                  <p style={{ marginLeft: "8px" }}>Agreement</p>
                </div>
                <div style={{ display: "flex" }}>
                  <input
                    name="select"
                    style={{ width: "20px", height: "20px" }}
                    type="radio"
                    value={categories[6]}
                    onChange={(e) => {
                      setTypeAnswer(e.target.value);
                    }}
                  />
                  <p style={{ marginLeft: "8px" }}>Support</p>
                </div>
                <div style={{ display: "flex" }}>
                  <input
                    name="select"
                    style={{ width: "20px", height: "20px" }}
                    type="radio"
                    value={categories[7]}
                    onChange={(e) => {
                      setTypeAnswer(e.target.value);
                    }}
                  />
                  <p style={{ marginLeft: "8px" }}>Syntax</p>
                </div>
                <br />
              </div>
              {!isSubmitted && (
                <Button
                  onClick={() => {
                    if (typeAnswer) {
                      if (
                        typeAnswer ===
                        "Introductions, conclusions, and transitions"
                      ) {
                        setMessage("Correct");
                      } else {
                        setMessage(
                          "Incorrect - The correct answer is Introductions, conclusions, and transitions"
                        );
                      }
                      setIsSubmitted(true);
                    }
                  }}
                  style={{
                    background: "#4EA2E2",
                    border: "none",
                    padding: "10px 50px",
                  }}
                  disabled={!typeAnswer}
                >
                  Submit
                </Button>
              )}
              {isSubmitted && (
                <Col md={12} offset={1} className="mt-5 offset-1">
                  <h6>{message}</h6>
                  <Button
                    onClick={() => {
                      updateCount();
                    }}
                    style={{
                      background: "#4EA2E2",
                      border: "none",
                      padding: "10px 50px",
                    }}
                  >
                    Go to Step 2: Review Skills
                  </Button>
                </Col>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
