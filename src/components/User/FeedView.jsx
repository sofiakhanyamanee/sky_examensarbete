import React, {useState, useContext, useEffect} from 'react'
import { FeedViewWrapper, Heading, InputBtnBox, InputField, PostBtn } from '../Styles/FeedView'
import useAuth from '../../store/actions/auth';
import { database } from '../../firebase'
import { Context } from '../../store/Store'
import Post from './Posts';
import * as RiIcons from 'react-icons/ri'; 

export default function FeedView() {
  const [state] = useContext(Context);
  const [post, setPost] = useState("");
  const [postCollection, setPostsCollection] = useState([]);
  const { addPostToDb } = useAuth();


  useEffect(() => {
    const unsubscribe = database.collection('posts')
      .where("brf", "==", state.currentUser.brf)
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        let postList = [];
        snapshot.docs.forEach((doc) => {
          postList.push(doc.data());
        });
        setPostsCollection(postList);
      });
    
    return () => unsubscribe();
  }, [])

  

    async function handlePost(e) {
     e.preventDefault();
     await addPostToDb(state.currentUser.id, state.currentUser.firstname, state.currentUser.lastname, state.currentUser.brf, post, new Date(), state.currentUser.role, state.currentUser.avatarColor);
     setPost("")
  }



  return (
    <FeedViewWrapper>
      <Heading>Flöde</Heading>
      <InputBtnBox>
        <InputField value={post} name="post" onChange={e => setPost(e.target.value)} placeholder="Skriv, dela, felanmäl..."/>
        <PostBtn onClick={handlePost}><RiIcons.RiSendPlaneFill className="sendPostBtn"/></PostBtn>
      </InputBtnBox>

      {postCollection && postCollection.map((post, index) => {
        if (post.docId) {
           return (
               <Post key={index} post={post}/>
           )}
        }

      )}
    </FeedViewWrapper>
  )
}
