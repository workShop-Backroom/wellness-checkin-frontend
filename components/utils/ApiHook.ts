const apiBase = 'https://wellness76-0ce817f04dba.herokuapp.com/api/';

const ApiHook = () => {

    const register = async (username: string, password: string) => {
        const response = await fetch(apiBase + 'register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        return response.json();
    }

    const users = async () => {
        const response = await fetch(apiBase + 'users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    return {
        register,
        users
    }
};

export default ApiHook;