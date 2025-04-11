
import React, { useRef, useState } from 'react';

function LoginForm() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email) {
      setError('Email is required');
      emailRef.current.focus(); // Auto focus email input
      return;
    }

    if (!password) {
      setError('Password is required');
      passwordRef.current.focus(); // Auto focus password input
      return;
    }

    setError('');
    alert(`Logged in as: ${email}`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
      <h3>Login Form (useRef Example)</h3>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" placeholder="Email" /><br /><br />
        <input ref={passwordRef} type="password" placeholder="Password" /><br /><br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default LoginForm;

