
export const register = async (username: string) => {
    try {
        const response = await fetch(`http://localhost:8080/user/register?username=${username}`, {
            method: 'POST'
            }
        );

        if (!(response.ok)) {
            const errorInfo = await response.json();
            throw new Error(errorInfo || "Registration failed");
        }

        const data = await response.json();
        console.log('Registration successful: ', data);
        return data;
    } catch (error) {
        console.error("Error during registration", error);
    }
}

export const login = async (username: string) => {
    try {
        const response = await fetch(`http://localhost:8080/user/login?username=${username}`);

        if (!(response.ok)) {
            const errorInfo = await response.json();
            throw new Error(errorInfo || "Login failed");
        }

    } catch (error) {
        console.error("Error during login", error);
    }
}