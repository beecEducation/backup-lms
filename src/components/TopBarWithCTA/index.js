import React from 'react';
import { Link } from 'react-router-dom';
import Countdown, { zeroPad } from 'react-countdown';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Images } from '../';
import './style.sass'

const TopBarWithCTA = ({ withTimer }) => {
    const countdownTimer = ({ minutes, seconds }) => {
        return <p className='questionLabel mb-0'>{zeroPad(minutes)}:{zeroPad(seconds)}</p>;
    };
    return (
        <>
            <div className="topbar-cta">
                <Navbar className='p-sm-3 mx-sm-3 topbar-cta-inner-section'>
                    <Container fluid className='mx-sm-2'>
                        <Nav className="me-auto">
                            <div className="">
                                <h1 className='questionLabel mb-0'>ACT Exam A - Science</h1>
                                <h1 className='questionLabel mb-0'>Section 40 Questions</h1>
                            </div>
                        </Nav>
                        {withTimer ?
                            <Nav className="mx-auto">
                                <div className='text-center'>
                                    <Countdown
                                        date={Date.now() + 1980000}
                                        renderer={countdownTimer}
                                    />
                                    <span className='questionTime'>Question Time</span>
                                </div>
                            </Nav>
                            : null}
                        <Nav className="ms-auto d-none d-sm-flex topbar-cta-buttons">
                            <Nav.Link href="#" className='me-2'>
                                <img src={Images.reference} alt="" className="img-fluid" />
                                <p className="mb-0 miniLabels">Reference</p>
                            </Nav.Link>
                            <Nav.Link href="#" className='mx-2'>
                                <img src={Images.calculator} alt="" className="img-fluid" />
                                <p className="mb-0 miniLabels">Calculator</p>
                            </Nav.Link>
                            <Nav.Link href="#" className='mx-2'>
                                <img src={Images.notes} alt="" className="img-fluid" />
                                <p className="mb-0 miniLabels">Notes</p>
                            </Nav.Link>
                            <Nav.Link href="#" className='ms-2'>
                                <img src={Images.lineFoucus} alt="" className="img-fluid" />
                                <p className="mb-0 miniLabels">Line Foucus</p>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Navbar className='p-sm-3 pt-sm-0 mx-sm-3 d-sm-none d-block topbar-cta-inner-section'>
                        <Nav className="mx-sm-2 px-3 topbar-cta-buttons justify-content-between">
                            <Nav.Link href="#" className='me-sm-2'>
                                <img src={Images.reference} alt="" className="img-fluid" />
                                <p className="mb-0 miniLabels">Reference</p>
                            </Nav.Link>
                            <Nav.Link href="#" className='mx-sm-2'>
                                <img src={Images.calculator} alt="" className="img-fluid" />
                                <p className="mb-0 miniLabels">Calculator</p>
                            </Nav.Link>
                            <Nav.Link href="#" className='mx-sm-2'>
                                <img src={Images.notes} alt="" className="img-fluid" />
                                <p className="mb-0 miniLabels">Notes</p>
                            </Nav.Link>
                            <Nav.Link href="#" className='ms-sm-2'>
                                <img src={Images.lineFoucus} alt="" className="img-fluid" />
                                <p className="mb-0 miniLabels">Line Foucus</p>
                            </Nav.Link>
                        </Nav>
                </Navbar>
            </div>
        </>
    )
}

export default TopBarWithCTA