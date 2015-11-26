/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import assert from 'power-assert';
import {styleComponent} from '@prometheusresearch/react-stylesheet';
import Box from '../Box';

describe('Box', function() {

  it('allows to style component', function() {
    let Styled = styleComponent(Box, {color: 'red'});
    assert(Styled.stylesheet.style.base.display === 'flex');
    assert(Styled.stylesheet.style.base.color === 'red');
  });

  it('accepts flexbox related style as props', function() {
    let markup = ReactDOMServer.renderToString(<Box flex={1} />);
    assert(/style="flex:1;"/.exec(markup));
  });

});
