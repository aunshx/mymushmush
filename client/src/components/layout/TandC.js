import React from 'react'
import { Button, Icon, Popup } from 'semantic-ui-react'

const TandC = () => (
  <div className="box">
    <div className="betTime">
      <Popup
        trigger={
          <Button size="tiny" color="red" floated="right" inverted icon>
            <Icon name="info" />
          </Button>
        }
        basic
        content={
          " All Rights Reserved. The ownership of the 'mymushmush' logo, 'Convey your love' slogan and every/all features/aspects/designs/assets of this web space and herein the website are held exclusively by the 'Mymushmush company' and it's affiliates. Reproduction of the said material is strictly prohibited unless with prior permission by the said proprietors."
        }
        header={'© 2021 mymushmush'}
        style={{
          borderRadius: '10px',
          border: '2px solid #ebbe1e',
        }}
      />
    </div>
  </div>
);

export default TandC
