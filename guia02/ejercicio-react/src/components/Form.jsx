import React, {useState} from "react";
import Todo from "./All";


const Form = () =>{
    const[todo, setTodo] = useState({})
    const[cantidad, setCantidad]=useState({})
    const [todos, setTodos]=useState([
      
    ])


    const handleChange = e => setTodo({todo: e.target.value})
    const handleChange2 = e => setCantidad({cantidad: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length ===0 || todo.todo.trim() === '')
        {
            alert('Debes ingresar el nombre de algún producto')
            return
        }
        if(Object.keys(cantidad).length ===0 || cantidad.cantidad.trim() === '')
        {
            alert('Debes ingresar la cantidad')
            return
        }

    setTodos([...todos,{todo: todo.todo , cantidad: cantidad.cantidad}])
    }
    const deleteTodo = indice =>{
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    return(
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>
            Agregar
            </label><br />
            <input type="text" name="todo" onChange={handleChange}/>
            <input onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} name="cantidad" onChange={handleChange2}/>
            <button onClick={handleClick}>Agregar</button>
        </form>
        {
            todos.map((value, index)=> (<Todo todo={value.todo} cantidad={value.cantidad} key={index} index={index} deleteTodo={deleteTodo}/>))
        }

        
        </>
    )
}
export default Form