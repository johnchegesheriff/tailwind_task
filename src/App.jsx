import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { TODOS } from './data/todo'

function App() {

  const [todos, setTodos] = useState(TODOS)


  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  console.log(todos)

  

  return (
    <div className='flex bg-[#C36D3C] h-screen justify-center items-center'>
      <div className="bg-white h-4/6 w-8/12 rounded-md py-6 px-[2.8rem] overflow-scroll overflow-x-hidden">
        <h1 className='text-2xl font-bold text-[#3C92C3] font-serif text-center mb-10'>Hello world</h1>
        <AddTodo onAddTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default App
