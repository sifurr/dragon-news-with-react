import {FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter} from 'react-icons/fa'
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            {/* Login with */}
            <div className="border border-blue-500 p-4 mb-6">
                <h2 className="text-3xl mb-6">Login With</h2>
                <button className="btn mb-2 btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            
            {/* Find Us */}
            <div className="mb-6">
                <h2 className="text-xl mb-6">Find Us On</h2>
                <a className='p-4 flex rounded-t-lg border border-blue-500 text-lg gap-2 items-center' href="">
                <FaFacebook></FaFacebook>
                   Facebook
                </a>
                <a className='p-4 flex border-l border-blue-500 border-r text-lg gap-2 items-center' href="">
                <FaTwitter></FaTwitter>
                   Twitter
                </a>
                <a className='p-4 flex rounded-b-lg border border-blue-500 text-lg gap-2 items-center' href="">
                <FaInstagram></FaInstagram>
                   Instagram
                </a>                
            </div>

            {/* Q Zone */}
            <div className="bg-[#F3F3F3] p-1 mb-6">
            <h2 className="text-xl pl-4 pt-4 mb-8">Q-Zone</h2>
               <img src={qZone1} alt="" />
               <img src={qZone2} alt="" />
               <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;