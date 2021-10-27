import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postLogin } from "../Reducer/Auth/Action"
import { Spinner } from "react-bootstrap";
const Login = () => {
    const dispatch = useDispatch()
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const Loading = useSelector((state) => state.Login.isLoading)
  
    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    const changeUsername = (e) => {
        setUsername(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postLogin(username, password))
    }
    return (
        <div className="login">
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-12">
                    <Form onSubmit={handleSubmit}> 
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" onChange={changeUsername}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={changePassword}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button className="btn btn-info btn-lg mr-3" block="true" size="xl" type="submit" disabled={!validateForm()}>
                                {Loading ? (
                                    <Spinner animation="border" variant="light" />
                                ) : "Login"}
                            </Button>
                        </div>
                    </Form>


                </div>
            </div>
        </div>
    )
}
export default Login