import { useState, type FormEvent } from 'react'
import axios from 'axios'
import './App.css'

type LoginResponse = {
  token?: string
}

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setStatusMessage('Verificando login...')

    try {
      const response = await axios.post<LoginResponse>('https://fakestoreapi.com/auth/login', {
        username,
        password,
      })

      if (response.data?.token) {
        setStatusMessage('Login validado com sucesso!')
      } else {
        setStatusMessage('Login não retornou token de sucesso.')
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setStatusMessage('Falha ao validar login. Verifique usuário e senha.')
      } else {
        setStatusMessage('Não foi possível validar login no momento.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="button-demo-page">
      <section className="button-demo-card" aria-labelledby="demo-title">
        <p className="eyebrow">Exercício de UX</p>
        <h1 id="demo-title">Botão de Carregamento</h1>
        <p className="description">
          Informe usuário e senha para validar o login via API Fake Store.
        </p>

        <form className="button-demo-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
          <label htmlFor="username">Usuário</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <button type="submit" className="primary-button" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="button-loading" aria-live="polite">
                <span className="spinner" aria-hidden="true" />
                Entrando...
              </span>
            ) : (
              'Login'
            )}
          </button>

          <p className="helper-text">
            {isSubmitting
              ? 'Processando a solicitação. Aguarde um instante.'
              : 'Use credenciais válidas da Fake Store API para testar.'}
          </p>

          <p className="status-message" aria-live="polite">
            {statusMessage}
          </p>
        </form>
      </section>
    </main>
  )
}

export default App
