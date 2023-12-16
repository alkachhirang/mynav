import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Navbar = () => {
    const [show, setShow] = useState(false);
    if (show === true) {
        document.body.classList.add("overflow-hidden");
    }
    else {
        document.body.classList.remove("overflow-hidden");
    }

    return (
        <div>
            <Container>
                <button onClick={() => setShow(true)} className="btn btn-danger px-4 mt-5 py-2">open</button>
                <div className={`${show ? "left_true" : "left_300"} my_navbar`}>
                    <ul className="text-white p-0 mb-0 d-flex flex-column align-items-center gap-5">
                        <li onClick={() => setShow(false)}><a href="#Home" className=" text-black" >Home</a></li>
                        <li onClick={() => setShow(false)}><a href="#About" className=" text_black">About</a></li>
                        <li onClick={() => setShow(false)}><a href="#Services" className=" text_black">Services</a></li>
                        <li onClick={() => setShow(false)}><a href="#Faq" className=" text_black">Faq</a></li>
                        <button onClick={() => setShow(false)} className="btn btn-danger px-4 py-2">close</button>
                    </ul>
                </div>
                <p className=" pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p id="About" className="bg-danger">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p id="Services" className="bg-warning">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut quas veniam at nostrum modi nulla in qui magnam! Quia eveniet modi explicabo velit repellat nam aliquam cum blanditiis non.</p>
            </Container>
        </div>
    );
};

export default Navbar
