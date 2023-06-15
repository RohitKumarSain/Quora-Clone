import { createContext, useContext, useState } from "react";
import { PostsData } from "../ArrayOfDatas/PostsData";
const PostContext = createContext();


function PostContextProvider({ children }) {

    let [obj, setObj] = useState([...PostsData]);
    console.log(obj)
    return (
        <PostContext.Provider value={{ obj, setObj }}>{children}</PostContext.Provider>
    )
}

const usePostContext = () => useContext(PostContext);

export { PostContextProvider, usePostContext };
