export const SignUpContent = [
  {
    type: 'input-group',
    inputs: [
      { name: 'firstName', label: 'First Name', type: 'text' },
      { name: 'lastName', label: 'Last Name', type: 'text' },
    ],
  },
  {
    type: 'input-group',
    inputs: [{ name: 'email', label: 'Email', type: 'email' }],
  },
  {
    type: 'input-group',
    inputs: [{ name: 'password', label: 'Password', type: 'password' }],
  },
  {
    type: 'select',
    name: 'role',
    options: [
      { id: 'instagram', label: 'Instagram', value: 'Instagram' },
      { id: 'youtube', label: 'You Tube', value: 'You Tube' },
      { id: 'linkedIn', label: 'Linked In', value: 'Linked In' },
      { id: 'facebook', label: 'Facebook', value: 'Facebook' },
      { id: 'twitter', label: 'Twitter', value: 'Twitter' },
      { id: 'google', label: 'Google', value: 'Google' },
      { id: 'other', label: 'Other', value: 'Other' },
    ],
  },
  {
    type: 'button',
    label: 'Let’s Go!',
  },
  {
    type: 'subtitle',
    label: 'Already have an account?',
    link: { type: 'link', label: 'Log in here', href: '/login' },
  },
];
