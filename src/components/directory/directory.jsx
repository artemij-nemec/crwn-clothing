import React from 'react'
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import MenuItem from '../menu-item/menu-item'
import './directory.styles.scss'

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(section => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory)
