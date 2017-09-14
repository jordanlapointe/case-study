import React, { PureComponent } from 'react'
import './ReviewsSummary.css'
import ReviewHighlight from './ReviewHighlight'

export default class ReviewsSummary extends PureComponent {
  render() {
    const {
      Con,
      consolidatedOverallRating,
      Pro,
      totalReviews,
    } = this.props.reviews

    return (
      <section className="ReviewsSummary">
        <div>
          { consolidatedOverallRating } out of 5 overall
        </div>
        <a href="javascript://">
          view all { totalReviews } reviews
        </a>
        <div>
          <div>
            <h1>PRO</h1>
            <p>most helpful 4–5 star review</p>
            <ReviewHighlight review={ Pro[0] } />
          </div>
          <div>
            <h1>CON</h1>
            <p>most helpful 1–2 star review</p>
            <ReviewHighlight review={ Con[0] } />
          </div>
        </div>
      </section>
    )
  }
}
