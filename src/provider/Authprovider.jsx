import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthconText = createContext(null);
const Authprovider = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState([null]);
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const AuthInfo ={
        user,
        createUser
    }
    return (
        <div>
            <AuthconText.Provider value={AuthInfo}>
                {children}
            </AuthconText.Provider>
        </div>
    );
};

export default Authprovider;