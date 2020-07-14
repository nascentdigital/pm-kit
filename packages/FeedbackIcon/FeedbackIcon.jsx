import React from 'react'
import { css } from '@emotion/core'
import PropTypes from 'prop-types'

// pm-kit
import { parkGreen } from '@pm-kit/colours'

// images
import {
  successPath,
  failPath,
  alert,
  arrowHideLillyGreen,
  arrowShowLillyGreen,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  // delete,
  hide,
  minus,
  plus,
  refresh,
  showPassword,
  toolTip,
} from '../../shared/svg/index'

// keys of available icons
export const FEEDBACK_ICON_NAME = {
  CHECKMARK: 'checkmark',
  ERROR: 'error',
  ALERT: 'alert',
  ARROW_HIDE_LILLY_GREEN: 'arrowHideLillyGreen',
  ARROW_SHOW_LILLY_GREEN: 'arrowShowLillyGreen',
  CHEVRON_DOWN: 'chevronDown',
  CHEVRON_UP: 'chevronUp',
  CHEVRON_RIGHT: 'chevronRight',
  CHEVRON_LEFT: 'chevronLeft',
  // DELETE: 'delete',
  HIDE: 'hide',
  MINUS: 'minus',
  PLUS: 'plus',
  REFRESH: 'refresh',
  SHOW_PASSWORD: 'showPassword',
  TOOL_TIP: 'toolTip',
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
  {
    key: FEEDBACK_ICON_NAME.ALERT,
    file: alert,
  },
  {
    key: FEEDBACK_ICON_NAME.ARROW_SHOW_LILLY_GREEN,
    file: arrowShowLillyGreen,
  },
  {
    key: FEEDBACK_ICON_NAME.ARROW_HIDE_LILLY_GREEN,
    file: arrowHideLillyGreen,
  },
  {
    key: FEEDBACK_ICON_NAME.CHEVRON_DOWN,
    file: chevronDown,
  },
  {
    key: FEEDBACK_ICON_NAME.CHEVRON_UP,
    file: chevronUp,
  },
  {
    key: FEEDBACK_ICON_NAME.CHEVRON_LEFT,
    file: chevronLeft,
  },
  {
    key: FEEDBACK_ICON_NAME.CHEVRON_RIGHT,
    file: chevronRight,
  },
  {
    key: FEEDBACK_ICON_NAME.HIDE,
    file: hide,
  },
  {
    key: FEEDBACK_ICON_NAME.MINUS,
    file: minus,
  },
  {
    key: FEEDBACK_ICON_NAME.PLUS,
    file: plus,
  },
  {
    key: FEEDBACK_ICON_NAME.REFRESH,
    file: refresh,
  },
  {
    key: FEEDBACK_ICON_NAME.SHOW_PASSWORD,
    file: showPassword,
  },
  {
    key: FEEDBACK_ICON_NAME.TOOL_TIP,
    file: toolTip,
  },
]

// keys of available sizes
export const SIZES = {
  SMALL: '24px',
  MEDIUM: '36px',
  LARGE: '80px',
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
  size: SIZES.SMALL,
}

export default FeedbackIcon
