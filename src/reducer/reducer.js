const initialState = {
allposts: [],
post: [],
details: [],
}

export default function Reducer(state = initialState, action){
    switch (action.type){
        case 'GET_POST':
            return{
                ...state,
                allposts: action.payload,
                post: action.payload
            }
        case 'GET_DETAILS':
            return{
                ...state,
                details: action.payload
            }

        case 'REMOVE':{
            return state.filter(e => e.id !== action.payload) 
        }
        default:
            return{
                ...state
            }
    }
}
