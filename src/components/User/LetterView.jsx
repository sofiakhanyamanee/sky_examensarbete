import React, {useState, useContext, useEffect} from 'react'
import useAuth from '../../store/actions/auth';
import styled from 'styled-components'
import { database } from '../../firebase'
import { Context } from '../../store/Store'
import moment from 'moment';

export default function LetterView() {
  const [state] = useContext(Context);
  const { getAllAdminPostsFromCurrentBrf } = useAuth();
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





return (
  <WrapperMemberView>
    <Heading>Styrelsebrev</Heading>
    {adminPostCollection && adminPostCollection.map((post, index) => {
       return (
         <PostContainer key={index}>
           <PostedAt>
           <Timestamp>{moment(post.timeStamp.toDate()).startOf("minutes").fromNow()}</Timestamp>
           </PostedAt>
           <Post>{post.adminpost}</Post>
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

export const Heading = styled.h2`
margin-bottom: 50px;
`

export const PostContainer = styled.div`
background: #f8f9fa;
width: 45%;
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