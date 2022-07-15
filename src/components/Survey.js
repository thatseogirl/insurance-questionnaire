import React from "react";
import { ButtonNext, FeedBack, Flex } from "./styles/Question.styled";

export default function Survey() {
    return (
        <>
            <FeedBack>
                <p>Survey Completed, Thank You</p>
            </FeedBack>

            <Flex>
                <ButtonNext onClick={() => window.location.reload()}>Reset</ButtonNext>
            </Flex>
        </>
    );
}
