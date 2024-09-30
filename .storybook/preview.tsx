import React from 'react'
import GlocalStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlocalStyles />
      <Story />
    </>
  )
]
