import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Password validation
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('Password must contain at least one uppercase letter');
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error('Password must contain at least one lowercase letter');
      return;
    }

    createUser(email, password, name, photo)
      .then(result => {
        toast.success('Account Created Successfully');
        form.reset();
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>GearNest|Register</title>
      </Helmet>
      <div className='bg-lime-200 flex justify-center'>
        <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input type="url" name='photo' placeholder="URL" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
            </div>
            <input className='btn' type="submit" value="Submit" />
          </form>
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text-alt text-black">
                Already have an account? <Link to='/login'><span className="link link-hover text-yellow-400">Login</span></Link>
              </span>
            </label>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;