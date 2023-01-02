import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Form.css'

function Login(props) {

    const navigate = useNavigate();

    const emailRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErr('')
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `http://localhost:3001/user?email=${email}&password=${password}`;
            let response = await fetch(url)
            if(!response){
                setErr('No Server Response')
            }else if(response.status === 200){
                let json = await response.json()
                console.log(json)
                props.setUser(json)
                console.log(email, password)
                setEmail('')
                setPassword('')
                navigate("/")
            }else if(response.status === 400){
                setErr('User email does not exist')
            }else if(response.status === 401){
                setErr('Password is incorrect')
            }else {
                setErr('Login Failed')
            }
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="form">
            <p ref={errRef} 
               className={err ? "err" : "offscreen"}>{err}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputpair">
                    <label htmlFor="email">Email:</label>
                    <input type="email" 
                        id="email"
                        ref={emailRef}
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
                <button>Sign in</button>
            </form>
            <p>
                Need an Account?<br/>
                <Link to="/register">Sign Up Here</Link>
            </p>
        </div> 
    )
}

export default Login;