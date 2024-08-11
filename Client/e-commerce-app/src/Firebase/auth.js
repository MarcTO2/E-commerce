import { auth } from "./firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async (email, password) => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result
};

export const doSignOut = () => {
    return auth.signOut();
}

export const doPasswordReset = () => {
    return sendPasswordResetEmail(auth, email);
}

export const doPasswordChange = () => {
    return auth.UpdatePassword(auth.currentUser, password);
}

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`,
    });
};

