
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex items-center'>
            <button className='bg-[#D72050] py-2 px-6 text-white font-semibold text-xl'>Latest</button>
            <Marquee className='text-[#403F3F] font-semibold text-lg' pauseOnHover={true} speed={80}>
                <Link className='mr-10'>Match Highlights: Germany vs Spain — as it happened....</Link>      
                <Link className='mr-10'>Match Highlights: Germany vs Spain as...</Link>  
                <Link className='mr-10'>Match Highlights: Germany vs Spain as...</Link>  
            </Marquee>
        </div>
    );
};

export default BreakingNews;