import React from 'react';
import PropTypes from 'prop-types';
import { Card, Popup } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Confetti from 'react-confetti';

import Navbar from '../../layout/Navbar' 
import TandC from '../../layout/TandC'
import WelcomeCard from './WelcomeCard'
import dataLeft from '../dashboard/dataLeft'
import dataRight from './dataright'

const Dashboard = ({ check: { isValid, sendAlert }, auth: { user }}) => {

  const windowConfetti = isValid
  const width = window.innerWidth
  const height = window.innerHeight

  return (
    <>
      <Navbar />
      <section className="container">
        {windowConfetti ? (
          <>
            <Confetti width={width} height={height} />
            <WelcomeCard />
          </>
        ) : (
          <div className="mini-container">
            <div className="box1-images-left">
              {dataLeft.map((data, index) => (
                <>
                  <Popup
                    trigger={<img src={data.link.url} alt="some" />}
                    content={data.title}
                    position="top left"
                    size="tiny"
                    style={{
                      borderRadius: '10px',
                      opacity: '0.9',
                      padding: '1em',
                      color: 'white',
                      backgroundColor: 'red'
                    }}
                    key={index}
                  />
                </>
              ))}
            </div>
            <div className="box2-written">
              {sendAlert && (
                <>
                  <p
                    className="sendHoverAlertP"
                    style={{
                      color: 'white',
                      border: '2px solid #ff0d3d',
                      textAlign: 'center',
                      borderRadius: '5px',
                      padding: '0.5em',
                      background: '#141011',
                      margin: 'auto',
                      width: '60%',
                      fontWeight: '800'
                    }}
                  >
                    <i
                      class="fas fa-arrow-left"
                      style={{ marginRight: '1em' }}
                    ></i>
                    Hover over the cute icons on the left/right for more fun!
                    <i
                      class="fas fa-arrow-right"
                      style={{ marginLeft: '1em' }}
                    ></i>
                  </p>
                </>
              )}
              <Card
                centered
                style={{
                  width: '90%',
                  color: 'black',
                  fontSize: '0.5em',
                  marginYop: '1em',
                  fontSize: '1em',
                  backgroundColor: '#fff',
                  border: ' 1px solid pink'
                }}
              >
                <Card.Header
                  style={{
                    fontSize: '2em',
                    margin: '0.5em',
                    fontFamily: "'PT Serif',serif",
                    textAlign: 'center',
                    color: 'black'
                  }}
                >
                  Dear <span style={{ color: '#ce3d3d' }}>{user.name}</span>,
                </Card.Header>
                <hr style={{ margin: '0.1em 4em 0.1em 4em' }} />
                <p
                  style={{
                    margin: '0.5em 3em 0.5em 3.5em',
                    textAlign: 'left',
                    color: 'black',
                    textAlign: 'left',
                    fontSize: '1.2em'
                  }}
                >
                  <strong style={{ color: '#ce3d3d', marginLeft: '1em' }}>
                    I
                  </strong>
                  t's been said and I quote,{' '}
                  <q>
                    The more I came to know about you, lesser my heart beat for me and more for you.
                  </q>{' '}
                  Or as they say, not-so-cutely, in Marathi,
                  <q>Tula baghun jeev jhala yeda pisa</q>; these statements,
                  however crude one of them may sound, both ring so true to me
                  these days. And because of this wonderful situation I've found
                  myself in, I am delighted to let you know, that I'm going to
                  be one of the countless youth of this dear country of ours,
                  who's going to be hooked on Arijit Singh's glorious melodies
                  sooner or later. It's just a matter of time that contemporary
                  nerve-wracking music is going to turn into profoundly deep,
                  ever-green musical masterpieces. But you know what, I am all
                  for it. You see, the day romantic songs started to make sense
                  and rom-coms started making me go like 'awwwww', I knew that I
                  had fallen for you. And for that, I feel truly blessed.
                </p>
                <p
                  style={{
                    margin: '0.5em 3em 0.5em 3.5em',
                    textAlign: 'left',
                    color: 'black',
                    textAlign: 'left',
                    fontSize: '1.2em'
                  }}
                >
                  <strong style={{ color: '#ce3d3d', marginLeft: '1em' }}>
                    O
                  </strong>
                  ften times worrying, maximum times smiling, I love how you
                  face life head on and accept it in it's entirety. You aren't
                  one to bow down to circumstances and just call it a day. You
                  are of a different breed. A breed formulated by pure grit,
                  determination, perseverance and astute smartness. Hence, with
                  all this in mind, I always say to you that everything is going
                  to be alright because I see in front of me, a woman who is
                  worthy of everything the world has to offer, a human, nay, MY
                  human who is going to get it all, and yet, you humbly digress.
                  But I feel that's okay. Because a relationship is enchanting
                  if the involved parties compliment each other. Like yin to
                  yang and vice-versa. And that my love, we do perfectly.
                </p>
                <p
                  style={{
                    margin: '0.5em 3em 0.5em 3.5em',
                    textAlign: 'left',
                    color: 'black',
                    textAlign: 'left',
                    fontSize: '1.2em'
                  }}
                >
                  <strong style={{ color: '#ce3d3d', marginLeft: '1em' }}>
                    N
                  </strong>
                  o relationship is all sunshine and rainbows. It takes work. A
                  lot of it. But you see, it is work worth doing and that's why
                  we see all over the world, people of all kind, giving true
                  love a chance even though one's past might make it seem bleak.
                  So, I'm enormously grateful to you for opening up your heart
                  to me, to let me experience things I had only heard about, for
                  now I understand, why the world is bonkers over 'just' a
                  feeling or a chemical reaction as you might empirically put
                  it.
                </p>
                <p
                  style={{
                    margin: '0.5em 3em 0.5em 3.5em',
                    textAlign: 'left',
                    color: 'black',
                    textAlign: 'left',
                    fontSize: '1.2em'
                  }}
                >
                  <strong style={{ color: '#ce3d3d', marginLeft: '1em' }}>
                    B
                  </strong>
                  eing with you brings out the best in me. It feels as if Afghan
                  heroin and Ghanian coffee had a child and that child was to be
                  an emotion. You are the personification of beauty with brains.
                  Right from your sad puppy eyes when you are upset to the
                  squinching of your nose when you're annoyed, your cuteness
                  always overpowers me even when I actively decide against it.
                  Such is your charm that I wish I could spend my every waking
                  moment with you. I understand that we don't have much time but
                  let's decide to make the most of how much ever little is left.
                </p>
                <p
                  style={{
                    margin: '0.5em 3em 0.5em 3.5em',
                    textAlign: 'left',
                    color: 'black',
                    textAlign: 'left',
                    fontSize: '1.2em'
                  }}
                >
                  <strong style={{ color: '#ce3d3d', marginLeft: '1em' }}>
                    W
                  </strong>
                  ith all of this being said, I would like to wish you many
                  happy returns of the day! You just crossed the big two-four! I
                  hope that you achieve everything that you wish for and forever
                  lead a great life. I love you baby. Have a wonderful day!
                </p>
                <p
                  style={{
                    margin: '0.5em 3em 1em 3.5em',
                    textAlign: 'left',
                    color: 'black',
                    textAlign: 'left',
                    fontSize: '1.4em'
                  }}
                >
                  <span style={{ color: '#ce3d3d' }}>Yours Lovingly,</span>
                  <br />
                  Aunsh
                </p>
              </Card>
            </div>
            <div className="box3-images-right">
              {dataRight.map((data, index) => (
                <>
                  <Popup
                    trigger={<img src={data.url} alt="some" />}
                    content={data.title}
                    position="top left"
                    size="tiny"
                    style={{
                      borderRadius: '10px',
                      opacity: '0.9',
                      padding: '1em',
                      color: 'white',
                      backgroundColor: 'red'
                    }}
                    key={index}
                  />
                </>
              ))}
            </div>
          </div>
        )}
      </section>
      <TandC />
    </>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  check: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  check: state.windowCheck
});

export default connect(mapStateToProps)(
  Dashboard
);
