import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {AppBar} from '../../components/AppBar'
import {mdiAccountSwitch} from '@mdi/js'
import {updateCurrentPage} from '../../actions/route'
import {Avatar, List, ListItem, ListText, MatchIcon} from './styled'


import {getMatches, getProfile} from '../../actions/profiles'

class MatchScreen extends Component {
	componentDidMount() {
		if (this.props.getMatches) {
			this.props.getMatches()
		}
	}

	render() {
		
		const {goToSwipeScreen,goToProfileScreen, matches, profileToSwipe} = this.props
		console.log(matches)
		return (
			<div>
				<AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
						size={1}
						onClick={goToSwipeScreen}
					/>}
				/>
				<List>
					{matches && matches.map((match) => (
						<ListItem key={match.name}>
							<Avatar src={match.photo} onClick= {() => this.goToProfileScreen(this.props.profileToSwipe.id)}/>
							<ListText>{match.name}</ListText>
						</ListItem>
					))}
				</List>
			</div>
		)
	}
}

MatchScreen.propTypes = {
	goToSwipeScreen: PropTypes.func.isRequired,
	goToProfileScreen:PropTypes.func.isRequired,
	getMatches: PropTypes.func.isRequired,
	matches: PropTypes.array
}
// Pegar os matches via props
const mapStateToProps = state => ({
	matches:state.profiles.allMatches,
	profileToSwipe: state.profiles.profileToSwipe
})

const mapDispatchToProps = dispatch => ({
	goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
	goToProfileScreen: () => dispatch(updateCurrentPage('ProfileScreen')),
	getMatches: () => dispatch(getMatches())
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreen)
