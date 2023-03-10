import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonRound } from './ButtonRound';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ButtonRound',
  component: ButtonRound,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  
} as ComponentMeta<typeof ButtonRound>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonRound> = (args) => <ButtonRound {...args} />;

export const Primary = Template.bind({}); 
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  children: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button'
};
