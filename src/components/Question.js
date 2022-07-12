import {
    QuestionStyle,
    Flex,
    ProgressBar,
    ButtonPrev,
    ButtonNext,
    ProgressContainer,
    QuestionnaireSection,
    Grid,
    Border,
    Text,
} from "./styles/Question.styled";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Question() {
    return (
        <QuestionStyle>
            <ProgressContainer>
                <ProgressBar></ProgressBar>
            </ProgressContainer>

            <QuestionnaireSection>
                <Text>
                    <BiRightArrowAlt
                        style={{
                            fontSize: "25px",
                            display: "inline-block",
                        }}
                    />
                    <span>What do you want to insure? *</span>
                </Text>

                <Grid>
                    <Border>
                        <input type='checkbox' />
                        <label htmlFor='question'>Question</label>
                    </Border>
                    <Border>
                        <input type='checkbox' />
                        <label htmlFor='question'>Question</label>
                    </Border>
                    <Border>
                        <input type='checkbox' />
                        <label htmlFor='question'>Question</label>
                    </Border>
                    <Border>
                        <input type='checkbox' />
                        <label htmlFor='question'>Question</label>
                    </Border>
                    <Border>
                        <input type='checkbox' />
                        <label htmlFor='question'>Question</label>
                    </Border>
                </Grid>
            </QuestionnaireSection>

            <Flex>
                <ButtonPrev disabled>Prev</ButtonPrev>
                <ButtonNext>Next</ButtonNext>
            </Flex>
        </QuestionStyle>
    );
}
