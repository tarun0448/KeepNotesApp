import React from 'react'
import { useState } from 'react';

export default function Addnote({ addNote }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Do not keep it blank")
        }
        else {
            addNote(title, desc);
            setTitle("");
            setDesc("");

        }

    }
    return (
        <form onSubmit={submit}>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Note Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Note Description</label>
                    <textarea className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} id="desc" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>


    )
}
