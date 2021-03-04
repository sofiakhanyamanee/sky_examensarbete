import React, { useState } from "react";
import useAuth from "../../store/actions/auth";
import { PostAltBox, PostAltBoxBtn, RemovePostBtn } from "../Styles/PostAndComments";
import * as HiIcons from "react-icons/hi";

export default function RemovePost({ post }) {
  const [postAlt, setPostAlt] = useState(false);
  const { removePostAdmin } = useAuth();

  const showPostAlt = () => setPostAlt(!postAlt);

  function removePost(post) {
    removePostAdmin(post.docId);
  }

  return (
    <PostAltBox>
      <PostAltBoxBtn onClick={showPostAlt}>
        <HiIcons.HiDotsHorizontal style={{color: 'grey'}}/>
      </PostAltBoxBtn>
      {postAlt === true ? (
        <RemovePostBtn onClick={() => removePost(post)}>
          Radera inlägg
        </RemovePostBtn>
      ) : (
        ""
      )}
    </PostAltBox>
  );
}
