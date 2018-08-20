import Enzyme, { shallow, render, mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// react-slick setup for tests
const matchMedia = () => ({
  matches: false,
  addListener() {},
  removeListener() {},
});

window.matchMedia = window.matchMedia || matchMedia;

// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.React = React;
