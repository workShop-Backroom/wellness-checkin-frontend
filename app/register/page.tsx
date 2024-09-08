"use client"
import ApiHook from "@/components/utils/ApiHook";
import {useState} from "react";

const Register = () => {
    const { register } = ApiHook();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={() => {}}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default Register;