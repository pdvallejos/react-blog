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
        case "EDIT_POST":{
            const posts = [...state.post];
            const postIndex = posts.findIndex(
                (p) => p.id === action.payload.id,
            );
    
            posts[postIndex] = action.payload;
            return {
                ...state,
                post: posts,
            };
        }
            
        default:
            return{
                ...state
            }
    }
}
