import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Contact() {
  const [show, setsShow] = useState(true);
  const handleClose = () => {
    setsShow(!show);
  };
  const handleOpen = () => {
    setsShow(true);
  };
  return (
    <>
      <Button onClick={handleOpen}>Add details</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Dialog show="show">
          <Modal.Header closeButton>
            <Modal.Title>We would love to hear from you.</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your info with anyone else.
                </div>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" type="button" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
    </>
  );
}

export default Contact;
