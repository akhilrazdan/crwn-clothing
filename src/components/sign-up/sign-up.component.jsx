import { useState } from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) { 
            alert("Passwords do not match");
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
            console.log(user);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Cannot create user, email already in use");
            } else {
                console.error("User creation encountered an error", error);
            }
        }

    }
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})

    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display name</label>
                <input required type="text" placeholder="Name" onChange={handleChange} name="displayName" value={displayName}/>

                <label>Email</label>
                <input required type="email" placeholder="Email" onChange={handleChange} name="email" value={email}/>

                <label>Password</label>
                <input required type="password" placeholder="Password" onChange={handleChange} name="password" value={password}/>

                <label>Confirm Password</label>
                <input required type="password" placeholder="Password" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <button type="submit">Sign Up</button>
            </form>
        </div>

    )
}

export default SignUpForm;