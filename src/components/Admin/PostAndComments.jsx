import React, { useState, useContext, useEffect } from "react";
import { InputBtnBox, CommentInputField, PostBtn, PostContainer, PostedAt, PostedBy, Post, Timestamp, RemovePostBtn , BtnBox, CommentBtn, ShowCommentBox, ShowCommentsBtn, CommentBox, Box, CommentBy, TimestampComment, Comment, CommentWrapper, AdminTag, HideComments, HideBox } from '../Styles/PostAndComments'
import { database } from "../../firebase";
import useAuth from "../../store/actions/auth";
import { Context } from "../../store/Store";
import moment from "moment";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

export default function PostAndComments({ post }) {
  const [state] = useContext(Context);
  const {
    removePostAdmin,
    addCommentToPost,
    getAllCommentsFromPost,
  } = useAuth();
  const [commentbar, setCommentbar] = useState(false);
  const [comment, setComment] = useState("");
  const [commentCollection, setCommentsCollection] = useState([]);

  async function getComments(post) {
    setCommentbar(true);
    getAllCommentsFromPost(post.docId).then((comments) => {
      setCommentsCollection(comments);
    });
  }

  useEffect(() => {
    const unsubscribe = database
      .collection("posts")
      .doc(post.docId)
      .collection("comments")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snap) => {
        const data = snap.docs.map((doc) => doc.data());
        setCommentsCollection(data);
      });

    return () => unsubscribe();
  }, []);

  function removePost(post) {
    removePostAdmin(post.docId);
  }

  async function handleComments(post) {
    await addCommentToPost(
      state.currentUser.id,
      state.currentUser.name,
      state.currentUser.brf,
      post.docId,
      comment,
      new Date()
    );
  }

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

      <InputBtnBox>
        <CommentInputField
          name="comment"
          onChange={(e) => setComment(e.target.value)}
          placeholder="Kommentera inlägg"
        />
        <PostBtn onClick={() => handleComments(post)}>
          <RiIcons.RiSendPlaneFill className="sendCommentBtn" />
        </PostBtn>
      </InputBtnBox>

      <BtnBox>
        <RemovePostBtn onClick={() => removePost(post)}>
          Radera inlägg
        </RemovePostBtn>
        <ShowCommentBox>
          <ShowCommentsBtn onClick={() => getComments(post)}>
            <BsIcons.BsChat />
            <p>{commentCollection.length} kommentarer</p>
          </ShowCommentsBtn>
        </ShowCommentBox>
      </BtnBox>

      {commentbar === true ? (
        <CommentWrapper>
          {commentCollection &&
            commentCollection.map((comment, index) => {
              return (
                <CommentBox key={index}>
                  <Box>
                    <CommentBy>{comment.userName}</CommentBy>
                    <TimestampComment>
                      {moment(comment.timeStamp.toDate())
                        .startOf("minutes")
                        .fromNow()}
                    </TimestampComment>
                  </Box>
                  <Comment>{comment.comment}</Comment>
                </CommentBox>
              );
            })}

          <HideBox>
            <HideComments onClick={() => setCommentbar(false)}>
              Dölj kommentarer
            </HideComments>
          </HideBox>
        </CommentWrapper>
      ) : (
        ""
      )}
    </PostContainer>
  );
}
