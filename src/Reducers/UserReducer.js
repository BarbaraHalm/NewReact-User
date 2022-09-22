import { v4 as uuid } from "uuid"

let initialState = {
    users:[
         { name: "Winifred ", email: " wini@gmail.com ", gen: " 21", id: uuid() },
         { name: " Jemimah", email: " jemimah@gmail.com ", gen: "20 ", id:uuid() },
         { name: " Julius", email: "juli@gmail.com ", gen: "21 ", id:uuid() },
      ],
};

const UserReducer = (state = initialState , action) => {

    switch (action.type) {
        case "ADD_USER":
            return{...state, users:[...state.users, action.payload]};
            
        default:
            return state
}
    }
  

export default UserReducer;






















