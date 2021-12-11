import React from 'react';
import {Text, Color} from 'ink';
import {useState} from 'react';
import Username from './username';
import Password from './password';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Username username={username} setUsername={setUsername} />
      <Password password={password} setPassword={setPassword} />
  </>
  );
}