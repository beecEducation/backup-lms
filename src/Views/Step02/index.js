import "./style.sass";

import { Row, Col, Container, Button } from "react-bootstrap";

import Youtube from "../../assets/img/icons/youtubeVedio.svg";
import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Step2({ updateCount }) {
  const navigate = useNavigate();
  const [writingText, setWritingText] = useState(`
  <div><h1 id="transition-words">Transition Words</h1>
<p>Effectively constructing each transition often depends upon your ability to identify words or phrases that will indicate for the reader the kind of logical relationships you want to convey. The table below should make it easier for you to find these words or phrases. Whenever you have trouble finding a word, phrase, or sentence to serve as an effective transition, refer to the information in the table for assistance. Look in the left column of the table for the kind of logical relationship you are trying to express. Then look in the right column of the table for examples of words or phrases that express this logical relationship.</p>
<p>Types of transitions</p>
<ol>
<li><strong>Transitions between sections</strong>: Particularly in longer works, it may be necessary to include transitional paragraphs that summarize for the reader the information just covered and specify the relevance of this information to the discussion in the following section.</li>
<li><strong>Transitions between paragraphs</strong>: If you have done a good job of arranging paragraphs so that the content of one leads logically to the next, the transition will highlight a relationship that already exists by summarizing the previous paragraph and suggesting something of the content of the paragraph that follows. A transition between paragraphs can be a word or two (however, for example, similarly), a phrase, or a sentence. Transitions can be at the end of the first paragraph, at the beginning of the second paragraph, or in both places.</li>
<li><strong>Transitions within paragraphs</strong>: As with transitions between sections and paragraphs, transitions within paragraphs act as cues by helping readers to anticipate what is coming before they read it. Within paragraphs, transitions tend to be single words or short phrases.</li>
</ol>
<table>
<thead>
<tr>
<th>LOGICAL RELATIONSHIP</th>
<th>TRANSITIONAL EXPRESSION</th>
</tr>
</thead>
<tbody>
<tr>
<td>Similarity</td>
<td>also, in the same way, just as … so too, likewise, similarly</td>
</tr>
<tr>
<td>Exception/Contrast</td>
<td>but, however, in spite of, on the one hand … on the other hand, nevertheless, nonetheless, notwithstanding, in contrast, on the contrary, still, yet </td>
</tr>
<tr>
<td>Sequence/Order</td>
<td>first, second, third, … next, then, finally</td>
</tr>
<tr>
<td>Time</td>
<td>after, afterward, at last, before, currently, during, earlier, immediately, later, meanwhile, now, recently, simultaneously, subsequently, then</td>
</tr>
<tr>
<td>Example</td>
<td>for example, for instance, namely, specifically, to illustrate</td>
</tr>
<tr>
<td>Emphasis</td>
<td>even, indeed, in fact, of course, truly</td>
</tr>
<tr>
<td>Place/Position</td>
<td>above, adjacent, below, beyond, here, in front, in back, nearby, there</td>
</tr>
<tr>
<td>Cause and Effect</td>
<td>accordingly, consequently, hence, so, therefore, thus</td>
</tr>
<tr>
<td>Additional Support or Evidence</td>
<td>additionally, again, also, and, as well, besides, equally important, further, furthermore, in addition, moreover, then</td>
</tr>
<tr>
<td>Conclusion/Summary</td>
<td>finally, in a word, in brief, briefly, in conclusion, in the end, in the final analysis, on the whole, thus, to conclude, to summarize, in sum, to sum up, in summary</td>
</tr>
</tbody>
</table></div>
  `);
  return (
    <>
      <Container>
        <div className="ConceptSummary">
          <Row style={{ alignItems: "center" }}>
            <Col md={8}>
              <h2 className="conceptHead">Concept Summary</h2>
              <p className="ConcptPara">Transition Words</p>
            </Col>
            <Col style={{ textAlign: "right" }} md={4}>
              {/* <MdArrowBackIosNew onClick={() => navigate("/quizzes")} /> */}
              {/* <p className="ConcptPara">1 of 5</p> */}
            </Col>
          </Row>
        </div>
        <Row style={{ marginRight: "0" }}>
          <Col md={12}>
            <div
              className="passageBox"
              dangerouslySetInnerHTML={{
                __html: writingText,
              }}
            >
              {/* <h1 className="passageBoxHeading">
                Questions 1–4 are based on the following passage.
              </h1>
              <p>
                This passage is adapted from David Foster Wallace, “All That.”
                ©2009 by Condé <br /> Nast.
              </p>
              <ol>
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
            Go to Step 3: Try Again
          </Button>
          {/* <Col style={{ background: " #FFFFFF" }} md={6}>
            <div className="categoryBox">
              <img width={"100%"} src={Youtube} />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Button
                onClick={()=>{updateCount()}}
                  style={{
                    background: "#4EA2E2",
                    border: "none",
                    padding: "10px 50px",
                  }}
                >
                  Go to Stop 3: Try Again
                </Button>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </>
  );
}
