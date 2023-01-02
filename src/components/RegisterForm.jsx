import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css'

function RegisterForm() {
    const navigate = useNavigate()

    const userRef = useRef()
    const errRef = useRef()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profilepic, setProfilepic] = useState({ })
    const [err, setErr] = useState('')

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErr('')
    }, [username, email, password, profilepic])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch('http://localhost:3001/adduser' + '?' +
            new URLSearchParams({
                name: username,
                email: email,
                password: password
            }))
            console.log(response)
            if(!response){
                setErr('No Server Response')
            }else if(response.status === 200){
                navigate("/login")
            }else if(response.status === 400){
                setErr('Email allready exists')
            }else {
                setErr('Registration Failed')
            }
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="form">
            <p ref={errRef} 
               className={err ? "err" : "offscreen"}>{err}</p>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputpair">
                    <label htmlFor='username'>Username:</label>
                    <input type="text" 
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                    />
                </div>
                <div className="inputpair">
                    <label htmlFor="email">Email:</label>
                    <input type="email" 
                        id="email"
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>
                <div className="inputpair">
                    <label htmlFor="password">Password:</label>
                    <input type="password" 
                        id="password"
                        autoComplete='current-password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                </div>
                <button>Sign up</button>
            </form>
        </div>
    )

}

export default RegisterForm