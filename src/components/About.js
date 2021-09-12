import React from 'react'


export default function About() {
    const myStyle = {
        minHeight: "82vh"
    }
    return (
        <>
            <div className="container my-3 text-center" style={myStyle}>
                <h5>About Keep Notes App</h5>
                <div className="text-justify">
                    <h6>What is a Keep Notes List?</h6>
                    <p> What is a Keep Notes List? The definition is a simple one. It’s a list of tasks you need to complete, or things that you want to do.</p>

                    <p> Most typically, they’re organised in order of priority. Traditionally, they’re written on a piece of paper or post it notes and acts as a memory aid. As technology has evolved we have been able to create a Keep Notes lists with excel spreadsheets, word documents, email lists, Keep Notes list apps, microsoft to do and google to do list to name a few. You can use a to do list in your home and personal life, or in the workplace.</p>

                    <p> Having a list of everything you need to do written down in one place means you shouldn’t forget anything important. By prioritising the tasks in the list you plan the order in which you’re going to do them and can quickly see what needs your immediate attention and what tasks you can leave until a little later.</p>

                </div>
            </div>
        </>
    )
}
