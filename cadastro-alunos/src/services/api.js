import axios from 'axios';

const api = axios.create({                                     
    baseURL: "https://bianca.nexustech.net.br/api",
})

export function mensagemDeErro(falha) {
    return(
        falha.response?.data?.mensagem || //perguntar p dindo 
        'Não foi possível falar com o servidor. Verifique a conexão e tente de novo.'
    )
}

export default api