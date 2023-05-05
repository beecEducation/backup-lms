import React from "react";
import { Container } from "react-bootstrap";
import { Text, View } from "@aws-amplify/ui-react";
import { MdArrowBackIosNew } from "react-icons/md";
import ButtonCTA from "../ButtonCTA";
import "./style.sass";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
const CustomTopbar = (props) => {
  let navigate = useNavigate();
  const { name, finishedAt, quizType } = props;
  return (
    <Container className="custom-topbar" fluid>
      <Container fluid>
        <View className="custom-topbar-view">
          <View className="view-child1">
            <MdArrowBackIosNew onClick={() => navigate("/quizzes")} />
          </View>
          <View className="view-child2">
            <Text fontWeight={600}>{name}</Text>
            <Text fontSize={10}>
              <Moment format="MMM DD, YYYY">{finishedAt}</Moment>
            </Text>
          </View>
          <View className="view-child3">
            <ButtonCTA
              label={"Download Your Score Report"}
              onClick={() => {
                if(quizType === "SAT") {
                    navigate("/printpdf");
                } else if(quizType === 'HSPT') {
                    console.log("II am HSPT")
                    navigate("/hspt")
                }
              }}
              padding="20px"
              fontSize="10px"
              white
            />
          </View>
        </View>
      </Container>
    </Container>
  );
};

export default CustomTopbar;
