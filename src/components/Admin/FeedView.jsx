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

  // hämta posts från current brf
  useEffect(() => {
    getAllPostsFromBrf(state.currentUser.brf)
    .then(posts => {
      setPostsCollection(posts);    
    });
  }, [])


  // hämta uppdaterad post
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
             <PostAndComments key={index} post={post}/>
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
`

export const InputBtnBox = styled.div`
display: flex;
width: 43%;
justify-content: space-around;
margin-bottom: 30px;
`


export const InputField = styled.input`
width: 30vw;
padding: 15px 12px;
margin: 12px 0;
border-radius: 12pt;
border: none;
background: whitesmoke;

&:focus {
  outline: none;
}
`


export const PostBtn = styled.button`
color: black;
background-color: #CDE4E2;
border: none;
border-radius: 12pt;
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
