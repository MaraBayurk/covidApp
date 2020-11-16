const initialState={
cards:[],
cardDetail:null
}
export default function reducer(state=initialState, action) {
    switch( action.type ){
        case "ADD_CARD":
            return {
                ...state,
                cards: [...state.cards, action.payload]
            }
        case "GET_DETAIL":
            return{
                ...state,
                cardDetail: action.payload
            }
    }
    return state;
}