import React from 'react'

import { Cols, Col } from 'react-layout-blocks'
import 'react-layout-blocks/dist/index.css'

const App = () => {
  return (
    <div>
      <Cols>
        <Col width={0.5}>Col</Col>
        <Col width={0.5}>Col</Col>
      </Cols>
    </div>
  )
}

export default App
