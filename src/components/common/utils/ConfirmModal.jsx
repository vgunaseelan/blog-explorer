import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmModal = ({ show, handleClose, title }) => {

    const handleModalClose = (isConfirm) => {
        handleClose(isConfirm);
    };

    return (
        <Modal 
            show={show} 
            onHide={() => handleModalClose(false)} 
            backdrop="static"
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <h3>{title}</h3>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleModalClose(false)}>
                    No
                </Button>
                <Button variant="danger" onClick={() => handleModalClose(true)}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmModal;
