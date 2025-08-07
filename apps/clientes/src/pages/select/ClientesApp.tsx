import Header from '../../components/Header';
import '../../index.css';
import ClientesSelect from './ClientesSelect';

const ClientesApp = () => {
  return (
    <div className="clientes-app">
      <Header />
      <ClientesSelect />
    </div>
  );
};

export default ClientesApp;
