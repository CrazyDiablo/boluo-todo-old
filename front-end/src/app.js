import TodoItem from "./components/todoItem"
import './app.less'

const App = () => {
    return (
        <div className='app'>
            <header>菠萝TODO</header>
                <div className='todo-list'>
                    <TodoItem />
                    <button>添加TODO</button>
                </div>         
            <footer></footer>
        </div>
    )
}

export default App