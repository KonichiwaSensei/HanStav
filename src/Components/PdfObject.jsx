import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function PdfObject({ pdf }) {

    // State for modal
    const [modalShow, setModalShow] = useState(false);

    // Functions to handle modal
    const handleModalOpen = () => {
        setModalShow(true);

    }
    const handleModalClose = () => {
        setModalShow(false);
    };

    return (
        <>
            {pdf && (
                <>
                    <label className="hidden-label fst-italic">otevřít větší náhled</label>
                    {/* <object
                        className='pdf rounded p-4'
                        data={`/pdfs/${pdf}.pdf`}
                        type="application/pdf"
                        height="500px"
                        width="100%"
                        onClick={handleModalOpen}
                    >
                    </object> */}
                    <div
                        className='pdf rounded p-4'
                        onClick={handleModalOpen}
                    >
                        <iframe
                        src={`/pdfs/${pdf}.pdf`}
                        height="500px"
                        width="100%"
                        style={{border: 'none'}}
                        onClick={handleModalOpen}
                        >
                            Vaše zařízení nepodporuje PDF. Prosím stáhňete PDF pro zhlédnutí: 
                            <a className="pdf_stahnout" href={`/pdfs/${pdf}.pdf`}>Stáhnout PDF</a>
                        </iframe>
                    </div>

                    <Modal
                        size="xl"
                        show={modalShow}
                        onHide={handleModalClose}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton className="pdf_modal_header" >
                        <a className="pdf_stahnout" href={`/pdfs/${pdf}.pdf`}>Stáhnout PDF</a>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe
                                src={`/pdfs/${pdf}.pdf`}
                                height="800px"
                                width="100%"
                                style={{border: 'none'}}
                            >
                                Vaše zařízení nepodporuje PDF. Prosím stáhňete PDF pro zhlédnutí: 
                                <a className="pdf_stahnout" href={`/pdfs/${pdf}.pdf`}>Stáhnout PDF</a>
                            </iframe>
                        </Modal.Body>
                    </Modal>
                </>
            )}

        </>
    )
}