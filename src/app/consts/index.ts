import {Animation} from "../models/creatives-model";

export const ANIMATIONS: Animation[] = [{name: 'from top', _id: '1'}, {name: 'from bottom', _id: '2'}, {name: 'rotate Z', _id: '3'}, {name: 'scale', _id: '4'}];

export const BASE_URL = 'http://localhost:3000/api'
export const CREATIVE_URL = '/creative'
export const LOGIN_URL = '/user/login'
export const REGISTER_URL = '/user/register'
export const GET_AUTH_URL = '/user/auth'
