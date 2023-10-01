import React, {useState, useEffect} from "react";
import { CustomButton } from  "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import {addTodo, changeAllTodoDone, getAllTodoDone, getDoneTodo, setRenameTodo, deleteTodo, deleteDoneTasks, deleteAllTasks} from "../store/actions/todoAction";
import  Rename  from "../assets/icons/pencil.png"
import  Delete  from "../assets/icons/delete.png"
import TodoIcon from "../assets/icons/list.png"
import "../assets/style/home.scss"


const Todo = (props) => {

    const [newTodo, setnewValue] = useState('')
    const [renameTodoTitle, setRenmaeTodoTitle] = useState('')
    const [getRenameTodoId, setRenmaeTodoId] = useState()
    const [addTodoErrortext, setAddEtrrortext] = useState()
    const [renameTodoErrorText, setRenameTodoErrorText] = useState()
    const [renametask, setRenameTask] = useState()
    const dispatch = useDispatch()

    const { todo } = useSelector( store => ({
        todo: store.todoReducer.todo,
    }))

    // useEffect(() => {
    //     localStorage.setItem('todo', JSON.stringify(todo))
    // })
    
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])

    const handleCreateTodo=()=>{
        if(newTodo.trim() !== ''){
            setAddEtrrortext(false)
             dispatch(addTodo({     
                title: newTodo,
                isDone: false,
                id: new Date().getTime()
            }))
        } else {
            setAddEtrrortext(true)
        }
        setnewValue('')
    }

    const handleChangeAllTodo = () => {
        dispatch(changeAllTodoDone(false))
    }

    const hnadleGetTodoDone = () => {
        dispatch(getAllTodoDone(true))
    }


    const handleDone =(elemId)=>{
        dispatch(getDoneTodo(elemId))
    }



    const handleRenameTodo = (todoId, elemTitle) => {
        setRenameTask(true);
        setRenmaeTodoId(todoId, elemTitle)
        setRenmaeTodoTitle(elemTitle)

    }

    const getRenameTodo = () => {
        if(renameTodoTitle.trim() !== ""){
            dispatch(setRenameTodo(getRenameTodoId, renameTodoTitle))
            setRenameTask(false)
        } else {
            setRenameTask(true)
            setRenameTodoErrorText(true)
        }
    }

    const handleCancelRename = () => {
        setRenameTask(false)
    }

    const  handleDelete=(id)=>{
        dispatch(deleteTodo(id))
    }

    const handleDeleteDoneTasks = () => {
        dispatch(deleteDoneTasks())
    }

    const handleDeleteAllTasks = () => {
        dispatch(deleteAllTasks())
    }

    return (
        <div className='wrapper'>
            <div className="container">
                <React.Fragment>
                    <div className="todoInputContainer">
                        <div className="todoInputitlContenet">
                            <h1>TodoInput</h1>
                        </div>
                        <div className="todoAddContent">
                            <div className="todoAddInputcontainer">
                                <div className="todoInputContent">
                                    <img src={ TodoIcon } alt="to-do.png"/>
                                    <input type="text"  className={`todoInputValue ${addTodoErrortext === true ? 'todoInputError' : ''}`} onChange={(e) => setnewValue(e.target.value)} value={newTodo} placeholder="New Todo"/>
                                </div>
                                <div className="todoInputErrorMessage">
                                    <span className={`todoSpan ${addTodoErrortext === true ? 'todoMessage' : ''}`}>Please, write your todo</span>
                                </div>
                            </div>
                            <div className="todoAddButtonContent">
                                <CustomButton text={"Add New Task"} onClick={() => handleCreateTodo()}/>
                            </div>
                        </div>
                    </div>
                    <div className="todoToolsMain">
                        <CustomButton text={"All"} onClick={() => handleChangeAllTodo()}/>
                        <CustomButton text={"Done"} onClick={() => hnadleGetTodoDone()}/>
                        <CustomButton text={"Todo"} />
                    </div>
                    <ul className="todoListContent"> 
                        {todo?.map((elem) => (   
                            <li key={elem.id}>
                                <div className="todoTitleContent">
                                    <p className={`todoTitle ${elem.isDone ? 'doneTodo' : ''}`}>{elem.title}</p>
                                </div>
                                <div className="todoToolsContent">
                                    <input type="checkbox"  onChange={() => handleDone(elem.id)} checked={elem.isDone}/> 
                                    <img src={ Rename } alt="pencil.png" onClick={() => handleRenameTodo(elem.id, elem.title)}/>
                                    <img src={ Delete } alt="delete.png" onClick={() => handleDelete(elem.id)}/>
                                </div>
                            </li>
                        ))}      
                    </ul>
                    <div className={`renametask ${renametask === true ? 'activerenametask' : '' }`}>
                        <div className="renameTaskContent">
                            <input type="text" className={`renameIput ${renameTodoErrorText === true ? 'renameInputError' : ''}`} onChange={(e) => setRenmaeTodoTitle(e.target.value)} value={renameTodoTitle}/>
                            <CustomButton text={"Rename Todo"} onClick={() => getRenameTodo()}/>
                            <CustomButton text={"Cancel Rename Todo"} onClick={() => handleCancelRename()}/>
                        </div>
                        <div className="renameTaskErrorMessage">
                            <span className={`renameTodoError ${renameTodoErrorText === true ? 'renameTodoErrorMessage' : ''}`}>Plesae, write your todo or preess the "Cancel Rename Todo" button</span>
                        </div>
                    </div>
                    <div className="todoToolsFooter">
                        <CustomButton text={"Delete done tasks"} onClick={() => handleDeleteDoneTasks()}/>
                        <CustomButton text={"Delete all tasks"} onClick={() => handleDeleteAllTasks()}/>
                    </div>
                </React.Fragment>
            </div>
        </div>
    )
}

export default Todo;