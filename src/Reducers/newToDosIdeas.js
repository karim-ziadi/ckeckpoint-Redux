const initialState ={
    newToDos: [
        {
        task: "Start Cooking",
        id: Math.random()
        },
        {
        task: "Play Games",
        id: Math.random()
        },
    ]
}
export default function newToDosIdeas (state= {initialState}, action) {
    //eslint-disable-next-line
    const {type, payload} = action;
    switch (type) {
        default:
        return state   ;
    }
}