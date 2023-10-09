import { useState } from 'react'



function Singup() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")


    const handleChange=(e)=>{
        setname(e.target.value)
    }
    const handleemailChange=(e)=>{
        setemail(e.target.value)
    }
    const handlepasswordChange=(e)=>{
        setpassword(e.target.value)
    }

    const handlesubmit=(e)=>{
        e.preventDefault()
        const newuser={

            name,email,password
        }
        console.log(newuser)
    }
  return (
    <div>
      <h2>User Singup</h2>
      <form onSubmit={handlesubmit}>

      <div>
        <label htmlFor='Name'>Name:</label>
        <input type='text' id='name' name='name' onChange={handleChange} value={name}></input>
      </div>


      <div>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' onChange={handleemailChange} value={email}></input>
      </div>


      <div>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' onChange={handlepasswordChange} value={password}></input>
      </div>


      <button type='Submit'>Singup</button>
      </form>
    </div>
  )
}

export default Singup
