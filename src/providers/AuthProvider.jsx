import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
// import { getAuth } from "firebase/auth";
// import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);
// const Auth = getAuth();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {

        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }


    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            
            console.log('observing',currentUser)
            setLoading(false);
        });


        return()=>{
            unSubscribe();
        }

    },[])

    // useEffect(()=>{
    //     const unSubscribe = onAuthStateChanged(auth,currentUser => {
    //         setUser(currentUser);
            
    //         console.log('observing',currentUser)
    //         setLoading(false);
    //     });


    //     return()=>{
    //         unSubscribe();
    //     }

    // },[])

    // useEffect(()=>{
    //     const unSubscribe = onAuthStateChanged(auth,currentUser =>{
    //         setUser(currentUser);
    //         setLoading(false);
    //     });
    //     return()=>{
    //         unSubscribe();
    //     }
    // },[])

    const authInfo = {

        user,
        createUser,
        signInUser,
        signInWithGoogle,
        logOut,
        loading

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}