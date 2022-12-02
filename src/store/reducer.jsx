import { combineReducers } from "redux";
import profile from './account/reducer'

const reducer = combineReducers(
    Object.assign({
        profile,
    })
);
export default reducer;