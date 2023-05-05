import {Button, Col, Modal, Row} from "react-bootstrap";
import {useState} from "react";
import {Images} from "../index";
import {Text} from "@aws-amplify/ui-react";
import "./style.sass"
const UserAddedModal=({showModal,title="User Added!",description="You have successfully added a user."})=>{
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
                            <Text className={"main-text"}>{title}</Text>
                            <Text className={"sub-text"}>{description}</Text>
                            <Button className={"ok-btn"} size="lg" onClick={handleClose}>Ok</Button>
                        </div>
                   </Col>
               </Row>
           </Modal.Body>

       </Modal>
   );
}
export default UserAddedModal