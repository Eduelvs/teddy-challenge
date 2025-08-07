import './LoadingScreen.css';
const LoadingScreen = ({ message = 'Carregando...' }) => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
};

export default LoadingScreen;
