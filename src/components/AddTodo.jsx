import React, { useState } from "react";
import uuid4 from "uuid4";

const AddTodo = ({ onAddTodo }) => {

    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let todo = {
            id: uuid4(),
            description,
            completed: false
        }
        onAddTodo(todo)
        setDescription("")
        
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }



    return (
       <form className=" mb-11" onSubmit={handleSubmit}>
            <input type="text" name="description" className="border-b-[1px] border-[#3C92C3] h-10 w-9/12 mr-5 outline-none placeholder:text-[#3C92C3] pl-5" placeholder="Add your todo"  onChange={handleDescription} value={description}/>
            <button type="submit" className="px-6 py-2 bg-[#3C92C3] rounded-md text-white font-bold hover:border-[#3C92C3] hover:border-[.5px] hover:text-[#3C92C3] hover:bg-white transition ease-in hover:delay-200">Add Todo</button><br />
       </form>
    )
}

export default AddTodo;