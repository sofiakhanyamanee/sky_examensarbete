import React, { useState, useContext, useEffect } from "react";
import { database } from "../../firebase";
import useAuth from "../../store/actions/auth";
import styled from "styled-components";
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
    setCommentbar(true)
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

      { commentbar === true ? (

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
        <HideComments onClick={()=> setCommentbar(false)}> Dölj kommentarer </HideComments>
        </HideBox>
      </CommentWrapper>

      ) : "" }

    </PostContainer>
  );
}

export const WrapperFeedview = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  // margin-left: 20vw;
`;

export const InputBtnBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 10px;
  align-items: center;
  margin-top: 20px;
`;

export const CommentInputField = styled.input`
  width: 86%;
  padding: 15px 70px 15px 12px;
  margin-top: 12px;
  margin-left: -15px;
  border: none;
  border-radius: 12pt;

  &:focus {
    outline: none;
  }
`;

export const PostBtn = styled.button`
  color: black;
  background-color: #cde4e2;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  // padding: 0px 8px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  margin-top: 12px;
  margin-left: -70px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &: hover {
    background-color: #2faaa6;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

export const PostContainer = styled.div`
  margin: 10px 0;
  width: 40vw;
  padding: 20px;
  text-align: left;
  border: none;
  border-radius: 12pt;
  background: #f8f9fa;
`;
export const PostedAt = styled.div`
  display: flex;
  font-size: 12px;
  color: grey;
  margin-bottom: 30px;
  margin-top: -20px;
  justify-content: flex-end;
`;

export const PostedBy = styled.h4`
  color: #555b6e;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const Post = styled.p`
  font-size: 14px;
`;

export const Datestamp = styled.p``;

export const Timestamp = styled.p`
  // margin-left: 5px;
`;

export const RemovePostBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 12px;
  color: grey;
  font-family: Poppins;
  padding-right: 10px;

  &: hover {
    // background-color: #f3cfce;
    color: #e38f8c;
  }

  &:focus {
    outline: none;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;

export const CommentBtn = styled.button`
  color: black;
  background-color: #cde4e2;
  border: none;
  border-radius: 8pt;
  width: 10vw;
  margin-left: 15px;
  padding: 5px 7px;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  cursor: pointer;

  &: hover {
    background-color: #cde4e2;
    color: gray;
  }

  &:focus {
    outline: none;
  }
`;

export const ShowCommentBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ShowCommentsBtn = styled.button`
  border: none;
  cursor: pointer;
  font-size: 13px;
  color: grey;
  font-family: Poppins;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: transparent;

  & p {
    font-size: 12px;
    padding-left: 5px;
  }

  &:hover {
    color: lightgrey;
  }

  &:focus {
    outline: none;
  }
`;

export const CommentInputBtnBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  background: white;
  border-radius: 12pt;
  padding: 15px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentBy = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
export const TimestampComment = styled.p`
  font-size: 12px;
`;

export const Comment = styled.p`
  padding: 5px 0;
  font-size: 14px;
`;
export const CommentWrapper = styled.div`
  // background: lightpink;
  padding: 10px 0;
`;

export const AdminTag = styled.p`
  background-color: #7f869d;
  font-size: 10px;
  padding: 2px 10px;
  margin-right: 5px;
  border-radius: 8pt;
  color: white;
`;


export const HideComments = styled.button`
border: none;
cursor: pointer;
font-size: 12px;
color: grey;
font-family: Poppins;
text-align:right;
background: transparent;

& p {
  font-size: 12px;
  padding-left: 5px;
}

&:hover {
  color: lightgrey;
}

&:focus {
  outline: none;
}
`

export const HideBox = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`