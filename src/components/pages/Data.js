import {
    QuestionnaireSection,
    Grid,
    Border,
    Text,
} from "../styles/Question.styled";

import { BiRightArrowAlt } from "react-icons/bi";

export default function Data({ questions, handleChange }) {
    return (
        <>
            <QuestionnaireSection>
                <Text>
                    <BiRightArrowAlt
                        style={{
                            fontSize: "25px",
                            display: "inline-block",
                        }}
                    />
                    <span>{questions.question}</span>
                    <span style={{ color: "red", marginLeft: "5px" }}>
                        {questions.validation}
                    </span>
                </Text>
                <Grid>
                    {questions.options && Object.keys(questions.options).map((optionKey, optionIndex) => {
                        return (
                            <Border key={optionIndex}>
                                <input type='checkbox' onChange={handleChange} value='a' />
                                <label htmlFor='question'>{questions.options[optionKey]}</label>
                            </Border>
                        );
                    })}
                </Grid>
            </QuestionnaireSection>
        </>
    );
}
