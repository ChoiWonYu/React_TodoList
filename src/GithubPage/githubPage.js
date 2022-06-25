import {Suspense} from'react';
import GetRepos from './GetRepos';
import styled from 'styled-components'
const GithubPage=()=>{
    return (
        <StyledText>
            <b>GitHub ID : ChoiWonYu</b>
            <Suspense fallback={<div>Loading...</div>}>
                <GetRepos/>
            </Suspense>
        </StyledText>
    )
}
const StyledText = styled.b`
display: flex;
flex-direction: column;
margin : 40px;
text-align: center;
`;
export default GithubPage;