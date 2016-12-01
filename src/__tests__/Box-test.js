/**
 * @copyright 2015+, Prometheus Research, LLC
 */

import Renderer from 'react-test-renderer';
import React from 'react';
import {style} from 'react-stylesheet';

import {VBox, HBox} from '../index';
import Box from '../Box';

function getStylesheetFromTree(tree) {
  return tree._component._currentElement.props.child.stylesheet;
}

it('render <VBox />', function() {
  let tree = Renderer.create(<VBox />);
  expect(tree).toMatchSnapshot();
  let stylesheet = getStylesheetFromTree(tree);
  expect(stylesheet).toMatchSnapshot();
});

it('render <HBox />', function() {
  let tree = Renderer.create(<HBox />);
  expect(tree).toMatchSnapshot();
  let stylesheet = getStylesheetFromTree(tree);
  expect(stylesheet).toMatchSnapshot();
});

it('allows to style component w/ style prop', function() {
  let tree = Renderer.create(<HBox style={{textAlign: 'center'}} />);
  expect(tree).toMatchSnapshot();
});

it('allows to style component', function() {
  let Styled = style(Box, {color: 'red'});
  let tree = Renderer.create(<Styled />);
  expect(tree).toMatchSnapshot();
  let stylesheet = getStylesheetFromTree(tree);
  expect(stylesheet).toMatchSnapshot();
});
