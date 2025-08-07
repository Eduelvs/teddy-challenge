import axios from 'axios';

export interface ClienteData {
  name: string;
  salary: number;
  companyValuation: number;
}

// Pode vir de uma .env futuramente
const api = axios.create({
  baseURL: 'https://boasorte.teddybackoffice.com.br',
});

export const ClienteService = {
  listar: (limit = 100) => api.get(`/users?limit=${limit}`),
  criar: (data: ClienteData) => api.post('/users', data),
  atualizar: (id: string, data: ClienteData) => api.patch(`/users/${id}`, data),
  excluir: (id: string) => api.delete(`/users/${id}`),
};
