import React, {useState, useContext, useEffect} from 'react'
import useAuth from '../../store/actions/auth';
import styled from 'styled-components'
import { database } from '../../firebase'
import { Context } from '../../store/Store'
import moment from 'moment';

export default function LetterView() {
  const [state] = useContext(Context);
  const { addAdminPostToDb, getAllAdminPostsFromCurrentBrf,removeAdminLetter } = useAuth();
  const [adminPost, setAdminPost] = useState("");
  const [adminPostCollection, setAdminPostsCollection] = useState([]);


    useEffect(() => {
      getAllAdminPostsFromCurrentBrf(state.currentUser.brf)
      .then(posts => {
        setAdminPostsCollection(posts);    
      });
    }, [])

    useEffect(() => {
      const unsubscribe = database
      .collection("admin_posts")
      .doc(state.currentUser.brf)
      .collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snap) => {
        const data = snap.docs.map(doc => doc.data());
        setAdminPostsCollection(data)
      });
    
      return () => unsubscribe();
    }, [])



  async function handleAdminPost(e) {
    e.preventDefault();
   await addAdminPostToDb(state.currentUser.id, state.currentUser.name, state.currentUser.brf, adminPost, new Date(), state.currentUser.role);
  }

  function removePost(post){
    console.log("radera post:", post.docId)
    removeAdminLetter(post.brf, post.docId)
  }


  return (
    <WrapperMemberView>
      <InputBtnBox>
      <InputField onChange={e => setAdminPost(e.target.value)} placeholder="Skriv nytt styrelsebrev..."/>
      <PostBtn onClick={handleAdminPost}>Posta</PostBtn>
      </InputBtnBox>

      {adminPostCollection && adminPostCollection.map((post, index) => {
         return (
           <PostContainer key={index}>
             <PostedAt>
             <Timestamp>{moment(post.timeStamp.toDate()).startOf("minutes").fromNow()}</Timestamp>
             </PostedAt>
             <Post>{post.adminpost}</Post>
             <RemovePostBtn onClick={() => removePost(post)}>Radera inlägg</RemovePostBtn>
           </PostContainer>
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
// margin-left: 20vw;
`


export const InputBtnBox = styled.div`
display: flex;
width: 46%;
justify-content: space-around;
margin-bottom: 30px;
`


export const InputField = styled.input`
width: 30vw;
padding: 15px 12px;
margin: 12px 0;
border: none;
border-radius: 12pt;
background: whitesmoke;

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
background: #f8f9fa;
width: 43%;
margin: 10px 0;
padding: 15px;
display: flex;
flex-direction: column;
border-radius: 12pt;
`

export const Post = styled.p`
font-size: 12px;
text-align: left;
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
margin-top: 20px;
// display: flex;
align-self: flex-end;

&: hover {
  background-color: #f3cfce;
  color: black;
}

&:focus {
  outline: none;
}
`

export const PostedAt = styled.div`
display: flex;
font-size: 12px;
color: grey;
margin-bottom: 10px;
margin-top: 5px;
`

export const Datestamp = styled.p`

`

export const Timestamp = styled.p`
// margin-left: 5px;
`