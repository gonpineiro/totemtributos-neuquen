import { Modal } from 'react-bootstrap';
import { Recycle } from '../shared'

export const QrModal = (props, { qr, recibo }) => {
    return (
        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            {...props}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="card-body text-center recycle">
                        <div className="d-inline-flex">
                            <Recycle /> <span style={{ margin: 'auto' }}>Para pagar online escanea el código QR</span>
                        </div>
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={props.qr} alt={props.recibo} className="img-qr" />
            </Modal.Body>
        </Modal>
    );
}