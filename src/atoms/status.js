import {atom} from 'recoil';

export const status=atom({
    key:'menuStatus',
    default:'Todo'
})
export const CommitGoal=atom({
    key : 'commitgoal',
    default : 100
})
export const TodoList=atom({
    key : 'TodoList',
    default : [
        {
            id:0,
            text : 'Daily Commit',
            checked : false
        },
        {
            id:1,
            text : 'Weight training',
            checked : false
        }
    ]
})

export const ReposCount=atom({
    key : 'commit-count',
    default : 0
})

export const ReposGoal=atom({
    key:'reposgoal',
    default: 50
})
