import React, { useEffect, useState } from "react";
import { Data } from "./Data";

const Quiz = () => {
    const [data, setData] = useState(Data);
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);

    const next = () => {
        if (index < data.length - 1) {
            setIndex(index + 1);
        } else {
            document.querySelector(
                ".score"
            ).innerHTML = `<p> Your Score ${score}</p>`;
            document.querySelector(".quiz").innerHTML = ""

            let newBtn = document.querySelector("#next")
            newBtn.innerHTML = "Play Again";
            newBtn.classList.add("reset");

            const reset = document.querySelector(".reset")
            reset.addEventListener("click", () => {
                window.location.reload()
            })
        }

        const checked = document.querySelectorAll(".CheckedValue");
        checked.forEach((CurVal) => {
            CurVal.checked = false;
        });
    };

    const SubmitHanlder = (event) => {
        let SelectValue = event.target.value;
        if (SelectValue === data[index].ans) {
            setScore(score + 1);
        }
    };

    console.log(score);
    return (
        <>
            <div className="container ">
                <div className="row ">
                    <div className="col-12   ">
                        <div className="quiz">
                            <div className="">
                                <h2>Q : {data[index].q}</h2>
                            </div>
                            <br />
                            <div className="Inputs">
                                <input
                                    name="select"
                                    type="radio"
                                    value={data[index].a}
                                    className="form-check-input CheckedValue "
                                    onChange={SubmitHanlder}
                                />
                                <p> A : {data[index].a}</p>
                            </div>
                            <div className="Inputs">
                                <input
                                    name="select"
                                    type="radio"
                                    value={data[index].b}
                                    className="form-check-input CheckedValue "
                                    onChange={SubmitHanlder}
                                />
                                <p> B : {data[index].b}</p>
                            </div>
                            <div className="Inputs">
                                <input
                                    name="select"
                                    type="radio"
                                    value={data[index].c}
                                    className="form-check-input CheckedValue "
                                    onChange={SubmitHanlder}
                                />
                                <p> C : {data[index].c}</p>
                            </div>
                            <div className="Inputs">
                                <input
                                    name="select"
                                    type="radio"
                                    value={data[index].d}
                                    className="form-check-input CheckedValue "
                                    onChange={SubmitHanlder}
                                />
                                <p> D : {data[index].d}</p>
                            </div>

                        </div>
                        <br />
                        <div className="score "></div>
                        <div className="">
                            <button id="next" className="btn" onClick={next}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quiz;
