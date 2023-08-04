  import React from 'react';
import './App.css';
//import Note from './components/note/note'
//import {Notes} from './components/data';
//import AddNote from './components/add-note/add-note'
//import { NoteType } from './components/note-type';
import Chatboats from './components/Chatboat/Chatboats';
import { BrowserRouter as Router, Route,Routes,} from 'react-router-dom';
import Navbar from './components/Navbars/Navbar';
import Homepage from './components/Feature/pages/HomePage/HomePage';


function App() {
//   const [notes, setNotes]=useState(Notes);
//   const [editMode,setEditMode]=useState(false)
//   const [ noteToBeEditted,setNoteToBeEditted]=useState<NoteType | null>(null)

//   const addNote=(note:NoteType)=>{
//     setNotes([note, ...notes])
//   }
//   const updateNote=(updatedNote:NoteType)=>{
//     const index=notes.findIndex(note=>note.id===updatedNote.id);
// let editedNotes=[...notes]
// editedNotes.splice(index,1,updatedNote);
// setNotes(editedNotes);

//   }
//   const editNote=(id:string)=>{
// console.log('edit',id);
// const note=notes.find(note=>note.id===id);
// setEditMode(true); 
// if(note){
// setNoteToBeEditted(note);}
//  }
//   const deleteNote=(id:string)=>{
// const index=notes.findIndex(note=>note.id===id);
// let editedNotes=[...notes] 
// editedNotes.splice(index,1);
// setNotes(editedNotes);
// setEditMode(false)
// }
  return (
    <Router>
    <div className="App white">
<Navbar/>
 <Routes>

      {/* <Route path="/addnote" element={<AddNote addNote={addNote} editMode={editMode} noteToBeEditted={noteToBeEditted} updateNote={updateNote}/>}/> */}
      {/* <div>
        {notes.map((note, index)=>
        <Route  path="/note" element={<Note key={index} id={note.id} priority={note.priority} text={note.text} editNote={editNote} deleteNote={deleteNote}/>}/>)}
      </div> */}
      <Route path="/chatboats" element={<Chatboats />}/>
      <Route path="/Homepage" element={<Homepage/>}/>

     </Routes>
    </div>
    </Router>
  );
}

export default App;
