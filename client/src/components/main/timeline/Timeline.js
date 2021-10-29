import React from 'react'
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

import Navbar from '../../layout/Navbar';
import timelineData from '../timeline/data'
import TimelineItem from './TimelineItem';

import './timeline.css'

const Timeline = ({ auth: { isAuthenticated, loading } }) => {

    if (!isAuthenticated) {
      <Redirect to="/" />;
    }

  return (
    <>
      <Navbar />
      <section className="container">
        <div className="card-flex">
          <Card
            style={{
              color: 'black',
              fontSize: '0.5em',
              margin: '1em 0em 2em 0em',
              fontSize: '1em',
              backgroundColor: 'black',
              border: ' 1px solid pink'
            }}
          >
            <Card.Header
              style={{
                fontSize: '2em',
                margin: '0.3em',
                fontFamily: "'PT Serif',serif",
                textAlign: 'center',
                color: 'white'
              }}
            >
              Timeline
            </Card.Header>
            <hr style={{ margin: '0.1em 4em 0.1em 4em' }} />
            <p
              style={{
                margin: '0.4em',
                textAlign: 'left',
                color: 'white',
                textAlign: 'center'
              }}
            >
              <i>Here's a collection of yours and ours snarky, dorky, meeky and cheeky moments :P</i>
            </p>
          </Card>
        </div>
        {timelineData.length > 0 && (
          <div className="timeline-container">
            {timelineData.map((data, index) => (
              <TimelineItem data={data} key={index} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

Timeline.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Timeline)

