import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const TodoItem = ({ todo }) => {

    const {id, description, completed} = todo;

    const handleChange = (e) => {
        console.log(e);
        
    }


    return (
        <div className="border-2 mb-5 flex items-center h-10 px-3 hover:cursor-pointer hover:bg-[#C36D3C] hover:text-white">
            <input type="checkbox" name="completed" className="initial" checked={completed}  onChange={(e) => handleChange(e.target.checked) }/>
            <p className="w-5/6 ml-2">{ description }</p>
            <FaRegTrashCan className="text-red-700" />        
        </div>
    )
}

export default TodoItem;