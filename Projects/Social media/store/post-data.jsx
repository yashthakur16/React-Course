import { createContext, useEffect, useReducer, useState } from "react";

export const PostData = createContext({});

let reducer = (state, action) => {
  let newObj = [];
  if (action.type === "ADD") {
    newObj = [...state, { title: action.t, body: action.b, id: action.u }];
  }

  if (action.type === "DEL") {
    newObj = state.filter((i) => i.id !== action.id);
  }

  if (action.type === "DEFAULT") {
    return action.posts;
  }

  return newObj;
};

let PostDataProvider = (props) => {
  let [post, dispatchPost] = useReducer(reducer, []);

  let [fetching, setfetching] = useState(false);

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;

    setfetching(true);
    fetch("https://dummyjson.com/posts", { signal: signal })
      .then((res) => res.json())
      .then((data) => {
        getDefault(data.posts);
        setfetching(false);
      });
    return () => {
      console.log("cleaning up...");
      controller.abort();
    };
  }, []);

  let getDefault = (posts) => {
    let action = {
      type: "DEFAULT",
      posts: posts,
    };
    console.log("called");

    dispatchPost(action);
  };

  let addPost = (posts) => {
    let action = {
      type: "ADD",
      t: "New Post",
      b: posts.title,
      u: posts.id,
    };
    console.log(posts);
    dispatchPost(action);
  };

  let removePost = (id) => {
    let action = {
      type: "DEL",
      id: id,
    };
    dispatchPost(action);
  };
  return (
    <PostData.Provider
      value={{
        posts: post,
        addPost: addPost,
        removePost: removePost,
        fetching: fetching,
      }}
    >
      {props.children}
    </PostData.Provider>
  );
};

export default PostDataProvider;
