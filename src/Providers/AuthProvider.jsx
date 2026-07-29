import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import useAxiosPublic from "../components/Hooks/Axios/useAxiosPublic";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic=useAxiosPublic()

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
            if(currentUser){
                const userInfo={email:currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res=>{
                    console.log('jwt responce',res.data)
                    if(res.data?.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            }else{
                 localStorage.removeItem('access-token')
            }

           

            setLoading(false)
        })

        return () => unSuscribe()
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