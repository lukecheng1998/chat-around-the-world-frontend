import {
  SET_CHATS,
  SEND_A_CHAT,
  LOADING_UI,
  STOP_LOADING_UI,
  CLEAR_ERRORS,
  SET_ERRORS,
} from "../types";
import axios from "axios";
export const sendAChat = (newChat) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/chats", newChat)
    .then((res) => {
      dispatch({
        type: SEND_A_CHAT,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
export const getChats = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/chats`)
    .then((res) => {
      dispatch({
        type: SET_CHATS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_CHATS,
        payload: [],
      });
    });
};
