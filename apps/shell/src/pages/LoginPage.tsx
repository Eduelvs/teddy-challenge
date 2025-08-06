import NameForm from '../components/NameForm'

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Bem-vindo!</h1>
        <NameForm />
      </div>
    </div>
  )
}

export default LoginPage
