import { combineReducers } from "redux";
import Login from "./Auth/Reducer";
import Report from "./Report/Reducer";
import Profile from "./Settings/Reducer"

export default combineReducers({
    Login,
    Report,
    Profile
});
