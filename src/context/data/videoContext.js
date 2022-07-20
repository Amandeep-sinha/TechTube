import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ACTION_TYPE } from "../../utils/constant";
import { initialState, videoReducer } from "../../reducer/videoReducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await axios.get("/api/categories");
        dispatch({
            type: ACTION_TYPE.INIT_CATEGORIES,
            payload: [...categories],
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);
    useEffect(() => {
      (async () => {
        try {
          const {
            data: { videos },
          } = await axios.get("/api/videos");
          dispatch({
            type: ACTION_TYPE.INIT_VIDEOS,
            payload: [...videos],
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);
  
    return (
      <DataContext.Provider
        value={{
          videos: state.videos,
          category: state.category,
          sortBy: state.sortBy,
          dispatch: dispatch,
          search: state.search,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  };
  
  const useData = () => useContext(DataContext);
  
  export { useData, DataProvider };