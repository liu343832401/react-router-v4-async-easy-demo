import React from 'react'
import { Link } from 'react-router-dom'

class Index extends React.Component {
  render () {
    return (
      <div>
        <h1>Stages list</h1>
        <ul>
          <li><Link to="/home/s1">ListView + Carousel</Link></li>
          <li><Link to="/home/s2">Tabs + ...</Link></li>
          <li><Link to="/home/s3">Form + ...</Link></li>
        </ul>
      </div>
    )
  }
}

export default Index