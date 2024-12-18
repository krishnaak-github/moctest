import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {

    let navigate = useNavigate()

    let [data, setData] = useState({
        userName: "",
        email: "",
        password: ""

    })

    function signupGetUser(event){
        let { name, value } = event.target;
        console.log(event.target);

        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function signupSubmit(){
        if (!data.userName || !data.email || !data.password) {
            alert('Please fill all the information');
            return;
        }

        Apidatas.post('/client/signup', data)
        .then((result) => {
            console.log("Signp Successful",result.data);
            alert("Signup Successful")
            navigate('/login')
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
    <div>
      <input type="userName" name="userName" value={user.email} placeholder="Enter your userName" onChange={signupGetUser}/>
      <input type="email" name="email" value={useremail} placeholder="Enter your email" onChange={signupGetUser}/>
      <input type="password" name="password" value={user.email} placeholder="Enter your password" onChange={signupGetUser}/>
      <button type='button' onClick={signupSubmit}>SIGNUP</button>
    </div>
  )
}

export default SignUp
