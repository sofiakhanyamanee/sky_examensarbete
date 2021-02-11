import { auth, database } from "../../firebase";
import {useContext} from 'react';
import {Context} from '../Store';

export default function useAuth() {
  const [state, dispatch] = useContext(Context);

  const getUserFromDB = async userID => {
    const db = await database;
    return db
      .collection("users")
      .doc(userID)
      .get()
      .then(user => {
        return user.data();
      });
  };

  const saveUserToDB = async (user, name) => {
    const db = await database;
    return db
      .collection("users")
      .doc(user.uid.toString())
      .set({
        id: user.uid.toString(),
        name,
        email: user.email
      })
  };

  const signin = (email, password) => {
      return auth
        .signInWithEmailAndPassword(email, password)
        .then(async response => {
          const user = await getUserFromDB(response.user.uid);
          dispatch({
            type: 'SIGNED_IN_SUCCESS',
            user,
          });
          return response.user;
        });
  };

  const signup = (email, password, userName) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        // We want to save the user to our own collection with custom attributes for us
        saveUserToDB(response.user, userName);
        dispatch({
          type: 'SIGNED_UP_SUCCESS',
          email,
          userName,
        });
        return response.user;
      });
  };

  const signout = () => {
    return auth.signOut()
  };

  return {
      signup,
      signout,
      signin,
      getUserFromDB, 
      state
    };
}
