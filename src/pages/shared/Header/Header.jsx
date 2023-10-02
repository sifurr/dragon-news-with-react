import moment from 'moment/moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <h2 className="text-lg text-[#706F6F] text-center">Journalism Without Fear or Favour</h2>
            <p className='text-xl text-center text-[#403F3F] font-medium'>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;