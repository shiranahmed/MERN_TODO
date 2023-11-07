import { Button, Form, Modal } from "react-bootstrap";
import { Note } from "../models/note";
import { useForm } from "react-hook-form";

interface AddNoteDialogProps {
  onDismiss: () => void;
  onNoteSave: (note: Note) => void;
}

const AddNoteDialog = ({ onDismiss, onNoteSave }: AddNoteDialogProps) => {
  const {} = useForm<NoteInput>;

  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="addNoteForm">
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>
          <Form.Group>
            <Form.Label> Text </Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="text" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" form="addNoteForm">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNoteDialog;
