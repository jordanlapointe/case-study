import React, { PureComponent } from 'react'
import './ProductDetailsPage.css'
import _ from 'lodash'
import ItemHighlights from './ItemHighlights'
import ItemPhotos from './ItemPhotos'
import ItemPricing from './ItemPricing'
import ReviewsSummary from './ReviewsSummary'

// Get item data from window object (embedded for performance)
// TODO: parse this data and store with Redux
const { itemData } = window

export default class ProductDetailsPage extends PureComponent {
  render() {
    const highlights = _.get(itemData, 'ItemDescription[0].features')
    const images = _.get(itemData, 'Images[0]')
    const pricing = _.get(itemData, 'Offers[0].OfferPrice[0]')
    const reviews = _.get(itemData, 'CustomerReview[0]')
    const title = _.get(itemData, 'title')

    if (!itemData) return null

    return (
      <main className="ProductDetailsPage">
        { title && <h1>{ itemData.title }</h1> }
        { images && <ItemPhotos images={ images } /> }
        { pricing && <ItemPricing pricing={ pricing } /> }
        { highlights && <ItemHighlights highlights={ highlights }  /> }
        { reviews && <ReviewsSummary reviews={ reviews } /> }
      </main>
    )
  }
}
