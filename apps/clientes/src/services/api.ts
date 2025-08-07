import axios from 'axios'

// Pode vir de uma .env futuramente
const api = axios.create({
  baseURL: 'https://boasorte.teddybackoffice.com.br',
})

export const ClienteService = {
  listar: () => api.get('/users'),
  criar: (data: any) => api.post('/users', data),
  atualizar: (id: string, data: any) => api.put(`/users/${id}`, data),
  excluir: (id: string) => api.delete(`/users/${id}`),
}
