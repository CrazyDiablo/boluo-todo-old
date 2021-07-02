import TodoList from './components/TodoList'
import todo from './service/todo'

import './app.less'
import { useEffect } from 'react'

const App = () => {
    const initData = async () => {
        let data = await todo.all()
        let addData = {
            "todoType": "111",
            "description": "222",
            "todoText": "333",
            "completed": 444,
        }
        // let addData = [{
        //     "todoType": "111",
        //     "description": "222",
        //     "todoText": "333",
        //     "completed": 444,
        // }]
        let resAdd = await todo.add(addData)

        let updateData = {
            "todoType": "111",
            "description": "222",
            "todoText": "333",
            "completed": 444,
        }
        // let data = await todo.update()
        // let data = await todo.delete()
        
        
        console.log('resAdd', resAdd)
        console.log('data init', data)
    }
    useEffect(() => {
        initData()
    }, [])

    return (
        <div className='app'>
            <header>菠萝TODO</header>
                <div className='todo-list'>
                    {/* <TodoItem /> */}
                    
                    <div className='todoConstructor'>
                        <button>添加TODO</button>
                    </div>
                    {/* <TodoList todoData={todoData} /> */}
                </div>         
            <footer></footer>
        </div>
    )
}

export default App