import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import {getAuth} from "firebase/auth";
import PropTypes from 'prop-types';


export const AuthContext = createContext();
const Auth = getAuth(app);


const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const authInfo = {

        user,
        loading,

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes ={
    children:PropTypes.node
}