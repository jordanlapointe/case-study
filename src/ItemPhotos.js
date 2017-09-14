import React, { PureComponent } from 'react'
import './ItemPhotos.css'

export default class ItemHighlights extends PureComponent {
  state = {
    displayedPhotoIndex: 0
  }

  render() {
    const { PrimaryImage, AlternateImages } = this.props.images
    const { displayedPhotoIndex } = this.state
    const imageUrls = this.formatImageUrls([...PrimaryImage, ...AlternateImages])

    return (
      <section className="ItemPhotos">
        <img className="ItemPhotos-displayed-photo" src={ imageUrls[displayedPhotoIndex] } alt="" />
        <ul className="ItemPhotos-thumbnails">
          { imageUrls.map((imageUrl, index) => {
            const selectedClass = index === displayedPhotoIndex ? 'ItemPhotos-thumbnail--selected' : ''
            return <li className={ 'ItemPhotos-thumbnail ' + selectedClass }>
              <a href="javascript://" onClick={ () => this.setDisplayedPhoto(index) }>
                <img className="ItemPhotos-thumbnail-image" src={ imageUrl + '?wid=150&hei=150' } alt={ 'Product thumbnail ' + index } />
              </a>
            </li>
          }) }
        </ul>
      </section>
    )
  }

  formatImageUrls = images => images.map(image => image.image || image)

  setDisplayedPhoto = index => {
    this.setState({ displayedPhotoIndex: index })
  }
}
