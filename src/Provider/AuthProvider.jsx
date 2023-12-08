import { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    // Registering User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // User Sign In
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // User Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const authChange = onAuthStateChanged(auth, (currentUser) => {
            console.log("User in the Auth changed", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            authChange();
        };
    }, []);
    // const currentUser = auth.currentUser;

    const authInfo = {
        auth,
        user,
        loading,
        createUser,
        logOut,
        logIn,
        provider,
    };
    // console.log(displayName);
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
