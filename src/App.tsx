import { useState } from 'react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <main className="login-page">
      <section className="login-shell" aria-label="Acesso à conta">
        <aside className="login-story">
          <p className="eyebrow">UX de login</p>
          <h1>Entre com clareza, confiança e menos atrito.</h1>
          <p className="story-copy">
            Uma tela pensada para reduzir esforço cognitivo: hierarquia visual
            evidente, linguagem direta e estados de interação previsíveis.
          </p>

          <ul className="benefits" aria-label="Benefícios do acesso">
            <li>Feedback visual imediato ao interagir</li>
            <li>Campos com rótulos e ajuda contextual</li>
            <li>CTA destacado para orientar a ação principal</li>
          </ul>

          <div className="insight-card">
            <span className="insight-label">Boa prática</span>
            <strong>Priorize legibilidade, foco visível e decisão rápida.</strong>
          </div>
        </aside>

        <section className="login-card">
          <div className="card-header">
            <span className="brand-mark" aria-hidden="true">
              UX
            </span>
            <div>
              <h2>Login</h2>
              <p>Acesse sua conta em segundos.</p>
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

            <p className="support-text">
              Ao entrar, você concorda com a nossa política de acesso e uso.
            </p>
          </form>
        </section>
      </section>
    </main>
  )
}

export default App
