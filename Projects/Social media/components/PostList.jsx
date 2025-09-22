import { useContext, useState } from "react";
import Post from "./Post";
import { PostData } from "../store/post-data";
import EmptyHandler from "./EmptyHandler";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  let posts = useContext(PostData).posts;
  let fetching = useContext(PostData).fetching;

  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}

      {!fetching && posts.length === 0 && <EmptyHandler></EmptyHandler>}
      {!fetching &&
        posts.map((items) => <Post items={items} key={items.title}></Post>)}
    </>
  );
}

export default PostList;
