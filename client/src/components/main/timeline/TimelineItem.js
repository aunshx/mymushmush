import React from 'react'

import TandC from '../../layout/TandC';

const TimelineItem = ({ data }) => (
  <>
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
        <time>{data.date}</time>
        {data.link && (
          <>
            <img src={data.link.url} alt="imge" />
          </>
        )}
        <p>{data.text}</p>
        <span className="circle" />
      </div>
      <TandC />
    </div>
  </>
);

export default TimelineItem