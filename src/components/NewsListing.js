import React from "react"
import PropTypes from "prop-types"
import News from "./News"


const NewsListing = ({news}) => (
    <div className="row">
        {news.map(article => (
            <News 
                key={article.url}
                article={article}
            />
        ))}
    </div>
)

NewsListing.prototype = {
    news: PropTypes.array.isRequired
}
 
export default NewsListing