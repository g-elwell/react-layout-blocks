import React from 'react';
import { css } from 'styled-components';

import { vars } from '../lib/theme';

const Cover = ({
  children,
  flush = false,
  minHeight = 'auto',
  bg = vars.colors.white,
  ...props
}) => {
  // const headingColor = vars.colors.primary.darkest;
  const getContrastingColor = (bg) => {
    switch (bg) {
      case vars.colors.primary.mid:
        return vars.colors.white;
      default:
        return 'black';
    }
  };
  const headingColor = getContrastingColor(bg);
  return (
    <div
      css={css`
        position: relative;
        min-height: ${minHeight};
        background-color: ${bg};
        display: flex;
        align-items: center;
        justify-content: center;
        ${!flush &&
        css`
          padding-top: 5vw;
          padding-bottom: 5vw;
        `}
        .h1,
        .h2,
        .h3,
        .h4,
        .h5,
        .h6 {
          color: ${headingColor};
        }
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Cover;
