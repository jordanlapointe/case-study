import React, { PureComponent } from 'react'
import './ProductDetailsPage.css'
import ItemHighlights from './ItemHighlights'
import ItemPhotos from './ItemPhotos'
import ItemPricing from './ItemPricing'
import ReviewsSummary from './ReviewsSummary'

// Get item data from window object (embedded for performance)
// TODO: parse this data and store with Redux
const { itemData } = window

export default class ProductDetailsPage extends PureComponent {
  render() {
    const highlights = itemData.ItemDescription[0].features
    const images = itemData.Images[0]
    const pricing = itemData.Offers[0].OfferPrice[0]
    const reviews = itemData.CustomerReview[0]

    return (
      <main className="ProductDetailsPage">
        <h1>{ itemData.title }</h1>
        <ItemPhotos images={ images } />
        <ItemPricing pricing={ pricing } />
        <ItemHighlights highlights={ highlights }  />
        <ReviewsSummary reviews={ reviews } />
      </main>
    )
  }
}
