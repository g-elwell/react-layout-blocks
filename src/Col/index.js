import React from 'react'
import { css } from 'styled-components/macro'

import { vars } from '../lib/theme'

const Col = ({ children, width = 1 }) => (
  <div
    css={css`
      box-sizing: border-box;
      flex: 0 0 100%;
      @media screen and (min-width: ${vars.break.md}) {
        flex: 0 0 ${width * 100 + '%'};
      }
    `}
  >
    {children}
  </div>
)

export default Col
