import { Form, Modal } from "react-bootstrap";

interface AddNoteDialogProps {
  onDismiss: () => void;
}

const AddNoteDialog = ({ onDismiss }: AddNoteDialogProps) => {
  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group></Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddNoteDialog;
