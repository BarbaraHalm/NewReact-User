import {legacy_createStore as createStore} from 'redux'
import UserReducer from "../Reducers/UserReducer"

let store =createStore(UserReducer)

export default store;