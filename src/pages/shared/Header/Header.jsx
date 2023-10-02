import moment from 'moment/moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center mt-6'>
            <img className='mx-auto' src={logo} alt="" />
            <h2 className="text-lg text-[#706F6F] ">Journalism Without Fear or Favour</h2>
            <p className='text-xl text-[#403F3F] font-medium'>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;