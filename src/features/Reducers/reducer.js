
var itemsId = 4;

function reducer(state = [], action) {

    switch (action.type) {
        case "addItem":
            return [
                ...state,
                {
                    id: ++itemsId,
                    name: action.payload.name,
                    description: action.payload.description,
                }
            ];
        case "removeItem":
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}

export default reducer;