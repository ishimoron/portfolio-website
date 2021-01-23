import React, {useState, useEffect} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import '../assets/css/Contact.css'


const Contact = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const changeHandler = (e) => {
        setState({[e.target.name]: e.target.value});
    };

    useEffect(() => {
        this.validator = new SimpleReactValidator();
    })

    return (
        <div className="contact-wrapper">
            <form
                encType="multipart/form-data"
                action="contact-form-handler.php"
                method="post"
                id="myForm"
                name="myForm"
                onSubmit={() => {
                    setState({
                        name: "",
                        email: "",
                        message: "",
                    })
                }}
            >
                <div className="container">
                    <div className="row input-container">
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input type="text" id="name" name="name" value={state.name}
                                       onChange={changeHandler} required/>
                                <label>Name</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input type="email" id="email" name="email" value={state.email}
                                       onChange={changeHandler} required/>
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input
                                    type="file"
                                    className="custom-file-input"
                                    name="file"
                                    id="file"
                                    aria-describedby="inputGroupFileAddon01"
                                />
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                                    <textarea
                                                        required
                                                        name="message"
                                                        id="message"
                                                        value={state.message}
                                                        onChange={changeHandler}/>
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="">
                                <button
                                    type="submit"
                                    name="submit"
                                    id="submit"
                                    className="btn-lrg submit-btn"

                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Contact