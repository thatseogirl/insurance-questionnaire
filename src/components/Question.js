import Data from "./Data";
import {
    QuestionStyle,
    Flex,

    ButtonPrev,
    ButtonNext,

} from "./styles/Question.styled";
import Progress from "./Progress";

export default function Question({
    questions,
    nextQuestion,
    prevQuestion,
    width,
    currentQuestionPosition
}) {
    return (
        <QuestionStyle>
            <Progress width={width} />

            <Data questions={questions} />

            <Flex>
                <ButtonPrev disabled={currentQuestionPosition === 0} onClick={prevQuestion}>
                    Prev
                </ButtonPrev>
                <ButtonNext onClick={nextQuestion}>
                    Next
                </ButtonNext>
            </Flex>
        </QuestionStyle>
    );
}
