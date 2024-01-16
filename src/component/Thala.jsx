/** @format */

import Modal from "react-bootstrap/Modal";
import React, { Fragment, useState } from "react";
import thalaVideo1 from "../assets/thala1.mp4";
import thalaVideo2 from "../assets/thala2.mp4";
import thalaVideo3 from "../assets/thala3.mp4";
import { Button } from "react-bootstrap";

function Thala() {
    let [inpText, setInpText] = useState("");
    let [resText, setResText] = useState([]);
    let [msg, setMsg] = useState('');
    const [show, setShow] = useState(false);

    const videoArr = [thalaVideo1, thalaVideo2, thalaVideo3];

    const handleClose = () => setShow(false);

    function checkThalaForReason() {
        const text = inpText.split("");

        if (isNaN(Number(+inpText))) {
            const newText = text.map((item, i) => {
                if (i < text.length - 1) {
                    return `${item} +  `;
                } else {
                    return `${item} = ${text.length}`;
                }
            });
            setResText(newText.join(""));
            if (text.length === 7) {
                setShow(true);
            }
            else{
                setMsg('Oopsss!! Not thala for a reason !!')
            }
        } else {
            let res = 0;
            const newText = text.map((item, i) => {
                res = res + +item;
                if (i < text.length - 1) {
                    return `${item} +  `;
                } else {
                    return `${item} = ${res}`;
                }
            });
            setResText(newText.join(""));
            if (+res === 7) {
                setShow(true);
            }
            else{
            setMsg('Oopsss !! Not thala for a reason !!')
            }
        }
    }
    return (
        <Fragment>
            <section className="bg-secondary text-white">
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thala For a reason !!!!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <video
                            autoPlay
                            loop
                            src={videoArr[Math.floor(Math.random() * 3)]}
                            width="100%"
                            height='500px'
                            controls
                        ></video>
                    </Modal.Body>
                </Modal>
                <div
                    className="d-flex align-items-center flex-column pt-5"
                    style={{ height: "100vh" }}
                >
                    <h4>Are you a Thala fan ? </h4>
                    <h4 className="mb-5 text-center">
                        Welcome to the heaven for thala fans !!
                    </h4>

                    <div class="card" style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' , height:'300px'}}>
                        <div class="card-body">
                            <div className="row">
                                <div className="col-12 m-2">
                                    <input
                                        type="text"
                                        placeholder="Type something here"
                                        value={inpText}
                                        onChange={(e) =>{
                                            setInpText(e.target.value);
                                            setMsg('')}
                                        }
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-12 text-center">
                                    <button
                                        type="submit"
                                        onClick={checkThalaForReason}
                                        className="btn btn-primary my-4 px-5"
                                    >
                                        Submit
                                    </button>
                                </div>
                    {resText && <h1 className="text-center">{resText}</h1>}

                    {msg && <h3 className="text-center">{msg}</h3>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Thala;
