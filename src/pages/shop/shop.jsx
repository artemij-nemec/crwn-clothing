import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import { SHOP_DATA } from './shop-data'

export default class Shop extends Component {
  constructor() {
    super()
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const collections = this.state.collections
    return (
      <div className='shop-page'>
        {collections.map(collection => (
          <CollectionPreview
            key={collection.id}
            items={collection.items}
            title={collection.title}
          />
        ))}
      </div>
    )
  }
}
