import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './LeftSideNav.css'


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div className="space-y-5 text-xl font-medium text-[#9F9F9F]">
            <h2 className="text-3xl text-black">All Categories</h2>
            {
                categories.map(category => 
                <NavLink 
                className="pl-8 block"
                key={category.id}
                to={`/category/${category.id}`}
                >{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;