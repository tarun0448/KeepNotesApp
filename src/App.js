import './App.css';
import Header from "./components/Header";
import Keepnotes from "./components/Keepnotes";
import Footer from "./components/Footer";
import Addnote from './components/Addnote';
import React, { useState } from 'react';
import { useEffect } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initNotes;
  if (localStorage.getItem("notes") === null) {
    initNotes = [];
  } else {
    initNotes = JSON.parse(localStorage.getItem("notes"));
  }

  const onDelete = function (note) {
    setNotes(notes.filter((e) => {
      return e !== note;
    }
    ));
    localStorage.setItem("notes", JSON.stringify(notes));
  }


  const addNote = function (title, desc) {
    let SrNo;
    if (notes.length === 0) {
      SrNo = 1;
    } else {
      SrNo = notes[notes.length - 1].SrNo + 1;
    }
    const addNote = {
      SrNo: SrNo,
      Title: title,
      Desc: desc
    }
    setNotes([...notes, addNote]);

  }


  const [notes, setNotes] = useState(initNotes);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes])

  return (
    <>
      <Router>
        <Header title={"Keep Notes"} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addnote addNote={addNote} />
                <Keepnotes notes={notes} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
