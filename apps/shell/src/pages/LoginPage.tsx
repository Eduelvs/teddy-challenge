import NameForm from '../components/NameForm';
import './index.css';

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1 className="login-title">Olá, Seja Bem-vindo!</h1>
        <NameForm />
      </div>
    </div>
  );
};

export default LoginPage;
