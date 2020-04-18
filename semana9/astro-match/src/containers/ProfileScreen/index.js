import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import {
  BlurredBackground,
  InfoWrapper,
  ProfilePicture,
  TitleWrapper,
  UserAge,
  UserSwipeCard,
  UserName,
} from './styled'

import {updateCurrentPage} from '../../actions/route'
import {AppBar} from '../../components/AppBar'
import { MatchIcon} from '../MatchScreen/styled'
import {mdiAccountSwitch} from '@mdi/js'

// Preciso ir para página Swipescreen
class ProfileScreen extends React.Component {
  render() {
    const {profileToSwipe, goToSwipeScreen} = this.props
    return (
      <div>
        <AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
						size={1}
						onClick={goToSwipeScreen}
					/>}
				/>
        <UserSwipeCard>
          <BlurredBackground photo={profileToSwipe.photo}/>
          <ProfilePicture src={profileToSwipe.photo}/>
          <InfoWrapper>
            <TitleWrapper>
              <UserName>{profileToSwipe.name},</UserName>
              <UserAge>{profileToSwipe.age},</UserAge>
              
            </TitleWrapper>
            <div>{profileToSwipe.bio}</div>
          </InfoWrapper>
        </UserSwipeCard>
      </div>
    )
  }
}




ProfileScreen.propTypes = {
  goToSwipeScreen: PropTypes.func.isRequired,
  profileToSwipe: PropTypes.object,
}


const mapStateToProps = (state) => ({
  profileToSwipe: state.profiles.profileToSwipe
})

const mapDispatchToProps = (dispatch) => ({
  goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
