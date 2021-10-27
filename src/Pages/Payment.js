import React from "react"
import { Redirect } from "react-router"
import Button from "react-bootstrap/Button";

const Payment = () => {
    let id = localStorage.getItem('id')

    return (
        <>
            {!id ? (
                <Redirect to={{ pathname: `/login` }} />
            ) : (
                <div className="content">
                    <span>
                        No Payment Request
                        </span>
                    <div>
                        <Button className="btn btn-info btn-lg mr-3" block="true" size="sm" type="submit">
                            Contact for Modification
                            </Button>
                    </div>
                </div>
            )}

        </>
    )
}
export default Payment