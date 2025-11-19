
export const register = async (username: string, password: string) => {
    try {
        const response = await fetch(`http://localhost:8080/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
            }
        );

        if (!(response.ok)) {
            const errorInfo = await response.json();
            throw new Error(errorInfo || "Registration failed");
        }

        const data = await response.json();
        console.log('Registration successful: ', data);
        return data.success;
    } catch (error) {
        console.error("Error during registration", error);
    }
}

export const login = async (username: string, password: string) => {
    try {
        const response = await fetch(`http://localhost:8080/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }
        );
        if (!(response.ok)) {
            const errorInfo = await response.json();
            throw new Error(errorInfo || "Login failed");
        }
        const data = await response.json();
        console.log('Login successful: ', data);
        return data.success;
    } catch (error) {
        console.error("Error during login", error);
    }
}