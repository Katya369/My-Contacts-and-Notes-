import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import contacts from '../contacts.js';
import Card from './Card.jsx';
import notes from "../notes.js";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note){
   setNotes(prevNotes => {
    return [...prevNotes,note];
   });
      }
   function deleteNote(id) {
setNotes(prevNotes => {
 return prevNotes.filter((noteItem,index) => {
return index !== id;
  });
});
   }   
  return (
    <div>
      <Header />
      <Footer />
      {contacts.map((contact) => 
        (<Card
    key={contact.id} 
    name={contact.name} 
    img={contact.imgURL}
    tel={contact.phone}
    email={contact.email}
     />))
     }
     <CreateArea
     onAdd={addNote} />
     {notes.map((noteItem,index) => {
      return <Note 
      key={index}
      id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
      />
     })}
  {/* {notes.map((notes) => 
  (<Note 
  k={notes.key} 
  title={notes.title} 
  content={notes.content} 
  />))} */}
  
      {/* <Card 
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
email={contacts[0].email}
      />
      <Card 
     name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
email={contacts[1].email}
/>
<Card 
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
email={contacts[2].email}
      /> */}
      
    </div>
  );
}

export default App;