import Tarefa from './components/Tarefa'

function App() {
    return (
        <main>
            <h1>To-Do List App</h1>
                <ul>
                    <Tarefa texto={"Estudar React"}/>
                    <Tarefa texto={"Fazer compras"}/>
                    <Tarefa texto={"Responder e-mails"}/>
                </ul>
        </main>
    )
}
export default App