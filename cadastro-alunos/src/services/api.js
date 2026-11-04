import axios from 'axios';

const api = axios.create({                                     
    baseURL: "https://bianca.nexustech.net.br/api",
})

//Se antes de enviar a requisição, o token estiver salvo no localStorage, ele será enviado no cabeçalho da requisição
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

//Se a resposta da requisição for 401, significa que o token não é válido ou expirou. Neste caso, o usuário será deslogado e redirecionado para a página de login
api.interceptors.response.use(
    (resposta) => resposta,    
    (falha) => { 
        const ehPedidoDeLogin = falha.config?.url === '/login'
        if (falha.response?.status === 401 && !ehPedidoDeLogin) {
            localStorage.removeItem('token')
            localStorage.removeItem('usuario')
            window.location.href = '/login'
        }
        return Promise.reject(falha)
    }
    
)


export function mensagemDeErro(falha) {
    return(
        falha.response?.data?.mensagem || 
        'Não foi possível falar com o servidor. Verifique a conexão e tente de novo.'
    )
}

export default api