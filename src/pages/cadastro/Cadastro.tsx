import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import User from '../../models/User'
import { registerUser } from '../../services/Service'
import './cadastro.css'
import { RotatingLines } from 'react-loader-spinner'
import { ToastAlerta } from '../../utils/ToastAlerta'

function Cadastro() {

  const navigate = useNavigate()
  
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const[confirmPassword, setConfirmPassword] = useState<string>("")

  const [user, setUser] = useState<User>({
    id: 0,
    name: '',
    user: '',
    password: '',
    photo: ''
  })
  
  useEffect(() => {
    if (user.id !== 0){
      returnToLogin()
    }
  }, [user])

  function returnToLogin(){
    navigate('/login')
  }

  function updateState(e: ChangeEvent<HTMLInputElement>){
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }

  function handleConfirmPassword(e: ChangeEvent<HTMLInputElement>){
    setConfirmPassword(e.target.value)
  }

  async function registerNewUser(e: FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(confirmPassword === user.password && user.password.length >= 8){

      setIsLoading(true)

      try{
        await registerUser(`/usuarios/cadastrar`, user, setUser)
        ToastAlerta('Usuário cadastrado com sucesso!', 'info')
      }catch(error){
        ToastAlerta('Erro ao cadastrar o usuário!', 'error')
      }
    }else{
      ToastAlerta('Dados do usuário inconsistentes! Verifique as informações do cadastro.','erro')
      setUser({...user, password: ''})
      setConfirmPassword('')
    }

    setIsLoading(false)
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold">
        <div className="fundoCadastro hidden lg:block"></div>
        <form className='flex justify-center items-center flex-col w-2/3 gap-3' 
          onSubmit={registerNewUser}>
          <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-slate-700 rounded p-2"
             value = {user.name}
             onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Usuario</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-slate-700 rounded p-2"
              value = {user.user}
             onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="foto">Foto</label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="Foto"
              className="border-2 border-slate-700 rounded p-2"
              value = {user.photo}
             onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-slate-700 rounded p-2"
              value = {user.password}
             onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-slate-700 rounded p-2"
              value={confirmPassword}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmPassword(e)}
            />
          </div>
          <div className="flex justify-around w-full gap-8">
			<button 
                type='reset'
                className='rounded text-white bg-red-400 
                hover:bg-red-700 w-1/2 py-2' 
                onClick={returnToLogin}
			>
              Cancelar
            </button>
            <button 
                type='submit'
                className='rounded text-white bg-indigo-400 
                           hover:bg-indigo-900 w-1/2 py-2
                           flex justify-center' 
                >
                  {isLoading ? <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  /> :
                    <span>Cadastrar</span>
                  }
              
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cadastro
