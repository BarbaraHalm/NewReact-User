import { legacy_createStore as createStore } from "redux";
import UserReducer from "../Reducers/UserReducer";

let Store = createStore(UserReducer);

export default Store;



















