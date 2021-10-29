import React from 'react'
import { Loader } from 'semantic-ui-react'

const Spinner = () => (
  <>
    <div className="center-screen">
      <Loader active inline="centered" size="huge" inverted />
    </div>
  </>
);

export default Spinner;



