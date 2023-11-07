import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <span><progress className="progress w-56"></progress></span>
    }

    if(user){
        return children;
    }


    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children:PropTypes.node
}
