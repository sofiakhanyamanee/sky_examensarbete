import { auth } from "../firebase";
import {useEffect, useContext} from 'react';
import {Context} from '../store/Store';
import useAuth from './actions/auth';

const useSession = (props) => {
  const [ , dispatch] = useContext(Context);
  const { getUserFromDB } = useAuth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      console.log(user);
      if (user) {
        console.log("loggedin");
        console.log(user);
        let dbData = await getUserFromDB(user.uid);
        console.log(dbData);
        if (dbData != null) {
          dispatch({
            type: 'LOGGED_IN',
            dbData,
            isLoggedIn: true,
            isLoading: false,
          })
        } else {
          dispatch({
            type: 'LOGGED_IN',
            isLoggedIn: true,
            isLoading: false,
          })
        }

      } else {
        console.log("not logged in");
        dispatch({
            type: 'SIGNED_OUT',
            isLoading: false,
        })
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  return (
    <>

    </>
  );
}

export default useSession;