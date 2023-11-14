import { useEffect, useState } from 'react'

import styles from './titulo.module.css';

import style from './task.module.css';

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
    <div>
      <h1 className={styles.titulo}>Deploy na Vercel</h1>
      <div>
        {tarefas.map((tarefa) => {
          return (
            <div className='task-item' key={tarefa.id}>
              <p>{tarefa.id} - {tarefa.title} - <span className={tarefa.completed ? style.taskConcluida : style.taskNaoConcluida}>
                {tarefa.completed ? 'Tarefa Concluída' : 'Não concluída'}
              </span></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}