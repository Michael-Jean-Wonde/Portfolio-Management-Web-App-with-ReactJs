import React, { useState, useEffect } from 'react'
import './Register.css';
import {Link, useNavigate} from 'react-router-dom';
import logo from "/home/jean/From Windows/Projects/portfolio-management/src/company-logo.jpg";
import { useSelector, useDispatch } from 'react-redux';
import {registerInitiate} from '../../redux/actions';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user } = useSelector(state => state.data);
  const navigate = useNavigate();

 
  let dispatch = useDispatch();
  
  useEffect(() => {
    if (user) {
      navigate('/'); 
    }
  }, [user, dispatch]);

  

  const register = (e) => {
    e.preventDefault();
    dispatch(registerInitiate(email, password));
    setEmail('');
    setPassword('');
  };
  return (
    <div className="register">
      <Link to="/">
        <img src={logo} className="register-logo" alt="logo" />
      </Link>
      <div className="register-container">
        <h1>Register</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={register} className="continue">
            Register
          </button>
        </form>
        <p>
          By continuing, you agree to the company's conditions of use and
          privacy notice.
        </p>
        <div className='detail'>
      <p>Already Have an Account?</p>
      <Link to='/login'>
        <button className="signin-link">
            Sign In
        </button>
      </Link>
      </div>
      </div>
    </div>
  );
};

export default Register;
