import React, { useContext } from "react";
import { PostContainer, PostedAt, PostedBy, Post, Timestamp, AdminTagPost, FlexBoxRow, FlexBoxColumn } from "../Styles/PostAndComments";
import moment from "moment";
import Comments from "./Comments";
import RemovePost from "./RemovePost";
import { Context } from '../../store/Store'
import UserAvatar from 'react-user-avatar'

export default function Posts({ post }) {
  const [state] = useContext(Context);
  
  return (
    <PostContainer>
     <FlexBoxRow>

     {post.role === "admin" ? (
        <PostedBy>
            <UserAvatar className="avatar-initials-post" size="35" name={post.firstname+" "+post.lastname} maxInitials={2} color={post.avatarColor}/>
          <FlexBoxColumn>
             <FlexBoxRow>{post.firstname} {post.lastname} <AdminTagPost>Admin</AdminTagPost></FlexBoxRow>
            <Timestamp>
            {moment(post.timeStamp.toDate()).startOf("minutes").fromNow()}
            </Timestamp>
          </FlexBoxColumn>
        </PostedBy>

      ) : (
        
        <PostedBy>
          <UserAvatar className="avatar-initials-post" size="35" name={post.firstname+" "+post.lastname} maxInitials={2} color={post.avatarColor}/>
          <FlexBoxColumn>
            {post.firstname} {post.lastname}  
            <Timestamp>
            {moment(post.timeStamp.toDate()).startOf("minutes").fromNow()}
            </Timestamp>
          </FlexBoxColumn>
        </PostedBy>
        )}

      {state.currentUser.id === post.id ? <RemovePost post={post}/> : ""}
      </FlexBoxRow>

      <Post>{post.post}</Post>

      <Comments post={post} />
    </PostContainer>
  );
}
