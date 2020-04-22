import React from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push, replace, goBack } from "connected-react-router";

class TripDetailsPage extends React.Component {

    render() {
        const{goToHome} = this.props
        return (
            <div>
                <p>Details</p>
                <button onClick={goToHome}>HomePage</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        
        goToHome: () => dispatch(push(routes.home))
    }
}
export default connect(null, mapDispatchToProps)(TripDetailsPage);