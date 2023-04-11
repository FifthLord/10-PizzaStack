
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterLink } from './footer-link.component';

export default {
   title: 'Common/Footer link',
   component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = () => <FooterLink />;

export const View = Template.bind({});