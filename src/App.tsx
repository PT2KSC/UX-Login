import { useState } from 'react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="login-page">
      <section className="login-shell" aria-label="Acesso à conta">
        <section className="login-card">
          <div className="card-header">
            <div>
              <h2>Login</h2>
              <p>Acesse sua conta.</p>
            </div>
          </div>

          <form className="login-form">
            <label className="field">
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                placeholder="voce@empresa.com"
                autoComplete="email"
              />
            </label>

            <label className="field">
              <span>Senha</span>
              <div className="password-row">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Digite sua senha"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="ghost-button"
                  aria-pressed={showPassword}
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  onClick={() => setShowPassword((value) => !value)}
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
            </label>

            <div className="form-row">
              <label className="remember">
                <input type="checkbox" name="remember" />
                <span>Lembrar de mim</span>
              </label>

              <a className="link" href="/">
                Esqueceu a senha?
              </a>
            </div>

            <button type="submit" className="primary-button">
              Entrar
            </button>
          </form>
        </section>
      </section>
    </main>
  )
}

export default App
