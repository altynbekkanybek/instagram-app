
// REGISTER

import { instance } from "../config/config";
import { requestPath } from "./requestPath";

// AUTH

export const CREATE_USER = (data) => instance.post(requestPath.createUser, data);

export const LOGIN_USER = (data) => instance.post(requestPath.loginUser, data);


// LAYOUT

export const CURRENT_USER = () => instance.get(requestPath.currentUser);
export const GET_ALL_USERS = () => instance.get(requestPath.allUsers);
export const FOLLOW_TO_USER = (id) => instance.post(requestPath.followToUser, id);
export const GET_SINGLE_USER = (id) => instance.get(requestPath.userById(id));