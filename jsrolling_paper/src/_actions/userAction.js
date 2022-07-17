import { LOGIN_USER, REGISTER_USER } from "./types";
import axios from 'axios';

const USER_URL = "/api/user";

export function registerUSer(datatoSubmit){
    const data = axios.request("post". USER_URL + "/register", datatoSubmit);

    return {
        type: REGISTER_USER,
        payload : data,
    };
}

export function loginUser(dataToSubmit){
    const data = request("post", USER_URL + "/login", dataToSubmit);
    return {
        type: LOGIN_USER,
        payload: data,
    };
}