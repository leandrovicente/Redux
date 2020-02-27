const INITAL_STATE = [
    { id: 1, text: "teste 1" },
    { id: 2, text: "teste 2" }
];
export default function todos(state = INITAL_STATE, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: Math.random, text: action.payload.text }];
        case "REMOVE_TODO":
            return state.filter(todo => todo.id != action.payload.id);
        default:
            return state;
    }
}
