import React from 'react'
import FeedbackIcon, { FEEDBACK_ICON_NAME, SIZES } from './FeedbackIcon'
import { withKnobs, select } from '@storybook/addon-knobs'

export default {
  title: 'Design System|FeedbackIcon',
  component: FeedbackIcon,
  decorators: [withKnobs],
}

export const error = () => <FeedbackIcon name={FEEDBACK_ICON_NAME.ERROR} size={SIZES.SMALL} />

export const Playground = () => {
  return (
    <FeedbackIcon
      name={select(
        'name',
        [FEEDBACK_ICON_NAME.CHECKMARK, FEEDBACK_ICON_NAME.ERROR, FEEDBACK_ICON_NAME.LOADER],
        FEEDBACK_ICON_NAME.CHECKMARK
      )}
      size={select('size', [SIZES.SMALL, SIZES.MEDIUM, SIZES.LARGE], SIZES.SMALL)}
    />
  )
}

export const success = () => <FeedbackIcon name={FEEDBACK_ICON_NAME.CHECKMARK} size={SIZES.SMALL} />

export const waiting = () => <FeedbackIcon name={FEEDBACK_ICON_NAME.LOADER} size={SIZES.SMALL} />

Playground.story = {
  name: 'playground',
  parameters: { docs: { page: null, disable: true } },
}
