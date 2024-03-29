import React from 'react'
import { Story, Meta } from '@storybook/react'

import Footer from '../../components/organisms/Footer'

export default {
  title: 'Organisms/Footer',
  components: Footer,
} as Meta

const Template: Story = () => <Footer />

export const Default = Template.bind({})
