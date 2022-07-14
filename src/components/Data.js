import {
    QuestionnaireSection,
    Grid,
    Border,
    Text,
} from "./styles/Question.styled";

import { BiRightArrowAlt } from "react-icons/bi";

export default function Data({ questions, handleChange }) {
    return (
        <>
            <QuestionnaireSection key={questions.id}>
                <Text>
                    <BiRightArrowAlt
                        style={{
                            fontSize: "25px",
                            display: "inline-block",
                        }}
                    />
                    <span>{questions.question}</span>
                    <span style={{ color: "red", marginLeft: "5px" }}>{questions.validation}</span>
                </Text>

                <Grid>
                    <Border>
                        <input type='radio' onChange={handleChange} />
                        <label htmlFor='question'>{questions.a}</label>
                    </Border>
                    <Border>
                        <input type='radio' onChange={handleChange} />
                        <label htmlFor='question'>{questions.b}</label>
                    </Border>
                    <Border>
                        <input type='radio' onChange={handleChange} />
                        <label htmlFor='question'>{questions.c}</label>
                    </Border>
                    <Border>
                        <input type='radio' onChange={handleChange} />
                        <label htmlFor='question'>{questions.d}</label>
                    </Border>
                    <Border>
                        <input type='radio' onChange={handleChange} />
                        <label htmlFor='question'>{questions.e}</label>
                    </Border>
                </Grid>

            </QuestionnaireSection>
        </>
    )
}
