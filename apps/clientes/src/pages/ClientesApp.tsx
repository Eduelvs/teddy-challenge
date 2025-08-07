import Header from '../components/Header'
import '../index.css'
import ClientesList from './ClientesList'

const ClientesApp = () => {
  return (
    <div className="clientes-app">
      <Header />
      <ClientesList />
      
    </div>
  )
}

export default ClientesApp
