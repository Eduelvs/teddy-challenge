import { useEffect, useState } from 'react';
import { ClienteService } from '../../services/api';
import './ClientesSelect.css';

type Cliente = {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
};

const ClientesSelect = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  useEffect(() => {
    ClienteService.listar()
      .then((res) => {
        // Filtra apenas os clientes selecionados
        const selecionados = JSON.parse(localStorage.getItem('clientesSelecionados') || '[]');
        const filtrados = res.data.clients.filter((c: Cliente) => selecionados.includes(c.id));
        setClientes(filtrados);
      })
      .catch((err) => console.error('Erro ao buscar clientes', err));
  }, []);

  const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });

  return (
    <div className="clientes-container">
      {/* Header */}
      <div className="clientes-header">
        <p>
          <strong>{clientes.length}</strong> clientes Selecionados
        </p>
      </div>

      {/* Grid de cards */}
      <div className="clientes-grid">
        {clientes.map((cliente) => (
          <div className="cliente-card" key={cliente.id}>
            <h2>{cliente.name}</h2>
            <p>Salário: {formatCurrency(cliente.salary)}</p>
            <p>Empresa: {formatCurrency(cliente.companyValuation)}</p>
            <div className="card-actions">
              <button
                className="remover"
                onClick={() => {
                  // Remove o cliente dos selecionados
                  const selecionados = JSON.parse(
                    localStorage.getItem('clientesSelecionados') || '[]'
                  );
                  const novos = selecionados.filter((id: number) => id !== cliente.id);
                  localStorage.setItem('clientesSelecionados', JSON.stringify(novos));
                  setClientes(clientes.filter((c) => c.id !== cliente.id));
                }}
              >
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g id="Edit / Remove_Minus">
                      {' '}
                      <path
                        id="Vector"
                        d="M6 12H18"
                        stroke="#ff0000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{' '}
                    </g>{' '}
                  </g>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="remover-todos"
        onClick={() => {
          localStorage.removeItem('clientesSelecionados');
          setClientes([]);
        }}
      >
        <b>Limpar Clientes Selecionados</b>
      </button>
    </div>
  );
};

export default ClientesSelect;
