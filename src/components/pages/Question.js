import Data from "./Data";
import {
    QuestionStyle,
    Flex,
    ButtonPrev,
    ButtonNext,
} from "../styles/Question.styled";
import Progress from "./Progress";
import Reset from "./Reset";

export default function Question({
    questions,
    nextQuestion,
    prevQuestion,
    width,
    currentQuestionPosition,
    totalQuestions,
    handleChange,
    shake,
}) {
    return (
        <QuestionStyle className={shake ? "shake" : ""}>
            <Progress width={width} />

            {currentQuestionPosition === totalQuestions ? (
                <Reset />
            ) : (
                <Data questions={questions} handleChange={handleChange} />
            )}

            <Flex
                style={{
                    display: currentQuestionPosition === totalQuestions ? "none" : "",
                }}
            >
                <ButtonPrev
                    style={{
                        display: currentQuestionPosition === 0 ? "none" : "",
                    }}
                    onClick={prevQuestion}
                >
                    Prev
                </ButtonPrev>
                <ButtonNext onClick={nextQuestion}>
                    {currentQuestionPosition === totalQuestions - 1 ? "Submit" : "Next"}
                </ButtonNext>
            </Flex>
        </QuestionStyle>
    );
}
