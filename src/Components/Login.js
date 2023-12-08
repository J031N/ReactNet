import React from 'react'
import './Login.css'
import Email from './Assets/email.png'
import Password from './Assets/lock.png'
import person from './Assets/username.png'
import phone from './Assets/phone.png'
import photo from './Assets/download.png'
import back from './Assets/back.png'
import { FirebaseContest } from '../Store/FirebaseContest'
import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import BeatLoader from "react-spinners/BeatLoader";
function Login() {

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const { firebase } = useContext(FirebaseContest)
const navigate=useNavigate()
  const handleClick = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
      result.user.updateProfile({ displayName: username }).then(() => {
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          phone: Phone,
          password: password
        }).then(()=>{
          navigate('/signin')
        })
      })
    })
  }
  const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }, [])

  return (

    <div>
    {loading ? (
         <div style={{ paddingTop: '17rem', paddingLeft:'37rem' }}>
             <BeatLoader
                 color={'blue'}
                 loading={loading}
                 size={50}
             />
         </div>
     )

         
             : (<div>
                 <div className='container'>
      <div className='child'>
        <form onSubmit={handleClick} action="">
          <div className="header">

            
              <img className='photo' src={photo} alt="" />

            

            <div className="inputs">
              <img className='back' src={back} alt="" />
              <div>
              <div className="input">
                <img className='person' src={person} alt="" />
                <input
                  type="text"
                  placeholder='Username'
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                  name='username'
                />
              </div>
        
              </div>
              <div className="input" >
                <img className='email' src={Email} alt="" />
                <input
                  type="email"
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  name='email'
                />
              </div><div className="input" >
                <img src={phone} alt="" />
                <input
                  type='phone'
                  placeholder='Phone Number'
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  name='phone'
                />
              </div><div className="input">
                <img className='email' src={Password} alt="" />
                <input
                  type="password"
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  name='password'

                />
              </div>
            </div>
            <div className="forgot">Already a member ? <h4 style={{ paddingLeft: '10px', fontSize: '17px' }}>  Log In</h4></div>


            <div className="submit-btn">
              <button  className='submi'>Sign Up</button>

            </div>

          </div>
        </form>
      </div>
    </div>
             </div>
     )}

 </div>




   
  )
}

export default Login
