/**
 * @copyright 2015 Prometheus Research, LLC
 */

import 'normalize.css';
import './index.css';

import React            from 'react';
import {stylesheet}     from '@prometheusresearch/react-stylesheet';
import * as Box         from '../src';

let colors = {
  brand0: 'rgb(1, 60, 154)',
  brand1: 'rgba(1, 60, 154, 0.18)',

  base0: 'rgb(248, 248, 248)',
  base1: 'rgb(255, 255, 255)',

};

let options = []
for (let i = 5; i < 100; i++) {
  options.push({id: i, title: `Ok ${i}`});
}

let styled = stylesheet({

  default: {
    boxSizing: 'border-box',
    position: 'relative',
  },

  root: {
    height: '100%',
    backgroundColor: colors.base0,
    overflow: 'hidden',
  },

  pane: {
    width: 600,
    margin: '0 auto',
    padding: '10px 0px',
  },

  content: {
    height: 'calc(100% - 80px)',
    overflow: 'auto',
  },

  header: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: '24pt',
    Component: 'h1',
    fontWeight: 'bold',
    color: colors.brand0,
  },

  footer: {
    position: 'relative',
    boxShadow: '0px 3px 10px rgba(58, 58, 58, 0.39)',
    height: 80,
    backgroundColor: colors.base1,
  },

  footerLine: {
    Component: 'span',
    marginRight: 2,
    fontSize: '80%',
    color: '#999',
    position: 'relative',
    top: 7,
  },

  demo: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottom: '1px solid #ccc',
    lastChild: {
      borderBottom: 'none',
    }
  },

  logo: {
    Component: 'img',
    verticalAlign: 'middle',
  },

  code: {
    Component: 'code',
    borderRadius: 0,
    border: 'none',
    fontSize: '85%',
    padding: '0 5px',
    color: '#888',
  },

  pre: {
    Component: 'pre',
    borderRadius: 0,
    backgroundColor: '#fefefe',
    border: 'none',
    borderBottom: `1px solid ${colors.brand1}`,
    borderTop: `1px solid ${colors.brand1}`,
    fontSize: '80%',
    color: '#888',
    padding: 10,
    marginBottom: 10
  }
}, 'Example');

let VBox = Box.VBox.style({
  border: '1px solid #e1e1e1',
  backgroundColor: '#f1f1f1'
});

let HBox = Box.HBox.style({
  border: '1px solid #e1e1e1',
  backgroundColor: '#f1f1f1'
});

export default class Example extends React.Component {

	render() {
		return (
      <styled.root>
        <styled.content>
          <styled.pane>

            <styled.header>React Box</styled.header>

            <styled.demo>
              <p>
                Using <styled.code>&lt;HBox /&gt;</styled.code> component:
              </p>
              <HBox>
                <VBox flex={1}>&nbsp;</VBox>
                <VBox flex={1}>&nbsp;</VBox>
                <VBox flex={1}>&nbsp;</VBox>
              </HBox>
            </styled.demo>

            <styled.demo>
              <p>
                Using <styled.code>&lt;VBox /&gt;</styled.code> component:
              </p>
              <VBox>
                <VBox>&nbsp;</VBox>
                <VBox>&nbsp;</VBox>
                <VBox>&nbsp;</VBox>
              </VBox>
            </styled.demo>

            <styled.demo>
              <p>
                Control sizes with <styled.code>{`<VBox flex={2} />`}</styled.code>:
              </p>
              <VBox>
                <VBox flex={3}>&nbsp;</VBox>
                <VBox flex={1}>&nbsp;</VBox>
                <VBox flex={1}>&nbsp;</VBox>
              </VBox>
            </styled.demo>

          </styled.pane>
        </styled.content>
        <styled.footer>
          <styled.pane>
            <styled.footerLine>
              Open Source project by
            </styled.footerLine>
            <a href="http://prometheusresearch.com">
              <styled.logo height={50} src={require('./logo.png')} />
            </a>
          </styled.pane>
        </styled.footer>
      </styled.root>
    );
  }
}
