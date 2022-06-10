import React from 'react' 

import { DOMQLReact } from './sample-transform';
import { Box } from 'smbls'

const PosterCard = (props, state) => {
    return DOMQLReact({
      extends: Box,
      text: '111',
      style: { color: 'black'}
    }, props, state)
}


function App () {

  return <>
  <PosterCard 
      theme="primary" 
      fontSize="A"
      width='A'
      height='B'
      color='#333'
   />
  </>
}

export default App;
