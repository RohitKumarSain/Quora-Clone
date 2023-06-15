import React from 'react'
import '../componentcss/relatedtopics.css'
import { relatedTopics } from '../ArrayOfDatas/relatedTopicsArr';
function RelatedTopics() {
    return (
        <div className='related-topics-wrapper'>
            {/* This is heading */}
            <div className="heading-related-topics">
                Related Topics
            </div>
            {/* This is content that is shown in view */}
            <div className="content-related-Topic-bottom">
                {
                    relatedTopics.map((e) => (
                        <div className="card-content-related">
                            <div className="image-related mx-2">
                                <img src={e.logo} alt="not-available" />
                            </div>
                            <div className="info-related">
                                <div style={{ fontWeight: 700 }}>{e.topic}</div>
                                <div style={{ color: "grey" }}>{e.followers}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedTopics;