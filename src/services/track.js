import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';

function fazerCadastro(novoUsuario) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, novoUsuario);
    return promise;
};

export {
    fazerCadastro,
};

