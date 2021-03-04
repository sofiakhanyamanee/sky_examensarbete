import React, { useState, useContext, useEffect } from "react";
import { InputBtnBox, CommentInputField, PostBtn, RemovePostBtn,BtnBox,ShowCommentBox,ShowCommentsBtn,CommentBox,Box,CommentBy,TimestampComment,Comment,CommentWrapper,HideComments,HideBox, RemoveCommentBtn} from "../Styles/PostAndComments";
import { database } from "../../firebase";
import useAuth from "../../store/actions/auth";
import { Context } from "../../store/Store";
import moment from "moment";
import RemoveComment from './RemoveComment'
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";

export default function Comments({ post }) {
  const [state] = useContext(Context);
  const { addCommentToPost } = useAuth();
  const [commentbar, setCommentbar] = useState(false);
  const [comment, setComment] = useState("");
  const [commentCollection, setCommentsCollection] = useState([]);
  
  
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
                  <TimestampComment>
                    {moment(comment.timeStamp.toDate())
                      .startOf("minutes")
                      .fromNow()}
                  </TimestampComment>
                      {comment.id === state.currentUser.id ? <RemoveComment post={post} comment={comment}/> : ""}
                </Box>
                <CommentBy>{comment.userName}</CommentBy>
                <Comment>{comment.comment}</Comment>
              </CommentBox>
            );
          })}
        <HideBox>
          {commentCollection.length > 0 ? 
          (<HideComments onClick={() => setCommentbar(false)}>
            Dölj kommentarer
          </HideComments>) : ('')}

        </HideBox>
      </CommentWrapper>
      ) : (
        ""
      )}
    </>
  );
}
