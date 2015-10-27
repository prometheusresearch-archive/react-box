/**
 * @copyright 2015, Prometheus Research, LLC
 */

import Box from './Box';
import {styleComponent} from '@prometheusresearch/react-stylesheet';

export let HBox = styleComponent(Box, {flexDirection: 'row'}, 'HBox');
export let VBox = styleComponent(Box, {flexDirection: 'column'}, 'VBox');
