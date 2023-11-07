import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="">

            <div className="mt-20 mb-4 flex items-center justify-center">
                <div className="flex justify-center rounded-lg h-80  ">
                    <img className="rounded-md" src="/public/errorPage.webp" alt="" />
                </div>
            </div>
            <div className="text-center  justify-center">
            <Link to='/'><button className="bg-slate-800 rounded-md text-3xl text-white">Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;