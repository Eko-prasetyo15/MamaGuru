import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getReport } from "../Reducer/Report/Action"
import { Button, Card, Spinner } from 'react-bootstrap';
import { Redirect } from "react-router";

const Report = () => {
    let id = localStorage.getItem('id')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReport())
    }, [dispatch])

    const ReportData = useSelector((state) => state.Report.datas)
    const Loading = useSelector((state) => state.Report.isLoading)

    return (
        <>
            { !id ? (
                <Redirect to={{ pathname: `/login` }} />
            ) : (
                <div className="report content">
                    {Loading ? (
                        <Spinner animation="border" variant="info" />
                    ) : (

                        ReportData.map((report, idx) => {
                            return (
                                <Card className="text-center mb-4" key={idx}>
                                    <Card.Header>
                                        <span className="blockquote">Session {report._session_no} -- {report.session_date}</span></Card.Header>
                                    <Card.Body style={{ padding: '50px' }}>
                                        <div>
                                            <Card.Img variant="top" style={{ width: "20rem" }} src={`http://falcon-dev.ap-southeast-1.elasticbeanstalk.com/api/images/image?image_id=${report.image_id}`} />
                                        </div>
                                        <div>
                                            <div>
                                                <h5 className="mt-2">{report.activity_id}</h5>
                                            </div>
                                            <div className="text-center">
                                                <p>{report.summary}</p>
                                            </div>
                                            <small className="blockquote">- Co-Teaching partner</small> <span className="blockquote-name">{report.teaching_partner}</span>
                                            <div>
                                                <Button variant="primary" className="btn btn-info btn-lg mr-3">Download Report</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">
                                        <span className="blockquote">
                                            Next Activity/Improvement Plan:{report.next_activity}
                                        </span>
                                    </Card.Footer>
                                </Card>
                            )
                        })

                    )}


                </div>
            )}

        </>
    )
}
export default Report