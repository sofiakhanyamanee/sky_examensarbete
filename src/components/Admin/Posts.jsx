import React from "react";
import { PostContainer, PostedAt, PostedBy, Post, Timestamp, AdminTag, FlexBoxRow, FlexBoxColumn } from "../Styles/PostAndComments";
import moment from "moment";
import Comments from "./Comments";
import RemovePost from "./RemovePost";

export default function Posts({ post }) {

  return (
    <PostContainer>
      <FlexBoxRow>
      <FlexBoxColumn>
      {post.role === "admin" ? (
        <PostedBy>
          <AdminTag>Admin</AdminTag> {post.firstname} {post.lastname}
        </PostedBy>
      ) : (
        <PostedBy>{post.firstname} {post.lastname}</PostedBy>
        )}

        <PostedAt>
          <Timestamp>
          {moment(post.timeStamp.toDate()).startOf("minutes").fromNow()}
          </Timestamp>
        </PostedAt>
      </FlexBoxColumn>      

        <RemovePost post={post} />
      </FlexBoxRow>

      <Post>{post.post}</Post>

      <Comments post={post} />
    </PostContainer>
  );
}
