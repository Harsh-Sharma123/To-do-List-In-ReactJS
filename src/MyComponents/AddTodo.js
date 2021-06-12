import React, { useState } from 'react';

export const AddTodo = (props
    )=> {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can't be Blank!");
        }else{
            props.addTodo(title, desc);
            settitle("");
            setdesc("");
        }
    }


    return (
        <div className="container my-3 bg-light">
            <h3>Add A Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{
                        settitle(e.target.value)
                    }} className="form-control" id="title" aria-describedby="emailHelp" />
                        
                </div>
                    <div className="form-group">
                        <label htmlFor="desc">Todo Description</label>
                        <input type="text" value={desc} onChange={(e)=>{
                            setdesc(e.target.value)
                        }} className="form-control" id="desc" />
                    </div>
                        
                    <button type="submit" className="btn btn-success btn-sm my-2 px-3">Add Todo</button>
            </form>
        </div>
    )
}
