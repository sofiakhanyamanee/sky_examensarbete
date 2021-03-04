import React, { useState } from "react";
import { CommentAltBox, CommentAltBoxBtn, RemoveCommentBtn } from "../Styles/PostAndComments";
import useAuth from "../../store/actions/auth";
import * as HiIcons from "react-icons/hi";

export default function RemoveComment({ comment, post }) {
  const [commentAlt, setCommentAlt] = useState(false);
  const { removeComment } = useAuth();

  const showCommentAlt = () => setCommentAlt(!commentAlt);

  function removeCommentFromPost(post, comment) {
    removeComment(post.docId, comment.docId);
  }

  return (
    <CommentAltBox>
      <CommentAltBoxBtn onClick={() => showCommentAlt(post, comment)}>
        <HiIcons.HiDotsHorizontal style={{color: 'grey'}}/>
      </CommentAltBoxBtn>
      {commentAlt === true ? (
        <RemoveCommentBtn onClick={() => removeCommentFromPost(post, comment)}>
          Radera kommentar
        </RemoveCommentBtn>
      ) : (
        ""
      )}
    </CommentAltBox>
  );
}
