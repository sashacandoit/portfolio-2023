import { Icon } from '@chakra-ui/react'

const CodepenIcon = (props) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" clip-path="url(#a)"><path d="m10 1.667 8.333 5.416v5.834L10 18.333l-8.333-5.416V7.083L10 1.667ZM10 18.333v-5.416" /><path d="M18.333 7.083 10 12.917 1.667 7.083" /><path d="M1.667 12.917 10 7.083l8.333 5.834M10 1.667v5.416" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z" /></clipPath></defs>
  </Icon>
)
  

const LinkedinIcon = (props) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <g stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" clip-path="url(#a)"><path d="M13.333 6.667a5 5 0 0 1 5 5V17.5H15v-5.833a1.666 1.666 0 1 0-3.333 0V17.5H8.333v-5.833a5 5 0 0 1 5-5ZM5 7.5H1.667v10H5v-10ZM3.333 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z" /></clipPath></defs>
  </Icon>
)

const GithubIcon = (props) => (
  <Icon viewBox="0 0 20 21" {...props}>
    <g clip-path="url(#a)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" d="M7.5 16.396c-4.167 1.25-4.167-2.084-5.833-2.5m11.666 5V15.67a2.81 2.81 0 0 0-.783-2.175c2.617-.292 5.367-1.284 5.367-5.833a4.533 4.533 0 0 0-1.25-3.125 4.225 4.225 0 0 0-.075-3.142s-.984-.292-3.259 1.233a11.15 11.15 0 0 0-5.833 0C5.225 1.104 4.242 1.396 4.242 1.396a4.225 4.225 0 0 0-.075 3.142 4.533 4.533 0 0 0-1.25 3.15c0 4.516 2.75 5.508 5.366 5.833a2.808 2.808 0 0 0-.783 2.15v3.225" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 .563h20v20H0z" /></clipPath></defs>
  </Icon>
)

const LineSvg = (props) => (
  <Icon width="2" height="90" viewBox="0 0 2 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" width="1" height="90" fill="#0A192F" />
  </Icon>
)

export { LinkedinIcon, CodepenIcon, GithubIcon, LineSvg }