import {SET_USER, CLEAR_ERRORS, SET_ERRORS, LOADING_USER, MARK_NOTIFICATIONS_READ, SET_UNAUTHENTICATED, LOADING_UI} from '../types'
import axios from 'axios';

export const loginUser = (userData, history) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios.post('/login', userData)
    .then (res => {
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({type: CLEAR_ERRORS})
        history.push('/');
    })
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}
export const getUserData = () => (dispatch) => {
    dispatch({type: LOADING_USER});
    axios.get('/user')
    .then(res => {
        dispatch({
            type: SET_USER,
            payload: res.data
        })
    })
    .catch(err => console.log(err));
}
export const signupUser = (userData, history) => (dispatch) => {
    dispatch({type: LOADING_UI});
    axios.post('/signup', userData)
    .then (res => {
        setAuthorizationHeader(res.data.token);
        dispatch(getUserData());
        dispatch({type: CLEAR_ERRORS})
        history.push('/');
    })
    .catch(err => {
        dispatch({
            type: SET_ERRORS,
            payload: err.response.data
        })
    })
}
export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('FBIdToken');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: SET_UNAUTHENTICATED });
}
export const markNotificationsRead = (notificationIds) => dispatch => {
    axios.post('notifications', notificationIds)
    .then(res => {
        dispatch({
            type: MARK_NOTIFICATIONS_READ
        })
    })
    .catch(err => console.log(err));
}
const setAuthorizationHeader = (token) => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken; 
}