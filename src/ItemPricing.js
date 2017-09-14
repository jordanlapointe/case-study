import React, { PureComponent } from 'react'
import './ItemPricing.css'

export default class ItemHighlights extends PureComponent {
  state = {
    displayedPhotoIndex: 0
  }

  render() {
    const { formattedPriceValue, priceQualifier } = this.props.pricing

    return (
      <section className="ItemPricing">
        <div>
          <span className="ItemPricing-price">
            { formattedPriceValue }
          </span>
          { ' ' }
          { priceQualifier }
        </div>
        <div className="split-layout ItemPricing-action-container">
          <button className="split-layout__half ItemPricing-action">
            Pick Up in Store
          </button>
          <button className="split-layout__half ItemPricing-action ItemPricing-action--primary">
            Add to Cart
          </button>
        </div>
        <div className="split-layout ItemPricing-secondary-action-container">
          <button className="split-layout__third ItemPricing-secondary-action">
            Add to Registry
          </button>
          <button className="split-layout__third ItemPricing-secondary-action ItemPricing-secondary-action--primary">
            Add to List
          </button>
          <button className="split-layout__third ItemPricing-secondary-action ItemPricing-secondary-action--primary">
            Share
          </button>
        </div>
      </section>
    )
  }
}
