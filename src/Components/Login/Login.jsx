import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate();
  let [user, SetUser] = useState({
    email:"",
    password:""
  });

  function loginGetUser(event){
    let { name, value } = event.target;
        console.log(event.target);

        setUser(prevState => ({
          ...prevState,
          [name]: value
      }));
  }

  function loginSubmit(){
    if (!user.email || !user.password) {
      alert('Please fill all the information');
      return;
  }

  Apidatas.post('user/login', user)
  .then((result) => {
      console.log("Login Successful",result.data);
      alert("Login Successful")
      navigate('/home')
  })
  .catch((err) => {
    if (err.response) {
        console.log('Response error:', err.response.data); 
    } else if (err.request) {
        console.log('Request error:', err.request); 
    } else {
        console.log('Error:', err.message); 
    }
});
  }

  return (
    <div className='login-page'>
    <div className='loginemail'>
      <input type="email" name="email" value={user.email} placeholder="Enter your email" onChange={loginGetUser}/>
    </div>
    <div className='loginpassword'>
      <input type="password" name="password" value={user.password} placeholder="Enter your password" onChange={loginGetUser} />
    </div>
    <div className='loginbutton'>
      <button type='button' onClick={loginSubmit}>LOGIN</button>
    </div>
    </div>
  )
}

export default Login
