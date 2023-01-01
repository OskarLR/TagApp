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

    const fetchUser = async () => {
        const url3 = `http://localhost:3001/user?email=${email}&password=${password}`;
        try {
            let response = await fetch(url3)
            let json = await response.json()
            console.log(json)
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let user = await fetchUser()
        props.setUser(user)
        console.log(email, password)
        setEmail('')
        setPassword('')
        navigate("/")
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