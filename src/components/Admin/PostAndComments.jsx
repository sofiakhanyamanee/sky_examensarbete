import React, {useState, useContext, useEffect} from 'react'
import { database } from '../../firebase'
import useAuth from '../../store/actions/auth';
import styled from 'styled-components'
import { Context } from '../../store/Store'

export default function PostAndComments({post}) {
  const [state] = useContext(Context);
  const {removePostAdmin,  addCommentToPost, getAllCommentsFromPost } = useAuth();
  const [comment, setComment] = useState("");
  const [commentCollection, setCommentsCollection] = useState([]);



  async function getComments(post){
    getAllCommentsFromPost(post.docId).then(comments => {
      setCommentsCollection(comments)
    });
  }

  useEffect(() => {
    const unsubscribe = database.collection('posts')
    .doc(post.docId)
    .collection("comments")
    .orderBy("timeStamp", "desc")
    .onSnapshot((snap) => {
      
      const data = snap.docs.map(doc => doc.data());
      setCommentsCollection(data);
    });
    
    return () => unsubscribe();
  }, [])


  function removePost (post){
   removePostAdmin(post.docId)
  }


  async function handleComments(post){
    await addCommentToPost(state.currentUser.id, state.currentUser.name, state.currentUser.brf, post.docId, comment, new Date())
 }

  
  return (
      <PostContainer>
        <PostedBy>{post.userName}</PostedBy>
        <PostedAt>
        <Datestamp>{new Date(post.timeStamp.seconds * 1000).toLocaleDateString()}</Datestamp>
        <Timestamp>{new Date(post.timeStamp.seconds * 1000).toLocaleTimeString()}</Timestamp>
        </PostedAt>
        <p>{post.post}</p>

        <InputField name="comment" onChange={e => setComment(e.target.value)} placeholder="Kommentera inlägg"/>

        <BtnBox>
          <RemovePostBtn onClick={() => removePost(post)}>Radera inlägg</RemovePostBtn>
          <CommentBtn onClick={() => handleComments(post)}>Kommentera</CommentBtn>
          <ShowCommentsBtn onClick={() => getComments(post)}>Visa kommentarer</ShowCommentsBtn>
        </BtnBox>

        {commentCollection && commentCollection.map((comment, index) => {
        // console.log("commentCollection", commentCollection)
        return(
          <div key={index}>
            <p>{comment.comment}</p>
          </div> 
          )
        })}
    </PostContainer>
  ) 
} 


export const WrapperFeedview = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-left: 20vw;
`

export const InputBtnBox = styled.div`
display: flex;
width: 55%;
justify-content: space-around;
margin-bottom: 30px;
`


export const InputField = styled.input`
width: 30vw;
padding: 15px 12px;
margin: 12px 0;
border: 1px solid lightgrey;
border-radius: 8pt;

&:focus {
  outline: none;
}
`


export const PostBtn = styled.button`
color: black;
background-color: #CDE4E2;
border: none;
border-radius: 8pt;
width: 10vw;
padding: 15px 12px;
font-size: 16px;
font-family: 'Poppins', sans-serif;
margin: 12px 0;
cursor: pointer;

&: hover {
  background-color: #2faaa6;
  color: white;
}

&:focus {
  outline: none;
}
`

export const PostContainer = styled.div`
margin: 10px 0;
width: 40vw;
padding: 20px;
text-align: left;
border: 1px solid lightgrey;
border-radius: 8pt;
`
export const PostedAt = styled.div`
display: flex;
font-size: 12px;
color: grey;
margin-bottom: 10px;
margin-top: 5px;
`

export const PostedBy = styled.h4`
color: #555b6e;
font-weight: 500;
`

export const Datestamp = styled.p`

`

export const Timestamp = styled.p`
margin-left: 5px;
`

export const RemovePostBtn = styled.button`
color: white;
background-color: #e38f8c;
border: none;
border-radius: 8pt;
width: 10vw;
padding: 5px 7px;
font-size: 12px;
font-family: 'Poppins', sans-serif;
cursor: pointer;

&: hover {
  background-color: #f3cfce;
  color: black;
}

&:focus {
  outline: none;
}
`

export const CommentBtn = styled.button`
color: black;
background-color: #CDE4E2;
border: none;
border-radius: 8pt;
width: 10vw;
padding: 5px 7px;
font-size: 12px;
font-family: 'Poppins', sans-serif;
cursor: pointer;

&: hover {
  background-color: #CDE4E2;
  color: gray;
}

&:focus {
  outline: none;
}
`

export const ShowCommentsBtn = styled.button`
border: none;
background: transparent;
cursor: pointer;
font-size: 14px;
color: grey;

&:hover{
  color: lightgrey;
}
`

export const BtnBox = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center; 
margin-top: 20px;
`