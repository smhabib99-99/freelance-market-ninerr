import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const {signInUser} = useContext(AuthContext);

    const handleLogin = e =>{

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        if (password.length < 6) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must be greater than 6 character.',
                icon: 'error',
                confirmButtonText: 'Try Again'
              })
            return;
        }
        else {
            Swal.fire({
                title: 'Success!',
                text: 'You Successfully Logged In!',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                // e.target.reset();
                // navigate('/');
            })
            .catch(error => {
                console.error(error)
            })

    }



    return (
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Please Login!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                                <p>
                                    <span>New here?  Please</span> <Link to="/register"><button className="btn btn-link">Register</button></Link>
                                </p>
                            </form>

                        </div>

                    </div>

                </div>
    );
};

export default Login;