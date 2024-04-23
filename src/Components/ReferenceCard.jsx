import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

import React, { useState } from "react";

import Divider from '../Components/Divider'

export default function ReferenceCard({ text, title, text2, textArray, img, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14 }) {

  // State for modal
  const [modalShow, setModalShow] = useState(false);

  // State for Touch
  const [touchStart, setTouchStart] = useState(null);

  // Functions to handle modal
  const handleModalOpen = () => {
    setModalShow(true);

  }
  const handleModalClose = () => {
    setModalShow(false);
  };

  // Functions to handle Touch Events
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientY);
  }

  const handleTouchMove = (e) => {
    if (Math.abs(touchStart - e.targetTouches[0].clientY) > 5) {
      setTouchStart(null);
    } // checks the absolute difference between the start and current touch positions
  }

  const handleTouchEnd = () => {
    if (touchStart !== null) {
      handleModalOpen();
    }
    setTouchStart(null);
  }


  return (
    <Card
      className="reference-card rounded m-4"
      // border="black"
      style={{ width: '18rem' }}
    >

      <Card.Img
        className="rounded p-1"
        variant="top"
        src={`/images/reference/${img}`}
        alt={img}
        onClick={handleModalOpen} // Mouse Click Event
        onTouchStart={handleTouchStart} // Touch Event Start
        onTouchMove={handleTouchMove} // Touch Event Move
        onTouchEnd={handleTouchEnd} // Touch Event End
      />

      <Card.Body
        onClick={handleModalOpen} // Mouse Click Event
        onTouchStart={handleTouchStart} // Touch Event Start
        onTouchMove={handleTouchMove} // Touch Event Move
        onTouchEnd={handleTouchEnd} // Touch Event End
      >
        <Card.Title className="fsw-bold">{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>


      {/* MODAL HERE */}
      <Modal
        size="lg"
        show={modalShow}
        onHide={handleModalClose}
      >

        <Modal.Header closeButton className="btn-close-white">
          <Modal.Title className="fsw-bold fs-3">{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          {/* Conditionally render text */}
          {text && (
            <>
              <p className="fs-4">{text}</p>
              <Divider />
            </>
          )}

          {/* Conditionally render text2 */}
          {text2 && (
            <>
              <p className="fs-5">{text2}</p>
              <Divider />
            </>
          )}

          {/* Conditionally render textArray */}
          {textArray && (
            <>
              
              {textArray.map((text) => (
                <p className="fw-bold fs-6">{text}</p>
              ))}
              <Divider />
            </>
          )}

            {/* Larger view of the image */}
            <img
              src={`/images/reference/${img}`}
              alt={title}
              className="rounded img-fluid"
              style={{ maxWidth: '100%' }}
            />

            {/* Conditionally render img2 */}
            {img2 && (
              <>
                <img
                  src={`/images/reference/${img2}`}
                  alt={title}
                  className="rounded  img-fluid "
                  style={{ maxWidth: '100%' }}
                />
              </>
            )}

            {/* Conditionally render img3 */}
            {img3 && (
              <>
                <img
                  src={`/images/reference/${img3}`}
                  alt={title}
                  className="rounded  img-fluid "
                  style={{ maxWidth: '100%' }}
                />
              </>
            )}

            {/* Conditionally render img4 */}
            {img4 && (
              <>
                <img
                  src={`/images/reference/${img4}`}
                  alt={title}
                  className="rounded  img-fluid "
                  style={{ maxWidth: '100%' }}
                />
              </>
            )}

          {/* Conditionally render img5 */}
          {img5 && (
              <>
                <img
                  src={`/images/reference/${img5}`}
                  alt={title}
                  className="rounded  img-fluid "
                  style={{ maxWidth: '100%' }}
                />
              </>
            )}

            {/* Conditionally render img6 */}
            {img6 && (
              <>
                <img
                  src={`/images/reference/${img6}`}
                  alt={title}
                  className="rounded  img-fluid "
                  style={{ maxWidth: '100%' }}
                />
              </>
            )}

            {/* Conditionally render img7 */}
            {img7 && (
              <>
                <img
                  src={`/images/reference/${img7}`}
                  alt={title}
                  className="rounded  img-fluid "
                  style={{ maxWidth: '100%' }}
                />
              </>
            )}

            {/* Conditionally render img8 */}
            {img8 && (
              <>
                <img
                  src={`/images/reference/${img8}`}
                  alt={title}
                  className="rounded  img-fluid "
                  style={{ maxWidth: '100%' }}
                />
              </>
            )}

            {/* Conditionally render img9 */}
            {img9 && (
              <>
                <img
                  src={`/images/reference/${img9}`}
                  alt={title}
                  className="rounded  img-fluid "
                  style={{ maxWidth: '100%' }}
                />
              </>
            )}

            {/* Conditionally render img10 */}
            {img10 && (
              <>
                <img
                  src={`/images/reference/${img10}`}
                  alt={title}
                  className="rounded  img-fluid "
                  style={{ maxWidth: '100%' }}
                />
              </>
            )}

            {/* Conditionally render img11 */}
            {img11 && (
              <>
                <img
                  src={`/images/reference/${img11}`}
                  alt={title}
                  className="rounded  img-fluid "
                  style={{ maxWidth: '100%' }}
                />
              </>
            )}

            {/* Conditionally render img12 */}
            {img12 && (
              <>
                <img
                  src={`/images/reference/${img12}`}
                  alt={title}
                  className="rounded  img-fluid "
                  style={{ maxWidth: '100%' }}
                />
              </>
            )}

            {/* Conditionally render img13 */}
            {img13 && (
              <>
                <img
                  src={`/images/reference/${img13}`}
                  alt={title}
                  className="rounded  img-fluid "
                  style={{ maxWidth: '100%' }}
                />
              </>
            )}

            {/* Conditionally render img14 */}
            {img14 && (
              <>
                <img
                  src={`/images/reference/${img14}`}
                  alt={title}
                  className="rounded  img-fluid "
                  style={{ maxWidth: '100%' }}
                />
              </>
            )}

          

        </Modal.Body>

      </Modal>

      {/* LINKS HERE - NOT USED! */}
      {/* <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body> */}

    </Card>

  );
}