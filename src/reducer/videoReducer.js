import { ACTION_TYPE } from "../utils";

export const initialState = {
  videos: [],
  category: [],
  sortBy: "",
  search: "",
  playlist: [],
  history: [],
};

export const videoReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.INIT_VIDEOS:
      return { ...state, videos: action.payload };
    case ACTION_TYPE.INIT_CATEGORIES:
      return {
        ...state,
        category: [
          ...action.payload.map((cat) => ({ ...cat, isActive: false })),
        ],
      };
    case ACTION_TYPE.SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
        category: state.category.map((cat) =>
          cat.categoryName === action.payload
            ? { ...cat, isActive: true }
            : { ...cat, isActive: false }
        ),
      };
      case ACTION_TYPE.ADD_TO_HISTORY:
      return {
        ...state,
        history: [...action.payload],
      };
    case ACTION_TYPE.REMOVE_FROM_HISTORY:
      return {
        ...state,
        history: [...action.payload],
      };
    case ACTION_TYPE.CLEAR_HISTORY:
      return {
        ...state,
        history: [...action.payload],
      };
      case ACTION_TYPE.WATCH_LATER:
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          isInWatchLater: action.payload.some((ele) => ele._id === video._id),
        })),
      };
      case ACTION_TYPE.LIKE:
      return {
        ...state,
        videos: state.videos.map((video) => ({
          ...video,
          isInLiked: action.payload.some((ele) => ele._id === video._id),
        })),
      };
      case ACTION_TYPE.SEARCH:
      return {
        ...state,
        search: action.payload,
      };
      case ACTION_TYPE.PLAYLIST:
      return {
        ...state,
        playlist: action.payload,
      };
    case ACTION_TYPE.VIDEO_TO_PLAYLIST:
      return {
        ...state,
        playlist: state.playlist.map((list) =>
          list._id === action.payload._id ? action.payload : list
        ),
      };
      case ACTION_TYPE.LOG_OUT:
      return {
        ...state,
      };
      
  }
};