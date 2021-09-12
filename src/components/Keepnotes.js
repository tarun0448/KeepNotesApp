import React from 'react'
import Notes from './Notes'

export default function Keepnotes(props) {
    const myStyle = {
        minHeight: "43vh"
    }
    return (
        <div className="container my-3" style={myStyle}>

            {props.notes.length === 0 ? "there is not any notes to display" :
                props.notes.map((notes) => {
                    return <Notes note={notes} key={notes.SrNo} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}
