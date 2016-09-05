/**
 * @copyright 2015, Prometheus Research, LLC
 * @flow
 */

import Box from './Box';
import {style} from 'react-dom-stylesheet';

export let HBox = style(Box, {flexDirection: 'row'}, 'HBox');
export let VBox = style(Box, {flexDirection: 'column'}, 'VBox');
