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

        case 'REMOVE_POST':{
            const filtered = state.post.filter(post => post.id !== action.payload.id)
            return {
                ...state,
                post: filtered
            };
        }

        case 'ADD_POST':
           
            return{
                ...state,
                post: [...state.post, action.payload]

            }
            
        default:
            return{
                ...state
            }
    }
}
