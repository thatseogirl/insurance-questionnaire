import { useNavigate } from "react-router-dom";
import {
    ButtonNext,
    FeedBack,
    Flex
}
    from "../styles/Question.styled";

export default function Reset() {
    const goBack = useNavigate()
    return (
        <>
            <FeedBack>
                <p>Survey Completed, Thank You</p>
            </FeedBack>

            <Flex>
                <ButtonNext onClick={() => goBack("/")}>Reset</ButtonNext>
            </Flex>
        </>
    );
}
