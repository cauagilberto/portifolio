import Tarefa from './components/Tarefa'

function App() {
    const tarefas = ["Estudar React", "Fazer compras", "Responder e-mails"]
    return (
        <main>
            <h1>To-Do List App</h1>
                <ul>
                    {tarefas.map(tarefa => <Tarefa texto={tarefa}/>)}
                </ul>
        </main>
    )
}
export default App