import TodoItem from "./components/TodoItem"
import TodoList from './components/TodoList'
import Ajax from './utils/ajax'

import './app.less'

const App = () => {
    let ajax = new Ajax()
    const getTodoList = async () => {
        let data = []
        let path = 'http://127.0.0.1:80/api/todo/all'
        ajax.get(path, (res) => {
            data = [...res]
            console.log('data', data)
        })
    }
    const addTodo = () => {
        let data = [
            {
                "todescription": "TODO",
                "description": "测试",
                "todoText": "添加TODO接口",
                "completed": false
            }
        ]
        // let data = {
        //     "todescription": "TODO",
        //     "description": "测试",
        //     "todoText": "添加TODO接口",
        //     "completed": false
        // }
        // let data = '哈哈哈呵呵呵嘿嘿嘿吼吼吼'
            
        data = JSON.stringify(data)
        let path = 'http://127.0.0.1:80/api/todo/add'
        ajax.post(path, data, () => {
            console.log('哈哈哈')
        })
    }
    getTodoList()
    addTodo()
    let todoData = [
        {
            todescription: 'TODO',
            description: '需求',
            todoText: '接口增删改查',
            completed: false,
        },
        {
            todescription: 'ToRead',
            todoText: '接口ssss增删改查',
            complete: false,
        },
        {
            todescription: 'TODO',
            description: 'BUG',
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