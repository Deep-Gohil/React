import React, { useState } from 'react';
import { signupWithGoogle,signupWithData } from './config/firebase';

const App = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSignupWithData = async(e)=>{
    e.preventDefault()
    const result = await signupWithData(email,password);
    console.log('User Info:', result)
  }

  const handleSignup = async () => {
      const result = await signupWithGoogle();
      console.log('User Info:', result.user);
  };

  return (

    
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <form onSubmit={handleSignupWithData}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
      <button onClick={handleSignup}>Google</button>
    </div>
  );
};

export default App;
