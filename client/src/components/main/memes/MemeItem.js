import React from 'react';
import { Popup ,Card, Icon, Image } from 'semantic-ui-react';
import {
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'

const MemeItem = ({ data }) => {
    
    return (
      <div className="fff">
        <Card
          centered
          style={{
            marginTop: '2em',
            width: '60%',
            maxHeight: '20%',
            minHeight: '20%'            
          }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '440px',
              maxHeight: '440px',
              objectFit: 'contain',
              alignSelf: 'center'
            }}
            alt="oo"
            src={data.url}
            wrapped
            ui={false}
          />

          <Card.Content>
            <Card.Header>{data.title}</Card.Header>
            <Card.Description>{data.content}</Card.Description>
            <Card.Meta>
              <WhatsappShareButton url={data.url} quote={data.caption}>
                <WhatsappIcon size={20} round={true} />
              </WhatsappShareButton>
              <FacebookShareButton url={data.url} quote={data.caption}>
                <FacebookIcon size={20} round={true} />
              </FacebookShareButton>
              <LinkedinShareButton url={data.url} quote={data.caption}>
                <LinkedinIcon size={20} round={true} />
              </LinkedinShareButton>
              <RedditShareButton url={data.url} quote={data.caption}>
                <RedditIcon size={20} round={true} />
              </RedditShareButton>
            </Card.Meta>
          </Card.Content>
        </Card>
      </div>
    );
};

export default MemeItem;
