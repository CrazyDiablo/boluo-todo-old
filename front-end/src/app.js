import TodoItem from "./components/TodoItem"
import TodoList from './components/TodoList'

import './app.less'

const App = () => {

    let todoData = [
        {
            todoType: 'TODO',
            doType: '需求',
            todoText: '接口增删改查',
            completed: false,
        },
        {
            todoType: 'ToRead',
            todoText: '接口ssss增删改查',
            complete: false,
        },
        {
            todoType: 'TODO',
            doType: 'BUG',
            todoText: '接口增fffff删改查',
            complete: true,
        },
    ]
    return (
        <div className='app'>
            <header>菠萝TODO</header>
                <div className='todo-list'>
                    {/* <TodoItem /> */}
                    
                    <div className='todoConstructor'>
                        <button>添加TODO</button>
                    </div>
                    <TodoList todoData={todoData} />
                </div>         
            <footer></footer>
        </div>
    )
}

export default App