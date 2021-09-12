import React from 'react'


export default function Notes({ note, onDelete }) {
    return (
        <>
            <div className="container">

                {/* <h5>{note.SrNo}</h5> */}
                <h5>{note.Title}</h5>
                <p>{note.Desc}</p>
                <button className="btn btn-danger btn-sm" onClick={() => { onDelete(note) }}>Delete</button>


                <hr />
            </div >
        </>
    )
}
