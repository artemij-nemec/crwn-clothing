import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'

const Collection = ({ collection }) => {
  console.log(collection)
  return (
    <div className='collection-page'>
      <h2>{collection.title.toUpperCase()}</h2>
      {collection.items.map(i => i.name)}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
