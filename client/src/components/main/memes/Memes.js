import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'
import PropTypes from 'prop-types'

import Navbar from '../../layout/Navbar';
import TandC from '../../layout/TandC';
import MemeItem from './MemeItem'
import dataMemes from './data'

import './memes.css'

const Memes = ({ auth: {isAuthenticated, loading} }) => {

  const [index, setIndex] = useState(0)
 
  const changeIndexLeft  = () => {
    if(index <= 0){
      setIndex(dataMemes.length-1)
    } else {
      setIndex(index - 1);
    }
  }

  const changeIndexRight = () => {
    if (index >= dataMemes.length-1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="">
        <section className="container">
          <div className="card-flex">
            <Card
              style={{
                color: 'black',
                fontSize: '0.5em',
                margin: '1em 0em',
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
                Memes
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
                <i>
                  The best way to convey knowledge, humor and inside jokes :)
                </i>
              </p>
            </Card>
          </div>
          <div className="memes-grid">
            <div
              id="leftColumnChangeIndex"
              className="changeColumns"
              onMouseEnter={() => changeIndexLeft()}
              size="big"
              onClick={() => changeIndexLeft()}
            >
              <h4>Previous</h4>
              <p>(Just hover over/click it)</p>
            </div>
            {dataMemes.length > 0 && (
              <div className="">
                <MemeItem
                  data={dataMemes[index]}
                  key={index}
                  style={{
                    alignSelf: 'stretch',
                    justifySelf: 'center',
                    border: '1px solid'
                  }}
                />
              </div>
            )}
            <div
              id="rightColumnChangeIndex"
              onMouseEnter={() => changeIndexRight()}
              className="changeColumns"
              name="arrow right"
              onClick={() => changeIndexRight()}
            >
              {console.log(index)}
              <h4>Next</h4>
              <p>(Just hover over/click it)</p>
            </div>
          </div>
        </section>
      </div>
      <TandC />
    </>
  );
}

Memes.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Memes)
