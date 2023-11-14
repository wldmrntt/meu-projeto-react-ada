// App é o primeiro componente da Aplicação, crescendo como uma árvore
import { useEffect, useState } from "react"
import './components/index.css'

const tarefas = [
  { id: '1', title: 'Minha primeira tafera' },
  { id: '2', title: 'Minha segunda tafera' },
  { id: '3', title: 'Minha terceira tafera' },
  { id: '4', title: 'Minha quarta tafera' },
]

export default function App() {

  const [tarefas, setTarefas] = useState([])

  useEffect(() => {

    async function buscarDados() {
      fetch('https://jsonplaceholder.typicode.com/todos')
      then(res => res.json())
      then(res => setTarefas.json())
    }

    buscarDados()
  }, [])


  return (
    <div className={style.titulo}>
      <h1>Deploy na Vercel</h1>
      <div>
        {tarefas.map((tarefas) => {
          return (
            <div className='task-item' key={tarefas.id}>
            <p> {tarefas.id} - {tarefas.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

