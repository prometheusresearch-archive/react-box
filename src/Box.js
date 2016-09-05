/**
 * @copyright 2015+, Prometheus Research, LLC
 * @flow
 */

import type {DOMStylesheet} from 'react-dom-stylesheet';

import React, {Component} from 'react';
import {create} from 'react-dom-stylesheet';

function choose<T>(a?: T, b?: T, c?: T): T | void {
  if (a != null) {
    return a;
  } else if (b != null) {
    return b;
  } else if (c != null) {
    return c;
  } else {
    return undefined;
  }
}

/**
 * Flexbox layout primitive.
 *
 * See https://css-tricks.com/snippets/css/a-guide-to-flexbox/ for docs.
 */
export default class Box extends Component {

  static stylesheet = create({
    boxSizing: 'border-box',
    position: 'relative',

    margin: 0,
    padding: 0,

    display: 'flex',
    alignItems: 'stretch',
    flexBasis: 'auto',
    flexShrink: 0,

    minHeight: 0,
    minWidth: 0
  }, 'Box');

  props: {

    /**
     * Sets `align-content` style property.
     *
     * See https://css-tricks.com/almanac/properties/a/align-content/ for docs.
     */
    alignContent?:
        'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around'
      | 'stretch';

    /**
     * Sets `align-items` style property.
     *
     * See https://css-tricks.com/almanac/properties/a/align-items/ for docs.
     */
    alignItems?:
        'flex-start'
      | 'flex-end'
      | 'center'
      | 'baseline'
      | 'stretch';

    /**
     * Sets `align-self` style property.
     *
     * See https://css-tricks.com/almanac/properties/a/align-self/ for docs.
     */
    alignSelf?:
        'auto'
      | 'flex-start'
      | 'flex-end'
      | 'center'
      | 'baseline'
      | 'stretch';

    /**
     * Shortcut for grow={v} shrink={0} basis="0%".
     */
    flex?: number | string;

    /**
     *
     * Sets `flex-basis` style property.
     *
     * See https://css-tricks.com/almanac/properties/f/flex-basis/ for docs.
     */
    basis?: number | string;

    /**
     * Sets `flex-direction` style property.
     *
     * See https://css-tricks.com/almanac/properties/f/flex-direction/ for docs.
     */
    direction?:
        'row'
      | 'row-reverse'
      | 'column'
      | 'column-reverse';

    /**
     * Sets `flex-flow` style property.
     *
     * See https://css-tricks.com/almanac/properties/f/flex-flow/ for docs.
     */
    flow?: number | string;

    /**
     * Sets `flex-grow` style property.
     *
     * See https://css-tricks.com/almanac/properties/f/flex-grow/ for docs.
     */
    grow?: number | string;

    /**
     * Sets `flex-shrink` style property.
     *
     * See https://css-tricks.com/almanac/properties/f/flex-shrink/ for docs.
     */
    shrink?: number | string;

    /**
     * Sets `flex-wrap` style property.
     *
     * See https://css-tricks.com/almanac/properties/f/flex-wrap/ for docs.
     */
    wrap?:
        'nowrap'
      | 'wrap'
      | 'wrap-reverse';

    /**
     * Sets `justify-content` style property.
     *
     * See https://css-tricks.com/almanac/properties/j/justify-content/ for docs.
     */
    justifyContent?:
        'flex-start'
      | 'flex-end'
      | 'center'
      | 'space-between'
      | 'space-around';

    /**
     * Sets `order` style property.
     *
     * See https://css-tricks.com/almanac/properties/o/order/ for docs.
     */
    order?: number;

    /**
     * Sets `overflow` style property.
     *
     * See https://css-tricks.com/almanac/properties/o/overflow/ for docs.
     */
    overflow?:
        'auto'
      | 'scroll'
      | 'visible'
      | 'hidden';

    /**
     * Sets `position` style property.
     *  See https://css-tricks.com/almanac/properties/p/position/ for docs
     */
    position?:
        'static'
      | 'relative'
      | 'absolute'
      | 'fixed'
      | 'sticky';

    /**
     * Sets `top` style property.
     *
     * See https://css-tricks.com/almanac/properties/t/top/ for docs.
     */
    top?: number | string;

    /**
     * Sets `left` style property.
     *
     * See https://css-tricks.com/almanac/properties/l/left/ for docs.
     */
    left?: number | string;

    /**
     * Sets `bottom` style property.
     *
     * See https://css-tricks.com/almanac/properties/b/bottom/ for docs.
     */
    bottom?: number | string;

    /**
     * Sets `right` style property.
     *
     * See https://css-tricks.com/almanac/properties/r/right/ for docs.
     */
    right?: number | string;

    /**
     * Sets `height` style property.
     *
     * See https://css-tricks.com/almanac/properties/h/height/ for docs.
     */
    height?: number | string;

    /**
     * Sets `width` style property.
     *
     * See https://css-tricks.com/almanac/properties/w/width/ for docs.
     */
    width?: number | string;

    /**
     * Sets `min-width` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/min-width/ for docs.
     */
    minWidth?: number | string;

    /**
     * Sets `min-height` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/min-height/ for docs.
     */
    minHeight?: number | string;

    /**
     * Sets `max-width` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/max-width/ for docs.
     */
    maxWidth?: number | string;

    /**
     * Sets `max-height` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/max-height/ for docs.
     */
    maxHeight?: number | string;

    /**
     * Sets `margin` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/margin/ for docs.
     */
    margin?: number | string;

    /**
     * Sets `margin-right` and `margin-left` style properties.
     */
    marginH?: number | string;

    /**
     * Sets `margin-top` and `margin-bottom` style properties.
     */
    marginV?: number | string;

    /**
     * Sets `margin-right` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/margin-right/ for docs.
     */
    marginRight?: number | string;

    /**
     * Sets `margin-left` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/margin-left/ for docs.
     */
    marginLeft?: number | string;

    /**
     * Sets `margin-top` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/margin-top/ for docs.
     */
    marginTop?: number | string;

    /**
     * Sets `margin-bottom` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/margin-bottom/ for docs.
     */
    marginBottom?: number | string;

    /**
     * Sets `padding` style property.
     *
     * See https://css-tricks.com/almanac/properties/p/padding/ for docs.
     */
    padding?: number | string;

    /**
     * Sets `padding-right` and `padding-left` style properties.
     */
    paddingH?: number | string;

    /**
     * Sets `padding-top` and `padding-bottom` style properties.
     */
    paddingV?: number | string;

    /**
     * Sets `padding-right` style property.
     *
     * See https://css-tricks.com/almanac/properties/p/padding-right/ for docs.
     */
    paddingRight?: number | string;

    /**
     * Sets `padding-left` style property.
     *
     * See https://css-tricks.com/almanac/properties/p/padding-left/ for docs.
     */
    paddingLeft?: number | string;

    /**
     * Sets `padding-top` style property.
     *
     * See https://css-tricks.com/almanac/properties/p/padding-top/ for docs.
     */
    paddingTop?: number | string;

    /**
     * Sets `padding-bottom` style property.
     *
     * See https://css-tricks.com/almanac/properties/p/padding-bottom/ for docs.
     */
    paddingBottom?: number | string;

    /**
     * Extra CSS style properties.
     */
    style?: Object;

    /**
     * Styleable variant.
     */
    variant?: Object;

    /**
     * Component to render.
     */
    Component?: Function | string;

  };

  render() {
    let {
      alignContent,
      alignItems,
      alignSelf,
      flex,
      basis: flexBasis,
      direction: flexDirection,
      flow: flexFlow,
      grow: flexGrow,
      shrink: flexShrink,
      wrap: flexWrap,
      justifyContent,
      order,
      overflow,
      style,
      variant,
      Component = 'div',
      position,
      top, left, bottom, right,
      height, width,
      minWidth, minHeight,
      maxWidth, maxHeight,
      margin,
      marginH, marginV,
      marginRight, marginLeft, marginTop, marginBottom,
      padding,
      paddingH, paddingV,
      paddingRight, paddingLeft, paddingTop, paddingBottom,
      ...props
    } = this.props;
    style = {

      alignContent,
      alignItems,
      alignSelf,
      flexBasis: flexBasis == null && flex != null ? '0%' : flexBasis,
      flexDirection,
      flexFlow,
      flexGrow: choose(flexGrow, flex),
      flexShrink: flexShrink == null && flex != null ? 0 : flexShrink,
      flexWrap,
      justifyContent,
      order,

      overflow,

      position,

      top,
      left,
      bottom,
      right,

      height, width,

      minWidth, minHeight,
      maxWidth, maxHeight,

      marginLeft: choose(marginLeft, marginH, margin),
      marginRight: choose(marginRight, marginH, margin),
      marginTop: choose(marginTop, marginV, margin),
      marginBottom: choose(marginBottom, marginV, margin),

      paddingLeft: choose(paddingLeft, paddingH, padding),
      paddingRight: choose(paddingRight, paddingH, padding),
      paddingTop: choose(paddingTop, paddingV, padding),
      paddingBottom: choose(paddingBottom, paddingV, padding),

      ...style,
    };
    let className = this.constructor.stylesheet.asClassName(variant);
    return <Component className={className} {...props} style={style} />;
  }

  componentDidMount() {
    this.constructor.stylesheet.use();
  }

  componentWillUnmount() {
    this.constructor.stylesheet.dispose();
  }

  static style(stylesheet: DOMStylesheet, displayName: string) {
    return class extends Box {
      static displayName = displayName;
      static stylesheet = this.stylesheet.override(stylesheet);
    };
  }
}
