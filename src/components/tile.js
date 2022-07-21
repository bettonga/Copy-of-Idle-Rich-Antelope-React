import React from 'react'

import PropTypes from 'prop-types'

import './tile.css'

const Tile = (props) => {
  return (
    <div className={`tile-tile ${props.rootClassName} `}>
      <h1 className="tile-text">{props.heading}</h1>
      <span className="tile-text1">{props.text}</span>
    </div>
  )
}

Tile.defaultProps = {
  rootClassName: '',
  text: 'Text bla',
  heading: 'Heading',
}

Tile.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default Tile
