
const initialState = {
  all: []
}

export default function post(state = initialState, action) {

  switch (action.type) {

    case 'ADD_POST':
      let newList = [...state.all, action.post];
      return {...state, all: newList}
      break;

    default:
    return state

  }

}
