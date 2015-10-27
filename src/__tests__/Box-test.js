/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React from 'react';
import assert from 'power-assert';
import {styleComponent} from '@prometheusresearch/react-stylesheet';
import Box from '../Box';

describe('Box', function() {

  it('allows to style component', function() {
    let Styled = styleComponent(Box, {color: 'red'});
    assert(Styled.stylesheet.style.self.display === 'flex');
    assert(Styled.stylesheet.style.self.color === 'red');
  });

  it('accepts flexbox related style as props', function() {
    let markup = React.renderToString(<Box flex={1} />);
    assert(/style="flex:1;"/.exec(markup));
  });

});
