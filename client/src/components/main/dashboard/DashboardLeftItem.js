import React from 'react'
import PropTypes from 'prop-types'

const DashboardLeftItem = (data, classCSS) => (
  <div className='box1-images'>
    <img src={data.data.link.url} alt="imge" className='minus'/>
  </div>
);


DashboardLeftItem.propTypes = {

}

export default DashboardLeftItem
