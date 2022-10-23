import {combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage/session";
import loginSlice from './../features/login/loginSlice';

const persistConfig = {
    key: 'root',
    storage
};

export const rootReducer = combineReducers({user:loginSlice.reducer});

export default persistReducer(persistConfig, rootReducer);


