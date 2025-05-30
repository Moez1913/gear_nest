import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //creat user
    const createUser = (email, password, name, photo) => {

        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Update profile with name and photo URL
                return updateProfile(userCredential.user, {
                    displayName: name,
                    photoURL: photo
                }).then(() => userCredential.user);
            });

    }

    const signInWithGoogle = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                const user = result.user;
                return user;
            })
            .finally(() => setLoading(false));
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSuscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSuscribe
        }
    }, [])

    const authInfo = {
        createUser,
        user,
        loginUser,
        userLogOut,
        signInWithGoogle,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;