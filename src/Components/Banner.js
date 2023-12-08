// import React, { useContext, useState } from 'react'
// import './Banner.css'
// import { FirebaseContest } from '../Store/FirebaseContest'



// function Banner() {

//    const {firebase}=useContext(FirebaseContest)
//     const [username, setUsername] = useState('')
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')
        
    

    
//     const handleSubmit = (e) => {
//         e.preventDefault()
//      firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
//             result.user.updateProfile({displayName:username})
//      })
       
//     } 
    
    
    

//     return (
//         <div className='parentDiv'>
//             <div className="childDiv">

//                 <div className="valid">
//                     <h1>FORM VALIDATION</h1>
//                 </div>
//                 <form action="" onSubmit={handleSubmit}>
//                     <div className="form">
//                         <div className="name">
//                             <label htmlFor="name">Name</label>
//                             <br />
//                             <input type="text" placeholder='Name'
//                                 name='username' value={username}
//                                 onChange={(e)=> setUsername(e.target.value)}
//                                 required
//                                 pattern='^[A-Za-z1-9].{3,15}'
                               
                               
//                             />

//                             <span>Username should be more than 3 characters</span>
//                         </div>
//                         <div className="name">
//                             <label htmlFor="email">Email</label>
//                             <br />
//                             <input type="email" placeholder='Eamil'
//                                 name='email' value={email}  required
//                                 onChange={(e)=>setEmail(e.target.value)}
                              
                              
//                             />
//                             <span>Enter a valid Email ID</span>
//                         </div>
//                         <div className="name">
//                             <label htmlFor="password">Password</label>
//                             <br />
//                             <input type="text" placeholder='Password'
//                                 name='password' value={password} 
//                                 required
//                                 pattern='^[A-Za-z1-9].{7,15}'
//                                 onChange={(e)=> setPassword(e.target.value)}
                          
                                
//                             />
//                             <span >Password must have 8 to 16 characters</span>
//                         </div>
                        
//                         <div className="btn">
//                             <button className='submit' on onSubmit={handleSubmit}>Submit</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )
// }

// export default Banner
