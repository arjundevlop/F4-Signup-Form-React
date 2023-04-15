
import './App.css';
import {useState} from "react";

function App() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = [];

    if (!email) {
      errors.push('Email is required');
    }

    if (!name) {
      errors.push('Name is required');
    }

    if (!password) {
      errors.push('Password is required');
    }

    if (!confirmPassword) {
      errors.push('Confirm password is required');
    }

    if (password !== confirmPassword) {
      errors.push('Passwords do not match');
    }
    setErrors(errors);

    if (errors.length > 0) {
      
      return;
    }

    setIsSubmitted(true);
    setEmail('');
    setName('');
    setPassword('');
    setConfirmPassword('');

    
  };

  return (
    <div className="signup-form-div">
    
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      
      <input type="text" name='fullName' placeholder="Full Name" value={name} onChange={(event) => setName(event.target.value)} required></input>
      
      <input type="email" name='email' placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}  required></input>
      
      <input type ="password" name='password' placeholder="Password" onChange={(event) => setPassword(event.target.value)} value={password}  required></input>
      
      <input type ="password" name='confirmPassword' placeholder="Confirm Password" onChange={(event) => setConfirmPassword(event.target.value)} value={confirmPassword}  required></input>
      {errors.length>0 ? (
        errors.map((item)=>{
          return(<div className='error'>{item}</div>)
        })
      ) : "" }

      {isSubmitted && (
         (<div className='success'>Sign Up successful!</div>)
      )}

      <button type="submit" onClick={() => setIsSubmitted(false)}>Signup</button>
     
    </form>
    
      
    </div>
  );
  
}

export default App;
