import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const News = () => {

    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 ">
                <div className="col-span-3">
                        <h3>Nessss</h3>
                        <p>id: {id}</p>
                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};
export default News;