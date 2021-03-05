import React, {useState, useContext, useEffect} from 'react'
import { WrapperLetterView, Heading, PostContainer, Post, PostedAt, Timestamp } from "../Styles/LetterView";
import useAuth from '../../store/actions/auth';
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
  <WrapperLetterView>
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
  </WrapperLetterView>
)
}
