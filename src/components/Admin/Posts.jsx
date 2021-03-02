import React from "react";
import { PostContainer, PostedAt, PostedBy, Post, Timestamp, AdminTag } from "../Styles/PostAndComments";
import moment from "moment";
import Comments from "./Comments";

export default function Posts({ post }) {
  // moment.locale('sv');
  return (
    <PostContainer>
      {post.role === "admin" ? (
        <PostedBy>
          <AdminTag>Admin</AdminTag> {post.userName}
        </PostedBy>
      ) : (
        <PostedBy>{post.userName}</PostedBy>
      )}

      <PostedAt>
        <Timestamp>
        {moment(post.timeStamp.toDate()).startOf("minutes").fromNow()}
        </Timestamp>
      </PostedAt>
      <Post>{post.post}</Post>

      <Comments post={post} />
    </PostContainer>
  );
}
