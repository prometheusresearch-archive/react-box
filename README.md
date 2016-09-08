React Box
=========

React Box provides flexbox based layout primitives for React.

Installation
------------

Use `npm`:

    % npm install @prometheusresearch/react-box

Usage
-----

Two components are provided:

    import {VBox, HBox} from '@prometheusresearch/react-box'

Flexbox:

    <VBox grow={2} shrink={2} justifyContent="center" />

Size:

    <VBox width={100} height={200} />

Position:

    <VBox top={1} left={2} />

Margins/paddings:

    <VBox padding={10} margin={20} />

Credits
-------

React Box is free software created by [Prometheus Research][] and is released
under the MIT license.

[Prometheus Research]: http://prometheusresearch.com
