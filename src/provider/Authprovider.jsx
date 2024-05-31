import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext();
const Authprovider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState();
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email,password);
    }

    const logOut = () =>{
        return signOut();
    }
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in the auth state change', currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[auth])

    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
        }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;
Authprovider.propTypes = {
    children: PropTypes.node
}