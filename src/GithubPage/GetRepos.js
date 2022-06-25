import {
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { ReposCount,ReposGoal } from '../atoms/status';
import styled from 'styled-components'
const GetRepos=()=>{
  const repoList=[];
  const Goal=useRecoilValue(ReposGoal);
  const [Count,setCount]=useRecoilState(ReposCount);
  async function repo_list(){
    const repo=await fetch('https://api.github.com/users/ChoiWonYu/repos',{
      headers: {
        Authorization: "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",
      }, 
    });
    const data=await repo.json();
    console.log(data);
    data.forEach((repo)=>{
      repoList.push(repo['name']);
    })
    setCount(repoList.length)
    }
    repo_list();
    return(
      <StyledGithubPage>
        <StyledText><div><b>Repos(Project) Count : {Count}</b></div>
        {(Goal-Count<=0)?
          <div>
          <b>You did it!!</b>
          </div>:
          <div>
          <b>{Goal-Count} for Repos Goal</b>
          </div>
        }
          </StyledText>
      </StyledGithubPage>
    )
}
const StyledGithubPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const StyledText = styled.b`
margin-top : 40px;
`;
export default GetRepos;