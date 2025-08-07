import { useEffect, useState } from 'react'
import './ClientesList.css'
import { ClienteService } from '../services/api'

type Cliente = {
  id: number
  name: string
  salary: number
  companyValuation: number
}

const ClientesList = () => {
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [perPage, setPerPage] = useState(16)
  const [page, setPage] = useState(1)

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

  // Paginação
  const totalPages = Math.ceil(clientes.length / perPage)
  const startIdx = (page - 1) * perPage
  const endIdx = startIdx + perPage
  const clientesPage = clientes.slice(startIdx, endIdx)

  return (
    <div className="clientes-container">
      {/* Header */}
      <div className="clientes-header">
        <p><strong>{clientes.length}</strong> clientes encontrados:</p>
        <div>
          <label htmlFor="perPage">Clientes por página: </label>
          <select
            id="perPage"
            value={perPage}
            onChange={e => {
              setPerPage(Number(e.target.value))
              setPage(1)
            }}
          >
            {[4, 8, 12, 16].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid de cards */}
      <div className="clientes-grid">
        {clientesPage.map(cliente => (
          <div className="cliente-card" key={cliente.id}>
            <h2>{cliente.name}</h2>
            <p>Salário: {formatCurrency(cliente.salary)}</p>
            <p>Empresa: {formatCurrency(cliente.companyValuation)}</p>
            <div className="card-actions">
              <button title="Selecionar">➕</button>
              <button title="Editar">✏️</button>
              <button title="Excluir" className="danger">🗑️</button>
            </div>
          </div>
        ))}
      </div>

      {/* Rodapé */}
      <div className="clientes-footer">
        <button className="criar-btn">Criar cliente</button>
        <div className="paginacao">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button
              key={n}
              className={n === page ? 'active' : ''}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientesList
