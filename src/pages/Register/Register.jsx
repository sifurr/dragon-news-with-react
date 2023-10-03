import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget);

        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const photo = form.get('photo')
        const password = form.get('password')
        // console.log(name, email, photo, password);

        createUser(email, password)
            .then(res => console.log(res.user))
            .catch(err => console.log(err.message))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-auto md:w-2/4 lg:w-1/2">
                <h2 className="text-2xl mt-10 font-semibold text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-1">Already have an account? <Link className="text-blue-500 font-bold" to={'/login'}>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;