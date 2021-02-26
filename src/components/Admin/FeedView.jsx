import React, {useState, useContext, useEffect} from 'react'
import { FeedViewWrapper, InputBtnBox, InputField, PostBtn } from '../Styles/FeedView'
import useAuth from '../../store/actions/auth';
import { database } from '../../firebase'
import { Context } from '../../store/Store'
import PostAndComments from './PostAndComments';
import * as RiIcons from 'react-icons/ri'; 

export default function FeedView() {
  const [state] = useContext(Context);
  const [post, setPost] = useState("");
  const [postCollection, setPostsCollection] = useState([]);
  const { addPostToDb, getAllPostsFromBrf } = useAuth();

  // hämta posts från current brf
  // useEffect(() => {
  //   getAllPostsFromBrf(state.currentUser.brf)
  //   .then(posts => {
  //     setPostsCollection(posts);    
  //   });
  // }, [])


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
    await addPostToDb(state.currentUser.id, state.currentUser.name, state.currentUser.brf, post, new Date(), state.currentUser.role);
    await setPost("")
  }



  return (
    <FeedViewWrapper>
      <InputBtnBox>
      <InputField value={post} name="post" onChange={e => setPost(e.target.value)} placeholder="Skriv, dela, felanmäl..."/>
      <PostBtn onClick={handlePost}><RiIcons.RiSendPlaneFill className="sendPostBtn"/></PostBtn>
      </InputBtnBox>

      {postCollection && postCollection.map((post, index) => {
         return (
             <PostAndComments key={index} post={post}/>
         )}
      )}
    </FeedViewWrapper>
  )
}
