/**
 * @copyright 2015+, Prometheus Research, LLC
 */

import Renderer from 'react-test-renderer';
import React from 'react';
import {style} from 'react-dom-stylesheet';

import Box from '../Box';

it('allows to style component', function() {
  let Styled = style(Box, {color: 'red'});
  let tree = Renderer.create(<Styled />);
  expect(tree).toMatchSnapshot();
});

it('accepts flex shorthand', function() {
  let tree = Renderer.create(<Box flex={1} />);
  expect(tree).toMatchSnapshot();
});
