import { ProgressContainer, ProgressBar } from "./styles/Question.styled";

export default function Progress({ width }) {
    return (
        <ProgressContainer>
            <ProgressBar style={{ width: width }}></ProgressBar>
        </ProgressContainer>
    );
}
