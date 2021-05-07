import React from 'react'
import { connect } from 'react-redux'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors.js'
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
  collections: selectShopCollectionsForPreview(state)
})

export default connect(mapStateToProps)(CollectionsOverview)
