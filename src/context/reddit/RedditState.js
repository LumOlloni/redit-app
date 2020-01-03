import React, { useReducer } from "react";
import axios from "axios";
import RedditContext from "./redditContext";
import RedditReducer from "./RedditReducer";
import {
  SEARCH_POSTS,
  CREAR_POSTS,
  SET_LOADING,
  SET_TRUE,
  SHOW_ALERT,
  REMOVE_ALERT
} from "../types";

const RedditState = props => {
  const initialState = {
    posts: {},
    loading: false,
    currentPage: 1,
    postPerPage: 3,
    text: "",
    alert: null,
    isSubmited: false
  };

  const [state, dispatch] = useReducer(RedditReducer, initialState);

  // Search Post
  const searchPost = async (radioInput, text, limit) => {
    setLoading();

    const res = await axios.get(
      `http://www.reddit.com/search.json?q=${text}&sort=${radioInput}&limit=${limit}`
    );
    dispatch({
      type: SEARCH_POSTS,
      payload: res.data
    });
  };

  // Make Pagination

  // Clear Post
  const clearPost = () => dispatch({ type: CREAR_POSTS });

  // SetLoading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Show Alert
  const showAlert = (msg, type) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        msg,
        type
      }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  // returm IsSubmit State
  const setIsubmitFunction = () => {
    return state.isSubmited;
  };

  // change Value of IsSubmit State
  const changeValue = value => {
    dispatch({
      payload: value,
      type: SET_TRUE
    });
  };

  // get input value
  const getTextInput = () => {
    return state.text;
  };

  return (
    <RedditContext.Provider
      value={{
        posts: state.posts,
        loading: state.loading,
        alert: state.alert,
        isSubmited: state.isSubmited,
        currentPage: state.currentPage,
        postPerPage: state.postPerPage,
        searchPost,
        showAlert,
        getTextInput,
        changeValue,
        clearPost,
        setIsubmitFunction
      }}
    >
      {props.children}
    </RedditContext.Provider>
  );
};

export default RedditState;
