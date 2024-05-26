import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const Authprovider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email,password);
    }

    const logOut = () =>{
        return signOut(auth);
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