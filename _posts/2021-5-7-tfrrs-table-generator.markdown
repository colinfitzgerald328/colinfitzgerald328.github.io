---
layout: blank
title:  "Creating a Web Scraper to Support Statistical Endeavors "
date:   2021-04-26 05:04:00 -0800
excerpt: "Implementing a Web Scraper in Python so I can generate tables from the TFRRS website automatically rather than having to store them locally."
categories: 
  - tutorial
  - pinned

toc: true
--- 


<html>
<head><meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Cleaned and Robust 1500m Data Generator</title><script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"></script>




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

/* Input area styling */
.jp-InputArea {
    overflow: hidden;
}

.jp-InputArea-editor {
    overflow: hidden;
}

@media print {
  body {
    margin: 0;
  }
}
</style>



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
    <!-- End of mathjax configuration --></head>
<body class="jp-Notebook" data-jp-theme-light="true" data-jp-theme-name="JupyterLab Light">
<div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[1]:</div>
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
<h1 id="Creating-a-Robust-Table-Generator-for-Historical-TFRRS-Data,-2012--Present">Creating a Robust Table Generator for Historical TFRRS Data, 2012- Present<a class="anchor-link" href="#Creating-a-Robust-Table-Generator-for-Historical-TFRRS-Data,-2012--Present">&#182;</a></h1><h2 id="Author's-Note:-This-page-will-be-updated-weekly-as-new-data-becomes-available.">Author's Note: This page will be updated weekly as new data becomes available.<a class="anchor-link" href="#Author's-Note:-This-page-will-be-updated-weekly-as-new-data-becomes-available.">&#182;</a></h2><h3 id="Page-last-updated:-5/7/2021-at-9:50-P.M.">Page last updated: 5/7/2021 at 9:50 P.M.<a class="anchor-link" href="#Page-last-updated:-5/7/2021-at-9:50-P.M.">&#182;</a></h3><p>The TFRRS website has an archive page that contains the NCAA Track and Field Outdoor Final Qualifying lists for the years 2012, until now. The following functions reproduce those tables from the TFRRS website into pandas dataframes that can be directly manipulated for the purpose of data visualization. I decided to do the data collection process this way so that I do not have to download each dataset to my computer, but rather I can pull it for each year directly to python. The process is somewhat clean. I spent time studying the TFRRS website in order to properly configure my web scraper. The following functions are a cleaned and robust version of several python jupyter notebooks.</p>

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







<div id="d43af69a-d409-423e-a1bb-9b36a516c57e" class="jupyter-widgets jp-OutputArea-output ">
<script type="text/javascript">
var element = document.getElementById('d43af69a-d409-423e-a1bb-9b36a516c57e');
</script>
<script type="application/vnd.jupyter.widget-view+json">
{"model_id": "c1c05fef7f9f43e4b67cf8bd486fbd51", "version_major": 2, "version_minor": 0}
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
<p>Now that we have all of the functions written, let's looked at cleaned kernel density plots for each event, 800m to 10,000m, compared from 2012 until now. For these kernel density plots, we need to compile a list of the times for each event for each year. We will store each year's data in an array. We will compile a large list of all of the numbers. Let's hope that our array is not destroyed in the making.</p>

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
<p>Well, I guess that worked. Now it's time to make each year's matrix.</p>

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
<p>Here's the kernel density for the 800m, years 2012-2021. 2020 is discluded because of the pandemic year.</p>

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
<span class="n">ax</span><span class="o">.</span><span class="n">set_title</span><span class="p">(</span><span class="s2">&quot;800m Time&quot;</span><span class="p">)</span>
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
<pre>Text(0.5, 1.0, &#39;800m Time&#39;)</pre>
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

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Here's the kernel density for the 1500m, years 2012-2021. 2020 is discluded because of the pandemic year.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[13]:</div>
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
<span class="n">ax</span><span class="o">.</span><span class="n">set_title</span><span class="p">(</span><span class="s2">&quot;1500m Time&quot;</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[13]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>Text(0.5, 1.0, &#39;1500m Time&#39;)</pre>
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

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Here's the kernel density for the 5000m, years 2012-2021. 2020 is discluded because of the pandemic year.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[14]:</div>
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
<span class="n">ax</span><span class="o">.</span><span class="n">set_title</span><span class="p">(</span><span class="s2">&quot;5000m Time&quot;</span><span class="p">)</span>
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
<pre>Text(0.5, 1.0, &#39;5000m Time&#39;)</pre>
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

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Here's the kernel density for the 1500m, years 2012-2021. 2020 is discluded because of the pandemic year.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[15]:</div>
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
<span class="n">ax</span><span class="o">.</span><span class="n">set_title</span><span class="p">(</span><span class="s2">&quot;10,000m Time&quot;</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[15]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>Text(0.5, 1.0, &#39;10,000m Time&#39;)</pre>
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

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>The following code below is part of a larger project. I am in the process of generating independent/explanatory variables for this project, as I want to go more in depth in the future to test the impact of the spikes. I have finals coming up so, naturally, I cannot fully dedicate my time to a project such as this.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[16]:</div>
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
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[17]:</div>
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
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
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

</div>
</body>







</html>
