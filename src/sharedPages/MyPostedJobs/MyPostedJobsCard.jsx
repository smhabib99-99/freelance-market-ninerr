import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const MyPostedJobsCard = ({ jobs }) => {


    const { _id, category, title, minPrice, maxPrice, description, email, date } = jobs;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/jobs/${_id}`,{
                    method:'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your jobs post has been deleted.",
                                icon: "success"
                            });

                           
                        }
                    })

                    console.log('Deleted')


            }
        });
    }

    return (
        <div>
            <div className="card w-96 bg-blue-100 text-teal-500 font-semibold">
                <div className="card-body">
                    <h2 className="text-4xl">{category}</h2>
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <span>{minPrice}</span>
                    <span>{maxPrice}</span>
                    <p>{email}</p>
                    <p>{date}</p>

                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-secondary">Delete</button>
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPostedJobsCard;

MyPostedJobsCard.propTypes = {
    jobs: PropTypes.node
};

