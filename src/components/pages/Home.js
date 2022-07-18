import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonNext, FeedBack, Flex, QuestionStyle } from "../styles/Question.styled";

export default function Home() {
    const navigate = useNavigate()
    return (
        <QuestionStyle>
            <FeedBack>
                <p style={{ textAlign: "center", textTransform: "uppercase" }}>Start a Survey</p>
            </FeedBack>

            <Flex>
                <ButtonNext onClick={() => navigate("/survey")}>Start </ButtonNext>
            </Flex>
        </QuestionStyle>
    );
}
