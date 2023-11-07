import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

    // const {user,logOut,signInWithGoogle} = useContext(AuthContext);
    const {user,logOut,signInWithGoogle} = useContext(AuthContext);


    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
            // navigate('/')
        })
        .catch(error=>{
            console.error(error);
        })
    }


    const handleLogOut = () =>{

        logOut()
        .then(()=>{
            console.log("log out successful")
        })
        .catch(error=>console.error(error))
    }

    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/addJobs'>Add Jobs</NavLink></li>
    <li><NavLink to='/bidsRequest'>Bids Request</NavLink></li>
    <li><NavLink to='/myBids'>My Bids</NavLink></li>
    <li><NavLink to='/myPostedJobs'>My Posted Jobs</NavLink></li>
    <li><NavLink to='/jobDetail'>Job Detail</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>

</>


    return (
        <div>
            

            <div className='mx-4'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='flex'>
                    <img className='w-6 md:w-24 md:h-14 rounded-lg ml-2' src="/ninerr2.png" alt="" />
                    <p className="btn btn-ghost text-black bg-none md:h-14 normal-case md:text-3xl">Ninerr</p>
                   
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                             <>
                             <span>{user.email}</span>
                             <img className='rounded-full w-8' src={user.photoURL} alt="" />
                             <a onClick={handleLogOut} className="btn bg-amber-400 rounded-md btn-sm text-white">Log out</a>

                             </>   :
                             <Link to="/login">
                                <button className='btn btn-sm'>Login</button>
                            <button onClick={handleGoogleSignIn} type="submit" className="btn-sm rounded-md bg-amber-400 text-white">Google Login</button>

                             </Link>
                                              
                    }
                    
                </div>
            </div>
        </div>

        </div>
    );
};

export default Navbar;