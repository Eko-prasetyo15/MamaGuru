import React, { useEffect, useState } from "react"
import { Button, Form, Tabs, Tab, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { getProfile } from "../Reducer/Settings/Action";

const Settings = () => {
    let id = localStorage.getItem('id')
    const dispatch = useDispatch()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        dispatch(getProfile(id))
    }, [id, dispatch])


    const ProfileState = useSelector((state) => state.Profile.datas)
    const Loading = useSelector((state) => state.Profile.isLoading)

    useEffect(() => {
        setUsername(ProfileState.user_name)
        setPassword(ProfileState.password)
        setFirstname(ProfileState.first_name)
        setLastname(ProfileState.last_name)
        setPhone(ProfileState.phone_number)
        setEmail(ProfileState.email)
    }, [ProfileState])

    const changeUsername = (e) => {
        setUsername(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const changeFirstname = (e) => {
        setFirstname(e.target.value)
    }
    const changeLastname = (e) => {
        setPassword(e.target.value)
    }
    const changePhone = (e) => {
        setPhone(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <>
            {!id ? (
                <Redirect to={{ pathname: `/login` }} />
            ) : (
                <div className="settings">
                    {Loading ? (
                        <div className="content">
                        <Spinner animation="border" variant="info" />
                        </div>
                    ) : (
                        <>
                            <h1 className="text-center">My Information</h1>
                            <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="My Information">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Username</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Username" defaultValue={username} onChange={changeUsername} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" defaultValue={password} onChange={changePassword} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter First Name" defaultValue={firstname} onChange={changeFirstname} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Lastname" defaultValue={lastname} onChange={changeLastname} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Username" defaultValue={phone} onChange={changePhone} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter Username" defaultValue={email} onChange={changeEmail} />
                                        </Form.Group>
                                        <div style={{ textAlign: 'right' }}>
                                            <Button className="btn btn-info btn-lg mr-3" size="xl" type="submit">
                                                Submit
                                            </Button>
                                        </div>
                                    </Form>
                                </Tab>
                            </Tabs>
                        </>
                    )}

                </div>
            )}
        </>
    )
}
export default Settings