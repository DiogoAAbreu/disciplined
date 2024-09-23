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

    return axios.get(`${process.env.REACT_APP_BASE_URL}habits`, config);
}

function postarHabitos(habito, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.post(`${process.env.REACT_APP_BASE_URL}habits`, habito, config);
}

function deletarHabito(idHabito, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return axios.delete(`${process.env.REACT_APP_BASE_URL}habits/${idHabito}`, config)
}

function listarHabitosHoje(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return axios.get(`${process.env.REACT_APP_BASE_URL}habits/today`, config);
}

function marcarConcluido(id, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return axios.post(`${process.env.REACT_APP_BASE_URL}habits/${id}/check`, '', config)
}

export {
    fazerCadastro,
    fazerLogin,
    listarHabitos,
    postarHabitos,
    deletarHabito,
    listarHabitosHoje,
    marcarConcluido,
};

