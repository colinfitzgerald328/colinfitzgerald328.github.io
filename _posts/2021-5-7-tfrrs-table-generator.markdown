---
layout: blank
title:  "Analyzing the Difference Between 2012 - 2021 Collegiate Outdoor 1500m Data"
date:   2021-04-26 05:04:00 -0800
excerpt: "Analyzing the Difference Between 2012 - 2021 Collegiate Outdoor 1500m Data."
categories: 
  - tutorial
  - pinned

toc: true
--- 

<html>
<head><meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="chrome=1" />

<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />


<title>Cleaned and Robust 1500m Data Generator slides</title><script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"></script>

<!-- General and theme style sheets -->
<link rel="stylesheet" href="https://unpkg.com/reveal.js@4.0.2/dist/reveal.css">
<link rel="stylesheet" href="https://unpkg.com/reveal.js@4.0.2/dist/theme/simple.css" id="theme">

<!-- If the query includes 'print-pdf', include the PDF print sheet -->
<script>
if( window.location.search.match( /print-pdf/gi ) ) {
        var link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.type = 'text/css';
        document.getElementsByTagName( 'head' )[0].appendChild( link );
}
</script>

<!-- Loading the mathjax macro -->
<!-- Load mathjax -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-MML-AM_CHTML-full,Safe"> </script>
    <!-- MathJax configuration -->
    <script type="text/x-mathjax-config">
    init_mathjax = function() {
        if (window.MathJax) {
        // MathJax loaded
            MathJax.Hub.Config({
                TeX: {
                    equationNumbers: {
                    autoNumber: "AMS",
                    useLabelIds: true
                    }
                },
                tex2jax: {
                    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                    displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
                    processEscapes: true,
                    processEnvironments: true
                },
                displayAlign: 'center',
                CommonHTML: {
                    linebreaks: { 
                    automatic: true 
                    }
                },
                "HTML-CSS": {
                    linebreaks: { 
                    automatic: true 
                    }
                }
            });
        
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        }
    }
    init_mathjax();
    </script>
    <!-- End of mathjax configuration -->

<style type="text/css">
    pre { line-height: 125%; }
td.linenos .normal { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
span.linenos { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
td.linenos .special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
span.linenos.special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
.highlight .hll { background-color: var(--jp-cell-editor-active-background) }
.highlight { background: var(--jp-cell-editor-background); color: var(--jp-mirror-editor-variable-color) }
.highlight .c { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment */
.highlight .err { color: var(--jp-mirror-editor-error-color) } /* Error */
.highlight .k { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword */
.highlight .o { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator */
.highlight .p { color: var(--jp-mirror-editor-punctuation-color) } /* Punctuation */
.highlight .ch { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Hashbang */
.highlight .cm { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Multiline */
.highlight .cp { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Preproc */
.highlight .cpf { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.PreprocFile */
.highlight .c1 { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Single */
.highlight .cs { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Special */
.highlight .kc { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Constant */
.highlight .kd { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Declaration */
.highlight .kn { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Namespace */
.highlight .kp { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Pseudo */
.highlight .kr { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Type */
.highlight .m { color: var(--jp-mirror-editor-number-color) } /* Literal.Number */
.highlight .s { color: var(--jp-mirror-editor-string-color) } /* Literal.String */
.highlight .ow { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator.Word */
.highlight .w { color: var(--jp-mirror-editor-variable-color) } /* Text.Whitespace */
.highlight .mb { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Bin */
.highlight .mf { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Float */
.highlight .mh { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Hex */
.highlight .mi { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer */
.highlight .mo { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Oct */
.highlight .sa { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Affix */
.highlight .sb { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Backtick */
.highlight .sc { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Char */
.highlight .dl { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Delimiter */
.highlight .sd { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Doc */
.highlight .s2 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Double */
.highlight .se { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Escape */
.highlight .sh { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Heredoc */
.highlight .si { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Interpol */
.highlight .sx { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Other */
.highlight .sr { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Regex */
.highlight .s1 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Single */
.highlight .ss { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Symbol */
.highlight .il { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer.Long */
  </style>
<style type="text/css">
    /*This file contains any manual css for this page that needs to override the global styles.
This is only required when different pages style the same element differently. This is just
a hack to deal with our current css styles and no new styling should be added in this file.*/

#ipython-main-app {
    position: relative;
}
#jupyter-main-app {
    position: relative;
}

  </style>



<style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*
 * Mozilla scrollbar styling
 */

/* use standard opaque scrollbars for most nodes */
[data-jp-theme-scrollbars='true'] {
  scrollbar-color: rgb(var(--jp-scrollbar-thumb-color))
    var(--jp-scrollbar-background-color);
}

/* for code nodes, use a transparent style of scrollbar. These selectors
 * will match lower in the tree, and so will override the above */
[data-jp-theme-scrollbars='true'] .CodeMirror-hscrollbar,
[data-jp-theme-scrollbars='true'] .CodeMirror-vscrollbar {
  scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
}

/*
 * Webkit scrollbar styling
 */

/* use standard opaque scrollbars for most nodes */

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar,
[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-corner {
  background: var(--jp-scrollbar-background-color);
}

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-thumb {
  background: rgb(var(--jp-scrollbar-thumb-color));
  border: var(--jp-scrollbar-thumb-margin) solid transparent;
  background-clip: content-box;
  border-radius: var(--jp-scrollbar-thumb-radius);
}

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-track:horizontal {
  border-left: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
  border-right: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
}

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-track:vertical {
  border-top: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
  border-bottom: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
}

/* for code nodes, use a transparent style of scrollbar */

[data-jp-theme-scrollbars='true'] .CodeMirror-hscrollbar::-webkit-scrollbar,
[data-jp-theme-scrollbars='true'] .CodeMirror-vscrollbar::-webkit-scrollbar,
[data-jp-theme-scrollbars='true']
  .CodeMirror-hscrollbar::-webkit-scrollbar-corner,
[data-jp-theme-scrollbars='true']
  .CodeMirror-vscrollbar::-webkit-scrollbar-corner {
  background-color: transparent;
}

[data-jp-theme-scrollbars='true']
  .CodeMirror-hscrollbar::-webkit-scrollbar-thumb,
[data-jp-theme-scrollbars='true']
  .CodeMirror-vscrollbar::-webkit-scrollbar-thumb {
  background: rgba(var(--jp-scrollbar-thumb-color), 0.5);
  border: var(--jp-scrollbar-thumb-margin) solid transparent;
  background-clip: content-box;
  border-radius: var(--jp-scrollbar-thumb-radius);
}

[data-jp-theme-scrollbars='true']
  .CodeMirror-hscrollbar::-webkit-scrollbar-track:horizontal {
  border-left: var(--jp-scrollbar-endpad) solid transparent;
  border-right: var(--jp-scrollbar-endpad) solid transparent;
}

[data-jp-theme-scrollbars='true']
  .CodeMirror-vscrollbar::-webkit-scrollbar-track:vertical {
  border-top: var(--jp-scrollbar-endpad) solid transparent;
  border-bottom: var(--jp-scrollbar-endpad) solid transparent;
}

/*
 * Phosphor
 */

.lm-ScrollBar[data-orientation='horizontal'] {
  min-height: 16px;
  max-height: 16px;
  min-width: 45px;
  border-top: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] {
  min-width: 16px;
  max-width: 16px;
  min-height: 45px;
  border-left: 1px solid #a0a0a0;
}

.lm-ScrollBar-button {
  background-color: #f0f0f0;
  background-position: center center;
  min-height: 15px;
  max-height: 15px;
  min-width: 15px;
  max-width: 15px;
}

.lm-ScrollBar-button:hover {
  background-color: #dadada;
}

.lm-ScrollBar-button.lm-mod-active {
  background-color: #cdcdcd;
}

.lm-ScrollBar-track {
  background: #f0f0f0;
}

.lm-ScrollBar-thumb {
  background: #cdcdcd;
}

.lm-ScrollBar-thumb:hover {
  background: #bababa;
}

.lm-ScrollBar-thumb.lm-mod-active {
  background: #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal'] .lm-ScrollBar-thumb {
  height: 100%;
  min-width: 15px;
  border-left: 1px solid #a0a0a0;
  border-right: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] .lm-ScrollBar-thumb {
  width: 100%;
  min-height: 15px;
  border-top: 1px solid #a0a0a0;
  border-bottom: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal']
  .lm-ScrollBar-button[data-action='decrement'] {
  background-image: var(--jp-icon-caret-left);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='horizontal']
  .lm-ScrollBar-button[data-action='increment'] {
  background-image: var(--jp-icon-caret-right);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
  .lm-ScrollBar-button[data-action='decrement'] {
  background-image: var(--jp-icon-caret-up);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
  .lm-ScrollBar-button[data-action='increment'] {
  background-image: var(--jp-icon-caret-down);
  background-size: 17px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-Widget, /* </DEPRECATED> */
.lm-Widget {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: default;
}


/* <DEPRECATED> */ .p-Widget.p-mod-hidden, /* </DEPRECATED> */
.lm-Widget.lm-mod-hidden {
  display: none !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-CommandPalette, /* </DEPRECATED> */
.lm-CommandPalette {
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-CommandPalette-search, /* </DEPRECATED> */
.lm-CommandPalette-search {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-CommandPalette-content, /* </DEPRECATED> */
.lm-CommandPalette-content {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  min-height: 0;
  overflow: auto;
  list-style-type: none;
}


/* <DEPRECATED> */ .p-CommandPalette-header, /* </DEPRECATED> */
.lm-CommandPalette-header {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


/* <DEPRECATED> */ .p-CommandPalette-item, /* </DEPRECATED> */
.lm-CommandPalette-item {
  display: flex;
  flex-direction: row;
}


/* <DEPRECATED> */ .p-CommandPalette-itemIcon, /* </DEPRECATED> */
.lm-CommandPalette-itemIcon {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-CommandPalette-itemContent, /* </DEPRECATED> */
.lm-CommandPalette-itemContent {
  flex: 1 1 auto;
  overflow: hidden;
}


/* <DEPRECATED> */ .p-CommandPalette-itemShortcut, /* </DEPRECATED> */
.lm-CommandPalette-itemShortcut {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-CommandPalette-itemLabel, /* </DEPRECATED> */
.lm-CommandPalette-itemLabel {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-DockPanel, /* </DEPRECATED> */
.lm-DockPanel {
  z-index: 0;
}


/* <DEPRECATED> */ .p-DockPanel-widget, /* </DEPRECATED> */
.lm-DockPanel-widget {
  z-index: 0;
}


/* <DEPRECATED> */ .p-DockPanel-tabBar, /* </DEPRECATED> */
.lm-DockPanel-tabBar {
  z-index: 1;
}


/* <DEPRECATED> */ .p-DockPanel-handle, /* </DEPRECATED> */
.lm-DockPanel-handle {
  z-index: 2;
}


/* <DEPRECATED> */ .p-DockPanel-handle.p-mod-hidden, /* </DEPRECATED> */
.lm-DockPanel-handle.lm-mod-hidden {
  display: none !important;
}


/* <DEPRECATED> */ .p-DockPanel-handle:after, /* </DEPRECATED> */
.lm-DockPanel-handle:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='horizontal'],
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='horizontal'] {
  cursor: ew-resize;
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='vertical'],
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='vertical'] {
  cursor: ns-resize;
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='horizontal']:after,
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='horizontal']:after {
  left: 50%;
  min-width: 8px;
  transform: translateX(-50%);
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='vertical']:after,
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='vertical']:after {
  top: 50%;
  min-height: 8px;
  transform: translateY(-50%);
}


/* <DEPRECATED> */ .p-DockPanel-overlay, /* </DEPRECATED> */
.lm-DockPanel-overlay {
  z-index: 3;
  box-sizing: border-box;
  pointer-events: none;
}


/* <DEPRECATED> */ .p-DockPanel-overlay.p-mod-hidden, /* </DEPRECATED> */
.lm-DockPanel-overlay.lm-mod-hidden {
  display: none !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-Menu, /* </DEPRECATED> */
.lm-Menu {
  z-index: 10000;
  position: absolute;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: auto;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-Menu-content, /* </DEPRECATED> */
.lm-Menu-content {
  margin: 0;
  padding: 0;
  display: table;
  list-style-type: none;
}


/* <DEPRECATED> */ .p-Menu-item, /* </DEPRECATED> */
.lm-Menu-item {
  display: table-row;
}


/* <DEPRECATED> */
.p-Menu-item.p-mod-hidden,
.p-Menu-item.p-mod-collapsed,
/* </DEPRECATED> */
.lm-Menu-item.lm-mod-hidden,
.lm-Menu-item.lm-mod-collapsed {
  display: none !important;
}


/* <DEPRECATED> */
.p-Menu-itemIcon,
.p-Menu-itemSubmenuIcon,
/* </DEPRECATED> */
.lm-Menu-itemIcon,
.lm-Menu-itemSubmenuIcon {
  display: table-cell;
  text-align: center;
}


/* <DEPRECATED> */ .p-Menu-itemLabel, /* </DEPRECATED> */
.lm-Menu-itemLabel {
  display: table-cell;
  text-align: left;
}


/* <DEPRECATED> */ .p-Menu-itemShortcut, /* </DEPRECATED> */
.lm-Menu-itemShortcut {
  display: table-cell;
  text-align: right;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-MenuBar, /* </DEPRECATED> */
.lm-MenuBar {
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-MenuBar-content, /* </DEPRECATED> */
.lm-MenuBar-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
}


/* <DEPRECATED> */ .p--MenuBar-item, /* </DEPRECATED> */
.lm-MenuBar-item {
  box-sizing: border-box;
}


/* <DEPRECATED> */
.p-MenuBar-itemIcon,
.p-MenuBar-itemLabel,
/* </DEPRECATED> */
.lm-MenuBar-itemIcon,
.lm-MenuBar-itemLabel {
  display: inline-block;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-ScrollBar, /* </DEPRECATED> */
.lm-ScrollBar {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */
.p-ScrollBar[data-orientation='horizontal'],
/* </DEPRECATED> */
.lm-ScrollBar[data-orientation='horizontal'] {
  flex-direction: row;
}


/* <DEPRECATED> */
.p-ScrollBar[data-orientation='vertical'],
/* </DEPRECATED> */
.lm-ScrollBar[data-orientation='vertical'] {
  flex-direction: column;
}


/* <DEPRECATED> */ .p-ScrollBar-button, /* </DEPRECATED> */
.lm-ScrollBar-button {
  box-sizing: border-box;
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-ScrollBar-track, /* </DEPRECATED> */
.lm-ScrollBar-track {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  flex: 1 1 auto;
}


/* <DEPRECATED> */ .p-ScrollBar-thumb, /* </DEPRECATED> */
.lm-ScrollBar-thumb {
  box-sizing: border-box;
  position: absolute;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-SplitPanel-child, /* </DEPRECATED> */
.lm-SplitPanel-child {
  z-index: 0;
}


/* <DEPRECATED> */ .p-SplitPanel-handle, /* </DEPRECATED> */
.lm-SplitPanel-handle {
  z-index: 1;
}


/* <DEPRECATED> */ .p-SplitPanel-handle.p-mod-hidden, /* </DEPRECATED> */
.lm-SplitPanel-handle.lm-mod-hidden {
  display: none !important;
}


/* <DEPRECATED> */ .p-SplitPanel-handle:after, /* </DEPRECATED> */
.lm-SplitPanel-handle:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='horizontal'] > .p-SplitPanel-handle,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle {
  cursor: ew-resize;
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='vertical'] > .p-SplitPanel-handle,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle {
  cursor: ns-resize;
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='horizontal'] > .p-SplitPanel-handle:after,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle:after {
  left: 50%;
  min-width: 8px;
  transform: translateX(-50%);
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='vertical'] > .p-SplitPanel-handle:after,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle:after {
  top: 50%;
  min-height: 8px;
  transform: translateY(-50%);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-TabBar, /* </DEPRECATED> */
.lm-TabBar {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-TabBar[data-orientation='horizontal'], /* </DEPRECATED> */
.lm-TabBar[data-orientation='horizontal'] {
  flex-direction: row;
}


/* <DEPRECATED> */ .p-TabBar[data-orientation='vertical'], /* </DEPRECATED> */
.lm-TabBar[data-orientation='vertical'] {
  flex-direction: column;
}


/* <DEPRECATED> */ .p-TabBar-content, /* </DEPRECATED> */
.lm-TabBar-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1 1 auto;
  list-style-type: none;
}


/* <DEPRECATED> */
.p-TabBar[data-orientation='horizontal'] > .p-TabBar-content,
/* </DEPRECATED> */
.lm-TabBar[data-orientation='horizontal'] > .lm-TabBar-content {
  flex-direction: row;
}


/* <DEPRECATED> */
.p-TabBar[data-orientation='vertical'] > .p-TabBar-content,
/* </DEPRECATED> */
.lm-TabBar[data-orientation='vertical'] > .lm-TabBar-content {
  flex-direction: column;
}


/* <DEPRECATED> */ .p-TabBar-tab, /* </DEPRECATED> */
.lm-TabBar-tab {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  overflow: hidden;
}


/* <DEPRECATED> */
.p-TabBar-tabIcon,
.p-TabBar-tabCloseIcon,
/* </DEPRECATED> */
.lm-TabBar-tabIcon,
.lm-TabBar-tabCloseIcon {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-TabBar-tabLabel, /* </DEPRECATED> */
.lm-TabBar-tabLabel {
  flex: 1 1 auto;
  overflow: hidden;
  white-space: nowrap;
}


/* <DEPRECATED> */ .p-TabBar-tab.p-mod-hidden, /* </DEPRECATED> */
.lm-TabBar-tab.lm-mod-hidden {
  display: none !important;
}


/* <DEPRECATED> */ .p-TabBar.p-mod-dragging .p-TabBar-tab, /* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging .lm-TabBar-tab {
  position: relative;
}


/* <DEPRECATED> */
.p-TabBar.p-mod-dragging[data-orientation='horizontal'] .p-TabBar-tab,
/* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging[data-orientation='horizontal'] .lm-TabBar-tab {
  left: 0;
  transition: left 150ms ease;
}


/* <DEPRECATED> */
.p-TabBar.p-mod-dragging[data-orientation='vertical'] .p-TabBar-tab,
/* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging[data-orientation='vertical'] .lm-TabBar-tab {
  top: 0;
  transition: top 150ms ease;
}


/* <DEPRECATED> */
.p-TabBar.p-mod-dragging .p-TabBar-tab.p-mod-dragging
/* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging .lm-TabBar-tab.lm-mod-dragging {
  transition: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-TabPanel-tabBar, /* </DEPRECATED> */
.lm-TabPanel-tabBar {
  z-index: 1;
}


/* <DEPRECATED> */ .p-TabPanel-stackedPanel, /* </DEPRECATED> */
.lm-TabPanel-stackedPanel {
  z-index: 0;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

@charset "UTF-8";
/*!

Copyright 2015-present Palantir Technologies, Inc. All rights reserved.
Licensed under the Apache License, Version 2.0.

*/
html{
  -webkit-box-sizing:border-box;
          box-sizing:border-box; }

*,
*::before,
*::after{
  -webkit-box-sizing:inherit;
          box-sizing:inherit; }

body{
  text-transform:none;
  line-height:1.28581;
  letter-spacing:0;
  font-size:14px;
  font-weight:400;
  color:#182026;
  font-family:-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif; }

p{
  margin-top:0;
  margin-bottom:10px; }

small{
  font-size:12px; }

strong{
  font-weight:600; }

::-moz-selection{
  background:rgba(125, 188, 255, 0.6); }

::selection{
  background:rgba(125, 188, 255, 0.6); }
.bp3-heading{
  color:#182026;
  font-weight:600;
  margin:0 0 10px;
  padding:0; }
  .bp3-dark .bp3-heading{
    color:#f5f8fa; }

h1.bp3-heading, .bp3-running-text h1{
  line-height:40px;
  font-size:36px; }

h2.bp3-heading, .bp3-running-text h2{
  line-height:32px;
  font-size:28px; }

h3.bp3-heading, .bp3-running-text h3{
  line-height:25px;
  font-size:22px; }

h4.bp3-heading, .bp3-running-text h4{
  line-height:21px;
  font-size:18px; }

h5.bp3-heading, .bp3-running-text h5{
  line-height:19px;
  font-size:16px; }

h6.bp3-heading, .bp3-running-text h6{
  line-height:16px;
  font-size:14px; }
.bp3-ui-text{
  text-transform:none;
  line-height:1.28581;
  letter-spacing:0;
  font-size:14px;
  font-weight:400; }

.bp3-monospace-text{
  text-transform:none;
  font-family:monospace; }

.bp3-text-muted{
  color:#5c7080; }
  .bp3-dark .bp3-text-muted{
    color:#a7b6c2; }

.bp3-text-disabled{
  color:rgba(92, 112, 128, 0.6); }
  .bp3-dark .bp3-text-disabled{
    color:rgba(167, 182, 194, 0.6); }

.bp3-text-overflow-ellipsis{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal; }
.bp3-running-text{
  line-height:1.5;
  font-size:14px; }
  .bp3-running-text h1{
    color:#182026;
    font-weight:600;
    margin-top:40px;
    margin-bottom:20px; }
    .bp3-dark .bp3-running-text h1{
      color:#f5f8fa; }
  .bp3-running-text h2{
    color:#182026;
    font-weight:600;
    margin-top:40px;
    margin-bottom:20px; }
    .bp3-dark .bp3-running-text h2{
      color:#f5f8fa; }
  .bp3-running-text h3{
    color:#182026;
    font-weight:600;
    margin-top:40px;
    margin-bottom:20px; }
    .bp3-dark .bp3-running-text h3{
      color:#f5f8fa; }
  .bp3-running-text h4{
    color:#182026;
    font-weight:600;
    margin-top:40px;
    margin-bottom:20px; }
    .bp3-dark .bp3-running-text h4{
      color:#f5f8fa; }
  .bp3-running-text h5{
    color:#182026;
    font-weight:600;
    margin-top:40px;
    margin-bottom:20px; }
    .bp3-dark .bp3-running-text h5{
      color:#f5f8fa; }
  .bp3-running-text h6{
    color:#182026;
    font-weight:600;
    margin-top:40px;
    margin-bottom:20px; }
    .bp3-dark .bp3-running-text h6{
      color:#f5f8fa; }
  .bp3-running-text hr{
    margin:20px 0;
    border:none;
    border-bottom:1px solid rgba(16, 22, 26, 0.15); }
    .bp3-dark .bp3-running-text hr{
      border-color:rgba(255, 255, 255, 0.15); }
  .bp3-running-text p{
    margin:0 0 10px;
    padding:0; }

.bp3-text-large{
  font-size:16px; }

.bp3-text-small{
  font-size:12px; }
a{
  text-decoration:none;
  color:#106ba3; }
  a:hover{
    cursor:pointer;
    text-decoration:underline;
    color:#106ba3; }
  a .bp3-icon, a .bp3-icon-standard, a .bp3-icon-large{
    color:inherit; }
  a code,
  .bp3-dark a code{
    color:inherit; }
  .bp3-dark a,
  .bp3-dark a:hover{
    color:#48aff0; }
    .bp3-dark a .bp3-icon, .bp3-dark a .bp3-icon-standard, .bp3-dark a .bp3-icon-large,
    .bp3-dark a:hover .bp3-icon,
    .bp3-dark a:hover .bp3-icon-standard,
    .bp3-dark a:hover .bp3-icon-large{
      color:inherit; }
.bp3-running-text code, .bp3-code{
  text-transform:none;
  font-family:monospace;
  border-radius:3px;
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2);
  background:rgba(255, 255, 255, 0.7);
  padding:2px 5px;
  color:#5c7080;
  font-size:smaller; }
  .bp3-dark .bp3-running-text code, .bp3-running-text .bp3-dark code, .bp3-dark .bp3-code{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
    background:rgba(16, 22, 26, 0.3);
    color:#a7b6c2; }
  .bp3-running-text a > code, a > .bp3-code{
    color:#137cbd; }
    .bp3-dark .bp3-running-text a > code, .bp3-running-text .bp3-dark a > code, .bp3-dark a > .bp3-code{
      color:inherit; }

.bp3-running-text pre, .bp3-code-block{
  text-transform:none;
  font-family:monospace;
  display:block;
  margin:10px 0;
  border-radius:3px;
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
  background:rgba(255, 255, 255, 0.7);
  padding:13px 15px 12px;
  line-height:1.4;
  color:#182026;
  font-size:13px;
  word-break:break-all;
  word-wrap:break-word; }
  .bp3-dark .bp3-running-text pre, .bp3-running-text .bp3-dark pre, .bp3-dark .bp3-code-block{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
    background:rgba(16, 22, 26, 0.3);
    color:#f5f8fa; }
  .bp3-running-text pre > code, .bp3-code-block > code{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:none;
    padding:0;
    color:inherit;
    font-size:inherit; }

.bp3-running-text kbd, .bp3-key{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
  background:#ffffff;
  min-width:24px;
  height:24px;
  padding:3px 6px;
  vertical-align:middle;
  line-height:24px;
  color:#5c7080;
  font-family:inherit;
  font-size:12px; }
  .bp3-running-text kbd .bp3-icon, .bp3-key .bp3-icon, .bp3-running-text kbd .bp3-icon-standard, .bp3-key .bp3-icon-standard, .bp3-running-text kbd .bp3-icon-large, .bp3-key .bp3-icon-large{
    margin-right:5px; }
  .bp3-dark .bp3-running-text kbd, .bp3-running-text .bp3-dark kbd, .bp3-dark .bp3-key{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
    background:#394b59;
    color:#a7b6c2; }
.bp3-running-text blockquote, .bp3-blockquote{
  margin:0 0 10px;
  border-left:solid 4px rgba(167, 182, 194, 0.5);
  padding:0 20px; }
  .bp3-dark .bp3-running-text blockquote, .bp3-running-text .bp3-dark blockquote, .bp3-dark .bp3-blockquote{
    border-color:rgba(115, 134, 148, 0.5); }
.bp3-running-text ul,
.bp3-running-text ol, .bp3-list{
  margin:10px 0;
  padding-left:30px; }
  .bp3-running-text ul li:not(:last-child), .bp3-running-text ol li:not(:last-child), .bp3-list li:not(:last-child){
    margin-bottom:5px; }
  .bp3-running-text ul ol, .bp3-running-text ol ol, .bp3-list ol,
  .bp3-running-text ul ul,
  .bp3-running-text ol ul,
  .bp3-list ul{
    margin-top:5px; }

.bp3-list-unstyled{
  margin:0;
  padding:0;
  list-style:none; }
  .bp3-list-unstyled li{
    padding:0; }
.bp3-rtl{
  text-align:right; }

.bp3-dark{
  color:#f5f8fa; }

:focus{
  outline:rgba(19, 124, 189, 0.6) auto 2px;
  outline-offset:2px;
  -moz-outline-radius:6px; }

.bp3-focus-disabled :focus{
  outline:none !important; }
  .bp3-focus-disabled :focus ~ .bp3-control-indicator{
    outline:none !important; }

.bp3-alert{
  max-width:400px;
  padding:20px; }

.bp3-alert-body{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex; }
  .bp3-alert-body .bp3-icon{
    margin-top:0;
    margin-right:20px;
    font-size:40px; }

.bp3-alert-footer{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:reverse;
      -ms-flex-direction:row-reverse;
          flex-direction:row-reverse;
  margin-top:10px; }
  .bp3-alert-footer .bp3-button{
    margin-left:10px; }
.bp3-breadcrumbs{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:wrap;
      flex-wrap:wrap;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  margin:0;
  cursor:default;
  height:30px;
  padding:0;
  list-style:none; }
  .bp3-breadcrumbs > li{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center; }
    .bp3-breadcrumbs > li::after{
      display:block;
      margin:0 5px;
      background:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.71 7.29l-4-4a1.003 1.003 0 0 0-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z' fill='%235C7080'/%3e%3c/svg%3e");
      width:16px;
      height:16px;
      content:""; }
    .bp3-breadcrumbs > li:last-of-type::after{
      display:none; }

.bp3-breadcrumb,
.bp3-breadcrumb-current,
.bp3-breadcrumbs-collapsed{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  font-size:16px; }

.bp3-breadcrumb,
.bp3-breadcrumbs-collapsed{
  color:#5c7080; }

.bp3-breadcrumb:hover{
  text-decoration:none; }

.bp3-breadcrumb.bp3-disabled{
  cursor:not-allowed;
  color:rgba(92, 112, 128, 0.6); }

.bp3-breadcrumb .bp3-icon{
  margin-right:5px; }

.bp3-breadcrumb-current{
  color:inherit;
  font-weight:600; }
  .bp3-breadcrumb-current .bp3-input{
    vertical-align:baseline;
    font-size:inherit;
    font-weight:inherit; }

.bp3-breadcrumbs-collapsed{
  margin-right:2px;
  border:none;
  border-radius:3px;
  background:#ced9e0;
  cursor:pointer;
  padding:1px 5px;
  vertical-align:text-bottom; }
  .bp3-breadcrumbs-collapsed::before{
    display:block;
    background:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cg fill='%235C7080'%3e%3ccircle cx='2' cy='8.03' r='2'/%3e%3ccircle cx='14' cy='8.03' r='2'/%3e%3ccircle cx='8' cy='8.03' r='2'/%3e%3c/g%3e%3c/svg%3e") center no-repeat;
    width:16px;
    height:16px;
    content:""; }
  .bp3-breadcrumbs-collapsed:hover{
    background:#bfccd6;
    text-decoration:none;
    color:#182026; }

.bp3-dark .bp3-breadcrumb,
.bp3-dark .bp3-breadcrumbs-collapsed{
  color:#a7b6c2; }

.bp3-dark .bp3-breadcrumbs > li::after{
  color:#a7b6c2; }

.bp3-dark .bp3-breadcrumb.bp3-disabled{
  color:rgba(167, 182, 194, 0.6); }

.bp3-dark .bp3-breadcrumb-current{
  color:#f5f8fa; }

.bp3-dark .bp3-breadcrumbs-collapsed{
  background:rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-breadcrumbs-collapsed:hover{
    background:rgba(16, 22, 26, 0.6);
    color:#f5f8fa; }
.bp3-button{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  border:none;
  border-radius:3px;
  cursor:pointer;
  padding:5px 10px;
  vertical-align:middle;
  text-align:left;
  font-size:14px;
  min-width:30px;
  min-height:30px; }
  .bp3-button > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-button > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-button::before,
  .bp3-button > *{
    margin-right:7px; }
  .bp3-button:empty::before,
  .bp3-button > :last-child{
    margin-right:0; }
  .bp3-button:empty{
    padding:0 !important; }
  .bp3-button:disabled, .bp3-button.bp3-disabled{
    cursor:not-allowed; }
  .bp3-button.bp3-fill{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    width:100%; }
  .bp3-button.bp3-align-right,
  .bp3-align-right .bp3-button{
    text-align:right; }
  .bp3-button.bp3-align-left,
  .bp3-align-left .bp3-button{
    text-align:left; }
  .bp3-button:not([class*="bp3-intent-"]){
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-color:#f5f8fa;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    color:#182026; }
    .bp3-button:not([class*="bp3-intent-"]):hover{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
      background-clip:padding-box;
      background-color:#ebf1f5; }
    .bp3-button:not([class*="bp3-intent-"]):active, .bp3-button:not([class*="bp3-intent-"]).bp3-active{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#d8e1e8;
      background-image:none; }
    .bp3-button:not([class*="bp3-intent-"]):disabled, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled{
      outline:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(206, 217, 224, 0.5);
      background-image:none;
      cursor:not-allowed;
      color:rgba(92, 112, 128, 0.6); }
      .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active, .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active:hover, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active:hover{
        background:rgba(206, 217, 224, 0.7); }
  .bp3-button.bp3-intent-primary{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#137cbd;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    color:#ffffff; }
    .bp3-button.bp3-intent-primary:hover, .bp3-button.bp3-intent-primary:active, .bp3-button.bp3-intent-primary.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-primary:hover{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
      background-color:#106ba3; }
    .bp3-button.bp3-intent-primary:active, .bp3-button.bp3-intent-primary.bp3-active{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#0e5a8a;
      background-image:none; }
    .bp3-button.bp3-intent-primary:disabled, .bp3-button.bp3-intent-primary.bp3-disabled{
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(19, 124, 189, 0.5);
      background-image:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button.bp3-intent-success{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#0f9960;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    color:#ffffff; }
    .bp3-button.bp3-intent-success:hover, .bp3-button.bp3-intent-success:active, .bp3-button.bp3-intent-success.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-success:hover{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
      background-color:#0d8050; }
    .bp3-button.bp3-intent-success:active, .bp3-button.bp3-intent-success.bp3-active{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#0a6640;
      background-image:none; }
    .bp3-button.bp3-intent-success:disabled, .bp3-button.bp3-intent-success.bp3-disabled{
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(15, 153, 96, 0.5);
      background-image:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button.bp3-intent-warning{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#d9822b;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    color:#ffffff; }
    .bp3-button.bp3-intent-warning:hover, .bp3-button.bp3-intent-warning:active, .bp3-button.bp3-intent-warning.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-warning:hover{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
      background-color:#bf7326; }
    .bp3-button.bp3-intent-warning:active, .bp3-button.bp3-intent-warning.bp3-active{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#a66321;
      background-image:none; }
    .bp3-button.bp3-intent-warning:disabled, .bp3-button.bp3-intent-warning.bp3-disabled{
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(217, 130, 43, 0.5);
      background-image:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button.bp3-intent-danger{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#db3737;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    color:#ffffff; }
    .bp3-button.bp3-intent-danger:hover, .bp3-button.bp3-intent-danger:active, .bp3-button.bp3-intent-danger.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-danger:hover{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
      background-color:#c23030; }
    .bp3-button.bp3-intent-danger:active, .bp3-button.bp3-intent-danger.bp3-active{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#a82a2a;
      background-image:none; }
    .bp3-button.bp3-intent-danger:disabled, .bp3-button.bp3-intent-danger.bp3-disabled{
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(219, 55, 55, 0.5);
      background-image:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button[class*="bp3-intent-"] .bp3-button-spinner .bp3-spinner-head{
    stroke:#ffffff; }
  .bp3-button.bp3-large,
  .bp3-large .bp3-button{
    min-width:40px;
    min-height:40px;
    padding:5px 15px;
    font-size:16px; }
    .bp3-button.bp3-large::before,
    .bp3-button.bp3-large > *,
    .bp3-large .bp3-button::before,
    .bp3-large .bp3-button > *{
      margin-right:10px; }
    .bp3-button.bp3-large:empty::before,
    .bp3-button.bp3-large > :last-child,
    .bp3-large .bp3-button:empty::before,
    .bp3-large .bp3-button > :last-child{
      margin-right:0; }
  .bp3-button.bp3-small,
  .bp3-small .bp3-button{
    min-width:24px;
    min-height:24px;
    padding:0 7px; }
  .bp3-button.bp3-loading{
    position:relative; }
    .bp3-button.bp3-loading[class*="bp3-icon-"]::before{
      visibility:hidden; }
    .bp3-button.bp3-loading .bp3-button-spinner{
      position:absolute;
      margin:0; }
    .bp3-button.bp3-loading > :not(.bp3-button-spinner){
      visibility:hidden; }
  .bp3-button[class*="bp3-icon-"]::before{
    line-height:1;
    font-family:"Icons16", sans-serif;
    font-size:16px;
    font-weight:400;
    font-style:normal;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    color:#5c7080; }
  .bp3-button .bp3-icon, .bp3-button .bp3-icon-standard, .bp3-button .bp3-icon-large{
    color:#5c7080; }
    .bp3-button .bp3-icon.bp3-align-right, .bp3-button .bp3-icon-standard.bp3-align-right, .bp3-button .bp3-icon-large.bp3-align-right{
      margin-left:7px; }
  .bp3-button .bp3-icon:first-child:last-child,
  .bp3-button .bp3-spinner + .bp3-icon:last-child{
    margin:0 -7px; }
  .bp3-dark .bp3-button:not([class*="bp3-intent-"]){
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    background-color:#394b59;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
    color:#f5f8fa; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):hover, .bp3-dark .bp3-button:not([class*="bp3-intent-"]):active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-active{
      color:#f5f8fa; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):hover{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
      background-color:#30404d; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-active{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#202b33;
      background-image:none; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):disabled, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(57, 75, 89, 0.5);
      background-image:none;
      color:rgba(167, 182, 194, 0.6); }
      .bp3-dark .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active{
        background:rgba(57, 75, 89, 0.7); }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-button-spinner .bp3-spinner-head{
      background:rgba(16, 22, 26, 0.5);
      stroke:#8a9ba8; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"])[class*="bp3-icon-"]::before{
      color:#a7b6c2; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon, .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-standard, .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-large{
      color:#a7b6c2; }
  .bp3-dark .bp3-button[class*="bp3-intent-"]{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-button[class*="bp3-intent-"]:hover{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-button[class*="bp3-intent-"]:active, .bp3-dark .bp3-button[class*="bp3-intent-"].bp3-active{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-dark .bp3-button[class*="bp3-intent-"]:disabled, .bp3-dark .bp3-button[class*="bp3-intent-"].bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none;
      background-image:none;
      color:rgba(255, 255, 255, 0.3); }
    .bp3-dark .bp3-button[class*="bp3-intent-"] .bp3-button-spinner .bp3-spinner-head{
      stroke:#8a9ba8; }
  .bp3-button:disabled::before,
  .bp3-button:disabled .bp3-icon, .bp3-button:disabled .bp3-icon-standard, .bp3-button:disabled .bp3-icon-large, .bp3-button.bp3-disabled::before,
  .bp3-button.bp3-disabled .bp3-icon, .bp3-button.bp3-disabled .bp3-icon-standard, .bp3-button.bp3-disabled .bp3-icon-large, .bp3-button[class*="bp3-intent-"]::before,
  .bp3-button[class*="bp3-intent-"] .bp3-icon, .bp3-button[class*="bp3-intent-"] .bp3-icon-standard, .bp3-button[class*="bp3-intent-"] .bp3-icon-large{
    color:inherit !important; }
  .bp3-button.bp3-minimal{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:none; }
    .bp3-button.bp3-minimal:hover{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(167, 182, 194, 0.3);
      text-decoration:none;
      color:#182026; }
    .bp3-button.bp3-minimal:active, .bp3-button.bp3-minimal.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(115, 134, 148, 0.3);
      color:#182026; }
    .bp3-button.bp3-minimal:disabled, .bp3-button.bp3-minimal:disabled:hover, .bp3-button.bp3-minimal.bp3-disabled, .bp3-button.bp3-minimal.bp3-disabled:hover{
      background:none;
      cursor:not-allowed;
      color:rgba(92, 112, 128, 0.6); }
      .bp3-button.bp3-minimal:disabled.bp3-active, .bp3-button.bp3-minimal:disabled:hover.bp3-active, .bp3-button.bp3-minimal.bp3-disabled.bp3-active, .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active{
        background:rgba(115, 134, 148, 0.3); }
    .bp3-dark .bp3-button.bp3-minimal{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none;
      color:inherit; }
      .bp3-dark .bp3-button.bp3-minimal:hover, .bp3-dark .bp3-button.bp3-minimal:active, .bp3-dark .bp3-button.bp3-minimal.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none; }
      .bp3-dark .bp3-button.bp3-minimal:hover{
        background:rgba(138, 155, 168, 0.15); }
      .bp3-dark .bp3-button.bp3-minimal:active, .bp3-dark .bp3-button.bp3-minimal.bp3-active{
        background:rgba(138, 155, 168, 0.3);
        color:#f5f8fa; }
      .bp3-dark .bp3-button.bp3-minimal:disabled, .bp3-dark .bp3-button.bp3-minimal:disabled:hover, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover{
        background:none;
        cursor:not-allowed;
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-button.bp3-minimal:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal:disabled:hover.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active{
          background:rgba(138, 155, 168, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-primary{
      color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:hover, .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.15);
        color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:disabled, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(16, 107, 163, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
        stroke:#106ba3; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary{
        color:#48aff0; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:hover{
          background:rgba(19, 124, 189, 0.2);
          color:#48aff0; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
          background:rgba(19, 124, 189, 0.3);
          color:#48aff0; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled{
          background:none;
          color:rgba(72, 175, 240, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active{
            background:rgba(19, 124, 189, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-success{
      color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:hover, .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.15);
        color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:disabled, .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(13, 128, 80, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
        stroke:#0d8050; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success{
        color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:hover{
          background:rgba(15, 153, 96, 0.2);
          color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
          background:rgba(15, 153, 96, 0.3);
          color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled{
          background:none;
          color:rgba(61, 204, 145, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active{
            background:rgba(15, 153, 96, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-warning{
      color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:hover, .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.15);
        color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:disabled, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(191, 115, 38, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
        stroke:#bf7326; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning{
        color:#ffb366; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:hover{
          background:rgba(217, 130, 43, 0.2);
          color:#ffb366; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
          background:rgba(217, 130, 43, 0.3);
          color:#ffb366; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled{
          background:none;
          color:rgba(255, 179, 102, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active{
            background:rgba(217, 130, 43, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-danger{
      color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:hover, .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.15);
        color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:disabled, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(194, 48, 48, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
        stroke:#c23030; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger{
        color:#ff7373; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:hover{
          background:rgba(219, 55, 55, 0.2);
          color:#ff7373; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
          background:rgba(219, 55, 55, 0.3);
          color:#ff7373; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled{
          background:none;
          color:rgba(255, 115, 115, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active{
            background:rgba(219, 55, 55, 0.3); }

a.bp3-button{
  text-align:center;
  text-decoration:none;
  -webkit-transition:none;
  transition:none; }
  a.bp3-button, a.bp3-button:hover, a.bp3-button:active{
    color:#182026; }
  a.bp3-button.bp3-disabled{
    color:rgba(92, 112, 128, 0.6); }

.bp3-button-text{
  -webkit-box-flex:0;
      -ms-flex:0 1 auto;
          flex:0 1 auto; }

.bp3-button.bp3-align-left .bp3-button-text, .bp3-button.bp3-align-right .bp3-button-text,
.bp3-button-group.bp3-align-left .bp3-button-text,
.bp3-button-group.bp3-align-right .bp3-button-text{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto; }
.bp3-button-group{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex; }
  .bp3-button-group .bp3-button{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    position:relative;
    z-index:4; }
    .bp3-button-group .bp3-button:focus{
      z-index:5; }
    .bp3-button-group .bp3-button:hover{
      z-index:6; }
    .bp3-button-group .bp3-button:active, .bp3-button-group .bp3-button.bp3-active{
      z-index:7; }
    .bp3-button-group .bp3-button:disabled, .bp3-button-group .bp3-button.bp3-disabled{
      z-index:3; }
    .bp3-button-group .bp3-button[class*="bp3-intent-"]{
      z-index:9; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:focus{
        z-index:10; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:hover{
        z-index:11; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:active, .bp3-button-group .bp3-button[class*="bp3-intent-"].bp3-active{
        z-index:12; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:disabled, .bp3-button-group .bp3-button[class*="bp3-intent-"].bp3-disabled{
        z-index:8; }
  .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:first-child) .bp3-button,
  .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:first-child){
    border-top-left-radius:0;
    border-bottom-left-radius:0; }
  .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
  .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child){
    margin-right:-1px;
    border-top-right-radius:0;
    border-bottom-right-radius:0; }
  .bp3-button-group.bp3-minimal .bp3-button{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:none; }
    .bp3-button-group.bp3-minimal .bp3-button:hover{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(167, 182, 194, 0.3);
      text-decoration:none;
      color:#182026; }
    .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(115, 134, 148, 0.3);
      color:#182026; }
    .bp3-button-group.bp3-minimal .bp3-button:disabled, .bp3-button-group.bp3-minimal .bp3-button:disabled:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover{
      background:none;
      cursor:not-allowed;
      color:rgba(92, 112, 128, 0.6); }
      .bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active{
        background:rgba(115, 134, 148, 0.3); }
    .bp3-dark .bp3-button-group.bp3-minimal .bp3-button{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none;
      color:inherit; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover{
        background:rgba(138, 155, 168, 0.15); }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
        background:rgba(138, 155, 168, 0.3);
        color:#f5f8fa; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover{
        background:none;
        cursor:not-allowed;
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active{
          background:rgba(138, 155, 168, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary{
      color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.15);
        color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(16, 107, 163, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
        stroke:#106ba3; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary{
        color:#48aff0; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover{
          background:rgba(19, 124, 189, 0.2);
          color:#48aff0; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
          background:rgba(19, 124, 189, 0.3);
          color:#48aff0; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled{
          background:none;
          color:rgba(72, 175, 240, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active{
            background:rgba(19, 124, 189, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success{
      color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.15);
        color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(13, 128, 80, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
        stroke:#0d8050; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success{
        color:#3dcc91; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover{
          background:rgba(15, 153, 96, 0.2);
          color:#3dcc91; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
          background:rgba(15, 153, 96, 0.3);
          color:#3dcc91; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled{
          background:none;
          color:rgba(61, 204, 145, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active{
            background:rgba(15, 153, 96, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning{
      color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.15);
        color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(191, 115, 38, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
        stroke:#bf7326; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning{
        color:#ffb366; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover{
          background:rgba(217, 130, 43, 0.2);
          color:#ffb366; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
          background:rgba(217, 130, 43, 0.3);
          color:#ffb366; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled{
          background:none;
          color:rgba(255, 179, 102, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active{
            background:rgba(217, 130, 43, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger{
      color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.15);
        color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(194, 48, 48, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
        stroke:#c23030; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger{
        color:#ff7373; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover{
          background:rgba(219, 55, 55, 0.2);
          color:#ff7373; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
          background:rgba(219, 55, 55, 0.3);
          color:#ff7373; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled{
          background:none;
          color:rgba(255, 115, 115, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active{
            background:rgba(219, 55, 55, 0.3); }
  .bp3-button-group .bp3-popover-wrapper,
  .bp3-button-group .bp3-popover-target{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-button-group.bp3-fill{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    width:100%; }
  .bp3-button-group .bp3-button.bp3-fill,
  .bp3-button-group.bp3-fill .bp3-button:not(.bp3-fixed){
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-button-group.bp3-vertical{
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
    -webkit-box-align:stretch;
        -ms-flex-align:stretch;
            align-items:stretch;
    vertical-align:top; }
    .bp3-button-group.bp3-vertical.bp3-fill{
      width:unset;
      height:100%; }
    .bp3-button-group.bp3-vertical .bp3-button{
      margin-right:0 !important;
      width:100%; }
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:first-child .bp3-button,
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:first-child{
      border-radius:3px 3px 0 0; }
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:last-child .bp3-button,
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:last-child{
      border-radius:0 0 3px 3px; }
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:not(:last-child){
      margin-bottom:-1px; }
  .bp3-button-group.bp3-align-left .bp3-button{
    text-align:left; }
  .bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
  .bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child){
    margin-right:1px; }
  .bp3-dark .bp3-button-group.bp3-vertical > .bp3-popover-wrapper:not(:last-child) .bp3-button,
  .bp3-dark .bp3-button-group.bp3-vertical > .bp3-button:not(:last-child){
    margin-bottom:1px; }
.bp3-callout{
  line-height:1.5;
  font-size:14px;
  position:relative;
  border-radius:3px;
  background-color:rgba(138, 155, 168, 0.15);
  width:100%;
  padding:10px 12px 9px; }
  .bp3-callout[class*="bp3-icon-"]{
    padding-left:40px; }
    .bp3-callout[class*="bp3-icon-"]::before{
      line-height:1;
      font-family:"Icons20", sans-serif;
      font-size:20px;
      font-weight:400;
      font-style:normal;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased;
      position:absolute;
      top:10px;
      left:10px;
      color:#5c7080; }
  .bp3-callout.bp3-callout-icon{
    padding-left:40px; }
    .bp3-callout.bp3-callout-icon > .bp3-icon:first-child{
      position:absolute;
      top:10px;
      left:10px;
      color:#5c7080; }
  .bp3-callout .bp3-heading{
    margin-top:0;
    margin-bottom:5px;
    line-height:20px; }
    .bp3-callout .bp3-heading:last-child{
      margin-bottom:0; }
  .bp3-dark .bp3-callout{
    background-color:rgba(138, 155, 168, 0.2); }
    .bp3-dark .bp3-callout[class*="bp3-icon-"]::before{
      color:#a7b6c2; }
  .bp3-callout.bp3-intent-primary{
    background-color:rgba(19, 124, 189, 0.15); }
    .bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-primary > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-primary .bp3-heading{
      color:#106ba3; }
    .bp3-dark .bp3-callout.bp3-intent-primary{
      background-color:rgba(19, 124, 189, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-primary > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-primary .bp3-heading{
        color:#48aff0; }
  .bp3-callout.bp3-intent-success{
    background-color:rgba(15, 153, 96, 0.15); }
    .bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-success > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-success .bp3-heading{
      color:#0d8050; }
    .bp3-dark .bp3-callout.bp3-intent-success{
      background-color:rgba(15, 153, 96, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-success > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-success .bp3-heading{
        color:#3dcc91; }
  .bp3-callout.bp3-intent-warning{
    background-color:rgba(217, 130, 43, 0.15); }
    .bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-warning > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-warning .bp3-heading{
      color:#bf7326; }
    .bp3-dark .bp3-callout.bp3-intent-warning{
      background-color:rgba(217, 130, 43, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-warning > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-warning .bp3-heading{
        color:#ffb366; }
  .bp3-callout.bp3-intent-danger{
    background-color:rgba(219, 55, 55, 0.15); }
    .bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-danger > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-danger .bp3-heading{
      color:#c23030; }
    .bp3-dark .bp3-callout.bp3-intent-danger{
      background-color:rgba(219, 55, 55, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-danger > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-danger .bp3-heading{
        color:#ff7373; }
  .bp3-running-text .bp3-callout{
    margin:20px 0; }
.bp3-card{
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
  background-color:#ffffff;
  padding:20px;
  -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-card.bp3-dark,
  .bp3-dark .bp3-card{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
    background-color:#30404d; }

.bp3-elevation-0{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }
  .bp3-elevation-0.bp3-dark,
  .bp3-dark .bp3-elevation-0{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }

.bp3-elevation-1{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-1.bp3-dark,
  .bp3-dark .bp3-elevation-1{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-elevation-2{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-2.bp3-dark,
  .bp3-dark .bp3-elevation-2{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4); }

.bp3-elevation-3{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-3.bp3-dark,
  .bp3-dark .bp3-elevation-3{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }

.bp3-elevation-4{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-4.bp3-dark,
  .bp3-dark .bp3-elevation-4{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4); }

.bp3-card.bp3-interactive:hover{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  cursor:pointer; }
  .bp3-card.bp3-interactive:hover.bp3-dark,
  .bp3-dark .bp3-card.bp3-interactive:hover{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }

.bp3-card.bp3-interactive:active{
  opacity:0.9;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
  -webkit-transition-duration:0;
          transition-duration:0; }
  .bp3-card.bp3-interactive:active.bp3-dark,
  .bp3-dark .bp3-card.bp3-interactive:active{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-collapse{
  height:0;
  overflow-y:hidden;
  -webkit-transition:height 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:height 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-collapse .bp3-collapse-body{
    -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-collapse .bp3-collapse-body[aria-hidden="true"]{
      display:none; }

.bp3-context-menu .bp3-popover-target{
  display:block; }

.bp3-context-menu-popover-target{
  position:fixed; }

.bp3-divider{
  margin:5px;
  border-right:1px solid rgba(16, 22, 26, 0.15);
  border-bottom:1px solid rgba(16, 22, 26, 0.15); }
  .bp3-dark .bp3-divider{
    border-color:rgba(16, 22, 26, 0.4); }
.bp3-dialog-container{
  opacity:1;
  -webkit-transform:scale(1);
          transform:scale(1);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  width:100%;
  min-height:100%;
  pointer-events:none;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-dialog-container.bp3-overlay-enter > .bp3-dialog, .bp3-dialog-container.bp3-overlay-appear > .bp3-dialog{
    opacity:0;
    -webkit-transform:scale(0.5);
            transform:scale(0.5); }
  .bp3-dialog-container.bp3-overlay-enter-active > .bp3-dialog, .bp3-dialog-container.bp3-overlay-appear-active > .bp3-dialog{
    opacity:1;
    -webkit-transform:scale(1);
            transform:scale(1);
    -webkit-transition-property:opacity, -webkit-transform;
    transition-property:opacity, -webkit-transform;
    transition-property:opacity, transform;
    transition-property:opacity, transform, -webkit-transform;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-dialog-container.bp3-overlay-exit > .bp3-dialog{
    opacity:1;
    -webkit-transform:scale(1);
            transform:scale(1); }
  .bp3-dialog-container.bp3-overlay-exit-active > .bp3-dialog{
    opacity:0;
    -webkit-transform:scale(0.5);
            transform:scale(0.5);
    -webkit-transition-property:opacity, -webkit-transform;
    transition-property:opacity, -webkit-transform;
    transition-property:opacity, transform;
    transition-property:opacity, transform, -webkit-transform;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
    -webkit-transition-delay:0;
            transition-delay:0; }

.bp3-dialog{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin:30px 0;
  border-radius:6px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  background:#ebf1f5;
  width:500px;
  padding-bottom:20px;
  pointer-events:all;
  -webkit-user-select:text;
     -moz-user-select:text;
      -ms-user-select:text;
          user-select:text; }
  .bp3-dialog:focus{
    outline:0; }
  .bp3-dialog.bp3-dark,
  .bp3-dark .bp3-dialog{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
    background:#293742;
    color:#f5f8fa; }

.bp3-dialog-header{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  border-radius:6px 6px 0 0;
  -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
          box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
  background:#ffffff;
  min-height:40px;
  padding-right:5px;
  padding-left:20px; }
  .bp3-dialog-header .bp3-icon-large,
  .bp3-dialog-header .bp3-icon{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    margin-right:10px;
    color:#5c7080; }
  .bp3-dialog-header .bp3-heading{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    margin:0;
    line-height:inherit; }
    .bp3-dialog-header .bp3-heading:last-child{
      margin-right:20px; }
  .bp3-dark .bp3-dialog-header{
    -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);
    background:#30404d; }
    .bp3-dark .bp3-dialog-header .bp3-icon-large,
    .bp3-dark .bp3-dialog-header .bp3-icon{
      color:#a7b6c2; }

.bp3-dialog-body{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  margin:20px;
  line-height:18px; }

.bp3-dialog-footer{
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  margin:0 20px; }

.bp3-dialog-footer-actions{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:end;
      -ms-flex-pack:end;
          justify-content:flex-end; }
  .bp3-dialog-footer-actions .bp3-button{
    margin-left:10px; }
.bp3-drawer{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin:0;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  background:#ffffff;
  padding:0; }
  .bp3-drawer:focus{
    outline:0; }
  .bp3-drawer.bp3-position-top{
    top:0;
    right:0;
    left:0;
    height:50%; }
    .bp3-drawer.bp3-position-top.bp3-overlay-enter, .bp3-drawer.bp3-position-top.bp3-overlay-appear{
      -webkit-transform:translateY(-100%);
              transform:translateY(-100%); }
    .bp3-drawer.bp3-position-top.bp3-overlay-enter-active, .bp3-drawer.bp3-position-top.bp3-overlay-appear-active{
      -webkit-transform:translateY(0);
              transform:translateY(0);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
    .bp3-drawer.bp3-position-top.bp3-overlay-exit{
      -webkit-transform:translateY(0);
              transform:translateY(0); }
    .bp3-drawer.bp3-position-top.bp3-overlay-exit-active{
      -webkit-transform:translateY(-100%);
              transform:translateY(-100%);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
  .bp3-drawer.bp3-position-bottom{
    right:0;
    bottom:0;
    left:0;
    height:50%; }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-enter, .bp3-drawer.bp3-position-bottom.bp3-overlay-appear{
      -webkit-transform:translateY(100%);
              transform:translateY(100%); }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-enter-active, .bp3-drawer.bp3-position-bottom.bp3-overlay-appear-active{
      -webkit-transform:translateY(0);
              transform:translateY(0);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-exit{
      -webkit-transform:translateY(0);
              transform:translateY(0); }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-exit-active{
      -webkit-transform:translateY(100%);
              transform:translateY(100%);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
  .bp3-drawer.bp3-position-left{
    top:0;
    bottom:0;
    left:0;
    width:50%; }
    .bp3-drawer.bp3-position-left.bp3-overlay-enter, .bp3-drawer.bp3-position-left.bp3-overlay-appear{
      -webkit-transform:translateX(-100%);
              transform:translateX(-100%); }
    .bp3-drawer.bp3-position-left.bp3-overlay-enter-active, .bp3-drawer.bp3-position-left.bp3-overlay-appear-active{
      -webkit-transform:translateX(0);
              transform:translateX(0);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
    .bp3-drawer.bp3-position-left.bp3-overlay-exit{
      -webkit-transform:translateX(0);
              transform:translateX(0); }
    .bp3-drawer.bp3-position-left.bp3-overlay-exit-active{
      -webkit-transform:translateX(-100%);
              transform:translateX(-100%);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
  .bp3-drawer.bp3-position-right{
    top:0;
    right:0;
    bottom:0;
    width:50%; }
    .bp3-drawer.bp3-position-right.bp3-overlay-enter, .bp3-drawer.bp3-position-right.bp3-overlay-appear{
      -webkit-transform:translateX(100%);
              transform:translateX(100%); }
    .bp3-drawer.bp3-position-right.bp3-overlay-enter-active, .bp3-drawer.bp3-position-right.bp3-overlay-appear-active{
      -webkit-transform:translateX(0);
              transform:translateX(0);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
    .bp3-drawer.bp3-position-right.bp3-overlay-exit{
      -webkit-transform:translateX(0);
              transform:translateX(0); }
    .bp3-drawer.bp3-position-right.bp3-overlay-exit-active{
      -webkit-transform:translateX(100%);
              transform:translateX(100%);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
  .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
  .bp3-position-right):not(.bp3-vertical){
    top:0;
    right:0;
    bottom:0;
    width:50%; }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-enter, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-appear{
      -webkit-transform:translateX(100%);
              transform:translateX(100%); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-enter-active, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-appear-active{
      -webkit-transform:translateX(0);
              transform:translateX(0);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-exit{
      -webkit-transform:translateX(0);
              transform:translateX(0); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-exit-active{
      -webkit-transform:translateX(100%);
              transform:translateX(100%);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
  .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
  .bp3-position-right).bp3-vertical{
    right:0;
    bottom:0;
    left:0;
    height:50%; }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-enter, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-appear{
      -webkit-transform:translateY(100%);
              transform:translateY(100%); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-enter-active, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-appear-active{
      -webkit-transform:translateY(0);
              transform:translateY(0);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-exit{
      -webkit-transform:translateY(0);
              transform:translateY(0); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-exit-active{
      -webkit-transform:translateY(100%);
              transform:translateY(100%);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
  .bp3-drawer.bp3-dark,
  .bp3-dark .bp3-drawer{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
    background:#30404d;
    color:#f5f8fa; }

.bp3-drawer-header{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  position:relative;
  border-radius:0;
  -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
          box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
  min-height:40px;
  padding:5px;
  padding-left:20px; }
  .bp3-drawer-header .bp3-icon-large,
  .bp3-drawer-header .bp3-icon{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    margin-right:10px;
    color:#5c7080; }
  .bp3-drawer-header .bp3-heading{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    margin:0;
    line-height:inherit; }
    .bp3-drawer-header .bp3-heading:last-child{
      margin-right:20px; }
  .bp3-dark .bp3-drawer-header{
    -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow:0 1px 0 rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-drawer-header .bp3-icon-large,
    .bp3-dark .bp3-drawer-header .bp3-icon{
      color:#a7b6c2; }

.bp3-drawer-body{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  overflow:auto;
  line-height:18px; }

.bp3-drawer-footer{
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  position:relative;
  -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
          box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
  padding:10px 20px; }
  .bp3-dark .bp3-drawer-footer{
    -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.4); }
.bp3-editable-text{
  display:inline-block;
  position:relative;
  cursor:text;
  max-width:100%;
  vertical-align:top;
  white-space:nowrap; }
  .bp3-editable-text::before{
    position:absolute;
    top:-3px;
    right:-3px;
    bottom:-3px;
    left:-3px;
    border-radius:3px;
    content:"";
    -webkit-transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-editable-text:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .bp3-editable-text.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
    background-color:#ffffff; }
  .bp3-editable-text.bp3-disabled::before{
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-editable-text.bp3-intent-primary .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-primary .bp3-editable-text-content{
    color:#137cbd; }
  .bp3-editable-text.bp3-intent-primary:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(19, 124, 189, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(19, 124, 189, 0.4); }
  .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-intent-success .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-success .bp3-editable-text-content{
    color:#0f9960; }
  .bp3-editable-text.bp3-intent-success:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px rgba(15, 153, 96, 0.4);
            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px rgba(15, 153, 96, 0.4); }
  .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-intent-warning .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-warning .bp3-editable-text-content{
    color:#d9822b; }
  .bp3-editable-text.bp3-intent-warning:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px rgba(217, 130, 43, 0.4);
            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px rgba(217, 130, 43, 0.4); }
  .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-intent-danger .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-danger .bp3-editable-text-content{
    color:#db3737; }
  .bp3-editable-text.bp3-intent-danger:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px rgba(219, 55, 55, 0.4);
            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px rgba(219, 55, 55, 0.4); }
  .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-editable-text:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.15);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.15); }
  .bp3-dark .bp3-editable-text.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    background-color:rgba(16, 22, 26, 0.3); }
  .bp3-dark .bp3-editable-text.bp3-disabled::before{
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-dark .bp3-editable-text.bp3-intent-primary .bp3-editable-text-content{
    color:#48aff0; }
  .bp3-dark .bp3-editable-text.bp3-intent-primary:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(72, 175, 240, 0), 0 0 0 0 rgba(72, 175, 240, 0), inset 0 0 0 1px rgba(72, 175, 240, 0.4);
            box-shadow:0 0 0 0 rgba(72, 175, 240, 0), 0 0 0 0 rgba(72, 175, 240, 0), inset 0 0 0 1px rgba(72, 175, 240, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #48aff0, 0 0 0 3px rgba(72, 175, 240, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #48aff0, 0 0 0 3px rgba(72, 175, 240, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-success .bp3-editable-text-content{
    color:#3dcc91; }
  .bp3-dark .bp3-editable-text.bp3-intent-success:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(61, 204, 145, 0), 0 0 0 0 rgba(61, 204, 145, 0), inset 0 0 0 1px rgba(61, 204, 145, 0.4);
            box-shadow:0 0 0 0 rgba(61, 204, 145, 0), 0 0 0 0 rgba(61, 204, 145, 0), inset 0 0 0 1px rgba(61, 204, 145, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #3dcc91, 0 0 0 3px rgba(61, 204, 145, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #3dcc91, 0 0 0 3px rgba(61, 204, 145, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-warning .bp3-editable-text-content{
    color:#ffb366; }
  .bp3-dark .bp3-editable-text.bp3-intent-warning:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(255, 179, 102, 0), 0 0 0 0 rgba(255, 179, 102, 0), inset 0 0 0 1px rgba(255, 179, 102, 0.4);
            box-shadow:0 0 0 0 rgba(255, 179, 102, 0), 0 0 0 0 rgba(255, 179, 102, 0), inset 0 0 0 1px rgba(255, 179, 102, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #ffb366, 0 0 0 3px rgba(255, 179, 102, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #ffb366, 0 0 0 3px rgba(255, 179, 102, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-danger .bp3-editable-text-content{
    color:#ff7373; }
  .bp3-dark .bp3-editable-text.bp3-intent-danger:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(255, 115, 115, 0), 0 0 0 0 rgba(255, 115, 115, 0), inset 0 0 0 1px rgba(255, 115, 115, 0.4);
            box-shadow:0 0 0 0 rgba(255, 115, 115, 0), 0 0 0 0 rgba(255, 115, 115, 0), inset 0 0 0 1px rgba(255, 115, 115, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #ff7373, 0 0 0 3px rgba(255, 115, 115, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #ff7373, 0 0 0 3px rgba(255, 115, 115, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-editable-text-input,
.bp3-editable-text-content{
  display:inherit;
  position:relative;
  min-width:inherit;
  max-width:inherit;
  vertical-align:top;
  text-transform:inherit;
  letter-spacing:inherit;
  color:inherit;
  font:inherit;
  resize:none; }

.bp3-editable-text-input{
  border:none;
  -webkit-box-shadow:none;
          box-shadow:none;
  background:none;
  width:100%;
  padding:0;
  white-space:pre-wrap; }
  .bp3-editable-text-input::-webkit-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-editable-text-input::-moz-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-editable-text-input:-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-editable-text-input::-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-editable-text-input::placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-editable-text-input:focus{
    outline:none; }
  .bp3-editable-text-input::-ms-clear{
    display:none; }

.bp3-editable-text-content{
  overflow:hidden;
  padding-right:2px;
  text-overflow:ellipsis;
  white-space:pre; }
  .bp3-editable-text-editing > .bp3-editable-text-content{
    position:absolute;
    left:0;
    visibility:hidden; }
  .bp3-editable-text-placeholder > .bp3-editable-text-content{
    color:rgba(92, 112, 128, 0.6); }
    .bp3-dark .bp3-editable-text-placeholder > .bp3-editable-text-content{
      color:rgba(167, 182, 194, 0.6); }

.bp3-editable-text.bp3-multiline{
  display:block; }
  .bp3-editable-text.bp3-multiline .bp3-editable-text-content{
    overflow:auto;
    white-space:pre-wrap;
    word-wrap:break-word; }
.bp3-control-group{
  -webkit-transform:translateZ(0);
          transform:translateZ(0);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:stretch;
      -ms-flex-align:stretch;
          align-items:stretch; }
  .bp3-control-group > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-control-group > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-control-group .bp3-button,
  .bp3-control-group .bp3-html-select,
  .bp3-control-group .bp3-input,
  .bp3-control-group .bp3-select{
    position:relative; }
  .bp3-control-group .bp3-input{
    z-index:2;
    border-radius:inherit; }
    .bp3-control-group .bp3-input:focus{
      z-index:14;
      border-radius:3px; }
    .bp3-control-group .bp3-input[class*="bp3-intent"]{
      z-index:13; }
      .bp3-control-group .bp3-input[class*="bp3-intent"]:focus{
        z-index:15; }
    .bp3-control-group .bp3-input[readonly], .bp3-control-group .bp3-input:disabled, .bp3-control-group .bp3-input.bp3-disabled{
      z-index:1; }
  .bp3-control-group .bp3-input-group[class*="bp3-intent"] .bp3-input{
    z-index:13; }
    .bp3-control-group .bp3-input-group[class*="bp3-intent"] .bp3-input:focus{
      z-index:15; }
  .bp3-control-group .bp3-button,
  .bp3-control-group .bp3-html-select select,
  .bp3-control-group .bp3-select select{
    -webkit-transform:translateZ(0);
            transform:translateZ(0);
    z-index:4;
    border-radius:inherit; }
    .bp3-control-group .bp3-button:focus,
    .bp3-control-group .bp3-html-select select:focus,
    .bp3-control-group .bp3-select select:focus{
      z-index:5; }
    .bp3-control-group .bp3-button:hover,
    .bp3-control-group .bp3-html-select select:hover,
    .bp3-control-group .bp3-select select:hover{
      z-index:6; }
    .bp3-control-group .bp3-button:active,
    .bp3-control-group .bp3-html-select select:active,
    .bp3-control-group .bp3-select select:active{
      z-index:7; }
    .bp3-control-group .bp3-button[readonly], .bp3-control-group .bp3-button:disabled, .bp3-control-group .bp3-button.bp3-disabled,
    .bp3-control-group .bp3-html-select select[readonly],
    .bp3-control-group .bp3-html-select select:disabled,
    .bp3-control-group .bp3-html-select select.bp3-disabled,
    .bp3-control-group .bp3-select select[readonly],
    .bp3-control-group .bp3-select select:disabled,
    .bp3-control-group .bp3-select select.bp3-disabled{
      z-index:3; }
    .bp3-control-group .bp3-button[class*="bp3-intent"],
    .bp3-control-group .bp3-html-select select[class*="bp3-intent"],
    .bp3-control-group .bp3-select select[class*="bp3-intent"]{
      z-index:9; }
      .bp3-control-group .bp3-button[class*="bp3-intent"]:focus,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:focus,
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:focus{
        z-index:10; }
      .bp3-control-group .bp3-button[class*="bp3-intent"]:hover,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:hover,
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:hover{
        z-index:11; }
      .bp3-control-group .bp3-button[class*="bp3-intent"]:active,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:active,
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:active{
        z-index:12; }
      .bp3-control-group .bp3-button[class*="bp3-intent"][readonly], .bp3-control-group .bp3-button[class*="bp3-intent"]:disabled, .bp3-control-group .bp3-button[class*="bp3-intent"].bp3-disabled,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"][readonly],
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:disabled,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"].bp3-disabled,
      .bp3-control-group .bp3-select select[class*="bp3-intent"][readonly],
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:disabled,
      .bp3-control-group .bp3-select select[class*="bp3-intent"].bp3-disabled{
        z-index:8; }
  .bp3-control-group .bp3-input-group > .bp3-icon,
  .bp3-control-group .bp3-input-group > .bp3-button,
  .bp3-control-group .bp3-input-group > .bp3-input-action{
    z-index:16; }
  .bp3-control-group .bp3-select::after,
  .bp3-control-group .bp3-html-select::after,
  .bp3-control-group .bp3-select > .bp3-icon,
  .bp3-control-group .bp3-html-select > .bp3-icon{
    z-index:17; }
  .bp3-control-group:not(.bp3-vertical) > *{
    margin-right:-1px; }
  .bp3-dark .bp3-control-group:not(.bp3-vertical) > *{
    margin-right:0; }
  .bp3-dark .bp3-control-group:not(.bp3-vertical) > .bp3-button + .bp3-button{
    margin-left:1px; }
  .bp3-control-group .bp3-popover-wrapper,
  .bp3-control-group .bp3-popover-target{
    border-radius:inherit; }
  .bp3-control-group > :first-child{
    border-radius:3px 0 0 3px; }
  .bp3-control-group > :last-child{
    margin-right:0;
    border-radius:0 3px 3px 0; }
  .bp3-control-group > :only-child{
    margin-right:0;
    border-radius:3px; }
  .bp3-control-group .bp3-input-group .bp3-button{
    border-radius:3px; }
  .bp3-control-group > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-control-group.bp3-fill > *:not(.bp3-fixed){
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-control-group.bp3-vertical{
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column; }
    .bp3-control-group.bp3-vertical > *{
      margin-top:-1px; }
    .bp3-control-group.bp3-vertical > :first-child{
      margin-top:0;
      border-radius:3px 3px 0 0; }
    .bp3-control-group.bp3-vertical > :last-child{
      border-radius:0 0 3px 3px; }
.bp3-control{
  display:block;
  position:relative;
  margin-bottom:10px;
  cursor:pointer;
  text-transform:none; }
  .bp3-control input:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#137cbd;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    color:#ffffff; }
  .bp3-control:hover input:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#106ba3; }
  .bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background:#0e5a8a; }
  .bp3-control input:disabled:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(19, 124, 189, 0.5); }
  .bp3-dark .bp3-control input:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control:hover input:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    background-color:#106ba3; }
  .bp3-dark .bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#0e5a8a; }
  .bp3-dark .bp3-control input:disabled:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(14, 90, 138, 0.5); }
  .bp3-control:not(.bp3-align-right){
    padding-left:26px; }
    .bp3-control:not(.bp3-align-right) .bp3-control-indicator{
      margin-left:-26px; }
  .bp3-control.bp3-align-right{
    padding-right:26px; }
    .bp3-control.bp3-align-right .bp3-control-indicator{
      margin-right:-26px; }
  .bp3-control.bp3-disabled{
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-control.bp3-inline{
    display:inline-block;
    margin-right:20px; }
  .bp3-control input{
    position:absolute;
    top:0;
    left:0;
    opacity:0;
    z-index:-1; }
  .bp3-control .bp3-control-indicator{
    display:inline-block;
    position:relative;
    margin-top:-3px;
    margin-right:10px;
    border:none;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-clip:padding-box;
    background-color:#f5f8fa;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    cursor:pointer;
    width:1em;
    height:1em;
    vertical-align:middle;
    font-size:16px;
    -webkit-user-select:none;
       -moz-user-select:none;
        -ms-user-select:none;
            user-select:none; }
    .bp3-control .bp3-control-indicator::before{
      display:block;
      width:1em;
      height:1em;
      content:""; }
  .bp3-control:hover .bp3-control-indicator{
    background-color:#ebf1f5; }
  .bp3-control input:not(:disabled):active ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background:#d8e1e8; }
  .bp3-control input:disabled ~ .bp3-control-indicator{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(206, 217, 224, 0.5);
    cursor:not-allowed; }
  .bp3-control input:focus ~ .bp3-control-indicator{
    outline:rgba(19, 124, 189, 0.6) auto 2px;
    outline-offset:2px;
    -moz-outline-radius:6px; }
  .bp3-control.bp3-align-right .bp3-control-indicator{
    float:right;
    margin-top:1px;
    margin-left:10px; }
  .bp3-control.bp3-large{
    font-size:16px; }
    .bp3-control.bp3-large:not(.bp3-align-right){
      padding-left:30px; }
      .bp3-control.bp3-large:not(.bp3-align-right) .bp3-control-indicator{
        margin-left:-30px; }
    .bp3-control.bp3-large.bp3-align-right{
      padding-right:30px; }
      .bp3-control.bp3-large.bp3-align-right .bp3-control-indicator{
        margin-right:-30px; }
    .bp3-control.bp3-large .bp3-control-indicator{
      font-size:20px; }
    .bp3-control.bp3-large.bp3-align-right .bp3-control-indicator{
      margin-top:0; }
  .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#137cbd;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    color:#ffffff; }
  .bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#106ba3; }
  .bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background:#0e5a8a; }
  .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(19, 124, 189, 0.5); }
  .bp3-dark .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    background-color:#106ba3; }
  .bp3-dark .bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#0e5a8a; }
  .bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(14, 90, 138, 0.5); }
  .bp3-control.bp3-checkbox .bp3-control-indicator{
    border-radius:3px; }
  .bp3-control.bp3-checkbox input:checked ~ .bp3-control-indicator::before{
    background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5z' fill='white'/%3e%3c/svg%3e"); }
  .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator::before{
    background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z' fill='white'/%3e%3c/svg%3e"); }
  .bp3-control.bp3-radio .bp3-control-indicator{
    border-radius:50%; }
  .bp3-control.bp3-radio input:checked ~ .bp3-control-indicator::before{
    background-image:radial-gradient(#ffffff, #ffffff 28%, transparent 32%); }
  .bp3-control.bp3-radio input:checked:disabled ~ .bp3-control-indicator::before{
    opacity:0.5; }
  .bp3-control.bp3-radio input:focus ~ .bp3-control-indicator{
    -moz-outline-radius:16px; }
  .bp3-control.bp3-switch input ~ .bp3-control-indicator{
    background:rgba(167, 182, 194, 0.5); }
  .bp3-control.bp3-switch:hover input ~ .bp3-control-indicator{
    background:rgba(115, 134, 148, 0.5); }
  .bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator{
    background:rgba(92, 112, 128, 0.5); }
  .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator{
    background:rgba(206, 217, 224, 0.5); }
    .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator::before{
      background:rgba(255, 255, 255, 0.8); }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator{
    background:#137cbd; }
  .bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator{
    background:#106ba3; }
  .bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator{
    background:#0e5a8a; }
  .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator{
    background:rgba(19, 124, 189, 0.5); }
    .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator::before{
      background:rgba(255, 255, 255, 0.8); }
  .bp3-control.bp3-switch:not(.bp3-align-right){
    padding-left:38px; }
    .bp3-control.bp3-switch:not(.bp3-align-right) .bp3-control-indicator{
      margin-left:-38px; }
  .bp3-control.bp3-switch.bp3-align-right{
    padding-right:38px; }
    .bp3-control.bp3-switch.bp3-align-right .bp3-control-indicator{
      margin-right:-38px; }
  .bp3-control.bp3-switch .bp3-control-indicator{
    border:none;
    border-radius:1.75em;
    -webkit-box-shadow:none !important;
            box-shadow:none !important;
    width:auto;
    min-width:1.75em;
    -webkit-transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-control.bp3-switch .bp3-control-indicator::before{
      position:absolute;
      left:0;
      margin:2px;
      border-radius:50%;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
      background:#ffffff;
      width:calc(1em - 4px);
      height:calc(1em - 4px);
      -webkit-transition:left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:left 100ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before{
    left:calc(100% - 1em); }
  .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right){
    padding-left:45px; }
    .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right) .bp3-control-indicator{
      margin-left:-45px; }
  .bp3-control.bp3-switch.bp3-large.bp3-align-right{
    padding-right:45px; }
    .bp3-control.bp3-switch.bp3-large.bp3-align-right .bp3-control-indicator{
      margin-right:-45px; }
  .bp3-dark .bp3-control.bp3-switch input ~ .bp3-control-indicator{
    background:rgba(16, 22, 26, 0.5); }
  .bp3-dark .bp3-control.bp3-switch:hover input ~ .bp3-control-indicator{
    background:rgba(16, 22, 26, 0.7); }
  .bp3-dark .bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator{
    background:rgba(16, 22, 26, 0.9); }
  .bp3-dark .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator{
    background:rgba(57, 75, 89, 0.5); }
    .bp3-dark .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator::before{
      background:rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator{
    background:#137cbd; }
  .bp3-dark .bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator{
    background:#106ba3; }
  .bp3-dark .bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator{
    background:#0e5a8a; }
  .bp3-dark .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator{
    background:rgba(14, 90, 138, 0.5); }
    .bp3-dark .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator::before{
      background:rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-switch .bp3-control-indicator::before{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    background:#394b59; }
  .bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-control.bp3-switch .bp3-switch-inner-text{
    text-align:center;
    font-size:0.7em; }
  .bp3-control.bp3-switch .bp3-control-indicator-child:first-child{
    visibility:hidden;
    margin-right:1.2em;
    margin-left:0.5em;
    line-height:0; }
  .bp3-control.bp3-switch .bp3-control-indicator-child:last-child{
    visibility:visible;
    margin-right:0.5em;
    margin-left:1.2em;
    line-height:1em; }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator .bp3-control-indicator-child:first-child{
    visibility:visible;
    line-height:1em; }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator .bp3-control-indicator-child:last-child{
    visibility:hidden;
    line-height:0; }
  .bp3-dark .bp3-control{
    color:#f5f8fa; }
    .bp3-dark .bp3-control.bp3-disabled{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-control .bp3-control-indicator{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
      background-color:#394b59;
      background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0)); }
    .bp3-dark .bp3-control:hover .bp3-control-indicator{
      background-color:#30404d; }
    .bp3-dark .bp3-control input:not(:disabled):active ~ .bp3-control-indicator{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background:#202b33; }
    .bp3-dark .bp3-control input:disabled ~ .bp3-control-indicator{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(57, 75, 89, 0.5);
      cursor:not-allowed; }
    .bp3-dark .bp3-control.bp3-checkbox input:disabled:checked ~ .bp3-control-indicator, .bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
      color:rgba(167, 182, 194, 0.6); }
.bp3-file-input{
  display:inline-block;
  position:relative;
  cursor:pointer;
  height:30px; }
  .bp3-file-input input{
    opacity:0;
    margin:0;
    min-width:200px; }
    .bp3-file-input input:disabled + .bp3-file-upload-input,
    .bp3-file-input input.bp3-disabled + .bp3-file-upload-input{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(206, 217, 224, 0.5);
      cursor:not-allowed;
      color:rgba(92, 112, 128, 0.6);
      resize:none; }
      .bp3-file-input input:disabled + .bp3-file-upload-input::after,
      .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after{
        outline:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        background-color:rgba(206, 217, 224, 0.5);
        background-image:none;
        cursor:not-allowed;
        color:rgba(92, 112, 128, 0.6); }
        .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active, .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active:hover,
        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active,
        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active:hover{
          background:rgba(206, 217, 224, 0.7); }
      .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input, .bp3-dark
      .bp3-file-input input.bp3-disabled + .bp3-file-upload-input{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:rgba(57, 75, 89, 0.5);
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after, .bp3-dark
        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after{
          -webkit-box-shadow:none;
                  box-shadow:none;
          background-color:rgba(57, 75, 89, 0.5);
          background-image:none;
          color:rgba(167, 182, 194, 0.6); }
          .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active, .bp3-dark
          .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active{
            background:rgba(57, 75, 89, 0.7); }
  .bp3-file-input.bp3-file-input-has-selection .bp3-file-upload-input{
    color:#182026; }
  .bp3-dark .bp3-file-input.bp3-file-input-has-selection .bp3-file-upload-input{
    color:#f5f8fa; }
  .bp3-file-input.bp3-fill{
    width:100%; }
  .bp3-file-input.bp3-large,
  .bp3-large .bp3-file-input{
    height:40px; }
  .bp3-file-input .bp3-file-upload-input-custom-text::after{
    content:attr(bp3-button-text); }

.bp3-file-upload-input{
  outline:none;
  border:none;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  background:#ffffff;
  height:30px;
  padding:0 10px;
  vertical-align:middle;
  line-height:30px;
  color:#182026;
  font-size:14px;
  font-weight:400;
  -webkit-transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  -webkit-appearance:none;
     -moz-appearance:none;
          appearance:none;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  position:absolute;
  top:0;
  right:0;
  left:0;
  padding-right:80px;
  color:rgba(92, 112, 128, 0.6);
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-file-upload-input::-webkit-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-file-upload-input::-moz-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-file-upload-input:-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-file-upload-input::-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-file-upload-input::placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-file-upload-input:focus, .bp3-file-upload-input.bp3-active{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-file-upload-input[type="search"], .bp3-file-upload-input.bp3-round{
    border-radius:30px;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    padding-left:10px; }
  .bp3-file-upload-input[readonly]{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .bp3-file-upload-input:disabled, .bp3-file-upload-input.bp3-disabled{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(206, 217, 224, 0.5);
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6);
    resize:none; }
  .bp3-file-upload-input::after{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-color:#f5f8fa;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    color:#182026;
    min-width:24px;
    min-height:24px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    position:absolute;
    top:0;
    right:0;
    margin:3px;
    border-radius:3px;
    width:70px;
    text-align:center;
    line-height:24px;
    content:"Browse"; }
    .bp3-file-upload-input::after:hover{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
      background-clip:padding-box;
      background-color:#ebf1f5; }
    .bp3-file-upload-input::after:active, .bp3-file-upload-input::after.bp3-active{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#d8e1e8;
      background-image:none; }
    .bp3-file-upload-input::after:disabled, .bp3-file-upload-input::after.bp3-disabled{
      outline:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(206, 217, 224, 0.5);
      background-image:none;
      cursor:not-allowed;
      color:rgba(92, 112, 128, 0.6); }
      .bp3-file-upload-input::after:disabled.bp3-active, .bp3-file-upload-input::after:disabled.bp3-active:hover, .bp3-file-upload-input::after.bp3-disabled.bp3-active, .bp3-file-upload-input::after.bp3-disabled.bp3-active:hover{
        background:rgba(206, 217, 224, 0.7); }
  .bp3-file-upload-input:hover::after{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-clip:padding-box;
    background-color:#ebf1f5; }
  .bp3-file-upload-input:active::after{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#d8e1e8;
    background-image:none; }
  .bp3-large .bp3-file-upload-input{
    height:40px;
    line-height:40px;
    font-size:16px;
    padding-right:95px; }
    .bp3-large .bp3-file-upload-input[type="search"], .bp3-large .bp3-file-upload-input.bp3-round{
      padding:0 15px; }
    .bp3-large .bp3-file-upload-input::after{
      min-width:30px;
      min-height:30px;
      margin:5px;
      width:85px;
      line-height:30px; }
  .bp3-dark .bp3-file-upload-input{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    background:rgba(16, 22, 26, 0.3);
    color:#f5f8fa;
    color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-file-upload-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-file-upload-input:disabled, .bp3-dark .bp3-file-upload-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(57, 75, 89, 0.5);
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::after{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
      background-color:#394b59;
      background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
      color:#f5f8fa; }
      .bp3-dark .bp3-file-upload-input::after:hover, .bp3-dark .bp3-file-upload-input::after:active, .bp3-dark .bp3-file-upload-input::after.bp3-active{
        color:#f5f8fa; }
      .bp3-dark .bp3-file-upload-input::after:hover{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
        background-color:#30404d; }
      .bp3-dark .bp3-file-upload-input::after:active, .bp3-dark .bp3-file-upload-input::after.bp3-active{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
        background-color:#202b33;
        background-image:none; }
      .bp3-dark .bp3-file-upload-input::after:disabled, .bp3-dark .bp3-file-upload-input::after.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none;
        background-color:rgba(57, 75, 89, 0.5);
        background-image:none;
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-upload-input::after:disabled.bp3-active, .bp3-dark .bp3-file-upload-input::after.bp3-disabled.bp3-active{
          background:rgba(57, 75, 89, 0.7); }
      .bp3-dark .bp3-file-upload-input::after .bp3-button-spinner .bp3-spinner-head{
        background:rgba(16, 22, 26, 0.5);
        stroke:#8a9ba8; }
    .bp3-dark .bp3-file-upload-input:hover::after{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
      background-color:#30404d; }
    .bp3-dark .bp3-file-upload-input:active::after{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#202b33;
      background-image:none; }

.bp3-file-upload-input::after{
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
.bp3-form-group{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin:0 0 15px; }
  .bp3-form-group label.bp3-label{
    margin-bottom:5px; }
  .bp3-form-group .bp3-control{
    margin-top:7px; }
  .bp3-form-group .bp3-form-helper-text{
    margin-top:5px;
    color:#5c7080;
    font-size:12px; }
  .bp3-form-group.bp3-intent-primary .bp3-form-helper-text{
    color:#106ba3; }
  .bp3-form-group.bp3-intent-success .bp3-form-helper-text{
    color:#0d8050; }
  .bp3-form-group.bp3-intent-warning .bp3-form-helper-text{
    color:#bf7326; }
  .bp3-form-group.bp3-intent-danger .bp3-form-helper-text{
    color:#c23030; }
  .bp3-form-group.bp3-inline{
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row;
    -webkit-box-align:start;
        -ms-flex-align:start;
            align-items:flex-start; }
    .bp3-form-group.bp3-inline.bp3-large label.bp3-label{
      margin:0 10px 0 0;
      line-height:40px; }
    .bp3-form-group.bp3-inline label.bp3-label{
      margin:0 10px 0 0;
      line-height:30px; }
  .bp3-form-group.bp3-disabled .bp3-label,
  .bp3-form-group.bp3-disabled .bp3-text-muted,
  .bp3-form-group.bp3-disabled .bp3-form-helper-text{
    color:rgba(92, 112, 128, 0.6) !important; }
  .bp3-dark .bp3-form-group.bp3-intent-primary .bp3-form-helper-text{
    color:#48aff0; }
  .bp3-dark .bp3-form-group.bp3-intent-success .bp3-form-helper-text{
    color:#3dcc91; }
  .bp3-dark .bp3-form-group.bp3-intent-warning .bp3-form-helper-text{
    color:#ffb366; }
  .bp3-dark .bp3-form-group.bp3-intent-danger .bp3-form-helper-text{
    color:#ff7373; }
  .bp3-dark .bp3-form-group .bp3-form-helper-text{
    color:#a7b6c2; }
  .bp3-dark .bp3-form-group.bp3-disabled .bp3-label,
  .bp3-dark .bp3-form-group.bp3-disabled .bp3-text-muted,
  .bp3-dark .bp3-form-group.bp3-disabled .bp3-form-helper-text{
    color:rgba(167, 182, 194, 0.6) !important; }
.bp3-input-group{
  display:block;
  position:relative; }
  .bp3-input-group .bp3-input{
    position:relative;
    width:100%; }
    .bp3-input-group .bp3-input:not(:first-child){
      padding-left:30px; }
    .bp3-input-group .bp3-input:not(:last-child){
      padding-right:30px; }
  .bp3-input-group .bp3-input-action,
  .bp3-input-group > .bp3-button,
  .bp3-input-group > .bp3-icon{
    position:absolute;
    top:0; }
    .bp3-input-group .bp3-input-action:first-child,
    .bp3-input-group > .bp3-button:first-child,
    .bp3-input-group > .bp3-icon:first-child{
      left:0; }
    .bp3-input-group .bp3-input-action:last-child,
    .bp3-input-group > .bp3-button:last-child,
    .bp3-input-group > .bp3-icon:last-child{
      right:0; }
  .bp3-input-group .bp3-button{
    min-width:24px;
    min-height:24px;
    margin:3px;
    padding:0 7px; }
    .bp3-input-group .bp3-button:empty{
      padding:0; }
  .bp3-input-group > .bp3-icon{
    z-index:1;
    color:#5c7080; }
    .bp3-input-group > .bp3-icon:empty{
      line-height:1;
      font-family:"Icons16", sans-serif;
      font-size:16px;
      font-weight:400;
      font-style:normal;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased; }
  .bp3-input-group > .bp3-icon,
  .bp3-input-group .bp3-input-action > .bp3-spinner{
    margin:7px; }
  .bp3-input-group .bp3-tag{
    margin:5px; }
  .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus),
  .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus){
    color:#5c7080; }
    .bp3-dark .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus), .bp3-dark
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus){
      color:#a7b6c2; }
    .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large{
      color:#5c7080; }
  .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled,
  .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled{
    color:rgba(92, 112, 128, 0.6) !important; }
    .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-standard, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-large,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-standard,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-large{
      color:rgba(92, 112, 128, 0.6) !important; }
  .bp3-input-group.bp3-disabled{
    cursor:not-allowed; }
    .bp3-input-group.bp3-disabled .bp3-icon{
      color:rgba(92, 112, 128, 0.6); }
  .bp3-input-group.bp3-large .bp3-button{
    min-width:30px;
    min-height:30px;
    margin:5px; }
  .bp3-input-group.bp3-large > .bp3-icon,
  .bp3-input-group.bp3-large .bp3-input-action > .bp3-spinner{
    margin:12px; }
  .bp3-input-group.bp3-large .bp3-input{
    height:40px;
    line-height:40px;
    font-size:16px; }
    .bp3-input-group.bp3-large .bp3-input[type="search"], .bp3-input-group.bp3-large .bp3-input.bp3-round{
      padding:0 15px; }
    .bp3-input-group.bp3-large .bp3-input:not(:first-child){
      padding-left:40px; }
    .bp3-input-group.bp3-large .bp3-input:not(:last-child){
      padding-right:40px; }
  .bp3-input-group.bp3-small .bp3-button{
    min-width:20px;
    min-height:20px;
    margin:2px; }
  .bp3-input-group.bp3-small .bp3-tag{
    min-width:20px;
    min-height:20px;
    margin:2px; }
  .bp3-input-group.bp3-small > .bp3-icon,
  .bp3-input-group.bp3-small .bp3-input-action > .bp3-spinner{
    margin:4px; }
  .bp3-input-group.bp3-small .bp3-input{
    height:24px;
    padding-right:8px;
    padding-left:8px;
    line-height:24px;
    font-size:12px; }
    .bp3-input-group.bp3-small .bp3-input[type="search"], .bp3-input-group.bp3-small .bp3-input.bp3-round{
      padding:0 12px; }
    .bp3-input-group.bp3-small .bp3-input:not(:first-child){
      padding-left:24px; }
    .bp3-input-group.bp3-small .bp3-input:not(:last-child){
      padding-right:24px; }
  .bp3-input-group.bp3-fill{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    width:100%; }
  .bp3-input-group.bp3-round .bp3-button,
  .bp3-input-group.bp3-round .bp3-input,
  .bp3-input-group.bp3-round .bp3-tag{
    border-radius:30px; }
  .bp3-dark .bp3-input-group .bp3-icon{
    color:#a7b6c2; }
  .bp3-dark .bp3-input-group.bp3-disabled .bp3-icon{
    color:rgba(167, 182, 194, 0.6); }
  .bp3-input-group.bp3-intent-primary .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-primary .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-primary .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #137cbd;
              box-shadow:inset 0 0 0 1px #137cbd; }
    .bp3-input-group.bp3-intent-primary .bp3-input:disabled, .bp3-input-group.bp3-intent-primary .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-primary > .bp3-icon{
    color:#106ba3; }
    .bp3-dark .bp3-input-group.bp3-intent-primary > .bp3-icon{
      color:#48aff0; }
  .bp3-input-group.bp3-intent-success .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-success .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-success .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #0f9960;
              box-shadow:inset 0 0 0 1px #0f9960; }
    .bp3-input-group.bp3-intent-success .bp3-input:disabled, .bp3-input-group.bp3-intent-success .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-success > .bp3-icon{
    color:#0d8050; }
    .bp3-dark .bp3-input-group.bp3-intent-success > .bp3-icon{
      color:#3dcc91; }
  .bp3-input-group.bp3-intent-warning .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-warning .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-warning .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #d9822b;
              box-shadow:inset 0 0 0 1px #d9822b; }
    .bp3-input-group.bp3-intent-warning .bp3-input:disabled, .bp3-input-group.bp3-intent-warning .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-warning > .bp3-icon{
    color:#bf7326; }
    .bp3-dark .bp3-input-group.bp3-intent-warning > .bp3-icon{
      color:#ffb366; }
  .bp3-input-group.bp3-intent-danger .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-danger .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-danger .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #db3737;
              box-shadow:inset 0 0 0 1px #db3737; }
    .bp3-input-group.bp3-intent-danger .bp3-input:disabled, .bp3-input-group.bp3-intent-danger .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-danger > .bp3-icon{
    color:#c23030; }
    .bp3-dark .bp3-input-group.bp3-intent-danger > .bp3-icon{
      color:#ff7373; }
.bp3-input{
  outline:none;
  border:none;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  background:#ffffff;
  height:30px;
  padding:0 10px;
  vertical-align:middle;
  line-height:30px;
  color:#182026;
  font-size:14px;
  font-weight:400;
  -webkit-transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  -webkit-appearance:none;
     -moz-appearance:none;
          appearance:none; }
  .bp3-input::-webkit-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input::-moz-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input:-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input::-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input::placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input:focus, .bp3-input.bp3-active{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-input[type="search"], .bp3-input.bp3-round{
    border-radius:30px;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    padding-left:10px; }
  .bp3-input[readonly]{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .bp3-input:disabled, .bp3-input.bp3-disabled{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(206, 217, 224, 0.5);
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6);
    resize:none; }
  .bp3-input.bp3-large{
    height:40px;
    line-height:40px;
    font-size:16px; }
    .bp3-input.bp3-large[type="search"], .bp3-input.bp3-large.bp3-round{
      padding:0 15px; }
  .bp3-input.bp3-small{
    height:24px;
    padding-right:8px;
    padding-left:8px;
    line-height:24px;
    font-size:12px; }
    .bp3-input.bp3-small[type="search"], .bp3-input.bp3-small.bp3-round{
      padding:0 12px; }
  .bp3-input.bp3-fill{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    width:100%; }
  .bp3-dark .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    background:rgba(16, 22, 26, 0.3);
    color:#f5f8fa; }
    .bp3-dark .bp3-input::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input::placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-input:disabled, .bp3-dark .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(57, 75, 89, 0.5);
      color:rgba(167, 182, 194, 0.6); }
  .bp3-input.bp3-intent-primary{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-primary:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-primary[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #137cbd;
              box-shadow:inset 0 0 0 1px #137cbd; }
    .bp3-input.bp3-intent-primary:disabled, .bp3-input.bp3-intent-primary.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-primary{
      -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-primary:focus{
        -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-primary[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #137cbd;
                box-shadow:inset 0 0 0 1px #137cbd; }
      .bp3-dark .bp3-input.bp3-intent-primary:disabled, .bp3-dark .bp3-input.bp3-intent-primary.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input.bp3-intent-success{
    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-success:focus{
      -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-success[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #0f9960;
              box-shadow:inset 0 0 0 1px #0f9960; }
    .bp3-input.bp3-intent-success:disabled, .bp3-input.bp3-intent-success.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-success{
      -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-success:focus{
        -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-success[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #0f9960;
                box-shadow:inset 0 0 0 1px #0f9960; }
      .bp3-dark .bp3-input.bp3-intent-success:disabled, .bp3-dark .bp3-input.bp3-intent-success.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input.bp3-intent-warning{
    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-warning:focus{
      -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-warning[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #d9822b;
              box-shadow:inset 0 0 0 1px #d9822b; }
    .bp3-input.bp3-intent-warning:disabled, .bp3-input.bp3-intent-warning.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-warning{
      -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-warning:focus{
        -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-warning[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #d9822b;
                box-shadow:inset 0 0 0 1px #d9822b; }
      .bp3-dark .bp3-input.bp3-intent-warning:disabled, .bp3-dark .bp3-input.bp3-intent-warning.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input.bp3-intent-danger{
    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-danger:focus{
      -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-danger[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #db3737;
              box-shadow:inset 0 0 0 1px #db3737; }
    .bp3-input.bp3-intent-danger:disabled, .bp3-input.bp3-intent-danger.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-danger{
      -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-danger:focus{
        -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-danger[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #db3737;
                box-shadow:inset 0 0 0 1px #db3737; }
      .bp3-dark .bp3-input.bp3-intent-danger:disabled, .bp3-dark .bp3-input.bp3-intent-danger.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input::-ms-clear{
    display:none; }
textarea.bp3-input{
  max-width:100%;
  padding:10px; }
  textarea.bp3-input, textarea.bp3-input.bp3-large, textarea.bp3-input.bp3-small{
    height:auto;
    line-height:inherit; }
  textarea.bp3-input.bp3-small{
    padding:8px; }
  .bp3-dark textarea.bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    background:rgba(16, 22, 26, 0.3);
    color:#f5f8fa; }
    .bp3-dark textarea.bp3-input::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input::placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark textarea.bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark textarea.bp3-input:disabled, .bp3-dark textarea.bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(57, 75, 89, 0.5);
      color:rgba(167, 182, 194, 0.6); }
label.bp3-label{
  display:block;
  margin-top:0;
  margin-bottom:15px; }
  label.bp3-label .bp3-html-select,
  label.bp3-label .bp3-input,
  label.bp3-label .bp3-select,
  label.bp3-label .bp3-slider,
  label.bp3-label .bp3-popover-wrapper{
    display:block;
    margin-top:5px;
    text-transform:none; }
  label.bp3-label .bp3-button-group{
    margin-top:5px; }
  label.bp3-label .bp3-select select,
  label.bp3-label .bp3-html-select select{
    width:100%;
    vertical-align:top;
    font-weight:400; }
  label.bp3-label.bp3-disabled,
  label.bp3-label.bp3-disabled .bp3-text-muted{
    color:rgba(92, 112, 128, 0.6); }
  label.bp3-label.bp3-inline{
    line-height:30px; }
    label.bp3-label.bp3-inline .bp3-html-select,
    label.bp3-label.bp3-inline .bp3-input,
    label.bp3-label.bp3-inline .bp3-input-group,
    label.bp3-label.bp3-inline .bp3-select,
    label.bp3-label.bp3-inline .bp3-popover-wrapper{
      display:inline-block;
      margin:0 0 0 5px;
      vertical-align:top; }
    label.bp3-label.bp3-inline .bp3-button-group{
      margin:0 0 0 5px; }
    label.bp3-label.bp3-inline .bp3-input-group .bp3-input{
      margin-left:0; }
    label.bp3-label.bp3-inline.bp3-large{
      line-height:40px; }
  label.bp3-label:not(.bp3-inline) .bp3-popover-target{
    display:block; }
  .bp3-dark label.bp3-label{
    color:#f5f8fa; }
    .bp3-dark label.bp3-label.bp3-disabled,
    .bp3-dark label.bp3-label.bp3-disabled .bp3-text-muted{
      color:rgba(167, 182, 194, 0.6); }
.bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button{
  -webkit-box-flex:1;
      -ms-flex:1 1 14px;
          flex:1 1 14px;
  width:30px;
  min-height:0;
  padding:0; }
  .bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:first-child{
    border-radius:0 3px 0 0; }
  .bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:last-child{
    border-radius:0 0 3px 0; }

.bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:first-child{
  border-radius:3px 0 0 0; }

.bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:last-child{
  border-radius:0 0 0 3px; }

.bp3-numeric-input.bp3-large .bp3-button-group.bp3-vertical > .bp3-button{
  width:40px; }

form{
  display:block; }
.bp3-html-select select,
.bp3-select select{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  border:none;
  border-radius:3px;
  cursor:pointer;
  padding:5px 10px;
  vertical-align:middle;
  text-align:left;
  font-size:14px;
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
  background-color:#f5f8fa;
  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
  color:#182026;
  border-radius:3px;
  width:100%;
  height:30px;
  padding:0 25px 0 10px;
  -moz-appearance:none;
  -webkit-appearance:none; }
  .bp3-html-select select > *, .bp3-select select > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-html-select select > .bp3-fill, .bp3-select select > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-html-select select::before,
  .bp3-select select::before, .bp3-html-select select > *, .bp3-select select > *{
    margin-right:7px; }
  .bp3-html-select select:empty::before,
  .bp3-select select:empty::before,
  .bp3-html-select select > :last-child,
  .bp3-select select > :last-child{
    margin-right:0; }
  .bp3-html-select select:hover,
  .bp3-select select:hover{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-clip:padding-box;
    background-color:#ebf1f5; }
  .bp3-html-select select:active,
  .bp3-select select:active, .bp3-html-select select.bp3-active,
  .bp3-select select.bp3-active{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#d8e1e8;
    background-image:none; }
  .bp3-html-select select:disabled,
  .bp3-select select:disabled, .bp3-html-select select.bp3-disabled,
  .bp3-select select.bp3-disabled{
    outline:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    background-color:rgba(206, 217, 224, 0.5);
    background-image:none;
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6); }
    .bp3-html-select select:disabled.bp3-active,
    .bp3-select select:disabled.bp3-active, .bp3-html-select select:disabled.bp3-active:hover,
    .bp3-select select:disabled.bp3-active:hover, .bp3-html-select select.bp3-disabled.bp3-active,
    .bp3-select select.bp3-disabled.bp3-active, .bp3-html-select select.bp3-disabled.bp3-active:hover,
    .bp3-select select.bp3-disabled.bp3-active:hover{
      background:rgba(206, 217, 224, 0.7); }

.bp3-html-select.bp3-minimal select,
.bp3-select.bp3-minimal select{
  -webkit-box-shadow:none;
          box-shadow:none;
  background:none; }
  .bp3-html-select.bp3-minimal select:hover,
  .bp3-select.bp3-minimal select:hover{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(167, 182, 194, 0.3);
    text-decoration:none;
    color:#182026; }
  .bp3-html-select.bp3-minimal select:active,
  .bp3-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal select.bp3-active,
  .bp3-select.bp3-minimal select.bp3-active{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(115, 134, 148, 0.3);
    color:#182026; }
  .bp3-html-select.bp3-minimal select:disabled,
  .bp3-select.bp3-minimal select:disabled, .bp3-html-select.bp3-minimal select:disabled:hover,
  .bp3-select.bp3-minimal select:disabled:hover, .bp3-html-select.bp3-minimal select.bp3-disabled,
  .bp3-select.bp3-minimal select.bp3-disabled, .bp3-html-select.bp3-minimal select.bp3-disabled:hover,
  .bp3-select.bp3-minimal select.bp3-disabled:hover{
    background:none;
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6); }
    .bp3-html-select.bp3-minimal select:disabled.bp3-active,
    .bp3-select.bp3-minimal select:disabled.bp3-active, .bp3-html-select.bp3-minimal select:disabled:hover.bp3-active,
    .bp3-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active,
    .bp3-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active,
    .bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active{
      background:rgba(115, 134, 148, 0.3); }
  .bp3-dark .bp3-html-select.bp3-minimal select, .bp3-html-select.bp3-minimal .bp3-dark select,
  .bp3-dark .bp3-select.bp3-minimal select, .bp3-select.bp3-minimal .bp3-dark select{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:none;
    color:inherit; }
    .bp3-dark .bp3-html-select.bp3-minimal select:hover, .bp3-html-select.bp3-minimal .bp3-dark select:hover,
    .bp3-dark .bp3-select.bp3-minimal select:hover, .bp3-select.bp3-minimal .bp3-dark select:hover, .bp3-dark .bp3-html-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal .bp3-dark select:active,
    .bp3-dark .bp3-select.bp3-minimal select:active, .bp3-select.bp3-minimal .bp3-dark select:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none; }
    .bp3-dark .bp3-html-select.bp3-minimal select:hover, .bp3-html-select.bp3-minimal .bp3-dark select:hover,
    .bp3-dark .bp3-select.bp3-minimal select:hover, .bp3-select.bp3-minimal .bp3-dark select:hover{
      background:rgba(138, 155, 168, 0.15); }
    .bp3-dark .bp3-html-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal .bp3-dark select:active,
    .bp3-dark .bp3-select.bp3-minimal select:active, .bp3-select.bp3-minimal .bp3-dark select:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-active{
      background:rgba(138, 155, 168, 0.3);
      color:#f5f8fa; }
    .bp3-dark .bp3-html-select.bp3-minimal select:disabled, .bp3-html-select.bp3-minimal .bp3-dark select:disabled,
    .bp3-dark .bp3-select.bp3-minimal select:disabled, .bp3-select.bp3-minimal .bp3-dark select:disabled, .bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover, .bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover,
    .bp3-dark .bp3-select.bp3-minimal select:disabled:hover, .bp3-select.bp3-minimal .bp3-dark select:disabled:hover, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover{
      background:none;
      cursor:not-allowed;
      color:rgba(167, 182, 194, 0.6); }
      .bp3-dark .bp3-html-select.bp3-minimal select:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select:disabled.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active{
        background:rgba(138, 155, 168, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-primary,
  .bp3-select.bp3-minimal select.bp3-intent-primary{
    color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,
    .bp3-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-html-select.bp3-minimal select.bp3-intent-primary:active,
    .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none;
      color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,
    .bp3-select.bp3-minimal select.bp3-intent-primary:hover{
      background:rgba(19, 124, 189, 0.15);
      color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:active,
    .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active{
      background:rgba(19, 124, 189, 0.3);
      color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled{
      background:none;
      color:rgba(16, 107, 163, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active{
        background:rgba(19, 124, 189, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
      stroke:#106ba3; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary{
      color:#48aff0; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.2);
        color:#48aff0; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#48aff0; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(72, 175, 240, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-success,
  .bp3-select.bp3-minimal select.bp3-intent-success{
    color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:hover,
    .bp3-select.bp3-minimal select.bp3-intent-success:hover, .bp3-html-select.bp3-minimal select.bp3-intent-success:active,
    .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none;
      color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:hover,
    .bp3-select.bp3-minimal select.bp3-intent-success:hover{
      background:rgba(15, 153, 96, 0.15);
      color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:active,
    .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active{
      background:rgba(15, 153, 96, 0.3);
      color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled{
      background:none;
      color:rgba(13, 128, 80, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active{
        background:rgba(15, 153, 96, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
      stroke:#0d8050; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success{
      color:#3dcc91; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.2);
        color:#3dcc91; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#3dcc91; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(61, 204, 145, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-warning,
  .bp3-select.bp3-minimal select.bp3-intent-warning{
    color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,
    .bp3-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-html-select.bp3-minimal select.bp3-intent-warning:active,
    .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none;
      color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,
    .bp3-select.bp3-minimal select.bp3-intent-warning:hover{
      background:rgba(217, 130, 43, 0.15);
      color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:active,
    .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active{
      background:rgba(217, 130, 43, 0.3);
      color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled{
      background:none;
      color:rgba(191, 115, 38, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active{
        background:rgba(217, 130, 43, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
      stroke:#bf7326; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning{
      color:#ffb366; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.2);
        color:#ffb366; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#ffb366; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(255, 179, 102, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-danger,
  .bp3-select.bp3-minimal select.bp3-intent-danger{
    color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,
    .bp3-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-html-select.bp3-minimal select.bp3-intent-danger:active,
    .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none;
      color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,
    .bp3-select.bp3-minimal select.bp3-intent-danger:hover{
      background:rgba(219, 55, 55, 0.15);
      color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:active,
    .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active{
      background:rgba(219, 55, 55, 0.3);
      color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled{
      background:none;
      color:rgba(194, 48, 48, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active{
        background:rgba(219, 55, 55, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
      stroke:#c23030; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger{
      color:#ff7373; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.2);
        color:#ff7373; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#ff7373; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(255, 115, 115, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }

.bp3-html-select.bp3-large select,
.bp3-select.bp3-large select{
  height:40px;
  padding-right:35px;
  font-size:16px; }

.bp3-dark .bp3-html-select select, .bp3-dark .bp3-select select{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
  background-color:#394b59;
  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
  color:#f5f8fa; }
  .bp3-dark .bp3-html-select select:hover, .bp3-dark .bp3-select select:hover, .bp3-dark .bp3-html-select select:active, .bp3-dark .bp3-select select:active, .bp3-dark .bp3-html-select select.bp3-active, .bp3-dark .bp3-select select.bp3-active{
    color:#f5f8fa; }
  .bp3-dark .bp3-html-select select:hover, .bp3-dark .bp3-select select:hover{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    background-color:#30404d; }
  .bp3-dark .bp3-html-select select:active, .bp3-dark .bp3-select select:active, .bp3-dark .bp3-html-select select.bp3-active, .bp3-dark .bp3-select select.bp3-active{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#202b33;
    background-image:none; }
  .bp3-dark .bp3-html-select select:disabled, .bp3-dark .bp3-select select:disabled, .bp3-dark .bp3-html-select select.bp3-disabled, .bp3-dark .bp3-select select.bp3-disabled{
    -webkit-box-shadow:none;
            box-shadow:none;
    background-color:rgba(57, 75, 89, 0.5);
    background-image:none;
    color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-html-select select:disabled.bp3-active, .bp3-dark .bp3-select select:disabled.bp3-active, .bp3-dark .bp3-html-select select.bp3-disabled.bp3-active, .bp3-dark .bp3-select select.bp3-disabled.bp3-active{
      background:rgba(57, 75, 89, 0.7); }
  .bp3-dark .bp3-html-select select .bp3-button-spinner .bp3-spinner-head, .bp3-dark .bp3-select select .bp3-button-spinner .bp3-spinner-head{
    background:rgba(16, 22, 26, 0.5);
    stroke:#8a9ba8; }

.bp3-html-select select:disabled,
.bp3-select select:disabled{
  -webkit-box-shadow:none;
          box-shadow:none;
  background-color:rgba(206, 217, 224, 0.5);
  cursor:not-allowed;
  color:rgba(92, 112, 128, 0.6); }

.bp3-html-select .bp3-icon,
.bp3-select .bp3-icon, .bp3-select::after{
  position:absolute;
  top:7px;
  right:7px;
  color:#5c7080;
  pointer-events:none; }
  .bp3-html-select .bp3-disabled.bp3-icon,
  .bp3-select .bp3-disabled.bp3-icon, .bp3-disabled.bp3-select::after{
    color:rgba(92, 112, 128, 0.6); }
.bp3-html-select,
.bp3-select{
  display:inline-block;
  position:relative;
  vertical-align:middle;
  letter-spacing:normal; }
  .bp3-html-select select::-ms-expand,
  .bp3-select select::-ms-expand{
    display:none; }
  .bp3-html-select .bp3-icon,
  .bp3-select .bp3-icon{
    color:#5c7080; }
    .bp3-html-select .bp3-icon:hover,
    .bp3-select .bp3-icon:hover{
      color:#182026; }
    .bp3-dark .bp3-html-select .bp3-icon, .bp3-dark
    .bp3-select .bp3-icon{
      color:#a7b6c2; }
      .bp3-dark .bp3-html-select .bp3-icon:hover, .bp3-dark
      .bp3-select .bp3-icon:hover{
        color:#f5f8fa; }
  .bp3-html-select.bp3-large::after,
  .bp3-html-select.bp3-large .bp3-icon,
  .bp3-select.bp3-large::after,
  .bp3-select.bp3-large .bp3-icon{
    top:12px;
    right:12px; }
  .bp3-html-select.bp3-fill,
  .bp3-html-select.bp3-fill select,
  .bp3-select.bp3-fill,
  .bp3-select.bp3-fill select{
    width:100%; }
  .bp3-dark .bp3-html-select option, .bp3-dark
  .bp3-select option{
    background-color:#30404d;
    color:#f5f8fa; }
  .bp3-dark .bp3-html-select::after, .bp3-dark
  .bp3-select::after{
    color:#a7b6c2; }

.bp3-select::after{
  line-height:1;
  font-family:"Icons16", sans-serif;
  font-size:16px;
  font-weight:400;
  font-style:normal;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  content:""; }
.bp3-running-text table, table.bp3-html-table{
  border-spacing:0;
  font-size:14px; }
  .bp3-running-text table th, table.bp3-html-table th,
  .bp3-running-text table td,
  table.bp3-html-table td{
    padding:11px;
    vertical-align:top;
    text-align:left; }
  .bp3-running-text table th, table.bp3-html-table th{
    color:#182026;
    font-weight:600; }
  
  .bp3-running-text table td,
  table.bp3-html-table td{
    color:#182026; }
  .bp3-running-text table tbody tr:first-child th, table.bp3-html-table tbody tr:first-child th,
  .bp3-running-text table tbody tr:first-child td,
  table.bp3-html-table tbody tr:first-child td{
    -webkit-box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15); }
  .bp3-dark .bp3-running-text table th, .bp3-running-text .bp3-dark table th, .bp3-dark table.bp3-html-table th{
    color:#f5f8fa; }
  .bp3-dark .bp3-running-text table td, .bp3-running-text .bp3-dark table td, .bp3-dark table.bp3-html-table td{
    color:#f5f8fa; }
  .bp3-dark .bp3-running-text table tbody tr:first-child th, .bp3-running-text .bp3-dark table tbody tr:first-child th, .bp3-dark table.bp3-html-table tbody tr:first-child th,
  .bp3-dark .bp3-running-text table tbody tr:first-child td,
  .bp3-running-text .bp3-dark table tbody tr:first-child td,
  .bp3-dark table.bp3-html-table tbody tr:first-child td{
    -webkit-box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
            box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15); }

table.bp3-html-table.bp3-html-table-condensed th,
table.bp3-html-table.bp3-html-table-condensed td, table.bp3-html-table.bp3-small th,
table.bp3-html-table.bp3-small td{
  padding-top:6px;
  padding-bottom:6px; }

table.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td{
  background:rgba(191, 204, 214, 0.15); }

table.bp3-html-table.bp3-html-table-bordered th:not(:first-child){
  -webkit-box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
          box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15); }

table.bp3-html-table.bp3-html-table-bordered tbody tr td{
  -webkit-box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
          box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15); }
  table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child){
    -webkit-box-shadow:inset 1px 1px 0 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 1px 1px 0 0 rgba(16, 22, 26, 0.15); }

table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td{
  -webkit-box-shadow:none;
          box-shadow:none; }
  table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:not(:first-child){
    -webkit-box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15); }

table.bp3-html-table.bp3-interactive tbody tr:hover td{
  background-color:rgba(191, 204, 214, 0.3);
  cursor:pointer; }

table.bp3-html-table.bp3-interactive tbody tr:active td{
  background-color:rgba(191, 204, 214, 0.4); }

.bp3-dark table.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td{
  background:rgba(92, 112, 128, 0.15); }

.bp3-dark table.bp3-html-table.bp3-html-table-bordered th:not(:first-child){
  -webkit-box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
          box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15); }

.bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td{
  -webkit-box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
          box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15); }
  .bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child){
    -webkit-box-shadow:inset 1px 1px 0 0 rgba(255, 255, 255, 0.15);
            box-shadow:inset 1px 1px 0 0 rgba(255, 255, 255, 0.15); }

.bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td{
  -webkit-box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
          box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15); }
  .bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:first-child{
    -webkit-box-shadow:none;
            box-shadow:none; }

.bp3-dark table.bp3-html-table.bp3-interactive tbody tr:hover td{
  background-color:rgba(92, 112, 128, 0.3);
  cursor:pointer; }

.bp3-dark table.bp3-html-table.bp3-interactive tbody tr:active td{
  background-color:rgba(92, 112, 128, 0.4); }

.bp3-key-combo{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center; }
  .bp3-key-combo > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-key-combo > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-key-combo::before,
  .bp3-key-combo > *{
    margin-right:5px; }
  .bp3-key-combo:empty::before,
  .bp3-key-combo > :last-child{
    margin-right:0; }

.bp3-hotkey-dialog{
  top:40px;
  padding-bottom:0; }
  .bp3-hotkey-dialog .bp3-dialog-body{
    margin:0;
    padding:0; }
  .bp3-hotkey-dialog .bp3-hotkey-label{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1; }

.bp3-hotkey-column{
  margin:auto;
  max-height:80vh;
  overflow-y:auto;
  padding:30px; }
  .bp3-hotkey-column .bp3-heading{
    margin-bottom:20px; }
    .bp3-hotkey-column .bp3-heading:not(:first-child){
      margin-top:40px; }

.bp3-hotkey{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  margin-right:0;
  margin-left:0; }
  .bp3-hotkey:not(:last-child){
    margin-bottom:10px; }
.bp3-icon{
  display:inline-block;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  vertical-align:text-bottom; }
  .bp3-icon:not(:empty)::before{
    content:"" !important;
    content:unset !important; }
  .bp3-icon > svg{
    display:block; }
    .bp3-icon > svg:not([fill]){
      fill:currentColor; }

.bp3-icon.bp3-intent-primary, .bp3-icon-standard.bp3-intent-primary, .bp3-icon-large.bp3-intent-primary{
  color:#106ba3; }
  .bp3-dark .bp3-icon.bp3-intent-primary, .bp3-dark .bp3-icon-standard.bp3-intent-primary, .bp3-dark .bp3-icon-large.bp3-intent-primary{
    color:#48aff0; }

.bp3-icon.bp3-intent-success, .bp3-icon-standard.bp3-intent-success, .bp3-icon-large.bp3-intent-success{
  color:#0d8050; }
  .bp3-dark .bp3-icon.bp3-intent-success, .bp3-dark .bp3-icon-standard.bp3-intent-success, .bp3-dark .bp3-icon-large.bp3-intent-success{
    color:#3dcc91; }

.bp3-icon.bp3-intent-warning, .bp3-icon-standard.bp3-intent-warning, .bp3-icon-large.bp3-intent-warning{
  color:#bf7326; }
  .bp3-dark .bp3-icon.bp3-intent-warning, .bp3-dark .bp3-icon-standard.bp3-intent-warning, .bp3-dark .bp3-icon-large.bp3-intent-warning{
    color:#ffb366; }

.bp3-icon.bp3-intent-danger, .bp3-icon-standard.bp3-intent-danger, .bp3-icon-large.bp3-intent-danger{
  color:#c23030; }
  .bp3-dark .bp3-icon.bp3-intent-danger, .bp3-dark .bp3-icon-standard.bp3-intent-danger, .bp3-dark .bp3-icon-large.bp3-intent-danger{
    color:#ff7373; }

span.bp3-icon-standard{
  line-height:1;
  font-family:"Icons16", sans-serif;
  font-size:16px;
  font-weight:400;
  font-style:normal;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  display:inline-block; }

span.bp3-icon-large{
  line-height:1;
  font-family:"Icons20", sans-serif;
  font-size:20px;
  font-weight:400;
  font-style:normal;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  display:inline-block; }

span.bp3-icon:empty{
  line-height:1;
  font-family:"Icons20";
  font-size:inherit;
  font-weight:400;
  font-style:normal; }
  span.bp3-icon:empty::before{
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased; }

.bp3-icon-add::before{
  content:""; }

.bp3-icon-add-column-left::before{
  content:""; }

.bp3-icon-add-column-right::before{
  content:""; }

.bp3-icon-add-row-bottom::before{
  content:""; }

.bp3-icon-add-row-top::before{
  content:""; }

.bp3-icon-add-to-artifact::before{
  content:""; }

.bp3-icon-add-to-folder::before{
  content:""; }

.bp3-icon-airplane::before{
  content:""; }

.bp3-icon-align-center::before{
  content:""; }

.bp3-icon-align-justify::before{
  content:""; }

.bp3-icon-align-left::before{
  content:""; }

.bp3-icon-align-right::before{
  content:""; }

.bp3-icon-alignment-bottom::before{
  content:""; }

.bp3-icon-alignment-horizontal-center::before{
  content:""; }

.bp3-icon-alignment-left::before{
  content:""; }

.bp3-icon-alignment-right::before{
  content:""; }

.bp3-icon-alignment-top::before{
  content:""; }

.bp3-icon-alignment-vertical-center::before{
  content:""; }

.bp3-icon-annotation::before{
  content:""; }

.bp3-icon-application::before{
  content:""; }

.bp3-icon-applications::before{
  content:""; }

.bp3-icon-archive::before{
  content:""; }

.bp3-icon-arrow-bottom-left::before{
  content:"↙"; }

.bp3-icon-arrow-bottom-right::before{
  content:"↘"; }

.bp3-icon-arrow-down::before{
  content:"↓"; }

.bp3-icon-arrow-left::before{
  content:"←"; }

.bp3-icon-arrow-right::before{
  content:"→"; }

.bp3-icon-arrow-top-left::before{
  content:"↖"; }

.bp3-icon-arrow-top-right::before{
  content:"↗"; }

.bp3-icon-arrow-up::before{
  content:"↑"; }

.bp3-icon-arrows-horizontal::before{
  content:"↔"; }

.bp3-icon-arrows-vertical::before{
  content:"↕"; }

.bp3-icon-asterisk::before{
  content:"*"; }

.bp3-icon-automatic-updates::before{
  content:""; }

.bp3-icon-badge::before{
  content:""; }

.bp3-icon-ban-circle::before{
  content:""; }

.bp3-icon-bank-account::before{
  content:""; }

.bp3-icon-barcode::before{
  content:""; }

.bp3-icon-blank::before{
  content:""; }

.bp3-icon-blocked-person::before{
  content:""; }

.bp3-icon-bold::before{
  content:""; }

.bp3-icon-book::before{
  content:""; }

.bp3-icon-bookmark::before{
  content:""; }

.bp3-icon-box::before{
  content:""; }

.bp3-icon-briefcase::before{
  content:""; }

.bp3-icon-bring-data::before{
  content:""; }

.bp3-icon-build::before{
  content:""; }

.bp3-icon-calculator::before{
  content:""; }

.bp3-icon-calendar::before{
  content:""; }

.bp3-icon-camera::before{
  content:""; }

.bp3-icon-caret-down::before{
  content:"⌄"; }

.bp3-icon-caret-left::before{
  content:"〈"; }

.bp3-icon-caret-right::before{
  content:"〉"; }

.bp3-icon-caret-up::before{
  content:"⌃"; }

.bp3-icon-cell-tower::before{
  content:""; }

.bp3-icon-changes::before{
  content:""; }

.bp3-icon-chart::before{
  content:""; }

.bp3-icon-chat::before{
  content:""; }

.bp3-icon-chevron-backward::before{
  content:""; }

.bp3-icon-chevron-down::before{
  content:""; }

.bp3-icon-chevron-forward::before{
  content:""; }

.bp3-icon-chevron-left::before{
  content:""; }

.bp3-icon-chevron-right::before{
  content:""; }

.bp3-icon-chevron-up::before{
  content:""; }

.bp3-icon-circle::before{
  content:""; }

.bp3-icon-circle-arrow-down::before{
  content:""; }

.bp3-icon-circle-arrow-left::before{
  content:""; }

.bp3-icon-circle-arrow-right::before{
  content:""; }

.bp3-icon-circle-arrow-up::before{
  content:""; }

.bp3-icon-citation::before{
  content:""; }

.bp3-icon-clean::before{
  content:""; }

.bp3-icon-clipboard::before{
  content:""; }

.bp3-icon-cloud::before{
  content:"☁"; }

.bp3-icon-cloud-download::before{
  content:""; }

.bp3-icon-cloud-upload::before{
  content:""; }

.bp3-icon-code::before{
  content:""; }

.bp3-icon-code-block::before{
  content:""; }

.bp3-icon-cog::before{
  content:""; }

.bp3-icon-collapse-all::before{
  content:""; }

.bp3-icon-column-layout::before{
  content:""; }

.bp3-icon-comment::before{
  content:""; }

.bp3-icon-comparison::before{
  content:""; }

.bp3-icon-compass::before{
  content:""; }

.bp3-icon-compressed::before{
  content:""; }

.bp3-icon-confirm::before{
  content:""; }

.bp3-icon-console::before{
  content:""; }

.bp3-icon-contrast::before{
  content:""; }

.bp3-icon-control::before{
  content:""; }

.bp3-icon-credit-card::before{
  content:""; }

.bp3-icon-cross::before{
  content:"✗"; }

.bp3-icon-crown::before{
  content:""; }

.bp3-icon-cube::before{
  content:""; }

.bp3-icon-cube-add::before{
  content:""; }

.bp3-icon-cube-remove::before{
  content:""; }

.bp3-icon-curved-range-chart::before{
  content:""; }

.bp3-icon-cut::before{
  content:""; }

.bp3-icon-dashboard::before{
  content:""; }

.bp3-icon-data-lineage::before{
  content:""; }

.bp3-icon-database::before{
  content:""; }

.bp3-icon-delete::before{
  content:""; }

.bp3-icon-delta::before{
  content:"Δ"; }

.bp3-icon-derive-column::before{
  content:""; }

.bp3-icon-desktop::before{
  content:""; }

.bp3-icon-diagram-tree::before{
  content:""; }

.bp3-icon-direction-left::before{
  content:""; }

.bp3-icon-direction-right::before{
  content:""; }

.bp3-icon-disable::before{
  content:""; }

.bp3-icon-document::before{
  content:""; }

.bp3-icon-document-open::before{
  content:""; }

.bp3-icon-document-share::before{
  content:""; }

.bp3-icon-dollar::before{
  content:"$"; }

.bp3-icon-dot::before{
  content:"•"; }

.bp3-icon-double-caret-horizontal::before{
  content:""; }

.bp3-icon-double-caret-vertical::before{
  content:""; }

.bp3-icon-double-chevron-down::before{
  content:""; }

.bp3-icon-double-chevron-left::before{
  content:""; }

.bp3-icon-double-chevron-right::before{
  content:""; }

.bp3-icon-double-chevron-up::before{
  content:""; }

.bp3-icon-doughnut-chart::before{
  content:""; }

.bp3-icon-download::before{
  content:""; }

.bp3-icon-drag-handle-horizontal::before{
  content:""; }

.bp3-icon-drag-handle-vertical::before{
  content:""; }

.bp3-icon-draw::before{
  content:""; }

.bp3-icon-drive-time::before{
  content:""; }

.bp3-icon-duplicate::before{
  content:""; }

.bp3-icon-edit::before{
  content:"✎"; }

.bp3-icon-eject::before{
  content:"⏏"; }

.bp3-icon-endorsed::before{
  content:""; }

.bp3-icon-envelope::before{
  content:"✉"; }

.bp3-icon-equals::before{
  content:""; }

.bp3-icon-eraser::before{
  content:""; }

.bp3-icon-error::before{
  content:""; }

.bp3-icon-euro::before{
  content:"€"; }

.bp3-icon-exchange::before{
  content:""; }

.bp3-icon-exclude-row::before{
  content:""; }

.bp3-icon-expand-all::before{
  content:""; }

.bp3-icon-export::before{
  content:""; }

.bp3-icon-eye-off::before{
  content:""; }

.bp3-icon-eye-on::before{
  content:""; }

.bp3-icon-eye-open::before{
  content:""; }

.bp3-icon-fast-backward::before{
  content:""; }

.bp3-icon-fast-forward::before{
  content:""; }

.bp3-icon-feed::before{
  content:""; }

.bp3-icon-feed-subscribed::before{
  content:""; }

.bp3-icon-film::before{
  content:""; }

.bp3-icon-filter::before{
  content:""; }

.bp3-icon-filter-keep::before{
  content:""; }

.bp3-icon-filter-list::before{
  content:""; }

.bp3-icon-filter-open::before{
  content:""; }

.bp3-icon-filter-remove::before{
  content:""; }

.bp3-icon-flag::before{
  content:"⚑"; }

.bp3-icon-flame::before{
  content:""; }

.bp3-icon-flash::before{
  content:""; }

.bp3-icon-floppy-disk::before{
  content:""; }

.bp3-icon-flow-branch::before{
  content:""; }

.bp3-icon-flow-end::before{
  content:""; }

.bp3-icon-flow-linear::before{
  content:""; }

.bp3-icon-flow-review::before{
  content:""; }

.bp3-icon-flow-review-branch::before{
  content:""; }

.bp3-icon-flows::before{
  content:""; }

.bp3-icon-folder-close::before{
  content:""; }

.bp3-icon-folder-new::before{
  content:""; }

.bp3-icon-folder-open::before{
  content:""; }

.bp3-icon-folder-shared::before{
  content:""; }

.bp3-icon-folder-shared-open::before{
  content:""; }

.bp3-icon-follower::before{
  content:""; }

.bp3-icon-following::before{
  content:""; }

.bp3-icon-font::before{
  content:""; }

.bp3-icon-fork::before{
  content:""; }

.bp3-icon-form::before{
  content:""; }

.bp3-icon-full-circle::before{
  content:""; }

.bp3-icon-full-stacked-chart::before{
  content:""; }

.bp3-icon-fullscreen::before{
  content:""; }

.bp3-icon-function::before{
  content:""; }

.bp3-icon-gantt-chart::before{
  content:""; }

.bp3-icon-geolocation::before{
  content:""; }

.bp3-icon-geosearch::before{
  content:""; }

.bp3-icon-git-branch::before{
  content:""; }

.bp3-icon-git-commit::before{
  content:""; }

.bp3-icon-git-merge::before{
  content:""; }

.bp3-icon-git-new-branch::before{
  content:""; }

.bp3-icon-git-pull::before{
  content:""; }

.bp3-icon-git-push::before{
  content:""; }

.bp3-icon-git-repo::before{
  content:""; }

.bp3-icon-glass::before{
  content:""; }

.bp3-icon-globe::before{
  content:""; }

.bp3-icon-globe-network::before{
  content:""; }

.bp3-icon-graph::before{
  content:""; }

.bp3-icon-graph-remove::before{
  content:""; }

.bp3-icon-greater-than::before{
  content:""; }

.bp3-icon-greater-than-or-equal-to::before{
  content:""; }

.bp3-icon-grid::before{
  content:""; }

.bp3-icon-grid-view::before{
  content:""; }

.bp3-icon-group-objects::before{
  content:""; }

.bp3-icon-grouped-bar-chart::before{
  content:""; }

.bp3-icon-hand::before{
  content:""; }

.bp3-icon-hand-down::before{
  content:""; }

.bp3-icon-hand-left::before{
  content:""; }

.bp3-icon-hand-right::before{
  content:""; }

.bp3-icon-hand-up::before{
  content:""; }

.bp3-icon-header::before{
  content:""; }

.bp3-icon-header-one::before{
  content:""; }

.bp3-icon-header-two::before{
  content:""; }

.bp3-icon-headset::before{
  content:""; }

.bp3-icon-heart::before{
  content:"♥"; }

.bp3-icon-heart-broken::before{
  content:""; }

.bp3-icon-heat-grid::before{
  content:""; }

.bp3-icon-heatmap::before{
  content:""; }

.bp3-icon-help::before{
  content:"?"; }

.bp3-icon-helper-management::before{
  content:""; }

.bp3-icon-highlight::before{
  content:""; }

.bp3-icon-history::before{
  content:""; }

.bp3-icon-home::before{
  content:"⌂"; }

.bp3-icon-horizontal-bar-chart::before{
  content:""; }

.bp3-icon-horizontal-bar-chart-asc::before{
  content:""; }

.bp3-icon-horizontal-bar-chart-desc::before{
  content:""; }

.bp3-icon-horizontal-distribution::before{
  content:""; }

.bp3-icon-id-number::before{
  content:""; }

.bp3-icon-image-rotate-left::before{
  content:""; }

.bp3-icon-image-rotate-right::before{
  content:""; }

.bp3-icon-import::before{
  content:""; }

.bp3-icon-inbox::before{
  content:""; }

.bp3-icon-inbox-filtered::before{
  content:""; }

.bp3-icon-inbox-geo::before{
  content:""; }

.bp3-icon-inbox-search::before{
  content:""; }

.bp3-icon-inbox-update::before{
  content:""; }

.bp3-icon-info-sign::before{
  content:"ℹ"; }

.bp3-icon-inheritance::before{
  content:""; }

.bp3-icon-inner-join::before{
  content:""; }

.bp3-icon-insert::before{
  content:""; }

.bp3-icon-intersection::before{
  content:""; }

.bp3-icon-ip-address::before{
  content:""; }

.bp3-icon-issue::before{
  content:""; }

.bp3-icon-issue-closed::before{
  content:""; }

.bp3-icon-issue-new::before{
  content:""; }

.bp3-icon-italic::before{
  content:""; }

.bp3-icon-join-table::before{
  content:""; }

.bp3-icon-key::before{
  content:""; }

.bp3-icon-key-backspace::before{
  content:""; }

.bp3-icon-key-command::before{
  content:""; }

.bp3-icon-key-control::before{
  content:""; }

.bp3-icon-key-delete::before{
  content:""; }

.bp3-icon-key-enter::before{
  content:""; }

.bp3-icon-key-escape::before{
  content:""; }

.bp3-icon-key-option::before{
  content:""; }

.bp3-icon-key-shift::before{
  content:""; }

.bp3-icon-key-tab::before{
  content:""; }

.bp3-icon-known-vehicle::before{
  content:""; }

.bp3-icon-label::before{
  content:""; }

.bp3-icon-layer::before{
  content:""; }

.bp3-icon-layers::before{
  content:""; }

.bp3-icon-layout::before{
  content:""; }

.bp3-icon-layout-auto::before{
  content:""; }

.bp3-icon-layout-balloon::before{
  content:""; }

.bp3-icon-layout-circle::before{
  content:""; }

.bp3-icon-layout-grid::before{
  content:""; }

.bp3-icon-layout-group-by::before{
  content:""; }

.bp3-icon-layout-hierarchy::before{
  content:""; }

.bp3-icon-layout-linear::before{
  content:""; }

.bp3-icon-layout-skew-grid::before{
  content:""; }

.bp3-icon-layout-sorted-clusters::before{
  content:""; }

.bp3-icon-learning::before{
  content:""; }

.bp3-icon-left-join::before{
  content:""; }

.bp3-icon-less-than::before{
  content:""; }

.bp3-icon-less-than-or-equal-to::before{
  content:""; }

.bp3-icon-lifesaver::before{
  content:""; }

.bp3-icon-lightbulb::before{
  content:""; }

.bp3-icon-link::before{
  content:""; }

.bp3-icon-list::before{
  content:"☰"; }

.bp3-icon-list-columns::before{
  content:""; }

.bp3-icon-list-detail-view::before{
  content:""; }

.bp3-icon-locate::before{
  content:""; }

.bp3-icon-lock::before{
  content:""; }

.bp3-icon-log-in::before{
  content:""; }

.bp3-icon-log-out::before{
  content:""; }

.bp3-icon-manual::before{
  content:""; }

.bp3-icon-manually-entered-data::before{
  content:""; }

.bp3-icon-map::before{
  content:""; }

.bp3-icon-map-create::before{
  content:""; }

.bp3-icon-map-marker::before{
  content:""; }

.bp3-icon-maximize::before{
  content:""; }

.bp3-icon-media::before{
  content:""; }

.bp3-icon-menu::before{
  content:""; }

.bp3-icon-menu-closed::before{
  content:""; }

.bp3-icon-menu-open::before{
  content:""; }

.bp3-icon-merge-columns::before{
  content:""; }

.bp3-icon-merge-links::before{
  content:""; }

.bp3-icon-minimize::before{
  content:""; }

.bp3-icon-minus::before{
  content:"−"; }

.bp3-icon-mobile-phone::before{
  content:""; }

.bp3-icon-mobile-video::before{
  content:""; }

.bp3-icon-moon::before{
  content:""; }

.bp3-icon-more::before{
  content:""; }

.bp3-icon-mountain::before{
  content:""; }

.bp3-icon-move::before{
  content:""; }

.bp3-icon-mugshot::before{
  content:""; }

.bp3-icon-multi-select::before{
  content:""; }

.bp3-icon-music::before{
  content:""; }

.bp3-icon-new-drawing::before{
  content:""; }

.bp3-icon-new-grid-item::before{
  content:""; }

.bp3-icon-new-layer::before{
  content:""; }

.bp3-icon-new-layers::before{
  content:""; }

.bp3-icon-new-link::before{
  content:""; }

.bp3-icon-new-object::before{
  content:""; }

.bp3-icon-new-person::before{
  content:""; }

.bp3-icon-new-prescription::before{
  content:""; }

.bp3-icon-new-text-box::before{
  content:""; }

.bp3-icon-ninja::before{
  content:""; }

.bp3-icon-not-equal-to::before{
  content:""; }

.bp3-icon-notifications::before{
  content:""; }

.bp3-icon-notifications-updated::before{
  content:""; }

.bp3-icon-numbered-list::before{
  content:""; }

.bp3-icon-numerical::before{
  content:""; }

.bp3-icon-office::before{
  content:""; }

.bp3-icon-offline::before{
  content:""; }

.bp3-icon-oil-field::before{
  content:""; }

.bp3-icon-one-column::before{
  content:""; }

.bp3-icon-outdated::before{
  content:""; }

.bp3-icon-page-layout::before{
  content:""; }

.bp3-icon-panel-stats::before{
  content:""; }

.bp3-icon-panel-table::before{
  content:""; }

.bp3-icon-paperclip::before{
  content:""; }

.bp3-icon-paragraph::before{
  content:""; }

.bp3-icon-path::before{
  content:""; }

.bp3-icon-path-search::before{
  content:""; }

.bp3-icon-pause::before{
  content:""; }

.bp3-icon-people::before{
  content:""; }

.bp3-icon-percentage::before{
  content:""; }

.bp3-icon-person::before{
  content:""; }

.bp3-icon-phone::before{
  content:"☎"; }

.bp3-icon-pie-chart::before{
  content:""; }

.bp3-icon-pin::before{
  content:""; }

.bp3-icon-pivot::before{
  content:""; }

.bp3-icon-pivot-table::before{
  content:""; }

.bp3-icon-play::before{
  content:""; }

.bp3-icon-plus::before{
  content:"+"; }

.bp3-icon-polygon-filter::before{
  content:""; }

.bp3-icon-power::before{
  content:""; }

.bp3-icon-predictive-analysis::before{
  content:""; }

.bp3-icon-prescription::before{
  content:""; }

.bp3-icon-presentation::before{
  content:""; }

.bp3-icon-print::before{
  content:"⎙"; }

.bp3-icon-projects::before{
  content:""; }

.bp3-icon-properties::before{
  content:""; }

.bp3-icon-property::before{
  content:""; }

.bp3-icon-publish-function::before{
  content:""; }

.bp3-icon-pulse::before{
  content:""; }

.bp3-icon-random::before{
  content:""; }

.bp3-icon-record::before{
  content:""; }

.bp3-icon-redo::before{
  content:""; }

.bp3-icon-refresh::before{
  content:""; }

.bp3-icon-regression-chart::before{
  content:""; }

.bp3-icon-remove::before{
  content:""; }

.bp3-icon-remove-column::before{
  content:""; }

.bp3-icon-remove-column-left::before{
  content:""; }

.bp3-icon-remove-column-right::before{
  content:""; }

.bp3-icon-remove-row-bottom::before{
  content:""; }

.bp3-icon-remove-row-top::before{
  content:""; }

.bp3-icon-repeat::before{
  content:""; }

.bp3-icon-reset::before{
  content:""; }

.bp3-icon-resolve::before{
  content:""; }

.bp3-icon-rig::before{
  content:""; }

.bp3-icon-right-join::before{
  content:""; }

.bp3-icon-ring::before{
  content:""; }

.bp3-icon-rotate-document::before{
  content:""; }

.bp3-icon-rotate-page::before{
  content:""; }

.bp3-icon-satellite::before{
  content:""; }

.bp3-icon-saved::before{
  content:""; }

.bp3-icon-scatter-plot::before{
  content:""; }

.bp3-icon-search::before{
  content:""; }

.bp3-icon-search-around::before{
  content:""; }

.bp3-icon-search-template::before{
  content:""; }

.bp3-icon-search-text::before{
  content:""; }

.bp3-icon-segmented-control::before{
  content:""; }

.bp3-icon-select::before{
  content:""; }

.bp3-icon-selection::before{
  content:"⦿"; }

.bp3-icon-send-to::before{
  content:""; }

.bp3-icon-send-to-graph::before{
  content:""; }

.bp3-icon-send-to-map::before{
  content:""; }

.bp3-icon-series-add::before{
  content:""; }

.bp3-icon-series-configuration::before{
  content:""; }

.bp3-icon-series-derived::before{
  content:""; }

.bp3-icon-series-filtered::before{
  content:""; }

.bp3-icon-series-search::before{
  content:""; }

.bp3-icon-settings::before{
  content:""; }

.bp3-icon-share::before{
  content:""; }

.bp3-icon-shield::before{
  content:""; }

.bp3-icon-shop::before{
  content:""; }

.bp3-icon-shopping-cart::before{
  content:""; }

.bp3-icon-signal-search::before{
  content:""; }

.bp3-icon-sim-card::before{
  content:""; }

.bp3-icon-slash::before{
  content:""; }

.bp3-icon-small-cross::before{
  content:""; }

.bp3-icon-small-minus::before{
  content:""; }

.bp3-icon-small-plus::before{
  content:""; }

.bp3-icon-small-tick::before{
  content:""; }

.bp3-icon-snowflake::before{
  content:""; }

.bp3-icon-social-media::before{
  content:""; }

.bp3-icon-sort::before{
  content:""; }

.bp3-icon-sort-alphabetical::before{
  content:""; }

.bp3-icon-sort-alphabetical-desc::before{
  content:""; }

.bp3-icon-sort-asc::before{
  content:""; }

.bp3-icon-sort-desc::before{
  content:""; }

.bp3-icon-sort-numerical::before{
  content:""; }

.bp3-icon-sort-numerical-desc::before{
  content:""; }

.bp3-icon-split-columns::before{
  content:""; }

.bp3-icon-square::before{
  content:""; }

.bp3-icon-stacked-chart::before{
  content:""; }

.bp3-icon-star::before{
  content:"★"; }

.bp3-icon-star-empty::before{
  content:"☆"; }

.bp3-icon-step-backward::before{
  content:""; }

.bp3-icon-step-chart::before{
  content:""; }

.bp3-icon-step-forward::before{
  content:""; }

.bp3-icon-stop::before{
  content:""; }

.bp3-icon-stopwatch::before{
  content:""; }

.bp3-icon-strikethrough::before{
  content:""; }

.bp3-icon-style::before{
  content:""; }

.bp3-icon-swap-horizontal::before{
  content:""; }

.bp3-icon-swap-vertical::before{
  content:""; }

.bp3-icon-symbol-circle::before{
  content:""; }

.bp3-icon-symbol-cross::before{
  content:""; }

.bp3-icon-symbol-diamond::before{
  content:""; }

.bp3-icon-symbol-square::before{
  content:""; }

.bp3-icon-symbol-triangle-down::before{
  content:""; }

.bp3-icon-symbol-triangle-up::before{
  content:""; }

.bp3-icon-tag::before{
  content:""; }

.bp3-icon-take-action::before{
  content:""; }

.bp3-icon-taxi::before{
  content:""; }

.bp3-icon-text-highlight::before{
  content:""; }

.bp3-icon-th::before{
  content:""; }

.bp3-icon-th-derived::before{
  content:""; }

.bp3-icon-th-disconnect::before{
  content:""; }

.bp3-icon-th-filtered::before{
  content:""; }

.bp3-icon-th-list::before{
  content:""; }

.bp3-icon-thumbs-down::before{
  content:""; }

.bp3-icon-thumbs-up::before{
  content:""; }

.bp3-icon-tick::before{
  content:"✓"; }

.bp3-icon-tick-circle::before{
  content:""; }

.bp3-icon-time::before{
  content:"⏲"; }

.bp3-icon-timeline-area-chart::before{
  content:""; }

.bp3-icon-timeline-bar-chart::before{
  content:""; }

.bp3-icon-timeline-events::before{
  content:""; }

.bp3-icon-timeline-line-chart::before{
  content:""; }

.bp3-icon-tint::before{
  content:""; }

.bp3-icon-torch::before{
  content:""; }

.bp3-icon-tractor::before{
  content:""; }

.bp3-icon-train::before{
  content:""; }

.bp3-icon-translate::before{
  content:""; }

.bp3-icon-trash::before{
  content:""; }

.bp3-icon-tree::before{
  content:""; }

.bp3-icon-trending-down::before{
  content:""; }

.bp3-icon-trending-up::before{
  content:""; }

.bp3-icon-truck::before{
  content:""; }

.bp3-icon-two-columns::before{
  content:""; }

.bp3-icon-unarchive::before{
  content:""; }

.bp3-icon-underline::before{
  content:"⎁"; }

.bp3-icon-undo::before{
  content:"⎌"; }

.bp3-icon-ungroup-objects::before{
  content:""; }

.bp3-icon-unknown-vehicle::before{
  content:""; }

.bp3-icon-unlock::before{
  content:""; }

.bp3-icon-unpin::before{
  content:""; }

.bp3-icon-unresolve::before{
  content:""; }

.bp3-icon-updated::before{
  content:""; }

.bp3-icon-upload::before{
  content:""; }

.bp3-icon-user::before{
  content:""; }

.bp3-icon-variable::before{
  content:""; }

.bp3-icon-vertical-bar-chart-asc::before{
  content:""; }

.bp3-icon-vertical-bar-chart-desc::before{
  content:""; }

.bp3-icon-vertical-distribution::before{
  content:""; }

.bp3-icon-video::before{
  content:""; }

.bp3-icon-volume-down::before{
  content:""; }

.bp3-icon-volume-off::before{
  content:""; }

.bp3-icon-volume-up::before{
  content:""; }

.bp3-icon-walk::before{
  content:""; }

.bp3-icon-warning-sign::before{
  content:""; }

.bp3-icon-waterfall-chart::before{
  content:""; }

.bp3-icon-widget::before{
  content:""; }

.bp3-icon-widget-button::before{
  content:""; }

.bp3-icon-widget-footer::before{
  content:""; }

.bp3-icon-widget-header::before{
  content:""; }

.bp3-icon-wrench::before{
  content:""; }

.bp3-icon-zoom-in::before{
  content:""; }

.bp3-icon-zoom-out::before{
  content:""; }

.bp3-icon-zoom-to-fit::before{
  content:""; }
.bp3-submenu > .bp3-popover-wrapper{
  display:block; }

.bp3-submenu .bp3-popover-target{
  display:block; }

.bp3-submenu.bp3-popover{
  -webkit-box-shadow:none;
          box-shadow:none;
  padding:0 5px; }
  .bp3-submenu.bp3-popover > .bp3-popover-content{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-submenu.bp3-popover, .bp3-submenu.bp3-popover.bp3-dark{
    -webkit-box-shadow:none;
            box-shadow:none; }
    .bp3-dark .bp3-submenu.bp3-popover > .bp3-popover-content, .bp3-submenu.bp3-popover.bp3-dark > .bp3-popover-content{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
.bp3-menu{
  margin:0;
  border-radius:3px;
  background:#ffffff;
  min-width:180px;
  padding:5px;
  list-style:none;
  text-align:left;
  color:#182026; }

.bp3-menu-divider{
  display:block;
  margin:5px;
  border-top:1px solid rgba(16, 22, 26, 0.15); }
  .bp3-dark .bp3-menu-divider{
    border-top-color:rgba(255, 255, 255, 0.15); }

.bp3-menu-item{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:start;
      -ms-flex-align:start;
          align-items:flex-start;
  border-radius:2px;
  padding:5px 7px;
  text-decoration:none;
  line-height:20px;
  color:inherit;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-menu-item > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-menu-item > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-menu-item::before,
  .bp3-menu-item > *{
    margin-right:7px; }
  .bp3-menu-item:empty::before,
  .bp3-menu-item > :last-child{
    margin-right:0; }
  .bp3-menu-item > .bp3-fill{
    word-break:break-word; }
  .bp3-menu-item:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
    background-color:rgba(167, 182, 194, 0.3);
    cursor:pointer;
    text-decoration:none; }
  .bp3-menu-item.bp3-disabled{
    background-color:inherit;
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-dark .bp3-menu-item{
    color:inherit; }
    .bp3-dark .bp3-menu-item:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
      background-color:rgba(138, 155, 168, 0.15);
      color:inherit; }
    .bp3-dark .bp3-menu-item.bp3-disabled{
      background-color:inherit;
      color:rgba(167, 182, 194, 0.6); }
  .bp3-menu-item.bp3-intent-primary{
    color:#106ba3; }
    .bp3-menu-item.bp3-intent-primary .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-primary::before, .bp3-menu-item.bp3-intent-primary::after,
    .bp3-menu-item.bp3-intent-primary .bp3-menu-item-label{
      color:#106ba3; }
    .bp3-menu-item.bp3-intent-primary:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-menu-item.bp3-intent-primary.bp3-active{
      background-color:#137cbd; }
    .bp3-menu-item.bp3-intent-primary:active{
      background-color:#106ba3; }
    .bp3-menu-item.bp3-intent-primary:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-menu-item.bp3-intent-primary:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-menu-item.bp3-intent-primary:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-primary:active, .bp3-menu-item.bp3-intent-primary:active::before, .bp3-menu-item.bp3-intent-primary:active::after,
    .bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-primary.bp3-active, .bp3-menu-item.bp3-intent-primary.bp3-active::before, .bp3-menu-item.bp3-intent-primary.bp3-active::after,
    .bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item.bp3-intent-success{
    color:#0d8050; }
    .bp3-menu-item.bp3-intent-success .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-success::before, .bp3-menu-item.bp3-intent-success::after,
    .bp3-menu-item.bp3-intent-success .bp3-menu-item-label{
      color:#0d8050; }
    .bp3-menu-item.bp3-intent-success:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-menu-item.bp3-intent-success.bp3-active{
      background-color:#0f9960; }
    .bp3-menu-item.bp3-intent-success:active{
      background-color:#0d8050; }
    .bp3-menu-item.bp3-intent-success:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-menu-item.bp3-intent-success:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-menu-item.bp3-intent-success:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-success:active, .bp3-menu-item.bp3-intent-success:active::before, .bp3-menu-item.bp3-intent-success:active::after,
    .bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-success.bp3-active, .bp3-menu-item.bp3-intent-success.bp3-active::before, .bp3-menu-item.bp3-intent-success.bp3-active::after,
    .bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item.bp3-intent-warning{
    color:#bf7326; }
    .bp3-menu-item.bp3-intent-warning .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-warning::before, .bp3-menu-item.bp3-intent-warning::after,
    .bp3-menu-item.bp3-intent-warning .bp3-menu-item-label{
      color:#bf7326; }
    .bp3-menu-item.bp3-intent-warning:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-menu-item.bp3-intent-warning.bp3-active{
      background-color:#d9822b; }
    .bp3-menu-item.bp3-intent-warning:active{
      background-color:#bf7326; }
    .bp3-menu-item.bp3-intent-warning:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-menu-item.bp3-intent-warning:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-menu-item.bp3-intent-warning:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-warning:active, .bp3-menu-item.bp3-intent-warning:active::before, .bp3-menu-item.bp3-intent-warning:active::after,
    .bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-warning.bp3-active, .bp3-menu-item.bp3-intent-warning.bp3-active::before, .bp3-menu-item.bp3-intent-warning.bp3-active::after,
    .bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item.bp3-intent-danger{
    color:#c23030; }
    .bp3-menu-item.bp3-intent-danger .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-danger::before, .bp3-menu-item.bp3-intent-danger::after,
    .bp3-menu-item.bp3-intent-danger .bp3-menu-item-label{
      color:#c23030; }
    .bp3-menu-item.bp3-intent-danger:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-menu-item.bp3-intent-danger.bp3-active{
      background-color:#db3737; }
    .bp3-menu-item.bp3-intent-danger:active{
      background-color:#c23030; }
    .bp3-menu-item.bp3-intent-danger:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-menu-item.bp3-intent-danger:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-menu-item.bp3-intent-danger:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-danger:active, .bp3-menu-item.bp3-intent-danger:active::before, .bp3-menu-item.bp3-intent-danger:active::after,
    .bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-danger.bp3-active, .bp3-menu-item.bp3-intent-danger.bp3-active::before, .bp3-menu-item.bp3-intent-danger.bp3-active::after,
    .bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item::before{
    line-height:1;
    font-family:"Icons16", sans-serif;
    font-size:16px;
    font-weight:400;
    font-style:normal;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    margin-right:7px; }
  .bp3-menu-item::before,
  .bp3-menu-item > .bp3-icon{
    margin-top:2px;
    color:#5c7080; }
  .bp3-menu-item .bp3-menu-item-label{
    color:#5c7080; }
  .bp3-menu-item:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
    color:inherit; }
  .bp3-menu-item.bp3-active, .bp3-menu-item:active{
    background-color:rgba(115, 134, 148, 0.3); }
  .bp3-menu-item.bp3-disabled{
    outline:none !important;
    background-color:inherit !important;
    cursor:not-allowed !important;
    color:rgba(92, 112, 128, 0.6) !important; }
    .bp3-menu-item.bp3-disabled::before,
    .bp3-menu-item.bp3-disabled > .bp3-icon,
    .bp3-menu-item.bp3-disabled .bp3-menu-item-label{
      color:rgba(92, 112, 128, 0.6) !important; }
  .bp3-large .bp3-menu-item{
    padding:9px 7px;
    line-height:22px;
    font-size:16px; }
    .bp3-large .bp3-menu-item .bp3-icon{
      margin-top:3px; }
    .bp3-large .bp3-menu-item::before{
      line-height:1;
      font-family:"Icons20", sans-serif;
      font-size:20px;
      font-weight:400;
      font-style:normal;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased;
      margin-top:1px;
      margin-right:10px; }

button.bp3-menu-item{
  border:none;
  background:none;
  width:100%;
  text-align:left; }
.bp3-menu-header{
  display:block;
  margin:5px;
  border-top:1px solid rgba(16, 22, 26, 0.15);
  cursor:default;
  padding-left:2px; }
  .bp3-dark .bp3-menu-header{
    border-top-color:rgba(255, 255, 255, 0.15); }
  .bp3-menu-header:first-of-type{
    border-top:none; }
  .bp3-menu-header > h6{
    color:#182026;
    font-weight:600;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    margin:0;
    padding:10px 7px 0 1px;
    line-height:17px; }
    .bp3-dark .bp3-menu-header > h6{
      color:#f5f8fa; }
  .bp3-menu-header:first-of-type > h6{
    padding-top:0; }
  .bp3-large .bp3-menu-header > h6{
    padding-top:15px;
    padding-bottom:5px;
    font-size:18px; }
  .bp3-large .bp3-menu-header:first-of-type > h6{
    padding-top:0; }

.bp3-dark .bp3-menu{
  background:#30404d;
  color:#f5f8fa; }

.bp3-dark .bp3-menu-item.bp3-intent-primary{
  color:#48aff0; }
  .bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-icon{
    color:inherit; }
  .bp3-dark .bp3-menu-item.bp3-intent-primary::before, .bp3-dark .bp3-menu-item.bp3-intent-primary::after,
  .bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-menu-item-label{
    color:#48aff0; }
  .bp3-dark .bp3-menu-item.bp3-intent-primary:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active{
    background-color:#137cbd; }
  .bp3-dark .bp3-menu-item.bp3-intent-primary:active{
    background-color:#106ba3; }
  .bp3-dark .bp3-menu-item.bp3-intent-primary:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-primary:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-primary:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,
  .bp3-dark .bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,
  .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label,
  .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-primary:active, .bp3-dark .bp3-menu-item.bp3-intent-primary:active::before, .bp3-dark .bp3-menu-item.bp3-intent-primary:active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label{
    color:#ffffff; }

.bp3-dark .bp3-menu-item.bp3-intent-success{
  color:#3dcc91; }
  .bp3-dark .bp3-menu-item.bp3-intent-success .bp3-icon{
    color:inherit; }
  .bp3-dark .bp3-menu-item.bp3-intent-success::before, .bp3-dark .bp3-menu-item.bp3-intent-success::after,
  .bp3-dark .bp3-menu-item.bp3-intent-success .bp3-menu-item-label{
    color:#3dcc91; }
  .bp3-dark .bp3-menu-item.bp3-intent-success:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active{
    background-color:#0f9960; }
  .bp3-dark .bp3-menu-item.bp3-intent-success:active{
    background-color:#0d8050; }
  .bp3-dark .bp3-menu-item.bp3-intent-success:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-success:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-success:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,
  .bp3-dark .bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,
  .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label,
  .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-success:active, .bp3-dark .bp3-menu-item.bp3-intent-success:active::before, .bp3-dark .bp3-menu-item.bp3-intent-success:active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label{
    color:#ffffff; }

.bp3-dark .bp3-menu-item.bp3-intent-warning{
  color:#ffb366; }
  .bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-icon{
    color:inherit; }
  .bp3-dark .bp3-menu-item.bp3-intent-warning::before, .bp3-dark .bp3-menu-item.bp3-intent-warning::after,
  .bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-menu-item-label{
    color:#ffb366; }
  .bp3-dark .bp3-menu-item.bp3-intent-warning:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active{
    background-color:#d9822b; }
  .bp3-dark .bp3-menu-item.bp3-intent-warning:active{
    background-color:#bf7326; }
  .bp3-dark .bp3-menu-item.bp3-intent-warning:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-warning:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-warning:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,
  .bp3-dark .bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,
  .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label,
  .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-warning:active, .bp3-dark .bp3-menu-item.bp3-intent-warning:active::before, .bp3-dark .bp3-menu-item.bp3-intent-warning:active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label{
    color:#ffffff; }

.bp3-dark .bp3-menu-item.bp3-intent-danger{
  color:#ff7373; }
  .bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-icon{
    color:inherit; }
  .bp3-dark .bp3-menu-item.bp3-intent-danger::before, .bp3-dark .bp3-menu-item.bp3-intent-danger::after,
  .bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-menu-item-label{
    color:#ff7373; }
  .bp3-dark .bp3-menu-item.bp3-intent-danger:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active{
    background-color:#db3737; }
  .bp3-dark .bp3-menu-item.bp3-intent-danger:active{
    background-color:#c23030; }
  .bp3-dark .bp3-menu-item.bp3-intent-danger:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-danger:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-danger:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,
  .bp3-dark .bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,
  .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label,
  .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-danger:active, .bp3-dark .bp3-menu-item.bp3-intent-danger:active::before, .bp3-dark .bp3-menu-item.bp3-intent-danger:active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label{
    color:#ffffff; }

.bp3-dark .bp3-menu-item::before,
.bp3-dark .bp3-menu-item > .bp3-icon{
  color:#a7b6c2; }

.bp3-dark .bp3-menu-item .bp3-menu-item-label{
  color:#a7b6c2; }

.bp3-dark .bp3-menu-item.bp3-active, .bp3-dark .bp3-menu-item:active{
  background-color:rgba(138, 155, 168, 0.3); }

.bp3-dark .bp3-menu-item.bp3-disabled{
  color:rgba(167, 182, 194, 0.6) !important; }
  .bp3-dark .bp3-menu-item.bp3-disabled::before,
  .bp3-dark .bp3-menu-item.bp3-disabled > .bp3-icon,
  .bp3-dark .bp3-menu-item.bp3-disabled .bp3-menu-item-label{
    color:rgba(167, 182, 194, 0.6) !important; }

.bp3-dark .bp3-menu-divider,
.bp3-dark .bp3-menu-header{
  border-color:rgba(255, 255, 255, 0.15); }

.bp3-dark .bp3-menu-header > h6{
  color:#f5f8fa; }

.bp3-label .bp3-menu{
  margin-top:5px; }
.bp3-navbar{
  position:relative;
  z-index:10;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
  background-color:#ffffff;
  width:100%;
  height:50px;
  padding:0 15px; }
  .bp3-navbar.bp3-dark,
  .bp3-dark .bp3-navbar{
    background-color:#394b59; }
  .bp3-navbar.bp3-dark{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-navbar{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-navbar.bp3-fixed-top{
    position:fixed;
    top:0;
    right:0;
    left:0; }

.bp3-navbar-heading{
  margin-right:15px;
  font-size:16px; }

.bp3-navbar-group{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  height:50px; }
  .bp3-navbar-group.bp3-align-left{
    float:left; }
  .bp3-navbar-group.bp3-align-right{
    float:right; }

.bp3-navbar-divider{
  margin:0 10px;
  border-left:1px solid rgba(16, 22, 26, 0.15);
  height:20px; }
  .bp3-dark .bp3-navbar-divider{
    border-left-color:rgba(255, 255, 255, 0.15); }
.bp3-non-ideal-state{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  width:100%;
  height:100%;
  text-align:center; }
  .bp3-non-ideal-state > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-non-ideal-state > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-non-ideal-state::before,
  .bp3-non-ideal-state > *{
    margin-bottom:20px; }
  .bp3-non-ideal-state:empty::before,
  .bp3-non-ideal-state > :last-child{
    margin-bottom:0; }
  .bp3-non-ideal-state > *{
    max-width:400px; }

.bp3-non-ideal-state-visual{
  color:rgba(92, 112, 128, 0.6);
  font-size:60px; }
  .bp3-dark .bp3-non-ideal-state-visual{
    color:rgba(167, 182, 194, 0.6); }

.bp3-overflow-list{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  min-width:0; }

.bp3-overflow-list-spacer{
  -ms-flex-negative:1;
      flex-shrink:1;
  width:1px; }

body.bp3-overlay-open{
  overflow:hidden; }

.bp3-overlay{
  position:static;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index:20; }
  .bp3-overlay:not(.bp3-overlay-open){
    pointer-events:none; }
  .bp3-overlay.bp3-overlay-container{
    position:fixed;
    overflow:hidden; }
    .bp3-overlay.bp3-overlay-container.bp3-overlay-inline{
      position:absolute; }
  .bp3-overlay.bp3-overlay-scroll-container{
    position:fixed;
    overflow:auto; }
    .bp3-overlay.bp3-overlay-scroll-container.bp3-overlay-inline{
      position:absolute; }
  .bp3-overlay.bp3-overlay-inline{
    display:inline;
    overflow:visible; }

.bp3-overlay-content{
  position:fixed;
  z-index:20; }
  .bp3-overlay-inline .bp3-overlay-content,
  .bp3-overlay-scroll-container .bp3-overlay-content{
    position:absolute; }

.bp3-overlay-backdrop{
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  opacity:1;
  z-index:20;
  background-color:rgba(16, 22, 26, 0.7);
  overflow:auto;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-overlay-backdrop.bp3-overlay-enter, .bp3-overlay-backdrop.bp3-overlay-appear{
    opacity:0; }
  .bp3-overlay-backdrop.bp3-overlay-enter-active, .bp3-overlay-backdrop.bp3-overlay-appear-active{
    opacity:1;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-overlay-backdrop.bp3-overlay-exit{
    opacity:1; }
  .bp3-overlay-backdrop.bp3-overlay-exit-active{
    opacity:0;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-overlay-backdrop:focus{
    outline:none; }
  .bp3-overlay-inline .bp3-overlay-backdrop{
    position:absolute; }
.bp3-panel-stack{
  position:relative;
  overflow:hidden; }

.bp3-panel-stack-header{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-negative:0;
      flex-shrink:0;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  z-index:1;
  -webkit-box-shadow:0 1px rgba(16, 22, 26, 0.15);
          box-shadow:0 1px rgba(16, 22, 26, 0.15);
  height:30px; }
  .bp3-dark .bp3-panel-stack-header{
    -webkit-box-shadow:0 1px rgba(255, 255, 255, 0.15);
            box-shadow:0 1px rgba(255, 255, 255, 0.15); }
  .bp3-panel-stack-header > span{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-flex:1;
        -ms-flex:1;
            flex:1;
    -webkit-box-align:stretch;
        -ms-flex-align:stretch;
            align-items:stretch; }
  .bp3-panel-stack-header .bp3-heading{
    margin:0 5px; }

.bp3-button.bp3-panel-stack-header-back{
  margin-left:5px;
  padding-left:0;
  white-space:nowrap; }
  .bp3-button.bp3-panel-stack-header-back .bp3-icon{
    margin:0 2px; }

.bp3-panel-stack-view{
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin-right:-1px;
  border-right:1px solid rgba(16, 22, 26, 0.15);
  background-color:#ffffff;
  overflow-y:auto; }
  .bp3-dark .bp3-panel-stack-view{
    background-color:#30404d; }

.bp3-panel-stack-push .bp3-panel-stack-enter, .bp3-panel-stack-push .bp3-panel-stack-appear{
  -webkit-transform:translateX(100%);
          transform:translateX(100%);
  opacity:0; }

.bp3-panel-stack-push .bp3-panel-stack-enter-active, .bp3-panel-stack-push .bp3-panel-stack-appear-active{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease;
  -webkit-transition-delay:0;
          transition-delay:0; }

.bp3-panel-stack-push .bp3-panel-stack-exit{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1; }

.bp3-panel-stack-push .bp3-panel-stack-exit-active{
  -webkit-transform:translateX(-50%);
          transform:translateX(-50%);
  opacity:0;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease;
  -webkit-transition-delay:0;
          transition-delay:0; }

.bp3-panel-stack-pop .bp3-panel-stack-enter, .bp3-panel-stack-pop .bp3-panel-stack-appear{
  -webkit-transform:translateX(-50%);
          transform:translateX(-50%);
  opacity:0; }

.bp3-panel-stack-pop .bp3-panel-stack-enter-active, .bp3-panel-stack-pop .bp3-panel-stack-appear-active{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease;
  -webkit-transition-delay:0;
          transition-delay:0; }

.bp3-panel-stack-pop .bp3-panel-stack-exit{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1; }

.bp3-panel-stack-pop .bp3-panel-stack-exit-active{
  -webkit-transform:translateX(100%);
          transform:translateX(100%);
  opacity:0;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease;
  -webkit-transition-delay:0;
          transition-delay:0; }
.bp3-popover{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  -webkit-transform:scale(1);
          transform:scale(1);
  display:inline-block;
  z-index:20;
  border-radius:3px; }
  .bp3-popover .bp3-popover-arrow{
    position:absolute;
    width:30px;
    height:30px; }
    .bp3-popover .bp3-popover-arrow::before{
      margin:5px;
      width:20px;
      height:20px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover{
    margin-top:-17px;
    margin-bottom:17px; }
    .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow{
      bottom:-11px; }
      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(-90deg);
                transform:rotate(-90deg); }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover{
    margin-left:17px; }
    .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow{
      left:-11px; }
      .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(0);
                transform:rotate(0); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover{
    margin-top:17px; }
    .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow{
      top:-11px; }
      .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(90deg);
                transform:rotate(90deg); }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover{
    margin-right:17px;
    margin-left:-17px; }
    .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow{
      right:-11px; }
      .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(180deg);
                transform:rotate(180deg); }
  .bp3-tether-element-attached-middle > .bp3-popover > .bp3-popover-arrow{
    top:50%;
    -webkit-transform:translateY(-50%);
            transform:translateY(-50%); }
  .bp3-tether-element-attached-center > .bp3-popover > .bp3-popover-arrow{
    right:50%;
    -webkit-transform:translateX(50%);
            transform:translateX(50%); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow{
    top:-0.3934px; }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow{
    right:-0.3934px; }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow{
    left:-0.3934px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow{
    bottom:-0.3934px; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-popover{
    -webkit-transform-origin:top left;
            transform-origin:top left; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-popover{
    -webkit-transform-origin:top center;
            transform-origin:top center; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-popover{
    -webkit-transform-origin:top right;
            transform-origin:top right; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-popover{
    -webkit-transform-origin:center left;
            transform-origin:center left; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-popover{
    -webkit-transform-origin:center center;
            transform-origin:center center; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-popover{
    -webkit-transform-origin:center right;
            transform-origin:center right; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-popover{
    -webkit-transform-origin:bottom left;
            transform-origin:bottom left; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-popover{
    -webkit-transform-origin:bottom center;
            transform-origin:bottom center; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-popover{
    -webkit-transform-origin:bottom right;
            transform-origin:bottom right; }
  .bp3-popover .bp3-popover-content{
    background:#ffffff;
    color:inherit; }
  .bp3-popover .bp3-popover-arrow::before{
    -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2);
            box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2); }
  .bp3-popover .bp3-popover-arrow-border{
    fill:#10161a;
    fill-opacity:0.1; }
  .bp3-popover .bp3-popover-arrow-fill{
    fill:#ffffff; }
  .bp3-popover-enter > .bp3-popover, .bp3-popover-appear > .bp3-popover{
    -webkit-transform:scale(0.3);
            transform:scale(0.3); }
  .bp3-popover-enter-active > .bp3-popover, .bp3-popover-appear-active > .bp3-popover{
    -webkit-transform:scale(1);
            transform:scale(1);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-popover-exit > .bp3-popover{
    -webkit-transform:scale(1);
            transform:scale(1); }
  .bp3-popover-exit-active > .bp3-popover{
    -webkit-transform:scale(0.3);
            transform:scale(0.3);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-popover .bp3-popover-content{
    position:relative;
    border-radius:3px; }
  .bp3-popover.bp3-popover-content-sizing .bp3-popover-content{
    max-width:350px;
    padding:20px; }
  .bp3-popover-target + .bp3-overlay .bp3-popover.bp3-popover-content-sizing{
    width:350px; }
  .bp3-popover.bp3-minimal{
    margin:0 !important; }
    .bp3-popover.bp3-minimal .bp3-popover-arrow{
      display:none; }
    .bp3-popover.bp3-minimal.bp3-popover{
      -webkit-transform:scale(1);
              transform:scale(1); }
      .bp3-popover-enter > .bp3-popover.bp3-minimal.bp3-popover, .bp3-popover-appear > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1); }
      .bp3-popover-enter-active > .bp3-popover.bp3-minimal.bp3-popover, .bp3-popover-appear-active > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1);
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-duration:100ms;
                transition-duration:100ms;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
        -webkit-transition-delay:0;
                transition-delay:0; }
      .bp3-popover-exit > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1); }
      .bp3-popover-exit-active > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1);
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-duration:100ms;
                transition-duration:100ms;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
        -webkit-transition-delay:0;
                transition-delay:0; }
  .bp3-popover.bp3-dark,
  .bp3-dark .bp3-popover{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
    .bp3-popover.bp3-dark .bp3-popover-content,
    .bp3-dark .bp3-popover .bp3-popover-content{
      background:#30404d;
      color:inherit; }
    .bp3-popover.bp3-dark .bp3-popover-arrow::before,
    .bp3-dark .bp3-popover .bp3-popover-arrow::before{
      -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4);
              box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4); }
    .bp3-popover.bp3-dark .bp3-popover-arrow-border,
    .bp3-dark .bp3-popover .bp3-popover-arrow-border{
      fill:#10161a;
      fill-opacity:0.2; }
    .bp3-popover.bp3-dark .bp3-popover-arrow-fill,
    .bp3-dark .bp3-popover .bp3-popover-arrow-fill{
      fill:#30404d; }

.bp3-popover-arrow::before{
  display:block;
  position:absolute;
  -webkit-transform:rotate(45deg);
          transform:rotate(45deg);
  border-radius:2px;
  content:""; }

.bp3-tether-pinned .bp3-popover-arrow{
  display:none; }

.bp3-popover-backdrop{
  background:rgba(255, 255, 255, 0); }

.bp3-transition-container{
  opacity:1;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  z-index:20; }
  .bp3-transition-container.bp3-popover-enter, .bp3-transition-container.bp3-popover-appear{
    opacity:0; }
  .bp3-transition-container.bp3-popover-enter-active, .bp3-transition-container.bp3-popover-appear-active{
    opacity:1;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-transition-container.bp3-popover-exit{
    opacity:1; }
  .bp3-transition-container.bp3-popover-exit-active{
    opacity:0;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-transition-container:focus{
    outline:none; }
  .bp3-transition-container.bp3-popover-leave .bp3-popover-content{
    pointer-events:none; }
  .bp3-transition-container[data-x-out-of-boundaries]{
    display:none; }

span.bp3-popover-target{
  display:inline-block; }

.bp3-popover-wrapper.bp3-fill{
  width:100%; }

.bp3-portal{
  position:absolute;
  top:0;
  right:0;
  left:0; }
@-webkit-keyframes linear-progress-bar-stripes{
  from{
    background-position:0 0; }
  to{
    background-position:30px 0; } }
@keyframes linear-progress-bar-stripes{
  from{
    background-position:0 0; }
  to{
    background-position:30px 0; } }

.bp3-progress-bar{
  display:block;
  position:relative;
  border-radius:40px;
  background:rgba(92, 112, 128, 0.2);
  width:100%;
  height:8px;
  overflow:hidden; }
  .bp3-progress-bar .bp3-progress-meter{
    position:absolute;
    border-radius:40px;
    background:linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%);
    background-color:rgba(92, 112, 128, 0.8);
    background-size:30px 30px;
    width:100%;
    height:100%;
    -webkit-transition:width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:width 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-progress-bar:not(.bp3-no-animation):not(.bp3-no-stripes) .bp3-progress-meter{
    animation:linear-progress-bar-stripes 300ms linear infinite reverse; }
  .bp3-progress-bar.bp3-no-stripes .bp3-progress-meter{
    background-image:none; }

.bp3-dark .bp3-progress-bar{
  background:rgba(16, 22, 26, 0.5); }
  .bp3-dark .bp3-progress-bar .bp3-progress-meter{
    background-color:#8a9ba8; }

.bp3-progress-bar.bp3-intent-primary .bp3-progress-meter{
  background-color:#137cbd; }

.bp3-progress-bar.bp3-intent-success .bp3-progress-meter{
  background-color:#0f9960; }

.bp3-progress-bar.bp3-intent-warning .bp3-progress-meter{
  background-color:#d9822b; }

.bp3-progress-bar.bp3-intent-danger .bp3-progress-meter{
  background-color:#db3737; }
@-webkit-keyframes skeleton-glow{
  from{
    border-color:rgba(206, 217, 224, 0.2);
    background:rgba(206, 217, 224, 0.2); }
  to{
    border-color:rgba(92, 112, 128, 0.2);
    background:rgba(92, 112, 128, 0.2); } }
@keyframes skeleton-glow{
  from{
    border-color:rgba(206, 217, 224, 0.2);
    background:rgba(206, 217, 224, 0.2); }
  to{
    border-color:rgba(92, 112, 128, 0.2);
    background:rgba(92, 112, 128, 0.2); } }
.bp3-skeleton{
  border-color:rgba(206, 217, 224, 0.2) !important;
  border-radius:2px;
  -webkit-box-shadow:none !important;
          box-shadow:none !important;
  background:rgba(206, 217, 224, 0.2);
  background-clip:padding-box !important;
  cursor:default;
  color:transparent !important;
  -webkit-animation:1000ms linear infinite alternate skeleton-glow;
          animation:1000ms linear infinite alternate skeleton-glow;
  pointer-events:none;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-skeleton::before, .bp3-skeleton::after,
  .bp3-skeleton *{
    visibility:hidden !important; }
.bp3-slider{
  width:100%;
  min-width:150px;
  height:40px;
  position:relative;
  outline:none;
  cursor:default;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-slider:hover{
    cursor:pointer; }
  .bp3-slider:active{
    cursor:-webkit-grabbing;
    cursor:grabbing; }
  .bp3-slider.bp3-disabled{
    opacity:0.5;
    cursor:not-allowed; }
  .bp3-slider.bp3-slider-unlabeled{
    height:16px; }

.bp3-slider-track,
.bp3-slider-progress{
  top:5px;
  right:0;
  left:0;
  height:6px;
  position:absolute; }

.bp3-slider-track{
  border-radius:3px;
  overflow:hidden; }

.bp3-slider-progress{
  background:rgba(92, 112, 128, 0.2); }
  .bp3-dark .bp3-slider-progress{
    background:rgba(16, 22, 26, 0.5); }
  .bp3-slider-progress.bp3-intent-primary{
    background-color:#137cbd; }
  .bp3-slider-progress.bp3-intent-success{
    background-color:#0f9960; }
  .bp3-slider-progress.bp3-intent-warning{
    background-color:#d9822b; }
  .bp3-slider-progress.bp3-intent-danger{
    background-color:#db3737; }

.bp3-slider-handle{
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
  background-color:#f5f8fa;
  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
  color:#182026;
  position:absolute;
  top:0;
  left:0;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
  cursor:pointer;
  width:16px;
  height:16px; }
  .bp3-slider-handle:hover{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-clip:padding-box;
    background-color:#ebf1f5; }
  .bp3-slider-handle:active, .bp3-slider-handle.bp3-active{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#d8e1e8;
    background-image:none; }
  .bp3-slider-handle:disabled, .bp3-slider-handle.bp3-disabled{
    outline:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    background-color:rgba(206, 217, 224, 0.5);
    background-image:none;
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6); }
    .bp3-slider-handle:disabled.bp3-active, .bp3-slider-handle:disabled.bp3-active:hover, .bp3-slider-handle.bp3-disabled.bp3-active, .bp3-slider-handle.bp3-disabled.bp3-active:hover{
      background:rgba(206, 217, 224, 0.7); }
  .bp3-slider-handle:focus{
    z-index:1; }
  .bp3-slider-handle:hover{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-clip:padding-box;
    background-color:#ebf1f5;
    z-index:2;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
    cursor:-webkit-grab;
    cursor:grab; }
  .bp3-slider-handle.bp3-active{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#d8e1e8;
    background-image:none;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 1px rgba(16, 22, 26, 0.1);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 1px rgba(16, 22, 26, 0.1);
    cursor:-webkit-grabbing;
    cursor:grabbing; }
  .bp3-disabled .bp3-slider-handle{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:#bfccd6;
    pointer-events:none; }
  .bp3-dark .bp3-slider-handle{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    background-color:#394b59;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
    color:#f5f8fa; }
    .bp3-dark .bp3-slider-handle:hover, .bp3-dark .bp3-slider-handle:active, .bp3-dark .bp3-slider-handle.bp3-active{
      color:#f5f8fa; }
    .bp3-dark .bp3-slider-handle:hover{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
      background-color:#30404d; }
    .bp3-dark .bp3-slider-handle:active, .bp3-dark .bp3-slider-handle.bp3-active{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#202b33;
      background-image:none; }
    .bp3-dark .bp3-slider-handle:disabled, .bp3-dark .bp3-slider-handle.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(57, 75, 89, 0.5);
      background-image:none;
      color:rgba(167, 182, 194, 0.6); }
      .bp3-dark .bp3-slider-handle:disabled.bp3-active, .bp3-dark .bp3-slider-handle.bp3-disabled.bp3-active{
        background:rgba(57, 75, 89, 0.7); }
    .bp3-dark .bp3-slider-handle .bp3-button-spinner .bp3-spinner-head{
      background:rgba(16, 22, 26, 0.5);
      stroke:#8a9ba8; }
    .bp3-dark .bp3-slider-handle, .bp3-dark .bp3-slider-handle:hover{
      background-color:#394b59; }
    .bp3-dark .bp3-slider-handle.bp3-active{
      background-color:#293742; }
  .bp3-dark .bp3-disabled .bp3-slider-handle{
    border-color:#5c7080;
    -webkit-box-shadow:none;
            box-shadow:none;
    background:#5c7080; }
  .bp3-slider-handle .bp3-slider-label{
    margin-left:8px;
    border-radius:3px;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
    background:#394b59;
    color:#f5f8fa; }
    .bp3-dark .bp3-slider-handle .bp3-slider-label{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
      background:#e1e8ed;
      color:#394b59; }
    .bp3-disabled .bp3-slider-handle .bp3-slider-label{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-slider-handle.bp3-start, .bp3-slider-handle.bp3-end{
    width:8px; }
  .bp3-slider-handle.bp3-start{
    border-top-right-radius:0;
    border-bottom-right-radius:0; }
  .bp3-slider-handle.bp3-end{
    margin-left:8px;
    border-top-left-radius:0;
    border-bottom-left-radius:0; }
    .bp3-slider-handle.bp3-end .bp3-slider-label{
      margin-left:0; }

.bp3-slider-label{
  -webkit-transform:translate(-50%, 20px);
          transform:translate(-50%, 20px);
  display:inline-block;
  position:absolute;
  padding:2px 5px;
  vertical-align:top;
  line-height:1;
  font-size:12px; }

.bp3-slider.bp3-vertical{
  width:40px;
  min-width:40px;
  height:150px; }
  .bp3-slider.bp3-vertical .bp3-slider-track,
  .bp3-slider.bp3-vertical .bp3-slider-progress{
    top:0;
    bottom:0;
    left:5px;
    width:6px;
    height:auto; }
  .bp3-slider.bp3-vertical .bp3-slider-progress{
    top:auto; }
  .bp3-slider.bp3-vertical .bp3-slider-label{
    -webkit-transform:translate(20px, 50%);
            transform:translate(20px, 50%); }
  .bp3-slider.bp3-vertical .bp3-slider-handle{
    top:auto; }
    .bp3-slider.bp3-vertical .bp3-slider-handle .bp3-slider-label{
      margin-top:-8px;
      margin-left:0; }
    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end, .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start{
      margin-left:0;
      width:16px;
      height:8px; }
    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start{
      border-top-left-radius:0;
      border-bottom-right-radius:3px; }
      .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start .bp3-slider-label{
        -webkit-transform:translate(20px);
                transform:translate(20px); }
    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end{
      margin-bottom:8px;
      border-top-left-radius:3px;
      border-bottom-left-radius:0;
      border-bottom-right-radius:0; }

@-webkit-keyframes pt-spinner-animation{
  from{
    -webkit-transform:rotate(0deg);
            transform:rotate(0deg); }
  to{
    -webkit-transform:rotate(360deg);
            transform:rotate(360deg); } }

@keyframes pt-spinner-animation{
  from{
    -webkit-transform:rotate(0deg);
            transform:rotate(0deg); }
  to{
    -webkit-transform:rotate(360deg);
            transform:rotate(360deg); } }

.bp3-spinner{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  overflow:visible;
  vertical-align:middle; }
  .bp3-spinner svg{
    display:block; }
  .bp3-spinner path{
    fill-opacity:0; }
  .bp3-spinner .bp3-spinner-head{
    -webkit-transform-origin:center;
            transform-origin:center;
    -webkit-transition:stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    stroke:rgba(92, 112, 128, 0.8);
    stroke-linecap:round; }
  .bp3-spinner .bp3-spinner-track{
    stroke:rgba(92, 112, 128, 0.2); }

.bp3-spinner-animation{
  -webkit-animation:pt-spinner-animation 500ms linear infinite;
          animation:pt-spinner-animation 500ms linear infinite; }
  .bp3-no-spin > .bp3-spinner-animation{
    -webkit-animation:none;
            animation:none; }

.bp3-dark .bp3-spinner .bp3-spinner-head{
  stroke:#8a9ba8; }

.bp3-dark .bp3-spinner .bp3-spinner-track{
  stroke:rgba(16, 22, 26, 0.5); }

.bp3-spinner.bp3-intent-primary .bp3-spinner-head{
  stroke:#137cbd; }

.bp3-spinner.bp3-intent-success .bp3-spinner-head{
  stroke:#0f9960; }

.bp3-spinner.bp3-intent-warning .bp3-spinner-head{
  stroke:#d9822b; }

.bp3-spinner.bp3-intent-danger .bp3-spinner-head{
  stroke:#db3737; }
.bp3-tabs.bp3-vertical{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex; }
  .bp3-tabs.bp3-vertical > .bp3-tab-list{
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
    -webkit-box-align:start;
        -ms-flex-align:start;
            align-items:flex-start; }
    .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab{
      border-radius:3px;
      width:100%;
      padding:0 10px; }
      .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab[aria-selected="true"]{
        -webkit-box-shadow:none;
                box-shadow:none;
        background-color:rgba(19, 124, 189, 0.2); }
    .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab-indicator-wrapper .bp3-tab-indicator{
      top:0;
      right:0;
      bottom:0;
      left:0;
      border-radius:3px;
      background-color:rgba(19, 124, 189, 0.2);
      height:auto; }
  .bp3-tabs.bp3-vertical > .bp3-tab-panel{
    margin-top:0;
    padding-left:20px; }

.bp3-tab-list{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  -webkit-box-align:end;
      -ms-flex-align:end;
          align-items:flex-end;
  position:relative;
  margin:0;
  border:none;
  padding:0;
  list-style:none; }
  .bp3-tab-list > *:not(:last-child){
    margin-right:20px; }

.bp3-tab{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  position:relative;
  cursor:pointer;
  max-width:100%;
  vertical-align:top;
  line-height:30px;
  color:#182026;
  font-size:14px; }
  .bp3-tab a{
    display:block;
    text-decoration:none;
    color:inherit; }
  .bp3-tab-indicator-wrapper ~ .bp3-tab{
    -webkit-box-shadow:none !important;
            box-shadow:none !important;
    background-color:transparent !important; }
  .bp3-tab[aria-disabled="true"]{
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-tab[aria-selected="true"]{
    border-radius:0;
    -webkit-box-shadow:inset 0 -3px 0 #106ba3;
            box-shadow:inset 0 -3px 0 #106ba3; }
  .bp3-tab[aria-selected="true"], .bp3-tab:not([aria-disabled="true"]):hover{
    color:#106ba3; }
  .bp3-tab:focus{
    -moz-outline-radius:0; }
  .bp3-large > .bp3-tab{
    line-height:40px;
    font-size:16px; }

.bp3-tab-panel{
  margin-top:20px; }
  .bp3-tab-panel[aria-hidden="true"]{
    display:none; }

.bp3-tab-indicator-wrapper{
  position:absolute;
  top:0;
  left:0;
  -webkit-transform:translateX(0), translateY(0);
          transform:translateX(0), translateY(0);
  -webkit-transition:height, width, -webkit-transform;
  transition:height, width, -webkit-transform;
  transition:height, transform, width;
  transition:height, transform, width, -webkit-transform;
  -webkit-transition-duration:200ms;
          transition-duration:200ms;
  -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
          transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
  pointer-events:none; }
  .bp3-tab-indicator-wrapper .bp3-tab-indicator{
    position:absolute;
    right:0;
    bottom:0;
    left:0;
    background-color:#106ba3;
    height:3px; }
  .bp3-tab-indicator-wrapper.bp3-no-animation{
    -webkit-transition:none;
    transition:none; }

.bp3-dark .bp3-tab{
  color:#f5f8fa; }
  .bp3-dark .bp3-tab[aria-disabled="true"]{
    color:rgba(167, 182, 194, 0.6); }
  .bp3-dark .bp3-tab[aria-selected="true"]{
    -webkit-box-shadow:inset 0 -3px 0 #48aff0;
            box-shadow:inset 0 -3px 0 #48aff0; }
  .bp3-dark .bp3-tab[aria-selected="true"], .bp3-dark .bp3-tab:not([aria-disabled="true"]):hover{
    color:#48aff0; }

.bp3-dark .bp3-tab-indicator{
  background-color:#48aff0; }

.bp3-flex-expander{
  -webkit-box-flex:1;
      -ms-flex:1 1;
          flex:1 1; }
.bp3-tag{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  position:relative;
  border:none;
  border-radius:3px;
  -webkit-box-shadow:none;
          box-shadow:none;
  background-color:#5c7080;
  min-width:20px;
  max-width:100%;
  min-height:20px;
  padding:2px 6px;
  line-height:16px;
  color:#f5f8fa;
  font-size:12px; }
  .bp3-tag.bp3-interactive{
    cursor:pointer; }
    .bp3-tag.bp3-interactive:hover{
      background-color:rgba(92, 112, 128, 0.85); }
    .bp3-tag.bp3-interactive.bp3-active, .bp3-tag.bp3-interactive:active{
      background-color:rgba(92, 112, 128, 0.7); }
  .bp3-tag > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-tag > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-tag::before,
  .bp3-tag > *{
    margin-right:4px; }
  .bp3-tag:empty::before,
  .bp3-tag > :last-child{
    margin-right:0; }
  .bp3-tag:focus{
    outline:rgba(19, 124, 189, 0.6) auto 2px;
    outline-offset:0;
    -moz-outline-radius:6px; }
  .bp3-tag.bp3-round{
    border-radius:30px;
    padding-right:8px;
    padding-left:8px; }
  .bp3-dark .bp3-tag{
    background-color:#bfccd6;
    color:#182026; }
    .bp3-dark .bp3-tag.bp3-interactive{
      cursor:pointer; }
      .bp3-dark .bp3-tag.bp3-interactive:hover{
        background-color:rgba(191, 204, 214, 0.85); }
      .bp3-dark .bp3-tag.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-interactive:active{
        background-color:rgba(191, 204, 214, 0.7); }
    .bp3-dark .bp3-tag > .bp3-icon, .bp3-dark .bp3-tag .bp3-icon-standard, .bp3-dark .bp3-tag .bp3-icon-large{
      fill:currentColor; }
  .bp3-tag > .bp3-icon, .bp3-tag .bp3-icon-standard, .bp3-tag .bp3-icon-large{
    fill:#ffffff; }
  .bp3-tag.bp3-large,
  .bp3-large .bp3-tag{
    min-width:30px;
    min-height:30px;
    padding:0 10px;
    line-height:20px;
    font-size:14px; }
    .bp3-tag.bp3-large::before,
    .bp3-tag.bp3-large > *,
    .bp3-large .bp3-tag::before,
    .bp3-large .bp3-tag > *{
      margin-right:7px; }
    .bp3-tag.bp3-large:empty::before,
    .bp3-tag.bp3-large > :last-child,
    .bp3-large .bp3-tag:empty::before,
    .bp3-large .bp3-tag > :last-child{
      margin-right:0; }
    .bp3-tag.bp3-large.bp3-round,
    .bp3-large .bp3-tag.bp3-round{
      padding-right:12px;
      padding-left:12px; }
  .bp3-tag.bp3-intent-primary{
    background:#137cbd;
    color:#ffffff; }
    .bp3-tag.bp3-intent-primary.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-primary.bp3-interactive:hover{
        background-color:rgba(19, 124, 189, 0.85); }
      .bp3-tag.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-primary.bp3-interactive:active{
        background-color:rgba(19, 124, 189, 0.7); }
  .bp3-tag.bp3-intent-success{
    background:#0f9960;
    color:#ffffff; }
    .bp3-tag.bp3-intent-success.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-success.bp3-interactive:hover{
        background-color:rgba(15, 153, 96, 0.85); }
      .bp3-tag.bp3-intent-success.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-success.bp3-interactive:active{
        background-color:rgba(15, 153, 96, 0.7); }
  .bp3-tag.bp3-intent-warning{
    background:#d9822b;
    color:#ffffff; }
    .bp3-tag.bp3-intent-warning.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-warning.bp3-interactive:hover{
        background-color:rgba(217, 130, 43, 0.85); }
      .bp3-tag.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-warning.bp3-interactive:active{
        background-color:rgba(217, 130, 43, 0.7); }
  .bp3-tag.bp3-intent-danger{
    background:#db3737;
    color:#ffffff; }
    .bp3-tag.bp3-intent-danger.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-danger.bp3-interactive:hover{
        background-color:rgba(219, 55, 55, 0.85); }
      .bp3-tag.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-danger.bp3-interactive:active{
        background-color:rgba(219, 55, 55, 0.7); }
  .bp3-tag.bp3-fill{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    width:100%; }
  .bp3-tag.bp3-minimal > .bp3-icon, .bp3-tag.bp3-minimal .bp3-icon-standard, .bp3-tag.bp3-minimal .bp3-icon-large{
    fill:#5c7080; }
  .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]){
    background-color:rgba(138, 155, 168, 0.2);
    color:#182026; }
    .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover{
        background-color:rgba(92, 112, 128, 0.3); }
      .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active, .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active{
        background-color:rgba(92, 112, 128, 0.4); }
    .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]){
      color:#f5f8fa; }
      .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover{
          background-color:rgba(191, 204, 214, 0.3); }
        .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active{
          background-color:rgba(191, 204, 214, 0.4); }
      .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) > .bp3-icon, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) .bp3-icon-standard, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) .bp3-icon-large{
        fill:#a7b6c2; }
  .bp3-tag.bp3-minimal.bp3-intent-primary{
    background-color:rgba(19, 124, 189, 0.15);
    color:#106ba3; }
    .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover{
        background-color:rgba(19, 124, 189, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active{
        background-color:rgba(19, 124, 189, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-primary > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-large{
      fill:#137cbd; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary{
      background-color:rgba(19, 124, 189, 0.25);
      color:#48aff0; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover{
          background-color:rgba(19, 124, 189, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active{
          background-color:rgba(19, 124, 189, 0.45); }
  .bp3-tag.bp3-minimal.bp3-intent-success{
    background-color:rgba(15, 153, 96, 0.15);
    color:#0d8050; }
    .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover{
        background-color:rgba(15, 153, 96, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active{
        background-color:rgba(15, 153, 96, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-success > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-large{
      fill:#0f9960; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success{
      background-color:rgba(15, 153, 96, 0.25);
      color:#3dcc91; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover{
          background-color:rgba(15, 153, 96, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active{
          background-color:rgba(15, 153, 96, 0.45); }
  .bp3-tag.bp3-minimal.bp3-intent-warning{
    background-color:rgba(217, 130, 43, 0.15);
    color:#bf7326; }
    .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover{
        background-color:rgba(217, 130, 43, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active{
        background-color:rgba(217, 130, 43, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-warning > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-large{
      fill:#d9822b; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning{
      background-color:rgba(217, 130, 43, 0.25);
      color:#ffb366; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover{
          background-color:rgba(217, 130, 43, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active{
          background-color:rgba(217, 130, 43, 0.45); }
  .bp3-tag.bp3-minimal.bp3-intent-danger{
    background-color:rgba(219, 55, 55, 0.15);
    color:#c23030; }
    .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover{
        background-color:rgba(219, 55, 55, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active{
        background-color:rgba(219, 55, 55, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-danger > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-large{
      fill:#db3737; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger{
      background-color:rgba(219, 55, 55, 0.25);
      color:#ff7373; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover{
          background-color:rgba(219, 55, 55, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active{
          background-color:rgba(219, 55, 55, 0.45); }

.bp3-tag-remove{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  opacity:0.5;
  margin-top:-2px;
  margin-right:-6px !important;
  margin-bottom:-2px;
  border:none;
  background:none;
  cursor:pointer;
  padding:2px;
  padding-left:0;
  color:inherit; }
  .bp3-tag-remove:hover{
    opacity:0.8;
    background:none;
    text-decoration:none; }
  .bp3-tag-remove:active{
    opacity:1; }
  .bp3-tag-remove:empty::before{
    line-height:1;
    font-family:"Icons16", sans-serif;
    font-size:16px;
    font-weight:400;
    font-style:normal;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    content:""; }
  .bp3-large .bp3-tag-remove{
    margin-right:-10px !important;
    padding:5px;
    padding-left:0; }
    .bp3-large .bp3-tag-remove:empty::before{
      line-height:1;
      font-family:"Icons20", sans-serif;
      font-size:20px;
      font-weight:400;
      font-style:normal; }
.bp3-tag-input{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:start;
      -ms-flex-align:start;
          align-items:flex-start;
  cursor:text;
  height:auto;
  min-height:30px;
  padding-right:0;
  padding-left:5px;
  line-height:inherit; }
  .bp3-tag-input > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-tag-input > .bp3-tag-input-values{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-tag-input .bp3-tag-input-icon{
    margin-top:7px;
    margin-right:7px;
    margin-left:2px;
    color:#5c7080; }
  .bp3-tag-input .bp3-tag-input-values{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row;
    -ms-flex-wrap:wrap;
        flex-wrap:wrap;
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    -ms-flex-item-align:stretch;
        align-self:stretch;
    margin-top:5px;
    margin-right:7px;
    min-width:0; }
    .bp3-tag-input .bp3-tag-input-values > *{
      -webkit-box-flex:0;
          -ms-flex-positive:0;
              flex-grow:0;
      -ms-flex-negative:0;
          flex-shrink:0; }
    .bp3-tag-input .bp3-tag-input-values > .bp3-fill{
      -webkit-box-flex:1;
          -ms-flex-positive:1;
              flex-grow:1;
      -ms-flex-negative:1;
          flex-shrink:1; }
    .bp3-tag-input .bp3-tag-input-values::before,
    .bp3-tag-input .bp3-tag-input-values > *{
      margin-right:5px; }
    .bp3-tag-input .bp3-tag-input-values:empty::before,
    .bp3-tag-input .bp3-tag-input-values > :last-child{
      margin-right:0; }
    .bp3-tag-input .bp3-tag-input-values:first-child .bp3-input-ghost:first-child{
      padding-left:5px; }
    .bp3-tag-input .bp3-tag-input-values > *{
      margin-bottom:5px; }
  .bp3-tag-input .bp3-tag{
    overflow-wrap:break-word; }
    .bp3-tag-input .bp3-tag.bp3-active{
      outline:rgba(19, 124, 189, 0.6) auto 2px;
      outline-offset:0;
      -moz-outline-radius:6px; }
  .bp3-tag-input .bp3-input-ghost{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    width:80px;
    line-height:20px; }
    .bp3-tag-input .bp3-input-ghost:disabled, .bp3-tag-input .bp3-input-ghost.bp3-disabled{
      cursor:not-allowed; }
  .bp3-tag-input .bp3-button,
  .bp3-tag-input .bp3-spinner{
    margin:3px;
    margin-left:0; }
  .bp3-tag-input .bp3-button{
    min-width:24px;
    min-height:24px;
    padding:0 7px; }
  .bp3-tag-input.bp3-large{
    height:auto;
    min-height:40px; }
    .bp3-tag-input.bp3-large::before,
    .bp3-tag-input.bp3-large > *{
      margin-right:10px; }
    .bp3-tag-input.bp3-large:empty::before,
    .bp3-tag-input.bp3-large > :last-child{
      margin-right:0; }
    .bp3-tag-input.bp3-large .bp3-tag-input-icon{
      margin-top:10px;
      margin-left:5px; }
    .bp3-tag-input.bp3-large .bp3-input-ghost{
      line-height:30px; }
    .bp3-tag-input.bp3-large .bp3-button{
      min-width:30px;
      min-height:30px;
      padding:5px 10px;
      margin:5px;
      margin-left:0; }
    .bp3-tag-input.bp3-large .bp3-spinner{
      margin:8px;
      margin-left:0; }
  .bp3-tag-input.bp3-active{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
    background-color:#ffffff; }
    .bp3-tag-input.bp3-active.bp3-intent-primary{
      -webkit-box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-success{
      -webkit-box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-warning{
      -webkit-box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-danger{
      -webkit-box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-tag-input .bp3-tag-input-icon, .bp3-tag-input.bp3-dark .bp3-tag-input-icon{
    color:#a7b6c2; }
  .bp3-dark .bp3-tag-input .bp3-input-ghost, .bp3-tag-input.bp3-dark .bp3-input-ghost{
    color:#f5f8fa; }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::-webkit-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::-moz-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost:-ms-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::-ms-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::placeholder{
      color:rgba(167, 182, 194, 0.6); }
  .bp3-dark .bp3-tag-input.bp3-active, .bp3-tag-input.bp3-dark.bp3-active{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    background-color:rgba(16, 22, 26, 0.3); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-primary, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-primary{
      -webkit-box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-success, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-success{
      -webkit-box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-warning, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-warning{
      -webkit-box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-danger, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-danger{
      -webkit-box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-input-ghost{
  border:none;
  -webkit-box-shadow:none;
          box-shadow:none;
  background:none;
  padding:0; }
  .bp3-input-ghost::-webkit-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input-ghost::-moz-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input-ghost:-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input-ghost::-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input-ghost::placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input-ghost:focus{
    outline:none !important; }
.bp3-toast{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:start;
      -ms-flex-align:start;
          align-items:flex-start;
  position:relative !important;
  margin:20px 0 0;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  background-color:#ffffff;
  min-width:300px;
  max-width:500px;
  pointer-events:all; }
  .bp3-toast.bp3-toast-enter, .bp3-toast.bp3-toast-appear{
    -webkit-transform:translateY(-40px);
            transform:translateY(-40px); }
  .bp3-toast.bp3-toast-enter-active, .bp3-toast.bp3-toast-appear-active{
    -webkit-transform:translateY(0);
            transform:translateY(0);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-toast.bp3-toast-enter ~ .bp3-toast, .bp3-toast.bp3-toast-appear ~ .bp3-toast{
    -webkit-transform:translateY(-40px);
            transform:translateY(-40px); }
  .bp3-toast.bp3-toast-enter-active ~ .bp3-toast, .bp3-toast.bp3-toast-appear-active ~ .bp3-toast{
    -webkit-transform:translateY(0);
            transform:translateY(0);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-toast.bp3-toast-exit{
    opacity:1;
    -webkit-filter:blur(0);
            filter:blur(0); }
  .bp3-toast.bp3-toast-exit-active{
    opacity:0;
    -webkit-filter:blur(10px);
            filter:blur(10px);
    -webkit-transition-property:opacity, -webkit-filter;
    transition-property:opacity, -webkit-filter;
    transition-property:opacity, filter;
    transition-property:opacity, filter, -webkit-filter;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-toast.bp3-toast-exit ~ .bp3-toast{
    -webkit-transform:translateY(0);
            transform:translateY(0); }
  .bp3-toast.bp3-toast-exit-active ~ .bp3-toast{
    -webkit-transform:translateY(-40px);
            transform:translateY(-40px);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:50ms;
            transition-delay:50ms; }
  .bp3-toast .bp3-button-group{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    padding:5px;
    padding-left:0; }
  .bp3-toast > .bp3-icon{
    margin:12px;
    margin-right:0;
    color:#5c7080; }
  .bp3-toast.bp3-dark,
  .bp3-dark .bp3-toast{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
    background-color:#394b59; }
    .bp3-toast.bp3-dark > .bp3-icon,
    .bp3-dark .bp3-toast > .bp3-icon{
      color:#a7b6c2; }
  .bp3-toast[class*="bp3-intent-"] a{
    color:rgba(255, 255, 255, 0.7); }
    .bp3-toast[class*="bp3-intent-"] a:hover{
      color:#ffffff; }
  .bp3-toast[class*="bp3-intent-"] > .bp3-icon{
    color:#ffffff; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button, .bp3-toast[class*="bp3-intent-"] .bp3-button::before,
  .bp3-toast[class*="bp3-intent-"] .bp3-button .bp3-icon, .bp3-toast[class*="bp3-intent-"] .bp3-button:active{
    color:rgba(255, 255, 255, 0.7) !important; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button:focus{
    outline-color:rgba(255, 255, 255, 0.5); }
  .bp3-toast[class*="bp3-intent-"] .bp3-button:hover{
    background-color:rgba(255, 255, 255, 0.15) !important;
    color:#ffffff !important; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button:active{
    background-color:rgba(255, 255, 255, 0.3) !important;
    color:#ffffff !important; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button::after{
    background:rgba(255, 255, 255, 0.3) !important; }
  .bp3-toast.bp3-intent-primary{
    background-color:#137cbd;
    color:#ffffff; }
  .bp3-toast.bp3-intent-success{
    background-color:#0f9960;
    color:#ffffff; }
  .bp3-toast.bp3-intent-warning{
    background-color:#d9822b;
    color:#ffffff; }
  .bp3-toast.bp3-intent-danger{
    background-color:#db3737;
    color:#ffffff; }

.bp3-toast-message{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  padding:11px;
  word-break:break-word; }

.bp3-toast-container{
  display:-webkit-box !important;
  display:-ms-flexbox !important;
  display:flex !important;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  position:fixed;
  right:0;
  left:0;
  z-index:40;
  overflow:hidden;
  padding:0 20px 20px;
  pointer-events:none; }
  .bp3-toast-container.bp3-toast-container-top{
    top:0;
    bottom:auto; }
  .bp3-toast-container.bp3-toast-container-bottom{
    -webkit-box-orient:vertical;
    -webkit-box-direction:reverse;
        -ms-flex-direction:column-reverse;
            flex-direction:column-reverse;
    top:auto;
    bottom:0; }
  .bp3-toast-container.bp3-toast-container-left{
    -webkit-box-align:start;
        -ms-flex-align:start;
            align-items:flex-start; }
  .bp3-toast-container.bp3-toast-container-right{
    -webkit-box-align:end;
        -ms-flex-align:end;
            align-items:flex-end; }

.bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active),
.bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active) ~ .bp3-toast, .bp3-toast-container-bottom .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active),
.bp3-toast-container-bottom .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active) ~ .bp3-toast,
.bp3-toast-container-bottom .bp3-toast.bp3-toast-leave-active ~ .bp3-toast{
  -webkit-transform:translateY(60px);
          transform:translateY(60px); }
.bp3-tooltip{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  -webkit-transform:scale(1);
          transform:scale(1); }
  .bp3-tooltip .bp3-popover-arrow{
    position:absolute;
    width:22px;
    height:22px; }
    .bp3-tooltip .bp3-popover-arrow::before{
      margin:4px;
      width:14px;
      height:14px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip{
    margin-top:-11px;
    margin-bottom:11px; }
    .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow{
      bottom:-8px; }
      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(-90deg);
                transform:rotate(-90deg); }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip{
    margin-left:11px; }
    .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow{
      left:-8px; }
      .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(0);
                transform:rotate(0); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip{
    margin-top:11px; }
    .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow{
      top:-8px; }
      .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(90deg);
                transform:rotate(90deg); }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip{
    margin-right:11px;
    margin-left:-11px; }
    .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow{
      right:-8px; }
      .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(180deg);
                transform:rotate(180deg); }
  .bp3-tether-element-attached-middle > .bp3-tooltip > .bp3-popover-arrow{
    top:50%;
    -webkit-transform:translateY(-50%);
            transform:translateY(-50%); }
  .bp3-tether-element-attached-center > .bp3-tooltip > .bp3-popover-arrow{
    right:50%;
    -webkit-transform:translateX(50%);
            transform:translateX(50%); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow{
    top:-0.22183px; }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow{
    right:-0.22183px; }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow{
    left:-0.22183px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow{
    bottom:-0.22183px; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-tooltip{
    -webkit-transform-origin:top left;
            transform-origin:top left; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-tooltip{
    -webkit-transform-origin:top center;
            transform-origin:top center; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-tooltip{
    -webkit-transform-origin:top right;
            transform-origin:top right; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-tooltip{
    -webkit-transform-origin:center left;
            transform-origin:center left; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-tooltip{
    -webkit-transform-origin:center center;
            transform-origin:center center; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-tooltip{
    -webkit-transform-origin:center right;
            transform-origin:center right; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-tooltip{
    -webkit-transform-origin:bottom left;
            transform-origin:bottom left; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-tooltip{
    -webkit-transform-origin:bottom center;
            transform-origin:bottom center; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-tooltip{
    -webkit-transform-origin:bottom right;
            transform-origin:bottom right; }
  .bp3-tooltip .bp3-popover-content{
    background:#394b59;
    color:#f5f8fa; }
  .bp3-tooltip .bp3-popover-arrow::before{
    -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2);
            box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2); }
  .bp3-tooltip .bp3-popover-arrow-border{
    fill:#10161a;
    fill-opacity:0.1; }
  .bp3-tooltip .bp3-popover-arrow-fill{
    fill:#394b59; }
  .bp3-popover-enter > .bp3-tooltip, .bp3-popover-appear > .bp3-tooltip{
    -webkit-transform:scale(0.8);
            transform:scale(0.8); }
  .bp3-popover-enter-active > .bp3-tooltip, .bp3-popover-appear-active > .bp3-tooltip{
    -webkit-transform:scale(1);
            transform:scale(1);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-popover-exit > .bp3-tooltip{
    -webkit-transform:scale(1);
            transform:scale(1); }
  .bp3-popover-exit-active > .bp3-tooltip{
    -webkit-transform:scale(0.8);
            transform:scale(0.8);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-tooltip .bp3-popover-content{
    padding:10px 12px; }
  .bp3-tooltip.bp3-dark,
  .bp3-dark .bp3-tooltip{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
    .bp3-tooltip.bp3-dark .bp3-popover-content,
    .bp3-dark .bp3-tooltip .bp3-popover-content{
      background:#e1e8ed;
      color:#394b59; }
    .bp3-tooltip.bp3-dark .bp3-popover-arrow::before,
    .bp3-dark .bp3-tooltip .bp3-popover-arrow::before{
      -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4);
              box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4); }
    .bp3-tooltip.bp3-dark .bp3-popover-arrow-border,
    .bp3-dark .bp3-tooltip .bp3-popover-arrow-border{
      fill:#10161a;
      fill-opacity:0.2; }
    .bp3-tooltip.bp3-dark .bp3-popover-arrow-fill,
    .bp3-dark .bp3-tooltip .bp3-popover-arrow-fill{
      fill:#e1e8ed; }
  .bp3-tooltip.bp3-intent-primary .bp3-popover-content{
    background:#137cbd;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-primary .bp3-popover-arrow-fill{
    fill:#137cbd; }
  .bp3-tooltip.bp3-intent-success .bp3-popover-content{
    background:#0f9960;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-success .bp3-popover-arrow-fill{
    fill:#0f9960; }
  .bp3-tooltip.bp3-intent-warning .bp3-popover-content{
    background:#d9822b;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-warning .bp3-popover-arrow-fill{
    fill:#d9822b; }
  .bp3-tooltip.bp3-intent-danger .bp3-popover-content{
    background:#db3737;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-danger .bp3-popover-arrow-fill{
    fill:#db3737; }

.bp3-tooltip-indicator{
  border-bottom:dotted 1px;
  cursor:help; }
.bp3-tree .bp3-icon, .bp3-tree .bp3-icon-standard, .bp3-tree .bp3-icon-large{
  color:#5c7080; }
  .bp3-tree .bp3-icon.bp3-intent-primary, .bp3-tree .bp3-icon-standard.bp3-intent-primary, .bp3-tree .bp3-icon-large.bp3-intent-primary{
    color:#137cbd; }
  .bp3-tree .bp3-icon.bp3-intent-success, .bp3-tree .bp3-icon-standard.bp3-intent-success, .bp3-tree .bp3-icon-large.bp3-intent-success{
    color:#0f9960; }
  .bp3-tree .bp3-icon.bp3-intent-warning, .bp3-tree .bp3-icon-standard.bp3-intent-warning, .bp3-tree .bp3-icon-large.bp3-intent-warning{
    color:#d9822b; }
  .bp3-tree .bp3-icon.bp3-intent-danger, .bp3-tree .bp3-icon-standard.bp3-intent-danger, .bp3-tree .bp3-icon-large.bp3-intent-danger{
    color:#db3737; }

.bp3-tree-node-list{
  margin:0;
  padding-left:0;
  list-style:none; }

.bp3-tree-root{
  position:relative;
  background-color:transparent;
  cursor:default;
  padding-left:0; }

.bp3-tree-node-content-0{
  padding-left:0px; }

.bp3-tree-node-content-1{
  padding-left:23px; }

.bp3-tree-node-content-2{
  padding-left:46px; }

.bp3-tree-node-content-3{
  padding-left:69px; }

.bp3-tree-node-content-4{
  padding-left:92px; }

.bp3-tree-node-content-5{
  padding-left:115px; }

.bp3-tree-node-content-6{
  padding-left:138px; }

.bp3-tree-node-content-7{
  padding-left:161px; }

.bp3-tree-node-content-8{
  padding-left:184px; }

.bp3-tree-node-content-9{
  padding-left:207px; }

.bp3-tree-node-content-10{
  padding-left:230px; }

.bp3-tree-node-content-11{
  padding-left:253px; }

.bp3-tree-node-content-12{
  padding-left:276px; }

.bp3-tree-node-content-13{
  padding-left:299px; }

.bp3-tree-node-content-14{
  padding-left:322px; }

.bp3-tree-node-content-15{
  padding-left:345px; }

.bp3-tree-node-content-16{
  padding-left:368px; }

.bp3-tree-node-content-17{
  padding-left:391px; }

.bp3-tree-node-content-18{
  padding-left:414px; }

.bp3-tree-node-content-19{
  padding-left:437px; }

.bp3-tree-node-content-20{
  padding-left:460px; }

.bp3-tree-node-content{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  width:100%;
  height:30px;
  padding-right:5px; }
  .bp3-tree-node-content:hover{
    background-color:rgba(191, 204, 214, 0.4); }

.bp3-tree-node-caret,
.bp3-tree-node-caret-none{
  min-width:30px; }

.bp3-tree-node-caret{
  color:#5c7080;
  -webkit-transform:rotate(0deg);
          transform:rotate(0deg);
  cursor:pointer;
  padding:7px;
  -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-tree-node-caret:hover{
    color:#182026; }
  .bp3-dark .bp3-tree-node-caret{
    color:#a7b6c2; }
    .bp3-dark .bp3-tree-node-caret:hover{
      color:#f5f8fa; }
  .bp3-tree-node-caret.bp3-tree-node-caret-open{
    -webkit-transform:rotate(90deg);
            transform:rotate(90deg); }
  .bp3-tree-node-caret.bp3-icon-standard::before{
    content:""; }

.bp3-tree-node-icon{
  position:relative;
  margin-right:7px; }

.bp3-tree-node-label{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  position:relative;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-tree-node-label span{
    display:inline; }

.bp3-tree-node-secondary-label{
  padding:0 5px;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-tree-node-secondary-label .bp3-popover-wrapper,
  .bp3-tree-node-secondary-label .bp3-popover-target{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center; }

.bp3-tree-node.bp3-disabled .bp3-tree-node-content{
  background-color:inherit;
  cursor:not-allowed;
  color:rgba(92, 112, 128, 0.6); }

.bp3-tree-node.bp3-disabled .bp3-tree-node-caret,
.bp3-tree-node.bp3-disabled .bp3-tree-node-icon{
  cursor:not-allowed;
  color:rgba(92, 112, 128, 0.6); }

.bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content{
  background-color:#137cbd; }
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content,
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon, .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-standard, .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-large{
    color:#ffffff; }
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret::before{
    color:rgba(255, 255, 255, 0.7); }
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret:hover::before{
    color:#ffffff; }

.bp3-dark .bp3-tree-node-content:hover{
  background-color:rgba(92, 112, 128, 0.3); }

.bp3-dark .bp3-tree .bp3-icon, .bp3-dark .bp3-tree .bp3-icon-standard, .bp3-dark .bp3-tree .bp3-icon-large{
  color:#a7b6c2; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-primary, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-primary, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-primary{
    color:#137cbd; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-success, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-success, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-success{
    color:#0f9960; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-warning, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-warning, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-warning{
    color:#d9822b; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-danger, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-danger, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-danger{
    color:#db3737; }

.bp3-dark .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content{
  background-color:#137cbd; }
/*!

Copyright 2017-present Palantir Technologies, Inc. All rights reserved.
Licensed under the Apache License, Version 2.0.

*/
.bp3-omnibar{
  -webkit-filter:blur(0);
          filter:blur(0);
  opacity:1;
  top:20vh;
  left:calc(50% - 250px);
  z-index:21;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  background-color:#ffffff;
  width:500px; }
  .bp3-omnibar.bp3-overlay-enter, .bp3-omnibar.bp3-overlay-appear{
    -webkit-filter:blur(20px);
            filter:blur(20px);
    opacity:0.2; }
  .bp3-omnibar.bp3-overlay-enter-active, .bp3-omnibar.bp3-overlay-appear-active{
    -webkit-filter:blur(0);
            filter:blur(0);
    opacity:1;
    -webkit-transition-property:opacity, -webkit-filter;
    transition-property:opacity, -webkit-filter;
    transition-property:filter, opacity;
    transition-property:filter, opacity, -webkit-filter;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-omnibar.bp3-overlay-exit{
    -webkit-filter:blur(0);
            filter:blur(0);
    opacity:1; }
  .bp3-omnibar.bp3-overlay-exit-active{
    -webkit-filter:blur(20px);
            filter:blur(20px);
    opacity:0.2;
    -webkit-transition-property:opacity, -webkit-filter;
    transition-property:opacity, -webkit-filter;
    transition-property:filter, opacity;
    transition-property:filter, opacity, -webkit-filter;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-omnibar .bp3-input{
    border-radius:0;
    background-color:transparent; }
    .bp3-omnibar .bp3-input, .bp3-omnibar .bp3-input:focus{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-omnibar .bp3-menu{
    border-radius:0;
    -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
    background-color:transparent;
    max-height:calc(60vh - 40px);
    overflow:auto; }
    .bp3-omnibar .bp3-menu:empty{
      display:none; }
  .bp3-dark .bp3-omnibar, .bp3-omnibar.bp3-dark{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
    background-color:#30404d; }

.bp3-omnibar-overlay .bp3-overlay-backdrop{
  background-color:rgba(16, 22, 26, 0.2); }

.bp3-select-popover .bp3-popover-content{
  padding:5px; }

.bp3-select-popover .bp3-input-group{
  margin-bottom:0; }

.bp3-select-popover .bp3-menu{
  max-width:400px;
  max-height:300px;
  overflow:auto;
  padding:0; }
  .bp3-select-popover .bp3-menu:not(:first-child){
    padding-top:5px; }

.bp3-multi-select{
  min-width:150px; }

.bp3-multi-select-popover .bp3-menu{
  max-width:400px;
  max-height:300px;
  overflow:auto; }

.bp3-select-popover .bp3-popover-content{
  padding:5px; }

.bp3-select-popover .bp3-input-group{
  margin-bottom:0; }

.bp3-select-popover .bp3-menu{
  max-width:400px;
  max-height:300px;
  overflow:auto;
  padding:0; }
  .bp3-select-popover .bp3-menu:not(:first-child){
    padding-top:5px; }
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensureUiComponents() in @jupyterlab/buildutils */

/**
 * (DEPRECATED) Support for consuming icons as CSS background images
 */

/* Icons urls */

:root {
  --jp-icon-add: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-bug: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwIDhoLTIuODFjLS40NS0uNzgtMS4wNy0xLjQ1LTEuODItMS45NkwxNyA0LjQxIDE1LjU5IDNsLTIuMTcgMi4xN0MxMi45NiA1LjA2IDEyLjQ5IDUgMTIgNWMtLjQ5IDAtLjk2LjA2LTEuNDEuMTdMOC40MSAzIDcgNC40MWwxLjYyIDEuNjNDNy44OCA2LjU1IDcuMjYgNy4yMiA2LjgxIDhINHYyaDIuMDljLS4wNS4zMy0uMDkuNjYtLjA5IDF2MUg0djJoMnYxYzAgLjM0LjA0LjY3LjA5IDFINHYyaDIuODFjMS4wNCAxLjc5IDIuOTcgMyA1LjE5IDNzNC4xNS0xLjIxIDUuMTktM0gyMHYtMmgtMi4wOWMuMDUtLjMzLjA5LS42Ni4wOS0xdi0xaDJ2LTJoLTJ2LTFjMC0uMzQtLjA0LS42Ny0uMDktMUgyMFY4em0tNiA4aC00di0yaDR2MnptMC00aC00di0yaDR2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-build: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE0LjkgMTcuNDVDMTYuMjUgMTcuNDUgMTcuMzUgMTYuMzUgMTcuMzUgMTVDMTcuMzUgMTMuNjUgMTYuMjUgMTIuNTUgMTQuOSAxMi41NUMxMy41NCAxMi41NSAxMi40NSAxMy42NSAxMi40NSAxNUMxMi40NSAxNi4zNSAxMy41NCAxNy40NSAxNC45IDE3LjQ1Wk0yMC4xIDE1LjY4TDIxLjU4IDE2Ljg0QzIxLjcxIDE2Ljk1IDIxLjc1IDE3LjEzIDIxLjY2IDE3LjI5TDIwLjI2IDE5LjcxQzIwLjE3IDE5Ljg2IDIwIDE5LjkyIDE5LjgzIDE5Ljg2TDE4LjA5IDE5LjE2QzE3LjczIDE5LjQ0IDE3LjMzIDE5LjY3IDE2LjkxIDE5Ljg1TDE2LjY0IDIxLjdDMTYuNjIgMjEuODcgMTYuNDcgMjIgMTYuMyAyMkgxMy41QzEzLjMyIDIyIDEzLjE4IDIxLjg3IDEzLjE1IDIxLjdMMTIuODkgMTkuODVDMTIuNDYgMTkuNjcgMTIuMDcgMTkuNDQgMTEuNzEgMTkuMTZMOS45NjAwMiAxOS44NkM5LjgxMDAyIDE5LjkyIDkuNjIwMDIgMTkuODYgOS41NDAwMiAxOS43MUw4LjE0MDAyIDE3LjI5QzguMDUwMDIgMTcuMTMgOC4wOTAwMiAxNi45NSA4LjIyMDAyIDE2Ljg0TDkuNzAwMDIgMTUuNjhMOS42NTAwMSAxNUw5LjcwMDAyIDE0LjMxTDguMjIwMDIgMTMuMTZDOC4wOTAwMiAxMy4wNSA4LjA1MDAyIDEyLjg2IDguMTQwMDIgMTIuNzFMOS41NDAwMiAxMC4yOUM5LjYyMDAyIDEwLjEzIDkuODEwMDIgMTAuMDcgOS45NjAwMiAxMC4xM0wxMS43MSAxMC44NEMxMi4wNyAxMC41NiAxMi40NiAxMC4zMiAxMi44OSAxMC4xNUwxMy4xNSA4LjI4OTk4QzEzLjE4IDguMTI5OTggMTMuMzIgNy45OTk5OCAxMy41IDcuOTk5OThIMTYuM0MxNi40NyA3Ljk5OTk4IDE2LjYyIDguMTI5OTggMTYuNjQgOC4yODk5OEwxNi45MSAxMC4xNUMxNy4zMyAxMC4zMiAxNy43MyAxMC41NiAxOC4wOSAxMC44NEwxOS44MyAxMC4xM0MyMCAxMC4wNyAyMC4xNyAxMC4xMyAyMC4yNiAxMC4yOUwyMS42NiAxMi43MUMyMS43NSAxMi44NiAyMS43MSAxMy4wNSAyMS41OCAxMy4xNkwyMC4xIDE0LjMxTDIwLjE1IDE1TDIwLjEgMTUuNjhaIi8+CiAgICA8cGF0aCBkPSJNNy4zMjk2NiA3LjQ0NDU0QzguMDgzMSA3LjAwOTU0IDguMzM5MzIgNi4wNTMzMiA3LjkwNDMyIDUuMjk5ODhDNy40NjkzMiA0LjU0NjQzIDYuNTA4MSA0LjI4MTU2IDUuNzU0NjYgNC43MTY1NkM1LjM5MTc2IDQuOTI2MDggNS4xMjY5NSA1LjI3MTE4IDUuMDE4NDkgNS42NzU5NEM0LjkxMDA0IDYuMDgwNzEgNC45NjY4MiA2LjUxMTk4IDUuMTc2MzQgNi44NzQ4OEM1LjYxMTM0IDcuNjI4MzIgNi41NzYyMiA3Ljg3OTU0IDcuMzI5NjYgNy40NDQ1NFpNOS42NTcxOCA0Ljc5NTkzTDEwLjg2NzIgNC45NTE3OUMxMC45NjI4IDQuOTc3NDEgMTEuMDQwMiA1LjA3MTMzIDExLjAzODIgNS4xODc5M0wxMS4wMzg4IDYuOTg4OTNDMTEuMDQ1NSA3LjEwMDU0IDEwLjk2MTYgNy4xOTUxOCAxMC44NTUgNy4yMTA1NEw5LjY2MDAxIDcuMzgwODNMOS4yMzkxNSA4LjEzMTg4TDkuNjY5NjEgOS4yNTc0NUM5LjcwNzI5IDkuMzYyNzEgOS42NjkzNCA5LjQ3Njk5IDkuNTc0MDggOS41MzE5OUw4LjAxNTIzIDEwLjQzMkM3LjkxMTMxIDEwLjQ5MiA3Ljc5MzM3IDEwLjQ2NzcgNy43MjEwNSAxMC4zODI0TDYuOTg3NDggOS40MzE4OEw2LjEwOTMxIDkuNDMwODNMNS4zNDcwNCAxMC4zOTA1QzUuMjg5MDkgMTAuNDcwMiA1LjE3MzgzIDEwLjQ5MDUgNS4wNzE4NyAxMC40MzM5TDMuNTEyNDUgOS41MzI5M0MzLjQxMDQ5IDkuNDc2MzMgMy4zNzY0NyA5LjM1NzQxIDMuNDEwNzUgOS4yNTY3OUwzLjg2MzQ3IDguMTQwOTNMMy42MTc0OSA3Ljc3NDg4TDMuNDIzNDcgNy4zNzg4M0wyLjIzMDc1IDcuMjEyOTdDMi4xMjY0NyA3LjE5MjM1IDIuMDQwNDkgNy4xMDM0MiAyLjA0MjQ1IDYuOTg2ODJMMi4wNDE4NyA1LjE4NTgyQzIuMDQzODMgNS4wNjkyMiAyLjExOTA5IDQuOTc5NTggMi4yMTcwNCA0Ljk2OTIyTDMuNDIwNjUgNC43OTM5M0wzLjg2NzQ5IDQuMDI3ODhMMy40MTEwNSAyLjkxNzMxQzMuMzczMzcgMi44MTIwNCAzLjQxMTMxIDIuNjk3NzYgMy41MTUyMyAyLjYzNzc2TDUuMDc0MDggMS43Mzc3NkM1LjE2OTM0IDEuNjgyNzYgNS4yODcyOSAxLjcwNzA0IDUuMzU5NjEgMS43OTIzMUw2LjExOTE1IDIuNzI3ODhMNi45ODAwMSAyLjczODkzTDcuNzI0OTYgMS43ODkyMkM3Ljc5MTU2IDEuNzA0NTggNy45MTU0OCAxLjY3OTIyIDguMDA4NzkgMS43NDA4Mkw5LjU2ODIxIDIuNjQxODJDOS42NzAxNyAyLjY5ODQyIDkuNzEyODUgMi44MTIzNCA5LjY4NzIzIDIuOTA3OTdMOS4yMTcxOCA0LjAzMzgzTDkuNDYzMTYgNC4zOTk4OEw5LjY1NzE4IDQuNzk1OTNaIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOS45LDEzLjYgMy42LDcuNCA0LjQsNi42IDkuOSwxMi4yIDE1LjQsNi43IDE2LjEsNy40ICIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNS45TDksOS43bDMuOC0zLjhsMS4yLDEuMmwtNC45LDVsLTQuOS01TDUuMiw1Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNy41TDksMTEuMmwzLjgtMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-caret-left: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik0xMC44LDEyLjhMNy4xLDlsMy44LTMuOGwwLDcuNkgxMC44eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-caret-right: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik03LjIsNS4yTDEwLjksOWwtMy44LDMuOFY1LjJINy4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-caret-up-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTUuNCwxMy4zIDkuOSw3LjcgNC40LDEzLjIgMy42LDEyLjUgOS45LDYuMyAxNi4xLDEyLjYgIi8+Cgk8L2c+Cjwvc3ZnPgo=);
  --jp-icon-caret-up: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik01LjIsMTAuNUw5LDYuOGwzLjgsMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-case-sensitive: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgogIDxnIGNsYXNzPSJqcC1pY29uLWFjY2VudDIiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTcuNiw4aDAuOWwzLjUsOGgtMS4xTDEwLDE0SDZsLTAuOSwySDRMNy42LDh6IE04LDkuMUw2LjQsMTNoMy4yTDgsOS4xeiIvPgogICAgPHBhdGggZD0iTTE2LjYsOS44Yy0wLjIsMC4xLTAuNCwwLjEtMC43LDAuMWMtMC4yLDAtMC40LTAuMS0wLjYtMC4yYy0wLjEtMC4xLTAuMi0wLjQtMC4yLTAuNyBjLTAuMywwLjMtMC42LDAuNS0wLjksMC43Yy0wLjMsMC4xLTAuNywwLjItMS4xLDAuMmMtMC4zLDAtMC41LDAtMC43LTAuMWMtMC4yLTAuMS0wLjQtMC4yLTAuNi0wLjNjLTAuMi0wLjEtMC4zLTAuMy0wLjQtMC41IGMtMC4xLTAuMi0wLjEtMC40LTAuMS0wLjdjMC0wLjMsMC4xLTAuNiwwLjItMC44YzAuMS0wLjIsMC4zLTAuNCwwLjQtMC41QzEyLDcsMTIuMiw2LjksMTIuNSw2LjhjMC4yLTAuMSwwLjUtMC4xLDAuNy0wLjIgYzAuMy0wLjEsMC41LTAuMSwwLjctMC4xYzAuMiwwLDAuNC0wLjEsMC42LTAuMWMwLjIsMCwwLjMtMC4xLDAuNC0wLjJjMC4xLTAuMSwwLjItMC4yLDAuMi0wLjRjMC0xLTEuMS0xLTEuMy0xIGMtMC40LDAtMS40LDAtMS40LDEuMmgtMC45YzAtMC40LDAuMS0wLjcsMC4yLTFjMC4xLTAuMiwwLjMtMC40LDAuNS0wLjZjMC4yLTAuMiwwLjUtMC4zLDAuOC0wLjNDMTMuMyw0LDEzLjYsNCwxMy45LDQgYzAuMywwLDAuNSwwLDAuOCwwLjFjMC4zLDAsMC41LDAuMSwwLjcsMC4yYzAuMiwwLjEsMC40LDAuMywwLjUsMC41QzE2LDUsMTYsNS4yLDE2LDUuNnYyLjljMCwwLjIsMCwwLjQsMCwwLjUgYzAsMC4xLDAuMSwwLjIsMC4zLDAuMmMwLjEsMCwwLjIsMCwwLjMsMFY5Ljh6IE0xNS4yLDYuOWMtMS4yLDAuNi0zLjEsMC4yLTMuMSwxLjRjMCwxLjQsMy4xLDEsMy4xLTAuNVY2Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-check: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-circle-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-circle: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjgiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-clear: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8bWFzayBpZD0iZG9udXRIb2xlIj4KICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBmaWxsPSJibGFjayIvPgogIDwvbWFzaz4KCiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxyZWN0IGhlaWdodD0iMTgiIHdpZHRoPSIyIiB4PSIxMSIgeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1LCAxMiwgMTIpIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgbWFzaz0idXJsKCNkb251dEhvbGUpIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-close: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1ub25lIGpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIGpwLWljb24zLWhvdmVyIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIi8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIGpwLWljb24tYWNjZW50Mi1ob3ZlciIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPgogIDwvZz4KCiAgPGcgY2xhc3M9ImpwLWljb24tbm9uZSBqcC1pY29uLWJ1c3kiIGZpbGw9Im5vbmUiPgogICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNyIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-console: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwMCAyMDAiPgogIDxnIGNsYXNzPSJqcC1pY29uLWJyYW5kMSBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMjg4RDEiPgogICAgPHBhdGggZD0iTTIwIDE5LjhoMTYwdjE1OS45SDIweiIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNmZmYiPgogICAgPHBhdGggZD0iTTEwNSAxMjcuM2g0MHYxMi44aC00MHpNNTEuMSA3N0w3NCA5OS45bC0yMy4zIDIzLjMgMTAuNSAxMC41IDIzLjMtMjMuM0w5NSA5OS45IDg0LjUgODkuNCA2MS42IDY2LjV6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-copy: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTExLjksMUgzLjJDMi40LDEsMS43LDEuNywxLjcsMi41djEwLjJoMS41VjIuNWg4LjdWMXogTTE0LjEsMy45aC04Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTAuMmMwLDAuOCwwLjcsMS41LDEuNSwxLjVoOCBjMC44LDAsMS41LTAuNywxLjUtMS41VjUuNEMxNS41LDQuNiwxNC45LDMuOSwxNC4xLDMuOXogTTE0LjEsMTUuNWgtOFY1LjRoOFYxNS41eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-cut: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkuNjQgNy42NGMuMjMtLjUuMzYtMS4wNS4zNi0xLjY0IDAtMi4yMS0xLjc5LTQtNC00UzIgMy43OSAyIDZzMS43OSA0IDQgNGMuNTkgMCAxLjE0LS4xMyAxLjY0LS4zNkwxMCAxMmwtMi4zNiAyLjM2QzcuMTQgMTQuMTMgNi41OSAxNCA2IDE0Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRjMC0uNTktLjEzLTEuMTQtLjM2LTEuNjRMMTIgMTRsNyA3aDN2LTFMOS42NCA3LjY0ek02IDhjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTAgMTJjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTYtNy41Yy0uMjggMC0uNS0uMjItLjUtLjVzLjIyLS41LjUtLjUuNS4yMi41LjUtLjIyLjUtLjUuNXpNMTkgM2wtNiA2IDIgMiA3LTdWM3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-download: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-edit: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-ellipses: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iNSIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjEyIiByPSIyIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-extension: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwLjUgMTFIMTlWN2MwLTEuMS0uOS0yLTItMmgtNFYzLjVDMTMgMi4xMiAxMS44OCAxIDEwLjUgMVM4IDIuMTIgOCAzLjVWNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjMuOEgzLjVjMS40OSAwIDIuNyAxLjIxIDIuNyAyLjdzLTEuMjEgMi43LTIuNyAyLjdIMlYyMGMwIDEuMS45IDIgMiAyaDMuOHYtMS41YzAtMS40OSAxLjIxLTIuNyAyLjctMi43IDEuNDkgMCAyLjcgMS4yMSAyLjcgMi43VjIySDE3YzEuMSAwIDItLjkgMi0ydi00aDEuNWMxLjM4IDAgMi41LTEuMTIgMi41LTIuNVMyMS44OCAxMSAyMC41IDExeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-fast-forward: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTQgMThsOC41LTZMNCA2djEyem05LTEydjEybDguNS02TDEzIDZ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-file-upload: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkgMTZoNnYtNmg0bC03LTctNyA3aDR6bS00IDJoMTR2Mkg1eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-file: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuMyA4LjJsLTUuNS01LjVjLS4zLS4zLS43LS41LTEuMi0uNUgzLjljLS44LjEtMS42LjktMS42IDEuOHYxNC4xYzAgLjkuNyAxLjYgMS42IDEuNmgxNC4yYy45IDAgMS42LS43IDEuNi0xLjZWOS40Yy4xLS41LS4xLS45LS40LTEuMnptLTUuOC0zLjNsMy40IDMuNmgtMy40VjQuOXptMy45IDEyLjdINC43Yy0uMSAwLS4yIDAtLjItLjJWNC43YzAtLjIuMS0uMy4yLS4zaDcuMnY0LjRzMCAuOC4zIDEuMWMuMy4zIDEuMS4zIDEuMS4zaDQuM3Y3LjJzLS4xLjItLjIuMnoiLz4KPC9zdmc+Cg==);
  --jp-icon-filter-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEwIDE4aDR2LTJoLTR2MnpNMyA2djJoMThWNkgzem0zIDdoMTJ2LTJINnYyeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yaC04bC0yLTJ6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-html5: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMDAiIGQ9Ik0xMDguNCAwaDIzdjIyLjhoMjEuMlYwaDIzdjY5aC0yM1Y0NmgtMjF2MjNoLTIzLjJNMjA2IDIzaC0yMC4zVjBoNjMuN3YyM0gyMjl2NDZoLTIzbTUzLjUtNjloMjQuMWwxNC44IDI0LjNMMzEzLjIgMGgyNC4xdjY5aC0yM1YzNC44bC0xNi4xIDI0LjgtMTYuMS0yNC44VjY5aC0yMi42bTg5LjItNjloMjN2NDYuMmgzMi42VjY5aC01NS42Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI2U0NGQyNiIgZD0iTTEwNy42IDQ3MWwtMzMtMzcwLjRoMzYyLjhsLTMzIDM3MC4yTDI1NS43IDUxMiIvPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNmMTY1MjkiIGQ9Ik0yNTYgNDgwLjVWMTMxaDE0OC4zTDM3NiA0NDciLz4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNlYmViZWIiIGQ9Ik0xNDIgMTc2LjNoMTE0djQ1LjRoLTY0LjJsNC4yIDQ2LjVoNjB2NDUuM0gxNTQuNG0yIDIyLjhIMjAybDMuMiAzNi4zIDUwLjggMTMuNnY0Ny40bC05My4yLTI2Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIiBmaWxsPSIjZmZmIiBkPSJNMzY5LjYgMTc2LjNIMjU1Ljh2NDUuNGgxMDkuNm0tNC4xIDQ2LjVIMjU1Ljh2NDUuNGg1NmwtNS4zIDU5LTUwLjcgMTMuNnY0Ny4ybDkzLTI1LjgiLz4KPC9zdmc+Cg==);
  --jp-icon-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1icmFuZDQganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNGRkYiIGQ9Ik0yLjIgMi4yaDE3LjV2MTcuNUgyLjJ6Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzNGNTFCNSIgZD0iTTIuMiAyLjJ2MTcuNWgxNy41bC4xLTE3LjVIMi4yem0xMi4xIDIuMmMxLjIgMCAyLjIgMSAyLjIgMi4ycy0xIDIuMi0yLjIgMi4yLTIuMi0xLTIuMi0yLjIgMS0yLjIgMi4yLTIuMnpNNC40IDE3LjZsMy4zLTguOCAzLjMgNi42IDIuMi0zLjIgNC40IDUuNEg0LjR6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-inspector: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tNSAxNEg0di00aDExdjR6bTAtNUg0VjloMTF2NHptNSA1aC00VjloNHY5eiIvPgo8L3N2Zz4K);
  --jp-icon-json: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMSBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNGOUE4MjUiPgogICAgPHBhdGggZD0iTTIwLjIgMTEuOGMtMS42IDAtMS43LjUtMS43IDEgMCAuNC4xLjkuMSAxLjMuMS41LjEuOS4xIDEuMyAwIDEuNy0xLjQgMi4zLTMuNSAyLjNoLS45di0xLjloLjVjMS4xIDAgMS40IDAgMS40LS44IDAtLjMgMC0uNi0uMS0xIDAtLjQtLjEtLjgtLjEtMS4yIDAtMS4zIDAtMS44IDEuMy0yLTEuMy0uMi0xLjMtLjctMS4zLTIgMC0uNC4xLS44LjEtMS4yLjEtLjQuMS0uNy4xLTEgMC0uOC0uNC0uNy0xLjQtLjhoLS41VjQuMWguOWMyLjIgMCAzLjUuNyAzLjUgMi4zIDAgLjQtLjEuOS0uMSAxLjMtLjEuNS0uMS45LS4xIDEuMyAwIC41LjIgMSAxLjcgMXYxLjh6TTEuOCAxMC4xYzEuNiAwIDEuNy0uNSAxLjctMSAwLS40LS4xLS45LS4xLTEuMy0uMS0uNS0uMS0uOS0uMS0xLjMgMC0xLjYgMS40LTIuMyAzLjUtMi4zaC45djEuOWgtLjVjLTEgMC0xLjQgMC0xLjQuOCAwIC4zIDAgLjYuMSAxIDAgLjIuMS42LjEgMSAwIDEuMyAwIDEuOC0xLjMgMkM2IDExLjIgNiAxMS43IDYgMTNjMCAuNC0uMS44LS4xIDEuMi0uMS4zLS4xLjctLjEgMSAwIC44LjMuOCAxLjQuOGguNXYxLjloLS45Yy0yLjEgMC0zLjUtLjYtMy41LTIuMyAwLS40LjEtLjkuMS0xLjMuMS0uNS4xLS45LjEtMS4zIDAtLjUtLjItMS0xLjctMXYtMS45eiIvPgogICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMy44IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY3g9IjExIiBjeT0iOC4yIiByPSIyLjEiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-jupyter-favicon: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE2NSIgdmlld0JveD0iMCAwIDE1MiAxNjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA3ODk0NywgMTEwLjU4MjkyNykiIGQ9Ik03NS45NDIyODQyLDI5LjU4MDQ1NjEgQzQzLjMwMjM5NDcsMjkuNTgwNDU2MSAxNC43OTY3ODMyLDE3LjY1MzQ2MzQgMCwwIEM1LjUxMDgzMjExLDE1Ljg0MDY4MjkgMTUuNzgxNTM4OSwyOS41NjY3NzMyIDI5LjM5MDQ5NDcsMzkuMjc4NDE3MSBDNDIuOTk5Nyw0OC45ODk4NTM3IDU5LjI3MzcsNTQuMjA2NzgwNSA3NS45NjA1Nzg5LDU0LjIwNjc4MDUgQzkyLjY0NzQ1NzksNTQuMjA2NzgwNSAxMDguOTIxNDU4LDQ4Ljk4OTg1MzcgMTIyLjUzMDY2MywzOS4yNzg0MTcxIEMxMzYuMTM5NDUzLDI5LjU2Njc3MzIgMTQ2LjQxMDI4NCwxNS44NDA2ODI5IDE1MS45MjExNTgsMCBDMTM3LjA4Nzg2OCwxNy42NTM0NjM0IDEwOC41ODI1ODksMjkuNTgwNDU2MSA3NS45NDIyODQyLDI5LjU4MDQ1NjEgTDc1Ljk0MjI4NDIsMjkuNTgwNDU2MSBaIiAvPgogICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMzczNjgsIDAuNzA0ODc4KSIgZD0iTTc1Ljk3ODQ1NzksMjQuNjI2NDA3MyBDMTA4LjYxODc2MywyNC42MjY0MDczIDEzNy4xMjQ0NTgsMzYuNTUzNDQxNSAxNTEuOTIxMTU4LDU0LjIwNjc4MDUgQzE0Ni40MTAyODQsMzguMzY2MjIyIDEzNi4xMzk0NTMsMjQuNjQwMTMxNyAxMjIuNTMwNjYzLDE0LjkyODQ4NzggQzEwOC45MjE0NTgsNS4yMTY4NDM5IDkyLjY0NzQ1NzksMCA3NS45NjA1Nzg5LDAgQzU5LjI3MzcsMCA0Mi45OTk3LDUuMjE2ODQzOSAyOS4zOTA0OTQ3LDE0LjkyODQ4NzggQzE1Ljc4MTUzODksMjQuNjQwMTMxNyA1LjUxMDgzMjExLDM4LjM2NjIyMiAwLDU0LjIwNjc4MDUgQzE0LjgzMzA4MTYsMzYuNTg5OTI5MyA0My4zMzg1Njg0LDI0LjYyNjQwNzMgNzUuOTc4NDU3OSwyNC42MjY0MDczIEw3NS45Nzg0NTc5LDI0LjYyNjQwNzMgWiIgLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-jupyter: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAzOSA1MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzOCAtMjI4MSkiPgogICAgPGcgY2xhc3M9ImpwLWljb24td2FybjAiIGZpbGw9IiNGMzc3MjYiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5Ljc0IDIzMTEuOTgpIiBkPSJNIDE4LjI2NDYgNy4xMzQxMUMgMTAuNDE0NSA3LjEzNDExIDMuNTU4NzIgNC4yNTc2IDAgMEMgMS4zMjUzOSAzLjgyMDQgMy43OTU1NiA3LjEzMDgxIDcuMDY4NiA5LjQ3MzAzQyAxMC4zNDE3IDExLjgxNTIgMTQuMjU1NyAxMy4wNzM0IDE4LjI2OSAxMy4wNzM0QyAyMi4yODIzIDEzLjA3MzQgMjYuMTk2MyAxMS44MTUyIDI5LjQ2OTQgOS40NzMwM0MgMzIuNzQyNCA3LjEzMDgxIDM1LjIxMjYgMy44MjA0IDM2LjUzOCAwQyAzMi45NzA1IDQuMjU3NiAyNi4xMTQ4IDcuMTM0MTEgMTguMjY0NiA3LjEzNDExWiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5LjczIDIyODUuNDgpIiBkPSJNIDE4LjI3MzMgNS45MzkzMUMgMjYuMTIzNSA1LjkzOTMxIDMyLjk3OTMgOC44MTU4MyAzNi41MzggMTMuMDczNEMgMzUuMjEyNiA5LjI1MzAzIDMyLjc0MjQgNS45NDI2MiAyOS40Njk0IDMuNjAwNEMgMjYuMTk2MyAxLjI1ODE4IDIyLjI4MjMgMCAxOC4yNjkgMEMgMTQuMjU1NyAwIDEwLjM0MTcgMS4yNTgxOCA3LjA2ODYgMy42MDA0QyAzLjc5NTU2IDUuOTQyNjIgMS4zMjUzOSA5LjI1MzAzIDAgMTMuMDczNEMgMy41Njc0NSA4LjgyNDYzIDEwLjQyMzIgNS45MzkzMSAxOC4yNzMzIDUuOTM5MzFaIi8+CiAgICA8L2c+CiAgICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjY5LjMgMjI4MS4zMSkiIGQ9Ik0gNS44OTM1MyAyLjg0NEMgNS45MTg4OSAzLjQzMTY1IDUuNzcwODUgNC4wMTM2NyA1LjQ2ODE1IDQuNTE2NDVDIDUuMTY1NDUgNS4wMTkyMiA0LjcyMTY4IDUuNDIwMTUgNC4xOTI5OSA1LjY2ODUxQyAzLjY2NDMgNS45MTY4OCAzLjA3NDQ0IDYuMDAxNTEgMi40OTgwNSA1LjkxMTcxQyAxLjkyMTY2IDUuODIxOSAxLjM4NDYzIDUuNTYxNyAwLjk1NDg5OCA1LjE2NDAxQyAwLjUyNTE3IDQuNzY2MzMgMC4yMjIwNTYgNC4yNDkwMyAwLjA4MzkwMzcgMy42Nzc1N0MgLTAuMDU0MjQ4MyAzLjEwNjExIC0wLjAyMTIzIDIuNTA2MTcgMC4xNzg3ODEgMS45NTM2NEMgMC4zNzg3OTMgMS40MDExIDAuNzM2ODA5IDAuOTIwODE3IDEuMjA3NTQgMC41NzM1MzhDIDEuNjc4MjYgMC4yMjYyNTkgMi4yNDA1NSAwLjAyNzU5MTkgMi44MjMyNiAwLjAwMjY3MjI5QyAzLjYwMzg5IC0wLjAzMDcxMTUgNC4zNjU3MyAwLjI0OTc4OSA0Ljk0MTQyIDAuNzgyNTUxQyA1LjUxNzExIDEuMzE1MzEgNS44NTk1NiAyLjA1Njc2IDUuODkzNTMgMi44NDRaIi8+CiAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MzkuOCAyMzIzLjgxKSIgZD0iTSA3LjQyNzg5IDMuNTgzMzhDIDcuNDYwMDggNC4zMjQzIDcuMjczNTUgNS4wNTgxOSA2Ljg5MTkzIDUuNjkyMTNDIDYuNTEwMzEgNi4zMjYwNyA1Ljk1MDc1IDYuODMxNTYgNS4yODQxMSA3LjE0NDZDIDQuNjE3NDcgNy40NTc2MyAzLjg3MzcxIDcuNTY0MTQgMy4xNDcwMiA3LjQ1MDYzQyAyLjQyMDMyIDcuMzM3MTIgMS43NDMzNiA3LjAwODcgMS4yMDE4NCA2LjUwNjk1QyAwLjY2MDMyOCA2LjAwNTIgMC4yNzg2MSA1LjM1MjY4IDAuMTA1MDE3IDQuNjMyMDJDIC0wLjA2ODU3NTcgMy45MTEzNSAtMC4wMjYyMzYxIDMuMTU0OTQgMC4yMjY2NzUgMi40NTg1NkMgMC40Nzk1ODcgMS43NjIxNyAwLjkzMTY5NyAxLjE1NzEzIDEuNTI1NzYgMC43MjAwMzNDIDIuMTE5ODMgMC4yODI5MzUgMi44MjkxNCAwLjAzMzQzOTUgMy41NjM4OSAwLjAwMzEzMzQ0QyA0LjU0NjY3IC0wLjAzNzQwMzMgNS41MDUyOSAwLjMxNjcwNiA2LjIyOTYxIDAuOTg3ODM1QyA2Ljk1MzkzIDEuNjU4OTYgNy4zODQ4NCAyLjU5MjM1IDcuNDI3ODkgMy41ODMzOEwgNy40Mjc4OSAzLjU4MzM4WiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM4LjM2IDIyODYuMDYpIiBkPSJNIDIuMjc0NzEgNC4zOTYyOUMgMS44NDM2MyA0LjQxNTA4IDEuNDE2NzEgNC4zMDQ0NSAxLjA0Nzk5IDQuMDc4NDNDIDAuNjc5MjY4IDMuODUyNCAwLjM4NTMyOCAzLjUyMTE0IDAuMjAzMzcxIDMuMTI2NTZDIDAuMDIxNDEzNiAyLjczMTk4IC0wLjA0MDM3OTggMi4yOTE4MyAwLjAyNTgxMTYgMS44NjE4MUMgMC4wOTIwMDMxIDEuNDMxOCAwLjI4MzIwNCAxLjAzMTI2IDAuNTc1MjEzIDAuNzEwODgzQyAwLjg2NzIyMiAwLjM5MDUxIDEuMjQ2OTEgMC4xNjQ3MDggMS42NjYyMiAwLjA2MjA1OTJDIDIuMDg1NTMgLTAuMDQwNTg5NyAyLjUyNTYxIC0wLjAxNTQ3MTQgMi45MzA3NiAwLjEzNDIzNUMgMy4zMzU5MSAwLjI4Mzk0MSAzLjY4NzkyIDAuNTUxNTA1IDMuOTQyMjIgMC45MDMwNkMgNC4xOTY1MiAxLjI1NDYyIDQuMzQxNjkgMS42NzQzNiA0LjM1OTM1IDIuMTA5MTZDIDQuMzgyOTkgMi42OTEwNyA0LjE3Njc4IDMuMjU4NjkgMy43ODU5NyAzLjY4NzQ2QyAzLjM5NTE2IDQuMTE2MjQgMi44NTE2NiA0LjM3MTE2IDIuMjc0NzEgNC4zOTYyOUwgMi4yNzQ3MSA0LjM5NjI5WiIvPgogICAgPC9nPgogIDwvZz4+Cjwvc3ZnPgo=);
  --jp-icon-jupyterlab-wordmark: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIHZpZXdCb3g9IjAgMCAxODYwLjggNDc1Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0RTRFNEUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4MC4xMzY0MDEsIDY0LjI3MTQ5MykiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDU4Ljg3NTU2NikiPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA4NzYwMywgMC4xNDAyOTQpIj4KICAgICAgICA8cGF0aCBkPSJNLTQyNi45LDE2OS44YzAsNDguNy0zLjcsNjQuNy0xMy42LDc2LjRjLTEwLjgsMTAtMjUsMTUuNS0zOS43LDE1LjVsMy43LDI5IGMyMi44LDAuMyw0NC44LTcuOSw2MS45LTIzLjFjMTcuOC0xOC41LDI0LTQ0LjEsMjQtODMuM1YwSC00Mjd2MTcwLjFMLTQyNi45LDE2OS44TC00MjYuOSwxNjkuOHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU1LjA0NTI5NiwgNTYuODM3MTA0KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTYyNDUzLCAxLjc5OTg0MikiPgogICAgICAgIDxwYXRoIGQ9Ik0tMzEyLDE0OGMwLDIxLDAsMzkuNSwxLjcsNTUuNGgtMzEuOGwtMi4xLTMzLjNoLTAuOGMtNi43LDExLjYtMTYuNCwyMS4zLTI4LDI3LjkgYy0xMS42LDYuNi0yNC44LDEwLTM4LjIsOS44Yy0zMS40LDAtNjktMTcuNy02OS04OVYwaDM2LjR2MTEyLjdjMCwzOC43LDExLjYsNjQuNyw0NC42LDY0LjdjMTAuMy0wLjIsMjAuNC0zLjUsMjguOS05LjQgYzguNS01LjksMTUuMS0xNC4zLDE4LjktMjMuOWMyLjItNi4xLDMuMy0xMi41LDMuMy0xOC45VjAuMmgzNi40VjE0OEgtMzEyTC0zMTIsMTQ4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTAuMDEzMzIyLCA1My40Nzk2MzgpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS43MDY0NTgsIDAuMjMxNDI1KSI+CiAgICAgICAgPHBhdGggZD0iTS00NzguNiw3MS40YzAtMjYtMC44LTQ3LTEuNy02Ni43aDMyLjdsMS43LDM0LjhoMC44YzcuMS0xMi41LDE3LjUtMjIuOCwzMC4xLTI5LjcgYzEyLjUtNywyNi43LTEwLjMsNDEtOS44YzQ4LjMsMCw4NC43LDQxLjcsODQuNywxMDMuM2MwLDczLjEtNDMuNywxMDkuMi05MSwxMDkuMmMtMTIuMSwwLjUtMjQuMi0yLjItMzUtNy44IGMtMTAuOC01LjYtMTkuOS0xMy45LTI2LjYtMjQuMmgtMC44VjI5MWgtMzZ2LTIyMEwtNDc4LjYsNzEuNEwtNDc4LjYsNzEuNHogTS00NDIuNiwxMjUuNmMwLjEsNS4xLDAuNiwxMC4xLDEuNywxNS4xIGMzLDEyLjMsOS45LDIzLjMsMTkuOCwzMS4xYzkuOSw3LjgsMjIuMSwxMi4xLDM0LjcsMTIuMWMzOC41LDAsNjAuNy0zMS45LDYwLjctNzguNWMwLTQwLjctMjEuMS03NS42LTU5LjUtNzUuNiBjLTEyLjksMC40LTI1LjMsNS4xLTM1LjMsMTMuNGMtOS45LDguMy0xNi45LDE5LjctMTkuNiwzMi40Yy0xLjUsNC45LTIuMywxMC0yLjUsMTUuMVYxMjUuNkwtNDQyLjYsMTI1LjZMLTQ0Mi42LDEyNS42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDYuNzQwNzI2LCA1Ni44MzcxMDQpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43NTEyMjYsIDEuOTg5Mjk5KSI+CiAgICAgICAgPHBhdGggZD0iTS00NDAuOCwwbDQzLjcsMTIwLjFjNC41LDEzLjQsOS41LDI5LjQsMTIuOCw0MS43aDAuOGMzLjctMTIuMiw3LjktMjcuNywxMi44LTQyLjQgbDM5LjctMTE5LjJoMzguNUwtMzQ2LjksMTQ1Yy0yNiw2OS43LTQzLjcsMTA1LjQtNjguNiwxMjcuMmMtMTIuNSwxMS43LTI3LjksMjAtNDQuNiwyMy45bC05LjEtMzEuMSBjMTEuNy0zLjksMjIuNS0xMC4xLDMxLjgtMTguMWMxMy4yLTExLjEsMjMuNy0yNS4yLDMwLjYtNDEuMmMxLjUtMi44LDIuNS01LjcsMi45LTguOGMtMC4zLTMuMy0xLjItNi42LTIuNS05LjdMLTQ4MC4yLDAuMSBoMzkuN0wtNDQwLjgsMEwtNDQwLjgsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODIyLjc0ODEwNCwgMC4wMDAwMDApIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS40NjQwNTAsIDAuMzc4OTE0KSI+CiAgICAgICAgPHBhdGggZD0iTS00MTMuNywwdjU4LjNoNTJ2MjguMmgtNTJWMTk2YzAsMjUsNywzOS41LDI3LjMsMzkuNWM3LjEsMC4xLDE0LjItMC43LDIxLjEtMi41IGwxLjcsMjcuN2MtMTAuMywzLjctMjEuMyw1LjQtMzIuMiw1Yy03LjMsMC40LTE0LjYtMC43LTIxLjMtMy40Yy02LjgtMi43LTEyLjktNi44LTE3LjktMTIuMWMtMTAuMy0xMC45LTE0LjEtMjktMTQuMS01Mi45IFY4Ni41aC0zMVY1OC4zaDMxVjkuNkwtNDEzLjcsMEwtNDEzLjcsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTc0LjQzMzI4NiwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTkwMDM0LCAwLjYxMDMzOSkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDQ1LjgsMTEzYzAuOCw1MCwzMi4yLDcwLjYsNjguNiw3MC42YzE5LDAuNiwzNy45LTMsNTUuMy0xMC41bDYuMiwyNi40IGMtMjAuOSw4LjktNDMuNSwxMy4xLTY2LjIsMTIuNmMtNjEuNSwwLTk4LjMtNDEuMi05OC4zLTEwMi41Qy00ODAuMiw0OC4yLTQ0NC43LDAtMzg2LjUsMGM2NS4yLDAsODIuNyw1OC4zLDgyLjcsOTUuNyBjLTAuMSw1LjgtMC41LDExLjUtMS4yLDE3LjJoLTE0MC42SC00NDUuOEwtNDQ1LjgsMTEzeiBNLTMzOS4yLDg2LjZjMC40LTIzLjUtOS41LTYwLjEtNTAuNC02MC4xIGMtMzYuOCwwLTUyLjgsMzQuNC01NS43LDYwLjFILTMzOS4yTC0zMzkuMiw4Ni42TC0zMzkuMiw4Ni42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAxLjk2MTA1OCwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMTc5NjQwLCAwLjcwNTA2OCkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDc4LjYsNjhjMC0yMy45LTAuNC00NC41LTEuNy02My40aDMxLjhsMS4yLDM5LjloMS43YzkuMS0yNy4zLDMxLTQ0LjUsNTUuMy00NC41IGMzLjUtMC4xLDcsMC40LDEwLjMsMS4ydjM0LjhjLTQuMS0wLjktOC4yLTEuMy0xMi40LTEuMmMtMjUuNiwwLTQzLjcsMTkuNy00OC43LDQ3LjRjLTEsNS43LTEuNiwxMS41LTEuNywxNy4ydjEwOC4zaC0zNlY2OCBMLTQ3OC42LDY4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCBkPSJNMTM1Mi4zLDMyNi4yaDM3VjI4aC0zN1YzMjYuMnogTTE2MDQuOCwzMjYuMmMtMi41LTEzLjktMy40LTMxLjEtMy40LTQ4Ljd2LTc2IGMwLTQwLjctMTUuMS04My4xLTc3LjMtODMuMWMtMjUuNiwwLTUwLDcuMS02Ni44LDE4LjFsOC40LDI0LjRjMTQuMy05LjIsMzQtMTUuMSw1My0xNS4xYzQxLjYsMCw0Ni4yLDMwLjIsNDYuMiw0N3Y0LjIgYy03OC42LTAuNC0xMjIuMywyNi41LTEyMi4zLDc1LjZjMCwyOS40LDIxLDU4LjQsNjIuMiw1OC40YzI5LDAsNTAuOS0xNC4zLDYyLjItMzAuMmgxLjNsMi45LDI1LjZIMTYwNC44eiBNMTU2NS43LDI1Ny43IGMwLDMuOC0wLjgsOC0yLjEsMTEuOGMtNS45LDE3LjItMjIuNywzNC00OS4yLDM0Yy0xOC45LDAtMzQuOS0xMS4zLTM0LjktMzUuM2MwLTM5LjUsNDUuOC00Ni42LDg2LjItNDUuOFYyNTcuN3ogTTE2OTguNSwzMjYuMiBsMS43LTMzLjZoMS4zYzE1LjEsMjYuOSwzOC43LDM4LjIsNjguMSwzOC4yYzQ1LjQsMCw5MS4yLTM2LjEsOTEuMi0xMDguOGMwLjQtNjEuNy0zNS4zLTEwMy43LTg1LjctMTAzLjcgYy0zMi44LDAtNTYuMywxNC43LTY5LjMsMzcuNGgtMC44VjI4aC0zNi42djI0NS43YzAsMTguMS0wLjgsMzguNi0xLjcsNTIuNUgxNjk4LjV6IE0xNzA0LjgsMjA4LjJjMC01LjksMS4zLTEwLjksMi4xLTE1LjEgYzcuNi0yOC4xLDMxLjEtNDUuNCw1Ni4zLTQ1LjRjMzkuNSwwLDYwLjUsMzQuOSw2MC41LDc1LjZjMCw0Ni42LTIzLjEsNzguMS02MS44LDc4LjFjLTI2LjksMC00OC4zLTE3LjYtNTUuNS00My4zIGMtMC44LTQuMi0xLjctOC44LTEuNy0xMy40VjIwOC4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgZmlsbD0iIzYxNjE2MSIgZD0iTTE1IDlIOXY2aDZWOXptLTIgNGgtMnYtMmgydjJ6bTgtMlY5aC0yVjdjMC0xLjEtLjktMi0yLTJoLTJWM2gtMnYyaC0yVjNIOXYySDdjLTEuMSAwLTIgLjktMiAydjJIM3YyaDJ2MkgzdjJoMnYyYzAgMS4xLjkgMiAyIDJoMnYyaDJ2LTJoMnYyaDJ2LTJoMmMxLjEgMCAyLS45IDItMnYtMmgydi0yaC0ydi0yaDJ6bS00IDZIN1Y3aDEwdjEweiIvPgo8L3N2Zz4K);
  --jp-icon-keyboard: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMTdjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yem0tOSAzaDJ2MmgtMlY4em0wIDNoMnYyaC0ydi0yek04IDhoMnYySDhWOHptMCAzaDJ2Mkg4di0yem0tMSAySDV2LTJoMnYyem0wLTNINVY4aDJ2MnptOSA3SDh2LTJoOHYyem0wLTRoLTJ2LTJoMnYyem0wLTNoLTJWOGgydjJ6bTMgM2gtMnYtMmgydjJ6bTAtM2gtMlY4aDJ2MnoiLz4KPC9zdmc+Cg==);
  --jp-icon-launcher: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkgMTlINVY1aDdWM0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3oiLz4KPC9zdmc+Cg==);
  --jp-icon-line-form: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNS44OCA0LjEyTDEzLjc2IDEybC03Ljg4IDcuODhMOCAyMmwxMC0xMEw4IDJ6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-link: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xOSA1djE0SDVWNWgxNG0xLjEtMkgzLjljLS41IDAtLjkuNC0uOS45djE2LjJjMCAuNC40LjkuOS45aDE2LjJjLjQgMCAuOS0uNS45LS45VjMuOWMwLS41LS41LS45LS45LS45ek0xMSA3aDZ2MmgtNlY3em0wIDRoNnYyaC02di0yem0wIDRoNnYyaC02ek03IDdoMnYySDd6bTAgNGgydjJIN3ptMCA0aDJ2Mkg3eiIvPgo8L3N2Zz4=);
  --jp-icon-listings-info: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTAuOTc4IDUwLjk3OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAuOTc4IDUwLjk3ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik00My41Miw3LjQ1OEMzOC43MTEsMi42NDgsMzIuMzA3LDAsMjUuNDg5LDBDMTguNjcsMCwxMi4yNjYsMi42NDgsNy40NTgsNy40NTgNCgkJCQljLTkuOTQzLDkuOTQxLTkuOTQzLDI2LjExOSwwLDM2LjA2MmM0LjgwOSw0LjgwOSwxMS4yMTIsNy40NTYsMTguMDMxLDcuNDU4YzAsMCwwLjAwMSwwLDAuMDAyLDANCgkJCQljNi44MTYsMCwxMy4yMjEtMi42NDgsMTguMDI5LTcuNDU4YzQuODA5LTQuODA5LDcuNDU3LTExLjIxMiw3LjQ1Ny0xOC4wM0M1MC45NzcsMTguNjcsNDguMzI4LDEyLjI2Niw0My41Miw3LjQ1OHoNCgkJCQkgTTQyLjEwNiw0Mi4xMDVjLTQuNDMyLDQuNDMxLTEwLjMzMiw2Ljg3Mi0xNi42MTUsNi44NzJoLTAuMDAyYy02LjI4NS0wLjAwMS0xMi4xODctMi40NDEtMTYuNjE3LTYuODcyDQoJCQkJYy05LjE2Mi05LjE2My05LjE2Mi0yNC4wNzEsMC0zMy4yMzNDMTMuMzAzLDQuNDQsMTkuMjA0LDIsMjUuNDg5LDJjNi4yODQsMCwxMi4xODYsMi40NCwxNi42MTcsNi44NzINCgkJCQljNC40MzEsNC40MzEsNi44NzEsMTAuMzMyLDYuODcxLDE2LjYxN0M0OC45NzcsMzEuNzcyLDQ2LjUzNiwzNy42NzUsNDIuMTA2LDQyLjEwNXoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjMuNTc4LDMyLjIxOGMtMC4wMjMtMS43MzQsMC4xNDMtMy4wNTksMC40OTYtMy45NzJjMC4zNTMtMC45MTMsMS4xMS0xLjk5NywyLjI3Mi0zLjI1Mw0KCQkJCWMwLjQ2OC0wLjUzNiwwLjkyMy0xLjA2MiwxLjM2Ny0xLjU3NWMwLjYyNi0wLjc1MywxLjEwNC0xLjQ3OCwxLjQzNi0yLjE3NWMwLjMzMS0wLjcwNywwLjQ5NS0xLjU0MSwwLjQ5NS0yLjUNCgkJCQljMC0xLjA5Ni0wLjI2LTIuMDg4LTAuNzc5LTIuOTc5Yy0wLjU2NS0wLjg3OS0xLjUwMS0xLjMzNi0yLjgwNi0xLjM2OWMtMS44MDIsMC4wNTctMi45ODUsMC42NjctMy41NSwxLjgzMg0KCQkJCWMtMC4zMDEsMC41MzUtMC41MDMsMS4xNDEtMC42MDcsMS44MTRjLTAuMTM5LDAuNzA3LTAuMjA3LDEuNDMyLTAuMjA3LDIuMTc0aC0yLjkzN2MtMC4wOTEtMi4yMDgsMC40MDctNC4xMTQsMS40OTMtNS43MTkNCgkJCQljMS4wNjItMS42NCwyLjg1NS0yLjQ4MSw1LjM3OC0yLjUyN2MyLjE2LDAuMDIzLDMuODc0LDAuNjA4LDUuMTQxLDEuNzU4YzEuMjc4LDEuMTYsMS45MjksMi43NjQsMS45NSw0LjgxMQ0KCQkJCWMwLDEuMTQyLTAuMTM3LDIuMTExLTAuNDEsMi45MTFjLTAuMzA5LDAuODQ1LTAuNzMxLDEuNTkzLTEuMjY4LDIuMjQzYy0wLjQ5MiwwLjY1LTEuMDY4LDEuMzE4LTEuNzMsMi4wMDINCgkJCQljLTAuNjUsMC42OTctMS4zMTMsMS40NzktMS45ODcsMi4zNDZjLTAuMjM5LDAuMzc3LTAuNDI5LDAuNzc3LTAuNTY1LDEuMTk5Yy0wLjE2LDAuOTU5LTAuMjE3LDEuOTUxLTAuMTcxLDIuOTc5DQoJCQkJQzI2LjU4OSwzMi4yMTgsMjMuNTc4LDMyLjIxOCwyMy41NzgsMzIuMjE4eiBNMjMuNTc4LDM4LjIydi0zLjQ4NGgzLjA3NnYzLjQ4NEgyMy41Nzh6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==);
  --jp-icon-markdown: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjN0IxRkEyIiBkPSJNNSAxNC45aDEybC02LjEgNnptOS40LTYuOGMwLTEuMy0uMS0yLjktLjEtNC41LS40IDEuNC0uOSAyLjktMS4zIDQuM2wtMS4zIDQuM2gtMkw4LjUgNy45Yy0uNC0xLjMtLjctMi45LTEtNC4zLS4xIDEuNi0uMSAzLjItLjIgNC42TDcgMTIuNEg0LjhsLjctMTFoMy4zTDEwIDVjLjQgMS4yLjcgMi43IDEgMy45LjMtMS4yLjctMi42IDEtMy45bDEuMi0zLjdoMy4zbC42IDExaC0yLjRsLS4zLTQuMnoiLz4KPC9zdmc+Cg==);
  --jp-icon-new-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwIDZoLThsLTItMkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS0xIDhoLTN2M2gtMnYtM2gtM3YtMmgzVjloMnYzaDN2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-not-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMTkgMTcuMTg0NCAyLjk2OTY4IDE0LjMwMzIgMS44NjA5NCAxMS40NDA5WiIvPgogICAgPHBhdGggY2xhc3M9ImpwLWljb24yIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4zMTU5MiA5LjMyMDMxKSIgZD0iTTcuMzY4NDIgMEwwIDcuMzY0NzkiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMzE1OTIgMTYuNjgzNikgc2NhbGUoMSAtMSkiIGQ9Ik03LjM2ODQyIDBMMCA3LjM2NDc5Ii8+Cjwvc3ZnPgo=);
  --jp-icon-notebook: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNFRjZDMDAiPgogICAgPHBhdGggZD0iTTE4LjcgMy4zdjE1LjRIMy4zVjMuM2gxNS40bTEuNS0xLjVIMS44djE4LjNoMTguM2wuMS0xOC4zeiIvPgogICAgPHBhdGggZD0iTTE2LjUgMTYuNWwtNS40LTQuMy01LjYgNC4zdi0xMWgxMXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-palette: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE4IDEzVjIwSDRWNkg5LjAyQzkuMDcgNS4yOSA5LjI0IDQuNjIgOS41IDRINEMyLjkgNCAyIDQuOSAyIDZWMjBDMiAyMS4xIDIuOSAyMiA0IDIySDE4QzE5LjEgMjIgMjAgMjEuMSAyMCAyMFYxNUwxOCAxM1pNMTkuMyA4Ljg5QzE5Ljc0IDguMTkgMjAgNy4zOCAyMCA2LjVDMjAgNC4wMSAxNy45OSAyIDE1LjUgMkMxMy4wMSAyIDExIDQuMDEgMTEgNi41QzExIDguOTkgMTMuMDEgMTEgMTUuNDkgMTFDMTYuMzcgMTEgMTcuMTkgMTAuNzQgMTcuODggMTAuM0wyMSAxMy40MkwyMi40MiAxMkwxOS4zIDguODlaTTE1LjUgOUMxNC4xMiA5IDEzIDcuODggMTMgNi41QzEzIDUuMTIgMTQuMTIgNCAxNS41IDRDMTYuODggNCAxOCA1LjEyIDE4IDYuNUMxOCA3Ljg4IDE2Ljg4IDkgMTUuNSA5WiIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDZIOS4wMTg5NEM5LjAwNjM5IDYuMTY1MDIgOSA2LjMzMTc2IDkgNi41QzkgOC44MTU3NyAxMC4yMTEgMTAuODQ4NyAxMi4wMzQzIDEySDlWMTRIMTZWMTIuOTgxMUMxNi41NzAzIDEyLjkzNzcgMTcuMTIgMTIuODIwNyAxNy42Mzk2IDEyLjYzOTZMMTggMTNWMjBINFY2Wk04IDhINlYxMEg4VjhaTTYgMTJIOFYxNEg2VjEyWk04IDE2SDZWMThIOFYxNlpNOSAxNkgxNlYxOEg5VjE2WiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-paste: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE5IDJoLTQuMThDMTQuNC44NCAxMy4zIDAgMTIgMGMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNyAxOEg1VjRoMnYzaDEwVjRoMnYxNnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-python: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1icmFuZDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMEQ0N0ExIj4KICAgIDxwYXRoIGQ9Ik0xMS4xIDYuOVY1LjhINi45YzAtLjUgMC0xLjMuMi0xLjYuNC0uNy44LTEuMSAxLjctMS40IDEuNy0uMyAyLjUtLjMgMy45LS4xIDEgLjEgMS45LjkgMS45IDEuOXY0LjJjMCAuNS0uOSAxLjYtMiAxLjZIOC44Yy0xLjUgMC0yLjQgMS40LTIuNCAyLjh2Mi4ySDQuN0MzLjUgMTUuMSAzIDE0IDMgMTMuMVY5Yy0uMS0xIC42LTIgMS44LTIgMS41LS4xIDYuMy0uMSA2LjMtLjF6Ii8+CiAgICA8cGF0aCBkPSJNMTAuOSAxNS4xdjEuMWg0LjJjMCAuNSAwIDEuMy0uMiAxLjYtLjQuNy0uOCAxLjEtMS43IDEuNC0xLjcuMy0yLjUuMy0zLjkuMS0xLS4xLTEuOS0uOS0xLjktMS45di00LjJjMC0uNS45LTEuNiAyLTEuNmgzLjhjMS41IDAgMi40LTEuNCAyLjQtMi44VjYuNmgxLjdDMTguNSA2LjkgMTkgOCAxOSA4LjlWMTNjMCAxLS43IDIuMS0xLjkgMi4xaC02LjJ6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-r-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjE5NkYzIiBkPSJNNC40IDIuNWMxLjItLjEgMi45LS4zIDQuOS0uMyAyLjUgMCA0LjEuNCA1LjIgMS4zIDEgLjcgMS41IDEuOSAxLjUgMy41IDAgMi0xLjQgMy41LTIuOSA0LjEgMS4yLjQgMS43IDEuNiAyLjIgMyAuNiAxLjkgMSAzLjkgMS4zIDQuNmgtMy44Yy0uMy0uNC0uOC0xLjctMS4yLTMuN3MtMS4yLTIuNi0yLjYtMi42aC0uOXY2LjRINC40VjIuNXptMy43IDYuOWgxLjRjMS45IDAgMi45LS45IDIuOS0yLjNzLTEtMi4zLTIuOC0yLjNjLS43IDAtMS4zIDAtMS42LjJ2NC41aC4xdi0uMXoiLz4KPC9zdmc+Cg==);
  --jp-icon-react: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMTUwIDE1MCA1NDEuOSAyOTUuMyI+CiAgPGcgY2xhc3M9ImpwLWljb24tYnJhbmQyIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzYxREFGQiI+CiAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgPGNpcmNsZSBjeD0iNDIwLjkiIGN5PSIyOTYuNSIgcj0iNDUuNyIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-refresh: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTkgMTMuNWMtMi40OSAwLTQuNS0yLjAxLTQuNS00LjVTNi41MSA0LjUgOSA0LjVjMS4yNCAwIDIuMzYuNTIgMy4xNyAxLjMzTDEwIDhoNVYzbC0xLjc2IDEuNzZDMTIuMTUgMy42OCAxMC42NiAzIDkgMyA1LjY5IDMgMy4wMSA1LjY5IDMuMDEgOVM1LjY5IDE1IDkgMTVjMi45NyAwIDUuNDMtMi4xNiA1LjktNWgtMS41MmMtLjQ2IDItMi4yNCAzLjUtNC4zOCAzLjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-regex: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi1hY2NlbnQyIiBmaWxsPSIjRkZGIj4KICAgIDxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjUuNSIgY3k9IjE0LjUiIHI9IjEuNSIvPgogICAgPHJlY3QgeD0iMTIiIHk9IjQiIGNsYXNzPSJzdDIiIHdpZHRoPSIxIiBoZWlnaHQ9IjgiLz4KICAgIDxyZWN0IHg9IjguNSIgeT0iNy41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NiAtMC41IDAuNSAwLjg2NiAtMi4zMjU1IDcuMzIxOSkiIGNsYXNzPSJzdDIiIHdpZHRoPSI4IiBoZWlnaHQ9IjEiLz4KICAgIDxyZWN0IHg9IjEyIiB5PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgLTAuODY2IDAuODY2IDAuNSAtMC42Nzc5IDE0LjgyNTIpIiBjbGFzcz0ic3QyIiB3aWR0aD0iMSIgaGVpZ2h0PSI4Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-run: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTggNXYxNGwxMS03eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-running: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptOTYgMzI4YzAgOC44LTcuMiAxNi0xNiAxNkgxNzZjLTguOCAwLTE2LTcuMi0xNi0xNlYxNzZjMC04LjggNy4yLTE2IDE2LTE2aDE2MGM4LjggMCAxNiA3LjIgMTYgMTZ2MTYweiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-save: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE3IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjdsLTQtNHptLTUgMTZjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0zLTEwSDVWNWgxMHY0eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-search: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjEsMTAuOWgtMC43bC0wLjItMC4yYzAuOC0wLjksMS4zLTIuMiwxLjMtMy41YzAtMy0yLjQtNS40LTUuNC01LjRTMS44LDQuMiwxLjgsNy4xczIuNCw1LjQsNS40LDUuNCBjMS4zLDAsMi41LTAuNSwzLjUtMS4zbDAuMiwwLjJ2MC43bDQuMSw0LjFsMS4yLTEuMkwxMi4xLDEwLjl6IE03LjEsMTAuOWMtMi4xLDAtMy43LTEuNy0zLjctMy43czEuNy0zLjcsMy43LTMuN3MzLjcsMS43LDMuNywzLjcgUzkuMiwxMC45LDcuMSwxMC45eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-settings: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuNDMgMTIuOThjLjA0LS4zMi4wNy0uNjQuMDctLjk4cy0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVBLjQ4OC40ODggMCAwMDE0IDJoLTRjLS4yNSAwLS40Ni4xOC0uNDkuNDJsLS4zOCAyLjY1Yy0uNjEuMjUtMS4xNy41OS0xLjY5Ljk4bC0yLjQ5LTFjLS4yMy0uMDktLjQ5IDAtLjYxLjIybC0yIDMuNDZjLS4xMy4yMi0uMDcuNDkuMTIuNjRsMi4xMSAxLjY1Yy0uMDQuMzItLjA3LjY1LS4wNy45OHMuMDMuNjYuMDcuOThsLTIuMTEgMS42NWMtLjE5LjE1LS4yNC40Mi0uMTIuNjRsMiAzLjQ2Yy4xMi4yMi4zOS4zLjYxLjIybDIuNDktMWMuNTIuNCAxLjA4LjczIDEuNjkuOThsLjM4IDIuNjVjLjAzLjI0LjI0LjQyLjQ5LjQyaDRjLjI1IDAgLjQ2LS4xOC40OS0uNDJsLjM4LTIuNjVjLjYxLS4yNSAxLjE3LS41OSAxLjY5LS45OGwyLjQ5IDFjLjIzLjA5LjQ5IDAgLjYxLS4yMmwyLTMuNDZjLjEyLS4yMi4wNy0uNDktLjEyLS42NGwtMi4xMS0xLjY1ek0xMiAxNS41Yy0xLjkzIDAtMy41LTEuNTctMy41LTMuNXMxLjU3LTMuNSAzLjUtMy41IDMuNSAxLjU3IDMuNSAzLjUtMS41NyAzLjUtMy41IDMuNXoiLz4KPC9zdmc+Cg==);
  --jp-icon-spreadsheet: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNENBRjUwIiBkPSJNMi4yIDIuMnYxNy42aDE3LjZWMi4ySDIuMnptMTUuNCA3LjdoLTUuNVY0LjRoNS41djUuNXpNOS45IDQuNHY1LjVINC40VjQuNGg1LjV6bS01LjUgNy43aDUuNXY1LjVINC40di01LjV6bTcuNyA1LjV2LTUuNWg1LjV2NS41aC01LjV6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-stop: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik02IDZoMTJ2MTJINnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-tab: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-terminal: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiA+CiAgICA8cmVjdCBjbGFzcz0ianAtaWNvbjIganAtaWNvbi1zZWxlY3RhYmxlIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiIGZpbGw9IiMzMzMzMzMiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uLWFjY2VudDIganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGQ9Ik01LjA1NjY0IDguNzYxNzJDNS4wNTY2NCA4LjU5NzY2IDUuMDMxMjUgOC40NTMxMiA0Ljk4MDQ3IDguMzI4MTJDNC45MzM1OSA4LjE5OTIyIDQuODU1NDcgOC4wODIwMyA0Ljc0NjA5IDcuOTc2NTZDNC42NDA2MiA3Ljg3MTA5IDQuNSA3Ljc3NTM5IDQuMzI0MjIgNy42ODk0NUM0LjE1MjM0IDcuNTk5NjEgMy45NDMzNiA3LjUxMTcyIDMuNjk3MjcgNy40MjU3OEMzLjMwMjczIDcuMjg1MTYgMi45NDMzNiA3LjEzNjcyIDIuNjE5MTQgNi45ODA0N0MyLjI5NDkyIDYuODI0MjIgMi4wMTc1OCA2LjY0MjU4IDEuNzg3MTEgNi40MzU1NUMxLjU2MDU1IDYuMjI4NTIgMS4zODQ3NyA1Ljk4ODI4IDEuMjU5NzcgNS43MTQ4NEMxLjEzNDc3IDUuNDM3NSAxLjA3MjI3IDUuMTA5MzggMS4wNzIyNyA0LjczMDQ3QzEuMDcyMjcgNC4zOTg0NCAxLjEyODkxIDQuMDk1NyAxLjI0MjE5IDMuODIyMjdDMS4zNTU0NyAzLjU0NDkyIDEuNTE1NjIgMy4zMDQ2OSAxLjcyMjY2IDMuMTAxNTZDMS45Mjk2OSAyLjg5ODQ0IDIuMTc5NjkgMi43MzQzNyAyLjQ3MjY2IDIuNjA5MzhDMi43NjU2MiAyLjQ4NDM4IDMuMDkxOCAyLjQwNDMgMy40NTExNyAyLjM2OTE0VjEuMTA5MzhINC4zODg2N1YyLjM4MDg2QzQuNzQwMjMgMi40Mjc3MyA1LjA1NjY0IDIuNTIzNDQgNS4zMzc4OSAyLjY2Nzk3QzUuNjE5MTQgMi44MTI1IDUuODU3NDIgMy4wMDE5NSA2LjA1MjczIDMuMjM2MzNDNi4yNTE5NSAzLjQ2NjggNi40MDQzIDMuNzQwMjMgNi41MDk3NyA0LjA1NjY0QzYuNjE5MTQgNC4zNjkxNCA2LjY3MzgzIDQuNzIwNyA2LjY3MzgzIDUuMTExMzNINS4wNDQ5MkM1LjA0NDkyIDQuNjM4NjcgNC45Mzc1IDQuMjgxMjUgNC43MjI2NiA0LjAzOTA2QzQuNTA3ODEgMy43OTI5NyA0LjIxNjggMy42Njk5MiAzLjg0OTYxIDMuNjY5OTJDMy42NTAzOSAzLjY2OTkyIDMuNDc2NTYgMy42OTcyNyAzLjMyODEyIDMuNzUxOTVDMy4xODM1OSAzLjgwMjczIDMuMDY0NDUgMy44NzY5NSAyLjk3MDcgMy45NzQ2MUMyLjg3Njk1IDQuMDY4MzYgMi44MDY2NCA0LjE3OTY5IDIuNzU5NzcgNC4zMDg1OUMyLjcxNjggNC40Mzc1IDIuNjk1MzEgNC41NzgxMiAyLjY5NTMxIDQuNzMwNDdDMi42OTUzMSA0Ljg4MjgxIDIuNzE2OCA1LjAxOTUzIDIuNzU5NzcgNS4xNDA2MkMyLjgwNjY0IDUuMjU3ODEgMi44ODI4MSA1LjM2NzE5IDIuOTg4MjggNS40Njg3NUMzLjA5NzY2IDUuNTcwMzEgMy4yNDAyMyA1LjY2Nzk3IDMuNDE2MDIgNS43NjE3MkMzLjU5MTggNS44NTE1NiAzLjgxMDU1IDUuOTQzMzYgNC4wNzIyNyA2LjAzNzExQzQuNDY2OCA2LjE4NTU1IDQuODI0MjIgNi4zMzk4NCA1LjE0NDUzIDYuNUM1LjQ2NDg0IDYuNjU2MjUgNS43MzgyOCA2LjgzOTg0IDUuOTY0ODQgNy4wNTA3OEM2LjE5NTMxIDcuMjU3ODEgNi4zNzEwOSA3LjUgNi40OTIxOSA3Ljc3NzM0QzYuNjE3MTkgOC4wNTA3OCA2LjY3OTY5IDguMzc1IDYuNjc5NjkgOC43NUM2LjY3OTY5IDkuMDkzNzUgNi42MjMwNSA5LjQwNDMgNi41MDk3NyA5LjY4MTY0QzYuMzk2NDggOS45NTUwOCA2LjIzNDM4IDEwLjE5MTQgNi4wMjM0NCAxMC4zOTA2QzUuODEyNSAxMC41ODk4IDUuNTU4NTkgMTAuNzUgNS4yNjE3MiAxMC44NzExQzQuOTY0ODQgMTAuOTg4MyA0LjYzMjgxIDExLjA2NDUgNC4yNjU2MiAxMS4wOTk2VjEyLjI0OEgzLjMzMzk4VjExLjA5OTZDMy4wMDE5NSAxMS4wNjg0IDIuNjc5NjkgMTAuOTk2MSAyLjM2NzE5IDEwLjg4MjhDMi4wNTQ2OSAxMC43NjU2IDEuNzc3MzQgMTAuNTk3NyAxLjUzNTE2IDEwLjM3ODlDMS4yOTY4OCAxMC4xNjAyIDEuMTA1NDcgOS44ODQ3NyAwLjk2MDkzOCA5LjU1MjczQzAuODE2NDA2IDkuMjE2OCAwLjc0NDE0MSA4LjgxNDQ1IDAuNzQ0MTQxIDguMzQ1N0gyLjM3ODkxQzIuMzc4OTEgOC42MjY5NSAyLjQxOTkyIDguODYzMjggMi41MDE5NSA5LjA1NDY5QzIuNTgzOTggOS4yNDIxOSAyLjY4OTQ1IDkuMzkyNTggMi44MTgzNiA5LjUwNTg2QzIuOTUxMTcgOS42MTUyMyAzLjEwMTU2IDkuNjkzMzYgMy4yNjk1MyA5Ljc0MDIzQzMuNDM3NSA5Ljc4NzExIDMuNjA5MzggOS44MTA1NSAzLjc4NTE2IDkuODEwNTVDNC4yMDMxMiA5LjgxMDU1IDQuNTE5NTMgOS43MTI4OSA0LjczNDM4IDkuNTE3NThDNC45NDkyMiA5LjMyMjI3IDUuMDU2NjQgOS4wNzAzMSA1LjA1NjY0IDguNzYxNzJaTTEzLjQxOCAxMi4yNzE1SDguMDc0MjJWMTFIMTMuNDE4VjEyLjI3MTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjk1MjY0IDYpIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);
  --jp-icon-text-editor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTUgMTVIM3YyaDEydi0yem0wLThIM3YyaDEyVjd6TTMgMTNoMTh2LTJIM3Yyem0wIDhoMTh2LTJIM3Yyek0zIDN2MmgxOFYzSDN6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMiAxNy4xODQ0IDIuOTY5NjggMTQuMzAzMiAxLjg2MDk0IDExLjQ0MDlaIi8+CiAgICA8cGF0aCBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iIzMzMzMzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA5Ljg2NzE5KSIgZD0iTTIuODYwMTUgNC44NjUzNUwwLjcyNjU0OSAyLjk5OTU5TDAgMy42MzA0NUwyLjg2MDE1IDYuMTMxNTdMOCAwLjYzMDg3Mkw3LjI3ODU3IDBMMi44NjAxNSA0Ljg2NTM1WiIvPgo8L3N2Zz4K);
  --jp-icon-undo: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjUgOGMtMi42NSAwLTUuMDUuOTktNi45IDIuNkwyIDd2OWg5bC0zLjYyLTMuNjJjMS4zOS0xLjE2IDMuMTYtMS44OCA1LjEyLTEuODggMy41NCAwIDYuNTUgMi4zMSA3LjYgNS41bDIuMzctLjc4QzIxLjA4IDExLjAzIDE3LjE1IDggMTIuNSA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-vega: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbjEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjEyMTIxIj4KICAgIDxwYXRoIGQ9Ik0xMC42IDUuNGwyLjItMy4ySDIuMnY3LjNsNC02LjZ6Ii8+CiAgICA8cGF0aCBkPSJNMTUuOCAyLjJsLTQuNCA2LjZMNyA2LjNsLTQuOCA4djUuNWgxNy42VjIuMmgtNHptLTcgMTUuNEg1LjV2LTQuNGgzLjN2NC40em00LjQgMEg5LjhWOS44aDMuNHY3Ljh6bTQuNCAwaC0zLjRWNi41aDMuNHYxMS4xeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-yaml: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1jb250cmFzdDIganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjRDgxQjYwIj4KICAgIDxwYXRoIGQ9Ik03LjIgMTguNnYtNS40TDMgNS42aDMuM2wxLjQgMy4xYy4zLjkuNiAxLjYgMSAyLjUuMy0uOC42LTEuNiAxLTIuNWwxLjQtMy4xaDMuNGwtNC40IDcuNnY1LjVsLTIuOS0uMXoiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxNi41IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxMSIgcj0iMi4xIi8+CiAgPC9nPgo8L3N2Zz4K);
}

/* Icon CSS class declarations */

.jp-AddIcon {
  background-image: var(--jp-icon-add);
}
.jp-BugIcon {
  background-image: var(--jp-icon-bug);
}
.jp-BuildIcon {
  background-image: var(--jp-icon-build);
}
.jp-CaretDownEmptyIcon {
  background-image: var(--jp-icon-caret-down-empty);
}
.jp-CaretDownEmptyThinIcon {
  background-image: var(--jp-icon-caret-down-empty-thin);
}
.jp-CaretDownIcon {
  background-image: var(--jp-icon-caret-down);
}
.jp-CaretLeftIcon {
  background-image: var(--jp-icon-caret-left);
}
.jp-CaretRightIcon {
  background-image: var(--jp-icon-caret-right);
}
.jp-CaretUpEmptyThinIcon {
  background-image: var(--jp-icon-caret-up-empty-thin);
}
.jp-CaretUpIcon {
  background-image: var(--jp-icon-caret-up);
}
.jp-CaseSensitiveIcon {
  background-image: var(--jp-icon-case-sensitive);
}
.jp-CheckIcon {
  background-image: var(--jp-icon-check);
}
.jp-CircleEmptyIcon {
  background-image: var(--jp-icon-circle-empty);
}
.jp-CircleIcon {
  background-image: var(--jp-icon-circle);
}
.jp-ClearIcon {
  background-image: var(--jp-icon-clear);
}
.jp-CloseIcon {
  background-image: var(--jp-icon-close);
}
.jp-ConsoleIcon {
  background-image: var(--jp-icon-console);
}
.jp-CopyIcon {
  background-image: var(--jp-icon-copy);
}
.jp-CutIcon {
  background-image: var(--jp-icon-cut);
}
.jp-DownloadIcon {
  background-image: var(--jp-icon-download);
}
.jp-EditIcon {
  background-image: var(--jp-icon-edit);
}
.jp-EllipsesIcon {
  background-image: var(--jp-icon-ellipses);
}
.jp-ExtensionIcon {
  background-image: var(--jp-icon-extension);
}
.jp-FastForwardIcon {
  background-image: var(--jp-icon-fast-forward);
}
.jp-FileIcon {
  background-image: var(--jp-icon-file);
}
.jp-FileUploadIcon {
  background-image: var(--jp-icon-file-upload);
}
.jp-FilterListIcon {
  background-image: var(--jp-icon-filter-list);
}
.jp-FolderIcon {
  background-image: var(--jp-icon-folder);
}
.jp-Html5Icon {
  background-image: var(--jp-icon-html5);
}
.jp-ImageIcon {
  background-image: var(--jp-icon-image);
}
.jp-InspectorIcon {
  background-image: var(--jp-icon-inspector);
}
.jp-JsonIcon {
  background-image: var(--jp-icon-json);
}
.jp-JupyterFaviconIcon {
  background-image: var(--jp-icon-jupyter-favicon);
}
.jp-JupyterIcon {
  background-image: var(--jp-icon-jupyter);
}
.jp-JupyterlabWordmarkIcon {
  background-image: var(--jp-icon-jupyterlab-wordmark);
}
.jp-KernelIcon {
  background-image: var(--jp-icon-kernel);
}
.jp-KeyboardIcon {
  background-image: var(--jp-icon-keyboard);
}
.jp-LauncherIcon {
  background-image: var(--jp-icon-launcher);
}
.jp-LineFormIcon {
  background-image: var(--jp-icon-line-form);
}
.jp-LinkIcon {
  background-image: var(--jp-icon-link);
}
.jp-ListIcon {
  background-image: var(--jp-icon-list);
}
.jp-ListingsInfoIcon {
  background-image: var(--jp-icon-listings-info);
}
.jp-MarkdownIcon {
  background-image: var(--jp-icon-markdown);
}
.jp-NewFolderIcon {
  background-image: var(--jp-icon-new-folder);
}
.jp-NotTrustedIcon {
  background-image: var(--jp-icon-not-trusted);
}
.jp-NotebookIcon {
  background-image: var(--jp-icon-notebook);
}
.jp-PaletteIcon {
  background-image: var(--jp-icon-palette);
}
.jp-PasteIcon {
  background-image: var(--jp-icon-paste);
}
.jp-PythonIcon {
  background-image: var(--jp-icon-python);
}
.jp-RKernelIcon {
  background-image: var(--jp-icon-r-kernel);
}
.jp-ReactIcon {
  background-image: var(--jp-icon-react);
}
.jp-RefreshIcon {
  background-image: var(--jp-icon-refresh);
}
.jp-RegexIcon {
  background-image: var(--jp-icon-regex);
}
.jp-RunIcon {
  background-image: var(--jp-icon-run);
}
.jp-RunningIcon {
  background-image: var(--jp-icon-running);
}
.jp-SaveIcon {
  background-image: var(--jp-icon-save);
}
.jp-SearchIcon {
  background-image: var(--jp-icon-search);
}
.jp-SettingsIcon {
  background-image: var(--jp-icon-settings);
}
.jp-SpreadsheetIcon {
  background-image: var(--jp-icon-spreadsheet);
}
.jp-StopIcon {
  background-image: var(--jp-icon-stop);
}
.jp-TabIcon {
  background-image: var(--jp-icon-tab);
}
.jp-TerminalIcon {
  background-image: var(--jp-icon-terminal);
}
.jp-TextEditorIcon {
  background-image: var(--jp-icon-text-editor);
}
.jp-TrustedIcon {
  background-image: var(--jp-icon-trusted);
}
.jp-UndoIcon {
  background-image: var(--jp-icon-undo);
}
.jp-VegaIcon {
  background-image: var(--jp-icon-vega);
}
.jp-YamlIcon {
  background-image: var(--jp-icon-yaml);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * (DEPRECATED) Support for consuming icons as CSS background images
 */

:root {
  --jp-icon-search-white: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjEsMTAuOWgtMC43bC0wLjItMC4yYzAuOC0wLjksMS4zLTIuMiwxLjMtMy41YzAtMy0yLjQtNS40LTUuNC01LjRTMS44LDQuMiwxLjgsNy4xczIuNCw1LjQsNS40LDUuNCBjMS4zLDAsMi41LTAuNSwzLjUtMS4zbDAuMiwwLjJ2MC43bDQuMSw0LjFsMS4yLTEuMkwxMi4xLDEwLjl6IE03LjEsMTAuOWMtMi4xLDAtMy43LTEuNy0zLjctMy43czEuNy0zLjcsMy43LTMuN3MzLjcsMS43LDMuNywzLjcgUzkuMiwxMC45LDcuMSwxMC45eiIvPgogIDwvZz4KPC9zdmc+Cg==);
}

.jp-Icon,
.jp-MaterialIcon {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px;
  min-width: 16px;
  min-height: 16px;
}

.jp-Icon-cover {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/**
 * (DEPRECATED) Support for specific CSS icon sizes
 */

.jp-Icon-16 {
  background-size: 16px;
  min-width: 16px;
  min-height: 16px;
}

.jp-Icon-18 {
  background-size: 18px;
  min-width: 18px;
  min-height: 18px;
}

.jp-Icon-20 {
  background-size: 20px;
  min-width: 20px;
  min-height: 20px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * Support for icons as inline SVG HTMLElements
 */

/* recolor the primary elements of an icon */
.jp-icon0[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon1[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon2[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon3[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon4[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon0[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon1[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon2[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon3[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon4[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}
/* recolor the accent elements of an icon */
.jp-icon-accent0[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-accent1[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-accent2[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-accent3[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-accent4[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-accent0[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-accent1[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-accent2[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-accent3[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-accent4[stroke] {
  stroke: var(--jp-layout-color4);
}
/* set the color of an icon to transparent */
.jp-icon-none[fill] {
  fill: none;
}

.jp-icon-none[stroke] {
  stroke: none;
}
/* brand icon colors. Same for light and dark */
.jp-icon-brand0[fill] {
  fill: var(--jp-brand-color0);
}
.jp-icon-brand1[fill] {
  fill: var(--jp-brand-color1);
}
.jp-icon-brand2[fill] {
  fill: var(--jp-brand-color2);
}
.jp-icon-brand3[fill] {
  fill: var(--jp-brand-color3);
}
.jp-icon-brand4[fill] {
  fill: var(--jp-brand-color4);
}

.jp-icon-brand0[stroke] {
  stroke: var(--jp-brand-color0);
}
.jp-icon-brand1[stroke] {
  stroke: var(--jp-brand-color1);
}
.jp-icon-brand2[stroke] {
  stroke: var(--jp-brand-color2);
}
.jp-icon-brand3[stroke] {
  stroke: var(--jp-brand-color3);
}
.jp-icon-brand4[stroke] {
  stroke: var(--jp-brand-color4);
}
/* warn icon colors. Same for light and dark */
.jp-icon-warn0[fill] {
  fill: var(--jp-warn-color0);
}
.jp-icon-warn1[fill] {
  fill: var(--jp-warn-color1);
}
.jp-icon-warn2[fill] {
  fill: var(--jp-warn-color2);
}
.jp-icon-warn3[fill] {
  fill: var(--jp-warn-color3);
}

.jp-icon-warn0[stroke] {
  stroke: var(--jp-warn-color0);
}
.jp-icon-warn1[stroke] {
  stroke: var(--jp-warn-color1);
}
.jp-icon-warn2[stroke] {
  stroke: var(--jp-warn-color2);
}
.jp-icon-warn3[stroke] {
  stroke: var(--jp-warn-color3);
}
/* icon colors that contrast well with each other and most backgrounds */
.jp-icon-contrast0[fill] {
  fill: var(--jp-icon-contrast-color0);
}
.jp-icon-contrast1[fill] {
  fill: var(--jp-icon-contrast-color1);
}
.jp-icon-contrast2[fill] {
  fill: var(--jp-icon-contrast-color2);
}
.jp-icon-contrast3[fill] {
  fill: var(--jp-icon-contrast-color3);
}

.jp-icon-contrast0[stroke] {
  stroke: var(--jp-icon-contrast-color0);
}
.jp-icon-contrast1[stroke] {
  stroke: var(--jp-icon-contrast-color1);
}
.jp-icon-contrast2[stroke] {
  stroke: var(--jp-icon-contrast-color2);
}
.jp-icon-contrast3[stroke] {
  stroke: var(--jp-icon-contrast-color3);
}

/* CSS for icons in selected items in the settings editor */
#setting-editor .jp-PluginList .jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}
#setting-editor
  .jp-PluginList
  .jp-mod-selected
  .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}

/* CSS for icons in selected filebrowser listing items */
.jp-DirListing-item.jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}
.jp-DirListing-item.jp-mod-selected .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}

/* CSS for icons in selected tabs in the sidebar tab manager */
#tab-manager .lm-TabBar-tab.jp-mod-active .jp-icon-selectable[fill] {
  fill: #fff;
}

#tab-manager .lm-TabBar-tab.jp-mod-active .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}
#tab-manager
  .lm-TabBar-tab.jp-mod-active
  .jp-icon-hover
  :hover
  .jp-icon-selectable[fill] {
  fill: var(--jp-brand-color1);
}

#tab-manager
  .lm-TabBar-tab.jp-mod-active
  .jp-icon-hover
  :hover
  .jp-icon-selectable-inverse[fill] {
  fill: #fff;
}

/**
 * TODO: come up with non css-hack solution for showing the busy icon on top
 *  of the close icon
 * CSS for complex behavior of close icon of tabs in the sidebar tab manager
 */
#tab-manager
  .lm-TabBar-tab.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon3[fill] {
  fill: none;
}
#tab-manager
  .lm-TabBar-tab.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: var(--jp-inverse-layout-color3);
}

#tab-manager
  .lm-TabBar-tab.jp-mod-dirty.jp-mod-active
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: #fff;
}

/**
* TODO: come up with non css-hack solution for showing the busy icon on top
*  of the close icon
* CSS for complex behavior of close icon of tabs in the main area tabbar
*/
.lm-DockPanel-tabBar
  .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon3[fill] {
  fill: none;
}
.lm-DockPanel-tabBar
  .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: var(--jp-inverse-layout-color3);
}

/* CSS for icons in status bar */
#jp-main-statusbar .jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}

#jp-main-statusbar .jp-mod-selected .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}
/* special handling for splash icon CSS. While the theme CSS reloads during
   splash, the splash icon can loose theming. To prevent that, we set a
   default for its color variable */
:root {
  --jp-warn-color0: var(--md-orange-700);
}

/* not sure what to do with this one, used in filebrowser listing */
.jp-DragIcon {
  margin-right: 4px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * Support for alt colors for icons as inline SVG HTMLElements
 */

/* alt recolor the primary elements of an icon */
.jp-icon-alt .jp-icon0[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-alt .jp-icon1[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-alt .jp-icon2[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-alt .jp-icon3[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-alt .jp-icon4[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-alt .jp-icon0[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-alt .jp-icon1[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-alt .jp-icon2[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-alt .jp-icon3[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-alt .jp-icon4[stroke] {
  stroke: var(--jp-layout-color4);
}

/* alt recolor the accent elements of an icon */
.jp-icon-alt .jp-icon-accent0[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon-alt .jp-icon-accent1[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon-alt .jp-icon-accent2[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon-alt .jp-icon-accent3[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon-alt .jp-icon-accent4[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-alt .jp-icon-accent0[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon-alt .jp-icon-accent1[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon-alt .jp-icon-accent2[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon-alt .jp-icon-accent3[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon-alt .jp-icon-accent4[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-icon-hoverShow:not(:hover) svg {
  display: none !important;
}

/**
 * Support for hover colors for icons as inline SVG HTMLElements
 */

/**
 * regular colors
 */

/* recolor the primary elements of an icon */
.jp-icon-hover :hover .jp-icon0-hover[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon-hover :hover .jp-icon1-hover[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon-hover :hover .jp-icon2-hover[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon-hover :hover .jp-icon3-hover[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon-hover :hover .jp-icon4-hover[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover :hover .jp-icon0-hover[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon-hover :hover .jp-icon1-hover[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon-hover :hover .jp-icon2-hover[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon-hover :hover .jp-icon3-hover[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon-hover :hover .jp-icon4-hover[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/* recolor the accent elements of an icon */
.jp-icon-hover :hover .jp-icon-accent0-hover[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-hover :hover .jp-icon-accent1-hover[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-hover :hover .jp-icon-accent2-hover[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-hover :hover .jp-icon-accent3-hover[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-hover :hover .jp-icon-accent4-hover[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-hover :hover .jp-icon-accent0-hover[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-hover :hover .jp-icon-accent1-hover[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-hover :hover .jp-icon-accent2-hover[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-hover :hover .jp-icon-accent3-hover[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-hover :hover .jp-icon-accent4-hover[stroke] {
  stroke: var(--jp-layout-color4);
}

/* set the color of an icon to transparent */
.jp-icon-hover :hover .jp-icon-none-hover[fill] {
  fill: none;
}

.jp-icon-hover :hover .jp-icon-none-hover[stroke] {
  stroke: none;
}

/**
 * inverse colors
 */

/* inverse recolor the primary elements of an icon */
.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[stroke] {
  stroke: var(--jp-layout-color4);
}

/* inverse recolor the accent elements of an icon */
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* Sibling imports */

/* Override Blueprint's _reset.scss styles */
html {
  box-sizing: unset;
}

*,
*::before,
*::after {
  box-sizing: unset;
}

body {
  color: unset;
  font-family: var(--jp-ui-font-family);
}

p {
  margin-top: unset;
  margin-bottom: unset;
}

small {
  font-size: unset;
}

strong {
  font-weight: unset;
}

/* Override Blueprint's _typography.scss styles */
a {
  text-decoration: unset;
  color: unset;
}
a:hover {
  text-decoration: unset;
  color: unset;
}

/* Override Blueprint's _accessibility.scss styles */
:focus {
  outline: unset;
  outline-offset: unset;
  -moz-outline-radius: unset;
}

/* Styles for ui-components */
.jp-Button {
  border-radius: var(--jp-border-radius);
  padding: 0px 12px;
  font-size: var(--jp-ui-font-size1);
}

/* Use our own theme for hover styles */
button.jp-Button.bp3-button.bp3-minimal:hover {
  background-color: var(--jp-layout-color2);
}
.jp-Button.minimal {
  color: unset !important;
}

.jp-Button.jp-ToolbarButtonComponent {
  text-transform: none;
}

.jp-InputGroup input {
  box-sizing: border-box;
  border-radius: 0;
  background-color: transparent;
  color: var(--jp-ui-font-color0);
  box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
}

.jp-InputGroup input:focus {
  box-shadow: inset 0 0 0 var(--jp-border-width)
      var(--jp-input-active-box-shadow-color),
    inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.jp-InputGroup input::placeholder,
input::placeholder {
  color: var(--jp-ui-font-color3);
}

.jp-BPIcon {
  display: inline-block;
  vertical-align: middle;
  margin: auto;
}

/* Stop blueprint futzing with our icon fills */
.bp3-icon.jp-BPIcon > svg:not([fill]) {
  fill: var(--jp-inverse-layout-color3);
}

.jp-InputGroupAction {
  padding: 6px;
}

.jp-HTMLSelect.jp-DefaultStyle select {
  background-color: initial;
  border: none;
  border-radius: 0;
  box-shadow: none;
  color: var(--jp-ui-font-color0);
  display: block;
  font-size: var(--jp-ui-font-size1);
  height: 24px;
  line-height: 14px;
  padding: 0 25px 0 10px;
  text-align: left;
  -moz-appearance: none;
  -webkit-appearance: none;
}

/* Use our own theme for hover and option styles */
.jp-HTMLSelect.jp-DefaultStyle select:hover,
.jp-HTMLSelect.jp-DefaultStyle select > option {
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color0);
}
select {
  box-sizing: border-box;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Collapse {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-top: 1px solid var(--jp-border-color2);
  border-bottom: 1px solid var(--jp-border-color2);
}

.jp-Collapse-header {
  padding: 1px 12px;
  color: var(--jp-ui-font-color1);
  background-color: var(--jp-layout-color1);
  font-size: var(--jp-ui-font-size2);
}

.jp-Collapse-header:hover {
  background-color: var(--jp-layout-color2);
}

.jp-Collapse-contents {
  padding: 0px 12px 0px 12px;
  background-color: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  overflow: auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-commandpalette-search-height: 28px;
}

/*-----------------------------------------------------------------------------
| Overall styles
|----------------------------------------------------------------------------*/

.lm-CommandPalette {
  padding-bottom: 0px;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
}

/*-----------------------------------------------------------------------------
| Search
|----------------------------------------------------------------------------*/

.lm-CommandPalette-search {
  padding: 4px;
  background-color: var(--jp-layout-color1);
  z-index: 2;
}

.lm-CommandPalette-wrapper {
  overflow: overlay;
  padding: 0px 9px;
  background-color: var(--jp-input-active-background);
  height: 30px;
  box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
}

.lm-CommandPalette.lm-mod-focused .lm-CommandPalette-wrapper {
  box-shadow: inset 0 0 0 1px var(--jp-input-active-box-shadow-color),
    inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.lm-CommandPalette-wrapper::after {
  content: ' ';
  color: white;
  background-color: var(--jp-brand-color1);
  position: absolute;
  top: 4px;
  right: 4px;
  height: 30px;
  width: 10px;
  padding: 0px 10px;
  background-image: var(--jp-icon-search-white);
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
}

.lm-CommandPalette-input {
  background: transparent;
  width: calc(100% - 18px);
  float: left;
  border: none;
  outline: none;
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  line-height: var(--jp-private-commandpalette-search-height);
}

.lm-CommandPalette-input::-webkit-input-placeholder,
.lm-CommandPalette-input::-moz-placeholder,
.lm-CommandPalette-input:-ms-input-placeholder {
  color: var(--jp-ui-font-color3);
  font-size: var(--jp-ui-font-size1);
}

/*-----------------------------------------------------------------------------
| Results
|----------------------------------------------------------------------------*/

.lm-CommandPalette-header:first-child {
  margin-top: 0px;
}

.lm-CommandPalette-header {
  border-bottom: solid var(--jp-border-width) var(--jp-border-color2);
  color: var(--jp-ui-font-color1);
  cursor: pointer;
  display: flex;
  font-size: var(--jp-ui-font-size0);
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 8px;
  padding: 8px 0 8px 12px;
  text-transform: uppercase;
}

.lm-CommandPalette-header.lm-mod-active {
  background: var(--jp-layout-color2);
}

.lm-CommandPalette-header > mark {
  background-color: transparent;
  font-weight: bold;
  color: var(--jp-ui-font-color1);
}

.lm-CommandPalette-item {
  padding: 4px 12px 4px 4px;
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  font-weight: 400;
  display: flex;
}

.lm-CommandPalette-item.lm-mod-disabled {
  color: var(--jp-ui-font-color3);
}

.lm-CommandPalette-item.lm-mod-active {
  background: var(--jp-layout-color3);
}

.lm-CommandPalette-item.lm-mod-active:hover:not(.lm-mod-disabled) {
  background: var(--jp-layout-color4);
}

.lm-CommandPalette-item:hover:not(.lm-mod-active):not(.lm-mod-disabled) {
  background: var(--jp-layout-color2);
}

.lm-CommandPalette-itemContent {
  overflow: hidden;
}

.lm-CommandPalette-itemLabel > mark {
  color: var(--jp-ui-font-color0);
  background-color: transparent;
  font-weight: bold;
}

.lm-CommandPalette-item.lm-mod-disabled mark {
  color: var(--jp-ui-font-color3);
}

.lm-CommandPalette-item .lm-CommandPalette-itemIcon {
  margin: 0 4px 0 0;
  position: relative;
  width: 16px;
  top: 2px;
  flex: 0 0 auto;
}

.lm-CommandPalette-item.lm-mod-disabled .lm-CommandPalette-itemIcon {
  opacity: 0.4;
}

.lm-CommandPalette-item .lm-CommandPalette-itemShortcut {
  flex: 0 0 auto;
}

.lm-CommandPalette-itemCaption {
  display: none;
}

.lm-CommandPalette-content {
  background-color: var(--jp-layout-color1);
}

.lm-CommandPalette-content:empty:after {
  content: 'No results';
  margin: auto;
  margin-top: 20px;
  width: 100px;
  display: block;
  font-size: var(--jp-ui-font-size2);
  font-family: var(--jp-ui-font-family);
  font-weight: lighter;
}

.lm-CommandPalette-emptyMessage {
  text-align: center;
  margin-top: 24px;
  line-height: 1.32;
  padding: 0px 8px;
  color: var(--jp-content-font-color3);
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Dialog {
  position: absolute;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: var(--jp-dialog-background);
}

.jp-Dialog-content {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background: var(--jp-layout-color1);
  padding: 24px;
  padding-bottom: 12px;
  min-width: 300px;
  min-height: 150px;
  max-width: 1000px;
  max-height: 500px;
  box-sizing: border-box;
  box-shadow: var(--jp-elevation-z20);
  word-wrap: break-word;
  border-radius: var(--jp-border-radius);
  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color1);
}

.jp-Dialog-button {
  overflow: visible;
}

button.jp-Dialog-button:focus {
  outline: 1px solid var(--jp-brand-color1);
  outline-offset: 4px;
  -moz-outline-radius: 0px;
}

button.jp-Dialog-button:focus::-moz-focus-inner {
  border: 0;
}

.jp-Dialog-header {
  flex: 0 0 auto;
  padding-bottom: 12px;
  font-size: var(--jp-ui-font-size3);
  font-weight: 400;
  color: var(--jp-ui-font-color0);
}

.jp-Dialog-body {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  font-size: var(--jp-ui-font-size1);
  background: var(--jp-layout-color1);
  overflow: auto;
}

.jp-Dialog-footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 0 0 auto;
  margin-left: -12px;
  margin-right: -12px;
  padding: 12px;
}

.jp-Dialog-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.jp-Dialog-body > .jp-select-wrapper {
  width: 100%;
}

.jp-Dialog-body > button {
  padding: 0px 16px;
}

.jp-Dialog-body > label {
  line-height: 1.4;
  color: var(--jp-ui-font-color0);
}

.jp-Dialog-button.jp-mod-styled:not(:last-child) {
  margin-right: 12px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-HoverBox {
  position: fixed;
}

.jp-HoverBox.jp-mod-outofview {
  display: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-IFrame {
  width: 100%;
  height: 100%;
}

.jp-IFrame > iframe {
  border: none;
}

/*
When drag events occur, `p-mod-override-cursor` is added to the body.
Because iframes steal all cursor events, the following two rules are necessary
to suppress pointer events while resize drags are occurring. There may be a
better solution to this problem.
*/
body.lm-mod-override-cursor .jp-IFrame {
  position: relative;
}

body.lm-mod-override-cursor .jp-IFrame:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-MainAreaWidget > :focus {
  outline: none;
}

/**
 * google-material-color v1.2.6
 * https://github.com/danlevan/google-material-color
 */
:root {
  --md-red-50: #ffebee;
  --md-red-100: #ffcdd2;
  --md-red-200: #ef9a9a;
  --md-red-300: #e57373;
  --md-red-400: #ef5350;
  --md-red-500: #f44336;
  --md-red-600: #e53935;
  --md-red-700: #d32f2f;
  --md-red-800: #c62828;
  --md-red-900: #b71c1c;
  --md-red-A100: #ff8a80;
  --md-red-A200: #ff5252;
  --md-red-A400: #ff1744;
  --md-red-A700: #d50000;

  --md-pink-50: #fce4ec;
  --md-pink-100: #f8bbd0;
  --md-pink-200: #f48fb1;
  --md-pink-300: #f06292;
  --md-pink-400: #ec407a;
  --md-pink-500: #e91e63;
  --md-pink-600: #d81b60;
  --md-pink-700: #c2185b;
  --md-pink-800: #ad1457;
  --md-pink-900: #880e4f;
  --md-pink-A100: #ff80ab;
  --md-pink-A200: #ff4081;
  --md-pink-A400: #f50057;
  --md-pink-A700: #c51162;

  --md-purple-50: #f3e5f5;
  --md-purple-100: #e1bee7;
  --md-purple-200: #ce93d8;
  --md-purple-300: #ba68c8;
  --md-purple-400: #ab47bc;
  --md-purple-500: #9c27b0;
  --md-purple-600: #8e24aa;
  --md-purple-700: #7b1fa2;
  --md-purple-800: #6a1b9a;
  --md-purple-900: #4a148c;
  --md-purple-A100: #ea80fc;
  --md-purple-A200: #e040fb;
  --md-purple-A400: #d500f9;
  --md-purple-A700: #aa00ff;

  --md-deep-purple-50: #ede7f6;
  --md-deep-purple-100: #d1c4e9;
  --md-deep-purple-200: #b39ddb;
  --md-deep-purple-300: #9575cd;
  --md-deep-purple-400: #7e57c2;
  --md-deep-purple-500: #673ab7;
  --md-deep-purple-600: #5e35b1;
  --md-deep-purple-700: #512da8;
  --md-deep-purple-800: #4527a0;
  --md-deep-purple-900: #311b92;
  --md-deep-purple-A100: #b388ff;
  --md-deep-purple-A200: #7c4dff;
  --md-deep-purple-A400: #651fff;
  --md-deep-purple-A700: #6200ea;

  --md-indigo-50: #e8eaf6;
  --md-indigo-100: #c5cae9;
  --md-indigo-200: #9fa8da;
  --md-indigo-300: #7986cb;
  --md-indigo-400: #5c6bc0;
  --md-indigo-500: #3f51b5;
  --md-indigo-600: #3949ab;
  --md-indigo-700: #303f9f;
  --md-indigo-800: #283593;
  --md-indigo-900: #1a237e;
  --md-indigo-A100: #8c9eff;
  --md-indigo-A200: #536dfe;
  --md-indigo-A400: #3d5afe;
  --md-indigo-A700: #304ffe;

  --md-blue-50: #e3f2fd;
  --md-blue-100: #bbdefb;
  --md-blue-200: #90caf9;
  --md-blue-300: #64b5f6;
  --md-blue-400: #42a5f5;
  --md-blue-500: #2196f3;
  --md-blue-600: #1e88e5;
  --md-blue-700: #1976d2;
  --md-blue-800: #1565c0;
  --md-blue-900: #0d47a1;
  --md-blue-A100: #82b1ff;
  --md-blue-A200: #448aff;
  --md-blue-A400: #2979ff;
  --md-blue-A700: #2962ff;

  --md-light-blue-50: #e1f5fe;
  --md-light-blue-100: #b3e5fc;
  --md-light-blue-200: #81d4fa;
  --md-light-blue-300: #4fc3f7;
  --md-light-blue-400: #29b6f6;
  --md-light-blue-500: #03a9f4;
  --md-light-blue-600: #039be5;
  --md-light-blue-700: #0288d1;
  --md-light-blue-800: #0277bd;
  --md-light-blue-900: #01579b;
  --md-light-blue-A100: #80d8ff;
  --md-light-blue-A200: #40c4ff;
  --md-light-blue-A400: #00b0ff;
  --md-light-blue-A700: #0091ea;

  --md-cyan-50: #e0f7fa;
  --md-cyan-100: #b2ebf2;
  --md-cyan-200: #80deea;
  --md-cyan-300: #4dd0e1;
  --md-cyan-400: #26c6da;
  --md-cyan-500: #00bcd4;
  --md-cyan-600: #00acc1;
  --md-cyan-700: #0097a7;
  --md-cyan-800: #00838f;
  --md-cyan-900: #006064;
  --md-cyan-A100: #84ffff;
  --md-cyan-A200: #18ffff;
  --md-cyan-A400: #00e5ff;
  --md-cyan-A700: #00b8d4;

  --md-teal-50: #e0f2f1;
  --md-teal-100: #b2dfdb;
  --md-teal-200: #80cbc4;
  --md-teal-300: #4db6ac;
  --md-teal-400: #26a69a;
  --md-teal-500: #009688;
  --md-teal-600: #00897b;
  --md-teal-700: #00796b;
  --md-teal-800: #00695c;
  --md-teal-900: #004d40;
  --md-teal-A100: #a7ffeb;
  --md-teal-A200: #64ffda;
  --md-teal-A400: #1de9b6;
  --md-teal-A700: #00bfa5;

  --md-green-50: #e8f5e9;
  --md-green-100: #c8e6c9;
  --md-green-200: #a5d6a7;
  --md-green-300: #81c784;
  --md-green-400: #66bb6a;
  --md-green-500: #4caf50;
  --md-green-600: #43a047;
  --md-green-700: #388e3c;
  --md-green-800: #2e7d32;
  --md-green-900: #1b5e20;
  --md-green-A100: #b9f6ca;
  --md-green-A200: #69f0ae;
  --md-green-A400: #00e676;
  --md-green-A700: #00c853;

  --md-light-green-50: #f1f8e9;
  --md-light-green-100: #dcedc8;
  --md-light-green-200: #c5e1a5;
  --md-light-green-300: #aed581;
  --md-light-green-400: #9ccc65;
  --md-light-green-500: #8bc34a;
  --md-light-green-600: #7cb342;
  --md-light-green-700: #689f38;
  --md-light-green-800: #558b2f;
  --md-light-green-900: #33691e;
  --md-light-green-A100: #ccff90;
  --md-light-green-A200: #b2ff59;
  --md-light-green-A400: #76ff03;
  --md-light-green-A700: #64dd17;

  --md-lime-50: #f9fbe7;
  --md-lime-100: #f0f4c3;
  --md-lime-200: #e6ee9c;
  --md-lime-300: #dce775;
  --md-lime-400: #d4e157;
  --md-lime-500: #cddc39;
  --md-lime-600: #c0ca33;
  --md-lime-700: #afb42b;
  --md-lime-800: #9e9d24;
  --md-lime-900: #827717;
  --md-lime-A100: #f4ff81;
  --md-lime-A200: #eeff41;
  --md-lime-A400: #c6ff00;
  --md-lime-A700: #aeea00;

  --md-yellow-50: #fffde7;
  --md-yellow-100: #fff9c4;
  --md-yellow-200: #fff59d;
  --md-yellow-300: #fff176;
  --md-yellow-400: #ffee58;
  --md-yellow-500: #ffeb3b;
  --md-yellow-600: #fdd835;
  --md-yellow-700: #fbc02d;
  --md-yellow-800: #f9a825;
  --md-yellow-900: #f57f17;
  --md-yellow-A100: #ffff8d;
  --md-yellow-A200: #ffff00;
  --md-yellow-A400: #ffea00;
  --md-yellow-A700: #ffd600;

  --md-amber-50: #fff8e1;
  --md-amber-100: #ffecb3;
  --md-amber-200: #ffe082;
  --md-amber-300: #ffd54f;
  --md-amber-400: #ffca28;
  --md-amber-500: #ffc107;
  --md-amber-600: #ffb300;
  --md-amber-700: #ffa000;
  --md-amber-800: #ff8f00;
  --md-amber-900: #ff6f00;
  --md-amber-A100: #ffe57f;
  --md-amber-A200: #ffd740;
  --md-amber-A400: #ffc400;
  --md-amber-A700: #ffab00;

  --md-orange-50: #fff3e0;
  --md-orange-100: #ffe0b2;
  --md-orange-200: #ffcc80;
  --md-orange-300: #ffb74d;
  --md-orange-400: #ffa726;
  --md-orange-500: #ff9800;
  --md-orange-600: #fb8c00;
  --md-orange-700: #f57c00;
  --md-orange-800: #ef6c00;
  --md-orange-900: #e65100;
  --md-orange-A100: #ffd180;
  --md-orange-A200: #ffab40;
  --md-orange-A400: #ff9100;
  --md-orange-A700: #ff6d00;

  --md-deep-orange-50: #fbe9e7;
  --md-deep-orange-100: #ffccbc;
  --md-deep-orange-200: #ffab91;
  --md-deep-orange-300: #ff8a65;
  --md-deep-orange-400: #ff7043;
  --md-deep-orange-500: #ff5722;
  --md-deep-orange-600: #f4511e;
  --md-deep-orange-700: #e64a19;
  --md-deep-orange-800: #d84315;
  --md-deep-orange-900: #bf360c;
  --md-deep-orange-A100: #ff9e80;
  --md-deep-orange-A200: #ff6e40;
  --md-deep-orange-A400: #ff3d00;
  --md-deep-orange-A700: #dd2c00;

  --md-brown-50: #efebe9;
  --md-brown-100: #d7ccc8;
  --md-brown-200: #bcaaa4;
  --md-brown-300: #a1887f;
  --md-brown-400: #8d6e63;
  --md-brown-500: #795548;
  --md-brown-600: #6d4c41;
  --md-brown-700: #5d4037;
  --md-brown-800: #4e342e;
  --md-brown-900: #3e2723;

  --md-grey-50: #fafafa;
  --md-grey-100: #f5f5f5;
  --md-grey-200: #eeeeee;
  --md-grey-300: #e0e0e0;
  --md-grey-400: #bdbdbd;
  --md-grey-500: #9e9e9e;
  --md-grey-600: #757575;
  --md-grey-700: #616161;
  --md-grey-800: #424242;
  --md-grey-900: #212121;

  --md-blue-grey-50: #eceff1;
  --md-blue-grey-100: #cfd8dc;
  --md-blue-grey-200: #b0bec5;
  --md-blue-grey-300: #90a4ae;
  --md-blue-grey-400: #78909c;
  --md-blue-grey-500: #607d8b;
  --md-blue-grey-600: #546e7a;
  --md-blue-grey-700: #455a64;
  --md-blue-grey-800: #37474f;
  --md-blue-grey-900: #263238;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Spinner {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--jp-layout-color0);
  outline: none;
}

.jp-SpinnerContent {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: var(--jp-brand-color3);
  background: linear-gradient(
    to right,
    #f37626 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  animation: load3 1s infinite linear, fadeIn 1s;
}

.jp-SpinnerContent:before {
  width: 50%;
  height: 50%;
  background: #f37626;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}

.jp-SpinnerContent:after {
  background: var(--jp-layout-color0);
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes load3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

button.jp-mod-styled {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  border: none;
  box-sizing: border-box;
  text-align: center;
  line-height: 32px;
  height: 32px;
  padding: 0px 12px;
  letter-spacing: 0.8px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input.jp-mod-styled {
  background: var(--jp-input-background);
  height: 28px;
  box-sizing: border-box;
  border: var(--jp-border-width) solid var(--jp-border-color1);
  padding-left: 7px;
  padding-right: 7px;
  font-size: var(--jp-ui-font-size2);
  color: var(--jp-ui-font-color0);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input.jp-mod-styled:focus {
  border: var(--jp-border-width) solid var(--md-blue-500);
  box-shadow: inset 0 0 4px var(--md-blue-300);
}

.jp-select-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1px;
  background-color: var(--jp-layout-color1);
  height: 28px;
  box-sizing: border-box;
  margin-bottom: 12px;
}

.jp-select-wrapper.jp-mod-focused select.jp-mod-styled {
  border: var(--jp-border-width) solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
  background-color: var(--jp-input-active-background);
}

select.jp-mod-styled:hover {
  background-color: var(--jp-layout-color1);
  cursor: pointer;
  color: var(--jp-ui-font-color0);
  background-color: var(--jp-input-hover-background);
  box-shadow: inset 0 0px 1px rgba(0, 0, 0, 0.5);
}

select.jp-mod-styled {
  flex: 1 1 auto;
  height: 32px;
  width: 100%;
  font-size: var(--jp-ui-font-size2);
  background: var(--jp-input-background);
  color: var(--jp-ui-font-color0);
  padding: 0 25px 0 8px;
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  border-radius: 0px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

:root {
  --jp-private-toolbar-height: calc(
    28px + var(--jp-border-width)
  ); /* leave 28px for content */
}

.jp-Toolbar {
  color: var(--jp-ui-font-color1);
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  box-shadow: var(--jp-toolbar-box-shadow);
  background: var(--jp-toolbar-background);
  min-height: var(--jp-toolbar-micro-height);
  padding: 2px;
  z-index: 1;
}

/* Toolbar items */

.jp-Toolbar > .jp-Toolbar-item.jp-Toolbar-spacer {
  flex-grow: 1;
  flex-shrink: 1;
}

.jp-Toolbar-item.jp-Toolbar-kernelStatus {
  display: inline-block;
  width: 32px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
}

.jp-Toolbar > .jp-Toolbar-item {
  flex: 0 0 auto;
  display: flex;
  padding-left: 1px;
  padding-right: 1px;
  font-size: var(--jp-ui-font-size1);
  line-height: var(--jp-private-toolbar-height);
  height: 100%;
}

/* Toolbar buttons */

/* This is the div we use to wrap the react component into a Widget */
div.jp-ToolbarButton {
  color: transparent;
  border: none;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0px;
  margin: 0px;
}

button.jp-ToolbarButtonComponent {
  background: var(--jp-layout-color1);
  border: none;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0px 6px;
  margin: 0px;
  height: 24px;
  border-radius: var(--jp-border-radius);
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;
  min-width: unset;
  min-height: unset;
}

button.jp-ToolbarButtonComponent:disabled {
  opacity: 0.4;
}

button.jp-ToolbarButtonComponent span {
  padding: 0px;
  flex: 0 0 auto;
}

button.jp-ToolbarButtonComponent .jp-ToolbarButtonComponent-label {
  font-size: var(--jp-ui-font-size1);
  line-height: 100%;
  padding-left: 2px;
  color: var(--jp-ui-font-color1);
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ body.p-mod-override-cursor *, /* </DEPRECATED> */
body.lm-mod-override-cursor * {
  cursor: inherit !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-JSONEditor {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.jp-JSONEditor-host {
  flex: 1 1 auto;
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  border-radius: 0px;
  background: var(--jp-layout-color0);
  min-height: 50px;
  padding: 1px;
}

.jp-JSONEditor.jp-mod-error .jp-JSONEditor-host {
  border-color: red;
  outline-color: red;
}

.jp-JSONEditor-header {
  display: flex;
  flex: 1 0 auto;
  padding: 0 0 0 12px;
}

.jp-JSONEditor-header label {
  flex: 0 0 auto;
}

.jp-JSONEditor-commitButton {
  height: 16px;
  width: 16px;
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: center;
}

.jp-JSONEditor-host.jp-mod-focused {
  background-color: var(--jp-input-active-background);
  border: 1px solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
}

.jp-Editor.jp-mod-dropTarget {
  border: var(--jp-border-width) solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* BASICS */

.CodeMirror {
  /* Set height, width, borders, and global font properties here */
  font-family: monospace;
  height: 300px;
  color: black;
  direction: ltr;
}

/* PADDING */

.CodeMirror-lines {
  padding: 4px 0; /* Vertical padding around content */
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  padding: 0 4px; /* Horizontal padding of content */
}

.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  background-color: white; /* The little square between H and V scrollbars */
}

/* GUTTER */

.CodeMirror-gutters {
  border-right: 1px solid #ddd;
  background-color: #f7f7f7;
  white-space: nowrap;
}
.CodeMirror-linenumbers {}
.CodeMirror-linenumber {
  padding: 0 3px 0 5px;
  min-width: 20px;
  text-align: right;
  color: #999;
  white-space: nowrap;
}

.CodeMirror-guttermarker { color: black; }
.CodeMirror-guttermarker-subtle { color: #999; }

/* CURSOR */

.CodeMirror-cursor {
  border-left: 1px solid black;
  border-right: none;
  width: 0;
}
/* Shown when moving in bi-directional text */
.CodeMirror div.CodeMirror-secondarycursor {
  border-left: 1px solid silver;
}
.cm-fat-cursor .CodeMirror-cursor {
  width: auto;
  border: 0 !important;
  background: #7e7;
}
.cm-fat-cursor div.CodeMirror-cursors {
  z-index: 1;
}
.cm-fat-cursor-mark {
  background-color: rgba(20, 255, 20, 0.5);
  -webkit-animation: blink 1.06s steps(1) infinite;
  -moz-animation: blink 1.06s steps(1) infinite;
  animation: blink 1.06s steps(1) infinite;
}
.cm-animate-fat-cursor {
  width: auto;
  border: 0;
  -webkit-animation: blink 1.06s steps(1) infinite;
  -moz-animation: blink 1.06s steps(1) infinite;
  animation: blink 1.06s steps(1) infinite;
  background-color: #7e7;
}
@-moz-keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}
@-webkit-keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}
@keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}

/* Can style cursor different in overwrite (non-insert) mode */
.CodeMirror-overwrite .CodeMirror-cursor {}

.cm-tab { display: inline-block; text-decoration: inherit; }

.CodeMirror-rulers {
  position: absolute;
  left: 0; right: 0; top: -50px; bottom: 0;
  overflow: hidden;
}
.CodeMirror-ruler {
  border-left: 1px solid #ccc;
  top: 0; bottom: 0;
  position: absolute;
}

/* DEFAULT THEME */

.cm-s-default .cm-header {color: blue;}
.cm-s-default .cm-quote {color: #090;}
.cm-negative {color: #d44;}
.cm-positive {color: #292;}
.cm-header, .cm-strong {font-weight: bold;}
.cm-em {font-style: italic;}
.cm-link {text-decoration: underline;}
.cm-strikethrough {text-decoration: line-through;}

.cm-s-default .cm-keyword {color: #708;}
.cm-s-default .cm-atom {color: #219;}
.cm-s-default .cm-number {color: #164;}
.cm-s-default .cm-def {color: #00f;}
.cm-s-default .cm-variable,
.cm-s-default .cm-punctuation,
.cm-s-default .cm-property,
.cm-s-default .cm-operator {}
.cm-s-default .cm-variable-2 {color: #05a;}
.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}
.cm-s-default .cm-comment {color: #a50;}
.cm-s-default .cm-string {color: #a11;}
.cm-s-default .cm-string-2 {color: #f50;}
.cm-s-default .cm-meta {color: #555;}
.cm-s-default .cm-qualifier {color: #555;}
.cm-s-default .cm-builtin {color: #30a;}
.cm-s-default .cm-bracket {color: #997;}
.cm-s-default .cm-tag {color: #170;}
.cm-s-default .cm-attribute {color: #00c;}
.cm-s-default .cm-hr {color: #999;}
.cm-s-default .cm-link {color: #00c;}

.cm-s-default .cm-error {color: #f00;}
.cm-invalidchar {color: #f00;}

.CodeMirror-composing { border-bottom: 2px solid; }

/* Default styles for common addons */

div.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}
div.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}
.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }
.CodeMirror-activeline-background {background: #e8f2ff;}

/* STOP */

/* The rest of this file contains styles related to the mechanics of
   the editor. You probably shouldn't touch them. */

.CodeMirror {
  position: relative;
  overflow: hidden;
  background: white;
}

.CodeMirror-scroll {
  overflow: scroll !important; /* Things will break if this is overridden */
  /* 30px is the magic margin used to hide the element's real scrollbars */
  /* See overflow: hidden in .CodeMirror */
  margin-bottom: -30px; margin-right: -30px;
  padding-bottom: 30px;
  height: 100%;
  outline: none; /* Prevent dragging from highlighting the element */
  position: relative;
}
.CodeMirror-sizer {
  position: relative;
  border-right: 30px solid transparent;
}

/* The fake, visible scrollbars. Used to force redraw during scrolling
   before actual scrolling happens, thus preventing shaking and
   flickering artifacts. */
.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  position: absolute;
  z-index: 6;
  display: none;
}
.CodeMirror-vscrollbar {
  right: 0; top: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
.CodeMirror-hscrollbar {
  bottom: 0; left: 0;
  overflow-y: hidden;
  overflow-x: scroll;
}
.CodeMirror-scrollbar-filler {
  right: 0; bottom: 0;
}
.CodeMirror-gutter-filler {
  left: 0; bottom: 0;
}

.CodeMirror-gutters {
  position: absolute; left: 0; top: 0;
  min-height: 100%;
  z-index: 3;
}
.CodeMirror-gutter {
  white-space: normal;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: -30px;
}
.CodeMirror-gutter-wrapper {
  position: absolute;
  z-index: 4;
  background: none !important;
  border: none !important;
}
.CodeMirror-gutter-background {
  position: absolute;
  top: 0; bottom: 0;
  z-index: 4;
}
.CodeMirror-gutter-elt {
  position: absolute;
  cursor: default;
  z-index: 4;
}
.CodeMirror-gutter-wrapper ::selection { background-color: transparent }
.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }

.CodeMirror-lines {
  cursor: text;
  min-height: 1px; /* prevents collapsing before first draw */
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  /* Reset some styles that the rest of the page might have set */
  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;
  border-width: 0;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  white-space: pre;
  word-wrap: normal;
  line-height: inherit;
  color: inherit;
  z-index: 2;
  position: relative;
  overflow: visible;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-variant-ligatures: contextual;
  font-variant-ligatures: contextual;
}
.CodeMirror-wrap pre.CodeMirror-line,
.CodeMirror-wrap pre.CodeMirror-line-like {
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;
}

.CodeMirror-linebackground {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  z-index: 0;
}

.CodeMirror-linewidget {
  position: relative;
  z-index: 2;
  padding: 0.1px; /* Force widget margins to stay inside of the container */
}

.CodeMirror-widget {}

.CodeMirror-rtl pre { direction: rtl; }

.CodeMirror-code {
  outline: none;
}

/* Force content-box sizing for the elements where we expect it */
.CodeMirror-scroll,
.CodeMirror-sizer,
.CodeMirror-gutter,
.CodeMirror-gutters,
.CodeMirror-linenumber {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.CodeMirror-measure {
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.CodeMirror-cursor {
  position: absolute;
  pointer-events: none;
}
.CodeMirror-measure pre { position: static; }

div.CodeMirror-cursors {
  visibility: hidden;
  position: relative;
  z-index: 3;
}
div.CodeMirror-dragcursors {
  visibility: visible;
}

.CodeMirror-focused div.CodeMirror-cursors {
  visibility: visible;
}

.CodeMirror-selected { background: #d9d9d9; }
.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }
.CodeMirror-crosshair { cursor: crosshair; }
.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }
.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }

.cm-searching {
  background-color: #ffa;
  background-color: rgba(255, 255, 0, .4);
}

/* Used to force a border model for a node */
.cm-force-border { padding-right: .1px; }

@media print {
  /* Hide the cursor when printing */
  .CodeMirror div.CodeMirror-cursors {
    visibility: hidden;
  }
}

/* See issue #2901 */
.cm-tab-wrap-hack:after { content: ''; }

/* Help users use markselection to safely style text background */
span.CodeMirror-selectedtext { background: none; }

.CodeMirror-dialog {
  position: absolute;
  left: 0; right: 0;
  background: inherit;
  z-index: 15;
  padding: .1em .8em;
  overflow: hidden;
  color: inherit;
}

.CodeMirror-dialog-top {
  border-bottom: 1px solid #eee;
  top: 0;
}

.CodeMirror-dialog-bottom {
  border-top: 1px solid #eee;
  bottom: 0;
}

.CodeMirror-dialog input {
  border: none;
  outline: none;
  background: transparent;
  width: 20em;
  color: inherit;
  font-family: monospace;
}

.CodeMirror-dialog button {
  font-size: 70%;
}

.CodeMirror-foldmarker {
  color: blue;
  text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px, #b9f -1px 1px 2px;
  font-family: arial;
  line-height: .3;
  cursor: pointer;
}
.CodeMirror-foldgutter {
  width: .7em;
}
.CodeMirror-foldgutter-open,
.CodeMirror-foldgutter-folded {
  cursor: pointer;
}
.CodeMirror-foldgutter-open:after {
  content: "\25BE";
}
.CodeMirror-foldgutter-folded:after {
  content: "\25B8";
}

/*
  Name:       material
  Author:     Mattia Astorino (http://github.com/equinusocio)
  Website:    https://material-theme.site/
*/

.cm-s-material.CodeMirror {
  background-color: #263238;
  color: #EEFFFF;
}

.cm-s-material .CodeMirror-gutters {
  background: #263238;
  color: #546E7A;
  border: none;
}

.cm-s-material .CodeMirror-guttermarker,
.cm-s-material .CodeMirror-guttermarker-subtle,
.cm-s-material .CodeMirror-linenumber {
  color: #546E7A;
}

.cm-s-material .CodeMirror-cursor {
  border-left: 1px solid #FFCC00;
}

.cm-s-material div.CodeMirror-selected {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material.CodeMirror-focused div.CodeMirror-selected {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material .CodeMirror-line::selection,
.cm-s-material .CodeMirror-line>span::selection,
.cm-s-material .CodeMirror-line>span>span::selection {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material .CodeMirror-line::-moz-selection,
.cm-s-material .CodeMirror-line>span::-moz-selection,
.cm-s-material .CodeMirror-line>span>span::-moz-selection {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material .CodeMirror-activeline-background {
  background: rgba(0, 0, 0, 0.5);
}

.cm-s-material .cm-keyword {
  color: #C792EA;
}

.cm-s-material .cm-operator {
  color: #89DDFF;
}

.cm-s-material .cm-variable-2 {
  color: #EEFFFF;
}

.cm-s-material .cm-variable-3,
.cm-s-material .cm-type {
  color: #f07178;
}

.cm-s-material .cm-builtin {
  color: #FFCB6B;
}

.cm-s-material .cm-atom {
  color: #F78C6C;
}

.cm-s-material .cm-number {
  color: #FF5370;
}

.cm-s-material .cm-def {
  color: #82AAFF;
}

.cm-s-material .cm-string {
  color: #C3E88D;
}

.cm-s-material .cm-string-2 {
  color: #f07178;
}

.cm-s-material .cm-comment {
  color: #546E7A;
}

.cm-s-material .cm-variable {
  color: #f07178;
}

.cm-s-material .cm-tag {
  color: #FF5370;
}

.cm-s-material .cm-meta {
  color: #FFCB6B;
}

.cm-s-material .cm-attribute {
  color: #C792EA;
}

.cm-s-material .cm-property {
  color: #C792EA;
}

.cm-s-material .cm-qualifier {
  color: #DECB6B;
}

.cm-s-material .cm-variable-3,
.cm-s-material .cm-type {
  color: #DECB6B;
}


.cm-s-material .cm-error {
  color: rgba(255, 255, 255, 1.0);
  background-color: #FF5370;
}

.cm-s-material .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}
/**
 * "
 *  Using Zenburn color palette from the Emacs Zenburn Theme
 *  https://github.com/bbatsov/zenburn-emacs/blob/master/zenburn-theme.el
 *
 *  Also using parts of https://github.com/xavi/coderay-lighttable-theme
 * "
 * From: https://github.com/wisenomad/zenburn-lighttable-theme/blob/master/zenburn.css
 */

.cm-s-zenburn .CodeMirror-gutters { background: #3f3f3f !important; }
.cm-s-zenburn .CodeMirror-foldgutter-open, .CodeMirror-foldgutter-folded { color: #999; }
.cm-s-zenburn .CodeMirror-cursor { border-left: 1px solid white; }
.cm-s-zenburn { background-color: #3f3f3f; color: #dcdccc; }
.cm-s-zenburn span.cm-builtin { color: #dcdccc; font-weight: bold; }
.cm-s-zenburn span.cm-comment { color: #7f9f7f; }
.cm-s-zenburn span.cm-keyword { color: #f0dfaf; font-weight: bold; }
.cm-s-zenburn span.cm-atom { color: #bfebbf; }
.cm-s-zenburn span.cm-def { color: #dcdccc; }
.cm-s-zenburn span.cm-variable { color: #dfaf8f; }
.cm-s-zenburn span.cm-variable-2 { color: #dcdccc; }
.cm-s-zenburn span.cm-string { color: #cc9393; }
.cm-s-zenburn span.cm-string-2 { color: #cc9393; }
.cm-s-zenburn span.cm-number { color: #dcdccc; }
.cm-s-zenburn span.cm-tag { color: #93e0e3; }
.cm-s-zenburn span.cm-property { color: #dfaf8f; }
.cm-s-zenburn span.cm-attribute { color: #dfaf8f; }
.cm-s-zenburn span.cm-qualifier { color: #7cb8bb; }
.cm-s-zenburn span.cm-meta { color: #f0dfaf; }
.cm-s-zenburn span.cm-header { color: #f0efd0; }
.cm-s-zenburn span.cm-operator { color: #f0efd0; }
.cm-s-zenburn span.CodeMirror-matchingbracket { box-sizing: border-box; background: transparent; border-bottom: 1px solid; }
.cm-s-zenburn span.CodeMirror-nonmatchingbracket { border-bottom: 1px solid; background: none; }
.cm-s-zenburn .CodeMirror-activeline { background: #000000; }
.cm-s-zenburn .CodeMirror-activeline-background { background: #000000; }
.cm-s-zenburn div.CodeMirror-selected { background: #545454; }
.cm-s-zenburn .CodeMirror-focused div.CodeMirror-selected { background: #4f4f4f; }

.cm-s-abcdef.CodeMirror { background: #0f0f0f; color: #defdef; }
.cm-s-abcdef div.CodeMirror-selected { background: #515151; }
.cm-s-abcdef .CodeMirror-line::selection, .cm-s-abcdef .CodeMirror-line > span::selection, .cm-s-abcdef .CodeMirror-line > span > span::selection { background: rgba(56, 56, 56, 0.99); }
.cm-s-abcdef .CodeMirror-line::-moz-selection, .cm-s-abcdef .CodeMirror-line > span::-moz-selection, .cm-s-abcdef .CodeMirror-line > span > span::-moz-selection { background: rgba(56, 56, 56, 0.99); }
.cm-s-abcdef .CodeMirror-gutters { background: #555; border-right: 2px solid #314151; }
.cm-s-abcdef .CodeMirror-guttermarker { color: #222; }
.cm-s-abcdef .CodeMirror-guttermarker-subtle { color: azure; }
.cm-s-abcdef .CodeMirror-linenumber { color: #FFFFFF; }
.cm-s-abcdef .CodeMirror-cursor { border-left: 1px solid #00FF00; }

.cm-s-abcdef span.cm-keyword { color: darkgoldenrod; font-weight: bold; }
.cm-s-abcdef span.cm-atom { color: #77F; }
.cm-s-abcdef span.cm-number { color: violet; }
.cm-s-abcdef span.cm-def { color: #fffabc; }
.cm-s-abcdef span.cm-variable { color: #abcdef; }
.cm-s-abcdef span.cm-variable-2 { color: #cacbcc; }
.cm-s-abcdef span.cm-variable-3, .cm-s-abcdef span.cm-type { color: #def; }
.cm-s-abcdef span.cm-property { color: #fedcba; }
.cm-s-abcdef span.cm-operator { color: #ff0; }
.cm-s-abcdef span.cm-comment { color: #7a7b7c; font-style: italic;}
.cm-s-abcdef span.cm-string { color: #2b4; }
.cm-s-abcdef span.cm-meta { color: #C9F; }
.cm-s-abcdef span.cm-qualifier { color: #FFF700; }
.cm-s-abcdef span.cm-builtin { color: #30aabc; }
.cm-s-abcdef span.cm-bracket { color: #8a8a8a; }
.cm-s-abcdef span.cm-tag { color: #FFDD44; }
.cm-s-abcdef span.cm-attribute { color: #DDFF00; }
.cm-s-abcdef span.cm-error { color: #FF0000; }
.cm-s-abcdef span.cm-header { color: aquamarine; font-weight: bold; }
.cm-s-abcdef span.cm-link { color: blueviolet; }

.cm-s-abcdef .CodeMirror-activeline-background { background: #314151; }

/*

    Name:       Base16 Default Light
    Author:     Chris Kempson (http://chriskempson.com)

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-base16-light.CodeMirror { background: #f5f5f5; color: #202020; }
.cm-s-base16-light div.CodeMirror-selected { background: #e0e0e0; }
.cm-s-base16-light .CodeMirror-line::selection, .cm-s-base16-light .CodeMirror-line > span::selection, .cm-s-base16-light .CodeMirror-line > span > span::selection { background: #e0e0e0; }
.cm-s-base16-light .CodeMirror-line::-moz-selection, .cm-s-base16-light .CodeMirror-line > span::-moz-selection, .cm-s-base16-light .CodeMirror-line > span > span::-moz-selection { background: #e0e0e0; }
.cm-s-base16-light .CodeMirror-gutters { background: #f5f5f5; border-right: 0px; }
.cm-s-base16-light .CodeMirror-guttermarker { color: #ac4142; }
.cm-s-base16-light .CodeMirror-guttermarker-subtle { color: #b0b0b0; }
.cm-s-base16-light .CodeMirror-linenumber { color: #b0b0b0; }
.cm-s-base16-light .CodeMirror-cursor { border-left: 1px solid #505050; }

.cm-s-base16-light span.cm-comment { color: #8f5536; }
.cm-s-base16-light span.cm-atom { color: #aa759f; }
.cm-s-base16-light span.cm-number { color: #aa759f; }

.cm-s-base16-light span.cm-property, .cm-s-base16-light span.cm-attribute { color: #90a959; }
.cm-s-base16-light span.cm-keyword { color: #ac4142; }
.cm-s-base16-light span.cm-string { color: #f4bf75; }

.cm-s-base16-light span.cm-variable { color: #90a959; }
.cm-s-base16-light span.cm-variable-2 { color: #6a9fb5; }
.cm-s-base16-light span.cm-def { color: #d28445; }
.cm-s-base16-light span.cm-bracket { color: #202020; }
.cm-s-base16-light span.cm-tag { color: #ac4142; }
.cm-s-base16-light span.cm-link { color: #aa759f; }
.cm-s-base16-light span.cm-error { background: #ac4142; color: #505050; }

.cm-s-base16-light .CodeMirror-activeline-background { background: #DDDCDC; }
.cm-s-base16-light .CodeMirror-matchingbracket { color: #f5f5f5 !important; background-color: #6A9FB5 !important}

/*

    Name:       Base16 Default Dark
    Author:     Chris Kempson (http://chriskempson.com)

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-base16-dark.CodeMirror { background: #151515; color: #e0e0e0; }
.cm-s-base16-dark div.CodeMirror-selected { background: #303030; }
.cm-s-base16-dark .CodeMirror-line::selection, .cm-s-base16-dark .CodeMirror-line > span::selection, .cm-s-base16-dark .CodeMirror-line > span > span::selection { background: rgba(48, 48, 48, .99); }
.cm-s-base16-dark .CodeMirror-line::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(48, 48, 48, .99); }
.cm-s-base16-dark .CodeMirror-gutters { background: #151515; border-right: 0px; }
.cm-s-base16-dark .CodeMirror-guttermarker { color: #ac4142; }
.cm-s-base16-dark .CodeMirror-guttermarker-subtle { color: #505050; }
.cm-s-base16-dark .CodeMirror-linenumber { color: #505050; }
.cm-s-base16-dark .CodeMirror-cursor { border-left: 1px solid #b0b0b0; }

.cm-s-base16-dark span.cm-comment { color: #8f5536; }
.cm-s-base16-dark span.cm-atom { color: #aa759f; }
.cm-s-base16-dark span.cm-number { color: #aa759f; }

.cm-s-base16-dark span.cm-property, .cm-s-base16-dark span.cm-attribute { color: #90a959; }
.cm-s-base16-dark span.cm-keyword { color: #ac4142; }
.cm-s-base16-dark span.cm-string { color: #f4bf75; }

.cm-s-base16-dark span.cm-variable { color: #90a959; }
.cm-s-base16-dark span.cm-variable-2 { color: #6a9fb5; }
.cm-s-base16-dark span.cm-def { color: #d28445; }
.cm-s-base16-dark span.cm-bracket { color: #e0e0e0; }
.cm-s-base16-dark span.cm-tag { color: #ac4142; }
.cm-s-base16-dark span.cm-link { color: #aa759f; }
.cm-s-base16-dark span.cm-error { background: #ac4142; color: #b0b0b0; }

.cm-s-base16-dark .CodeMirror-activeline-background { background: #202020; }
.cm-s-base16-dark .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }

/*

    Name:       dracula
    Author:     Michael Kaminsky (http://github.com/mkaminsky11)

    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)

*/


.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {
  background-color: #282a36 !important;
  color: #f8f8f2 !important;
  border: none;
}
.cm-s-dracula .CodeMirror-gutters { color: #282a36; }
.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }
.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }
.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }
.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-dracula span.cm-comment { color: #6272a4; }
.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }
.cm-s-dracula span.cm-number { color: #bd93f9; }
.cm-s-dracula span.cm-variable { color: #50fa7b; }
.cm-s-dracula span.cm-variable-2 { color: white; }
.cm-s-dracula span.cm-def { color: #50fa7b; }
.cm-s-dracula span.cm-operator { color: #ff79c6; }
.cm-s-dracula span.cm-keyword { color: #ff79c6; }
.cm-s-dracula span.cm-atom { color: #bd93f9; }
.cm-s-dracula span.cm-meta { color: #f8f8f2; }
.cm-s-dracula span.cm-tag { color: #ff79c6; }
.cm-s-dracula span.cm-attribute { color: #50fa7b; }
.cm-s-dracula span.cm-qualifier { color: #50fa7b; }
.cm-s-dracula span.cm-property { color: #66d9ef; }
.cm-s-dracula span.cm-builtin { color: #50fa7b; }
.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }

.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }
.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }

/*

    Name:       Hopscotch
    Author:     Jan T. Sott

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-hopscotch.CodeMirror {background: #322931; color: #d5d3d5;}
.cm-s-hopscotch div.CodeMirror-selected {background: #433b42 !important;}
.cm-s-hopscotch .CodeMirror-gutters {background: #322931; border-right: 0px;}
.cm-s-hopscotch .CodeMirror-linenumber {color: #797379;}
.cm-s-hopscotch .CodeMirror-cursor {border-left: 1px solid #989498 !important;}

.cm-s-hopscotch span.cm-comment {color: #b33508;}
.cm-s-hopscotch span.cm-atom {color: #c85e7c;}
.cm-s-hopscotch span.cm-number {color: #c85e7c;}

.cm-s-hopscotch span.cm-property, .cm-s-hopscotch span.cm-attribute {color: #8fc13e;}
.cm-s-hopscotch span.cm-keyword {color: #dd464c;}
.cm-s-hopscotch span.cm-string {color: #fdcc59;}

.cm-s-hopscotch span.cm-variable {color: #8fc13e;}
.cm-s-hopscotch span.cm-variable-2 {color: #1290bf;}
.cm-s-hopscotch span.cm-def {color: #fd8b19;}
.cm-s-hopscotch span.cm-error {background: #dd464c; color: #989498;}
.cm-s-hopscotch span.cm-bracket {color: #d5d3d5;}
.cm-s-hopscotch span.cm-tag {color: #dd464c;}
.cm-s-hopscotch span.cm-link {color: #c85e7c;}

.cm-s-hopscotch .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}
.cm-s-hopscotch .CodeMirror-activeline-background { background: #302020; }

/****************************************************************/
/*   Based on mbonaci's Brackets mbo theme                      */
/*   https://github.com/mbonaci/global/blob/master/Mbo.tmTheme  */
/*   Create your own: http://tmtheme-editor.herokuapp.com       */
/****************************************************************/

.cm-s-mbo.CodeMirror { background: #2c2c2c; color: #ffffec; }
.cm-s-mbo div.CodeMirror-selected { background: #716C62; }
.cm-s-mbo .CodeMirror-line::selection, .cm-s-mbo .CodeMirror-line > span::selection, .cm-s-mbo .CodeMirror-line > span > span::selection { background: rgba(113, 108, 98, .99); }
.cm-s-mbo .CodeMirror-line::-moz-selection, .cm-s-mbo .CodeMirror-line > span::-moz-selection, .cm-s-mbo .CodeMirror-line > span > span::-moz-selection { background: rgba(113, 108, 98, .99); }
.cm-s-mbo .CodeMirror-gutters { background: #4e4e4e; border-right: 0px; }
.cm-s-mbo .CodeMirror-guttermarker { color: white; }
.cm-s-mbo .CodeMirror-guttermarker-subtle { color: grey; }
.cm-s-mbo .CodeMirror-linenumber { color: #dadada; }
.cm-s-mbo .CodeMirror-cursor { border-left: 1px solid #ffffec; }

.cm-s-mbo span.cm-comment { color: #95958a; }
.cm-s-mbo span.cm-atom { color: #00a8c6; }
.cm-s-mbo span.cm-number { color: #00a8c6; }

.cm-s-mbo span.cm-property, .cm-s-mbo span.cm-attribute { color: #9ddfe9; }
.cm-s-mbo span.cm-keyword { color: #ffb928; }
.cm-s-mbo span.cm-string { color: #ffcf6c; }
.cm-s-mbo span.cm-string.cm-property { color: #ffffec; }

.cm-s-mbo span.cm-variable { color: #ffffec; }
.cm-s-mbo span.cm-variable-2 { color: #00a8c6; }
.cm-s-mbo span.cm-def { color: #ffffec; }
.cm-s-mbo span.cm-bracket { color: #fffffc; font-weight: bold; }
.cm-s-mbo span.cm-tag { color: #9ddfe9; }
.cm-s-mbo span.cm-link { color: #f54b07; }
.cm-s-mbo span.cm-error { border-bottom: #636363; color: #ffffec; }
.cm-s-mbo span.cm-qualifier { color: #ffffec; }

.cm-s-mbo .CodeMirror-activeline-background { background: #494b41; }
.cm-s-mbo .CodeMirror-matchingbracket { color: #ffb928 !important; }
.cm-s-mbo .CodeMirror-matchingtag { background: rgba(255, 255, 255, .37); }

/*
  MDN-LIKE Theme - Mozilla
  Ported to CodeMirror by Peter Kroon <plakroon@gmail.com>
  Report bugs/issues here: https://github.com/codemirror/CodeMirror/issues
  GitHub: @peterkroon

  The mdn-like theme is inspired on the displayed code examples at: https://developer.mozilla.org/en-US/docs/Web/CSS/animation

*/
.cm-s-mdn-like.CodeMirror { color: #999; background-color: #fff; }
.cm-s-mdn-like div.CodeMirror-selected { background: #cfc; }
.cm-s-mdn-like .CodeMirror-line::selection, .cm-s-mdn-like .CodeMirror-line > span::selection, .cm-s-mdn-like .CodeMirror-line > span > span::selection { background: #cfc; }
.cm-s-mdn-like .CodeMirror-line::-moz-selection, .cm-s-mdn-like .CodeMirror-line > span::-moz-selection, .cm-s-mdn-like .CodeMirror-line > span > span::-moz-selection { background: #cfc; }

.cm-s-mdn-like .CodeMirror-gutters { background: #f8f8f8; border-left: 6px solid rgba(0,83,159,0.65); color: #333; }
.cm-s-mdn-like .CodeMirror-linenumber { color: #aaa; padding-left: 8px; }
.cm-s-mdn-like .CodeMirror-cursor { border-left: 2px solid #222; }

.cm-s-mdn-like .cm-keyword { color: #6262FF; }
.cm-s-mdn-like .cm-atom { color: #F90; }
.cm-s-mdn-like .cm-number { color:  #ca7841; }
.cm-s-mdn-like .cm-def { color: #8DA6CE; }
.cm-s-mdn-like span.cm-variable-2, .cm-s-mdn-like span.cm-tag { color: #690; }
.cm-s-mdn-like span.cm-variable-3, .cm-s-mdn-like span.cm-def, .cm-s-mdn-like span.cm-type { color: #07a; }

.cm-s-mdn-like .cm-variable { color: #07a; }
.cm-s-mdn-like .cm-property { color: #905; }
.cm-s-mdn-like .cm-qualifier { color: #690; }

.cm-s-mdn-like .cm-operator { color: #cda869; }
.cm-s-mdn-like .cm-comment { color:#777; font-weight:normal; }
.cm-s-mdn-like .cm-string { color:#07a; font-style:italic; }
.cm-s-mdn-like .cm-string-2 { color:#bd6b18; } /*?*/
.cm-s-mdn-like .cm-meta { color: #000; } /*?*/
.cm-s-mdn-like .cm-builtin { color: #9B7536; } /*?*/
.cm-s-mdn-like .cm-tag { color: #997643; }
.cm-s-mdn-like .cm-attribute { color: #d6bb6d; } /*?*/
.cm-s-mdn-like .cm-header { color: #FF6400; }
.cm-s-mdn-like .cm-hr { color: #AEAEAE; }
.cm-s-mdn-like .cm-link { color:#ad9361; font-style:italic; text-decoration:none; }
.cm-s-mdn-like .cm-error { border-bottom: 1px solid red; }

div.cm-s-mdn-like .CodeMirror-activeline-background { background: #efefff; }
div.cm-s-mdn-like span.CodeMirror-matchingbracket { outline:1px solid grey; color: inherit; }

.cm-s-mdn-like.CodeMirror { background-image: url(data:image/png;base64,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); }

/*

    Name:       seti
    Author:     Michael Kaminsky (http://github.com/mkaminsky11)

    Original seti color scheme by Jesse Weed (https://github.com/jesseweed/seti-syntax)

*/


.cm-s-seti.CodeMirror {
  background-color: #151718 !important;
  color: #CFD2D1 !important;
  border: none;
}
.cm-s-seti .CodeMirror-gutters {
  color: #404b53;
  background-color: #0E1112;
  border: none;
}
.cm-s-seti .CodeMirror-cursor { border-left: solid thin #f8f8f0; }
.cm-s-seti .CodeMirror-linenumber { color: #6D8A88; }
.cm-s-seti.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }
.cm-s-seti .CodeMirror-line::selection, .cm-s-seti .CodeMirror-line > span::selection, .cm-s-seti .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-seti .CodeMirror-line::-moz-selection, .cm-s-seti .CodeMirror-line > span::-moz-selection, .cm-s-seti .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-seti span.cm-comment { color: #41535b; }
.cm-s-seti span.cm-string, .cm-s-seti span.cm-string-2 { color: #55b5db; }
.cm-s-seti span.cm-number { color: #cd3f45; }
.cm-s-seti span.cm-variable { color: #55b5db; }
.cm-s-seti span.cm-variable-2 { color: #a074c4; }
.cm-s-seti span.cm-def { color: #55b5db; }
.cm-s-seti span.cm-keyword { color: #ff79c6; }
.cm-s-seti span.cm-operator { color: #9fca56; }
.cm-s-seti span.cm-keyword { color: #e6cd69; }
.cm-s-seti span.cm-atom { color: #cd3f45; }
.cm-s-seti span.cm-meta { color: #55b5db; }
.cm-s-seti span.cm-tag { color: #55b5db; }
.cm-s-seti span.cm-attribute { color: #9fca56; }
.cm-s-seti span.cm-qualifier { color: #9fca56; }
.cm-s-seti span.cm-property { color: #a074c4; }
.cm-s-seti span.cm-variable-3, .cm-s-seti span.cm-type { color: #9fca56; }
.cm-s-seti span.cm-builtin { color: #9fca56; }
.cm-s-seti .CodeMirror-activeline-background { background: #101213; }
.cm-s-seti .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }

/*
Solarized theme for code-mirror
http://ethanschoonover.com/solarized
*/

/*
Solarized color palette
http://ethanschoonover.com/solarized/img/solarized-palette.png
*/

.solarized.base03 { color: #002b36; }
.solarized.base02 { color: #073642; }
.solarized.base01 { color: #586e75; }
.solarized.base00 { color: #657b83; }
.solarized.base0 { color: #839496; }
.solarized.base1 { color: #93a1a1; }
.solarized.base2 { color: #eee8d5; }
.solarized.base3  { color: #fdf6e3; }
.solarized.solar-yellow  { color: #b58900; }
.solarized.solar-orange  { color: #cb4b16; }
.solarized.solar-red { color: #dc322f; }
.solarized.solar-magenta { color: #d33682; }
.solarized.solar-violet  { color: #6c71c4; }
.solarized.solar-blue { color: #268bd2; }
.solarized.solar-cyan { color: #2aa198; }
.solarized.solar-green { color: #859900; }

/* Color scheme for code-mirror */

.cm-s-solarized {
  line-height: 1.45em;
  color-profile: sRGB;
  rendering-intent: auto;
}
.cm-s-solarized.cm-s-dark {
  color: #839496;
  background-color: #002b36;
  text-shadow: #002b36 0 1px;
}
.cm-s-solarized.cm-s-light {
  background-color: #fdf6e3;
  color: #657b83;
  text-shadow: #eee8d5 0 1px;
}

.cm-s-solarized .CodeMirror-widget {
  text-shadow: none;
}

.cm-s-solarized .cm-header { color: #586e75; }
.cm-s-solarized .cm-quote { color: #93a1a1; }

.cm-s-solarized .cm-keyword { color: #cb4b16; }
.cm-s-solarized .cm-atom { color: #d33682; }
.cm-s-solarized .cm-number { color: #d33682; }
.cm-s-solarized .cm-def { color: #2aa198; }

.cm-s-solarized .cm-variable { color: #839496; }
.cm-s-solarized .cm-variable-2 { color: #b58900; }
.cm-s-solarized .cm-variable-3, .cm-s-solarized .cm-type { color: #6c71c4; }

.cm-s-solarized .cm-property { color: #2aa198; }
.cm-s-solarized .cm-operator { color: #6c71c4; }

.cm-s-solarized .cm-comment { color: #586e75; font-style:italic; }

.cm-s-solarized .cm-string { color: #859900; }
.cm-s-solarized .cm-string-2 { color: #b58900; }

.cm-s-solarized .cm-meta { color: #859900; }
.cm-s-solarized .cm-qualifier { color: #b58900; }
.cm-s-solarized .cm-builtin { color: #d33682; }
.cm-s-solarized .cm-bracket { color: #cb4b16; }
.cm-s-solarized .CodeMirror-matchingbracket { color: #859900; }
.cm-s-solarized .CodeMirror-nonmatchingbracket { color: #dc322f; }
.cm-s-solarized .cm-tag { color: #93a1a1; }
.cm-s-solarized .cm-attribute { color: #2aa198; }
.cm-s-solarized .cm-hr {
  color: transparent;
  border-top: 1px solid #586e75;
  display: block;
}
.cm-s-solarized .cm-link { color: #93a1a1; cursor: pointer; }
.cm-s-solarized .cm-special { color: #6c71c4; }
.cm-s-solarized .cm-em {
  color: #999;
  text-decoration: underline;
  text-decoration-style: dotted;
}
.cm-s-solarized .cm-error,
.cm-s-solarized .cm-invalidchar {
  color: #586e75;
  border-bottom: 1px dotted #dc322f;
}

.cm-s-solarized.cm-s-dark div.CodeMirror-selected { background: #073642; }
.cm-s-solarized.cm-s-dark.CodeMirror ::selection { background: rgba(7, 54, 66, 0.99); }
.cm-s-solarized.cm-s-dark .CodeMirror-line::-moz-selection, .cm-s-dark .CodeMirror-line > span::-moz-selection, .cm-s-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(7, 54, 66, 0.99); }

.cm-s-solarized.cm-s-light div.CodeMirror-selected { background: #eee8d5; }
.cm-s-solarized.cm-s-light .CodeMirror-line::selection, .cm-s-light .CodeMirror-line > span::selection, .cm-s-light .CodeMirror-line > span > span::selection { background: #eee8d5; }
.cm-s-solarized.cm-s-light .CodeMirror-line::-moz-selection, .cm-s-ligh .CodeMirror-line > span::-moz-selection, .cm-s-ligh .CodeMirror-line > span > span::-moz-selection { background: #eee8d5; }

/* Editor styling */



/* Little shadow on the view-port of the buffer view */
.cm-s-solarized.CodeMirror {
  -moz-box-shadow: inset 7px 0 12px -6px #000;
  -webkit-box-shadow: inset 7px 0 12px -6px #000;
  box-shadow: inset 7px 0 12px -6px #000;
}

/* Remove gutter border */
.cm-s-solarized .CodeMirror-gutters {
  border-right: 0;
}

/* Gutter colors and line number styling based of color scheme (dark / light) */

/* Dark */
.cm-s-solarized.cm-s-dark .CodeMirror-gutters {
  background-color: #073642;
}

.cm-s-solarized.cm-s-dark .CodeMirror-linenumber {
  color: #586e75;
  text-shadow: #021014 0 -1px;
}

/* Light */
.cm-s-solarized.cm-s-light .CodeMirror-gutters {
  background-color: #eee8d5;
}

.cm-s-solarized.cm-s-light .CodeMirror-linenumber {
  color: #839496;
}

/* Common */
.cm-s-solarized .CodeMirror-linenumber {
  padding: 0 5px;
}
.cm-s-solarized .CodeMirror-guttermarker-subtle { color: #586e75; }
.cm-s-solarized.cm-s-dark .CodeMirror-guttermarker { color: #ddd; }
.cm-s-solarized.cm-s-light .CodeMirror-guttermarker { color: #cb4b16; }

.cm-s-solarized .CodeMirror-gutter .CodeMirror-gutter-text {
  color: #586e75;
}

/* Cursor */
.cm-s-solarized .CodeMirror-cursor { border-left: 1px solid #819090; }

/* Fat cursor */
.cm-s-solarized.cm-s-light.cm-fat-cursor .CodeMirror-cursor { background: #77ee77; }
.cm-s-solarized.cm-s-light .cm-animate-fat-cursor { background-color: #77ee77; }
.cm-s-solarized.cm-s-dark.cm-fat-cursor .CodeMirror-cursor { background: #586e75; }
.cm-s-solarized.cm-s-dark .cm-animate-fat-cursor { background-color: #586e75; }

/* Active line */
.cm-s-solarized.cm-s-dark .CodeMirror-activeline-background {
  background: rgba(255, 255, 255, 0.06);
}
.cm-s-solarized.cm-s-light .CodeMirror-activeline-background {
  background: rgba(0, 0, 0, 0.06);
}

.cm-s-the-matrix.CodeMirror { background: #000000; color: #00FF00; }
.cm-s-the-matrix div.CodeMirror-selected { background: #2D2D2D; }
.cm-s-the-matrix .CodeMirror-line::selection, .cm-s-the-matrix .CodeMirror-line > span::selection, .cm-s-the-matrix .CodeMirror-line > span > span::selection { background: rgba(45, 45, 45, 0.99); }
.cm-s-the-matrix .CodeMirror-line::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span > span::-moz-selection { background: rgba(45, 45, 45, 0.99); }
.cm-s-the-matrix .CodeMirror-gutters { background: #060; border-right: 2px solid #00FF00; }
.cm-s-the-matrix .CodeMirror-guttermarker { color: #0f0; }
.cm-s-the-matrix .CodeMirror-guttermarker-subtle { color: white; }
.cm-s-the-matrix .CodeMirror-linenumber { color: #FFFFFF; }
.cm-s-the-matrix .CodeMirror-cursor { border-left: 1px solid #00FF00; }

.cm-s-the-matrix span.cm-keyword { color: #008803; font-weight: bold; }
.cm-s-the-matrix span.cm-atom { color: #3FF; }
.cm-s-the-matrix span.cm-number { color: #FFB94F; }
.cm-s-the-matrix span.cm-def { color: #99C; }
.cm-s-the-matrix span.cm-variable { color: #F6C; }
.cm-s-the-matrix span.cm-variable-2 { color: #C6F; }
.cm-s-the-matrix span.cm-variable-3, .cm-s-the-matrix span.cm-type { color: #96F; }
.cm-s-the-matrix span.cm-property { color: #62FFA0; }
.cm-s-the-matrix span.cm-operator { color: #999; }
.cm-s-the-matrix span.cm-comment { color: #CCCCCC; }
.cm-s-the-matrix span.cm-string { color: #39C; }
.cm-s-the-matrix span.cm-meta { color: #C9F; }
.cm-s-the-matrix span.cm-qualifier { color: #FFF700; }
.cm-s-the-matrix span.cm-builtin { color: #30a; }
.cm-s-the-matrix span.cm-bracket { color: #cc7; }
.cm-s-the-matrix span.cm-tag { color: #FFBD40; }
.cm-s-the-matrix span.cm-attribute { color: #FFF700; }
.cm-s-the-matrix span.cm-error { color: #FF0000; }

.cm-s-the-matrix .CodeMirror-activeline-background { background: #040; }

/*
Copyright (C) 2011 by MarkLogic Corporation
Author: Mike Brevoort <mike@brevoort.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
.cm-s-xq-light span.cm-keyword { line-height: 1em; font-weight: bold; color: #5A5CAD; }
.cm-s-xq-light span.cm-atom { color: #6C8CD5; }
.cm-s-xq-light span.cm-number { color: #164; }
.cm-s-xq-light span.cm-def { text-decoration:underline; }
.cm-s-xq-light span.cm-variable { color: black; }
.cm-s-xq-light span.cm-variable-2 { color:black; }
.cm-s-xq-light span.cm-variable-3, .cm-s-xq-light span.cm-type { color: black; }
.cm-s-xq-light span.cm-property {}
.cm-s-xq-light span.cm-operator {}
.cm-s-xq-light span.cm-comment { color: #0080FF; font-style: italic; }
.cm-s-xq-light span.cm-string { color: red; }
.cm-s-xq-light span.cm-meta { color: yellow; }
.cm-s-xq-light span.cm-qualifier { color: grey; }
.cm-s-xq-light span.cm-builtin { color: #7EA656; }
.cm-s-xq-light span.cm-bracket { color: #cc7; }
.cm-s-xq-light span.cm-tag { color: #3F7F7F; }
.cm-s-xq-light span.cm-attribute { color: #7F007F; }
.cm-s-xq-light span.cm-error { color: #f00; }

.cm-s-xq-light .CodeMirror-activeline-background { background: #e8f2ff; }
.cm-s-xq-light .CodeMirror-matchingbracket { outline:1px solid grey;color:black !important;background:yellow; }

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.CodeMirror {
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  font-family: var(--jp-code-font-family);
  border: 0;
  border-radius: 0;
  height: auto;
  /* Changed to auto to autogrow */
}

.CodeMirror pre {
  padding: 0 var(--jp-code-padding);
}

.jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-dialog {
  background-color: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
}

/* This causes https://github.com/jupyter/jupyterlab/issues/522 */
/* May not cause it not because we changed it! */
.CodeMirror-lines {
  padding: var(--jp-code-padding) 0;
}

.CodeMirror-linenumber {
  padding: 0 8px;
}

.jp-CodeMirrorEditor-static {
  margin: var(--jp-code-padding);
}

.jp-CodeMirrorEditor,
.jp-CodeMirrorEditor-static {
  cursor: text;
}

.jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
  border-left: var(--jp-code-cursor-width0) solid var(--jp-editor-cursor-color);
}

/* When zoomed out 67% and 33% on a screen of 1440 width x 900 height */
@media screen and (min-width: 2138px) and (max-width: 4319px) {
  .jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
    border-left: var(--jp-code-cursor-width1) solid
      var(--jp-editor-cursor-color);
  }
}

/* When zoomed out less than 33% */
@media screen and (min-width: 4320px) {
  .jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
    border-left: var(--jp-code-cursor-width2) solid
      var(--jp-editor-cursor-color);
  }
}

.CodeMirror.jp-mod-readOnly .CodeMirror-cursor {
  display: none;
}

.CodeMirror-gutters {
  border-right: 1px solid var(--jp-border-color2);
  background-color: var(--jp-layout-color0);
}

.jp-CollaboratorCursor {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: none;
  border-bottom: 3px solid;
  background-clip: content-box;
  margin-left: -5px;
  margin-right: -5px;
}

.CodeMirror-selectedtext.cm-searching {
  background-color: var(--jp-search-selected-match-background-color) !important;
  color: var(--jp-search-selected-match-color) !important;
}

.cm-searching {
  background-color: var(
    --jp-search-unselected-match-background-color
  ) !important;
  color: var(--jp-search-unselected-match-color) !important;
}

.CodeMirror-focused .CodeMirror-selected {
  background-color: var(--jp-editor-selected-focused-background);
}

.CodeMirror-selected {
  background-color: var(--jp-editor-selected-background);
}

.jp-CollaboratorCursor-hover {
  position: absolute;
  z-index: 1;
  transform: translateX(-50%);
  color: white;
  border-radius: 3px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  text-align: center;
  font-size: var(--jp-ui-font-size1);
  white-space: nowrap;
}

.jp-CodeMirror-ruler {
  border-left: 1px dashed var(--jp-border-color2);
}

/**
 * Here is our jupyter theme for CodeMirror syntax highlighting
 * This is used in our marked.js syntax highlighting and CodeMirror itself
 * The string "jupyter" is set in ../codemirror/widget.DEFAULT_CODEMIRROR_THEME
 * This came from the classic notebook, which came form highlight.js/GitHub
 */

/**
 * CodeMirror themes are handling the background/color in this way. This works
 * fine for CodeMirror editors outside the notebook, but the notebook styles
 * these things differently.
 */
.CodeMirror.cm-s-jupyter {
  background: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
}

/* In the notebook, we want this styling to be handled by its container */
.jp-CodeConsole .CodeMirror.cm-s-jupyter,
.jp-Notebook .CodeMirror.cm-s-jupyter {
  background: transparent;
}

.cm-s-jupyter .CodeMirror-cursor {
  border-left: var(--jp-code-cursor-width0) solid var(--jp-editor-cursor-color);
}
.cm-s-jupyter span.cm-keyword {
  color: var(--jp-mirror-editor-keyword-color);
  font-weight: bold;
}
.cm-s-jupyter span.cm-atom {
  color: var(--jp-mirror-editor-atom-color);
}
.cm-s-jupyter span.cm-number {
  color: var(--jp-mirror-editor-number-color);
}
.cm-s-jupyter span.cm-def {
  color: var(--jp-mirror-editor-def-color);
}
.cm-s-jupyter span.cm-variable {
  color: var(--jp-mirror-editor-variable-color);
}
.cm-s-jupyter span.cm-variable-2 {
  color: var(--jp-mirror-editor-variable-2-color);
}
.cm-s-jupyter span.cm-variable-3 {
  color: var(--jp-mirror-editor-variable-3-color);
}
.cm-s-jupyter span.cm-punctuation {
  color: var(--jp-mirror-editor-punctuation-color);
}
.cm-s-jupyter span.cm-property {
  color: var(--jp-mirror-editor-property-color);
}
.cm-s-jupyter span.cm-operator {
  color: var(--jp-mirror-editor-operator-color);
  font-weight: bold;
}
.cm-s-jupyter span.cm-comment {
  color: var(--jp-mirror-editor-comment-color);
  font-style: italic;
}
.cm-s-jupyter span.cm-string {
  color: var(--jp-mirror-editor-string-color);
}
.cm-s-jupyter span.cm-string-2 {
  color: var(--jp-mirror-editor-string-2-color);
}
.cm-s-jupyter span.cm-meta {
  color: var(--jp-mirror-editor-meta-color);
}
.cm-s-jupyter span.cm-qualifier {
  color: var(--jp-mirror-editor-qualifier-color);
}
.cm-s-jupyter span.cm-builtin {
  color: var(--jp-mirror-editor-builtin-color);
}
.cm-s-jupyter span.cm-bracket {
  color: var(--jp-mirror-editor-bracket-color);
}
.cm-s-jupyter span.cm-tag {
  color: var(--jp-mirror-editor-tag-color);
}
.cm-s-jupyter span.cm-attribute {
  color: var(--jp-mirror-editor-attribute-color);
}
.cm-s-jupyter span.cm-header {
  color: var(--jp-mirror-editor-header-color);
}
.cm-s-jupyter span.cm-quote {
  color: var(--jp-mirror-editor-quote-color);
}
.cm-s-jupyter span.cm-link {
  color: var(--jp-mirror-editor-link-color);
}
.cm-s-jupyter span.cm-error {
  color: var(--jp-mirror-editor-error-color);
}
.cm-s-jupyter span.cm-hr {
  color: #999;
}

.cm-s-jupyter span.cm-tab {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAAXNSR0IArs4c6QAAAGFJREFUSMft1LsRQFAQheHPowAKoACx3IgEKtaEHujDjORSgWTH/ZOdnZOcM/sgk/kFFWY0qV8foQwS4MKBCS3qR6ixBJvElOobYAtivseIE120FaowJPN75GMu8j/LfMwNjh4HUpwg4LUAAAAASUVORK5CYII=);
  background-position: right;
  background-repeat: no-repeat;
}

.cm-s-jupyter .CodeMirror-activeline-background,
.cm-s-jupyter .CodeMirror-gutter {
  background-color: var(--jp-layout-color2);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| RenderedText
|----------------------------------------------------------------------------*/

.jp-RenderedText {
  text-align: left;
  padding-left: var(--jp-code-padding);
  line-height: var(--jp-code-line-height);
  font-family: var(--jp-code-font-family);
}

.jp-RenderedText pre,
.jp-RenderedJavaScript pre,
.jp-RenderedHTMLCommon pre {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-code-font-size);
  border: none;
  margin: 0px;
  padding: 0px;
  line-height: normal;
}

.jp-RenderedText pre a:link {
  text-decoration: none;
  color: var(--jp-content-link-color);
}
.jp-RenderedText pre a:hover {
  text-decoration: underline;
  color: var(--jp-content-link-color);
}
.jp-RenderedText pre a:visited {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

/* console foregrounds and backgrounds */
.jp-RenderedText pre .ansi-black-fg {
  color: #3e424d;
}
.jp-RenderedText pre .ansi-red-fg {
  color: #e75c58;
}
.jp-RenderedText pre .ansi-green-fg {
  color: #00a250;
}
.jp-RenderedText pre .ansi-yellow-fg {
  color: #ddb62b;
}
.jp-RenderedText pre .ansi-blue-fg {
  color: #208ffb;
}
.jp-RenderedText pre .ansi-magenta-fg {
  color: #d160c4;
}
.jp-RenderedText pre .ansi-cyan-fg {
  color: #60c6c8;
}
.jp-RenderedText pre .ansi-white-fg {
  color: #c5c1b4;
}

.jp-RenderedText pre .ansi-black-bg {
  background-color: #3e424d;
}
.jp-RenderedText pre .ansi-red-bg {
  background-color: #e75c58;
}
.jp-RenderedText pre .ansi-green-bg {
  background-color: #00a250;
}
.jp-RenderedText pre .ansi-yellow-bg {
  background-color: #ddb62b;
}
.jp-RenderedText pre .ansi-blue-bg {
  background-color: #208ffb;
}
.jp-RenderedText pre .ansi-magenta-bg {
  background-color: #d160c4;
}
.jp-RenderedText pre .ansi-cyan-bg {
  background-color: #60c6c8;
}
.jp-RenderedText pre .ansi-white-bg {
  background-color: #c5c1b4;
}

.jp-RenderedText pre .ansi-black-intense-fg {
  color: #282c36;
}
.jp-RenderedText pre .ansi-red-intense-fg {
  color: #b22b31;
}
.jp-RenderedText pre .ansi-green-intense-fg {
  color: #007427;
}
.jp-RenderedText pre .ansi-yellow-intense-fg {
  color: #b27d12;
}
.jp-RenderedText pre .ansi-blue-intense-fg {
  color: #0065ca;
}
.jp-RenderedText pre .ansi-magenta-intense-fg {
  color: #a03196;
}
.jp-RenderedText pre .ansi-cyan-intense-fg {
  color: #258f8f;
}
.jp-RenderedText pre .ansi-white-intense-fg {
  color: #a1a6b2;
}

.jp-RenderedText pre .ansi-black-intense-bg {
  background-color: #282c36;
}
.jp-RenderedText pre .ansi-red-intense-bg {
  background-color: #b22b31;
}
.jp-RenderedText pre .ansi-green-intense-bg {
  background-color: #007427;
}
.jp-RenderedText pre .ansi-yellow-intense-bg {
  background-color: #b27d12;
}
.jp-RenderedText pre .ansi-blue-intense-bg {
  background-color: #0065ca;
}
.jp-RenderedText pre .ansi-magenta-intense-bg {
  background-color: #a03196;
}
.jp-RenderedText pre .ansi-cyan-intense-bg {
  background-color: #258f8f;
}
.jp-RenderedText pre .ansi-white-intense-bg {
  background-color: #a1a6b2;
}

.jp-RenderedText pre .ansi-default-inverse-fg {
  color: var(--jp-ui-inverse-font-color0);
}
.jp-RenderedText pre .ansi-default-inverse-bg {
  background-color: var(--jp-inverse-layout-color0);
}

.jp-RenderedText pre .ansi-bold {
  font-weight: bold;
}
.jp-RenderedText pre .ansi-underline {
  text-decoration: underline;
}

.jp-RenderedText[data-mime-type='application/vnd.jupyter.stderr'] {
  background: var(--jp-rendermime-error-background);
  padding-top: var(--jp-code-padding);
}

/*-----------------------------------------------------------------------------
| RenderedLatex
|----------------------------------------------------------------------------*/

.jp-RenderedLatex {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-content-font-size1);
  line-height: var(--jp-content-line-height);
}

/* Left-justify outputs.*/
.jp-OutputArea-output.jp-RenderedLatex {
  padding: var(--jp-code-padding);
  text-align: left;
}

/*-----------------------------------------------------------------------------
| RenderedHTML
|----------------------------------------------------------------------------*/

.jp-RenderedHTMLCommon {
  color: var(--jp-content-font-color1);
  font-family: var(--jp-content-font-family);
  font-size: var(--jp-content-font-size1);
  line-height: var(--jp-content-line-height);
  /* Give a bit more R padding on Markdown text to keep line lengths reasonable */
  padding-right: 20px;
}

.jp-RenderedHTMLCommon em {
  font-style: italic;
}

.jp-RenderedHTMLCommon strong {
  font-weight: bold;
}

.jp-RenderedHTMLCommon u {
  text-decoration: underline;
}

.jp-RenderedHTMLCommon a:link {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:hover {
  text-decoration: underline;
  color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:visited {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

/* Headings */

.jp-RenderedHTMLCommon h1,
.jp-RenderedHTMLCommon h2,
.jp-RenderedHTMLCommon h3,
.jp-RenderedHTMLCommon h4,
.jp-RenderedHTMLCommon h5,
.jp-RenderedHTMLCommon h6 {
  line-height: var(--jp-content-heading-line-height);
  font-weight: var(--jp-content-heading-font-weight);
  font-style: normal;
  margin: var(--jp-content-heading-margin-top) 0
    var(--jp-content-heading-margin-bottom) 0;
}

.jp-RenderedHTMLCommon h1:first-child,
.jp-RenderedHTMLCommon h2:first-child,
.jp-RenderedHTMLCommon h3:first-child,
.jp-RenderedHTMLCommon h4:first-child,
.jp-RenderedHTMLCommon h5:first-child,
.jp-RenderedHTMLCommon h6:first-child {
  margin-top: calc(0.5 * var(--jp-content-heading-margin-top));
}

.jp-RenderedHTMLCommon h1:last-child,
.jp-RenderedHTMLCommon h2:last-child,
.jp-RenderedHTMLCommon h3:last-child,
.jp-RenderedHTMLCommon h4:last-child,
.jp-RenderedHTMLCommon h5:last-child,
.jp-RenderedHTMLCommon h6:last-child {
  margin-bottom: calc(0.5 * var(--jp-content-heading-margin-bottom));
}

.jp-RenderedHTMLCommon h1 {
  font-size: var(--jp-content-font-size5);
}

.jp-RenderedHTMLCommon h2 {
  font-size: var(--jp-content-font-size4);
}

.jp-RenderedHTMLCommon h3 {
  font-size: var(--jp-content-font-size3);
}

.jp-RenderedHTMLCommon h4 {
  font-size: var(--jp-content-font-size2);
}

.jp-RenderedHTMLCommon h5 {
  font-size: var(--jp-content-font-size1);
}

.jp-RenderedHTMLCommon h6 {
  font-size: var(--jp-content-font-size0);
}

/* Lists */

.jp-RenderedHTMLCommon ul:not(.list-inline),
.jp-RenderedHTMLCommon ol:not(.list-inline) {
  padding-left: 2em;
}

.jp-RenderedHTMLCommon ul {
  list-style: disc;
}

.jp-RenderedHTMLCommon ul ul {
  list-style: square;
}

.jp-RenderedHTMLCommon ul ul ul {
  list-style: circle;
}

.jp-RenderedHTMLCommon ol {
  list-style: decimal;
}

.jp-RenderedHTMLCommon ol ol {
  list-style: upper-alpha;
}

.jp-RenderedHTMLCommon ol ol ol {
  list-style: lower-alpha;
}

.jp-RenderedHTMLCommon ol ol ol ol {
  list-style: lower-roman;
}

.jp-RenderedHTMLCommon ol ol ol ol ol {
  list-style: decimal;
}

.jp-RenderedHTMLCommon ol,
.jp-RenderedHTMLCommon ul {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon ul ul,
.jp-RenderedHTMLCommon ul ol,
.jp-RenderedHTMLCommon ol ul,
.jp-RenderedHTMLCommon ol ol {
  margin-bottom: 0em;
}

.jp-RenderedHTMLCommon hr {
  color: var(--jp-border-color2);
  background-color: var(--jp-border-color1);
  margin-top: 1em;
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon > pre {
  margin: 1.5em 2em;
}

.jp-RenderedHTMLCommon pre,
.jp-RenderedHTMLCommon code {
  border: 0;
  background-color: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
  font-family: var(--jp-code-font-family);
  font-size: inherit;
  line-height: var(--jp-code-line-height);
  padding: 0;
  white-space: pre-wrap;
}

.jp-RenderedHTMLCommon :not(pre) > code {
  background-color: var(--jp-layout-color2);
  padding: 1px 5px;
}

/* Tables */

.jp-RenderedHTMLCommon table {
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  color: var(--jp-ui-font-color1);
  font-size: 12px;
  table-layout: fixed;
  margin-left: auto;
  margin-right: auto;
}

.jp-RenderedHTMLCommon thead {
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
  vertical-align: bottom;
}

.jp-RenderedHTMLCommon td,
.jp-RenderedHTMLCommon th,
.jp-RenderedHTMLCommon tr {
  vertical-align: middle;
  padding: 0.5em 0.5em;
  line-height: normal;
  white-space: normal;
  max-width: none;
  border: none;
}

.jp-RenderedMarkdown.jp-RenderedHTMLCommon td,
.jp-RenderedMarkdown.jp-RenderedHTMLCommon th {
  max-width: none;
}

:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon td,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon th,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon tr {
  text-align: right;
}

.jp-RenderedHTMLCommon th {
  font-weight: bold;
}

.jp-RenderedHTMLCommon tbody tr:nth-child(odd) {
  background: var(--jp-layout-color0);
}

.jp-RenderedHTMLCommon tbody tr:nth-child(even) {
  background: var(--jp-rendermime-table-row-background);
}

.jp-RenderedHTMLCommon tbody tr:hover {
  background: var(--jp-rendermime-table-row-hover-background);
}

.jp-RenderedHTMLCommon table {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon p {
  text-align: left;
  margin: 0px;
}

.jp-RenderedHTMLCommon p {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon img {
  -moz-force-broken-image-icon: 1;
}

/* Restrict to direct children as other images could be nested in other content. */
.jp-RenderedHTMLCommon > img {
  display: block;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 1em;
}

/* Change color behind transparent images if they need it... */
[data-jp-theme-light='false'] .jp-RenderedImage img.jp-needs-light-background {
  background-color: var(--jp-inverse-layout-color1);
}
[data-jp-theme-light='true'] .jp-RenderedImage img.jp-needs-dark-background {
  background-color: var(--jp-inverse-layout-color1);
}
/* ...or leave it untouched if they don't */
[data-jp-theme-light='false'] .jp-RenderedImage img.jp-needs-dark-background {
}
[data-jp-theme-light='true'] .jp-RenderedImage img.jp-needs-light-background {
}

.jp-RenderedHTMLCommon img,
.jp-RenderedImage img,
.jp-RenderedHTMLCommon svg,
.jp-RenderedSVG svg {
  max-width: 100%;
  height: auto;
}

.jp-RenderedHTMLCommon img.jp-mod-unconfined,
.jp-RenderedImage img.jp-mod-unconfined,
.jp-RenderedHTMLCommon svg.jp-mod-unconfined,
.jp-RenderedSVG svg.jp-mod-unconfined {
  max-width: none;
}

.jp-RenderedHTMLCommon .alert {
  padding: var(--jp-notebook-padding);
  border: var(--jp-border-width) solid transparent;
  border-radius: var(--jp-border-radius);
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon .alert-info {
  color: var(--jp-info-color0);
  background-color: var(--jp-info-color3);
  border-color: var(--jp-info-color2);
}
.jp-RenderedHTMLCommon .alert-info hr {
  border-color: var(--jp-info-color3);
}
.jp-RenderedHTMLCommon .alert-info > p:last-child,
.jp-RenderedHTMLCommon .alert-info > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-warning {
  color: var(--jp-warn-color0);
  background-color: var(--jp-warn-color3);
  border-color: var(--jp-warn-color2);
}
.jp-RenderedHTMLCommon .alert-warning hr {
  border-color: var(--jp-warn-color3);
}
.jp-RenderedHTMLCommon .alert-warning > p:last-child,
.jp-RenderedHTMLCommon .alert-warning > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-success {
  color: var(--jp-success-color0);
  background-color: var(--jp-success-color3);
  border-color: var(--jp-success-color2);
}
.jp-RenderedHTMLCommon .alert-success hr {
  border-color: var(--jp-success-color3);
}
.jp-RenderedHTMLCommon .alert-success > p:last-child,
.jp-RenderedHTMLCommon .alert-success > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-danger {
  color: var(--jp-error-color0);
  background-color: var(--jp-error-color3);
  border-color: var(--jp-error-color2);
}
.jp-RenderedHTMLCommon .alert-danger hr {
  border-color: var(--jp-error-color3);
}
.jp-RenderedHTMLCommon .alert-danger > p:last-child,
.jp-RenderedHTMLCommon .alert-danger > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon blockquote {
  margin: 1em 2em;
  padding: 0 1em;
  border-left: 5px solid var(--jp-border-color2);
}

a.jp-InternalAnchorLink {
  visibility: hidden;
  margin-left: 8px;
  color: var(--md-blue-800);
}

h1:hover .jp-InternalAnchorLink,
h2:hover .jp-InternalAnchorLink,
h3:hover .jp-InternalAnchorLink,
h4:hover .jp-InternalAnchorLink,
h5:hover .jp-InternalAnchorLink,
h6:hover .jp-InternalAnchorLink {
  visibility: visible;
}

.jp-RenderedHTMLCommon kbd {
  background-color: var(--jp-rendermime-table-row-background);
  border: 1px solid var(--jp-border-color0);
  border-bottom-color: var(--jp-border-color2);
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
  display: inline-block;
  font-size: 0.8em;
  line-height: 1em;
  padding: 0.2em 0.5em;
}

/* Most direct children of .jp-RenderedHTMLCommon have a margin-bottom of 1.0.
 * At the bottom of cells this is a bit too much as there is also spacing
 * between cells. Going all the way to 0 gets too tight between markdown and
 * code cells.
 */
.jp-RenderedHTMLCommon > *:last-child {
  margin-bottom: 0.5em;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-MimeDocument {
  outline: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-filebrowser-button-height: 28px;
  --jp-private-filebrowser-button-width: 48px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-FileBrowser {
  display: flex;
  flex-direction: column;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
}

.jp-FileBrowser-toolbar.jp-Toolbar {
  border-bottom: none;
  height: auto;
  margin: var(--jp-toolbar-header-margin);
  box-shadow: none;
}

.jp-BreadCrumbs {
  flex: 0 0 auto;
  margin: 4px 12px;
}

.jp-BreadCrumbs-item {
  margin: 0px 2px;
  padding: 0px 2px;
  border-radius: var(--jp-border-radius);
  cursor: pointer;
}

.jp-BreadCrumbs-item:hover {
  background-color: var(--jp-layout-color2);
}

.jp-BreadCrumbs-item:first-child {
  margin-left: 0px;
}

.jp-BreadCrumbs-item.jp-mod-dropTarget {
  background-color: var(--jp-brand-color2);
  opacity: 0.7;
}

/*-----------------------------------------------------------------------------
| Buttons
|----------------------------------------------------------------------------*/

.jp-FileBrowser-toolbar.jp-Toolbar {
  padding: 0px;
}

.jp-FileBrowser-toolbar.jp-Toolbar {
  justify-content: space-evenly;
}

.jp-FileBrowser-toolbar.jp-Toolbar .jp-Toolbar-item {
  flex: 1;
}

.jp-FileBrowser-toolbar.jp-Toolbar .jp-ToolbarButtonComponent {
  width: 100%;
}

/*-----------------------------------------------------------------------------
| DirListing
|----------------------------------------------------------------------------*/

.jp-DirListing {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  outline: 0;
}

.jp-DirListing-header {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-top: var(--jp-border-width) solid var(--jp-border-color2);
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
  box-shadow: var(--jp-toolbar-box-shadow);
  z-index: 2;
}

.jp-DirListing-headerItem {
  padding: 4px 12px 2px 12px;
  font-weight: 500;
}

.jp-DirListing-headerItem:hover {
  background: var(--jp-layout-color2);
}

.jp-DirListing-headerItem.jp-id-name {
  flex: 1 0 84px;
}

.jp-DirListing-headerItem.jp-id-modified {
  flex: 0 0 112px;
  border-left: var(--jp-border-width) solid var(--jp-border-color2);
  text-align: right;
}

.jp-DirListing-narrow .jp-id-modified,
.jp-DirListing-narrow .jp-DirListing-itemModified {
  display: none;
}

.jp-DirListing-headerItem.jp-mod-selected {
  font-weight: 600;
}

/* increase specificity to override bundled default */
.jp-DirListing-content {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
  background-color: var(--jp-layout-color1);
}

/* Style the directory listing content when a user drops a file to upload */
.jp-DirListing.jp-mod-native-drop .jp-DirListing-content {
  outline: 5px dashed rgba(128, 128, 128, 0.5);
  outline-offset: -10px;
  cursor: copy;
}

.jp-DirListing-item {
  display: flex;
  flex-direction: row;
  padding: 4px 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jp-DirListing-item.jp-mod-selected {
  color: white;
  background: var(--jp-brand-color1);
}

.jp-DirListing-item.jp-mod-dropTarget {
  background: var(--jp-brand-color3);
}

.jp-DirListing-item:hover:not(.jp-mod-selected) {
  background: var(--jp-layout-color2);
}

.jp-DirListing-itemIcon {
  flex: 0 0 20px;
  margin-right: 4px;
}

.jp-DirListing-itemText {
  flex: 1 0 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
}

.jp-DirListing-itemModified {
  flex: 0 0 125px;
  text-align: right;
}

.jp-DirListing-editor {
  flex: 1 0 64px;
  outline: none;
  border: none;
}

.jp-DirListing-item.jp-mod-running .jp-DirListing-itemIcon:before {
  color: limegreen;
  content: '\25CF';
  font-size: 8px;
  position: absolute;
  left: -8px;
}

.jp-DirListing-item.lm-mod-drag-image,
.jp-DirListing-item.jp-mod-selected.lm-mod-drag-image {
  font-size: var(--jp-ui-font-size1);
  padding-left: 4px;
  margin-left: 4px;
  width: 160px;
  background-color: var(--jp-ui-inverse-font-color2);
  box-shadow: var(--jp-elevation-z2);
  border-radius: 0px;
  color: var(--jp-ui-font-color1);
  transform: translateX(-40%) translateY(-58%);
}

.jp-DirListing-deadSpace {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
  background-color: var(--jp-layout-color1);
}

.jp-Document {
  min-width: 120px;
  min-height: 120px;
  outline: none;
}

.jp-FileDialog.jp-mod-conflict input {
  color: red;
}

.jp-FileDialog .jp-new-name-title {
  margin-top: 12px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
}

/*-----------------------------------------------------------------------------
| Main OutputArea
| OutputArea has a list of Outputs
|----------------------------------------------------------------------------*/

.jp-OutputArea {
  overflow-y: auto;
}

.jp-OutputArea-child {
  display: flex;
  flex-direction: row;
}

.jp-OutputPrompt {
  flex: 0 0 var(--jp-cell-prompt-width);
  color: var(--jp-cell-outprompt-font-color);
  font-family: var(--jp-cell-prompt-font-family);
  padding: var(--jp-code-padding);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
  opacity: var(--jp-cell-prompt-opacity);
  /* Right align prompt text, don't wrap to handle large prompt numbers */
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Disable text selection */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jp-OutputArea-output {
  height: auto;
  overflow: auto;
  user-select: text;
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
}

.jp-OutputArea-child .jp-OutputArea-output {
  flex-grow: 1;
  flex-shrink: 1;
}

/**
 * Isolated output.
 */
.jp-OutputArea-output.jp-mod-isolated {
  width: 100%;
  display: block;
}

/*
When drag events occur, `p-mod-override-cursor` is added to the body.
Because iframes steal all cursor events, the following two rules are necessary
to suppress pointer events while resize drags are occurring. There may be a
better solution to this problem.
*/
body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated {
  position: relative;
}

body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}

/* pre */

.jp-OutputArea-output pre {
  border: none;
  margin: 0px;
  padding: 0px;
  overflow-x: auto;
  overflow-y: auto;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
}

/* tables */

.jp-OutputArea-output.jp-RenderedHTMLCommon table {
  margin-left: 0;
  margin-right: 0;
}

/* description lists */

.jp-OutputArea-output dl,
.jp-OutputArea-output dt,
.jp-OutputArea-output dd {
  display: block;
}

.jp-OutputArea-output dl {
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.jp-OutputArea-output dt {
  font-weight: bold;
  float: left;
  width: 20%;
  padding: 0;
  margin: 0;
}

.jp-OutputArea-output dd {
  float: left;
  width: 80%;
  padding: 0;
  margin: 0;
}

/* Hide the gutter in case of
 *  - nested output areas (e.g. in the case of output widgets)
 *  - mirrored output areas
 */
.jp-OutputArea .jp-OutputArea .jp-OutputArea-prompt {
  display: none;
}

/*-----------------------------------------------------------------------------
| executeResult is added to any Output-result for the display of the object
| returned by a cell
|----------------------------------------------------------------------------*/

.jp-OutputArea-output.jp-OutputArea-executeResult {
  margin-left: 0px;
  flex: 1 1 auto;
}

.jp-OutputArea-executeResult.jp-RenderedText {
  padding-top: var(--jp-code-padding);
}

/*-----------------------------------------------------------------------------
| The Stdin output
|----------------------------------------------------------------------------*/

.jp-OutputArea-stdin {
  line-height: var(--jp-code-line-height);
  padding-top: var(--jp-code-padding);
  display: flex;
}

.jp-Stdin-prompt {
  color: var(--jp-content-font-color0);
  padding-right: var(--jp-code-padding);
  vertical-align: baseline;
  flex: 0 0 auto;
}

.jp-Stdin-input {
  font-family: var(--jp-code-font-family);
  font-size: inherit;
  color: inherit;
  background-color: inherit;
  width: 42%;
  min-width: 200px;
  /* make sure input baseline aligns with prompt */
  vertical-align: baseline;
  /* padding + margin = 0.5em between prompt and cursor */
  padding: 0em 0.25em;
  margin: 0em 0.25em;
  flex: 0 0 70%;
}

.jp-Stdin-input:focus {
  box-shadow: none;
}

/*-----------------------------------------------------------------------------
| Output Area View
|----------------------------------------------------------------------------*/

.jp-LinkedOutputView .jp-OutputArea {
  height: 100%;
  display: block;
}

.jp-LinkedOutputView .jp-OutputArea-output:only-child {
  height: 100%;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Collapser {
  flex: 0 0 var(--jp-cell-collapser-width);
  padding: 0px;
  margin: 0px;
  border: none;
  outline: none;
  background: transparent;
  border-radius: var(--jp-border-radius);
  opacity: 1;
}

.jp-Collapser-child {
  display: block;
  width: 100%;
  box-sizing: border-box;
  /* height: 100% doesn't work because the height of its parent is computed from content */
  position: absolute;
  top: 0px;
  bottom: 0px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Header/Footer
|----------------------------------------------------------------------------*/

/* Hidden by zero height by default */
.jp-CellHeader,
.jp-CellFooter {
  height: 0px;
  width: 100%;
  padding: 0px;
  margin: 0px;
  border: none;
  outline: none;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Input
|----------------------------------------------------------------------------*/

/* All input areas */
.jp-InputArea {
  display: flex;
  flex-direction: row;
}

.jp-InputArea-editor {
  flex: 1 1 auto;
}

.jp-InputArea-editor {
  /* This is the non-active, default styling */
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  border-radius: 0px;
  background: var(--jp-cell-editor-background);
}

.jp-InputPrompt {
  flex: 0 0 var(--jp-cell-prompt-width);
  color: var(--jp-cell-inprompt-font-color);
  font-family: var(--jp-cell-prompt-font-family);
  padding: var(--jp-code-padding);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  opacity: var(--jp-cell-prompt-opacity);
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
  opacity: var(--jp-cell-prompt-opacity);
  /* Right align prompt text, don't wrap to handle large prompt numbers */
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Disable text selection */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Placeholder
|----------------------------------------------------------------------------*/

.jp-Placeholder {
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
}

.jp-Placeholder-prompt {
  box-sizing: border-box;
}

.jp-Placeholder-content {
  flex: 1 1 auto;
  border: none;
  background: transparent;
  height: 20px;
  box-sizing: border-box;
}

.jp-Placeholder-content .jp-MoreHorizIcon {
  width: 32px;
  height: 16px;
  border: 1px solid transparent;
  border-radius: var(--jp-border-radius);
}

.jp-Placeholder-content .jp-MoreHorizIcon:hover {
  border: 1px solid var(--jp-border-color1);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--jp-layout-color0);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-cell-scrolling-output-offset: 5px;
}

/*-----------------------------------------------------------------------------
| Cell
|----------------------------------------------------------------------------*/

.jp-Cell {
  padding: var(--jp-cell-padding);
  margin: 0px;
  border: none;
  outline: none;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Common input/output
|----------------------------------------------------------------------------*/

.jp-Cell-inputWrapper,
.jp-Cell-outputWrapper {
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
  /* Added to reveal the box-shadow on the input and output collapsers. */
  overflow: visible;
}

/* Only input/output areas inside cells */
.jp-Cell-inputArea,
.jp-Cell-outputArea {
  flex: 1 1 auto;
}

/*-----------------------------------------------------------------------------
| Collapser
|----------------------------------------------------------------------------*/

/* Make the output collapser disappear when there is not output, but do so
 * in a manner that leaves it in the layout and preserves its width.
 */
.jp-Cell.jp-mod-noOutputs .jp-Cell-outputCollapser {
  border: none !important;
  background: transparent !important;
}

.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputCollapser {
  min-height: var(--jp-cell-collapser-min-height);
}

/*-----------------------------------------------------------------------------
| Output
|----------------------------------------------------------------------------*/

/* Put a space between input and output when there IS output */
.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputWrapper {
  margin-top: 5px;
}

/* Text output with the Out[] prompt needs a top padding to match the
 * alignment of the Out[] prompt itself.
 */
.jp-OutputArea-executeResult .jp-RenderedText.jp-OutputArea-output {
  padding-top: var(--jp-code-padding);
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea {
  overflow-y: auto;
  max-height: 200px;
  box-shadow: inset 0 0 6px 2px rgba(0, 0, 0, 0.3);
  margin-left: var(--jp-private-cell-scrolling-output-offset);
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-prompt {
  flex: 0 0
    calc(
      var(--jp-cell-prompt-width) -
        var(--jp-private-cell-scrolling-output-offset)
    );
}

/*-----------------------------------------------------------------------------
| CodeCell
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| MarkdownCell
|----------------------------------------------------------------------------*/

.jp-MarkdownOutput {
  flex: 1 1 auto;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: var(--jp-code-padding);
}

.jp-MarkdownOutput.jp-RenderedHTMLCommon {
  overflow: auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------

/*-----------------------------------------------------------------------------
| Styles
|----------------------------------------------------------------------------*/

.jp-NotebookPanel-toolbar {
  padding: 2px;
}

.jp-Toolbar-item.jp-Notebook-toolbarCellType .jp-select-wrapper.jp-mod-focused {
  border: none;
  box-shadow: none;
}

.jp-Notebook-toolbarCellTypeDropdown select {
  height: 24px;
  font-size: var(--jp-ui-font-size1);
  line-height: 14px;
  border-radius: 0;
  display: block;
}

.jp-Notebook-toolbarCellTypeDropdown span {
  top: 5px !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-notebook-dragImage-width: 304px;
  --jp-private-notebook-dragImage-height: 36px;
  --jp-private-notebook-selected-color: var(--md-blue-400);
  --jp-private-notebook-active-color: var(--md-green-400);
}

/*-----------------------------------------------------------------------------
| Imports
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Notebook
|----------------------------------------------------------------------------*/

.jp-NotebookPanel {
  display: block;
  height: 100%;
}

.jp-NotebookPanel.jp-Document {
  min-width: 240px;
  min-height: 120px;
}

.jp-Notebook {
  padding: var(--jp-notebook-padding);
  outline: none;
  overflow: auto;
  background: var(--jp-layout-color0);
}

.jp-Notebook.jp-mod-scrollPastEnd::after {
  display: block;
  content: '';
  min-height: var(--jp-notebook-scroll-padding);
}

.jp-Notebook .jp-Cell {
  overflow: visible;
}

.jp-Notebook .jp-Cell .jp-InputPrompt {
  cursor: move;
}

/*-----------------------------------------------------------------------------
| Notebook state related styling
|
| The notebook and cells each have states, here are the possibilities:
|
| - Notebook
|   - Command
|   - Edit
| - Cell
|   - None
|   - Active (only one can be active)
|   - Selected (the cells actions are applied to)
|   - Multiselected (when multiple selected, the cursor)
|   - No outputs
|----------------------------------------------------------------------------*/

/* Command or edit modes */

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-InputPrompt {
  opacity: var(--jp-cell-prompt-not-active-opacity);
  color: var(--jp-cell-prompt-not-active-font-color);
}

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-OutputPrompt {
  opacity: var(--jp-cell-prompt-not-active-opacity);
  color: var(--jp-cell-prompt-not-active-font-color);
}

/* cell is active */
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser {
  background: var(--jp-brand-color1);
}

/* collapser is hovered */
.jp-Notebook .jp-Cell .jp-Collapser:hover {
  box-shadow: var(--jp-elevation-z2);
  background: var(--jp-brand-color1);
  opacity: var(--jp-cell-collapser-not-active-hover-opacity);
}

/* cell is active and collapser is hovered */
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser:hover {
  background: var(--jp-brand-color0);
  opacity: 1;
}

/* Command mode */

.jp-Notebook.jp-mod-commandMode .jp-Cell.jp-mod-selected {
  background: var(--jp-notebook-multiselected-color);
}

.jp-Notebook.jp-mod-commandMode
  .jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {
  background: transparent;
}

/* Edit mode */

.jp-Notebook.jp-mod-editMode .jp-Cell.jp-mod-active .jp-InputArea-editor {
  border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
  background-color: var(--jp-cell-editor-active-background);
}

/*-----------------------------------------------------------------------------
| Notebook drag and drop
|----------------------------------------------------------------------------*/

.jp-Notebook-cell.jp-mod-dropSource {
  opacity: 0.5;
}

.jp-Notebook-cell.jp-mod-dropTarget,
.jp-Notebook.jp-mod-commandMode
  .jp-Notebook-cell.jp-mod-active.jp-mod-selected.jp-mod-dropTarget {
  border-top-color: var(--jp-private-notebook-selected-color);
  border-top-style: solid;
  border-top-width: 2px;
}

.jp-dragImage {
  display: flex;
  flex-direction: row;
  width: var(--jp-private-notebook-dragImage-width);
  height: var(--jp-private-notebook-dragImage-height);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background);
  overflow: visible;
}

.jp-dragImage-singlePrompt {
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
}

.jp-dragImage .jp-dragImage-content {
  flex: 1 1 auto;
  z-index: 2;
  font-size: var(--jp-code-font-size);
  font-family: var(--jp-code-font-family);
  line-height: var(--jp-code-line-height);
  padding: var(--jp-code-padding);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background-color);
  color: var(--jp-content-font-color3);
  text-align: left;
  margin: 4px 4px 4px 0px;
}

.jp-dragImage .jp-dragImage-prompt {
  flex: 0 0 auto;
  min-width: 36px;
  color: var(--jp-cell-inprompt-font-color);
  padding: var(--jp-code-padding);
  padding-left: 12px;
  font-family: var(--jp-cell-prompt-font-family);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  line-height: 1.9;
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
}

.jp-dragImage-multipleBack {
  z-index: -1;
  position: absolute;
  height: 32px;
  width: 300px;
  top: 8px;
  left: 8px;
  background: var(--jp-layout-color2);
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
}

/*-----------------------------------------------------------------------------
| Cell toolbar
|----------------------------------------------------------------------------*/

.jp-NotebookTools {
  display: block;
  min-width: var(--jp-sidebar-min-width);
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  /* This is needed so that all font sizing of children done in ems is
    * relative to this base size */
  font-size: var(--jp-ui-font-size1);
  overflow: auto;
}

.jp-NotebookTools-tool {
  padding: 0px 12px 0 12px;
}

.jp-ActiveCellTool {
  padding: 12px;
  background-color: var(--jp-layout-color1);
  border-top: none !important;
}

.jp-ActiveCellTool .jp-InputArea-prompt {
  flex: 0 0 auto;
  padding-left: 0px;
}

.jp-ActiveCellTool .jp-InputArea-editor {
  flex: 1 1 auto;
  background: var(--jp-cell-editor-background);
  border-color: var(--jp-cell-editor-border-color);
}

.jp-ActiveCellTool .jp-InputArea-editor .CodeMirror {
  background: transparent;
}

.jp-MetadataEditorTool {
  flex-direction: column;
  padding: 12px 0px 12px 0px;
}

.jp-RankedPanel > :not(:first-child) {
  margin-top: 12px;
}

.jp-KeySelector select.jp-mod-styled {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  border: var(--jp-border-width) solid var(--jp-border-color1);
}

.jp-KeySelector label,
.jp-MetadataEditorTool label {
  line-height: 1.4;
}

/*-----------------------------------------------------------------------------
| Presentation Mode (.jp-mod-presentationMode)
|----------------------------------------------------------------------------*/

.jp-mod-presentationMode .jp-Notebook {
  --jp-content-font-size1: var(--jp-content-presentation-font-size1);
  --jp-code-font-size: var(--jp-code-presentation-font-size);
}

.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-InputPrompt,
.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-OutputPrompt {
  flex: 0 0 110px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

</style>

    <style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*
The following CSS variables define the main, public API for styling JupyterLab.
These variables should be used by all plugins wherever possible. In other
words, plugins should not define custom colors, sizes, etc unless absolutely
necessary. This enables users to change the visual theme of JupyterLab
by changing these variables.

Many variables appear in an ordered sequence (0,1,2,3). These sequences
are designed to work well together, so for example, `--jp-border-color1` should
be used with `--jp-layout-color1`. The numbers have the following meanings:

* 0: super-primary, reserved for special emphasis
* 1: primary, most important under normal situations
* 2: secondary, next most important under normal situations
* 3: tertiary, next most important under normal situations

Throughout JupyterLab, we are mostly following principles from Google's
Material Design when selecting colors. We are not, however, following
all of MD as it is not optimized for dense, information rich UIs.
*/

:root {
  /* Elevation
   *
   * We style box-shadows using Material Design's idea of elevation. These particular numbers are taken from here:
   *
   * https://github.com/material-components/material-components-web
   * https://material-components-web.appspot.com/elevation.html
   */

  --jp-shadow-base-lightness: 0;
  --jp-shadow-umbra-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.2
  );
  --jp-shadow-penumbra-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.14
  );
  --jp-shadow-ambient-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.12
  );
  --jp-elevation-z0: none;
  --jp-elevation-z1: 0px 2px 1px -1px var(--jp-shadow-umbra-color),
    0px 1px 1px 0px var(--jp-shadow-penumbra-color),
    0px 1px 3px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z2: 0px 3px 1px -2px var(--jp-shadow-umbra-color),
    0px 2px 2px 0px var(--jp-shadow-penumbra-color),
    0px 1px 5px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z4: 0px 2px 4px -1px var(--jp-shadow-umbra-color),
    0px 4px 5px 0px var(--jp-shadow-penumbra-color),
    0px 1px 10px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z6: 0px 3px 5px -1px var(--jp-shadow-umbra-color),
    0px 6px 10px 0px var(--jp-shadow-penumbra-color),
    0px 1px 18px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z8: 0px 5px 5px -3px var(--jp-shadow-umbra-color),
    0px 8px 10px 1px var(--jp-shadow-penumbra-color),
    0px 3px 14px 2px var(--jp-shadow-ambient-color);
  --jp-elevation-z12: 0px 7px 8px -4px var(--jp-shadow-umbra-color),
    0px 12px 17px 2px var(--jp-shadow-penumbra-color),
    0px 5px 22px 4px var(--jp-shadow-ambient-color);
  --jp-elevation-z16: 0px 8px 10px -5px var(--jp-shadow-umbra-color),
    0px 16px 24px 2px var(--jp-shadow-penumbra-color),
    0px 6px 30px 5px var(--jp-shadow-ambient-color);
  --jp-elevation-z20: 0px 10px 13px -6px var(--jp-shadow-umbra-color),
    0px 20px 31px 3px var(--jp-shadow-penumbra-color),
    0px 8px 38px 7px var(--jp-shadow-ambient-color);
  --jp-elevation-z24: 0px 11px 15px -7px var(--jp-shadow-umbra-color),
    0px 24px 38px 3px var(--jp-shadow-penumbra-color),
    0px 9px 46px 8px var(--jp-shadow-ambient-color);

  /* Borders
   *
   * The following variables, specify the visual styling of borders in JupyterLab.
   */

  --jp-border-width: 1px;
  --jp-border-color0: var(--md-grey-400);
  --jp-border-color1: var(--md-grey-400);
  --jp-border-color2: var(--md-grey-300);
  --jp-border-color3: var(--md-grey-200);
  --jp-border-radius: 2px;

  /* UI Fonts
   *
   * The UI font CSS variables are used for the typography all of the JupyterLab
   * user interface elements that are not directly user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-ui-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-ui-font-scale-factor: 1.2;
  --jp-ui-font-size0: 0.83333em;
  --jp-ui-font-size1: 13px; /* Base font size */
  --jp-ui-font-size2: 1.2em;
  --jp-ui-font-size3: 1.44em;

  --jp-ui-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  /*
   * Use these font colors against the corresponding main layout colors.
   * In a light theme, these go from dark to light.
   */

  /* Defaults use Material Design specification */
  --jp-ui-font-color0: rgba(0, 0, 0, 1);
  --jp-ui-font-color1: rgba(0, 0, 0, 0.87);
  --jp-ui-font-color2: rgba(0, 0, 0, 0.54);
  --jp-ui-font-color3: rgba(0, 0, 0, 0.38);

  /*
   * Use these against the brand/accent/warn/error colors.
   * These will typically go from light to darker, in both a dark and light theme.
   */

  --jp-ui-inverse-font-color0: rgba(255, 255, 255, 1);
  --jp-ui-inverse-font-color1: rgba(255, 255, 255, 1);
  --jp-ui-inverse-font-color2: rgba(255, 255, 255, 0.7);
  --jp-ui-inverse-font-color3: rgba(255, 255, 255, 0.5);

  /* Content Fonts
   *
   * Content font variables are used for typography of user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-content-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-content-line-height: 1.6;
  --jp-content-font-scale-factor: 1.2;
  --jp-content-font-size0: 0.83333em;
  --jp-content-font-size1: 14px; /* Base font size */
  --jp-content-font-size2: 1.2em;
  --jp-content-font-size3: 1.44em;
  --jp-content-font-size4: 1.728em;
  --jp-content-font-size5: 2.0736em;

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-content-presentation-font-size1: 17px;

  --jp-content-heading-line-height: 1;
  --jp-content-heading-margin-top: 1.2em;
  --jp-content-heading-margin-bottom: 0.8em;
  --jp-content-heading-font-weight: 500;

  /* Defaults use Material Design specification */
  --jp-content-font-color0: rgba(0, 0, 0, 1);
  --jp-content-font-color1: rgba(0, 0, 0, 0.87);
  --jp-content-font-color2: rgba(0, 0, 0, 0.54);
  --jp-content-font-color3: rgba(0, 0, 0, 0.38);

  --jp-content-link-color: var(--md-blue-700);

  --jp-content-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';

  /*
   * Code Fonts
   *
   * Code font variables are used for typography of code and other monospaces content.
   */

  --jp-code-font-size: 13px;
  --jp-code-line-height: 1.3077; /* 17px for 13px base */
  --jp-code-padding: 5px; /* 5px for 13px base, codemirror highlighting needs integer px value */
  --jp-code-font-family-default: Menlo, Consolas, 'DejaVu Sans Mono', monospace;
  --jp-code-font-family: var(--jp-code-font-family-default);

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-code-presentation-font-size: 16px;

  /* may need to tweak cursor width if you change font size */
  --jp-code-cursor-width0: 1.4px;
  --jp-code-cursor-width1: 2px;
  --jp-code-cursor-width2: 4px;

  /* Layout
   *
   * The following are the main layout colors use in JupyterLab. In a light
   * theme these would go from light to dark.
   */

  --jp-layout-color0: white;
  --jp-layout-color1: white;
  --jp-layout-color2: var(--md-grey-200);
  --jp-layout-color3: var(--md-grey-400);
  --jp-layout-color4: var(--md-grey-600);

  /* Inverse Layout
   *
   * The following are the inverse layout colors use in JupyterLab. In a light
   * theme these would go from dark to light.
   */

  --jp-inverse-layout-color0: #111111;
  --jp-inverse-layout-color1: var(--md-grey-900);
  --jp-inverse-layout-color2: var(--md-grey-800);
  --jp-inverse-layout-color3: var(--md-grey-700);
  --jp-inverse-layout-color4: var(--md-grey-600);

  /* Brand/accent */

  --jp-brand-color0: var(--md-blue-700);
  --jp-brand-color1: var(--md-blue-500);
  --jp-brand-color2: var(--md-blue-300);
  --jp-brand-color3: var(--md-blue-100);
  --jp-brand-color4: var(--md-blue-50);

  --jp-accent-color0: var(--md-green-700);
  --jp-accent-color1: var(--md-green-500);
  --jp-accent-color2: var(--md-green-300);
  --jp-accent-color3: var(--md-green-100);

  /* State colors (warn, error, success, info) */

  --jp-warn-color0: var(--md-orange-700);
  --jp-warn-color1: var(--md-orange-500);
  --jp-warn-color2: var(--md-orange-300);
  --jp-warn-color3: var(--md-orange-100);

  --jp-error-color0: var(--md-red-700);
  --jp-error-color1: var(--md-red-500);
  --jp-error-color2: var(--md-red-300);
  --jp-error-color3: var(--md-red-100);

  --jp-success-color0: var(--md-green-700);
  --jp-success-color1: var(--md-green-500);
  --jp-success-color2: var(--md-green-300);
  --jp-success-color3: var(--md-green-100);

  --jp-info-color0: var(--md-cyan-700);
  --jp-info-color1: var(--md-cyan-500);
  --jp-info-color2: var(--md-cyan-300);
  --jp-info-color3: var(--md-cyan-100);

  /* Cell specific styles */

  --jp-cell-padding: 5px;

  --jp-cell-collapser-width: 8px;
  --jp-cell-collapser-min-height: 20px;
  --jp-cell-collapser-not-active-hover-opacity: 0.6;

  --jp-cell-editor-background: var(--md-grey-100);
  --jp-cell-editor-border-color: var(--md-grey-300);
  --jp-cell-editor-box-shadow: inset 0 0 2px var(--md-blue-300);
  --jp-cell-editor-active-background: var(--jp-layout-color0);
  --jp-cell-editor-active-border-color: var(--jp-brand-color1);

  --jp-cell-prompt-width: 64px;
  --jp-cell-prompt-font-family: 'Source Code Pro', monospace;
  --jp-cell-prompt-letter-spacing: 0px;
  --jp-cell-prompt-opacity: 1;
  --jp-cell-prompt-not-active-opacity: 0.5;
  --jp-cell-prompt-not-active-font-color: var(--md-grey-700);
  /* A custom blend of MD grey and blue 600
   * See https://meyerweb.com/eric/tools/color-blend/#546E7A:1E88E5:5:hex */
  --jp-cell-inprompt-font-color: #307fc1;
  /* A custom blend of MD grey and orange 600
   * https://meyerweb.com/eric/tools/color-blend/#546E7A:F4511E:5:hex */
  --jp-cell-outprompt-font-color: #bf5b3d;

  /* Notebook specific styles */

  --jp-notebook-padding: 10px;
  --jp-notebook-select-background: var(--jp-layout-color1);
  --jp-notebook-multiselected-color: var(--md-blue-50);

  /* The scroll padding is calculated to fill enough space at the bottom of the
  notebook to show one single-line cell (with appropriate padding) at the top
  when the notebook is scrolled all the way to the bottom. We also subtract one
  pixel so that no scrollbar appears if we have just one single-line cell in the
  notebook. This padding is to enable a 'scroll past end' feature in a notebook.
  */
  --jp-notebook-scroll-padding: calc(
    100% - var(--jp-code-font-size) * var(--jp-code-line-height) -
      var(--jp-code-padding) - var(--jp-cell-padding) - 1px
  );

  /* Rendermime styles */

  --jp-rendermime-error-background: #fdd;
  --jp-rendermime-table-row-background: var(--md-grey-100);
  --jp-rendermime-table-row-hover-background: var(--md-light-blue-50);

  /* Dialog specific styles */

  --jp-dialog-background: rgba(0, 0, 0, 0.25);

  /* Console specific styles */

  --jp-console-padding: 10px;

  /* Toolbar specific styles */

  --jp-toolbar-border-color: var(--jp-border-color1);
  --jp-toolbar-micro-height: 8px;
  --jp-toolbar-background: var(--jp-layout-color1);
  --jp-toolbar-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.24);
  --jp-toolbar-header-margin: 4px 4px 0px 4px;
  --jp-toolbar-active-background: var(--md-grey-300);

  /* Input field styles */

  --jp-input-box-shadow: inset 0 0 2px var(--md-blue-300);
  --jp-input-active-background: var(--jp-layout-color1);
  --jp-input-hover-background: var(--jp-layout-color1);
  --jp-input-background: var(--md-grey-100);
  --jp-input-border-color: var(--jp-border-color1);
  --jp-input-active-border-color: var(--jp-brand-color1);
  --jp-input-active-box-shadow-color: rgba(19, 124, 189, 0.3);

  /* General editor styles */

  --jp-editor-selected-background: #d9d9d9;
  --jp-editor-selected-focused-background: #d7d4f0;
  --jp-editor-cursor-color: var(--jp-ui-font-color0);

  /* Code mirror specific styles */

  --jp-mirror-editor-keyword-color: #008000;
  --jp-mirror-editor-atom-color: #88f;
  --jp-mirror-editor-number-color: #080;
  --jp-mirror-editor-def-color: #00f;
  --jp-mirror-editor-variable-color: var(--md-grey-900);
  --jp-mirror-editor-variable-2-color: #05a;
  --jp-mirror-editor-variable-3-color: #085;
  --jp-mirror-editor-punctuation-color: #05a;
  --jp-mirror-editor-property-color: #05a;
  --jp-mirror-editor-operator-color: #aa22ff;
  --jp-mirror-editor-comment-color: #408080;
  --jp-mirror-editor-string-color: #ba2121;
  --jp-mirror-editor-string-2-color: #708;
  --jp-mirror-editor-meta-color: #aa22ff;
  --jp-mirror-editor-qualifier-color: #555;
  --jp-mirror-editor-builtin-color: #008000;
  --jp-mirror-editor-bracket-color: #997;
  --jp-mirror-editor-tag-color: #170;
  --jp-mirror-editor-attribute-color: #00c;
  --jp-mirror-editor-header-color: blue;
  --jp-mirror-editor-quote-color: #090;
  --jp-mirror-editor-link-color: #00c;
  --jp-mirror-editor-error-color: #f00;
  --jp-mirror-editor-hr-color: #999;

  /* Vega extension styles */

  --jp-vega-background: white;

  /* Sidebar-related styles */

  --jp-sidebar-min-width: 180px;

  /* Search-related styles */

  --jp-search-toggle-off-opacity: 0.5;
  --jp-search-toggle-hover-opacity: 0.8;
  --jp-search-toggle-on-opacity: 1;
  --jp-search-selected-match-background-color: rgb(245, 200, 0);
  --jp-search-selected-match-color: black;
  --jp-search-unselected-match-background-color: var(
    --jp-inverse-layout-color0
  );
  --jp-search-unselected-match-color: var(--jp-ui-inverse-font-color0);

  /* Icon colors that work well with light or dark backgrounds */
  --jp-icon-contrast-color0: var(--md-purple-600);
  --jp-icon-contrast-color1: var(--md-green-600);
  --jp-icon-contrast-color2: var(--md-pink-600);
  --jp-icon-contrast-color3: var(--md-blue-600);
}
</style>

<style type="text/css">
a.anchor-link {
   display: none;
}
.highlight  {
    margin: 0.4em;
}
.jp-Notebook {
    padding: 0;
}
:root {
    --jp-ui-font-size1: 20px;       /* instead of 14px */
    --jp-content-font-size1: 20px;  /* instead of 14px */
    --jp-code-font-size: 19px;      /* instead of 13px */
    --jp-cell-prompt-width: 110px;  /* instead of 64px */
}
@media print {
  body {
    margin: 0;
  }
}
</style>

<style type="text/css">
/* Overrides of notebook CSS for static HTML export */
.reveal {
  font-size: 160%;
}
.reveal pre {
  width: inherit;
  padding: 0.4em;
  margin: 0px;
  font-family: monospace, sans-serif;
  font-size: 80%;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
}
.reveal pre code {
  padding: 0px;
}
.reveal section img {
  border: 0px solid black;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);
}
.reveal i {
  font-style: normal;
  font-family: FontAwesome;
  font-size: 2em;
}
.reveal .slides {
  text-align: left;
}
.reveal.fade {
  opacity: 1;
}
.reveal .progress {
  position: static;
}

div.jp-InputArea-editor {
  padding: 0.06em;
}

div.code_cell {
  background-color: transparent;
}

div.output_area pre {
  font-family: monospace, sans-serif;
  font-size: 80%;
}

div.jp-OutputPrompt {
  /* 5px right shift to account for margin in parent container */
  margin: 5px 5px 0 0;
}

/* Reveal navigation controls */

.reveal .controls .navigate-left,
.reveal .controls .navigate-left.enabled {
  border-right-color: #727272;
}
.reveal .controls .navigate-left.enabled:hover,
.reveal .controls .navigate-left.enabled.enabled:hover {
  border-right-color: #dfdfdf;
}
.reveal .controls .navigate-right,
.reveal .controls .navigate-right.enabled {
  border-left-color: #727272;
}
.reveal .controls .navigate-right.enabled:hover,
.reveal .controls .navigate-right.enabled.enabled:hover {
  border-left-color: #dfdfdf;
}
.reveal .controls .navigate-up,
.reveal .controls .navigate-up.enabled {
  border-bottom-color: #727272;
}
.reveal .controls .navigate-up.enabled:hover,
.reveal .controls .navigate-up.enabled.enabled:hover {
  border-bottom-color: #dfdfdf;
}
.reveal .controls .navigate-down,
.reveal .controls .navigate-down.enabled {
  border-top-color: #727272;
}
.reveal .controls .navigate-down.enabled:hover,
.reveal .controls .navigate-down.enabled.enabled:hover {
  border-top-color: #dfdfdf;
}
.reveal .progress span {
  background: #727272;
}

/* Scrollbars */

::-webkit-scrollbar
{
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar *
{
  background:transparent;
}
::-webkit-scrollbar-thumb
{
  background: #727272 !important;
}
</style>

</head>

<body class="jp-Notebook" data-jp-theme-light="true" data-jp-theme-name="JupyterLab Light">

<div class="reveal">
<div class="slides"><section><section><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#importing all of the necessary modules</span>
<span class="kn">from</span> <span class="nn">datascience</span> <span class="kn">import</span> <span class="o">*</span> 
<span class="kn">from</span> <span class="nn">bs4</span> <span class="kn">import</span> <span class="n">BeautifulSoup</span>
<span class="kn">import</span> <span class="nn">requests</span>
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
<span class="kn">import</span> <span class="nn">re</span>
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span> 
<span class="o">%</span><span class="k">matplotlib</span> inline 
<span class="kn">from</span> <span class="nn">urllib.request</span> <span class="kn">import</span> <span class="n">Request</span><span class="p">,</span> <span class="n">urlopen</span> 
<span class="kn">from</span> <span class="nn">bs4</span> <span class="kn">import</span> <span class="n">BeautifulSoup</span> <span class="k">as</span> <span class="n">soup</span>
<span class="kn">from</span> <span class="nn">ipywidgets</span> <span class="kn">import</span> <span class="n">widgets</span><span class="p">,</span> <span class="n">interactive</span>
<span class="kn">import</span> <span class="nn">seaborn</span> <span class="k">as</span> <span class="nn">sns</span> 
<span class="kn">from</span> <span class="nn">ipywidgets.embed</span> <span class="kn">import</span> <span class="n">embed_minimal_html</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h1 id="Creating-a-Robust-Table-Generator-for-Historical-TFRRS-Data,-2012--Present">Creating a Robust Table Generator for Historical TFRRS Data, 2012- Present<a class="anchor-link" href="#Creating-a-Robust-Table-Generator-for-Historical-TFRRS-Data,-2012--Present">&#182;</a></h1><h2 id="Author's-Note:-This-page-will-be-updated-weekly-as-new-data-becomes-available.">Author's Note: This page will be updated weekly as new data becomes available.<a class="anchor-link" href="#Author's-Note:-This-page-will-be-updated-weekly-as-new-data-becomes-available.">&#182;</a></h2><h3 id="Page-last-updated:-5/14/2021-at-10:09-P.M.">Page last updated: 5/14/2021 at 10:09 P.M.<a class="anchor-link" href="#Page-last-updated:-5/14/2021-at-10:09-P.M.">&#182;</a></h3><p>The TFRRS website has an archive page that contains the NCAA Track and Field Outdoor Final Qualifying lists for the years 2012, until now. The following functions reproduce those tables from the TFRRS website into pandas dataframes that can be directly manipulated for the purpose of data visualization. I decided to do the data collection process this way so that I do not have to download each dataset to my computer, but rather I can pull it for each year directly to python. The process is somewhat clean. I spent time studying the TFRRS website in order to properly configure my web scraper. The following functions are a cleaned and robust version of several python jupyter notebooks.</p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The first function below generates the URL on the TFRRS website. You input a year as a string, and the function will search the TFRRS archive HTML for the correct link to the outdoor performance list for that year.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[2]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">url_generator</span><span class="p">(</span><span class="n">year</span><span class="p">):</span> 
    <span class="n">base_url</span> <span class="o">=</span> <span class="s2">&quot;https://www.tfrrs.org/archives.html&quot;</span>
    <span class="n">req</span> <span class="o">=</span> <span class="n">Request</span><span class="p">(</span><span class="n">base_url</span><span class="p">,</span> <span class="n">headers</span> <span class="o">=</span> <span class="p">{</span><span class="s1">&#39;User-Agent&#39;</span><span class="p">:</span> <span class="s1">&#39;Mozilla/5.0&#39;</span><span class="p">})</span>
    <span class="n">webpage</span> <span class="o">=</span> <span class="n">urlopen</span><span class="p">(</span><span class="n">req</span><span class="p">)</span><span class="o">.</span><span class="n">read</span><span class="p">()</span>
    <span class="n">page_soup</span> <span class="o">=</span> <span class="n">soup</span><span class="p">(</span><span class="n">webpage</span><span class="p">,</span> <span class="s2">&quot;html.parser&quot;</span><span class="p">)</span>
    <span class="n">url_search</span> <span class="o">=</span> <span class="n">page_soup</span><span class="o">.</span><span class="n">find_all</span><span class="p">(</span><span class="s2">&quot;a&quot;</span><span class="p">,</span> <span class="n">text</span><span class="o">=</span><span class="n">re</span><span class="o">.</span><span class="n">compile</span><span class="p">(</span><span class="n">year</span> <span class="o">+</span> <span class="s2">&quot; &quot;</span> <span class="o">+</span> <span class="s2">&quot;Outdoor&quot;</span><span class="p">))</span>
    <span class="n">refined_url</span> <span class="o">=</span> <span class="n">url_search</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="s2">&quot;href&quot;</span><span class="p">]</span><span class="o">.</span><span class="n">strip</span><span class="p">(</span><span class="s2">&quot;//&quot;</span><span class="p">)</span><span class="o">.</span><span class="n">partition</span><span class="p">(</span><span class="s2">&quot;)&quot;</span><span class="p">)</span>
    <span class="k">return</span> <span class="s2">&quot;http://&quot;</span> <span class="o">+</span> <span class="n">refined_url</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="n">refined_url</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The <strong>table generator</strong> function generates a table from the URL created from the input year. However, the table is a bunch of gobbldy-gook html, so we need a couple more functions to recover the original table. I also created a separate one for the year 2021, because that data is still updating as the season completes. This way, as meets are completed and new data is uploaded to TFRRS, my functions will automatically update.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[3]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">event_dictionary</span> <span class="o">=</span> <span class="p">{</span><span class="s2">&quot;100m&quot;</span><span class="p">:</span> <span class="s2">&quot;row Men 6&quot;</span><span class="p">,</span> 
                    <span class="s2">&quot;200m&quot;</span><span class="p">:</span> <span class="s2">&quot;row Men 7&quot;</span><span class="p">,</span> 
                    <span class="s2">&quot;400m&quot;</span><span class="p">:</span> <span class="s2">&quot;row Men 11&quot;</span><span class="p">,</span> 
                    <span class="s2">&quot;800m&quot;</span><span class="p">:</span> <span class="s2">&quot;row Men 12&quot;</span><span class="p">,</span> 
                    <span class="s2">&quot;1500m&quot;</span><span class="p">:</span> <span class="s2">&quot;row Men 13&quot;</span><span class="p">,</span> 
                    <span class="s2">&quot;5000m&quot;</span><span class="p">:</span> <span class="s2">&quot;row Men 21&quot;</span><span class="p">,</span> 
                    <span class="s2">&quot;10,000m&quot;</span><span class="p">:</span> <span class="s2">&quot;row Men 22&quot;</span><span class="p">}</span>

<span class="k">def</span> <span class="nf">event_code_generator</span><span class="p">(</span><span class="nb">str</span><span class="p">):</span> 
    <span class="k">return</span> <span class="n">event_dictionary</span><span class="p">[</span><span class="nb">str</span><span class="p">]</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[4]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">table_generator</span><span class="p">(</span><span class="n">url</span><span class="p">,</span> <span class="n">event</span><span class="p">):</span> 
    <span class="n">url_to_search</span> <span class="o">=</span> <span class="n">url</span>
    <span class="n">div_class</span> <span class="o">=</span> <span class="n">event_code_generator</span><span class="p">(</span><span class="n">event</span><span class="p">)</span>
    <span class="n">req_generator</span> <span class="o">=</span> <span class="n">Request</span><span class="p">(</span><span class="n">url_to_search</span><span class="p">,</span> <span class="n">headers</span> <span class="o">=</span> <span class="p">{</span><span class="s1">&#39;User-Agent&#39;</span><span class="p">:</span> <span class="s1">&#39;Mozilla/5.0&#39;</span><span class="p">})</span>
    <span class="n">webpage_generator</span> <span class="o">=</span> <span class="n">urlopen</span><span class="p">(</span><span class="n">req_generator</span><span class="p">)</span><span class="o">.</span><span class="n">read</span><span class="p">()</span>
    <span class="n">page_soup_generator</span> <span class="o">=</span> <span class="n">soup</span><span class="p">(</span><span class="n">webpage_generator</span><span class="p">,</span> <span class="s2">&quot;html.parser&quot;</span><span class="p">)</span>
    <span class="n">html_class</span> <span class="o">=</span> <span class="n">page_soup_generator</span><span class="o">.</span><span class="n">find_all</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">,</span> <span class="n">class_</span> <span class="o">=</span> <span class="n">div_class</span><span class="p">)</span>
    <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">html_class</span><span class="p">:</span> 
        <span class="n">table_html_format</span> <span class="o">=</span> <span class="n">i</span><span class="o">.</span><span class="n">find</span><span class="p">(</span><span class="s2">&quot;table&quot;</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">table_html_format</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[5]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">twenty_twenty_one_table_generator</span><span class="p">(</span><span class="n">event</span><span class="p">):</span> 
    <span class="n">url_to_search</span> <span class="o">=</span> <span class="s2">&quot;https://www.tfrrs.org/lists/3191/2021_NCAA_Division_I_Outdoor_Qualifying/2021/o?gender=m&quot;</span>
    <span class="n">div_class</span> <span class="o">=</span> <span class="n">event_code_generator</span><span class="p">(</span><span class="n">event</span><span class="p">)</span>
    <span class="n">req_generator</span> <span class="o">=</span> <span class="n">Request</span><span class="p">(</span><span class="n">url_to_search</span><span class="p">,</span> <span class="n">headers</span> <span class="o">=</span> <span class="p">{</span><span class="s1">&#39;User-Agent&#39;</span><span class="p">:</span> <span class="s1">&#39;Mozilla/5.0&#39;</span><span class="p">})</span>
    <span class="n">webpage_generator</span> <span class="o">=</span> <span class="n">urlopen</span><span class="p">(</span><span class="n">req_generator</span><span class="p">)</span><span class="o">.</span><span class="n">read</span><span class="p">()</span>
    <span class="n">page_soup_generator</span> <span class="o">=</span> <span class="n">soup</span><span class="p">(</span><span class="n">webpage_generator</span><span class="p">,</span> <span class="s2">&quot;html.parser&quot;</span><span class="p">)</span>
    <span class="n">html_class</span> <span class="o">=</span> <span class="n">page_soup_generator</span><span class="o">.</span><span class="n">find_all</span><span class="p">(</span><span class="s2">&quot;div&quot;</span><span class="p">,</span> <span class="n">class_</span> <span class="o">=</span> <span class="n">div_class</span><span class="p">)</span>
    <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">html_class</span><span class="p">:</span> 
        <span class="n">table_html_format</span> <span class="o">=</span> <span class="n">i</span><span class="o">.</span><span class="n">find</span><span class="p">(</span><span class="s2">&quot;table&quot;</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">table_html_format</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The <strong>split minutes and seconds</strong> function turns the time string into a float. For example, a time such as "3:39.7" would be converted to 219.7. The reason for this is that it makes the data visualization process easier. The function by itself does not make much sense because it is used in conjunction with the table formatter function.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[6]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">split_minutes_and_seconds</span><span class="p">(</span><span class="n">time_str</span><span class="p">):</span>
        <span class="sd">&quot;&quot;&quot;Get Seconds from time.&quot;&quot;&quot;</span>
        <span class="n">split_list</span> <span class="o">=</span> <span class="p">(</span><span class="n">time_str</span><span class="o">.</span><span class="n">split</span><span class="p">(</span><span class="s2">&quot;:&quot;</span><span class="p">))</span>
        <span class="k">return</span> <span class="nb">int</span><span class="p">(</span><span class="n">split_list</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span><span class="o">*</span><span class="mi">60</span> <span class="o">+</span> <span class="nb">float</span><span class="p">(</span><span class="n">split_list</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[7]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">table_formatter</span><span class="p">(</span><span class="n">table</span><span class="p">):</span> 
    <span class="n">headings</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;Rank&quot;</span><span class="p">,</span> <span class="s2">&quot;Name&quot;</span><span class="p">,</span> <span class="s2">&quot;Year&quot;</span><span class="p">,</span> <span class="s2">&quot;School&quot;</span><span class="p">,</span> <span class="s2">&quot;Time&quot;</span><span class="p">,</span> <span class="s2">&quot;Meet&quot;</span><span class="p">,</span> <span class="s2">&quot;Year&quot;</span><span class="p">]</span>
    <span class="c1"># the head will form our column names</span>
    <span class="n">body</span> <span class="o">=</span> <span class="n">table</span><span class="o">.</span><span class="n">find_all</span><span class="p">(</span><span class="s2">&quot;tr&quot;</span><span class="p">)</span>
    <span class="c1"># Head values (Column names) are the first items of the body list</span>
    <span class="n">body_rows</span> <span class="o">=</span> <span class="n">body</span><span class="p">[</span><span class="mi">1</span><span class="p">:]</span> <span class="c1"># All other items becomes the rest of the rows</span>
    <span class="n">all_rows</span> <span class="o">=</span> <span class="p">[]</span> <span class="c1"># will be a list for list for all rows</span>
    <span class="k">for</span> <span class="n">row_num</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">body_rows</span><span class="p">)):</span> <span class="c1"># A row at a time</span>
        <span class="n">row</span> <span class="o">=</span> <span class="p">[]</span> <span class="c1"># this will old entries for one row</span>
        <span class="k">for</span> <span class="n">row_item</span> <span class="ow">in</span> <span class="n">body_rows</span><span class="p">[</span><span class="n">row_num</span><span class="p">]</span><span class="o">.</span><span class="n">find_all</span><span class="p">(</span><span class="s2">&quot;td&quot;</span><span class="p">):</span> <span class="c1">#loop through all row entries</span>
            <span class="c1"># row_item.text removes the tags from the entries</span>
            <span class="c1"># the following regex is to remove \xa0 and \n and comma from row_item.text</span>
            <span class="c1"># xa0 encodes the flag, \n is the newline and comma separates thousands in numbers</span>
            <span class="n">aa</span> <span class="o">=</span> <span class="n">re</span><span class="o">.</span><span class="n">sub</span><span class="p">(</span><span class="s2">&quot;(</span><span class="se">\xa0</span><span class="s2">)|(</span><span class="se">\n</span><span class="s2">)|,&quot;</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="n">row_item</span><span class="o">.</span><span class="n">text</span><span class="p">)</span>
            <span class="n">aa_stripped</span> <span class="o">=</span> <span class="n">aa</span><span class="o">.</span><span class="n">strip</span><span class="p">()</span>
            <span class="c1">#append aa to row - note one row entry is being appended</span>
            <span class="n">row</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">aa_stripped</span><span class="p">)</span>
        <span class="c1"># append one row to all_rows</span>
        <span class="n">all_rows</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">row</span><span class="p">)</span>
        <span class="n">new_df</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">data</span><span class="o">=</span><span class="n">all_rows</span><span class="p">,</span><span class="n">columns</span><span class="o">=</span><span class="n">headings</span><span class="p">)</span>
        <span class="n">new_df</span><span class="p">[</span><span class="s2">&quot;Time&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="p">[</span><span class="n">i</span><span class="p">[:</span><span class="mi">7</span><span class="p">]</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">new_df</span><span class="p">[</span><span class="s2">&quot;Time&quot;</span><span class="p">]]</span>
        <span class="n">new_df</span><span class="p">[</span><span class="s2">&quot;Time&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="p">[</span><span class="n">split_minutes_and_seconds</span><span class="p">(</span><span class="n">i</span><span class="p">)</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">new_df</span><span class="p">[</span><span class="s2">&quot;Time&quot;</span><span class="p">]]</span>
    <span class="k">return</span> <span class="n">new_df</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[8]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">tfrrs_table_generator</span><span class="p">(</span><span class="n">year</span><span class="p">,</span> <span class="n">event</span><span class="p">):</span> 
    <span class="k">if</span> <span class="n">year</span> <span class="o">==</span> <span class="s2">&quot;2021&quot;</span><span class="p">:</span> 
        <span class="n">table_created</span> <span class="o">=</span> <span class="n">twenty_twenty_one_table_generator</span><span class="p">(</span><span class="n">event</span><span class="p">)</span>
        <span class="n">table_formatted</span> <span class="o">=</span> <span class="n">table_formatter</span><span class="p">(</span><span class="n">table_created</span><span class="p">)</span>
    <span class="k">else</span><span class="p">:</span> 
        <span class="n">url</span> <span class="o">=</span> <span class="n">url_generator</span><span class="p">(</span><span class="n">year</span><span class="p">)</span>
        <span class="n">table_created</span> <span class="o">=</span> <span class="n">table_generator</span><span class="p">(</span><span class="n">url</span><span class="p">,</span> <span class="n">event</span><span class="p">)</span>
        <span class="n">table_formatted</span> <span class="o">=</span> <span class="n">table_formatter</span><span class="p">(</span><span class="n">table_created</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">table_formatted</span>

<span class="n">tfrrs_table_generator</span><span class="p">(</span><span class="s2">&quot;2012&quot;</span><span class="p">,</span> <span class="s2">&quot;1500m&quot;</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[8]:</div>



<div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html">
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Rank</th>
      <th>Name</th>
      <th>Year</th>
      <th>School</th>
      <th>Time</th>
      <th>Meet</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Lalang Lawi</td>
      <td></td>
      <td>Arizona</td>
      <td>216.77</td>
      <td>Payton Jordan Cardinal Invitational</td>
      <td>Apr 29 2012</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>O'Hare Chris</td>
      <td>JR-3</td>
      <td>Tulsa</td>
      <td>217.95</td>
      <td>Payton Jordan Cardinal Invitational</td>
      <td>Apr 29 2012</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>van Ingen Erik</td>
      <td>SR-4</td>
      <td>Binghamton</td>
      <td>218.06</td>
      <td>Virginia Challenge</td>
      <td>May 12 2012</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>Leslie Cory</td>
      <td>SR-4</td>
      <td>Ohio State</td>
      <td>219.00</td>
      <td>Payton Jordan Cardinal Invitational</td>
      <td>Apr 29 2012</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>Hammond Michael</td>
      <td>SR-4</td>
      <td>Virginia Tech</td>
      <td>219.22</td>
      <td>Payton Jordan Cardinal Invitational</td>
      <td>Apr 29 2012</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>95</th>
      <td>96</td>
      <td>Shawel Johnathan</td>
      <td>SR-4</td>
      <td>Notre Dame</td>
      <td>225.65</td>
      <td>GVSU 2nd to Last Chance Meet</td>
      <td>May 11 2012</td>
    </tr>
    <tr>
      <th>96</th>
      <td>97</td>
      <td>Goose Mitch</td>
      <td>SR-4</td>
      <td>Iona</td>
      <td>225.70</td>
      <td>Princeton Larry Ellis Invitational</td>
      <td>Apr 20 2012</td>
    </tr>
    <tr>
      <th>97</th>
      <td>98</td>
      <td>Vaziri Shyan</td>
      <td>FR-1</td>
      <td>UC Santa Barbara</td>
      <td>225.71</td>
      <td>Big West Track &amp; Field Championships</td>
      <td>May 11 2012</td>
    </tr>
    <tr>
      <th>98</th>
      <td>99</td>
      <td>Kalinowski Grzegorz</td>
      <td>SO-2</td>
      <td>Eastern Michigan</td>
      <td>225.73</td>
      <td>54th Annual Mt. SAC Relays</td>
      <td>Apr 19 2012</td>
    </tr>
    <tr>
      <th>99</th>
      <td>100</td>
      <td>Dowd Kevin</td>
      <td></td>
      <td>Virginia Tech</td>
      <td>225.79</td>
      <td>Wolfpack Last Chance (College)</td>
      <td>May 13 2012</td>
    </tr>
  </tbody>
</table>
<p>100 rows × 7 columns</p>
</div>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The code above is sufficient to create plots for all of the archives, and the year 2021.</p>
<p>The <strong>TFRRS table generator</strong> is the final product of the functions listed above. It uses the url generator, table creator, and table formatter functions all together to reproduce the dataset from the TFRRS website, in cleaned form. The code below will be used to generate the birth dates of each athlete. This code is still under construction as I research a definitive way to efficiently aquire the birth date of each athlete.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[9]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">input_year</span> <span class="o">=</span> <span class="n">widgets</span><span class="o">.</span><span class="n">Dropdown</span><span class="p">(</span>
    <span class="n">options</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;2021&quot;</span><span class="p">,</span> <span class="s2">&quot;2019&quot;</span><span class="p">,</span> <span class="s2">&quot;2018&quot;</span><span class="p">,</span> <span class="s2">&quot;2017&quot;</span><span class="p">,</span> <span class="s2">&quot;2016&quot;</span><span class="p">,</span> <span class="s2">&quot;2015&quot;</span><span class="p">,</span> <span class="s2">&quot;2014&quot;</span><span class="p">,</span> <span class="s2">&quot;2013&quot;</span><span class="p">,</span> <span class="s2">&quot;2012&quot;</span><span class="p">],</span>
    <span class="n">value</span><span class="o">=</span><span class="s1">&#39;2019&#39;</span><span class="p">,</span>
    <span class="n">description</span><span class="o">=</span><span class="s1">&#39;Year of Density&#39;</span><span class="p">,</span>
<span class="p">)</span>

<span class="n">input_event</span> <span class="o">=</span> <span class="n">widgets</span><span class="o">.</span><span class="n">Dropdown</span><span class="p">(</span>
    <span class="n">options</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;100m&quot;</span><span class="p">,</span> <span class="s2">&quot;200m&quot;</span><span class="p">,</span> <span class="s2">&quot;400m&quot;</span><span class="p">,</span> <span class="s2">&quot;800m&quot;</span><span class="p">,</span> <span class="s2">&quot;1500m&quot;</span><span class="p">,</span> <span class="s2">&quot;5000m&quot;</span><span class="p">,</span> <span class="s2">&quot;10,000m&quot;</span><span class="p">],</span>
    <span class="n">value</span><span class="o">=</span><span class="s1">&#39;100m&#39;</span><span class="p">,</span>
    <span class="n">description</span><span class="o">=</span><span class="s1">&#39;Year of Density&#39;</span><span class="p">,</span>
<span class="p">)</span>

<span class="k">def</span> <span class="nf">plotit</span><span class="p">(</span><span class="n">input_year</span><span class="p">,</span> <span class="n">input_event</span><span class="p">):</span> 
    <span class="n">data</span> <span class="o">=</span> <span class="n">tfrrs_table_generator</span><span class="p">(</span><span class="n">input_year</span><span class="p">,</span> <span class="n">input_event</span><span class="p">)</span>
    <span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">(</span><span class="n">data</span><span class="o">=</span><span class="n">data</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="s2">&quot;Time&quot;</span><span class="p">)</span>
    
    
<span class="n">interactive</span><span class="p">(</span><span class="n">plotit</span><span class="p">,</span> <span class="n">input_year</span> <span class="o">=</span> <span class="n">input_year</span><span class="p">,</span> <span class="n">input_event</span> <span class="o">=</span> <span class="n">input_event</span><span class="p">)</span>

<span class="c1">#code needs to be updated to account for events such as 100m, errors because of the string converter. Will do so in a future push. Haven&#39;t done as of yet though. </span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>







<div id="c075cf43-9365-4260-811f-704f597bcece" class="jupyter-widgets jp-OutputArea-output ">
<script type="text/javascript">
var element = document.getElementById('c075cf43-9365-4260-811f-704f597bcece');
</script>
<script type="application/vnd.jupyter.widget-view+json">
{"model_id": "cc57452e54134a029d5e227ef00094ef", "version_major": 2, "version_minor": 0}
</script>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The above code generates an interactive widget that you can use to view kernel densities of each year. Since this is written in python and exported to html/ markdown, it is not possible to show its functionality in this posting. However, in the future I plan to make that possible.</p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Now that we have all of the functions written, let's look at cleaned kernel density plots for each event, 800m to 10,000m, compared from 2012 until now.</p>
<p><strong>Note: Kernel density estimation is to be used with caution. A more precise mode of analysis can be done other ways, such as using histograms or scikit learn. I chose to use this method for ease of use.</strong></p>
<p>For these kernel density plots, we need to compile a list of the times for each event for each year. We will store each year's data in an array. We will compile a large list of all of the numbers. Let's hope that our array is not destroyed in the making.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[10]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">y_value_generator</span><span class="p">(</span><span class="n">event</span><span class="p">):</span> 
    <span class="n">rank</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">101</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span>
    <span class="n">base_df</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">data</span> <span class="o">=</span> <span class="n">rank</span><span class="p">,</span> <span class="n">columns</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;Rank&quot;</span><span class="p">])</span>
    <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">2012</span><span class="p">,</span> <span class="mi">2020</span><span class="p">):</span> 
        <span class="n">year</span> <span class="o">=</span> <span class="nb">str</span><span class="p">(</span><span class="n">i</span><span class="p">)</span>
        <span class="n">y_values</span> <span class="o">=</span> <span class="n">tfrrs_table_generator</span><span class="p">(</span><span class="n">year</span><span class="p">,</span> <span class="n">event</span><span class="p">)[</span><span class="s2">&quot;Time&quot;</span><span class="p">]</span>
        <span class="n">base_df</span><span class="p">[</span><span class="n">year</span><span class="p">]</span> <span class="o">=</span> <span class="n">y_values</span>
    <span class="n">twenty_one</span> <span class="o">=</span> <span class="n">tfrrs_table_generator</span><span class="p">(</span><span class="s2">&quot;2021&quot;</span><span class="p">,</span> <span class="n">event</span><span class="p">)[</span><span class="s2">&quot;Time&quot;</span><span class="p">]</span>
    <span class="n">base_df</span><span class="p">[</span><span class="s2">&quot;2021&quot;</span><span class="p">]</span> <span class="o">=</span> <span class="n">twenty_one</span>
    <span class="k">return</span> <span class="n">base_df</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The code cell above works properly. Now it's time to generate the proper values for each year.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[11]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#generate all the values for the years from 2012 until now, for the 800m </span>
<span class="n">eight_hundred</span> <span class="o">=</span> <span class="n">y_value_generator</span><span class="p">(</span><span class="s2">&quot;800m&quot;</span><span class="p">)</span>
<span class="c1">#generate all the values for the years from 2012 until now, for the 1500m</span>
<span class="n">fifteen_hundred</span> <span class="o">=</span> <span class="n">y_value_generator</span><span class="p">(</span><span class="s2">&quot;1500m&quot;</span><span class="p">)</span>
<span class="c1">#generate all the values for the years from 2012 until now, for the 5000m</span>
<span class="n">five_thousand</span> <span class="o">=</span> <span class="n">y_value_generator</span><span class="p">(</span><span class="s2">&quot;5000m&quot;</span><span class="p">)</span>
<span class="c1">#generate all the values for the years from 2012 until now, for the 10,000m</span>
<span class="n">ten_thousand</span> <span class="o">=</span> <span class="n">y_value_generator</span><span class="p">(</span><span class="s2">&quot;10,000m&quot;</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Here's the kernel density for the 800m, years 2012-2021. 2020 is not included because of the pandemic year.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[12]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">ax</span> <span class="o">=</span> <span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">(</span>
   <span class="n">data</span><span class="o">=</span><span class="n">eight_hundred</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="s2">&quot;2012&quot;</span><span class="p">,</span>
   <span class="n">fill</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">common_norm</span><span class="o">=</span><span class="kc">False</span><span class="p">,</span> <span class="n">palette</span><span class="o">=</span><span class="s2">&quot;crest&quot;</span><span class="p">,</span>
   <span class="n">alpha</span><span class="o">=.</span><span class="mi">3</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mi">2</span><span class="p">,</span> <span class="n">legend</span> <span class="o">=</span> <span class="kc">True</span> 
<span class="p">)</span>

<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">2013</span><span class="p">,</span> <span class="mi">2020</span><span class="p">):</span> 
    <span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">(</span><span class="n">data</span><span class="o">=</span><span class="n">eight_hundred</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="nb">str</span><span class="p">(</span><span class="n">i</span><span class="p">),</span><span class="n">ax</span> <span class="o">=</span> <span class="n">ax</span><span class="p">,</span> <span class="n">fill</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span> <span class="n">palette</span> <span class="o">=</span> <span class="s2">&quot;crest&quot;</span><span class="p">,</span> <span class="n">alpha</span> <span class="o">=</span> <span class="o">.</span><span class="mi">3</span><span class="p">,</span> <span class="n">linewidth</span> <span class="o">=</span> <span class="mi">2</span><span class="p">,</span> <span class="n">legend</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>

<span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">(</span><span class="n">data</span> <span class="o">=</span> <span class="n">eight_hundred</span><span class="p">,</span> <span class="n">x</span> <span class="o">=</span> <span class="s2">&quot;2021&quot;</span><span class="p">,</span> <span class="n">ax</span> <span class="o">=</span> <span class="n">ax</span><span class="p">,</span> <span class="n">fill</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span> <span class="n">palette</span> <span class="o">=</span> <span class="s2">&quot;crest&quot;</span><span class="p">,</span> <span class="n">alpha</span> <span class="o">=</span> <span class="o">.</span><span class="mi">3</span><span class="p">,</span> <span class="n">linewidth</span> <span class="o">=</span> <span class="mi">2</span><span class="p">,</span> <span class="n">legend</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>

<span class="n">legend_list</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;2012&quot;</span><span class="p">,</span> <span class="s2">&quot;2013&quot;</span><span class="p">,</span> <span class="s2">&quot;2014&quot;</span><span class="p">,</span> <span class="s2">&quot;2015&quot;</span><span class="p">,</span> <span class="s2">&quot;2016&quot;</span><span class="p">,</span> <span class="s2">&quot;2017&quot;</span><span class="p">,</span> <span class="s2">&quot;2018&quot;</span><span class="p">,</span> <span class="s2">&quot;2019&quot;</span><span class="p">,</span> <span class="s2">&quot;2021&quot;</span><span class="p">]</span>
<span class="n">ax</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">legend_list</span><span class="p">)</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_title</span><span class="p">(</span><span class="s2">&quot;Kernel Density for 2012 - Present (800m)&quot;</span><span class="p">)</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_xlabel</span><span class="p">(</span><span class="s2">&quot;800m Time in Seconds&quot;</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[12]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>Text(0.5, 0, &#39;800m Time in Seconds&#39;)</pre>
</div>

</div>

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[13]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">eight_hundred</span><span class="o">.</span><span class="n">describe</span><span class="p">()</span>
<span class="c1">#summary statistics for the 800m </span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[13]:</div>



<div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html">
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Rank</th>
      <th>2012</th>
      <th>2013</th>
      <th>2014</th>
      <th>2015</th>
      <th>2016</th>
      <th>2017</th>
      <th>2018</th>
      <th>2019</th>
      <th>2021</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.00000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.00000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>50.500000</td>
      <td>108.741600</td>
      <td>109.148700</td>
      <td>108.85960</td>
      <td>108.378000</td>
      <td>108.189200</td>
      <td>108.419100</td>
      <td>108.629700</td>
      <td>108.754000</td>
      <td>108.69340</td>
    </tr>
    <tr>
      <th>std</th>
      <td>29.011492</td>
      <td>1.044447</td>
      <td>0.850278</td>
      <td>0.96219</td>
      <td>1.061886</td>
      <td>1.155218</td>
      <td>1.211719</td>
      <td>1.154088</td>
      <td>1.128423</td>
      <td>0.99457</td>
    </tr>
    <tr>
      <th>min</th>
      <td>1.000000</td>
      <td>104.750000</td>
      <td>106.200000</td>
      <td>105.35000</td>
      <td>105.580000</td>
      <td>104.630000</td>
      <td>103.730000</td>
      <td>103.250000</td>
      <td>104.760000</td>
      <td>105.80000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>25.750000</td>
      <td>108.240000</td>
      <td>108.670000</td>
      <td>108.47750</td>
      <td>107.717500</td>
      <td>107.335000</td>
      <td>107.765000</td>
      <td>108.040000</td>
      <td>108.275000</td>
      <td>108.15250</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>50.500000</td>
      <td>109.030000</td>
      <td>109.290000</td>
      <td>109.19500</td>
      <td>108.545000</td>
      <td>108.500000</td>
      <td>108.745000</td>
      <td>108.990000</td>
      <td>108.925000</td>
      <td>108.96500</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>75.250000</td>
      <td>109.495000</td>
      <td>109.810000</td>
      <td>109.56500</td>
      <td>109.252500</td>
      <td>109.142500</td>
      <td>109.302500</td>
      <td>109.452500</td>
      <td>109.610000</td>
      <td>109.45500</td>
    </tr>
    <tr>
      <th>max</th>
      <td>100.000000</td>
      <td>109.890000</td>
      <td>110.210000</td>
      <td>109.90000</td>
      <td>109.730000</td>
      <td>109.690000</td>
      <td>109.830000</td>
      <td>109.870000</td>
      <td>110.060000</td>
      <td>109.93000</td>
    </tr>
  </tbody>
</table>
</div>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Here's the kernel density for the 1500m, years 2012-2021. 2020 is not included because of the pandemic year.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[14]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">ax</span> <span class="o">=</span> <span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">(</span>
   <span class="n">data</span><span class="o">=</span><span class="n">fifteen_hundred</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="s2">&quot;2012&quot;</span><span class="p">,</span>
   <span class="n">fill</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">common_norm</span><span class="o">=</span><span class="kc">False</span><span class="p">,</span> <span class="n">palette</span><span class="o">=</span><span class="s2">&quot;crest&quot;</span><span class="p">,</span>
   <span class="n">alpha</span><span class="o">=.</span><span class="mi">3</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mi">2</span><span class="p">,</span> <span class="n">legend</span> <span class="o">=</span> <span class="kc">True</span> 
<span class="p">)</span>

<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">2013</span><span class="p">,</span> <span class="mi">2020</span><span class="p">):</span> 
    <span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">(</span><span class="n">data</span><span class="o">=</span><span class="n">fifteen_hundred</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="nb">str</span><span class="p">(</span><span class="n">i</span><span class="p">),</span><span class="n">ax</span> <span class="o">=</span> <span class="n">ax</span><span class="p">,</span> <span class="n">fill</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span> <span class="n">palette</span> <span class="o">=</span> <span class="s2">&quot;crest&quot;</span><span class="p">,</span> <span class="n">alpha</span> <span class="o">=</span> <span class="o">.</span><span class="mi">3</span><span class="p">,</span> <span class="n">linewidth</span> <span class="o">=</span> <span class="mi">2</span><span class="p">,</span> <span class="n">legend</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>

<span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">(</span><span class="n">data</span> <span class="o">=</span> <span class="n">fifteen_hundred</span><span class="p">,</span> <span class="n">x</span> <span class="o">=</span> <span class="s2">&quot;2021&quot;</span><span class="p">,</span> <span class="n">ax</span> <span class="o">=</span> <span class="n">ax</span><span class="p">,</span> <span class="n">fill</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span> <span class="n">palette</span> <span class="o">=</span> <span class="s2">&quot;crest&quot;</span><span class="p">,</span> <span class="n">alpha</span> <span class="o">=</span> <span class="o">.</span><span class="mi">3</span><span class="p">,</span> <span class="n">linewidth</span> <span class="o">=</span> <span class="mi">2</span><span class="p">,</span> <span class="n">legend</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>

<span class="n">legend_list</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;2012&quot;</span><span class="p">,</span> <span class="s2">&quot;2013&quot;</span><span class="p">,</span> <span class="s2">&quot;2014&quot;</span><span class="p">,</span> <span class="s2">&quot;2015&quot;</span><span class="p">,</span> <span class="s2">&quot;2016&quot;</span><span class="p">,</span> <span class="s2">&quot;2017&quot;</span><span class="p">,</span> <span class="s2">&quot;2018&quot;</span><span class="p">,</span> <span class="s2">&quot;2019&quot;</span><span class="p">,</span> <span class="s2">&quot;2021&quot;</span><span class="p">]</span>
<span class="n">ax</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">legend_list</span><span class="p">)</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_title</span><span class="p">(</span><span class="s2">&quot;Kernel Density for 2012 - Present (1500m)&quot;</span><span class="p">)</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_xlabel</span><span class="p">(</span><span class="s2">&quot;1500m Time in Seconds&quot;</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[14]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>Text(0.5, 0, &#39;1500m Time in Seconds&#39;)</pre>
</div>

</div>

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[15]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">fifteen_hundred</span><span class="o">.</span><span class="n">describe</span><span class="p">()</span>
<span class="c1">#summary statistics for the 1500m </span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[15]:</div>



<div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html">
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Rank</th>
      <th>2012</th>
      <th>2013</th>
      <th>2014</th>
      <th>2015</th>
      <th>2016</th>
      <th>2017</th>
      <th>2018</th>
      <th>2019</th>
      <th>2021</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>50.500000</td>
      <td>223.449200</td>
      <td>223.508700</td>
      <td>223.412600</td>
      <td>222.748600</td>
      <td>222.981800</td>
      <td>223.132800</td>
      <td>222.998600</td>
      <td>223.486600</td>
      <td>220.893300</td>
    </tr>
    <tr>
      <th>std</th>
      <td>29.011492</td>
      <td>1.957686</td>
      <td>1.774577</td>
      <td>1.811622</td>
      <td>1.611957</td>
      <td>1.605672</td>
      <td>1.659264</td>
      <td>2.259134</td>
      <td>2.174883</td>
      <td>2.185034</td>
    </tr>
    <tr>
      <th>min</th>
      <td>1.000000</td>
      <td>216.770000</td>
      <td>218.530000</td>
      <td>216.340000</td>
      <td>218.350000</td>
      <td>217.740000</td>
      <td>215.990000</td>
      <td>215.010000</td>
      <td>217.200000</td>
      <td>215.960000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>25.750000</td>
      <td>222.592500</td>
      <td>222.247500</td>
      <td>222.602500</td>
      <td>221.987500</td>
      <td>222.275000</td>
      <td>222.355000</td>
      <td>222.402500</td>
      <td>222.927500</td>
      <td>219.135000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>50.500000</td>
      <td>223.970000</td>
      <td>224.185000</td>
      <td>223.895000</td>
      <td>223.185000</td>
      <td>223.470000</td>
      <td>223.220000</td>
      <td>223.805000</td>
      <td>224.430000</td>
      <td>221.600000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>75.250000</td>
      <td>224.980000</td>
      <td>224.930000</td>
      <td>224.780000</td>
      <td>224.010000</td>
      <td>224.220000</td>
      <td>224.367500</td>
      <td>224.597500</td>
      <td>224.895000</td>
      <td>222.852500</td>
    </tr>
    <tr>
      <th>max</th>
      <td>100.000000</td>
      <td>225.790000</td>
      <td>225.680000</td>
      <td>225.330000</td>
      <td>224.610000</td>
      <td>224.930000</td>
      <td>225.440000</td>
      <td>225.220000</td>
      <td>225.620000</td>
      <td>223.390000</td>
    </tr>
  </tbody>
</table>
</div>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Here's the kernel density for the 5000m, years 2012-2021. 2020 is not included because of the pandemic year.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[16]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">ax</span> <span class="o">=</span> <span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">(</span>
   <span class="n">data</span><span class="o">=</span><span class="n">five_thousand</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="s2">&quot;2012&quot;</span><span class="p">,</span>
   <span class="n">fill</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">common_norm</span><span class="o">=</span><span class="kc">False</span><span class="p">,</span> <span class="n">palette</span><span class="o">=</span><span class="s2">&quot;crest&quot;</span><span class="p">,</span>
   <span class="n">alpha</span><span class="o">=.</span><span class="mi">3</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mi">2</span><span class="p">,</span> <span class="n">legend</span> <span class="o">=</span> <span class="kc">True</span> 
<span class="p">)</span>

<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">2013</span><span class="p">,</span> <span class="mi">2020</span><span class="p">):</span> 
    <span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">(</span><span class="n">data</span><span class="o">=</span><span class="n">five_thousand</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="nb">str</span><span class="p">(</span><span class="n">i</span><span class="p">),</span><span class="n">ax</span> <span class="o">=</span> <span class="n">ax</span><span class="p">,</span> <span class="n">fill</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span> <span class="n">palette</span> <span class="o">=</span> <span class="s2">&quot;crest&quot;</span><span class="p">,</span> <span class="n">alpha</span> <span class="o">=</span> <span class="o">.</span><span class="mi">3</span><span class="p">,</span> <span class="n">linewidth</span> <span class="o">=</span> <span class="mi">2</span><span class="p">,</span> <span class="n">legend</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>

<span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">(</span><span class="n">data</span> <span class="o">=</span> <span class="n">five_thousand</span><span class="p">,</span> <span class="n">x</span> <span class="o">=</span> <span class="s2">&quot;2021&quot;</span><span class="p">,</span> <span class="n">ax</span> <span class="o">=</span> <span class="n">ax</span><span class="p">,</span> <span class="n">fill</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span> <span class="n">palette</span> <span class="o">=</span> <span class="s2">&quot;crest&quot;</span><span class="p">,</span> <span class="n">alpha</span> <span class="o">=</span> <span class="o">.</span><span class="mi">3</span><span class="p">,</span> <span class="n">linewidth</span> <span class="o">=</span> <span class="mi">2</span><span class="p">,</span> <span class="n">legend</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>

<span class="n">legend_list</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;2012&quot;</span><span class="p">,</span> <span class="s2">&quot;2013&quot;</span><span class="p">,</span> <span class="s2">&quot;2014&quot;</span><span class="p">,</span> <span class="s2">&quot;2015&quot;</span><span class="p">,</span> <span class="s2">&quot;2016&quot;</span><span class="p">,</span> <span class="s2">&quot;2017&quot;</span><span class="p">,</span> <span class="s2">&quot;2018&quot;</span><span class="p">,</span> <span class="s2">&quot;2019&quot;</span><span class="p">,</span> <span class="s2">&quot;2021&quot;</span><span class="p">]</span>
<span class="n">ax</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">legend_list</span><span class="p">)</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_title</span><span class="p">(</span><span class="s2">&quot;Kernel Density for 2012 - Present (5,000m)&quot;</span><span class="p">)</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_xlabel</span><span class="p">(</span><span class="s2">&quot;5000m Time in Seconds&quot;</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[16]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>Text(0.5, 0, &#39;5000m Time in Seconds&#39;)</pre>
</div>

</div>

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[17]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">five_thousand</span><span class="o">.</span><span class="n">describe</span><span class="p">()</span>
<span class="c1">#summary statistics for 5000m</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[17]:</div>



<div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html">
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Rank</th>
      <th>2012</th>
      <th>2013</th>
      <th>2014</th>
      <th>2015</th>
      <th>2016</th>
      <th>2017</th>
      <th>2018</th>
      <th>2019</th>
      <th>2021</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>100.000000</td>
      <td>100.00000</td>
      <td>100.000000</td>
      <td>100.00000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>50.500000</td>
      <td>833.05800</td>
      <td>834.613000</td>
      <td>833.60200</td>
      <td>832.736000</td>
      <td>832.357000</td>
      <td>833.640000</td>
      <td>831.041000</td>
      <td>831.195000</td>
      <td>822.846000</td>
    </tr>
    <tr>
      <th>std</th>
      <td>29.011492</td>
      <td>10.80636</td>
      <td>10.625248</td>
      <td>9.40652</td>
      <td>9.044129</td>
      <td>8.876655</td>
      <td>8.766822</td>
      <td>10.151828</td>
      <td>9.936428</td>
      <td>9.245052</td>
    </tr>
    <tr>
      <th>min</th>
      <td>1.000000</td>
      <td>798.40000</td>
      <td>795.300000</td>
      <td>806.90000</td>
      <td>800.300000</td>
      <td>804.200000</td>
      <td>797.500000</td>
      <td>798.700000</td>
      <td>805.000000</td>
      <td>799.900000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>25.750000</td>
      <td>828.00000</td>
      <td>830.400000</td>
      <td>828.90000</td>
      <td>830.250000</td>
      <td>828.725000</td>
      <td>829.600000</td>
      <td>822.850000</td>
      <td>825.525000</td>
      <td>816.425000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>50.500000</td>
      <td>836.85000</td>
      <td>837.900000</td>
      <td>836.00000</td>
      <td>834.400000</td>
      <td>834.850000</td>
      <td>835.750000</td>
      <td>832.650000</td>
      <td>834.400000</td>
      <td>825.650000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>75.250000</td>
      <td>841.62500</td>
      <td>842.225000</td>
      <td>840.47500</td>
      <td>839.150000</td>
      <td>838.800000</td>
      <td>840.275000</td>
      <td>839.750000</td>
      <td>839.375000</td>
      <td>830.400000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>100.000000</td>
      <td>844.30000</td>
      <td>846.400000</td>
      <td>845.10000</td>
      <td>844.400000</td>
      <td>842.400000</td>
      <td>844.200000</td>
      <td>843.500000</td>
      <td>843.300000</td>
      <td>833.400000</td>
    </tr>
  </tbody>
</table>
</div>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Here's the kernel density for the 1500m, years 2012-2021. 2020 is not included because of the pandemic year.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[18]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">ax</span> <span class="o">=</span> <span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">(</span>
   <span class="n">data</span><span class="o">=</span><span class="n">ten_thousand</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="s2">&quot;2012&quot;</span><span class="p">,</span>
   <span class="n">fill</span><span class="o">=</span><span class="kc">True</span><span class="p">,</span> <span class="n">common_norm</span><span class="o">=</span><span class="kc">False</span><span class="p">,</span> <span class="n">palette</span><span class="o">=</span><span class="s2">&quot;crest&quot;</span><span class="p">,</span>
   <span class="n">alpha</span><span class="o">=.</span><span class="mi">3</span><span class="p">,</span> <span class="n">linewidth</span><span class="o">=</span><span class="mi">2</span><span class="p">,</span> <span class="n">legend</span> <span class="o">=</span> <span class="kc">True</span> 
<span class="p">)</span>

<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">2013</span><span class="p">,</span> <span class="mi">2020</span><span class="p">):</span> 
    <span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">(</span><span class="n">data</span><span class="o">=</span><span class="n">ten_thousand</span><span class="p">,</span> <span class="n">x</span><span class="o">=</span><span class="nb">str</span><span class="p">(</span><span class="n">i</span><span class="p">),</span><span class="n">ax</span> <span class="o">=</span> <span class="n">ax</span><span class="p">,</span> <span class="n">fill</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span> <span class="n">palette</span> <span class="o">=</span> <span class="s2">&quot;crest&quot;</span><span class="p">,</span> <span class="n">alpha</span> <span class="o">=</span> <span class="o">.</span><span class="mi">3</span><span class="p">,</span> <span class="n">linewidth</span> <span class="o">=</span> <span class="mi">2</span><span class="p">,</span> <span class="n">legend</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>

<span class="n">sns</span><span class="o">.</span><span class="n">kdeplot</span><span class="p">(</span><span class="n">data</span> <span class="o">=</span> <span class="n">ten_thousand</span><span class="p">,</span> <span class="n">x</span> <span class="o">=</span> <span class="s2">&quot;2021&quot;</span><span class="p">,</span> <span class="n">ax</span> <span class="o">=</span> <span class="n">ax</span><span class="p">,</span> <span class="n">fill</span> <span class="o">=</span> <span class="kc">True</span><span class="p">,</span> <span class="n">palette</span> <span class="o">=</span> <span class="s2">&quot;crest&quot;</span><span class="p">,</span> <span class="n">alpha</span> <span class="o">=</span> <span class="o">.</span><span class="mi">3</span><span class="p">,</span> <span class="n">linewidth</span> <span class="o">=</span> <span class="mi">2</span><span class="p">,</span> <span class="n">legend</span> <span class="o">=</span> <span class="kc">True</span><span class="p">)</span>

<span class="n">legend_list</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;2012&quot;</span><span class="p">,</span> <span class="s2">&quot;2013&quot;</span><span class="p">,</span> <span class="s2">&quot;2014&quot;</span><span class="p">,</span> <span class="s2">&quot;2015&quot;</span><span class="p">,</span> <span class="s2">&quot;2016&quot;</span><span class="p">,</span> <span class="s2">&quot;2017&quot;</span><span class="p">,</span> <span class="s2">&quot;2018&quot;</span><span class="p">,</span> <span class="s2">&quot;2019&quot;</span><span class="p">,</span> <span class="s2">&quot;2021&quot;</span><span class="p">]</span>
<span class="n">ax</span><span class="o">.</span><span class="n">legend</span><span class="p">(</span><span class="n">legend_list</span><span class="p">)</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_title</span><span class="p">(</span><span class="s2">&quot;Kernel Density for 2012 - Present (10,000m)&quot;</span><span class="p">)</span>
<span class="n">ax</span><span class="o">.</span><span class="n">set_xlabel</span><span class="p">(</span><span class="s2">&quot;10,000m Time in Seconds&quot;</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[18]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>Text(0.5, 0, &#39;10,000m Time in Seconds&#39;)</pre>
</div>

</div>

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>




<div class="jp-RenderedImage jp-OutputArea-output ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[19]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">ten_thousand</span><span class="o">.</span><span class="n">describe</span><span class="p">()</span>
<span class="c1">#summary statistics for 10,000m</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[19]:</div>



<div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html">
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Rank</th>
      <th>2012</th>
      <th>2013</th>
      <th>2014</th>
      <th>2015</th>
      <th>2016</th>
      <th>2017</th>
      <th>2018</th>
      <th>2019</th>
      <th>2021</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
      <td>100.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>50.500000</td>
      <td>1757.587000</td>
      <td>1766.814000</td>
      <td>1754.033000</td>
      <td>1756.877000</td>
      <td>1758.971000</td>
      <td>1755.463000</td>
      <td>1756.511000</td>
      <td>1746.805000</td>
      <td>1738.610000</td>
    </tr>
    <tr>
      <th>std</th>
      <td>29.011492</td>
      <td>28.643347</td>
      <td>19.773306</td>
      <td>22.069459</td>
      <td>21.690103</td>
      <td>17.572248</td>
      <td>22.791127</td>
      <td>22.929263</td>
      <td>21.014883</td>
      <td>24.703406</td>
    </tr>
    <tr>
      <th>min</th>
      <td>1.000000</td>
      <td>1647.900000</td>
      <td>1672.300000</td>
      <td>1656.700000</td>
      <td>1674.200000</td>
      <td>1672.700000</td>
      <td>1684.900000</td>
      <td>1684.400000</td>
      <td>1691.300000</td>
      <td>1667.200000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>25.750000</td>
      <td>1749.250000</td>
      <td>1760.375000</td>
      <td>1744.350000</td>
      <td>1745.875000</td>
      <td>1749.650000</td>
      <td>1740.050000</td>
      <td>1748.475000</td>
      <td>1735.625000</td>
      <td>1723.400000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>50.500000</td>
      <td>1766.700000</td>
      <td>1771.950000</td>
      <td>1757.300000</td>
      <td>1759.800000</td>
      <td>1759.700000</td>
      <td>1761.750000</td>
      <td>1760.000000</td>
      <td>1753.300000</td>
      <td>1744.350000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>75.250000</td>
      <td>1775.775000</td>
      <td>1780.275000</td>
      <td>1771.575000</td>
      <td>1775.625000</td>
      <td>1772.800000</td>
      <td>1773.800000</td>
      <td>1774.075000</td>
      <td>1763.325000</td>
      <td>1756.550000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>100.000000</td>
      <td>1787.900000</td>
      <td>1787.600000</td>
      <td>1778.900000</td>
      <td>1786.600000</td>
      <td>1782.300000</td>
      <td>1783.400000</td>
      <td>1782.600000</td>
      <td>1772.200000</td>
      <td>1775.000000</td>
    </tr>
  </tbody>
</table>
</div>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The following code below is part of a larger project. I am in the process of generating independent/explanatory variables for this project, as I want to go more in depth in the future to test the impact of the spikes. I have finals coming up so, naturally, I cannot fully dedicate my time to a project such as this.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[20]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#create a unique url for each athlete in the above dataframe </span>
<span class="k">def</span> <span class="nf">world_athletics_name_creator</span><span class="p">(</span><span class="n">df</span><span class="p">,</span> <span class="n">column_name</span><span class="p">):</span> 
    <span class="n">name_list</span> <span class="o">=</span> <span class="p">[]</span>
    <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nb">len</span><span class="p">(</span><span class="n">df</span><span class="p">[</span><span class="n">column_name</span><span class="p">])):</span>
        <span class="n">split_name</span> <span class="o">=</span> <span class="n">df</span><span class="p">[</span><span class="n">column_name</span><span class="p">][</span><span class="n">i</span><span class="p">]</span><span class="o">.</span><span class="n">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">)</span>
        <span class="n">url_name</span> <span class="o">=</span> <span class="n">split_name</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">+</span> <span class="s2">&quot;+&quot;</span> <span class="o">+</span> <span class="n">split_name</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
        <span class="n">url_name</span> <span class="o">=</span> <span class="n">url_name</span> <span class="o">+</span> <span class="s2">&quot;&amp;countryCode=&amp;disciplineCode=&amp;gender=&amp;environment=&quot;</span>
        <span class="n">name_list</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">url_name</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">name_list</span> 
</pre></div>

     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[21]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#append a base url to the unique athlete&#39;s url and produce a final list of those </span>
<span class="k">def</span> <span class="nf">world_athletics_url_generator</span><span class="p">(</span><span class="nb">list</span><span class="p">,</span> <span class="n">base_url</span><span class="p">):</span>
    <span class="n">final_list</span> <span class="o">=</span> <span class="p">[]</span>
    <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nb">len</span><span class="p">(</span><span class="nb">list</span><span class="p">)):</span> 
        <span class="n">final_url</span> <span class="o">=</span> <span class="n">base_url</span> <span class="o">+</span> <span class="nb">list</span><span class="p">[</span><span class="n">i</span><span class="p">]</span> 
        <span class="n">final_list</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">final_list</span><span class="p">,</span> <span class="n">final_url</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">final_list</span> 
</pre></div>

     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[22]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#use each athlete&#39;s generated url to scrape the birth date from their profile.</span>
<span class="k">def</span> <span class="nf">world_athletics_dob_list_maker</span><span class="p">(</span><span class="n">arr</span><span class="p">):</span> 
    <span class="n">final_births_list</span> <span class="o">=</span> <span class="p">[]</span>
    <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nb">len</span><span class="p">(</span><span class="n">arr</span><span class="p">)):</span>
        <span class="n">page</span> <span class="o">=</span> <span class="n">requests</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="n">i</span><span class="p">])</span>
        <span class="n">soup</span> <span class="o">=</span> <span class="n">BeautifulSoup</span><span class="p">(</span><span class="n">page</span><span class="o">.</span><span class="n">content</span><span class="p">,</span> <span class="s2">&quot;html.parser&quot;</span><span class="p">)</span>
        <span class="n">records_table</span> <span class="o">=</span> <span class="n">soup</span><span class="o">.</span><span class="n">find_all</span><span class="p">(</span><span class="s2">&quot;table&quot;</span><span class="p">,</span> <span class="n">attrs</span><span class="o">=</span><span class="p">{</span><span class="s2">&quot;class&quot;</span><span class="p">:</span> <span class="s2">&quot;records-table&quot;</span><span class="p">})</span>
        <span class="n">table1</span> <span class="o">=</span> <span class="n">records_table</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
        <span class="c1"># the head will form our column names</span>
        <span class="n">body</span> <span class="o">=</span> <span class="n">table1</span><span class="o">.</span><span class="n">find_all</span><span class="p">(</span><span class="s2">&quot;tr&quot;</span><span class="p">)</span>
        <span class="c1"># Head values (Column names) are the first items of the body list</span>
        <span class="n">head</span> <span class="o">=</span> <span class="n">body</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="c1"># 0th item is the header row</span>
        <span class="n">body_rows</span> <span class="o">=</span> <span class="n">body</span><span class="p">[</span><span class="mi">1</span><span class="p">:]</span> <span class="c1"># All other items becomes the rest of the rows</span>
        <span class="n">headings</span> <span class="o">=</span> <span class="p">[]</span>
        <span class="k">for</span> <span class="n">item</span> <span class="ow">in</span> <span class="n">head</span><span class="o">.</span><span class="n">find_all</span><span class="p">(</span><span class="s2">&quot;th&quot;</span><span class="p">):</span> <span class="c1"># loop through all th elements</span>
            <span class="c1"># convert the th elements to text and strip &quot;\n&quot;</span>
                <span class="n">item</span> <span class="o">=</span> <span class="nb">str</span><span class="p">(</span><span class="n">item</span><span class="p">)</span>
                <span class="n">cleaned</span> <span class="o">=</span> <span class="n">item</span><span class="o">.</span><span class="n">replace</span><span class="p">(</span><span class="s2">&quot;&lt;th&gt;</span><span class="se">\n</span><span class="s2">&quot;</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">)</span>
                <span class="n">even_further</span> <span class="o">=</span> <span class="n">cleaned</span><span class="o">.</span><span class="n">replace</span><span class="p">(</span><span class="s2">&quot;</span><span class="se">\n</span><span class="s2">                    &lt;/th&gt;&quot;</span><span class="p">,</span> <span class="s2">&quot;&quot;</span><span class="p">)</span>
                <span class="n">final</span> <span class="o">=</span> <span class="n">even_further</span><span class="o">.</span><span class="n">strip</span><span class="p">()</span>
            <span class="c1"># append the clean column name to headings</span>
                <span class="n">headings</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">final</span><span class="p">)</span>
        <span class="n">all_rows</span> <span class="o">=</span> <span class="p">[]</span> <span class="c1"># will be a list for list for all rows</span>
        <span class="k">for</span> <span class="n">row_num</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">body_rows</span><span class="p">)):</span> <span class="c1"># A row at a time</span>
            <span class="n">row</span> <span class="o">=</span> <span class="p">[]</span> <span class="c1"># this will old entries for one row</span>
            <span class="k">for</span> <span class="n">row_item</span> <span class="ow">in</span> <span class="n">body_rows</span><span class="p">[</span><span class="n">row_num</span><span class="p">]</span><span class="o">.</span><span class="n">find_all</span><span class="p">(</span><span class="s2">&quot;td&quot;</span><span class="p">):</span> <span class="c1">#loop through all row entries</span>
                <span class="c1"># row_item.text removes the tags from the entries</span>
                <span class="c1"># the following regex is to remove \xa0 and \n and comma from row_item.text</span>
                <span class="c1"># xa0 encodes the flag, \n is the newline and comma separates thousands in numbers</span>
                <span class="n">aa</span> <span class="o">=</span> <span class="n">re</span><span class="o">.</span><span class="n">sub</span><span class="p">(</span><span class="s2">&quot;(</span><span class="se">\xa0</span><span class="s2">)|(</span><span class="se">\n</span><span class="s2">)|,&quot;</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="n">row_item</span><span class="o">.</span><span class="n">text</span><span class="p">)</span>
                <span class="n">aa_stripped</span> <span class="o">=</span> <span class="n">aa</span><span class="o">.</span><span class="n">strip</span><span class="p">()</span>
                <span class="c1">#append aa to row - note one row entry is being appended</span>
                <span class="n">row</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">aa_stripped</span><span class="p">)</span>
            <span class="c1"># append one row to all_rows</span>
            <span class="n">all_rows</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">row</span><span class="p">)</span>
        <span class="n">new_df</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">data</span><span class="o">=</span><span class="n">all_rows</span><span class="p">,</span><span class="n">columns</span><span class="o">=</span><span class="n">headings</span><span class="p">)</span>
        <span class="n">birth_date</span> <span class="o">=</span> <span class="n">new_df</span><span class="p">[</span><span class="s2">&quot;Date of Birth&quot;</span><span class="p">][</span><span class="mi">0</span><span class="p">]</span>
        <span class="n">final_births_list</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">final_births_list</span><span class="p">,</span> <span class="n">birth_date</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">final_births_list</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span> 
</pre></div>

     </div>
</div>
</div>
</div>

</div></section></section>
</div>
</div>
</body>


<script>
require(
    {
      // it makes sense to wait a little bit when you are loading
      // reveal from a cdn in a slow connection environment
      waitSeconds: 15
    },
    [
      "https://unpkg.com/reveal.js@4.0.2/dist/reveal.js"
    ],

    function(Reveal){
        // Full list of configuration options available here: https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            transition: "slide",
        });

        var update = function(event){
          if(MathJax.Hub.getAllJax(Reveal.getCurrentSlide())){
            MathJax.Hub.Rerender(Reveal.getCurrentSlide());
          }
        };

        Reveal.addEventListener('slidechanged', update);

        function setScrollingSlide() {
            var scroll = false
            if (scroll === true) {
              var h = $('.reveal').height() * 0.95;
              $('section.present').find('section')
                .filter(function() {
                  return $(this).height() > h;
                })
                .css('height', 'calc(95vh)')
                .css('overflow-y', 'scroll')
                .css('margin-top', '20px');
            }
        }

        // check and set the scrolling slide every time the slide change
        Reveal.addEventListener('slidechanged', setScrollingSlide);
    }
);
</script>

</html>
