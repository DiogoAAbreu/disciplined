import axios from "axios";


function fazerCadastro(novoUsuario) {
    const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/auth/sign-up`, novoUsuario);
    return promise;
};

function fazerLogin(usuario) {
    const promise = axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, usuario);
    return promise;
}

function listarHabitos(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const promise = axios.get(`${process.env.REACT_APP_BASE_URL}/habits`, config);

    return promise;
}

export {
    fazerCadastro,
    fazerLogin,
    listarHabitos,
};

