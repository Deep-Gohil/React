import React, { useState } from 'react';
import { signupWithGoogle, signupWithData, uploadFile } from './config/firebase';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState('');

  const handleSignupWithData = async (e) => {
    e.preventDefault();
    const result = await signupWithData(email, password);
    console.log('User Info:', result);
  };

  const handleSignup = async () => {
    const result = await signupWithGoogle();
    console.log('User Info:', result.user);
  };

  const handleFileUpload = async () => {
    if (file) {
      const url = await uploadFile(file);
      setDownloadURL(url);
      console.log("Download URL:", url);
    } else {
      alert("Please select a file first!");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <form onSubmit={handleSignupWithData}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <input type="submit" value="Signup with Email" />
      </form>

      <button onClick={handleSignup}>Signup with Google</button><br /><br />

      <input type="file" onChange={(e) => setFile(e.target.files[0])} /><br />
      <button onClick={handleFileUpload}>Upload File</button>

      {downloadURL && (
        <div>
          <p>Uploaded File:</p>
          <a href={downloadURL} target="_blank" rel="noreferrer">{downloadURL}</a>
        </div>
      )}
    </div>
  );
};

export default App;
