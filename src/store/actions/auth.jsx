import { auth, database } from "../../firebase";
import { useContext } from "react";
import { Context } from "../Store";

export default function useAuth() {
  const [state, dispatch] = useContext(Context);
  // const [userList, setUserList] = useState([]);

  const getUserFromDB = async (userID) => {
    const db = await database;
    return db
      .collection("users")
      .doc(userID)
      .get()
      .then((user) => {
        return user.data();
      });
  };

  const getAllUserFromDB = async () => {
    const db = await database;
    return db
      .collection("new_users")
      .get()
      .then((snapshot) => {
        let userList = [];

        snapshot.docs.forEach((doc) => {
          userList.push(doc.data());
        });

        return userList;
      });
  };

  const getAllUserFromDB_users = async (currentBrf) => {
    // db.collection("stories").where("author", "==", user.uid).get()
    const db = await database;
    return db
      .collection("users")
      .where("brf", "==", currentBrf)
      .get()
      .then((snapshot) => {
        let userList = [];
        snapshot.docs.forEach((doc) => {
          userList.push(doc.data());
        });

        return userList;
      });
  };

  const getAllNewUserFromDB_users = async (currentBrf) => {
    // db.collection("stories").where("author", "==", user.uid).get()
    const db = await database;
    return db
      .collection("new_users")
      .where("brf", "==", currentBrf)
      .get()
      .then((snapshot) => {
        let userList = [];
        snapshot.docs.forEach((doc) => {
          userList.push(doc.data());
        });

        return userList;
      });
  };


  const getNewUserFromDB = async (userID) => {
    const db = await database;
    return db
      .collection("new_users")
      .doc(userID)
      .get()
      .then((user) => {
        return user.data();
      });
  };

  
  const moveNewUserToUser = async (user) => {
    const db = await database;
    // console.log(user)
    db.collection("users").doc(user.id).set({
      id: user.id,
      name: user.name,
      brf: user.brf,
      email: user.email,
      role: user.role,
    });

    db.collection('brf').doc(user.brf).collection('members').doc(user.id).set({
      id: user.id,
      name: user.name,
      brf: user.brf,
      email: user.email,
      role: user.role,
    })

  };

  const removeNewUser = async (user) => {
    const db = await database;
    // console.log(user)
    db.collection("new_users").doc(user.id).delete().then(() => {
      console.log("deleted user")
    })
  };
  
  const removeUser = async (user) => {
    const db = await database;
    // console.log(user)
    db.collection("users").doc(user.id).delete().then(() => {
      console.log("deleted user from users")
      db.collection("brf").doc(user.brf).collection('members').doc(user.id).delete()
      console.log("deleted user from brf members")
    })
  };
  

  const acceptUserToDB = async (userID) => {
    await getNewUserFromDB(userID).then(async (resp) => {
      await moveNewUserToUser(resp);
      await removeNewUser(resp)
    });

    return await getAllUserFromDB().then((resp) => {
      return resp;
    });
  };


  const saveUserToDB = async (user, name, brf) => {
    const db = await database;
    return db.collection("new_users").doc(user.uid.toString()).set({
      id: user.uid.toString(),
      name,
      brf,
      email: user.email,
      role: "user",
    });
  };

  const saveAdminToDB = async (user, name, brf) => {
    const db = await database;
    return db.collection("users").doc(user.uid.toString()).set({
      id: user.uid.toString(),
      name,
      brf,
      email: user.email,
      role: "admin",
    })
  };

  const addToBrfCollection = async (email, userName, brf, role) => {
    const db = await database;
    return db.collection("brf").doc(brf).set({
      email,
      userName,
      brf,
      role
    })
  };


  const signin = (email, password, role) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then(async (response) => {
        const user = await getUserFromDB(response.user.uid);
        dispatch({
          type: "SIGNED_IN_SUCCESS",
          user,
        });

        return response.user;
      });
  };

  const signup = (email, password, userName, brf, role) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        // We want to save the user to our own collection with custom attributes for us

        if (role === "user") {
          saveUserToDB(response.user, userName, brf);
        } else if (role === "admin") {
          saveAdminToDB(response.user, userName, brf);
        } else {
          console.log("No role was set");
        }
        dispatch({
          type: "SIGNED_UP_SUCCESS",
          email,
          userName,
          brf,
          role,
        });
        return response.user;
      });
  };

  const signout = () => {
    return auth.signOut();
  };

  return {
    signup,
    signout,
    signin,
    getUserFromDB,
    state,
    getAllUserFromDB,
    acceptUserToDB,
    getAllUserFromDB_users,
    addToBrfCollection,
    getAllNewUserFromDB_users,
    getNewUserFromDB,
    removeNewUser,
    removeUser
    // getAllUsersSnapShot
  };
}
