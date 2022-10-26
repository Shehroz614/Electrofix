
import {  legacy_createStore as createStore } from "redux";
import { AuthReducer } from "../reducers/AuthReducer";

const store = createStore(AuthReducer);

export default store;