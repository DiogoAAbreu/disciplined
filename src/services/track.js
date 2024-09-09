import axios from "axios";


function fazerCadastro(novoUsuario) {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/auth/sign-up`, novoUsuario);
};

function fazerLogin(usuario) {
    return axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, usuario);
}

function listarHabitos(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return axios.get(`${process.env.REACT_APP_BASE_URL}/habits`, config);
}

function postarHabitos(habito, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.post(`${process.env.REACT_APP_BASE_URL}habits`, habito, config);
}

export {
    fazerCadastro,
    fazerLogin,
    listarHabitos,
    postarHabitos,
};

