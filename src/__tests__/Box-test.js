/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import assert from 'power-assert';
import {style} from 'react-dom-stylesheet';
import Box from '../Box';

describe('Box', function() {

  it('allows to style component', function() {
    let Styled = style(Box, {color: 'red'});
    assert(/flex/.exec(Styled.stylesheet.style.base.display));
    assert(Styled.stylesheet.style.base.color === 'red');
  });

  it('accepts flex shorthand', function() {
    let markup = ReactDOMServer.renderToString(<Box flex={1} />);
    assert(/style="flex-grow:1;"/.exec(markup));
  });

});
