import { QuestionStyle, Flex, ProgressBar, ButtonPrev, ButtonNext } from "./styles/Question.styled";

export default function Question() {
    return (
        <QuestionStyle>
            <ProgressBar></ProgressBar>


            <Flex>
                <ButtonPrev >Prev</ButtonPrev>
                <ButtonNext >Next</ButtonNext>
            </Flex>
        </QuestionStyle>
    )
}
