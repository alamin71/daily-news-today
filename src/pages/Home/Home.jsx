import Header from "../shared/header/Header";
import LeftSideNav from "../shared/leftsidenav/LeftSideNav";
import Navbar from "../shared/navbar/Navbar";
import RightSideNav from "../shared/rightsidenav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="border grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className=" border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" border text-3xl md:col-span-2">News coming soon..</div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;