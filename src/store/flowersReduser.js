const defaultState = {
  flowers: [
    {
      id: 3,
      name: "Rose",
      price: 30,
      checked: false,
    },
    {
      id: 2,
      name: "Peony",
      price: 15,
      checked: true,
    },
    {
      id: 1,
      name: "Lily",
      price: 20,
      checked: false,
    }
  ]
}

export const flowersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_FLOWER":
      return {...state, flowers: [...state.flowers, action.payload]}
    case "CHANGE_STATUS":
      return {...state, flowers: state.flowers.map(flower => {
          if (flower.id === action.payload) {
            return {...flower, checked: !flower.checked}
          }
          return flower;
        })}
    default:
      return state;
  }
}
