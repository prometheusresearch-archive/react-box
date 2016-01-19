/**
 * @copyright 2015, Prometheus Research, LLC
 */

import React, {PropTypes} from 'react';
import {create} from 'react-dom-stylesheet';

/**
 * Flexbox layout primitive.
 *
 * See https://css-tricks.com/snippets/css/a-guide-to-flexbox/ for docs.
 */
export default class Box extends React.Component {

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

  static propTypes = {
    /**
     * Sets `align-content` style property.
     *
     * See https://css-tricks.com/almanac/properties/a/align-content/ for docs.
     */
    alignContent: PropTypes.oneOf([
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'stretch'
    ]),

    /**
     * Sets `align-items` style property.
     *
     * See https://css-tricks.com/almanac/properties/a/align-items/ for docs.
     */
    alignItems: PropTypes.oneOf([
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch'
    ]),

    /**
     * Sets `align-self` style property.
     *
     * See https://css-tricks.com/almanac/properties/a/align-self/ for docs.
     */
    alignSelf: PropTypes.oneOf([
      'auto',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch'
    ]),

    /**
     * Sets `flex` style property.
     *
     * See https://css-tricks.com/almanac/properties/f/flex/ for docs.
     */
    flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     *
     * Sets `flex-basis` style property.
     *
     * See https://css-tricks.com/almanac/properties/f/flex-basis/ for docs.
     */
    basis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `flex-direction` style property.
     *
     * See https://css-tricks.com/almanac/properties/f/flex-direction/ for docs.
     */
    direction: PropTypes.oneOf([
      'row',
      'row-reverse',
      'column',
      'column-reverse'
    ]),

    /**
     * Sets `flex-flow` style property.
     *
     * See https://css-tricks.com/almanac/properties/f/flex-flow/ for docs.
     */
    flow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `flex-grow` style property.
     *
     * See https://css-tricks.com/almanac/properties/f/flex-grow/ for docs.
     */
    grow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `flex-shrink` style property.
     *
     * See https://css-tricks.com/almanac/properties/f/flex-shrink/ for docs.
     */
    shrink: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `flex-wrap` style property.
     *
     * See https://css-tricks.com/almanac/properties/f/flex-wrap/ for docs.
     */
    wrap: PropTypes.oneOf([
      'nowrap',
      'wrap',
      'wrap-reverse'
    ]),

    /**
     * Sets `justify-content` style property.
     *
     * See https://css-tricks.com/almanac/properties/j/justify-content/ for docs.
     */
    justifyContent: PropTypes.oneOf([
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around'
    ]),

    /**
     * Sets `order` style property.
     *
     * See https://css-tricks.com/almanac/properties/o/order/ for docs.
     */
    order: PropTypes.number,

    /**
     * Sets `overflow` style property.
     */
    overflow: PropTypes.oneOf([
      'auto',
      'scroll',
      'visible',
      'hidden',
    ]),

    /**
     * Sets `top` style property.
     *
     * See https://css-tricks.com/almanac/properties/t/top/ for docs.
     */
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `left` style property.
     *
     * See https://css-tricks.com/almanac/properties/l/left/ for docs.
     */
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `bottom` style property.
     *
     * See https://css-tricks.com/almanac/properties/b/bottom/ for docs.
     */
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `right` style property.
     *
     * See https://css-tricks.com/almanac/properties/r/right/ for docs.
     */
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `height` style property.
     *
     * See https://css-tricks.com/almanac/properties/h/height/ for docs.
     */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `width` style property.
     *
     * See https://css-tricks.com/almanac/properties/w/width/ for docs.
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `min-width` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/min-width/ for docs.
     */
    minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `min-height` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/min-height/ for docs.
     */
    minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `max-width` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/max-width/ for docs.
     */
    maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `max-height` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/max-height/ for docs.
     */
    maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `margin` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/margin/ for docs.
     */
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `margin-right` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/margin-right/ for docs.
     */
    marginRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `margin-left` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/margin-left/ for docs.
     */
    marginLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `margin-top` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/margin-top/ for docs.
     */
    marginTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `margin-bottom` style property.
     *
     * See https://css-tricks.com/almanac/properties/m/margin-bottom/ for docs.
     */
    marginBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `padding` style property.
     *
     * See https://css-tricks.com/almanac/properties/p/padding/ for docs.
     */
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `padding-right` style property.
     *
     * See https://css-tricks.com/almanac/properties/p/padding-right/ for docs.
     */
    paddingRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `padding-left` style property.
     *
     * See https://css-tricks.com/almanac/properties/p/padding-left/ for docs.
     */
    paddingLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `padding-top` style property.
     *
     * See https://css-tricks.com/almanac/properties/p/padding-top/ for docs.
     */
    paddingTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Sets `padding-bottom` style property.
     *
     * See https://css-tricks.com/almanac/properties/p/padding-bottom/ for docs.
     */
    paddingBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Extra CSS style properties.
     */
    style: PropTypes.object,

    /**
     * Styleable variant.
     */
    variant: PropTypes.object,

    /**
     * Component to render.
     */
    Component: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };

  static defaultProps = {
    Component: 'div'
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
      Component,
      top, left, bottom, right,
      height, width,
      minWidth, minHeight,
      maxWidth, maxHeight,
      margin, marginRight, marginLeft, marginTop, marginBottom,
      padding, paddingRight, paddingLeft, paddingTop, paddingBottom,
      ...props
    } = this.props;
    style = {
      alignContent,
      alignItems,
      alignSelf,
      flex,
      flexBasis,
      flexDirection,
      flexFlow,
      flexGrow,
      flexShrink,
      flexWrap,
      justifyContent,
      order,
      overflow,
      top, left, bottom, right,
      height, width,
      minWidth, minHeight,
      maxWidth, maxHeight,
      margin, marginRight, marginLeft, marginTop, marginBottom,
      padding, paddingRight, paddingLeft, paddingTop, paddingBottom,
      ...style,
    };
    let className = this.constructor.stylesheet.asClassName(variant);
    return <Component style={style} className={className} {...props} />;
  }

  componentDidMount() {
    this.constructor.stylesheet.use();
  }

  componentWillUnmount() {
    this.constructor.stylesheet.dispose();
  }

  static style(stylesheet, displayName = this.displayName) {
    return class extends Box {
      static displayName = displayName;
      static stylesheet = this.stylesheet.override(stylesheet);
    };
  }
}
