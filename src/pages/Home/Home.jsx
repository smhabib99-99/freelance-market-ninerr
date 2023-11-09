import Banner from "../../components/Banner/Banner";
import Business from "../../sharedPages/Business/Business";
import JoinNinerr from "../../sharedPages/JoinNinerr/JoinNinerr";
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
            <Business></Business>
            <JoinNinerr></JoinNinerr>
        </div>
    );
};

export default Home;