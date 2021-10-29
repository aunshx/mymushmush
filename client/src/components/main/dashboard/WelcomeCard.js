import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux';

import { windowCheck } from '../../../actions/windowCheck';

const WelcomeCard = ({auth: { user }, windowCheck}) => {

  const changeWindowCheck = e => {
    windowCheck()
  }

  return (
    <>
      <div className="container">
        <div className="center-screen-2">
          <Card
            centered
            style={{
              backgroundColor: 'black',
              width: '60%',
              borderRadius: '10px'
            }}
          >
            <Card.Header
              style={{
                margin: '1em 0em 0em 0em',
                fontSize: '1.8em',
                color: '#ce3d4e'
              }}
            >
              <i>Happy Birthday {user && user.name}!</i>
            </Card.Header>
            <div
              style={{
                height: '0.12em',
                margin: '1em 4em 0em 4em',
                background: '#ce3d3d'
              }}
            ></div>
            <Card.Content
              style={{
                padding: '0.5em 2em 0em 2em',
                margin: '0em',
                color: 'white'
              }}
            >
              <p
                style={{
                  margin: '0.5em',
                  color: 'pink',
                  fontSize: '1.5em'
                }}
              >
                Mushmush!
              </p>
              <p
                style={{
                  textAlign: 'left',
                  fontSize: '1.15em'
                }}
              >
                It’s your birthday today! My baby is turning
                twenty-fucking-four! Goddamn. Big woman eh. But don’t worry you
                still look like 16 ...erm…. I mean 18 ;) It’s not everyday that
                your girlfriend turns 24 and I was wondering as to what to get
                you apart from a physical gift. So, I thought what better way to
                commemorate this big day, than to make a website, inculcating
                things I’ve learned in the past few months, to convey my love
                for you. This website has three parts viz. Dashboard, Memes and
                Timeline. Check out the website in the said order for a better
                viewing experience. I hope you like it.
                <br />
                <p
                  style={{
                    color: 'grey',
                    textAlign: 'center',
                    marginTop: '0.5em'
                  }}
                >
                  PS: This site contains personal content. For your eyes only.
                </p>
              </p>
              <p
                style={{
                  fontSize: '1.3em',
                  color: 'pink'
                }}
              >
                Cheers!
              </p>
            </Card.Content>
            <Card.Meta
              style={{
                margin: '1em',
                padding: '0em'
              }}
            >
              <button onClick={changeWindowCheck} className="inputButton">
                Continue Next
              </button>
            </Card.Meta>
          </Card>
        </div>
      </div>
    </>
  );
};


WelcomeCard.propTypes = {
    auth: PropTypes.object.isRequired,
    check: PropTypes.object.isRequired,
    windowCheck: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    check: state.windowCheck
})

export default connect(mapStateToProps, { windowCheck })(WelcomeCard)
