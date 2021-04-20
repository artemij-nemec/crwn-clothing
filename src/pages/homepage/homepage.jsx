import React from 'react'
import Directory from '../../components/directory/directory'
import './homepage.styles.scss'

export const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <Directory />
      </div>
    </div>
  )
}
