import React from "react";
import { connect } from "react-redux";
import { routes } from "../Router";
import { push, replace, goBack } from "connected-react-router";
// import { bindActionCreators } from 'redux';
// import * as tripActions from '../../actions/trips'
import { fetchAllTrips,
         setTripChoosen,
         deleteTrip } from "../../actions/trips"
// estilização
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { ListWrapper, Loading, CardMain} from "./styled"

class ListTripPage extends React.Component {
  constructor(props) {
    super(props)
  
  this.state = {

    }
  }

componentDidMount = () => {
  const token = window.localStorage.getItem('token')
  if(token === null || !token) {
    this.props.goToLogin()
  } else {
  this.props.fetchAllTrips()
  }
};

handleLogout = () => {
  localStorage.clear();
  this.props.goToLogin()
}

handleDetails = (id) => {
  //Pego o id da viagem e vou para o detalhe dessa viagem
  this.props.setTripChoosen(id)
  this.props.goToDetails()
}

handleDelete = (id) => {
  this.props.setTripChoosen(id)
  this.props.deleteTrip(id) 
}

render() { 
  const {goToCreate, allTrips} = this.props
  const isLogged = window.localStorage.getItem('token') !== null
 
return (
  <ListWrapper>
      <Button variant="contained" onClick={goToCreate}>Create Trip</Button>
      {isLogged && <Button variant="contained" onClick={this.handleLogout}>Logout</Button>}
      
    <h1>Lista de viagens</h1>
    <CardMain>
      <ul>
         {allTrips ? allTrips.map(eachTrip => { 
       
          return (
          <li key = {eachTrip.id}>
            <Typography component="p"><strong>Trip: </strong>{eachTrip.name}
              <DeleteOutlinedIcon onCLick={() => {this.handleDelete(eachTrip.id)}}></DeleteOutlinedIcon>
            </Typography>
            <Typography component="p"><strong>Planet: </strong>{eachTrip.planet}</Typography>
            <Typography component="p"><strong>Description: </strong>{eachTrip.description}</Typography>
            <Typography component="p"><strong>Duration: </strong>{eachTrip.durationInDays}</Typography>
            <Typography component="p" ><strong>Data: </strong>{eachTrip.date} + days</Typography>  
            <Button variant="contained" onClick={() => {this.handleDetails(eachTrip.id)}}>Details</Button>
          </li>
          )})
            : <Loading></Loading>} 
      </ul> 
    </CardMain>       
  </ListWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      allTrips: state.trips.allTrips
  } 
}
const mapDispatchToProps = dispatch => {
  return {
  
  goToCreate: () => dispatch(push(routes.create)),
  goToDetails: () => dispatch(push(routes.details)),
  goToLogin: () => dispatch(replace(routes.login)),
  
  deleteTrip:(id) => dispatch(deleteTrip(id)),  
  setTripChoosen: (id) => dispatch(setTripChoosen(id)),
  fetchAllTrips: () => dispatch(fetchAllTrips())
      // bindActionCreators(tripActions, dispatch)
 
  }}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListTripPage);
  