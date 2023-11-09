import Banner from "../../components/Banner/Banner";
// import TabCategory from "../TabCategory/TabCategory";
import Tabs from "../Tabs/Tabs";


const Home = () => {
    return (
        <div>
            
            {/* <h2 className="text-5xl">This is Home</h2> */}
            <Banner></Banner>
            {/* <TabCategory></TabCategory> */}
            <h2 className="text-5xl text-white font-semibold text-center bg-amber-300 py-5 mx-5 my-5">Job Category</h2>
            <Tabs></Tabs>
        </div>
    );
};

export default Home;