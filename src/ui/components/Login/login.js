import React from "react";
import { useState } from "react";
import Username from "./username";
import Password from "./password";
export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [status, setStatus] = useState(false);
	return (
		<>
			{status ? (
				<Password password={password} setPassword={setPassword} />
			) : (
				<Username
					username={username}
					setUsername={setUsername}
					setStatus={setStatus}
				/>
			)}
		</>
	);
}
