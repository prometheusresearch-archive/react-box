/**
 * @copyright 2015, Prometheus Research, LLC
 * @flow
 */

import Box from './Box';
import {style} from 'react-stylesheet';

export let HBox = style(Box, {
  displayName: 'HBox',
  base: {
    flexDirection: 'row'
  }
});

export let VBox = style(Box, {
  displayName: 'VBox',
  base: {
    flexDirection: 'column'
  }
});
