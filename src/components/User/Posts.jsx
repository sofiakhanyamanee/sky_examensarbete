import React, { useContext } from "react";
import { PostContainer, PostedAt, PostedBy, Post, Timestamp, AdminTag, FlexBoxRow, FlexBoxColumn } from "../Styles/PostAndComments";
import moment from "moment";
import Comments from "./Comments";
import RemovePost from "./RemovePost";
import { Context } from '../../store/Store'

export default function Posts({ post }) {
  const [state] = useContext(Context);
  
  return (
    <PostContainer>
     <FlexBoxRow>
      <FlexBoxColumn>
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
      </FlexBoxColumn>      

      {state.currentUser.id === post.id ? <RemovePost post={post}/> : ""}
      </FlexBoxRow>

      <Post>{post.post}</Post>

      <Comments post={post} />
    </PostContainer>
  );
}
