import { auth, 
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../sign-up/sign-up.component";

const SignIn = () => { 

    // ... rest of your component
    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (<div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign In with Google</button>
        <SignUpForm />
    </div>)
}
export default SignIn;