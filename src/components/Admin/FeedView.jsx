import React, {useState, useContext, useEffect} from 'react'
import useAuth from '../../store/actions/auth';
import { database } from '../../firebase'
import { Context } from '../../store/Store'
import styled from 'styled-components'
import PostAndComments from './PostAndComments';

export default function FeedView() {
  const [state] = useContext(Context);
  const [post, setPost] = useState("");
  const [postCollection, setPostsCollection] = useState([]);
  const { addPostToDb, getAllPostsFromBrf } = useAuth();

  // hämta alla posts
  useEffect(() => {
    getAllPostsFromBrf(state.currentUser.brf)
    .then(posts => {
      setPostsCollection(posts);    
    });
  }, [])



  useEffect(() => {
    const unsubscribe = database.collection('posts')
    .where("brf", "==", state.currentUser.brf)
    .orderBy("timeStamp", "desc")
    .onSnapshot((snap) => {
      const data = snap.docs.map(doc => doc.data());
      setPostsCollection(data);
    });
    
    return () => unsubscribe();
  }, [])


   async function handlePost(e) {
     e.preventDefault();
    await addPostToDb(state.currentUser.id, state.currentUser.name, state.currentUser.brf, post, new Date());
}


  return (
    <WrapperFeedview>
      <InputBtnBox>
      <InputField name="post" onChange={e => setPost(e.target.value)} placeholder="Skriv ett inlägg"/>
      <PostBtn onClick={handlePost}>Posta</PostBtn>
      </InputBtnBox>

      {postCollection && postCollection.map((post, index) => {
         return (
           <div index={index}>
             <PostAndComments post={post}/>
           </div>
         )}
      )}
         
    </WrapperFeedview>
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
margin-left: 10px;
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
margin-top: 15px;
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
color: white;
background-color: #a7dfd6;
border: none;
border-radius: 8pt;
width: 10vw;
padding: 5px 7px;
font-size: 12px;
font-family: 'Poppins', sans-serif;
margin-top: 15px;
cursor: pointer;

&: hover {
  background-color: #b9eada;
  color: black;
}

&:focus {
  outline: none;
}
`