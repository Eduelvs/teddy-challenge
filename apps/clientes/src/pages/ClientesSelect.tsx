import { useEffect, useState } from 'react'
import './ClientesList.css'
import { ClienteService } from '../services/api'

type Cliente = {
  id: number
  name: string
  salary: number
  companyValuation: number
}

const ClientesSelect = () => {
  const [clientes, setClientes] = useState<Cliente[]>([])
  useEffect(() => {
    ClienteService.listar()
      .then(res => setClientes(res.data.clients))
      .catch(err => console.error('Erro ao buscar clientes', err))
  }, [])

  const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    })

  return (

    <div className="clientes-container">
      {/* Header */}
      <div className="clientes-header">
        <p><strong>{clientes.length}</strong> clientes Selecionados</p>
      </div>

      {/* Grid de cards */}
      <div className="clientes-grid">
        {clientes.map(cliente => (
          <div className="cliente-card" key={cliente.id}>
            <h2>{cliente.name}</h2>
            <p>Salário: {formatCurrency(cliente.salary)}</p>
            <p>Empresa: {formatCurrency(cliente.companyValuation)}</p>
            <div className="card-actions">
              <button title="Selecionar">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Remove_Minus"> <path id="Vector" d="M6 12H18" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  )
}

export default ClientesSelect
