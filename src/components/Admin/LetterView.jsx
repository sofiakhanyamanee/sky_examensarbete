import React, {useState, useContext, useEffect} from 'react'
import { WrapperLetterView, InputBtnBox, InputField, PostBtn, PostContainer, Post, RemovePostBtn, PostedAt, Timestamp } from "../Styles/LetterView";
import useAuth from '../../store/actions/auth';
import { database } from '../../firebase'
import { Context } from '../../store/Store'
import moment from 'moment';
import * as RiIcons from 'react-icons/ri'; 

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
    await addAdminPostToDb(state.currentUser.id, state.currentUser.firstname,state.currentUser.lastname, state.currentUser.brf, adminPost, new Date(), state.currentUser.role);
    await setAdminPost("")
  }

  function removePost(post){
    console.log("radera post:", post.docId)
    removeAdminLetter(post.brf, post.docId)
  }


  return (
    <WrapperLetterView>
      <InputBtnBox>
      <InputField value={adminPost} onChange={e => setAdminPost(e.target.value)} placeholder="Skriv nytt styrelsebrev..."/>
      <PostBtn onClick={handleAdminPost}><RiIcons.RiSendPlaneFill className="sendPostBtn"/></PostBtn>
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
    </WrapperLetterView>
  )
}
