import { Container } from "react-bootstrap";
import { Text, View } from "@aws-amplify/ui-react";
import React from "react";
import "./style.sass";
import { Navigate, useNavigate } from "react-router-dom";

const CustomMenubar = ({ active, quizType }) => {
    console.log("QUUIZTYEPSSSS ", quizType)
  let navigate = useNavigate();
  return (
    <Container className="custom-menu" fluid>
      <View className="custom-menu-view">
        {quizType !== "HSPT" && (
          <View
            onClick={() => navigate("/score_overview")}
            className={`view-child ${active == "overview" ? "active" : ""}`}
          >
            <Text>Score Overview</Text>
          </View>
        )}
        {/* <View className={`view-child ${active=="details"?"active":""}`}>
                    <Text>Score Details</Text>
                </View> */}
        <View
          onClick={() => navigate("/dashboard")}
          className={`view-child ${active == "questions" ? "active" : ""}`}
        >
          <Text>Test Questions</Text>
        </View>
      </View>
    </Container>
  );
};

export default CustomMenubar;
