"use client";

import React, { useState } from "react";

const LoginPanel = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (password === process.env.LOGIN_PASSWORD) {
            setError("");
            // Handle successful login here
        } else {
            setError("Invalid password");
        }
    };

    return (
        <div className="login-panel">
            <h2>Login Panel</h2>
            {/* Add your login form or components here */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPanel;