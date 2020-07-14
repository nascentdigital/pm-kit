import React from 'react'
import { render, mount } from 'enzyme'

import FeedbackIcon, { FEEDBACK_ICON_NAME, SIZES } from '../FeedbackIcon'

describe('FeedbackIcon', () => {
  const defaultProps = {
    name: FEEDBACK_ICON_NAME.CHECKMARK,
  }

  const doMount = (overrides = {}) => {
    const feedbackIcon = mount(<FeedbackIcon {...defaultProps} {...overrides} />)

    const findFeedbackIcon = () => feedbackIcon.find('img')

    return {
      feedbackIcon,
      name: feedbackIcon.find('name'),
      findFeedbackIcon,
    }
  }

  it('renders correct icon', () => {
    const checkMarkImage = doMount({ size: SIZES.SMALL }).findFeedbackIcon()
    expect(checkMarkImage).toHaveProp('alt', FEEDBACK_ICON_NAME.CHECKMARK)
  })
})
