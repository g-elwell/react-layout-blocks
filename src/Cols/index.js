import React from 'react'
import { css } from 'styled-components'

import { vars } from '../lib/theme'

const Cols = ({ children, vAlign, gutter = vars.spacing[2], ...props }) => (
  <div
    css={css`
      display: flex;
      flex-wrap: wrap;
      margin: -${gutter};
      & > * {
        padding: ${gutter};
      }
      ${vAlign === 'center' &&
      css`
        align-items: center;
      `}
    `}
    {...props}
  >
    {children}
  </div>
)

export default Cols
