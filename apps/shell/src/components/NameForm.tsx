import { useState } from 'react'
import './NameForm.css'
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
    <form onSubmit={handleSubmit} className="name-form">
      <input
        type="text"
        placeholder="Digite seu nome"
        className="name-form-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="submit"
        className="name-form-button"
      >
        Entrar
      </button>
    </form>
  )
}

export default NameForm
