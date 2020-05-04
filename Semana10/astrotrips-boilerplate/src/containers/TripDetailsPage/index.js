import React from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push, replace, goBack } from "connected-react-router";
import { getTripDetail, decideCandidate } from "../../actions/trips"
//Material ui
import { Typography, Divider,Avatar, Card } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import styled from "styled-components"

const DetailWrapper = styled.div `
background: white;
`
class TripDetailsPage extends React.Component {

componentDidMount = () => {
    const token = window.localStorage.getItem('token')
    if(token === null || !token) {
        this.props.goToLogin()
    } else {
    this.props.getTripDetail(this.props.id, token)
    }
};
handleLogout = () => {
    localStorage.clear();
    this.props.goToLogin()
  }
// {
//     "name": "Astrodev",
//     "age": 20,
//     "applicationText": "Quero muuuuuuito ir!!!",
//     "profession": "Chefe",
//     "country": "Brasil"
// }  

 render() {
    const{goToHome, details, id, goBack} = this.props
    const isLogged = window.localStorage.getItem('token') !== null
    console.log(details)

    return (
      <DetailWrapper>
         {isLogged && <Button variant="contained" onClick={this.handleLogout}>Logout</Button>}
         <Button variant="contained" onClick={goToHome}>HomePage</Button>
         <Button variant="contained" onClick={goBack}>List Trip</Button>

         <Typography component="h1">Details</Typography>
         <Typography component="p"><strong>Trip:</strong>{details.name}</Typography>
         <Typography component="p"><strong>Planet: </strong>{details.planet}</Typography>
         <Divider/>
         <Typography component="h3">Candidate:</Typography>

          {(id.candidates) ? id.candidates.map(candidate => {
            return (
             <Card key={candidate.id}>
                <Avatar alt="Marvin" src="../../img/Marvin.png"/> 
                   
             </Card>

               
            )}) 
          : <Loading></Loading>}

      </DetailWrapper>
    )
 }
}
const mapStateToProps = state => {
    return{

       allTrips:state.trips.allTrips,
       details: state.trips.details,
       id: state.trips.id  
    }
}
const mapDispatchToProps = dispatch => {
    return {
        
        goToHome: () => dispatch(push(routes.home)),
        goBack: () => dispatch(goBack()),

        getTripDetail: (id) => dispatch(getTripDetail(id)),
        // decideCandidate: (tripId, candidateId) => dispatch(decideCandidate(tripId,candidateId))
    }
}
const Loading = styled.div `
  position: relative;
  width: 10em;
  height: 10em;
  border: 3px solid #3cefff;
  overflow: hidden;
  animation: spin 3s ease infinite;
  position: relative;
  left:50vw;
 top: 40vh;
}

::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  width: 10em;
  height: 10em;
  background-color: hsla(185, 100%, 62%, 0.75);
  transform-origin: center bottom;
  transform: scaleY(1);
  animation: fill 3s linear infinite;
}

@keyframes spin {
  50%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fill {
  25%,
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }

`
export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage);