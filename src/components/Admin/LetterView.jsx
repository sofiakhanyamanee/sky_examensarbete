import React, {useState, useContext, useEffect} from 'react'
import useAuth from '../../store/actions/auth';
import styled from 'styled-components'
import { database } from '../../firebase'
import { Context } from '../../store/Store'

export default function LetterView() {
  const [state] = useContext(Context);
  const { addAdminPostToDb, getAllAdminPostsFromCurrentBrf } = useAuth();
  const [adminPost, setAdminPost] = useState("");
  const [adminPostCollection, setAdminPostsCollection] = useState([]);

    // hämta alla posts
    useEffect(() => {
      getAllAdminPostsFromCurrentBrf(state.currentUser.brf)
      .then(posts => {
        console.log("fr useff", posts)
        setAdminPostsCollection(posts);    
      });
    }, [])

    useEffect(() => {
      const unsubscribe = database.collection('adminPosts')
      .where("brf", "==", state.currentUser.brf)
      .orderBy("timeStamp", "desc")
      .onSnapshot((snap) => {
        const data = snap.docs.map(doc => doc.data());
        setAdminPostsCollection(data);
      });
    
      return () => unsubscribe();
    }, [])


  async function handleAdminPost(e) {
    e.preventDefault();
   await addAdminPostToDb(state.currentUser.id, state.currentUser.name, state.currentUser.brf, adminPost, new Date(), state.currentUser.role);
  }


  return (
    <WrapperMemberView>
      <InputBtnBox>
      <InputField onChange={e => setAdminPost(e.target.value)} placeholder="Skriv nytt styrelsebrev..."/>
      <PostBtn onClick={handleAdminPost}>Posta</PostBtn>
      </InputBtnBox>

      {adminPostCollection && adminPostCollection.map((post, index) => {
         return (
           <div key={index}>
             <p>{post.adminpost}</p>
           </div>
         )}
      )}
    </WrapperMemberView>
  )
}

export const WrapperMemberView = styled.div`
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