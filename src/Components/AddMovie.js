import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function AddMovie({ Add }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [rate, setRate] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [trailer, setTrailer] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setdescription(e.target.value);
  };

  const handleRate = (e) => {
    setRate(e.target.value);
  };

  const handlePosterUrl = (e) => {
    setPosterUrl(e.target.value);
  };

  const handleTrailer = (e) => {
    setTrailer(e.target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                OnChange={(e) => handleTitle(e)}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>movie Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                OnChange={(e) => handleDescription(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>movie Rate</Form.Label>
              <Form.Control
                type="number"
                name="rate"
                OnChange={(e) => handleRate(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>movie Poster Url</Form.Label>
              <Form.Control
                type="text"
                name="posterUrl"
                OnChange={(e) => handlePosterUrl(e)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>movie Trailer</Form.Label>
              <Form.Control
                type="text"
                name="Trailer"
                OnChange={(e) => handlePosterUrl(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button
            variant="primary"
            onClick={() => (
              Add({
                id: Math.random(),
                title: title,
                description: description,
                rate: rate,
                posterUrl: posterUrl,

                trailer: trailer,
              }),
              handleClose()
            )}
          >
            Add New Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
