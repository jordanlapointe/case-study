import React, { PureComponent } from 'react';

export default class ReviewHighlight extends PureComponent {
  render() {
    const {
      datePosted,
      overallRating,
      review,
      screenName,
      title,
    } = this.props.review

    return (
      <div>
        <p>
          { overallRating } out of 5 stars
        </p>
        <h2>
          { title }
        </h2>
        <p>
          { review }
        </p>
        <p>
          <a href="javascript://">
            { screenName }
          </a>
          { ' ' }{ datePosted }
        </p>
      </div>
    );
  }
}
