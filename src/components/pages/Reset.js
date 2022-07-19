import {
    ButtonNext,
    FeedBack,
    Flex
}
    from "../styles/Question.styled";

export default function Reset() {
    return (
        <>
            <FeedBack>
                <p>Survey Completed, Thank You</p>
            </FeedBack>

            <Flex>
                <ButtonNext onClick={(() => window.location.reload(false))}>Reset</ButtonNext>
            </Flex>
        </>
    );
}
