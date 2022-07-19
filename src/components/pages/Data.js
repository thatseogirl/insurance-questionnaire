import {
    QuestionnaireSection,
    Grid,
    Border,
    Text,
} from "../styles/Question.styled";
import { memo } from "react";

import { BiRightArrowAlt } from "react-icons/bi";

function Data({ questions, handleChange }) {
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
                    <span>{questions.text}</span>
                </Text>
                <Grid>
                    {questions.options &&
                        Object.keys(questions.options).map((optionKey, optionIndex) => {
                            return (
                                <Border key={optionIndex}>
                                    <input
                                        type={questions.type}
                                        onChange={handleChange}
                                        value={questions.optionKey}
                                        className='radioBtn'
                                        name="radio"
                                        id={questions.optionIndex}
                                    />
                                    <label htmlFor='question'>
                                        {questions.options[optionKey]}
                                    </label>
                                </Border>
                            );
                        })}
                </Grid>
            </QuestionnaireSection>
        </>
    );
}


export default memo(Data);
