// import { useContext } from "react";
// import { AuthContext } from "../../providers/AuthProvider";


const AddJobs = () => {


    const handleAddJobs = event => {
        event.preventDefault();
        // const {user} =useContext(AuthContext);

        const form = event.target;
        const category = form.category.value;
        const title = form.title.value;
        const description = form.description.value;
        const email = form.email.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        const image = form.image.value;

        const newJobs = { category, title, minPrice, maxPrice, description, email, image }
        console.log(newJobs);


    }


    return (
        <div>
            <form onSubmit={handleAddJobs} className="mx-5 my-8 p-10">
                <h2 className="text-3xl text-center font-extrabold rounded-md bg-amber-400 py-5 text-white">Please input the form to add product.</h2>
                {/* Category and title */}
                <div className="md:flex ">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category Tab" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control w-1/2">
                        <label className="label ml-4">
                            <span className="label-text">Job Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Job Title" className="input input-bordered w-full ml-4" />
                        </label>
                    </div>
                </div>
                {/* minPrice and maxPrice */}
                <div className="md:flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Minimum Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="minPrice" placeholder="Minimum Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label ml-4">
                            <span className="label-text ">Maximum Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="maxPrice" placeholder="Maximum Price" className="input input-bordered w-full ml-4" />
                        </label>
                    </div>
                </div>
                {/* description and email */}
                <div className="md:flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label ml-4">
                            <span className="label-text ">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="Email" className="input input-bordered w-full ml-4" />
                        </label>
                    </div>
                </div>
                {/* Image and Add button */}
                <div className="md:flex mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="date" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <button type="submit" value="Add Product" className="btn bg-amber-400 text-2xl text-blue-500 btn-block">Add Jobs</button>
            </form>

        </div >
    );
};

export default AddJobs;