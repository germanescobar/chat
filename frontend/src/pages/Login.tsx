function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="m-4 flex">
        <input className="rounded-l-lg p-4 w-96 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Ingresa tu nombre" autoFocus={true} />
      <button className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Entrar</button>
    </form>
  </div>
  )
}

export default Login
