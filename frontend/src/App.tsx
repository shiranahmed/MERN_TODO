import React, { useEffect, useState } from "react";
import { Note as NoteModel } from "./models/note";
import Note from "./components/Note";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./styles/notespage.module.css";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch("http://localhost:8080/api/notes", {
          method: "GET",
        });
        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        console.error(error);
      }
    }
    loadNotes();
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} xl={3} className="g-4">
        {notes.map((note) => (
          <Col key={note._id}>
            <Note note={note} className={styles.note}></Note>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
