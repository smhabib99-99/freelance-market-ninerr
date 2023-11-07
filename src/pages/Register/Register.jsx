import { useContext } from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { AuthContext } from "../../providers/AuthProvider";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";
// import toast from "react-hot-toast";
// import Swal from 'sweetalert2';


const Register = () => {

    // const {createUser} = useContext(AuthContext)
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(name, email, password, photo);

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
                text: 'You Successfully Registered!',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error);
        })


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                // e.target.reset();
                // navigate('/');
            })
            .catch(error => {
                console.error(error);
            })

        // if(password.length<6){
        //     toast.error("Input more than 6 characters");
        //     return;
        // }
        // else{
        //     toast.success("Successfully Registered!!!")
        // }



    }




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
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
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="photo" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <p>
                                <span>Already Have Account? Login.</span> <Link to="/login"><button className="btn btn-link">Login</button></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;