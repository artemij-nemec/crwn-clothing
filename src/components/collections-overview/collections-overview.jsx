import React from 'react'
import { connect } from 'react-redux'
import { selectShopCollections } from '../../redux/shop/shop.selectors.js'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
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

const mapStateToProps = state => ({
  collections: selectShopCollections(state)
})

export default connect(mapStateToProps)(CollectionsOverview)
