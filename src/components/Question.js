import Data from "./Data";
import {
    QuestionStyle,
    Flex,

    ButtonPrev,
    ButtonNext,

} from "./styles/Question.styled";
import Progress from "./Progress";
import Survey from "./Survey";

export default function Question({
    questions,
    nextQuestion,
    prevQuestion,
    width,
    currentQuestionPosition,
    totalQuestions
}) {
    // console.log(questions)
    return (
        <QuestionStyle>
            <Progress width={width} />

            {currentQuestionPosition === totalQuestions - 1 ? <Survey /> : <Data questions={questions}
            />}

            <Flex style={{ display: currentQuestionPosition === totalQuestions - 1 ? "none" : "" }}>
                <ButtonPrev style={{ display: currentQuestionPosition === 0 ? "none" : "" }} onClick={prevQuestion}>
                    Prev
                </ButtonPrev>
                <ButtonNext onClick={nextQuestion}>
                    {currentQuestionPosition === totalQuestions - 1 ? "Submit" : "Next"}
                </ButtonNext>
            </Flex>
        </QuestionStyle>
    );
}
