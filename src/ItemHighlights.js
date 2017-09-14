import React, { PureComponent } from 'react'

export default class ItemHighlights extends PureComponent {
  render() {
    const formattedHighlights = this.formatHighlights(this.props.highlights)

    return (
      <section className="ItemHighlights">
        <h1>product highlights</h1>
        <ul>
          { formattedHighlights.map(highlight =>
            <li>{ highlight.name } { highlight.value }</li>
          ) }
        </ul>
      </section>
    )
  }

  formatHighlights = highlights => highlights.map(highlight => {
    const boldedContent = highlight.match(/<strong>(.*?)<\/strong>/)
    const name = boldedContent[1]
    const value = highlight.replace(boldedContent[0], '')

    return {
      name,
      value
    }
  })
}
