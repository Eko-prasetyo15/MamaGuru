import React from "react"

const Offers = () => {

    return (
        <div className="content">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-4">
                    <div className="card" >
                        <div className="card-body">
                            <div className="card-title h5">Mamaguru Conference</div>
                            <p className="card-text">17 Aug 2021 to 24 Aug 2021</p>
                        </div>
                        <a href="https://www.mamaguru.co/conference">More info about conference
                            <img className="card-img-top" src="http://portal-dev.ap-southeast-1.elasticbeanstalk.com/mamaguru_conference.jpeg" alt=""/>
                        </a>
                    </div>
                    <br></br>
                    <div className="card" >
                        <div className="card-body">
                            <div className="card-title h5">Tiga Generasi</div>
                            <p className="card-text">ONE STOP PSYCHOLOGICAL SERVICES FOR EVERYONE</p>
                            <button type="button" className="btn btn-outline-success">Contact for Booking</button>
                        </div>
                        <a href="https://www.mamaguru.co/tigagenerasi">
                            <img className="card-img-top" src="https://import.cdn.thinkific.com/423954/4SpBAsOSTuu2oDGYglQo_logo_horizontal_png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>

        </div>


    )
}
export default Offers