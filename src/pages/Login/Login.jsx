import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {

    const {singIn} = useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // console.log(form.get('email'));

        singIn(email, password)
            .then(res => console.log(res.user))
            .catch(err => console.log(err.message))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto md:w-2/4 lg:w-1/2">
                <h2 className="text-2xl mt-10 font-semibold text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-1">Do not have an account? <Link className="text-blue-500 font-bold" to={'/register'}>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;