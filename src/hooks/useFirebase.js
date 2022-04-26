import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";


const auth = getAuth(app) ;
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({})

    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user ;
            setUser(user)
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    
    const singOutWithGoogle = () => {
        signOut(auth)
        .then( () => {
            // sing out success full
        })
        .catch(error => {
            //An error Happened
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user =>{
            setUser(user)
        })
    },[])
    
    return {user, setUser, singInWithGoogle, singOutWithGoogle}
}

export default useFirebase ;