import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

// pm-kit
import { parkGreen } from '@pm-kit/colours'

// images
import { successPath, failPath } from '../../shared/svg/index'

// keys of available icons
export const FEEDBACK_ICON_NAME = {
  CHECKMARK: 'checkmark',
  ERROR: 'error',
  LOADER: 'loader',
}

// definitions of availabe svg icons
const FEEDBACK_ICON_DATA = [
  {
    key: FEEDBACK_ICON_NAME.CHECKMARK,
    file: successPath,
  },
  {
    key: FEEDBACK_ICON_NAME.ERROR,
    file: failPath,
  },
]

// keys of available sizes
export const SIZES = {
  SMALL: '24px',
  MEDIUM: '36px',
  LARGE: '48px',
}

const FeedbackIcon = ({ name, size, ...rest }) => {
  const iconData = FEEDBACK_ICON_DATA.filter((data) => data.key === name)

  const loader = css`
    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }
    border: 3px solid ${parkGreen};
    border-radius: 50%;
    border-right-color: transparent;
    display: inline-block;
    animation: 1s linear infinite spinner;
    animation-delay: var(--spinner-delay);
    height: ${size};
    width: ${size};
  `

  return (
    <>
      {name === 'loader' ? (
        <div css={loader} {...rest} />
      ) : (
        <>
          {iconData && iconData[0] && (
            <img alt={iconData[0].key} height={size} src={iconData[0].file} weight={size} {...rest} />
          )}
        </>
      )}
    </>
  )
}

FeedbackIcon.propTypes = {
  /**
   * The icon you want to render.
   */
  name: PropTypes.oneOf([FEEDBACK_ICON_NAME.CHECKMARK, FEEDBACK_ICON_NAME.ERROR, FEEDBACK_ICON_NAME.LOADER]).isRequired,
  /**
   * The height and width of feedback-icon.
   */
  size: PropTypes.oneOf([SIZES.SMALL, SIZES.MEDIUM, SIZES.LARGE]),
}

FeedbackIcon.defaultProps = {
  size: '1.125rem',
}

export default FeedbackIcon
