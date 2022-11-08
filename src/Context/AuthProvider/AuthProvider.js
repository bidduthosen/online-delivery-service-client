import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    const createANewUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInEmailAndPass = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () =>{
        return signOut(auth);
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log(currentUser)
        })
        return () => unSubscribe;
    }, []);

    const value = {
        user,
        signInEmailAndPass,
        createANewUser,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;