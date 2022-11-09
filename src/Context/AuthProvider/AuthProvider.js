import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);


    const createANewUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInEmailAndPass = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = (provider) =>{
        setLoader(true)
        return signInWithPopup(auth, provider);
    }
    const logout = () =>{
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoader(false);
            console.log(currentUser)
        })
        return () => unSubscribe;
    }, []);

    const value = {
        user,
        signInEmailAndPass,
        createANewUser,
        signInGoogle,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;