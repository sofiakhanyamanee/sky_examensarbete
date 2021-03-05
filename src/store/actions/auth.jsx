import { auth, database } from "../../firebase";
import { useContext } from "react";
import { Context } from "../Store";

export default function useAuth() {
  const [state, dispatch] = useContext(Context);


  // Hämta en specifik user från collection "users"
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

  // Hämta alla users från collection "new_users"
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

  // Hämta alla users från collection "users" med specifik brf
  const getAllUserFromDB_users = async (currentBrf) => {
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

  // Hämta alla users med specifik BRF från collection "new_users"
  const getAllNewUserFromDB_users = async (currentBrf) => {
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

  // Hämta specifik user från collection "new_users"
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

  // Flytta/sätta en user från collection "new_users" till "users"
  // Samt lägga till usern till rätt BRF collection
  const moveNewUserToUser = async (user) => {
    const db = await database;
    db.collection("users").doc(user.id).set({
      id: user.id,
      name: user.name,
      brf: user.brf,
      email: user.email,
      role: user.role,
    });

    db.collection("brf").doc(user.brf).collection("members").doc(user.id).set({
      id: user.id,
      name: user.name,
      brf: user.brf,
      email: user.email,
      role: user.role,
    });
  };

  // Neka specifik user från collection "new_users"
  const removeNewUser = async (user) => {
    const db = await database;
    // console.log(user)
    db.collection("new_users")
      .doc(user.id)
      .delete()
      .then(() => {
        console.log("deleted user");
      });
  };

  // Radera specifik user från collection "users"
  // samt från collection "brf"
  const removeUser = async (user) => {
    const db = await database;
    db.collection("users")
      .doc(user.id)
      .delete()
      .then(() => {
        console.log("deleted user from users");
        db.collection("brf")
          .doc(user.brf)
          .collection("members")
          .doc(user.id)
          .delete();
        console.log("deleted user from brf members");
      });
  };

  // Hämtar nya users
  // Godkänna en ny user
  // Flytta den till collection users
  // Neka samt radera ny user
  const acceptUserToDB = async (userID) => {
    await getNewUserFromDB(userID).then(async (resp) => {
      await moveNewUserToUser(resp);
      await removeNewUser(resp);
    });

    return await getAllUserFromDB().then((resp) => {
      return resp;
    });
  };

  // Spara en ny boende till collection "new_users"
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

  // Spara en ny admin till collection "users"
  const saveAdminToDB = async (user, name, brf) => {
    const db = await database;
    return db.collection("users").doc(user.uid.toString()).set({
      id: user.uid.toString(),
      name,
      brf,
      email: user.email,
      role: "admin",
    });
  };

  // Lägg till boende till tillhörande brf
  const addToBrfCollection = async (email, userName, brf, role) => {
    const db = await database;
    return db.collection("brf").doc(brf).set({
      email,
      userName,
      brf,
      role,
    });
  };

  // Lägg till post i collection
  const addPostToDb = async (id, userName, brf, post, timeStamp, role) => {
    const db = await database;
    db.collection("posts")
      .add({
        id,
        userName,
        brf,
        post,
        timeStamp,
        role,
      })
      .then((doc) => {
        db.collection("posts").doc(doc.id).update({
          docId: doc.id,
        });
        return doc.id;
      });
  };

  // Lägg till adminpost i collection
  const addAdminPostToDb = async (
    id,
    userName,
    brf,
    adminpost,
    timeStamp,
    role
  ) => {
    const db = await database;
    db.collection("admin_posts")
      .doc(brf)
      .collection("posts")
      .add({
        id,
        userName,
        brf,
        adminpost,
        timeStamp,
        role,
      })
      .then((doc) => {
        db.collection("admin_posts")
          .doc(brf)
          .collection("posts")
          .doc(doc.id)
          .update({
            docId: doc.id,
          });
      });
  };

  // Hämta alla admin posts från current brf
  const getAllAdminPostsFromCurrentBrf = async (currentBrf) => {
    const db = await database;
    return db
      .collection("admin_posts")
      .doc(currentBrf)
      .collection("posts")
      .orderBy("timeStamp", "desc")
      .get()
      .then((snapshot) => {
        let adminPostList = [];
        snapshot.docs.forEach((doc) => {
          adminPostList.push(doc.data());
        });
        // console.log("adminpostlist", adminPostList)
        return adminPostList;
      });
  };

  // Lägg till kommentar på en post
  const addCommentToPost = async (
    id,
    userName,
    brf,
    postID,
    comment,
    timeStamp
  ) => {
    const db = await database;
    db.collection("posts")
      .doc(postID)
      .collection("comments")
      .add({
        id,
        userName,
        brf,
        comment,
        timeStamp,
        postID,
      })
      .then((doc) => {
        // console.log("från auth:", doc)
        db.collection("posts")
          .doc(postID)
          .collection("comments")
          .doc(doc.id)
          .update({
            docId: doc.id,
          });
      });
  };

  // Radera posts från admin dashboard
  const removePostAdmin = async (docId) => {
    const db = await database;
    db.collection("posts")
      .doc(docId)
      .delete()
      .then(() => {
        // console.log("postid from auth", docId.id)
      });
  };

  // Radera posts från user dashboard
  const removePostUser = async (docId) => {
    const db = await database;
    db.collection("posts")
      .doc(docId)
      .delete()
      .then(() => {
        // console.log("postid from auth", docId.id)
      });
  };

  // Radera styrelsebrev från admin dashboard
  const removeAdminLetter = async (brf, docId) => {
    const db = await database;
    db.collection("admin_posts")
      .doc(brf)
      .collection("posts")
      .doc(docId)
      .delete();
  };

  // Radera comments från posts
  const removeComment = async (postDocId, commentDocId) => {
    const db = await database;
    db.collection("posts")
      .doc(postDocId)
      .collection("comments")
      .doc(commentDocId)
      .delete()
      .then(() => {
        console.log("PostId", postDocId);
        console.log("CommentId", commentDocId);
      });
  };

  // Logga in funktion - dispatchar från reducer
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

  // Registrera admin/boende funktion - dispatchar från reducer
  // Kollar om användaren har role = admin/boende
  const signup = (email, password, userName, brf, role) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        if (role === "user") {
          saveUserToDB(response.user, userName, brf);
        } else if (role === "admin") {
          saveAdminToDB(response.user, userName, brf);
        } else {
          console.log("No role was set");
        }
        console.log("response");
        console.log(response.id);
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

  // Logga ut funktion
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
    removeUser,
    addPostToDb,
    removePostAdmin,
    addCommentToPost,
    addAdminPostToDb,
    getAllAdminPostsFromCurrentBrf,
    removeAdminLetter,
    removePostUser,
    removeComment,
  };
}
