/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React  from 'react';
import assert from 'power-assert';
import Box    from '../Box';

describe('Box', function() {

  it('accepts flexbox related style as props', function() {
    let markup = React.renderToString(<Box flex={1} />);
    assert(/style="flex:1;"/.exec(markup));
  });
});
