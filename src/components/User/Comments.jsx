import React, { useState, useContext, useEffect } from "react";
import { InputBtnBox, CommentInputField, PostBtn, RemovePostBtn,BtnBox,ShowCommentBox,ShowCommentsBtn,CommentBox,Box,CommentBy,TimestampComment,Comment,CommentWrapper,HideComments,HideBox, RemoveCommentBtn} from "../Styles/PostAndComments";
import { database } from "../../firebase";
import useAuth from "../../store/actions/auth";
import { Context } from "../../store/Store";
import moment from "moment";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

export default function Comments({ post }) {
  const [state] = useContext(Context);
  const { removePostUser, addCommentToPost, removeComment} = useAuth();
  const [commentbar, setCommentbar] = useState(false);
  const [comment, setComment] = useState("");
  const [commentCollection, setCommentsCollection] = useState([]);
  // moment.locale('sv');
  
  async function getComments() {
    setCommentbar(true);
  }

  useEffect(() => {
    console.log("useffect ",post.docId);
    const unsubscribe = database.collection('posts')
      .doc(post.docId)
      .collection("comments")
      // .where("postID", "==", post.docId)
      .orderBy("timeStamp", "asc")
      .onSnapshot((snapshot) => {
      let commentList = [];
      snapshot.docs.forEach((doc) => {
        commentList.push(doc.data());
      });
      setCommentsCollection(commentList);
    });

    return () => unsubscribe();
  }, [])


  function removePost(post) {
    removePostUser(post.docId);
  }

  function removeCommentFromPost(post, comment) {
    removeComment(post.docId, comment.docId);
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
    await setCommentbar(true);
    await setComment("");
  }

  return (
    <>
      <InputBtnBox>
        <CommentInputField
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Kommentera inlägg"
        />
        <PostBtn onClick={() => handleComments(post)}>
          <RiIcons.RiSendPlaneFill className="sendCommentBtn" />
        </PostBtn>
      </InputBtnBox>

      <BtnBox>
        {post.id === state.currentUser.id ? 
        (<RemovePostBtn onClick={() => removePost(post)}>
          Radera inlägg
        </RemovePostBtn>) : ""}

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
                  {comment.id === state.currentUser.id ? 
                  (<RemoveCommentBtn onClick={() => removeCommentFromPost(post, comment)}>
                  Radera kommentar
                </RemoveCommentBtn>) : ""}
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
    </>
  );
}
