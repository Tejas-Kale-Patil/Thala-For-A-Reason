/** @format */

import React, { Fragment, useEffect, useState } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
function Question(props) {
    let [selectedOption, setSelectedOpt] = useState("");
    let [submit, setSubmit] = useState(false);
    const navigate = useNavigate();

    function clickedOnSubmit() {
        setSubmit(true);
        setTimeout(() => {
            navigate("/thala");
        }, 2000);
    }
    useEffect(() => {
        aos.init({ duration: 1000 });
    }, []);
    return (
        <Fragment>
            <h1 style={{ textAlign: "center" }}>Who is your favorite Player</h1>
            <div className="row justify-content-center mt-5">
                <div
                    className={
                        selectedOption === "option1"
                            ? "selected aos-init aos-animate col-lg-5 col-10 "
                            : "options aos-init aos-animate col-lg-5 col-10"
                    }
                    data-aos="fade-right"
                    onClick={() => setSelectedOpt("option1")}
                >
                    {" "}
                    M.S.Dhoni{" "}
                </div>
                <div
                    className={
                        selectedOption === "option2"
                            ? "selected aos-init aos-animate col-lg-5 col-10"
                            : "options aos-init aos-animate col-lg-5 col-10"
                    }
                    data-aos="fade-left"
                    onClick={() => setSelectedOpt("option2")}
                >
                    Mahendra Singh Dhoni
                </div>

                <div
                    className={
                        selectedOption === "option3"
                            ? "selected aos-init aos-animate col-lg-5 col-10"
                            : "options aos-init aos-animate col-lg-5 col-10"
                    }
                    data-aos="fade-right"
                    onClick={() => setSelectedOpt("option3")}
                >
                    {" "}
                    Mahi{" "}
                </div>
                <div
                    className={
                        selectedOption === "option4"
                            ? "selected aos-init aos-animate col-lg-5 col-10"
                            : "options aos-init aos-animate col-lg-5 col-10"
                    }
                    data-aos="fade-left"
                    onClick={() => setSelectedOpt("option4")}
                >
                    Thala
                </div>
            </div>
            <div className="text-center">
                <button
                    className="btn btn-dark"
                    disabled={selectedOption === "" ? true : false}
                    onClick={clickedOnSubmit}
                >
                    Submit
                </button>
            </div>
            <div className="text-center">
                {selectedOption !== null && submit ? (
                    <div>
                        <h4>Congratulations !!! Correct answer.</h4>
                        <h1>Thala for a reason</h1>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </Fragment>
    );
}

export default Question;
