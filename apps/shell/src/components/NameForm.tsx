import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NameForm = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    localStorage.setItem('username', name.trim())
    navigate('/clientes')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Digite seu nome"
        className="border border-gray-300 rounded px-4 py-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
      >
        Entrar
      </button>
    </form>
  )
}

export default NameForm
