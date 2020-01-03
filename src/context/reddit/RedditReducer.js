import {
  SEARCH_POSTS,
  GET_POSTS,
  SHOW_ALERT,
  CREAR_POSTS,
  SET_TRUE,
  SET_LOADING,
  SET_ALERT,
  CLEAR_TEXT,
  REMOVE_ALERT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case SHOW_ALERT: {
      return {
        alert: action.payload
      };
    }
    case SET_TRUE: {
      return {
        ...state,
        isSubmited: action.payload,
        text: ""
      };
    }
    case CLEAR_TEXT: {
      return {
        text: action.payload
      };
    }
    case REMOVE_ALERT: {
      return {
        alert: null
      };
    }
    case CREAR_POSTS: {
      return {
        ...state,
        posts: {},
        loading: false,
        isSubmited: false
      };
    }

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
