import { useEffect, useRef, useState, type FormEvent } from 'react'
import './App.css'

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const submitTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (submitTimerRef.current !== null) {
        window.clearTimeout(submitTimerRef.current)
      }
    }
  }, [])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setStatusMessage('Processando seu acesso. Aguarde um instante.')

    submitTimerRef.current = window.setTimeout(() => {
      setIsSubmitting(false)
      setStatusMessage('Ação concluída com sucesso!')
    }, 1600)
  }

  return (
    <main className="button-demo-page">
      <section className="button-demo-card" aria-labelledby="demo-title">
        <p className="eyebrow">Exercício de UX</p>
        <h1 id="demo-title">Botão de Carregamento</h1>
        <p className="description">
          Este exemplo simula uma ação que leva alguns segundos. O usuário recebe
          retorno imediato, vê o estado atual e não consegue disparar a ação em
          duplicidade.
        </p>

        <form className="button-demo-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
          <button type="submit" className="primary-button" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="button-loading" aria-live="polite">
                <span className="spinner" aria-hidden="true" />
                Enviando...
              </span>
            ) : (
              'Enviar'
            )}
          </button>

          <p className="helper-text">
            {isSubmitting
              ? 'Processando a solicitação. Aguarde um instante.'
              : 'Clique para simular uma operação com retorno ao usuário.'}
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
