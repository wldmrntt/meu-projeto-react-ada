import { useEffect, useState } from 'react'
import './style.css'

export default function App() {

  const [tarefas, setTarefas] = useState([])

  useEffect(() => {

    async function buscarDados() {
      const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
      const resuldadoFinal = await resultado.json()
      return resuldadoFinal
    }

    buscarDados().then(res => setTarefas(res))

  }, [])

 return (
    <div className="seletor">
      <h1>Efeitos Colaterais</h1>
      <ol>
        {tarefas.map((tarefas) => {
          return (
            <div>
              <li key={tarefas.id}>
                {tarefas.title}<span>{tarefas.completed ? ' - Tarefa Concluída' : ' - Não concluída'}</span>
              </li>
            </div>
          )
        })}
      </ol>
    </div>
  )
}