import {Button, Col, Modal, Row} from "react-bootstrap";
import {useState} from "react";
import {Images} from "../index";
import {Text} from "@aws-amplify/ui-react";
import "./style.sass"
const UserDeleteModal=({showModal,user})=>{
    const [show, setShow] = useState(showModal);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal show={show} onHide={handleClose} size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered>

            <Modal.Body style={{padding:"0px"}}>
                <Row>
                    <Col md={6}>
                        <img className={"welcome-img img-responsive"} src={Images.loginModalImage}/>
                    </Col>
                    <Col md={6} style={{padding:"55px"}}>
                        <div className={"container box-body"}>
                            <Text className={"main-text"}>Delete {user}?</Text>
                            <Text className={"sub-text"}>Are you sure you want to delete this user?</Text>
                            <div className={"btn-div"}>
                                <Button className={"no-btn"} size="md" onClick={handleClose}>No</Button>
                                <Button className={"yes-btn"} size="md" onClick={handleClose}>Yes</Button>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>

        </Modal>
    );
}
export default UserDeleteModal