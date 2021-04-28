---
layout: blank
title:  "Analyzing the Difference Between 2019 and 2021 Collegiate Outdoor 1500m Data"
date:   2021-04-26 05:04:00 -0800
excerpt: "Analyzing the Difference Between 2019 and 2021 Collegiate Outdoor 1500m Data"
categories: 
  - tutorial
  - pinned

toc: true
--- 


<html>
<head><meta charset="utf-8" />

<title>Difference Between 2019 and 2021 Outdoor 1500m Times -Updated 426</title>

<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>



<style type="text/css">
    /*!
*
* Twitter Bootstrap
*
*/
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
[hidden],
template {
  display: none;
}
a {
  background-color: transparent;
}
a:active,
a:hover {
  outline: 0;
}
abbr[title] {
  border-bottom: 1px dotted;
}
b,
strong {
  font-weight: bold;
}
dfn {
  font-style: italic;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
mark {
  background: #ff0;
  color: #000;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
img {
  border: 0;
}
svg:not(:root) {
  overflow: hidden;
}
figure {
  margin: 1em 40px;
}
hr {
  box-sizing: content-box;
  height: 0;
}
pre {
  overflow: auto;
}
code,
kbd,
pre,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}
button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
  border: 0;
  padding: 0;
}
input {
  line-height: normal;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: textfield;
  box-sizing: content-box;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
fieldset {
  border: 1px solid #c0c0c0;
  margin: 0 2px;
  padding: 0.35em 0.625em 0.75em;
}
legend {
  border: 0;
  padding: 0;
}
textarea {
  overflow: auto;
}
optgroup {
  font-weight: bold;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}
/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */
@media print {
  *,
  *:before,
  *:after {
    background: transparent !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  a,
  a:visited {
    text-decoration: underline;
  }
  a[href]:after {
    content: " (" attr(href) ")";
  }
  abbr[title]:after {
    content: " (" attr(title) ")";
  }
  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }
  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  .navbar {
    display: none;
  }
  .btn > .caret,
  .dropup > .btn > .caret {
    border-top-color: #000 !important;
  }
  .label {
    border: 1px solid #000;
  }
  .table {
    border-collapse: collapse !important;
  }
  .table td,
  .table th {
    background-color: #fff !important;
  }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #ddd !important;
  }
}
@font-face {
  font-family: 'Glyphicons Halflings';
  src: url('../components/bootstrap/fonts/glyphicons-halflings-regular.eot');
  src: url('../components/bootstrap/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../components/bootstrap/fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('../components/bootstrap/fonts/glyphicons-halflings-regular.woff') format('woff'), url('../components/bootstrap/fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../components/bootstrap/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
}
.glyphicon {
  position: relative;
  top: 1px;
  display: inline-block;
  font-family: 'Glyphicons Halflings';
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.glyphicon-asterisk:before {
  content: "\002a";
}
.glyphicon-plus:before {
  content: "\002b";
}
.glyphicon-euro:before,
.glyphicon-eur:before {
  content: "\20ac";
}
.glyphicon-minus:before {
  content: "\2212";
}
.glyphicon-cloud:before {
  content: "\2601";
}
.glyphicon-envelope:before {
  content: "\2709";
}
.glyphicon-pencil:before {
  content: "\270f";
}
.glyphicon-glass:before {
  content: "\e001";
}
.glyphicon-music:before {
  content: "\e002";
}
.glyphicon-search:before {
  content: "\e003";
}
.glyphicon-heart:before {
  content: "\e005";
}
.glyphicon-star:before {
  content: "\e006";
}
.glyphicon-star-empty:before {
  content: "\e007";
}
.glyphicon-user:before {
  content: "\e008";
}
.glyphicon-film:before {
  content: "\e009";
}
.glyphicon-th-large:before {
  content: "\e010";
}
.glyphicon-th:before {
  content: "\e011";
}
.glyphicon-th-list:before {
  content: "\e012";
}
.glyphicon-ok:before {
  content: "\e013";
}
.glyphicon-remove:before {
  content: "\e014";
}
.glyphicon-zoom-in:before {
  content: "\e015";
}
.glyphicon-zoom-out:before {
  content: "\e016";
}
.glyphicon-off:before {
  content: "\e017";
}
.glyphicon-signal:before {
  content: "\e018";
}
.glyphicon-cog:before {
  content: "\e019";
}
.glyphicon-trash:before {
  content: "\e020";
}
.glyphicon-home:before {
  content: "\e021";
}
.glyphicon-file:before {
  content: "\e022";
}
.glyphicon-time:before {
  content: "\e023";
}
.glyphicon-road:before {
  content: "\e024";
}
.glyphicon-download-alt:before {
  content: "\e025";
}
.glyphicon-download:before {
  content: "\e026";
}
.glyphicon-upload:before {
  content: "\e027";
}
.glyphicon-inbox:before {
  content: "\e028";
}
.glyphicon-play-circle:before {
  content: "\e029";
}
.glyphicon-repeat:before {
  content: "\e030";
}
.glyphicon-refresh:before {
  content: "\e031";
}
.glyphicon-list-alt:before {
  content: "\e032";
}
.glyphicon-lock:before {
  content: "\e033";
}
.glyphicon-flag:before {
  content: "\e034";
}
.glyphicon-headphones:before {
  content: "\e035";
}
.glyphicon-volume-off:before {
  content: "\e036";
}
.glyphicon-volume-down:before {
  content: "\e037";
}
.glyphicon-volume-up:before {
  content: "\e038";
}
.glyphicon-qrcode:before {
  content: "\e039";
}
.glyphicon-barcode:before {
  content: "\e040";
}
.glyphicon-tag:before {
  content: "\e041";
}
.glyphicon-tags:before {
  content: "\e042";
}
.glyphicon-book:before {
  content: "\e043";
}
.glyphicon-bookmark:before {
  content: "\e044";
}
.glyphicon-print:before {
  content: "\e045";
}
.glyphicon-camera:before {
  content: "\e046";
}
.glyphicon-font:before {
  content: "\e047";
}
.glyphicon-bold:before {
  content: "\e048";
}
.glyphicon-italic:before {
  content: "\e049";
}
.glyphicon-text-height:before {
  content: "\e050";
}
.glyphicon-text-width:before {
  content: "\e051";
}
.glyphicon-align-left:before {
  content: "\e052";
}
.glyphicon-align-center:before {
  content: "\e053";
}
.glyphicon-align-right:before {
  content: "\e054";
}
.glyphicon-align-justify:before {
  content: "\e055";
}
.glyphicon-list:before {
  content: "\e056";
}
.glyphicon-indent-left:before {
  content: "\e057";
}
.glyphicon-indent-right:before {
  content: "\e058";
}
.glyphicon-facetime-video:before {
  content: "\e059";
}
.glyphicon-picture:before {
  content: "\e060";
}
.glyphicon-map-marker:before {
  content: "\e062";
}
.glyphicon-adjust:before {
  content: "\e063";
}
.glyphicon-tint:before {
  content: "\e064";
}
.glyphicon-edit:before {
  content: "\e065";
}
.glyphicon-share:before {
  content: "\e066";
}
.glyphicon-check:before {
  content: "\e067";
}
.glyphicon-move:before {
  content: "\e068";
}
.glyphicon-step-backward:before {
  content: "\e069";
}
.glyphicon-fast-backward:before {
  content: "\e070";
}
.glyphicon-backward:before {
  content: "\e071";
}
.glyphicon-play:before {
  content: "\e072";
}
.glyphicon-pause:before {
  content: "\e073";
}
.glyphicon-stop:before {
  content: "\e074";
}
.glyphicon-forward:before {
  content: "\e075";
}
.glyphicon-fast-forward:before {
  content: "\e076";
}
.glyphicon-step-forward:before {
  content: "\e077";
}
.glyphicon-eject:before {
  content: "\e078";
}
.glyphicon-chevron-left:before {
  content: "\e079";
}
.glyphicon-chevron-right:before {
  content: "\e080";
}
.glyphicon-plus-sign:before {
  content: "\e081";
}
.glyphicon-minus-sign:before {
  content: "\e082";
}
.glyphicon-remove-sign:before {
  content: "\e083";
}
.glyphicon-ok-sign:before {
  content: "\e084";
}
.glyphicon-question-sign:before {
  content: "\e085";
}
.glyphicon-info-sign:before {
  content: "\e086";
}
.glyphicon-screenshot:before {
  content: "\e087";
}
.glyphicon-remove-circle:before {
  content: "\e088";
}
.glyphicon-ok-circle:before {
  content: "\e089";
}
.glyphicon-ban-circle:before {
  content: "\e090";
}
.glyphicon-arrow-left:before {
  content: "\e091";
}
.glyphicon-arrow-right:before {
  content: "\e092";
}
.glyphicon-arrow-up:before {
  content: "\e093";
}
.glyphicon-arrow-down:before {
  content: "\e094";
}
.glyphicon-share-alt:before {
  content: "\e095";
}
.glyphicon-resize-full:before {
  content: "\e096";
}
.glyphicon-resize-small:before {
  content: "\e097";
}
.glyphicon-exclamation-sign:before {
  content: "\e101";
}
.glyphicon-gift:before {
  content: "\e102";
}
.glyphicon-leaf:before {
  content: "\e103";
}
.glyphicon-fire:before {
  content: "\e104";
}
.glyphicon-eye-open:before {
  content: "\e105";
}
.glyphicon-eye-close:before {
  content: "\e106";
}
.glyphicon-warning-sign:before {
  content: "\e107";
}
.glyphicon-plane:before {
  content: "\e108";
}
.glyphicon-calendar:before {
  content: "\e109";
}
.glyphicon-random:before {
  content: "\e110";
}
.glyphicon-comment:before {
  content: "\e111";
}
.glyphicon-magnet:before {
  content: "\e112";
}
.glyphicon-chevron-up:before {
  content: "\e113";
}
.glyphicon-chevron-down:before {
  content: "\e114";
}
.glyphicon-retweet:before {
  content: "\e115";
}
.glyphicon-shopping-cart:before {
  content: "\e116";
}
.glyphicon-folder-close:before {
  content: "\e117";
}
.glyphicon-folder-open:before {
  content: "\e118";
}
.glyphicon-resize-vertical:before {
  content: "\e119";
}
.glyphicon-resize-horizontal:before {
  content: "\e120";
}
.glyphicon-hdd:before {
  content: "\e121";
}
.glyphicon-bullhorn:before {
  content: "\e122";
}
.glyphicon-bell:before {
  content: "\e123";
}
.glyphicon-certificate:before {
  content: "\e124";
}
.glyphicon-thumbs-up:before {
  content: "\e125";
}
.glyphicon-thumbs-down:before {
  content: "\e126";
}
.glyphicon-hand-right:before {
  content: "\e127";
}
.glyphicon-hand-left:before {
  content: "\e128";
}
.glyphicon-hand-up:before {
  content: "\e129";
}
.glyphicon-hand-down:before {
  content: "\e130";
}
.glyphicon-circle-arrow-right:before {
  content: "\e131";
}
.glyphicon-circle-arrow-left:before {
  content: "\e132";
}
.glyphicon-circle-arrow-up:before {
  content: "\e133";
}
.glyphicon-circle-arrow-down:before {
  content: "\e134";
}
.glyphicon-globe:before {
  content: "\e135";
}
.glyphicon-wrench:before {
  content: "\e136";
}
.glyphicon-tasks:before {
  content: "\e137";
}
.glyphicon-filter:before {
  content: "\e138";
}
.glyphicon-briefcase:before {
  content: "\e139";
}
.glyphicon-fullscreen:before {
  content: "\e140";
}
.glyphicon-dashboard:before {
  content: "\e141";
}
.glyphicon-paperclip:before {
  content: "\e142";
}
.glyphicon-heart-empty:before {
  content: "\e143";
}
.glyphicon-link:before {
  content: "\e144";
}
.glyphicon-phone:before {
  content: "\e145";
}
.glyphicon-pushpin:before {
  content: "\e146";
}
.glyphicon-usd:before {
  content: "\e148";
}
.glyphicon-gbp:before {
  content: "\e149";
}
.glyphicon-sort:before {
  content: "\e150";
}
.glyphicon-sort-by-alphabet:before {
  content: "\e151";
}
.glyphicon-sort-by-alphabet-alt:before {
  content: "\e152";
}
.glyphicon-sort-by-order:before {
  content: "\e153";
}
.glyphicon-sort-by-order-alt:before {
  content: "\e154";
}
.glyphicon-sort-by-attributes:before {
  content: "\e155";
}
.glyphicon-sort-by-attributes-alt:before {
  content: "\e156";
}
.glyphicon-unchecked:before {
  content: "\e157";
}
.glyphicon-expand:before {
  content: "\e158";
}
.glyphicon-collapse-down:before {
  content: "\e159";
}
.glyphicon-collapse-up:before {
  content: "\e160";
}
.glyphicon-log-in:before {
  content: "\e161";
}
.glyphicon-flash:before {
  content: "\e162";
}
.glyphicon-log-out:before {
  content: "\e163";
}
.glyphicon-new-window:before {
  content: "\e164";
}
.glyphicon-record:before {
  content: "\e165";
}
.glyphicon-save:before {
  content: "\e166";
}
.glyphicon-open:before {
  content: "\e167";
}
.glyphicon-saved:before {
  content: "\e168";
}
.glyphicon-import:before {
  content: "\e169";
}
.glyphicon-export:before {
  content: "\e170";
}
.glyphicon-send:before {
  content: "\e171";
}
.glyphicon-floppy-disk:before {
  content: "\e172";
}
.glyphicon-floppy-saved:before {
  content: "\e173";
}
.glyphicon-floppy-remove:before {
  content: "\e174";
}
.glyphicon-floppy-save:before {
  content: "\e175";
}
.glyphicon-floppy-open:before {
  content: "\e176";
}
.glyphicon-credit-card:before {
  content: "\e177";
}
.glyphicon-transfer:before {
  content: "\e178";
}
.glyphicon-cutlery:before {
  content: "\e179";
}
.glyphicon-header:before {
  content: "\e180";
}
.glyphicon-compressed:before {
  content: "\e181";
}
.glyphicon-earphone:before {
  content: "\e182";
}
.glyphicon-phone-alt:before {
  content: "\e183";
}
.glyphicon-tower:before {
  content: "\e184";
}
.glyphicon-stats:before {
  content: "\e185";
}
.glyphicon-sd-video:before {
  content: "\e186";
}
.glyphicon-hd-video:before {
  content: "\e187";
}
.glyphicon-subtitles:before {
  content: "\e188";
}
.glyphicon-sound-stereo:before {
  content: "\e189";
}
.glyphicon-sound-dolby:before {
  content: "\e190";
}
.glyphicon-sound-5-1:before {
  content: "\e191";
}
.glyphicon-sound-6-1:before {
  content: "\e192";
}
.glyphicon-sound-7-1:before {
  content: "\e193";
}
.glyphicon-copyright-mark:before {
  content: "\e194";
}
.glyphicon-registration-mark:before {
  content: "\e195";
}
.glyphicon-cloud-download:before {
  content: "\e197";
}
.glyphicon-cloud-upload:before {
  content: "\e198";
}
.glyphicon-tree-conifer:before {
  content: "\e199";
}
.glyphicon-tree-deciduous:before {
  content: "\e200";
}
.glyphicon-cd:before {
  content: "\e201";
}
.glyphicon-save-file:before {
  content: "\e202";
}
.glyphicon-open-file:before {
  content: "\e203";
}
.glyphicon-level-up:before {
  content: "\e204";
}
.glyphicon-copy:before {
  content: "\e205";
}
.glyphicon-paste:before {
  content: "\e206";
}
.glyphicon-alert:before {
  content: "\e209";
}
.glyphicon-equalizer:before {
  content: "\e210";
}
.glyphicon-king:before {
  content: "\e211";
}
.glyphicon-queen:before {
  content: "\e212";
}
.glyphicon-pawn:before {
  content: "\e213";
}
.glyphicon-bishop:before {
  content: "\e214";
}
.glyphicon-knight:before {
  content: "\e215";
}
.glyphicon-baby-formula:before {
  content: "\e216";
}
.glyphicon-tent:before {
  content: "\26fa";
}
.glyphicon-blackboard:before {
  content: "\e218";
}
.glyphicon-bed:before {
  content: "\e219";
}
.glyphicon-apple:before {
  content: "\f8ff";
}
.glyphicon-erase:before {
  content: "\e221";
}
.glyphicon-hourglass:before {
  content: "\231b";
}
.glyphicon-lamp:before {
  content: "\e223";
}
.glyphicon-duplicate:before {
  content: "\e224";
}
.glyphicon-piggy-bank:before {
  content: "\e225";
}
.glyphicon-scissors:before {
  content: "\e226";
}
.glyphicon-bitcoin:before {
  content: "\e227";
}
.glyphicon-btc:before {
  content: "\e227";
}
.glyphicon-xbt:before {
  content: "\e227";
}
.glyphicon-yen:before {
  content: "\00a5";
}
.glyphicon-jpy:before {
  content: "\00a5";
}
.glyphicon-ruble:before {
  content: "\20bd";
}
.glyphicon-rub:before {
  content: "\20bd";
}
.glyphicon-scale:before {
  content: "\e230";
}
.glyphicon-ice-lolly:before {
  content: "\e231";
}
.glyphicon-ice-lolly-tasted:before {
  content: "\e232";
}
.glyphicon-education:before {
  content: "\e233";
}
.glyphicon-option-horizontal:before {
  content: "\e234";
}
.glyphicon-option-vertical:before {
  content: "\e235";
}
.glyphicon-menu-hamburger:before {
  content: "\e236";
}
.glyphicon-modal-window:before {
  content: "\e237";
}
.glyphicon-oil:before {
  content: "\e238";
}
.glyphicon-grain:before {
  content: "\e239";
}
.glyphicon-sunglasses:before {
  content: "\e240";
}
.glyphicon-text-size:before {
  content: "\e241";
}
.glyphicon-text-color:before {
  content: "\e242";
}
.glyphicon-text-background:before {
  content: "\e243";
}
.glyphicon-object-align-top:before {
  content: "\e244";
}
.glyphicon-object-align-bottom:before {
  content: "\e245";
}
.glyphicon-object-align-horizontal:before {
  content: "\e246";
}
.glyphicon-object-align-left:before {
  content: "\e247";
}
.glyphicon-object-align-vertical:before {
  content: "\e248";
}
.glyphicon-object-align-right:before {
  content: "\e249";
}
.glyphicon-triangle-right:before {
  content: "\e250";
}
.glyphicon-triangle-left:before {
  content: "\e251";
}
.glyphicon-triangle-bottom:before {
  content: "\e252";
}
.glyphicon-triangle-top:before {
  content: "\e253";
}
.glyphicon-console:before {
  content: "\e254";
}
.glyphicon-superscript:before {
  content: "\e255";
}
.glyphicon-subscript:before {
  content: "\e256";
}
.glyphicon-menu-left:before {
  content: "\e257";
}
.glyphicon-menu-right:before {
  content: "\e258";
}
.glyphicon-menu-down:before {
  content: "\e259";
}
.glyphicon-menu-up:before {
  content: "\e260";
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 1.42857143;
  color: #000;
  background-color: #fff;
}
input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #23527c;
  text-decoration: underline;
}
a:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
figure {
  margin: 0;
}
img {
  vertical-align: middle;
}
.img-responsive,
.thumbnail > img,
.thumbnail a > img,
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  display: block;
  max-width: 100%;
  height: auto;
}
.img-rounded {
  border-radius: 3px;
}
.img-thumbnail {
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  max-width: 100%;
  height: auto;
}
.img-circle {
  border-radius: 50%;
}
hr {
  margin-top: 18px;
  margin-bottom: 18px;
  border: 0;
  border-top: 1px solid #eeeeee;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}
[role="button"] {
  cursor: pointer;
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small,
.h1 small,
.h2 small,
.h3 small,
.h4 small,
.h5 small,
.h6 small,
h1 .small,
h2 .small,
h3 .small,
h4 .small,
h5 .small,
h6 .small,
.h1 .small,
.h2 .small,
.h3 .small,
.h4 .small,
.h5 .small,
.h6 .small {
  font-weight: normal;
  line-height: 1;
  color: #777777;
}
h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 18px;
  margin-bottom: 9px;
}
h1 small,
.h1 small,
h2 small,
.h2 small,
h3 small,
.h3 small,
h1 .small,
.h1 .small,
h2 .small,
.h2 .small,
h3 .small,
.h3 .small {
  font-size: 65%;
}
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  margin-top: 9px;
  margin-bottom: 9px;
}
h4 small,
.h4 small,
h5 small,
.h5 small,
h6 small,
.h6 small,
h4 .small,
.h4 .small,
h5 .small,
.h5 .small,
h6 .small,
.h6 .small {
  font-size: 75%;
}
h1,
.h1 {
  font-size: 33px;
}
h2,
.h2 {
  font-size: 27px;
}
h3,
.h3 {
  font-size: 23px;
}
h4,
.h4 {
  font-size: 17px;
}
h5,
.h5 {
  font-size: 13px;
}
h6,
.h6 {
  font-size: 12px;
}
p {
  margin: 0 0 9px;
}
.lead {
  margin-bottom: 18px;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.4;
}
@media (min-width: 768px) {
  .lead {
    font-size: 19.5px;
  }
}
small,
.small {
  font-size: 92%;
}
mark,
.mark {
  background-color: #fcf8e3;
  padding: .2em;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
.text-justify {
  text-align: justify;
}
.text-nowrap {
  white-space: nowrap;
}
.text-lowercase {
  text-transform: lowercase;
}
.text-uppercase {
  text-transform: uppercase;
}
.text-capitalize {
  text-transform: capitalize;
}
.text-muted {
  color: #777777;
}
.text-primary {
  color: #337ab7;
}
a.text-primary:hover,
a.text-primary:focus {
  color: #286090;
}
.text-success {
  color: #3c763d;
}
a.text-success:hover,
a.text-success:focus {
  color: #2b542c;
}
.text-info {
  color: #31708f;
}
a.text-info:hover,
a.text-info:focus {
  color: #245269;
}
.text-warning {
  color: #8a6d3b;
}
a.text-warning:hover,
a.text-warning:focus {
  color: #66512c;
}
.text-danger {
  color: #a94442;
}
a.text-danger:hover,
a.text-danger:focus {
  color: #843534;
}
.bg-primary {
  color: #fff;
  background-color: #337ab7;
}
a.bg-primary:hover,
a.bg-primary:focus {
  background-color: #286090;
}
.bg-success {
  background-color: #dff0d8;
}
a.bg-success:hover,
a.bg-success:focus {
  background-color: #c1e2b3;
}
.bg-info {
  background-color: #d9edf7;
}
a.bg-info:hover,
a.bg-info:focus {
  background-color: #afd9ee;
}
.bg-warning {
  background-color: #fcf8e3;
}
a.bg-warning:hover,
a.bg-warning:focus {
  background-color: #f7ecb5;
}
.bg-danger {
  background-color: #f2dede;
}
a.bg-danger:hover,
a.bg-danger:focus {
  background-color: #e4b9b9;
}
.page-header {
  padding-bottom: 8px;
  margin: 36px 0 18px;
  border-bottom: 1px solid #eeeeee;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 9px;
}
ul ul,
ol ul,
ul ol,
ol ol {
  margin-bottom: 0;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.list-inline {
  padding-left: 0;
  list-style: none;
  margin-left: -5px;
}
.list-inline > li {
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}
dl {
  margin-top: 0;
  margin-bottom: 18px;
}
dt,
dd {
  line-height: 1.42857143;
}
dt {
  font-weight: bold;
}
dd {
  margin-left: 0;
}
@media (min-width: 541px) {
  .dl-horizontal dt {
    float: left;
    width: 160px;
    clear: left;
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dl-horizontal dd {
    margin-left: 180px;
  }
}
abbr[title],
abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted #777777;
}
.initialism {
  font-size: 90%;
  text-transform: uppercase;
}
blockquote {
  padding: 9px 18px;
  margin: 0 0 18px;
  font-size: inherit;
  border-left: 5px solid #eeeeee;
}
blockquote p:last-child,
blockquote ul:last-child,
blockquote ol:last-child {
  margin-bottom: 0;
}
blockquote footer,
blockquote small,
blockquote .small {
  display: block;
  font-size: 80%;
  line-height: 1.42857143;
  color: #777777;
}
blockquote footer:before,
blockquote small:before,
blockquote .small:before {
  content: '\2014 \00A0';
}
.blockquote-reverse,
blockquote.pull-right {
  padding-right: 15px;
  padding-left: 0;
  border-right: 5px solid #eeeeee;
  border-left: 0;
  text-align: right;
}
.blockquote-reverse footer:before,
blockquote.pull-right footer:before,
.blockquote-reverse small:before,
blockquote.pull-right small:before,
.blockquote-reverse .small:before,
blockquote.pull-right .small:before {
  content: '';
}
.blockquote-reverse footer:after,
blockquote.pull-right footer:after,
.blockquote-reverse small:after,
blockquote.pull-right small:after,
.blockquote-reverse .small:after,
blockquote.pull-right .small:after {
  content: '\00A0 \2014';
}
address {
  margin-bottom: 18px;
  font-style: normal;
  line-height: 1.42857143;
}
code,
kbd,
pre,
samp {
  font-family: monospace;
}
code {
  padding: 2px 4px;
  font-size: 90%;
  color: #c7254e;
  background-color: #f9f2f4;
  border-radius: 2px;
}
kbd {
  padding: 2px 4px;
  font-size: 90%;
  color: #888;
  background-color: transparent;
  border-radius: 1px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
}
kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: bold;
  box-shadow: none;
}
pre {
  display: block;
  padding: 8.5px;
  margin: 0 0 9px;
  font-size: 12px;
  line-height: 1.42857143;
  word-break: break-all;
  word-wrap: break-word;
  color: #333333;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 2px;
}
pre code {
  padding: 0;
  font-size: inherit;
  color: inherit;
  white-space: pre-wrap;
  background-color: transparent;
  border-radius: 0;
}
.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 0px;
  padding-right: 0px;
}
@media (min-width: 768px) {
  .container {
    width: 768px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 940px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}
.container-fluid {
  margin-right: auto;
  margin-left: auto;
  padding-left: 0px;
  padding-right: 0px;
}
.row {
  margin-left: 0px;
  margin-right: 0px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  position: relative;
  min-height: 1px;
  padding-left: 0px;
  padding-right: 0px;
}
.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {
  float: left;
}
.col-xs-12 {
  width: 100%;
}
.col-xs-11 {
  width: 91.66666667%;
}
.col-xs-10 {
  width: 83.33333333%;
}
.col-xs-9 {
  width: 75%;
}
.col-xs-8 {
  width: 66.66666667%;
}
.col-xs-7 {
  width: 58.33333333%;
}
.col-xs-6 {
  width: 50%;
}
.col-xs-5 {
  width: 41.66666667%;
}
.col-xs-4 {
  width: 33.33333333%;
}
.col-xs-3 {
  width: 25%;
}
.col-xs-2 {
  width: 16.66666667%;
}
.col-xs-1 {
  width: 8.33333333%;
}
.col-xs-pull-12 {
  right: 100%;
}
.col-xs-pull-11 {
  right: 91.66666667%;
}
.col-xs-pull-10 {
  right: 83.33333333%;
}
.col-xs-pull-9 {
  right: 75%;
}
.col-xs-pull-8 {
  right: 66.66666667%;
}
.col-xs-pull-7 {
  right: 58.33333333%;
}
.col-xs-pull-6 {
  right: 50%;
}
.col-xs-pull-5 {
  right: 41.66666667%;
}
.col-xs-pull-4 {
  right: 33.33333333%;
}
.col-xs-pull-3 {
  right: 25%;
}
.col-xs-pull-2 {
  right: 16.66666667%;
}
.col-xs-pull-1 {
  right: 8.33333333%;
}
.col-xs-pull-0 {
  right: auto;
}
.col-xs-push-12 {
  left: 100%;
}
.col-xs-push-11 {
  left: 91.66666667%;
}
.col-xs-push-10 {
  left: 83.33333333%;
}
.col-xs-push-9 {
  left: 75%;
}
.col-xs-push-8 {
  left: 66.66666667%;
}
.col-xs-push-7 {
  left: 58.33333333%;
}
.col-xs-push-6 {
  left: 50%;
}
.col-xs-push-5 {
  left: 41.66666667%;
}
.col-xs-push-4 {
  left: 33.33333333%;
}
.col-xs-push-3 {
  left: 25%;
}
.col-xs-push-2 {
  left: 16.66666667%;
}
.col-xs-push-1 {
  left: 8.33333333%;
}
.col-xs-push-0 {
  left: auto;
}
.col-xs-offset-12 {
  margin-left: 100%;
}
.col-xs-offset-11 {
  margin-left: 91.66666667%;
}
.col-xs-offset-10 {
  margin-left: 83.33333333%;
}
.col-xs-offset-9 {
  margin-left: 75%;
}
.col-xs-offset-8 {
  margin-left: 66.66666667%;
}
.col-xs-offset-7 {
  margin-left: 58.33333333%;
}
.col-xs-offset-6 {
  margin-left: 50%;
}
.col-xs-offset-5 {
  margin-left: 41.66666667%;
}
.col-xs-offset-4 {
  margin-left: 33.33333333%;
}
.col-xs-offset-3 {
  margin-left: 25%;
}
.col-xs-offset-2 {
  margin-left: 16.66666667%;
}
.col-xs-offset-1 {
  margin-left: 8.33333333%;
}
.col-xs-offset-0 {
  margin-left: 0%;
}
@media (min-width: 768px) {
  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {
    float: left;
  }
  .col-sm-12 {
    width: 100%;
  }
  .col-sm-11 {
    width: 91.66666667%;
  }
  .col-sm-10 {
    width: 83.33333333%;
  }
  .col-sm-9 {
    width: 75%;
  }
  .col-sm-8 {
    width: 66.66666667%;
  }
  .col-sm-7 {
    width: 58.33333333%;
  }
  .col-sm-6 {
    width: 50%;
  }
  .col-sm-5 {
    width: 41.66666667%;
  }
  .col-sm-4 {
    width: 33.33333333%;
  }
  .col-sm-3 {
    width: 25%;
  }
  .col-sm-2 {
    width: 16.66666667%;
  }
  .col-sm-1 {
    width: 8.33333333%;
  }
  .col-sm-pull-12 {
    right: 100%;
  }
  .col-sm-pull-11 {
    right: 91.66666667%;
  }
  .col-sm-pull-10 {
    right: 83.33333333%;
  }
  .col-sm-pull-9 {
    right: 75%;
  }
  .col-sm-pull-8 {
    right: 66.66666667%;
  }
  .col-sm-pull-7 {
    right: 58.33333333%;
  }
  .col-sm-pull-6 {
    right: 50%;
  }
  .col-sm-pull-5 {
    right: 41.66666667%;
  }
  .col-sm-pull-4 {
    right: 33.33333333%;
  }
  .col-sm-pull-3 {
    right: 25%;
  }
  .col-sm-pull-2 {
    right: 16.66666667%;
  }
  .col-sm-pull-1 {
    right: 8.33333333%;
  }
  .col-sm-pull-0 {
    right: auto;
  }
  .col-sm-push-12 {
    left: 100%;
  }
  .col-sm-push-11 {
    left: 91.66666667%;
  }
  .col-sm-push-10 {
    left: 83.33333333%;
  }
  .col-sm-push-9 {
    left: 75%;
  }
  .col-sm-push-8 {
    left: 66.66666667%;
  }
  .col-sm-push-7 {
    left: 58.33333333%;
  }
  .col-sm-push-6 {
    left: 50%;
  }
  .col-sm-push-5 {
    left: 41.66666667%;
  }
  .col-sm-push-4 {
    left: 33.33333333%;
  }
  .col-sm-push-3 {
    left: 25%;
  }
  .col-sm-push-2 {
    left: 16.66666667%;
  }
  .col-sm-push-1 {
    left: 8.33333333%;
  }
  .col-sm-push-0 {
    left: auto;
  }
  .col-sm-offset-12 {
    margin-left: 100%;
  }
  .col-sm-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-sm-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-sm-offset-9 {
    margin-left: 75%;
  }
  .col-sm-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-sm-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-sm-offset-6 {
    margin-left: 50%;
  }
  .col-sm-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-sm-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-sm-offset-3 {
    margin-left: 25%;
  }
  .col-sm-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-sm-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-sm-offset-0 {
    margin-left: 0%;
  }
}
@media (min-width: 992px) {
  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {
    float: left;
  }
  .col-md-12 {
    width: 100%;
  }
  .col-md-11 {
    width: 91.66666667%;
  }
  .col-md-10 {
    width: 83.33333333%;
  }
  .col-md-9 {
    width: 75%;
  }
  .col-md-8 {
    width: 66.66666667%;
  }
  .col-md-7 {
    width: 58.33333333%;
  }
  .col-md-6 {
    width: 50%;
  }
  .col-md-5 {
    width: 41.66666667%;
  }
  .col-md-4 {
    width: 33.33333333%;
  }
  .col-md-3 {
    width: 25%;
  }
  .col-md-2 {
    width: 16.66666667%;
  }
  .col-md-1 {
    width: 8.33333333%;
  }
  .col-md-pull-12 {
    right: 100%;
  }
  .col-md-pull-11 {
    right: 91.66666667%;
  }
  .col-md-pull-10 {
    right: 83.33333333%;
  }
  .col-md-pull-9 {
    right: 75%;
  }
  .col-md-pull-8 {
    right: 66.66666667%;
  }
  .col-md-pull-7 {
    right: 58.33333333%;
  }
  .col-md-pull-6 {
    right: 50%;
  }
  .col-md-pull-5 {
    right: 41.66666667%;
  }
  .col-md-pull-4 {
    right: 33.33333333%;
  }
  .col-md-pull-3 {
    right: 25%;
  }
  .col-md-pull-2 {
    right: 16.66666667%;
  }
  .col-md-pull-1 {
    right: 8.33333333%;
  }
  .col-md-pull-0 {
    right: auto;
  }
  .col-md-push-12 {
    left: 100%;
  }
  .col-md-push-11 {
    left: 91.66666667%;
  }
  .col-md-push-10 {
    left: 83.33333333%;
  }
  .col-md-push-9 {
    left: 75%;
  }
  .col-md-push-8 {
    left: 66.66666667%;
  }
  .col-md-push-7 {
    left: 58.33333333%;
  }
  .col-md-push-6 {
    left: 50%;
  }
  .col-md-push-5 {
    left: 41.66666667%;
  }
  .col-md-push-4 {
    left: 33.33333333%;
  }
  .col-md-push-3 {
    left: 25%;
  }
  .col-md-push-2 {
    left: 16.66666667%;
  }
  .col-md-push-1 {
    left: 8.33333333%;
  }
  .col-md-push-0 {
    left: auto;
  }
  .col-md-offset-12 {
    margin-left: 100%;
  }
  .col-md-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-md-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-md-offset-9 {
    margin-left: 75%;
  }
  .col-md-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-md-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-md-offset-6 {
    margin-left: 50%;
  }
  .col-md-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-md-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-md-offset-3 {
    margin-left: 25%;
  }
  .col-md-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-md-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-md-offset-0 {
    margin-left: 0%;
  }
}
@media (min-width: 1200px) {
  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {
    float: left;
  }
  .col-lg-12 {
    width: 100%;
  }
  .col-lg-11 {
    width: 91.66666667%;
  }
  .col-lg-10 {
    width: 83.33333333%;
  }
  .col-lg-9 {
    width: 75%;
  }
  .col-lg-8 {
    width: 66.66666667%;
  }
  .col-lg-7 {
    width: 58.33333333%;
  }
  .col-lg-6 {
    width: 50%;
  }
  .col-lg-5 {
    width: 41.66666667%;
  }
  .col-lg-4 {
    width: 33.33333333%;
  }
  .col-lg-3 {
    width: 25%;
  }
  .col-lg-2 {
    width: 16.66666667%;
  }
  .col-lg-1 {
    width: 8.33333333%;
  }
  .col-lg-pull-12 {
    right: 100%;
  }
  .col-lg-pull-11 {
    right: 91.66666667%;
  }
  .col-lg-pull-10 {
    right: 83.33333333%;
  }
  .col-lg-pull-9 {
    right: 75%;
  }
  .col-lg-pull-8 {
    right: 66.66666667%;
  }
  .col-lg-pull-7 {
    right: 58.33333333%;
  }
  .col-lg-pull-6 {
    right: 50%;
  }
  .col-lg-pull-5 {
    right: 41.66666667%;
  }
  .col-lg-pull-4 {
    right: 33.33333333%;
  }
  .col-lg-pull-3 {
    right: 25%;
  }
  .col-lg-pull-2 {
    right: 16.66666667%;
  }
  .col-lg-pull-1 {
    right: 8.33333333%;
  }
  .col-lg-pull-0 {
    right: auto;
  }
  .col-lg-push-12 {
    left: 100%;
  }
  .col-lg-push-11 {
    left: 91.66666667%;
  }
  .col-lg-push-10 {
    left: 83.33333333%;
  }
  .col-lg-push-9 {
    left: 75%;
  }
  .col-lg-push-8 {
    left: 66.66666667%;
  }
  .col-lg-push-7 {
    left: 58.33333333%;
  }
  .col-lg-push-6 {
    left: 50%;
  }
  .col-lg-push-5 {
    left: 41.66666667%;
  }
  .col-lg-push-4 {
    left: 33.33333333%;
  }
  .col-lg-push-3 {
    left: 25%;
  }
  .col-lg-push-2 {
    left: 16.66666667%;
  }
  .col-lg-push-1 {
    left: 8.33333333%;
  }
  .col-lg-push-0 {
    left: auto;
  }
  .col-lg-offset-12 {
    margin-left: 100%;
  }
  .col-lg-offset-11 {
    margin-left: 91.66666667%;
  }
  .col-lg-offset-10 {
    margin-left: 83.33333333%;
  }
  .col-lg-offset-9 {
    margin-left: 75%;
  }
  .col-lg-offset-8 {
    margin-left: 66.66666667%;
  }
  .col-lg-offset-7 {
    margin-left: 58.33333333%;
  }
  .col-lg-offset-6 {
    margin-left: 50%;
  }
  .col-lg-offset-5 {
    margin-left: 41.66666667%;
  }
  .col-lg-offset-4 {
    margin-left: 33.33333333%;
  }
  .col-lg-offset-3 {
    margin-left: 25%;
  }
  .col-lg-offset-2 {
    margin-left: 16.66666667%;
  }
  .col-lg-offset-1 {
    margin-left: 8.33333333%;
  }
  .col-lg-offset-0 {
    margin-left: 0%;
  }
}
table {
  background-color: transparent;
}
caption {
  padding-top: 8px;
  padding-bottom: 8px;
  color: #777777;
  text-align: left;
}
th {
  text-align: left;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 18px;
}
.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-bottom: 2px solid #ddd;
}
.table > caption + thead > tr:first-child > th,
.table > colgroup + thead > tr:first-child > th,
.table > thead:first-child > tr:first-child > th,
.table > caption + thead > tr:first-child > td,
.table > colgroup + thead > tr:first-child > td,
.table > thead:first-child > tr:first-child > td {
  border-top: 0;
}
.table > tbody + tbody {
  border-top: 2px solid #ddd;
}
.table .table {
  background-color: #fff;
}
.table-condensed > thead > tr > th,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > tbody > tr > td,
.table-condensed > tfoot > tr > td {
  padding: 5px;
}
.table-bordered {
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  border: 1px solid #ddd;
}
.table-bordered > thead > tr > th,
.table-bordered > thead > tr > td {
  border-bottom-width: 2px;
}
.table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #f9f9f9;
}
.table-hover > tbody > tr:hover {
  background-color: #f5f5f5;
}
table col[class*="col-"] {
  position: static;
  float: none;
  display: table-column;
}
table td[class*="col-"],
table th[class*="col-"] {
  position: static;
  float: none;
  display: table-cell;
}
.table > thead > tr > td.active,
.table > tbody > tr > td.active,
.table > tfoot > tr > td.active,
.table > thead > tr > th.active,
.table > tbody > tr > th.active,
.table > tfoot > tr > th.active,
.table > thead > tr.active > td,
.table > tbody > tr.active > td,
.table > tfoot > tr.active > td,
.table > thead > tr.active > th,
.table > tbody > tr.active > th,
.table > tfoot > tr.active > th {
  background-color: #f5f5f5;
}
.table-hover > tbody > tr > td.active:hover,
.table-hover > tbody > tr > th.active:hover,
.table-hover > tbody > tr.active:hover > td,
.table-hover > tbody > tr:hover > .active,
.table-hover > tbody > tr.active:hover > th {
  background-color: #e8e8e8;
}
.table > thead > tr > td.success,
.table > tbody > tr > td.success,
.table > tfoot > tr > td.success,
.table > thead > tr > th.success,
.table > tbody > tr > th.success,
.table > tfoot > tr > th.success,
.table > thead > tr.success > td,
.table > tbody > tr.success > td,
.table > tfoot > tr.success > td,
.table > thead > tr.success > th,
.table > tbody > tr.success > th,
.table > tfoot > tr.success > th {
  background-color: #dff0d8;
}
.table-hover > tbody > tr > td.success:hover,
.table-hover > tbody > tr > th.success:hover,
.table-hover > tbody > tr.success:hover > td,
.table-hover > tbody > tr:hover > .success,
.table-hover > tbody > tr.success:hover > th {
  background-color: #d0e9c6;
}
.table > thead > tr > td.info,
.table > tbody > tr > td.info,
.table > tfoot > tr > td.info,
.table > thead > tr > th.info,
.table > tbody > tr > th.info,
.table > tfoot > tr > th.info,
.table > thead > tr.info > td,
.table > tbody > tr.info > td,
.table > tfoot > tr.info > td,
.table > thead > tr.info > th,
.table > tbody > tr.info > th,
.table > tfoot > tr.info > th {
  background-color: #d9edf7;
}
.table-hover > tbody > tr > td.info:hover,
.table-hover > tbody > tr > th.info:hover,
.table-hover > tbody > tr.info:hover > td,
.table-hover > tbody > tr:hover > .info,
.table-hover > tbody > tr.info:hover > th {
  background-color: #c4e3f3;
}
.table > thead > tr > td.warning,
.table > tbody > tr > td.warning,
.table > tfoot > tr > td.warning,
.table > thead > tr > th.warning,
.table > tbody > tr > th.warning,
.table > tfoot > tr > th.warning,
.table > thead > tr.warning > td,
.table > tbody > tr.warning > td,
.table > tfoot > tr.warning > td,
.table > thead > tr.warning > th,
.table > tbody > tr.warning > th,
.table > tfoot > tr.warning > th {
  background-color: #fcf8e3;
}
.table-hover > tbody > tr > td.warning:hover,
.table-hover > tbody > tr > th.warning:hover,
.table-hover > tbody > tr.warning:hover > td,
.table-hover > tbody > tr:hover > .warning,
.table-hover > tbody > tr.warning:hover > th {
  background-color: #faf2cc;
}
.table > thead > tr > td.danger,
.table > tbody > tr > td.danger,
.table > tfoot > tr > td.danger,
.table > thead > tr > th.danger,
.table > tbody > tr > th.danger,
.table > tfoot > tr > th.danger,
.table > thead > tr.danger > td,
.table > tbody > tr.danger > td,
.table > tfoot > tr.danger > td,
.table > thead > tr.danger > th,
.table > tbody > tr.danger > th,
.table > tfoot > tr.danger > th {
  background-color: #f2dede;
}
.table-hover > tbody > tr > td.danger:hover,
.table-hover > tbody > tr > th.danger:hover,
.table-hover > tbody > tr.danger:hover > td,
.table-hover > tbody > tr:hover > .danger,
.table-hover > tbody > tr.danger:hover > th {
  background-color: #ebcccc;
}
.table-responsive {
  overflow-x: auto;
  min-height: 0.01%;
}
@media screen and (max-width: 767px) {
  .table-responsive {
    width: 100%;
    margin-bottom: 13.5px;
    overflow-y: hidden;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    border: 1px solid #ddd;
  }
  .table-responsive > .table {
    margin-bottom: 0;
  }
  .table-responsive > .table > thead > tr > th,
  .table-responsive > .table > tbody > tr > th,
  .table-responsive > .table > tfoot > tr > th,
  .table-responsive > .table > thead > tr > td,
  .table-responsive > .table > tbody > tr > td,
  .table-responsive > .table > tfoot > tr > td {
    white-space: nowrap;
  }
  .table-responsive > .table-bordered {
    border: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:first-child,
  .table-responsive > .table-bordered > tbody > tr > th:first-child,
  .table-responsive > .table-bordered > tfoot > tr > th:first-child,
  .table-responsive > .table-bordered > thead > tr > td:first-child,
  .table-responsive > .table-bordered > tbody > tr > td:first-child,
  .table-responsive > .table-bordered > tfoot > tr > td:first-child {
    border-left: 0;
  }
  .table-responsive > .table-bordered > thead > tr > th:last-child,
  .table-responsive > .table-bordered > tbody > tr > th:last-child,
  .table-responsive > .table-bordered > tfoot > tr > th:last-child,
  .table-responsive > .table-bordered > thead > tr > td:last-child,
  .table-responsive > .table-bordered > tbody > tr > td:last-child,
  .table-responsive > .table-bordered > tfoot > tr > td:last-child {
    border-right: 0;
  }
  .table-responsive > .table-bordered > tbody > tr:last-child > th,
  .table-responsive > .table-bordered > tfoot > tr:last-child > th,
  .table-responsive > .table-bordered > tbody > tr:last-child > td,
  .table-responsive > .table-bordered > tfoot > tr:last-child > td {
    border-bottom: 0;
  }
}
fieldset {
  padding: 0;
  margin: 0;
  border: 0;
  min-width: 0;
}
legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 18px;
  font-size: 19.5px;
  line-height: inherit;
  color: #333333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: bold;
}
input[type="search"] {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
input[type="radio"],
input[type="checkbox"] {
  margin: 4px 0 0;
  margin-top: 1px \9;
  line-height: normal;
}
input[type="file"] {
  display: block;
}
input[type="range"] {
  display: block;
  width: 100%;
}
select[multiple],
select[size] {
  height: auto;
}
input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
output {
  display: block;
  padding-top: 7px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #555555;
}
.form-control {
  display: block;
  width: 100%;
  height: 32px;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #555555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 2px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}
.form-control:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
.form-control::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #999;
}
.form-control::-webkit-input-placeholder {
  color: #999;
}
.form-control::-ms-expand {
  border: 0;
  background-color: transparent;
}
.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  background-color: #eeeeee;
  opacity: 1;
}
.form-control[disabled],
fieldset[disabled] .form-control {
  cursor: not-allowed;
}
textarea.form-control {
  height: auto;
}
input[type="search"] {
  -webkit-appearance: none;
}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="date"].form-control,
  input[type="time"].form-control,
  input[type="datetime-local"].form-control,
  input[type="month"].form-control {
    line-height: 32px;
  }
  input[type="date"].input-sm,
  input[type="time"].input-sm,
  input[type="datetime-local"].input-sm,
  input[type="month"].input-sm,
  .input-group-sm input[type="date"],
  .input-group-sm input[type="time"],
  .input-group-sm input[type="datetime-local"],
  .input-group-sm input[type="month"] {
    line-height: 30px;
  }
  input[type="date"].input-lg,
  input[type="time"].input-lg,
  input[type="datetime-local"].input-lg,
  input[type="month"].input-lg,
  .input-group-lg input[type="date"],
  .input-group-lg input[type="time"],
  .input-group-lg input[type="datetime-local"],
  .input-group-lg input[type="month"] {
    line-height: 45px;
  }
}
.form-group {
  margin-bottom: 15px;
}
.radio,
.checkbox {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.radio label,
.checkbox label {
  min-height: 18px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  position: absolute;
  margin-left: -20px;
  margin-top: 4px \9;
}
.radio + .radio,
.checkbox + .checkbox {
  margin-top: -5px;
}
.radio-inline,
.checkbox-inline {
  position: relative;
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  vertical-align: middle;
  font-weight: normal;
  cursor: pointer;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
input[type="radio"][disabled],
input[type="checkbox"][disabled],
input[type="radio"].disabled,
input[type="checkbox"].disabled,
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"] {
  cursor: not-allowed;
}
.radio-inline.disabled,
.checkbox-inline.disabled,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}
.radio.disabled label,
.checkbox.disabled label,
fieldset[disabled] .radio label,
fieldset[disabled] .checkbox label {
  cursor: not-allowed;
}
.form-control-static {
  padding-top: 7px;
  padding-bottom: 7px;
  margin-bottom: 0;
  min-height: 31px;
}
.form-control-static.input-lg,
.form-control-static.input-sm {
  padding-left: 0;
  padding-right: 0;
}
.input-sm {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
}
select.input-sm {
  height: 30px;
  line-height: 30px;
}
textarea.input-sm,
select[multiple].input-sm {
  height: auto;
}
.form-group-sm .form-control {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
}
.form-group-sm select.form-control {
  height: 30px;
  line-height: 30px;
}
.form-group-sm textarea.form-control,
.form-group-sm select[multiple].form-control {
  height: auto;
}
.form-group-sm .form-control-static {
  height: 30px;
  min-height: 30px;
  padding: 6px 10px;
  font-size: 12px;
  line-height: 1.5;
}
.input-lg {
  height: 45px;
  padding: 10px 16px;
  font-size: 17px;
  line-height: 1.3333333;
  border-radius: 3px;
}
select.input-lg {
  height: 45px;
  line-height: 45px;
}
textarea.input-lg,
select[multiple].input-lg {
  height: auto;
}
.form-group-lg .form-control {
  height: 45px;
  padding: 10px 16px;
  font-size: 17px;
  line-height: 1.3333333;
  border-radius: 3px;
}
.form-group-lg select.form-control {
  height: 45px;
  line-height: 45px;
}
.form-group-lg textarea.form-control,
.form-group-lg select[multiple].form-control {
  height: auto;
}
.form-group-lg .form-control-static {
  height: 45px;
  min-height: 35px;
  padding: 11px 16px;
  font-size: 17px;
  line-height: 1.3333333;
}
.has-feedback {
  position: relative;
}
.has-feedback .form-control {
  padding-right: 40px;
}
.form-control-feedback {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  pointer-events: none;
}
.input-lg + .form-control-feedback,
.input-group-lg + .form-control-feedback,
.form-group-lg .form-control + .form-control-feedback {
  width: 45px;
  height: 45px;
  line-height: 45px;
}
.input-sm + .form-control-feedback,
.input-group-sm + .form-control-feedback,
.form-group-sm .form-control + .form-control-feedback {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.has-success .help-block,
.has-success .control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline,
.has-success.radio label,
.has-success.checkbox label,
.has-success.radio-inline label,
.has-success.checkbox-inline label {
  color: #3c763d;
}
.has-success .form-control {
  border-color: #3c763d;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.has-success .form-control:focus {
  border-color: #2b542c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;
}
.has-success .input-group-addon {
  color: #3c763d;
  border-color: #3c763d;
  background-color: #dff0d8;
}
.has-success .form-control-feedback {
  color: #3c763d;
}
.has-warning .help-block,
.has-warning .control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline,
.has-warning.radio label,
.has-warning.checkbox label,
.has-warning.radio-inline label,
.has-warning.checkbox-inline label {
  color: #8a6d3b;
}
.has-warning .form-control {
  border-color: #8a6d3b;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.has-warning .form-control:focus {
  border-color: #66512c;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;
}
.has-warning .input-group-addon {
  color: #8a6d3b;
  border-color: #8a6d3b;
  background-color: #fcf8e3;
}
.has-warning .form-control-feedback {
  color: #8a6d3b;
}
.has-error .help-block,
.has-error .control-label,
.has-error .radio,
.has-error .checkbox,
.has-error .radio-inline,
.has-error .checkbox-inline,
.has-error.radio label,
.has-error.checkbox label,
.has-error.radio-inline label,
.has-error.checkbox-inline label {
  color: #a94442;
}
.has-error .form-control {
  border-color: #a94442;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.has-error .form-control:focus {
  border-color: #843534;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;
}
.has-error .input-group-addon {
  color: #a94442;
  border-color: #a94442;
  background-color: #f2dede;
}
.has-error .form-control-feedback {
  color: #a94442;
}
.has-feedback label ~ .form-control-feedback {
  top: 23px;
}
.has-feedback label.sr-only ~ .form-control-feedback {
  top: 0;
}
.help-block {
  display: block;
  margin-top: 5px;
  margin-bottom: 10px;
  color: #404040;
}
@media (min-width: 768px) {
  .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .form-inline .form-control-static {
    display: inline-block;
  }
  .form-inline .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .form-inline .input-group .input-group-addon,
  .form-inline .input-group .input-group-btn,
  .form-inline .input-group .form-control {
    width: auto;
  }
  .form-inline .input-group > .form-control {
    width: 100%;
  }
  .form-inline .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio,
  .form-inline .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .form-inline .radio label,
  .form-inline .checkbox label {
    padding-left: 0;
  }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .form-inline .has-feedback .form-control-feedback {
    top: 0;
  }
}
.form-horizontal .radio,
.form-horizontal .checkbox,
.form-horizontal .radio-inline,
.form-horizontal .checkbox-inline {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 7px;
}
.form-horizontal .radio,
.form-horizontal .checkbox {
  min-height: 25px;
}
.form-horizontal .form-group {
  margin-left: 0px;
  margin-right: 0px;
}
@media (min-width: 768px) {
  .form-horizontal .control-label {
    text-align: right;
    margin-bottom: 0;
    padding-top: 7px;
  }
}
.form-horizontal .has-feedback .form-control-feedback {
  right: 0px;
}
@media (min-width: 768px) {
  .form-horizontal .form-group-lg .control-label {
    padding-top: 11px;
    font-size: 17px;
  }
}
@media (min-width: 768px) {
  .form-horizontal .form-group-sm .control-label {
    padding-top: 6px;
    font-size: 12px;
  }
}
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1.42857143;
  border-radius: 2px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.btn:hover,
.btn:focus,
.btn.focus {
  color: #333;
  text-decoration: none;
}
.btn:active,
.btn.active {
  outline: 0;
  background-image: none;
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  cursor: not-allowed;
  opacity: 0.65;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  box-shadow: none;
}
a.btn.disabled,
fieldset[disabled] a.btn {
  pointer-events: none;
}
.btn-default {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.btn-default:focus,
.btn-default.focus {
  color: #333;
  background-color: #e6e6e6;
  border-color: #8c8c8c;
}
.btn-default:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.btn-default:active:hover,
.btn-default.active:hover,
.open > .dropdown-toggle.btn-default:hover,
.btn-default:active:focus,
.btn-default.active:focus,
.open > .dropdown-toggle.btn-default:focus,
.btn-default:active.focus,
.btn-default.active.focus,
.open > .dropdown-toggle.btn-default.focus {
  color: #333;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}
.btn-default:active,
.btn-default.active,
.open > .dropdown-toggle.btn-default {
  background-image: none;
}
.btn-default.disabled:hover,
.btn-default[disabled]:hover,
fieldset[disabled] .btn-default:hover,
.btn-default.disabled:focus,
.btn-default[disabled]:focus,
fieldset[disabled] .btn-default:focus,
.btn-default.disabled.focus,
.btn-default[disabled].focus,
fieldset[disabled] .btn-default.focus {
  background-color: #fff;
  border-color: #ccc;
}
.btn-default .badge {
  color: #fff;
  background-color: #333;
}
.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}
.btn-primary:focus,
.btn-primary.focus {
  color: #fff;
  background-color: #286090;
  border-color: #122b40;
}
.btn-primary:hover {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  color: #fff;
  background-color: #286090;
  border-color: #204d74;
}
.btn-primary:active:hover,
.btn-primary.active:hover,
.open > .dropdown-toggle.btn-primary:hover,
.btn-primary:active:focus,
.btn-primary.active:focus,
.open > .dropdown-toggle.btn-primary:focus,
.btn-primary:active.focus,
.btn-primary.active.focus,
.open > .dropdown-toggle.btn-primary.focus {
  color: #fff;
  background-color: #204d74;
  border-color: #122b40;
}
.btn-primary:active,
.btn-primary.active,
.open > .dropdown-toggle.btn-primary {
  background-image: none;
}
.btn-primary.disabled:hover,
.btn-primary[disabled]:hover,
fieldset[disabled] .btn-primary:hover,
.btn-primary.disabled:focus,
.btn-primary[disabled]:focus,
fieldset[disabled] .btn-primary:focus,
.btn-primary.disabled.focus,
.btn-primary[disabled].focus,
fieldset[disabled] .btn-primary.focus {
  background-color: #337ab7;
  border-color: #2e6da4;
}
.btn-primary .badge {
  color: #337ab7;
  background-color: #fff;
}
.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success:focus,
.btn-success.focus {
  color: #fff;
  background-color: #449d44;
  border-color: #255625;
}
.btn-success:hover {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}
.btn-success:active:hover,
.btn-success.active:hover,
.open > .dropdown-toggle.btn-success:hover,
.btn-success:active:focus,
.btn-success.active:focus,
.open > .dropdown-toggle.btn-success:focus,
.btn-success:active.focus,
.btn-success.active.focus,
.open > .dropdown-toggle.btn-success.focus {
  color: #fff;
  background-color: #398439;
  border-color: #255625;
}
.btn-success:active,
.btn-success.active,
.open > .dropdown-toggle.btn-success {
  background-image: none;
}
.btn-success.disabled:hover,
.btn-success[disabled]:hover,
fieldset[disabled] .btn-success:hover,
.btn-success.disabled:focus,
.btn-success[disabled]:focus,
fieldset[disabled] .btn-success:focus,
.btn-success.disabled.focus,
.btn-success[disabled].focus,
fieldset[disabled] .btn-success.focus {
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.btn-success .badge {
  color: #5cb85c;
  background-color: #fff;
}
.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info:focus,
.btn-info.focus {
  color: #fff;
  background-color: #31b0d5;
  border-color: #1b6d85;
}
.btn-info:hover {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.btn-info:active:hover,
.btn-info.active:hover,
.open > .dropdown-toggle.btn-info:hover,
.btn-info:active:focus,
.btn-info.active:focus,
.open > .dropdown-toggle.btn-info:focus,
.btn-info:active.focus,
.btn-info.active.focus,
.open > .dropdown-toggle.btn-info.focus {
  color: #fff;
  background-color: #269abc;
  border-color: #1b6d85;
}
.btn-info:active,
.btn-info.active,
.open > .dropdown-toggle.btn-info {
  background-image: none;
}
.btn-info.disabled:hover,
.btn-info[disabled]:hover,
fieldset[disabled] .btn-info:hover,
.btn-info.disabled:focus,
.btn-info[disabled]:focus,
fieldset[disabled] .btn-info:focus,
.btn-info.disabled.focus,
.btn-info[disabled].focus,
fieldset[disabled] .btn-info.focus {
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn-info .badge {
  color: #5bc0de;
  background-color: #fff;
}
.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning:focus,
.btn-warning.focus {
  color: #fff;
  background-color: #ec971f;
  border-color: #985f0d;
}
.btn-warning:hover {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}
.btn-warning:active:hover,
.btn-warning.active:hover,
.open > .dropdown-toggle.btn-warning:hover,
.btn-warning:active:focus,
.btn-warning.active:focus,
.open > .dropdown-toggle.btn-warning:focus,
.btn-warning:active.focus,
.btn-warning.active.focus,
.open > .dropdown-toggle.btn-warning.focus {
  color: #fff;
  background-color: #d58512;
  border-color: #985f0d;
}
.btn-warning:active,
.btn-warning.active,
.open > .dropdown-toggle.btn-warning {
  background-image: none;
}
.btn-warning.disabled:hover,
.btn-warning[disabled]:hover,
fieldset[disabled] .btn-warning:hover,
.btn-warning.disabled:focus,
.btn-warning[disabled]:focus,
fieldset[disabled] .btn-warning:focus,
.btn-warning.disabled.focus,
.btn-warning[disabled].focus,
fieldset[disabled] .btn-warning.focus {
  background-color: #f0ad4e;
  border-color: #eea236;
}
.btn-warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}
.btn-danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger:focus,
.btn-danger.focus {
  color: #fff;
  background-color: #c9302c;
  border-color: #761c19;
}
.btn-danger:hover {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.btn-danger:active:hover,
.btn-danger.active:hover,
.open > .dropdown-toggle.btn-danger:hover,
.btn-danger:active:focus,
.btn-danger.active:focus,
.open > .dropdown-toggle.btn-danger:focus,
.btn-danger:active.focus,
.btn-danger.active.focus,
.open > .dropdown-toggle.btn-danger.focus {
  color: #fff;
  background-color: #ac2925;
  border-color: #761c19;
}
.btn-danger:active,
.btn-danger.active,
.open > .dropdown-toggle.btn-danger {
  background-image: none;
}
.btn-danger.disabled:hover,
.btn-danger[disabled]:hover,
fieldset[disabled] .btn-danger:hover,
.btn-danger.disabled:focus,
.btn-danger[disabled]:focus,
fieldset[disabled] .btn-danger:focus,
.btn-danger.disabled.focus,
.btn-danger[disabled].focus,
fieldset[disabled] .btn-danger.focus {
  background-color: #d9534f;
  border-color: #d43f3a;
}
.btn-danger .badge {
  color: #d9534f;
  background-color: #fff;
}
.btn-link {
  color: #337ab7;
  font-weight: normal;
  border-radius: 0;
}
.btn-link,
.btn-link:active,
.btn-link.active,
.btn-link[disabled],
fieldset[disabled] .btn-link {
  background-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-link,
.btn-link:hover,
.btn-link:focus,
.btn-link:active {
  border-color: transparent;
}
.btn-link:hover,
.btn-link:focus {
  color: #23527c;
  text-decoration: underline;
  background-color: transparent;
}
.btn-link[disabled]:hover,
fieldset[disabled] .btn-link:hover,
.btn-link[disabled]:focus,
fieldset[disabled] .btn-link:focus {
  color: #777777;
  text-decoration: none;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 10px 16px;
  font-size: 17px;
  line-height: 1.3333333;
  border-radius: 3px;
}
.btn-sm,
.btn-group-sm > .btn {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
}
.btn-xs,
.btn-group-xs > .btn {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
}
.btn-block {
  display: block;
  width: 100%;
}
.btn-block + .btn-block {
  margin-top: 5px;
}
input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}
.fade {
  opacity: 0;
  -webkit-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}
.fade.in {
  opacity: 1;
}
.collapse {
  display: none;
}
.collapse.in {
  display: block;
}
tr.collapse.in {
  display: table-row;
}
tbody.collapse.in {
  display: table-row-group;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-property: height, visibility;
  transition-property: height, visibility;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}
.caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-top: 4px solid \9;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
.dropup,
.dropdown {
  position: relative;
}
.dropdown-toggle:focus {
  outline: 0;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 13px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}
.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}
.dropdown-menu .divider {
  height: 1px;
  margin: 8px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333333;
  white-space: nowrap;
}
.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  text-decoration: none;
  color: #262626;
  background-color: #f5f5f5;
}
.dropdown-menu > .active > a,
.dropdown-menu > .active > a:hover,
.dropdown-menu > .active > a:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  background-color: #337ab7;
}
.dropdown-menu > .disabled > a,
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  color: #777777;
}
.dropdown-menu > .disabled > a:hover,
.dropdown-menu > .disabled > a:focus {
  text-decoration: none;
  background-color: transparent;
  background-image: none;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);
  cursor: not-allowed;
}
.open > .dropdown-menu {
  display: block;
}
.open > a {
  outline: 0;
}
.dropdown-menu-right {
  left: auto;
  right: 0;
}
.dropdown-menu-left {
  left: 0;
  right: auto;
}
.dropdown-header {
  display: block;
  padding: 3px 20px;
  font-size: 12px;
  line-height: 1.42857143;
  color: #777777;
  white-space: nowrap;
}
.dropdown-backdrop {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 990;
}
.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}
.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  border-top: 0;
  border-bottom: 4px dashed;
  border-bottom: 4px solid \9;
  content: "";
}
.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 2px;
}
@media (min-width: 541px) {
  .navbar-right .dropdown-menu {
    left: auto;
    right: 0;
  }
  .navbar-right .dropdown-menu-left {
    left: 0;
    right: auto;
  }
}
.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.btn-group > .btn,
.btn-group-vertical > .btn {
  position: relative;
  float: left;
}
.btn-group > .btn:hover,
.btn-group-vertical > .btn:hover,
.btn-group > .btn:focus,
.btn-group-vertical > .btn:focus,
.btn-group > .btn:active,
.btn-group-vertical > .btn:active,
.btn-group > .btn.active,
.btn-group-vertical > .btn.active {
  z-index: 2;
}
.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
  margin-left: -1px;
}
.btn-toolbar {
  margin-left: -5px;
}
.btn-toolbar .btn,
.btn-toolbar .btn-group,
.btn-toolbar .input-group {
  float: left;
}
.btn-toolbar > .btn,
.btn-toolbar > .btn-group,
.btn-toolbar > .input-group {
  margin-left: 5px;
}
.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0;
}
.btn-group > .btn:first-child {
  margin-left: 0;
}
.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.btn-group > .btn-group {
  float: left;
}
.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}
.btn-group > .btn + .dropdown-toggle {
  padding-left: 8px;
  padding-right: 8px;
}
.btn-group > .btn-lg + .dropdown-toggle {
  padding-left: 12px;
  padding-right: 12px;
}
.btn-group.open .dropdown-toggle {
  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn-group.open .dropdown-toggle.btn-link {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn .caret {
  margin-left: 0;
}
.btn-lg .caret {
  border-width: 5px 5px 0;
  border-bottom-width: 0;
}
.dropup .btn-lg .caret {
  border-width: 0 5px 5px;
}
.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group,
.btn-group-vertical > .btn-group > .btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%;
}
.btn-group-vertical > .btn-group > .btn {
  float: none;
}
.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0;
}
.btn-group-vertical > .btn:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.btn-group-vertical > .btn:first-child:not(:last-child) {
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn:last-child:not(:first-child) {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
}
.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0;
}
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate;
}
.btn-group-justified > .btn,
.btn-group-justified > .btn-group {
  float: none;
  display: table-cell;
  width: 1%;
}
.btn-group-justified > .btn-group .btn {
  width: 100%;
}
.btn-group-justified > .btn-group .dropdown-menu {
  left: auto;
}
[data-toggle="buttons"] > .btn input[type="radio"],
[data-toggle="buttons"] > .btn-group > .btn input[type="radio"],
[data-toggle="buttons"] > .btn input[type="checkbox"],
[data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.input-group {
  position: relative;
  display: table;
  border-collapse: separate;
}
.input-group[class*="col-"] {
  float: none;
  padding-left: 0;
  padding-right: 0;
}
.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  width: 100%;
  margin-bottom: 0;
}
.input-group .form-control:focus {
  z-index: 3;
}
.input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn {
  height: 45px;
  padding: 10px 16px;
  font-size: 17px;
  line-height: 1.3333333;
  border-radius: 3px;
}
select.input-group-lg > .form-control,
select.input-group-lg > .input-group-addon,
select.input-group-lg > .input-group-btn > .btn {
  height: 45px;
  line-height: 45px;
}
textarea.input-group-lg > .form-control,
textarea.input-group-lg > .input-group-addon,
textarea.input-group-lg > .input-group-btn > .btn,
select[multiple].input-group-lg > .form-control,
select[multiple].input-group-lg > .input-group-addon,
select[multiple].input-group-lg > .input-group-btn > .btn {
  height: auto;
}
.input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
}
select.input-group-sm > .form-control,
select.input-group-sm > .input-group-addon,
select.input-group-sm > .input-group-btn > .btn {
  height: 30px;
  line-height: 30px;
}
textarea.input-group-sm > .form-control,
textarea.input-group-sm > .input-group-addon,
textarea.input-group-sm > .input-group-btn > .btn,
select[multiple].input-group-sm > .form-control,
select[multiple].input-group-sm > .input-group-addon,
select[multiple].input-group-sm > .input-group-btn > .btn {
  height: auto;
}
.input-group-addon,
.input-group-btn,
.input-group .form-control {
  display: table-cell;
}
.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0;
}
.input-group-addon,
.input-group-btn {
  width: 1%;
  white-space: nowrap;
  vertical-align: middle;
}
.input-group-addon {
  padding: 6px 12px;
  font-size: 13px;
  font-weight: normal;
  line-height: 1;
  color: #555555;
  text-align: center;
  background-color: #eeeeee;
  border: 1px solid #ccc;
  border-radius: 2px;
}
.input-group-addon.input-sm {
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 1px;
}
.input-group-addon.input-lg {
  padding: 10px 16px;
  font-size: 17px;
  border-radius: 3px;
}
.input-group-addon input[type="radio"],
.input-group-addon input[type="checkbox"] {
  margin-top: 0;
}
.input-group .form-control:first-child,
.input-group-addon:first-child,
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group > .btn,
.input-group-btn:first-child > .dropdown-toggle,
.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.input-group-addon:first-child {
  border-right: 0;
}
.input-group .form-control:last-child,
.input-group-addon:last-child,
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group > .btn,
.input-group-btn:last-child > .dropdown-toggle,
.input-group-btn:first-child > .btn:not(:first-child),
.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.input-group-addon:last-child {
  border-left: 0;
}
.input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap;
}
.input-group-btn > .btn {
  position: relative;
}
.input-group-btn > .btn + .btn {
  margin-left: -1px;
}
.input-group-btn > .btn:hover,
.input-group-btn > .btn:focus,
.input-group-btn > .btn:active {
  z-index: 2;
}
.input-group-btn:first-child > .btn,
.input-group-btn:first-child > .btn-group {
  margin-right: -1px;
}
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
  z-index: 2;
  margin-left: -1px;
}
.nav {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.nav > li {
  position: relative;
  display: block;
}
.nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}
.nav > li > a:hover,
.nav > li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.nav > li.disabled > a {
  color: #777777;
}
.nav > li.disabled > a:hover,
.nav > li.disabled > a:focus {
  color: #777777;
  text-decoration: none;
  background-color: transparent;
  cursor: not-allowed;
}
.nav .open > a,
.nav .open > a:hover,
.nav .open > a:focus {
  background-color: #eeeeee;
  border-color: #337ab7;
}
.nav .nav-divider {
  height: 1px;
  margin: 8px 0;
  overflow: hidden;
  background-color: #e5e5e5;
}
.nav > li > a > img {
  max-width: none;
}
.nav-tabs {
  border-bottom: 1px solid #ddd;
}
.nav-tabs > li {
  float: left;
  margin-bottom: -1px;
}
.nav-tabs > li > a {
  margin-right: 2px;
  line-height: 1.42857143;
  border: 1px solid transparent;
  border-radius: 2px 2px 0 0;
}
.nav-tabs > li > a:hover {
  border-color: #eeeeee #eeeeee #ddd;
}
.nav-tabs > li.active > a,
.nav-tabs > li.active > a:hover,
.nav-tabs > li.active > a:focus {
  color: #555555;
  background-color: #fff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
  cursor: default;
}
.nav-tabs.nav-justified {
  width: 100%;
  border-bottom: 0;
}
.nav-tabs.nav-justified > li {
  float: none;
}
.nav-tabs.nav-justified > li > a {
  text-align: center;
  margin-bottom: 5px;
}
.nav-tabs.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-tabs.nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs.nav-justified > li > a {
  margin-right: 0;
  border-radius: 2px;
}
.nav-tabs.nav-justified > .active > a,
.nav-tabs.nav-justified > .active > a:hover,
.nav-tabs.nav-justified > .active > a:focus {
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs.nav-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 2px 2px 0 0;
  }
  .nav-tabs.nav-justified > .active > a,
  .nav-tabs.nav-justified > .active > a:hover,
  .nav-tabs.nav-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.nav-pills > li {
  float: left;
}
.nav-pills > li > a {
  border-radius: 2px;
}
.nav-pills > li + li {
  margin-left: 2px;
}
.nav-pills > li.active > a,
.nav-pills > li.active > a:hover,
.nav-pills > li.active > a:focus {
  color: #fff;
  background-color: #337ab7;
}
.nav-stacked > li {
  float: none;
}
.nav-stacked > li + li {
  margin-top: 2px;
  margin-left: 0;
}
.nav-justified {
  width: 100%;
}
.nav-justified > li {
  float: none;
}
.nav-justified > li > a {
  text-align: center;
  margin-bottom: 5px;
}
.nav-justified > .dropdown .dropdown-menu {
  top: auto;
  left: auto;
}
@media (min-width: 768px) {
  .nav-justified > li {
    display: table-cell;
    width: 1%;
  }
  .nav-justified > li > a {
    margin-bottom: 0;
  }
}
.nav-tabs-justified {
  border-bottom: 0;
}
.nav-tabs-justified > li > a {
  margin-right: 0;
  border-radius: 2px;
}
.nav-tabs-justified > .active > a,
.nav-tabs-justified > .active > a:hover,
.nav-tabs-justified > .active > a:focus {
  border: 1px solid #ddd;
}
@media (min-width: 768px) {
  .nav-tabs-justified > li > a {
    border-bottom: 1px solid #ddd;
    border-radius: 2px 2px 0 0;
  }
  .nav-tabs-justified > .active > a,
  .nav-tabs-justified > .active > a:hover,
  .nav-tabs-justified > .active > a:focus {
    border-bottom-color: #fff;
  }
}
.tab-content > .tab-pane {
  display: none;
}
.tab-content > .active {
  display: block;
}
.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.navbar {
  position: relative;
  min-height: 30px;
  margin-bottom: 18px;
  border: 1px solid transparent;
}
@media (min-width: 541px) {
  .navbar {
    border-radius: 2px;
  }
}
@media (min-width: 541px) {
  .navbar-header {
    float: left;
  }
}
.navbar-collapse {
  overflow-x: visible;
  padding-right: 0px;
  padding-left: 0px;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  -webkit-overflow-scrolling: touch;
}
.navbar-collapse.in {
  overflow-y: auto;
}
@media (min-width: 541px) {
  .navbar-collapse {
    width: auto;
    border-top: 0;
    box-shadow: none;
  }
  .navbar-collapse.collapse {
    display: block !important;
    height: auto !important;
    padding-bottom: 0;
    overflow: visible !important;
  }
  .navbar-collapse.in {
    overflow-y: visible;
  }
  .navbar-fixed-top .navbar-collapse,
  .navbar-static-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    padding-left: 0;
    padding-right: 0;
  }
}
.navbar-fixed-top .navbar-collapse,
.navbar-fixed-bottom .navbar-collapse {
  max-height: 340px;
}
@media (max-device-width: 540px) and (orientation: landscape) {
  .navbar-fixed-top .navbar-collapse,
  .navbar-fixed-bottom .navbar-collapse {
    max-height: 200px;
  }
}
.container > .navbar-header,
.container-fluid > .navbar-header,
.container > .navbar-collapse,
.container-fluid > .navbar-collapse {
  margin-right: 0px;
  margin-left: 0px;
}
@media (min-width: 541px) {
  .container > .navbar-header,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container-fluid > .navbar-collapse {
    margin-right: 0;
    margin-left: 0;
  }
}
.navbar-static-top {
  z-index: 1000;
  border-width: 0 0 1px;
}
@media (min-width: 541px) {
  .navbar-static-top {
    border-radius: 0;
  }
}
.navbar-fixed-top,
.navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}
@media (min-width: 541px) {
  .navbar-fixed-top,
  .navbar-fixed-bottom {
    border-radius: 0;
  }
}
.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}
.navbar-fixed-bottom {
  bottom: 0;
  margin-bottom: 0;
  border-width: 1px 0 0;
}
.navbar-brand {
  float: left;
  padding: 6px 0px;
  font-size: 17px;
  line-height: 18px;
  height: 30px;
}
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
}
.navbar-brand > img {
  display: block;
}
@media (min-width: 541px) {
  .navbar > .container .navbar-brand,
  .navbar > .container-fluid .navbar-brand {
    margin-left: 0px;
  }
}
.navbar-toggle {
  position: relative;
  float: right;
  margin-right: 0px;
  padding: 9px 10px;
  margin-top: -2px;
  margin-bottom: -2px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 2px;
}
.navbar-toggle:focus {
  outline: 0;
}
.navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}
.navbar-toggle .icon-bar + .icon-bar {
  margin-top: 4px;
}
@media (min-width: 541px) {
  .navbar-toggle {
    display: none;
  }
}
.navbar-nav {
  margin: 3px 0px;
}
.navbar-nav > li > a {
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 18px;
}
@media (max-width: 540px) {
  .navbar-nav .open .dropdown-menu {
    position: static;
    float: none;
    width: auto;
    margin-top: 0;
    background-color: transparent;
    border: 0;
    box-shadow: none;
  }
  .navbar-nav .open .dropdown-menu > li > a,
  .navbar-nav .open .dropdown-menu .dropdown-header {
    padding: 5px 15px 5px 25px;
  }
  .navbar-nav .open .dropdown-menu > li > a {
    line-height: 18px;
  }
  .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-nav .open .dropdown-menu > li > a:focus {
    background-image: none;
  }
}
@media (min-width: 541px) {
  .navbar-nav {
    float: left;
    margin: 0;
  }
  .navbar-nav > li {
    float: left;
  }
  .navbar-nav > li > a {
    padding-top: 6px;
    padding-bottom: 6px;
  }
}
.navbar-form {
  margin-left: 0px;
  margin-right: 0px;
  padding: 10px 0px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);
  margin-top: -1px;
  margin-bottom: -1px;
}
@media (min-width: 768px) {
  .navbar-form .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }
  .navbar-form .form-control-static {
    display: inline-block;
  }
  .navbar-form .input-group {
    display: inline-table;
    vertical-align: middle;
  }
  .navbar-form .input-group .input-group-addon,
  .navbar-form .input-group .input-group-btn,
  .navbar-form .input-group .form-control {
    width: auto;
  }
  .navbar-form .input-group > .form-control {
    width: 100%;
  }
  .navbar-form .control-label {
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio,
  .navbar-form .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle;
  }
  .navbar-form .radio label,
  .navbar-form .checkbox label {
    padding-left: 0;
  }
  .navbar-form .radio input[type="radio"],
  .navbar-form .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0;
  }
  .navbar-form .has-feedback .form-control-feedback {
    top: 0;
  }
}
@media (max-width: 540px) {
  .navbar-form .form-group {
    margin-bottom: 5px;
  }
  .navbar-form .form-group:last-child {
    margin-bottom: 0;
  }
}
@media (min-width: 541px) {
  .navbar-form {
    width: auto;
    border: 0;
    margin-left: 0;
    margin-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}
.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  margin-bottom: 0;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.navbar-btn {
  margin-top: -1px;
  margin-bottom: -1px;
}
.navbar-btn.btn-sm {
  margin-top: 0px;
  margin-bottom: 0px;
}
.navbar-btn.btn-xs {
  margin-top: 4px;
  margin-bottom: 4px;
}
.navbar-text {
  margin-top: 6px;
  margin-bottom: 6px;
}
@media (min-width: 541px) {
  .navbar-text {
    float: left;
    margin-left: 0px;
    margin-right: 0px;
  }
}
@media (min-width: 541px) {
  .navbar-left {
    float: left !important;
    float: left;
  }
  .navbar-right {
    float: right !important;
    float: right;
    margin-right: 0px;
  }
  .navbar-right ~ .navbar-right {
    margin-right: 0;
  }
}
.navbar-default {
  background-color: #f8f8f8;
  border-color: #e7e7e7;
}
.navbar-default .navbar-brand {
  color: #777;
}
.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}
.navbar-default .navbar-text {
  color: #777;
}
.navbar-default .navbar-nav > li > a {
  color: #777;
}
.navbar-default .navbar-nav > li > a:hover,
.navbar-default .navbar-nav > li > a:focus {
  color: #333;
  background-color: transparent;
}
.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:hover,
.navbar-default .navbar-nav > .active > a:focus {
  color: #555;
  background-color: #e7e7e7;
}
.navbar-default .navbar-nav > .disabled > a,
.navbar-default .navbar-nav > .disabled > a:hover,
.navbar-default .navbar-nav > .disabled > a:focus {
  color: #ccc;
  background-color: transparent;
}
.navbar-default .navbar-toggle {
  border-color: #ddd;
}
.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}
.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}
.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}
.navbar-default .navbar-nav > .open > a,
.navbar-default .navbar-nav > .open > a:hover,
.navbar-default .navbar-nav > .open > a:focus {
  background-color: #e7e7e7;
  color: #555;
}
@media (max-width: 540px) {
  .navbar-default .navbar-nav .open .dropdown-menu > li > a {
    color: #777;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #333;
    background-color: transparent;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #555;
    background-color: #e7e7e7;
  }
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
  }
}
.navbar-default .navbar-link {
  color: #777;
}
.navbar-default .navbar-link:hover {
  color: #333;
}
.navbar-default .btn-link {
  color: #777;
}
.navbar-default .btn-link:hover,
.navbar-default .btn-link:focus {
  color: #333;
}
.navbar-default .btn-link[disabled]:hover,
fieldset[disabled] .navbar-default .btn-link:hover,
.navbar-default .btn-link[disabled]:focus,
fieldset[disabled] .navbar-default .btn-link:focus {
  color: #ccc;
}
.navbar-inverse {
  background-color: #222;
  border-color: #080808;
}
.navbar-inverse .navbar-brand {
  color: #9d9d9d;
}
.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-text {
  color: #9d9d9d;
}
.navbar-inverse .navbar-nav > li > a {
  color: #9d9d9d;
}
.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus {
  color: #fff;
  background-color: transparent;
}
.navbar-inverse .navbar-nav > .active > a,
.navbar-inverse .navbar-nav > .active > a:hover,
.navbar-inverse .navbar-nav > .active > a:focus {
  color: #fff;
  background-color: #080808;
}
.navbar-inverse .navbar-nav > .disabled > a,
.navbar-inverse .navbar-nav > .disabled > a:hover,
.navbar-inverse .navbar-nav > .disabled > a:focus {
  color: #444;
  background-color: transparent;
}
.navbar-inverse .navbar-toggle {
  border-color: #333;
}
.navbar-inverse .navbar-toggle:hover,
.navbar-inverse .navbar-toggle:focus {
  background-color: #333;
}
.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #fff;
}
.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #101010;
}
.navbar-inverse .navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  background-color: #080808;
  color: #fff;
}
@media (max-width: 540px) {
  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {
    border-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {
    color: #9d9d9d;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {
    color: #fff;
    background-color: transparent;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {
    color: #fff;
    background-color: #080808;
  }
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,
  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {
    color: #444;
    background-color: transparent;
  }
}
.navbar-inverse .navbar-link {
  color: #9d9d9d;
}
.navbar-inverse .navbar-link:hover {
  color: #fff;
}
.navbar-inverse .btn-link {
  color: #9d9d9d;
}
.navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link:focus {
  color: #fff;
}
.navbar-inverse .btn-link[disabled]:hover,
fieldset[disabled] .navbar-inverse .btn-link:hover,
.navbar-inverse .btn-link[disabled]:focus,
fieldset[disabled] .navbar-inverse .btn-link:focus {
  color: #444;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 18px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 2px;
}
.breadcrumb > li {
  display: inline-block;
}
.breadcrumb > li + li:before {
  content: "/\00a0";
  padding: 0 5px;
  color: #5e5e5e;
}
.breadcrumb > .active {
  color: #777777;
}
.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 18px 0;
  border-radius: 2px;
}
.pagination > li {
  display: inline;
}
.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  line-height: 1.42857143;
  text-decoration: none;
  color: #337ab7;
  background-color: #fff;
  border: 1px solid #ddd;
  margin-left: -1px;
}
.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
}
.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
}
.pagination > li > a:hover,
.pagination > li > span:hover,
.pagination > li > a:focus,
.pagination > li > span:focus {
  z-index: 2;
  color: #23527c;
  background-color: #eeeeee;
  border-color: #ddd;
}
.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 3;
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
  cursor: default;
}
.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #777777;
  background-color: #fff;
  border-color: #ddd;
  cursor: not-allowed;
}
.pagination-lg > li > a,
.pagination-lg > li > span {
  padding: 10px 16px;
  font-size: 17px;
  line-height: 1.3333333;
}
.pagination-lg > li:first-child > a,
.pagination-lg > li:first-child > span {
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
}
.pagination-lg > li:last-child > a,
.pagination-lg > li:last-child > span {
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
}
.pagination-sm > li > a,
.pagination-sm > li > span {
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
}
.pagination-sm > li:first-child > a,
.pagination-sm > li:first-child > span {
  border-bottom-left-radius: 1px;
  border-top-left-radius: 1px;
}
.pagination-sm > li:last-child > a,
.pagination-sm > li:last-child > span {
  border-bottom-right-radius: 1px;
  border-top-right-radius: 1px;
}
.pager {
  padding-left: 0;
  margin: 18px 0;
  list-style: none;
  text-align: center;
}
.pager li {
  display: inline;
}
.pager li > a,
.pager li > span {
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
}
.pager li > a:hover,
.pager li > a:focus {
  text-decoration: none;
  background-color: #eeeeee;
}
.pager .next > a,
.pager .next > span {
  float: right;
}
.pager .previous > a,
.pager .previous > span {
  float: left;
}
.pager .disabled > a,
.pager .disabled > a:hover,
.pager .disabled > a:focus,
.pager .disabled > span {
  color: #777777;
  background-color: #fff;
  cursor: not-allowed;
}
.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}
a.label:hover,
a.label:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
.label:empty {
  display: none;
}
.btn .label {
  position: relative;
  top: -1px;
}
.label-default {
  background-color: #777777;
}
.label-default[href]:hover,
.label-default[href]:focus {
  background-color: #5e5e5e;
}
.label-primary {
  background-color: #337ab7;
}
.label-primary[href]:hover,
.label-primary[href]:focus {
  background-color: #286090;
}
.label-success {
  background-color: #5cb85c;
}
.label-success[href]:hover,
.label-success[href]:focus {
  background-color: #449d44;
}
.label-info {
  background-color: #5bc0de;
}
.label-info[href]:hover,
.label-info[href]:focus {
  background-color: #31b0d5;
}
.label-warning {
  background-color: #f0ad4e;
}
.label-warning[href]:hover,
.label-warning[href]:focus {
  background-color: #ec971f;
}
.label-danger {
  background-color: #d9534f;
}
.label-danger[href]:hover,
.label-danger[href]:focus {
  background-color: #c9302c;
}
.badge {
  display: inline-block;
  min-width: 10px;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  line-height: 1;
  vertical-align: middle;
  white-space: nowrap;
  text-align: center;
  background-color: #777777;
  border-radius: 10px;
}
.badge:empty {
  display: none;
}
.btn .badge {
  position: relative;
  top: -1px;
}
.btn-xs .badge,
.btn-group-xs > .btn .badge {
  top: 0;
  padding: 1px 5px;
}
a.badge:hover,
a.badge:focus {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
.list-group-item.active > .badge,
.nav-pills > .active > a > .badge {
  color: #337ab7;
  background-color: #fff;
}
.list-group-item > .badge {
  float: right;
}
.list-group-item > .badge + .badge {
  margin-right: 5px;
}
.nav-pills > li > a > .badge {
  margin-left: 3px;
}
.jumbotron {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  color: inherit;
  background-color: #eeeeee;
}
.jumbotron h1,
.jumbotron .h1 {
  color: inherit;
}
.jumbotron p {
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 200;
}
.jumbotron > hr {
  border-top-color: #d5d5d5;
}
.container .jumbotron,
.container-fluid .jumbotron {
  border-radius: 3px;
  padding-left: 0px;
  padding-right: 0px;
}
.jumbotron .container {
  max-width: 100%;
}
@media screen and (min-width: 768px) {
  .jumbotron {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .container .jumbotron,
  .container-fluid .jumbotron {
    padding-left: 60px;
    padding-right: 60px;
  }
  .jumbotron h1,
  .jumbotron .h1 {
    font-size: 59px;
  }
}
.thumbnail {
  display: block;
  padding: 4px;
  margin-bottom: 18px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  -webkit-transition: border 0.2s ease-in-out;
  -o-transition: border 0.2s ease-in-out;
  transition: border 0.2s ease-in-out;
}
.thumbnail > img,
.thumbnail a > img {
  margin-left: auto;
  margin-right: auto;
}
a.thumbnail:hover,
a.thumbnail:focus,
a.thumbnail.active {
  border-color: #337ab7;
}
.thumbnail .caption {
  padding: 9px;
  color: #000;
}
.alert {
  padding: 15px;
  margin-bottom: 18px;
  border: 1px solid transparent;
  border-radius: 2px;
}
.alert h4 {
  margin-top: 0;
  color: inherit;
}
.alert .alert-link {
  font-weight: bold;
}
.alert > p,
.alert > ul {
  margin-bottom: 0;
}
.alert > p + p {
  margin-top: 5px;
}
.alert-dismissable,
.alert-dismissible {
  padding-right: 35px;
}
.alert-dismissable .close,
.alert-dismissible .close {
  position: relative;
  top: -2px;
  right: -21px;
  color: inherit;
}
.alert-success {
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #3c763d;
}
.alert-success hr {
  border-top-color: #c9e2b3;
}
.alert-success .alert-link {
  color: #2b542c;
}
.alert-info {
  background-color: #d9edf7;
  border-color: #bce8f1;
  color: #31708f;
}
.alert-info hr {
  border-top-color: #a6e1ec;
}
.alert-info .alert-link {
  color: #245269;
}
.alert-warning {
  background-color: #fcf8e3;
  border-color: #faebcc;
  color: #8a6d3b;
}
.alert-warning hr {
  border-top-color: #f7e1b5;
}
.alert-warning .alert-link {
  color: #66512c;
}
.alert-danger {
  background-color: #f2dede;
  border-color: #ebccd1;
  color: #a94442;
}
.alert-danger hr {
  border-top-color: #e4b9c0;
}
.alert-danger .alert-link {
  color: #843534;
}
@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }
  to {
    background-position: 0 0;
  }
}
.progress {
  overflow: hidden;
  height: 18px;
  margin-bottom: 18px;
  background-color: #f5f5f5;
  border-radius: 2px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 18px;
  color: #fff;
  text-align: center;
  background-color: #337ab7;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
}
.progress-striped .progress-bar,
.progress-bar-striped {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 40px 40px;
}
.progress.active .progress-bar,
.progress-bar.active {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite;
}
.progress-bar-success {
  background-color: #5cb85c;
}
.progress-striped .progress-bar-success {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-info {
  background-color: #5bc0de;
}
.progress-striped .progress-bar-info {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-warning {
  background-color: #f0ad4e;
}
.progress-striped .progress-bar-warning {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.progress-bar-danger {
  background-color: #d9534f;
}
.progress-striped .progress-bar-danger {
  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
}
.media {
  margin-top: 15px;
}
.media:first-child {
  margin-top: 0;
}
.media,
.media-body {
  zoom: 1;
  overflow: hidden;
}
.media-body {
  width: 10000px;
}
.media-object {
  display: block;
}
.media-object.img-thumbnail {
  max-width: none;
}
.media-right,
.media > .pull-right {
  padding-left: 10px;
}
.media-left,
.media > .pull-left {
  padding-right: 10px;
}
.media-left,
.media-right,
.media-body {
  display: table-cell;
  vertical-align: top;
}
.media-middle {
  vertical-align: middle;
}
.media-bottom {
  vertical-align: bottom;
}
.media-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.media-list {
  padding-left: 0;
  list-style: none;
}
.list-group {
  margin-bottom: 20px;
  padding-left: 0;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
}
.list-group-item:first-child {
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
}
a.list-group-item,
button.list-group-item {
  color: #555;
}
a.list-group-item .list-group-item-heading,
button.list-group-item .list-group-item-heading {
  color: #333;
}
a.list-group-item:hover,
button.list-group-item:hover,
a.list-group-item:focus,
button.list-group-item:focus {
  text-decoration: none;
  color: #555;
  background-color: #f5f5f5;
}
button.list-group-item {
  width: 100%;
  text-align: left;
}
.list-group-item.disabled,
.list-group-item.disabled:hover,
.list-group-item.disabled:focus {
  background-color: #eeeeee;
  color: #777777;
  cursor: not-allowed;
}
.list-group-item.disabled .list-group-item-heading,
.list-group-item.disabled:hover .list-group-item-heading,
.list-group-item.disabled:focus .list-group-item-heading {
  color: inherit;
}
.list-group-item.disabled .list-group-item-text,
.list-group-item.disabled:hover .list-group-item-text,
.list-group-item.disabled:focus .list-group-item-text {
  color: #777777;
}
.list-group-item.active,
.list-group-item.active:hover,
.list-group-item.active:focus {
  z-index: 2;
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
.list-group-item.active .list-group-item-heading,
.list-group-item.active:hover .list-group-item-heading,
.list-group-item.active:focus .list-group-item-heading,
.list-group-item.active .list-group-item-heading > small,
.list-group-item.active:hover .list-group-item-heading > small,
.list-group-item.active:focus .list-group-item-heading > small,
.list-group-item.active .list-group-item-heading > .small,
.list-group-item.active:hover .list-group-item-heading > .small,
.list-group-item.active:focus .list-group-item-heading > .small {
  color: inherit;
}
.list-group-item.active .list-group-item-text,
.list-group-item.active:hover .list-group-item-text,
.list-group-item.active:focus .list-group-item-text {
  color: #c7ddef;
}
.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8;
}
a.list-group-item-success,
button.list-group-item-success {
  color: #3c763d;
}
a.list-group-item-success .list-group-item-heading,
button.list-group-item-success .list-group-item-heading {
  color: inherit;
}
a.list-group-item-success:hover,
button.list-group-item-success:hover,
a.list-group-item-success:focus,
button.list-group-item-success:focus {
  color: #3c763d;
  background-color: #d0e9c6;
}
a.list-group-item-success.active,
button.list-group-item-success.active,
a.list-group-item-success.active:hover,
button.list-group-item-success.active:hover,
a.list-group-item-success.active:focus,
button.list-group-item-success.active:focus {
  color: #fff;
  background-color: #3c763d;
  border-color: #3c763d;
}
.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7;
}
a.list-group-item-info,
button.list-group-item-info {
  color: #31708f;
}
a.list-group-item-info .list-group-item-heading,
button.list-group-item-info .list-group-item-heading {
  color: inherit;
}
a.list-group-item-info:hover,
button.list-group-item-info:hover,
a.list-group-item-info:focus,
button.list-group-item-info:focus {
  color: #31708f;
  background-color: #c4e3f3;
}
a.list-group-item-info.active,
button.list-group-item-info.active,
a.list-group-item-info.active:hover,
button.list-group-item-info.active:hover,
a.list-group-item-info.active:focus,
button.list-group-item-info.active:focus {
  color: #fff;
  background-color: #31708f;
  border-color: #31708f;
}
.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3;
}
a.list-group-item-warning,
button.list-group-item-warning {
  color: #8a6d3b;
}
a.list-group-item-warning .list-group-item-heading,
button.list-group-item-warning .list-group-item-heading {
  color: inherit;
}
a.list-group-item-warning:hover,
button.list-group-item-warning:hover,
a.list-group-item-warning:focus,
button.list-group-item-warning:focus {
  color: #8a6d3b;
  background-color: #faf2cc;
}
a.list-group-item-warning.active,
button.list-group-item-warning.active,
a.list-group-item-warning.active:hover,
button.list-group-item-warning.active:hover,
a.list-group-item-warning.active:focus,
button.list-group-item-warning.active:focus {
  color: #fff;
  background-color: #8a6d3b;
  border-color: #8a6d3b;
}
.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede;
}
a.list-group-item-danger,
button.list-group-item-danger {
  color: #a94442;
}
a.list-group-item-danger .list-group-item-heading,
button.list-group-item-danger .list-group-item-heading {
  color: inherit;
}
a.list-group-item-danger:hover,
button.list-group-item-danger:hover,
a.list-group-item-danger:focus,
button.list-group-item-danger:focus {
  color: #a94442;
  background-color: #ebcccc;
}
a.list-group-item-danger.active,
button.list-group-item-danger.active,
a.list-group-item-danger.active:hover,
button.list-group-item-danger.active:hover,
a.list-group-item-danger.active:focus,
button.list-group-item-danger.active:focus {
  color: #fff;
  background-color: #a94442;
  border-color: #a94442;
}
.list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.list-group-item-text {
  margin-bottom: 0;
  line-height: 1.3;
}
.panel {
  margin-bottom: 18px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.panel-body {
  padding: 15px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
}
.panel-heading > .dropdown .dropdown-toggle {
  color: inherit;
}
.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 15px;
  color: inherit;
}
.panel-title > a,
.panel-title > small,
.panel-title > .small,
.panel-title > small > a,
.panel-title > .small > a {
  color: inherit;
}
.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 1px;
  border-bottom-left-radius: 1px;
}
.panel > .list-group,
.panel > .panel-collapse > .list-group {
  margin-bottom: 0;
}
.panel > .list-group .list-group-item,
.panel > .panel-collapse > .list-group .list-group-item {
  border-width: 1px 0;
  border-radius: 0;
}
.panel > .list-group:first-child .list-group-item:first-child,
.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {
  border-top: 0;
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
}
.panel > .list-group:last-child .list-group-item:last-child,
.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {
  border-bottom: 0;
  border-bottom-right-radius: 1px;
  border-bottom-left-radius: 1px;
}
.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
}
.panel-heading + .list-group .list-group-item:first-child {
  border-top-width: 0;
}
.list-group + .panel-footer {
  border-top-width: 0;
}
.panel > .table,
.panel > .table-responsive > .table,
.panel > .panel-collapse > .table {
  margin-bottom: 0;
}
.panel > .table caption,
.panel > .table-responsive > .table caption,
.panel > .panel-collapse > .table caption {
  padding-left: 15px;
  padding-right: 15px;
}
.panel > .table:first-child,
.panel > .table-responsive:first-child > .table:first-child {
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
}
.panel > .table:first-child > thead:first-child > tr:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {
  border-top-left-radius: 1px;
}
.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,
.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,
.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,
.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {
  border-top-right-radius: 1px;
}
.panel > .table:last-child,
.panel > .table-responsive:last-child > .table:last-child {
  border-bottom-right-radius: 1px;
  border-bottom-left-radius: 1px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {
  border-bottom-left-radius: 1px;
}
.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,
.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,
.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,
.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {
  border-bottom-right-radius: 1px;
}
.panel > .panel-body + .table,
.panel > .panel-body + .table-responsive,
.panel > .table + .panel-body,
.panel > .table-responsive + .panel-body {
  border-top: 1px solid #ddd;
}
.panel > .table > tbody:first-child > tr:first-child th,
.panel > .table > tbody:first-child > tr:first-child td {
  border-top: 0;
}
.panel > .table-bordered,
.panel > .table-responsive > .table-bordered {
  border: 0;
}
.panel > .table-bordered > thead > tr > th:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,
.panel > .table-bordered > tbody > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,
.panel > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,
.panel > .table-bordered > thead > tr > td:first-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,
.panel > .table-bordered > tbody > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,
.panel > .table-bordered > tfoot > tr > td:first-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {
  border-left: 0;
}
.panel > .table-bordered > thead > tr > th:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,
.panel > .table-bordered > tbody > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,
.panel > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,
.panel > .table-bordered > thead > tr > td:last-child,
.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,
.panel > .table-bordered > tbody > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,
.panel > .table-bordered > tfoot > tr > td:last-child,
.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {
  border-right: 0;
}
.panel > .table-bordered > thead > tr:first-child > td,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,
.panel > .table-bordered > tbody > tr:first-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,
.panel > .table-bordered > thead > tr:first-child > th,
.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,
.panel > .table-bordered > tbody > tr:first-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {
  border-bottom: 0;
}
.panel > .table-bordered > tbody > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,
.panel > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,
.panel > .table-bordered > tbody > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,
.panel > .table-bordered > tfoot > tr:last-child > th,
.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {
  border-bottom: 0;
}
.panel > .table-responsive {
  border: 0;
  margin-bottom: 0;
}
.panel-group {
  margin-bottom: 18px;
}
.panel-group .panel {
  margin-bottom: 0;
  border-radius: 2px;
}
.panel-group .panel + .panel {
  margin-top: 5px;
}
.panel-group .panel-heading {
  border-bottom: 0;
}
.panel-group .panel-heading + .panel-collapse > .panel-body,
.panel-group .panel-heading + .panel-collapse > .list-group {
  border-top: 1px solid #ddd;
}
.panel-group .panel-footer {
  border-top: 0;
}
.panel-group .panel-footer + .panel-collapse .panel-body {
  border-bottom: 1px solid #ddd;
}
.panel-default {
  border-color: #ddd;
}
.panel-default > .panel-heading {
  color: #333333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ddd;
}
.panel-default > .panel-heading .badge {
  color: #f5f5f5;
  background-color: #333333;
}
.panel-default > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ddd;
}
.panel-primary {
  border-color: #337ab7;
}
.panel-primary > .panel-heading {
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
.panel-primary > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #337ab7;
}
.panel-primary > .panel-heading .badge {
  color: #337ab7;
  background-color: #fff;
}
.panel-primary > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #337ab7;
}
.panel-success {
  border-color: #d6e9c6;
}
.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-heading .badge {
  color: #dff0d8;
  background-color: #3c763d;
}
.panel-success > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #d6e9c6;
}
.panel-info {
  border-color: #bce8f1;
}
.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #bce8f1;
}
.panel-info > .panel-heading .badge {
  color: #d9edf7;
  background-color: #31708f;
}
.panel-info > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #bce8f1;
}
.panel-warning {
  border-color: #faebcc;
}
.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #faebcc;
}
.panel-warning > .panel-heading .badge {
  color: #fcf8e3;
  background-color: #8a6d3b;
}
.panel-warning > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #faebcc;
}
.panel-danger {
  border-color: #ebccd1;
}
.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-heading .badge {
  color: #f2dede;
  background-color: #a94442;
}
.panel-danger > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ebccd1;
}
.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden;
}
.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  border: 0;
}
.embed-responsive-16by9 {
  padding-bottom: 56.25%;
}
.embed-responsive-4by3 {
  padding-bottom: 75%;
}
.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 2px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}
.well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, 0.15);
}
.well-lg {
  padding: 24px;
  border-radius: 3px;
}
.well-sm {
  padding: 9px;
  border-radius: 1px;
}
.close {
  float: right;
  font-size: 19.5px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.2;
  filter: alpha(opacity=20);
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.5;
  filter: alpha(opacity=50);
}
button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}
.modal-open {
  overflow: hidden;
}
.modal {
  display: none;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  -webkit-overflow-scrolling: touch;
  outline: 0;
}
.modal.fade .modal-dialog {
  -webkit-transform: translate(0, -25%);
  -ms-transform: translate(0, -25%);
  -o-transform: translate(0, -25%);
  transform: translate(0, -25%);
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -moz-transition: -moz-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
}
.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
}
.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}
.modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background-clip: padding-box;
  outline: 0;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000;
}
.modal-backdrop.fade {
  opacity: 0;
  filter: alpha(opacity=0);
}
.modal-backdrop.in {
  opacity: 0.5;
  filter: alpha(opacity=50);
}
.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}
.modal-header .close {
  margin-top: -2px;
}
.modal-title {
  margin: 0;
  line-height: 1.42857143;
}
.modal-body {
  position: relative;
  padding: 15px;
}
.modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5;
}
.modal-footer .btn + .btn {
  margin-left: 5px;
  margin-bottom: 0;
}
.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}
.modal-footer .btn-block + .btn-block {
  margin-left: 0;
}
.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}
@media (min-width: 768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  .modal-sm {
    width: 300px;
  }
}
@media (min-width: 992px) {
  .modal-lg {
    width: 900px;
  }
}
.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: 12px;
  opacity: 0;
  filter: alpha(opacity=0);
}
.tooltip.in {
  opacity: 0.9;
  filter: alpha(opacity=90);
}
.tooltip.top {
  margin-top: -3px;
  padding: 5px 0;
}
.tooltip.right {
  margin-left: 3px;
  padding: 0 5px;
}
.tooltip.bottom {
  margin-top: 3px;
  padding: 5px 0;
}
.tooltip.left {
  margin-left: -3px;
  padding: 0 5px;
}
.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 2px;
}
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.tooltip.top .tooltip-arrow {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.top-left .tooltip-arrow {
  bottom: 0;
  right: 5px;
  margin-bottom: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.top-right .tooltip-arrow {
  bottom: 0;
  left: 5px;
  margin-bottom: -5px;
  border-width: 5px 5px 0;
  border-top-color: #000;
}
.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-width: 5px 5px 5px 0;
  border-right-color: #000;
}
.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-width: 5px 0 5px 5px;
  border-left-color: #000;
}
.tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-left .tooltip-arrow {
  top: 0;
  right: 5px;
  margin-top: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.tooltip.bottom-right .tooltip-arrow {
  top: 0;
  left: 5px;
  margin-top: -5px;
  border-width: 0 5px 5px;
  border-bottom-color: #000;
}
.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  max-width: 276px;
  padding: 1px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.42857143;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  font-size: 13px;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.popover.top {
  margin-top: -10px;
}
.popover.right {
  margin-left: 10px;
}
.popover.bottom {
  margin-top: 10px;
}
.popover.left {
  margin-left: -10px;
}
.popover-title {
  margin: 0;
  padding: 8px 14px;
  font-size: 13px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 2px 2px 0 0;
}
.popover-content {
  padding: 9px 14px;
}
.popover > .arrow,
.popover > .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.popover > .arrow {
  border-width: 11px;
}
.popover > .arrow:after {
  border-width: 10px;
  content: "";
}
.popover.top > .arrow {
  left: 50%;
  margin-left: -11px;
  border-bottom-width: 0;
  border-top-color: #999999;
  border-top-color: rgba(0, 0, 0, 0.25);
  bottom: -11px;
}
.popover.top > .arrow:after {
  content: " ";
  bottom: 1px;
  margin-left: -10px;
  border-bottom-width: 0;
  border-top-color: #fff;
}
.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-left-width: 0;
  border-right-color: #999999;
  border-right-color: rgba(0, 0, 0, 0.25);
}
.popover.right > .arrow:after {
  content: " ";
  left: 1px;
  bottom: -10px;
  border-left-width: 0;
  border-right-color: #fff;
}
.popover.bottom > .arrow {
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999999;
  border-bottom-color: rgba(0, 0, 0, 0.25);
  top: -11px;
}
.popover.bottom > .arrow:after {
  content: " ";
  top: 1px;
  margin-left: -10px;
  border-top-width: 0;
  border-bottom-color: #fff;
}
.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999999;
  border-left-color: rgba(0, 0, 0, 0.25);
}
.popover.left > .arrow:after {
  content: " ";
  right: 1px;
  border-right-width: 0;
  border-left-color: #fff;
  bottom: -10px;
}
.carousel {
  position: relative;
}
.carousel-inner {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.carousel-inner > .item {
  display: none;
  position: relative;
  -webkit-transition: 0.6s ease-in-out left;
  -o-transition: 0.6s ease-in-out left;
  transition: 0.6s ease-in-out left;
}
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  line-height: 1;
}
@media all and (transform-3d), (-webkit-transform-3d) {
  .carousel-inner > .item {
    -webkit-transition: -webkit-transform 0.6s ease-in-out;
    -moz-transition: -moz-transform 0.6s ease-in-out;
    -o-transition: -o-transform 0.6s ease-in-out;
    transition: transform 0.6s ease-in-out;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000px;
    -moz-perspective: 1000px;
    perspective: 1000px;
  }
  .carousel-inner > .item.next,
  .carousel-inner > .item.active.right {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    left: 0;
  }
  .carousel-inner > .item.prev,
  .carousel-inner > .item.active.left {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    left: 0;
  }
  .carousel-inner > .item.next.left,
  .carousel-inner > .item.prev.right,
  .carousel-inner > .item.active {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    left: 0;
  }
}
.carousel-inner > .active,
.carousel-inner > .next,
.carousel-inner > .prev {
  display: block;
}
.carousel-inner > .active {
  left: 0;
}
.carousel-inner > .next,
.carousel-inner > .prev {
  position: absolute;
  top: 0;
  width: 100%;
}
.carousel-inner > .next {
  left: 100%;
}
.carousel-inner > .prev {
  left: -100%;
}
.carousel-inner > .next.left,
.carousel-inner > .prev.right {
  left: 0;
}
.carousel-inner > .active.left {
  left: -100%;
}
.carousel-inner > .active.right {
  left: 100%;
}
.carousel-control {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 15%;
  opacity: 0.5;
  filter: alpha(opacity=50);
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0);
}
.carousel-control.left {
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
}
.carousel-control.right {
  left: auto;
  right: 0;
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
}
.carousel-control:hover,
.carousel-control:focus {
  outline: 0;
  color: #fff;
  text-decoration: none;
  opacity: 0.9;
  filter: alpha(opacity=90);
}
.carousel-control .icon-prev,
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-left,
.carousel-control .glyphicon-chevron-right {
  position: absolute;
  top: 50%;
  margin-top: -10px;
  z-index: 5;
  display: inline-block;
}
.carousel-control .icon-prev,
.carousel-control .glyphicon-chevron-left {
  left: 50%;
  margin-left: -10px;
}
.carousel-control .icon-next,
.carousel-control .glyphicon-chevron-right {
  right: 50%;
  margin-right: -10px;
}
.carousel-control .icon-prev,
.carousel-control .icon-next {
  width: 20px;
  height: 20px;
  line-height: 1;
  font-family: serif;
}
.carousel-control .icon-prev:before {
  content: '\2039';
}
.carousel-control .icon-next:before {
  content: '\203a';
}
.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 15;
  width: 60%;
  margin-left: -30%;
  padding-left: 0;
  list-style: none;
  text-align: center;
}
.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 1px;
  text-indent: -999px;
  border: 1px solid #fff;
  border-radius: 10px;
  cursor: pointer;
  background-color: #000 \9;
  background-color: rgba(0, 0, 0, 0);
}
.carousel-indicators .active {
  margin: 0;
  width: 12px;
  height: 12px;
  background-color: #fff;
}
.carousel-caption {
  position: absolute;
  left: 15%;
  right: 15%;
  bottom: 20px;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
}
.carousel-caption .btn {
  text-shadow: none;
}
@media screen and (min-width: 768px) {
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-prev,
  .carousel-control .icon-next {
    width: 30px;
    height: 30px;
    margin-top: -10px;
    font-size: 30px;
  }
  .carousel-control .glyphicon-chevron-left,
  .carousel-control .icon-prev {
    margin-left: -10px;
  }
  .carousel-control .glyphicon-chevron-right,
  .carousel-control .icon-next {
    margin-right: -10px;
  }
  .carousel-caption {
    left: 20%;
    right: 20%;
    padding-bottom: 30px;
  }
  .carousel-indicators {
    bottom: 20px;
  }
}
.clearfix:before,
.clearfix:after,
.dl-horizontal dd:before,
.dl-horizontal dd:after,
.container:before,
.container:after,
.container-fluid:before,
.container-fluid:after,
.row:before,
.row:after,
.form-horizontal .form-group:before,
.form-horizontal .form-group:after,
.btn-toolbar:before,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:before,
.btn-group-vertical > .btn-group:after,
.nav:before,
.nav:after,
.navbar:before,
.navbar:after,
.navbar-header:before,
.navbar-header:after,
.navbar-collapse:before,
.navbar-collapse:after,
.pager:before,
.pager:after,
.panel-body:before,
.panel-body:after,
.modal-header:before,
.modal-header:after,
.modal-footer:before,
.modal-footer:after,
.item_buttons:before,
.item_buttons:after {
  content: " ";
  display: table;
}
.clearfix:after,
.dl-horizontal dd:after,
.container:after,
.container-fluid:after,
.row:after,
.form-horizontal .form-group:after,
.btn-toolbar:after,
.btn-group-vertical > .btn-group:after,
.nav:after,
.navbar:after,
.navbar-header:after,
.navbar-collapse:after,
.pager:after,
.panel-body:after,
.modal-header:after,
.modal-footer:after,
.item_buttons:after {
  clear: both;
}
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.pull-right {
  float: right !important;
}
.pull-left {
  float: left !important;
}
.hide {
  display: none !important;
}
.show {
  display: block !important;
}
.invisible {
  visibility: hidden;
}
.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
.hidden {
  display: none !important;
}
.affix {
  position: fixed;
}
@-ms-viewport {
  width: device-width;
}
.visible-xs,
.visible-sm,
.visible-md,
.visible-lg {
  display: none !important;
}
.visible-xs-block,
.visible-xs-inline,
.visible-xs-inline-block,
.visible-sm-block,
.visible-sm-inline,
.visible-sm-inline-block,
.visible-md-block,
.visible-md-inline,
.visible-md-inline-block,
.visible-lg-block,
.visible-lg-inline,
.visible-lg-inline-block {
  display: none !important;
}
@media (max-width: 767px) {
  .visible-xs {
    display: block !important;
  }
  table.visible-xs {
    display: table !important;
  }
  tr.visible-xs {
    display: table-row !important;
  }
  th.visible-xs,
  td.visible-xs {
    display: table-cell !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-block {
    display: block !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-inline {
    display: inline !important;
  }
}
@media (max-width: 767px) {
  .visible-xs-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm {
    display: block !important;
  }
  table.visible-sm {
    display: table !important;
  }
  tr.visible-sm {
    display: table-row !important;
  }
  th.visible-sm,
  td.visible-sm {
    display: table-cell !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-block {
    display: block !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline {
    display: inline !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .visible-sm-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md {
    display: block !important;
  }
  table.visible-md {
    display: table !important;
  }
  tr.visible-md {
    display: table-row !important;
  }
  th.visible-md,
  td.visible-md {
    display: table-cell !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-block {
    display: block !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline {
    display: inline !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .visible-md-inline-block {
    display: inline-block !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg {
    display: block !important;
  }
  table.visible-lg {
    display: table !important;
  }
  tr.visible-lg {
    display: table-row !important;
  }
  th.visible-lg,
  td.visible-lg {
    display: table-cell !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-block {
    display: block !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-inline {
    display: inline !important;
  }
}
@media (min-width: 1200px) {
  .visible-lg-inline-block {
    display: inline-block !important;
  }
}
@media (max-width: 767px) {
  .hidden-xs {
    display: none !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .hidden-sm {
    display: none !important;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .hidden-md {
    display: none !important;
  }
}
@media (min-width: 1200px) {
  .hidden-lg {
    display: none !important;
  }
}
.visible-print {
  display: none !important;
}
@media print {
  .visible-print {
    display: block !important;
  }
  table.visible-print {
    display: table !important;
  }
  tr.visible-print {
    display: table-row !important;
  }
  th.visible-print,
  td.visible-print {
    display: table-cell !important;
  }
}
.visible-print-block {
  display: none !important;
}
@media print {
  .visible-print-block {
    display: block !important;
  }
}
.visible-print-inline {
  display: none !important;
}
@media print {
  .visible-print-inline {
    display: inline !important;
  }
}
.visible-print-inline-block {
  display: none !important;
}
@media print {
  .visible-print-inline-block {
    display: inline-block !important;
  }
}
@media print {
  .hidden-print {
    display: none !important;
  }
}
/*!
*
* Font Awesome
*
*/
/*!
 *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
 *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
 */
/* FONT PATH
 * -------------------------- */
@font-face {
  font-family: 'FontAwesome';
  src: url('../components/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0');
  src: url('../components/font-awesome/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('../components/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('../components/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('../components/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'), url('../components/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
  font-weight: normal;
  font-style: normal;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* makes the font 33% larger relative to the icon container */
.fa-lg {
  font-size: 1.33333333em;
  line-height: 0.75em;
  vertical-align: -15%;
}
.fa-2x {
  font-size: 2em;
}
.fa-3x {
  font-size: 3em;
}
.fa-4x {
  font-size: 4em;
}
.fa-5x {
  font-size: 5em;
}
.fa-fw {
  width: 1.28571429em;
  text-align: center;
}
.fa-ul {
  padding-left: 0;
  margin-left: 2.14285714em;
  list-style-type: none;
}
.fa-ul > li {
  position: relative;
}
.fa-li {
  position: absolute;
  left: -2.14285714em;
  width: 2.14285714em;
  top: 0.14285714em;
  text-align: center;
}
.fa-li.fa-lg {
  left: -1.85714286em;
}
.fa-border {
  padding: .2em .25em .15em;
  border: solid 0.08em #eee;
  border-radius: .1em;
}
.fa-pull-left {
  float: left;
}
.fa-pull-right {
  float: right;
}
.fa.fa-pull-left {
  margin-right: .3em;
}
.fa.fa-pull-right {
  margin-left: .3em;
}
/* Deprecated as of 4.4.0 */
.pull-right {
  float: right;
}
.pull-left {
  float: left;
}
.fa.pull-left {
  margin-right: .3em;
}
.fa.pull-right {
  margin-left: .3em;
}
.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
  animation: fa-spin 2s infinite linear;
}
.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
  animation: fa-spin 1s infinite steps(8);
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}
.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  transform: scale(1, -1);
}
:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical {
  filter: none;
}
.fa-stack {
  position: relative;
  display: inline-block;
  width: 2em;
  height: 2em;
  line-height: 2em;
  vertical-align: middle;
}
.fa-stack-1x,
.fa-stack-2x {
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
}
.fa-stack-1x {
  line-height: inherit;
}
.fa-stack-2x {
  font-size: 2em;
}
.fa-inverse {
  color: #fff;
}
/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
   readers do not read off random characters that represent icons */
.fa-glass:before {
  content: "\f000";
}
.fa-music:before {
  content: "\f001";
}
.fa-search:before {
  content: "\f002";
}
.fa-envelope-o:before {
  content: "\f003";
}
.fa-heart:before {
  content: "\f004";
}
.fa-star:before {
  content: "\f005";
}
.fa-star-o:before {
  content: "\f006";
}
.fa-user:before {
  content: "\f007";
}
.fa-film:before {
  content: "\f008";
}
.fa-th-large:before {
  content: "\f009";
}
.fa-th:before {
  content: "\f00a";
}
.fa-th-list:before {
  content: "\f00b";
}
.fa-check:before {
  content: "\f00c";
}
.fa-remove:before,
.fa-close:before,
.fa-times:before {
  content: "\f00d";
}
.fa-search-plus:before {
  content: "\f00e";
}
.fa-search-minus:before {
  content: "\f010";
}
.fa-power-off:before {
  content: "\f011";
}
.fa-signal:before {
  content: "\f012";
}
.fa-gear:before,
.fa-cog:before {
  content: "\f013";
}
.fa-trash-o:before {
  content: "\f014";
}
.fa-home:before {
  content: "\f015";
}
.fa-file-o:before {
  content: "\f016";
}
.fa-clock-o:before {
  content: "\f017";
}
.fa-road:before {
  content: "\f018";
}
.fa-download:before {
  content: "\f019";
}
.fa-arrow-circle-o-down:before {
  content: "\f01a";
}
.fa-arrow-circle-o-up:before {
  content: "\f01b";
}
.fa-inbox:before {
  content: "\f01c";
}
.fa-play-circle-o:before {
  content: "\f01d";
}
.fa-rotate-right:before,
.fa-repeat:before {
  content: "\f01e";
}
.fa-refresh:before {
  content: "\f021";
}
.fa-list-alt:before {
  content: "\f022";
}
.fa-lock:before {
  content: "\f023";
}
.fa-flag:before {
  content: "\f024";
}
.fa-headphones:before {
  content: "\f025";
}
.fa-volume-off:before {
  content: "\f026";
}
.fa-volume-down:before {
  content: "\f027";
}
.fa-volume-up:before {
  content: "\f028";
}
.fa-qrcode:before {
  content: "\f029";
}
.fa-barcode:before {
  content: "\f02a";
}
.fa-tag:before {
  content: "\f02b";
}
.fa-tags:before {
  content: "\f02c";
}
.fa-book:before {
  content: "\f02d";
}
.fa-bookmark:before {
  content: "\f02e";
}
.fa-print:before {
  content: "\f02f";
}
.fa-camera:before {
  content: "\f030";
}
.fa-font:before {
  content: "\f031";
}
.fa-bold:before {
  content: "\f032";
}
.fa-italic:before {
  content: "\f033";
}
.fa-text-height:before {
  content: "\f034";
}
.fa-text-width:before {
  content: "\f035";
}
.fa-align-left:before {
  content: "\f036";
}
.fa-align-center:before {
  content: "\f037";
}
.fa-align-right:before {
  content: "\f038";
}
.fa-align-justify:before {
  content: "\f039";
}
.fa-list:before {
  content: "\f03a";
}
.fa-dedent:before,
.fa-outdent:before {
  content: "\f03b";
}
.fa-indent:before {
  content: "\f03c";
}
.fa-video-camera:before {
  content: "\f03d";
}
.fa-photo:before,
.fa-image:before,
.fa-picture-o:before {
  content: "\f03e";
}
.fa-pencil:before {
  content: "\f040";
}
.fa-map-marker:before {
  content: "\f041";
}
.fa-adjust:before {
  content: "\f042";
}
.fa-tint:before {
  content: "\f043";
}
.fa-edit:before,
.fa-pencil-square-o:before {
  content: "\f044";
}
.fa-share-square-o:before {
  content: "\f045";
}
.fa-check-square-o:before {
  content: "\f046";
}
.fa-arrows:before {
  content: "\f047";
}
.fa-step-backward:before {
  content: "\f048";
}
.fa-fast-backward:before {
  content: "\f049";
}
.fa-backward:before {
  content: "\f04a";
}
.fa-play:before {
  content: "\f04b";
}
.fa-pause:before {
  content: "\f04c";
}
.fa-stop:before {
  content: "\f04d";
}
.fa-forward:before {
  content: "\f04e";
}
.fa-fast-forward:before {
  content: "\f050";
}
.fa-step-forward:before {
  content: "\f051";
}
.fa-eject:before {
  content: "\f052";
}
.fa-chevron-left:before {
  content: "\f053";
}
.fa-chevron-right:before {
  content: "\f054";
}
.fa-plus-circle:before {
  content: "\f055";
}
.fa-minus-circle:before {
  content: "\f056";
}
.fa-times-circle:before {
  content: "\f057";
}
.fa-check-circle:before {
  content: "\f058";
}
.fa-question-circle:before {
  content: "\f059";
}
.fa-info-circle:before {
  content: "\f05a";
}
.fa-crosshairs:before {
  content: "\f05b";
}
.fa-times-circle-o:before {
  content: "\f05c";
}
.fa-check-circle-o:before {
  content: "\f05d";
}
.fa-ban:before {
  content: "\f05e";
}
.fa-arrow-left:before {
  content: "\f060";
}
.fa-arrow-right:before {
  content: "\f061";
}
.fa-arrow-up:before {
  content: "\f062";
}
.fa-arrow-down:before {
  content: "\f063";
}
.fa-mail-forward:before,
.fa-share:before {
  content: "\f064";
}
.fa-expand:before {
  content: "\f065";
}
.fa-compress:before {
  content: "\f066";
}
.fa-plus:before {
  content: "\f067";
}
.fa-minus:before {
  content: "\f068";
}
.fa-asterisk:before {
  content: "\f069";
}
.fa-exclamation-circle:before {
  content: "\f06a";
}
.fa-gift:before {
  content: "\f06b";
}
.fa-leaf:before {
  content: "\f06c";
}
.fa-fire:before {
  content: "\f06d";
}
.fa-eye:before {
  content: "\f06e";
}
.fa-eye-slash:before {
  content: "\f070";
}
.fa-warning:before,
.fa-exclamation-triangle:before {
  content: "\f071";
}
.fa-plane:before {
  content: "\f072";
}
.fa-calendar:before {
  content: "\f073";
}
.fa-random:before {
  content: "\f074";
}
.fa-comment:before {
  content: "\f075";
}
.fa-magnet:before {
  content: "\f076";
}
.fa-chevron-up:before {
  content: "\f077";
}
.fa-chevron-down:before {
  content: "\f078";
}
.fa-retweet:before {
  content: "\f079";
}
.fa-shopping-cart:before {
  content: "\f07a";
}
.fa-folder:before {
  content: "\f07b";
}
.fa-folder-open:before {
  content: "\f07c";
}
.fa-arrows-v:before {
  content: "\f07d";
}
.fa-arrows-h:before {
  content: "\f07e";
}
.fa-bar-chart-o:before,
.fa-bar-chart:before {
  content: "\f080";
}
.fa-twitter-square:before {
  content: "\f081";
}
.fa-facebook-square:before {
  content: "\f082";
}
.fa-camera-retro:before {
  content: "\f083";
}
.fa-key:before {
  content: "\f084";
}
.fa-gears:before,
.fa-cogs:before {
  content: "\f085";
}
.fa-comments:before {
  content: "\f086";
}
.fa-thumbs-o-up:before {
  content: "\f087";
}
.fa-thumbs-o-down:before {
  content: "\f088";
}
.fa-star-half:before {
  content: "\f089";
}
.fa-heart-o:before {
  content: "\f08a";
}
.fa-sign-out:before {
  content: "\f08b";
}
.fa-linkedin-square:before {
  content: "\f08c";
}
.fa-thumb-tack:before {
  content: "\f08d";
}
.fa-external-link:before {
  content: "\f08e";
}
.fa-sign-in:before {
  content: "\f090";
}
.fa-trophy:before {
  content: "\f091";
}
.fa-github-square:before {
  content: "\f092";
}
.fa-upload:before {
  content: "\f093";
}
.fa-lemon-o:before {
  content: "\f094";
}
.fa-phone:before {
  content: "\f095";
}
.fa-square-o:before {
  content: "\f096";
}
.fa-bookmark-o:before {
  content: "\f097";
}
.fa-phone-square:before {
  content: "\f098";
}
.fa-twitter:before {
  content: "\f099";
}
.fa-facebook-f:before,
.fa-facebook:before {
  content: "\f09a";
}
.fa-github:before {
  content: "\f09b";
}
.fa-unlock:before {
  content: "\f09c";
}
.fa-credit-card:before {
  content: "\f09d";
}
.fa-feed:before,
.fa-rss:before {
  content: "\f09e";
}
.fa-hdd-o:before {
  content: "\f0a0";
}
.fa-bullhorn:before {
  content: "\f0a1";
}
.fa-bell:before {
  content: "\f0f3";
}
.fa-certificate:before {
  content: "\f0a3";
}
.fa-hand-o-right:before {
  content: "\f0a4";
}
.fa-hand-o-left:before {
  content: "\f0a5";
}
.fa-hand-o-up:before {
  content: "\f0a6";
}
.fa-hand-o-down:before {
  content: "\f0a7";
}
.fa-arrow-circle-left:before {
  content: "\f0a8";
}
.fa-arrow-circle-right:before {
  content: "\f0a9";
}
.fa-arrow-circle-up:before {
  content: "\f0aa";
}
.fa-arrow-circle-down:before {
  content: "\f0ab";
}
.fa-globe:before {
  content: "\f0ac";
}
.fa-wrench:before {
  content: "\f0ad";
}
.fa-tasks:before {
  content: "\f0ae";
}
.fa-filter:before {
  content: "\f0b0";
}
.fa-briefcase:before {
  content: "\f0b1";
}
.fa-arrows-alt:before {
  content: "\f0b2";
}
.fa-group:before,
.fa-users:before {
  content: "\f0c0";
}
.fa-chain:before,
.fa-link:before {
  content: "\f0c1";
}
.fa-cloud:before {
  content: "\f0c2";
}
.fa-flask:before {
  content: "\f0c3";
}
.fa-cut:before,
.fa-scissors:before {
  content: "\f0c4";
}
.fa-copy:before,
.fa-files-o:before {
  content: "\f0c5";
}
.fa-paperclip:before {
  content: "\f0c6";
}
.fa-save:before,
.fa-floppy-o:before {
  content: "\f0c7";
}
.fa-square:before {
  content: "\f0c8";
}
.fa-navicon:before,
.fa-reorder:before,
.fa-bars:before {
  content: "\f0c9";
}
.fa-list-ul:before {
  content: "\f0ca";
}
.fa-list-ol:before {
  content: "\f0cb";
}
.fa-strikethrough:before {
  content: "\f0cc";
}
.fa-underline:before {
  content: "\f0cd";
}
.fa-table:before {
  content: "\f0ce";
}
.fa-magic:before {
  content: "\f0d0";
}
.fa-truck:before {
  content: "\f0d1";
}
.fa-pinterest:before {
  content: "\f0d2";
}
.fa-pinterest-square:before {
  content: "\f0d3";
}
.fa-google-plus-square:before {
  content: "\f0d4";
}
.fa-google-plus:before {
  content: "\f0d5";
}
.fa-money:before {
  content: "\f0d6";
}
.fa-caret-down:before {
  content: "\f0d7";
}
.fa-caret-up:before {
  content: "\f0d8";
}
.fa-caret-left:before {
  content: "\f0d9";
}
.fa-caret-right:before {
  content: "\f0da";
}
.fa-columns:before {
  content: "\f0db";
}
.fa-unsorted:before,
.fa-sort:before {
  content: "\f0dc";
}
.fa-sort-down:before,
.fa-sort-desc:before {
  content: "\f0dd";
}
.fa-sort-up:before,
.fa-sort-asc:before {
  content: "\f0de";
}
.fa-envelope:before {
  content: "\f0e0";
}
.fa-linkedin:before {
  content: "\f0e1";
}
.fa-rotate-left:before,
.fa-undo:before {
  content: "\f0e2";
}
.fa-legal:before,
.fa-gavel:before {
  content: "\f0e3";
}
.fa-dashboard:before,
.fa-tachometer:before {
  content: "\f0e4";
}
.fa-comment-o:before {
  content: "\f0e5";
}
.fa-comments-o:before {
  content: "\f0e6";
}
.fa-flash:before,
.fa-bolt:before {
  content: "\f0e7";
}
.fa-sitemap:before {
  content: "\f0e8";
}
.fa-umbrella:before {
  content: "\f0e9";
}
.fa-paste:before,
.fa-clipboard:before {
  content: "\f0ea";
}
.fa-lightbulb-o:before {
  content: "\f0eb";
}
.fa-exchange:before {
  content: "\f0ec";
}
.fa-cloud-download:before {
  content: "\f0ed";
}
.fa-cloud-upload:before {
  content: "\f0ee";
}
.fa-user-md:before {
  content: "\f0f0";
}
.fa-stethoscope:before {
  content: "\f0f1";
}
.fa-suitcase:before {
  content: "\f0f2";
}
.fa-bell-o:before {
  content: "\f0a2";
}
.fa-coffee:before {
  content: "\f0f4";
}
.fa-cutlery:before {
  content: "\f0f5";
}
.fa-file-text-o:before {
  content: "\f0f6";
}
.fa-building-o:before {
  content: "\f0f7";
}
.fa-hospital-o:before {
  content: "\f0f8";
}
.fa-ambulance:before {
  content: "\f0f9";
}
.fa-medkit:before {
  content: "\f0fa";
}
.fa-fighter-jet:before {
  content: "\f0fb";
}
.fa-beer:before {
  content: "\f0fc";
}
.fa-h-square:before {
  content: "\f0fd";
}
.fa-plus-square:before {
  content: "\f0fe";
}
.fa-angle-double-left:before {
  content: "\f100";
}
.fa-angle-double-right:before {
  content: "\f101";
}
.fa-angle-double-up:before {
  content: "\f102";
}
.fa-angle-double-down:before {
  content: "\f103";
}
.fa-angle-left:before {
  content: "\f104";
}
.fa-angle-right:before {
  content: "\f105";
}
.fa-angle-up:before {
  content: "\f106";
}
.fa-angle-down:before {
  content: "\f107";
}
.fa-desktop:before {
  content: "\f108";
}
.fa-laptop:before {
  content: "\f109";
}
.fa-tablet:before {
  content: "\f10a";
}
.fa-mobile-phone:before,
.fa-mobile:before {
  content: "\f10b";
}
.fa-circle-o:before {
  content: "\f10c";
}
.fa-quote-left:before {
  content: "\f10d";
}
.fa-quote-right:before {
  content: "\f10e";
}
.fa-spinner:before {
  content: "\f110";
}
.fa-circle:before {
  content: "\f111";
}
.fa-mail-reply:before,
.fa-reply:before {
  content: "\f112";
}
.fa-github-alt:before {
  content: "\f113";
}
.fa-folder-o:before {
  content: "\f114";
}
.fa-folder-open-o:before {
  content: "\f115";
}
.fa-smile-o:before {
  content: "\f118";
}
.fa-frown-o:before {
  content: "\f119";
}
.fa-meh-o:before {
  content: "\f11a";
}
.fa-gamepad:before {
  content: "\f11b";
}
.fa-keyboard-o:before {
  content: "\f11c";
}
.fa-flag-o:before {
  content: "\f11d";
}
.fa-flag-checkered:before {
  content: "\f11e";
}
.fa-terminal:before {
  content: "\f120";
}
.fa-code:before {
  content: "\f121";
}
.fa-mail-reply-all:before,
.fa-reply-all:before {
  content: "\f122";
}
.fa-star-half-empty:before,
.fa-star-half-full:before,
.fa-star-half-o:before {
  content: "\f123";
}
.fa-location-arrow:before {
  content: "\f124";
}
.fa-crop:before {
  content: "\f125";
}
.fa-code-fork:before {
  content: "\f126";
}
.fa-unlink:before,
.fa-chain-broken:before {
  content: "\f127";
}
.fa-question:before {
  content: "\f128";
}
.fa-info:before {
  content: "\f129";
}
.fa-exclamation:before {
  content: "\f12a";
}
.fa-superscript:before {
  content: "\f12b";
}
.fa-subscript:before {
  content: "\f12c";
}
.fa-eraser:before {
  content: "\f12d";
}
.fa-puzzle-piece:before {
  content: "\f12e";
}
.fa-microphone:before {
  content: "\f130";
}
.fa-microphone-slash:before {
  content: "\f131";
}
.fa-shield:before {
  content: "\f132";
}
.fa-calendar-o:before {
  content: "\f133";
}
.fa-fire-extinguisher:before {
  content: "\f134";
}
.fa-rocket:before {
  content: "\f135";
}
.fa-maxcdn:before {
  content: "\f136";
}
.fa-chevron-circle-left:before {
  content: "\f137";
}
.fa-chevron-circle-right:before {
  content: "\f138";
}
.fa-chevron-circle-up:before {
  content: "\f139";
}
.fa-chevron-circle-down:before {
  content: "\f13a";
}
.fa-html5:before {
  content: "\f13b";
}
.fa-css3:before {
  content: "\f13c";
}
.fa-anchor:before {
  content: "\f13d";
}
.fa-unlock-alt:before {
  content: "\f13e";
}
.fa-bullseye:before {
  content: "\f140";
}
.fa-ellipsis-h:before {
  content: "\f141";
}
.fa-ellipsis-v:before {
  content: "\f142";
}
.fa-rss-square:before {
  content: "\f143";
}
.fa-play-circle:before {
  content: "\f144";
}
.fa-ticket:before {
  content: "\f145";
}
.fa-minus-square:before {
  content: "\f146";
}
.fa-minus-square-o:before {
  content: "\f147";
}
.fa-level-up:before {
  content: "\f148";
}
.fa-level-down:before {
  content: "\f149";
}
.fa-check-square:before {
  content: "\f14a";
}
.fa-pencil-square:before {
  content: "\f14b";
}
.fa-external-link-square:before {
  content: "\f14c";
}
.fa-share-square:before {
  content: "\f14d";
}
.fa-compass:before {
  content: "\f14e";
}
.fa-toggle-down:before,
.fa-caret-square-o-down:before {
  content: "\f150";
}
.fa-toggle-up:before,
.fa-caret-square-o-up:before {
  content: "\f151";
}
.fa-toggle-right:before,
.fa-caret-square-o-right:before {
  content: "\f152";
}
.fa-euro:before,
.fa-eur:before {
  content: "\f153";
}
.fa-gbp:before {
  content: "\f154";
}
.fa-dollar:before,
.fa-usd:before {
  content: "\f155";
}
.fa-rupee:before,
.fa-inr:before {
  content: "\f156";
}
.fa-cny:before,
.fa-rmb:before,
.fa-yen:before,
.fa-jpy:before {
  content: "\f157";
}
.fa-ruble:before,
.fa-rouble:before,
.fa-rub:before {
  content: "\f158";
}
.fa-won:before,
.fa-krw:before {
  content: "\f159";
}
.fa-bitcoin:before,
.fa-btc:before {
  content: "\f15a";
}
.fa-file:before {
  content: "\f15b";
}
.fa-file-text:before {
  content: "\f15c";
}
.fa-sort-alpha-asc:before {
  content: "\f15d";
}
.fa-sort-alpha-desc:before {
  content: "\f15e";
}
.fa-sort-amount-asc:before {
  content: "\f160";
}
.fa-sort-amount-desc:before {
  content: "\f161";
}
.fa-sort-numeric-asc:before {
  content: "\f162";
}
.fa-sort-numeric-desc:before {
  content: "\f163";
}
.fa-thumbs-up:before {
  content: "\f164";
}
.fa-thumbs-down:before {
  content: "\f165";
}
.fa-youtube-square:before {
  content: "\f166";
}
.fa-youtube:before {
  content: "\f167";
}
.fa-xing:before {
  content: "\f168";
}
.fa-xing-square:before {
  content: "\f169";
}
.fa-youtube-play:before {
  content: "\f16a";
}
.fa-dropbox:before {
  content: "\f16b";
}
.fa-stack-overflow:before {
  content: "\f16c";
}
.fa-instagram:before {
  content: "\f16d";
}
.fa-flickr:before {
  content: "\f16e";
}
.fa-adn:before {
  content: "\f170";
}
.fa-bitbucket:before {
  content: "\f171";
}
.fa-bitbucket-square:before {
  content: "\f172";
}
.fa-tumblr:before {
  content: "\f173";
}
.fa-tumblr-square:before {
  content: "\f174";
}
.fa-long-arrow-down:before {
  content: "\f175";
}
.fa-long-arrow-up:before {
  content: "\f176";
}
.fa-long-arrow-left:before {
  content: "\f177";
}
.fa-long-arrow-right:before {
  content: "\f178";
}
.fa-apple:before {
  content: "\f179";
}
.fa-windows:before {
  content: "\f17a";
}
.fa-android:before {
  content: "\f17b";
}
.fa-linux:before {
  content: "\f17c";
}
.fa-dribbble:before {
  content: "\f17d";
}
.fa-skype:before {
  content: "\f17e";
}
.fa-foursquare:before {
  content: "\f180";
}
.fa-trello:before {
  content: "\f181";
}
.fa-female:before {
  content: "\f182";
}
.fa-male:before {
  content: "\f183";
}
.fa-gittip:before,
.fa-gratipay:before {
  content: "\f184";
}
.fa-sun-o:before {
  content: "\f185";
}
.fa-moon-o:before {
  content: "\f186";
}
.fa-archive:before {
  content: "\f187";
}
.fa-bug:before {
  content: "\f188";
}
.fa-vk:before {
  content: "\f189";
}
.fa-weibo:before {
  content: "\f18a";
}
.fa-renren:before {
  content: "\f18b";
}
.fa-pagelines:before {
  content: "\f18c";
}
.fa-stack-exchange:before {
  content: "\f18d";
}
.fa-arrow-circle-o-right:before {
  content: "\f18e";
}
.fa-arrow-circle-o-left:before {
  content: "\f190";
}
.fa-toggle-left:before,
.fa-caret-square-o-left:before {
  content: "\f191";
}
.fa-dot-circle-o:before {
  content: "\f192";
}
.fa-wheelchair:before {
  content: "\f193";
}
.fa-vimeo-square:before {
  content: "\f194";
}
.fa-turkish-lira:before,
.fa-try:before {
  content: "\f195";
}
.fa-plus-square-o:before {
  content: "\f196";
}
.fa-space-shuttle:before {
  content: "\f197";
}
.fa-slack:before {
  content: "\f198";
}
.fa-envelope-square:before {
  content: "\f199";
}
.fa-wordpress:before {
  content: "\f19a";
}
.fa-openid:before {
  content: "\f19b";
}
.fa-institution:before,
.fa-bank:before,
.fa-university:before {
  content: "\f19c";
}
.fa-mortar-board:before,
.fa-graduation-cap:before {
  content: "\f19d";
}
.fa-yahoo:before {
  content: "\f19e";
}
.fa-google:before {
  content: "\f1a0";
}
.fa-reddit:before {
  content: "\f1a1";
}
.fa-reddit-square:before {
  content: "\f1a2";
}
.fa-stumbleupon-circle:before {
  content: "\f1a3";
}
.fa-stumbleupon:before {
  content: "\f1a4";
}
.fa-delicious:before {
  content: "\f1a5";
}
.fa-digg:before {
  content: "\f1a6";
}
.fa-pied-piper-pp:before {
  content: "\f1a7";
}
.fa-pied-piper-alt:before {
  content: "\f1a8";
}
.fa-drupal:before {
  content: "\f1a9";
}
.fa-joomla:before {
  content: "\f1aa";
}
.fa-language:before {
  content: "\f1ab";
}
.fa-fax:before {
  content: "\f1ac";
}
.fa-building:before {
  content: "\f1ad";
}
.fa-child:before {
  content: "\f1ae";
}
.fa-paw:before {
  content: "\f1b0";
}
.fa-spoon:before {
  content: "\f1b1";
}
.fa-cube:before {
  content: "\f1b2";
}
.fa-cubes:before {
  content: "\f1b3";
}
.fa-behance:before {
  content: "\f1b4";
}
.fa-behance-square:before {
  content: "\f1b5";
}
.fa-steam:before {
  content: "\f1b6";
}
.fa-steam-square:before {
  content: "\f1b7";
}
.fa-recycle:before {
  content: "\f1b8";
}
.fa-automobile:before,
.fa-car:before {
  content: "\f1b9";
}
.fa-cab:before,
.fa-taxi:before {
  content: "\f1ba";
}
.fa-tree:before {
  content: "\f1bb";
}
.fa-spotify:before {
  content: "\f1bc";
}
.fa-deviantart:before {
  content: "\f1bd";
}
.fa-soundcloud:before {
  content: "\f1be";
}
.fa-database:before {
  content: "\f1c0";
}
.fa-file-pdf-o:before {
  content: "\f1c1";
}
.fa-file-word-o:before {
  content: "\f1c2";
}
.fa-file-excel-o:before {
  content: "\f1c3";
}
.fa-file-powerpoint-o:before {
  content: "\f1c4";
}
.fa-file-photo-o:before,
.fa-file-picture-o:before,
.fa-file-image-o:before {
  content: "\f1c5";
}
.fa-file-zip-o:before,
.fa-file-archive-o:before {
  content: "\f1c6";
}
.fa-file-sound-o:before,
.fa-file-audio-o:before {
  content: "\f1c7";
}
.fa-file-movie-o:before,
.fa-file-video-o:before {
  content: "\f1c8";
}
.fa-file-code-o:before {
  content: "\f1c9";
}
.fa-vine:before {
  content: "\f1ca";
}
.fa-codepen:before {
  content: "\f1cb";
}
.fa-jsfiddle:before {
  content: "\f1cc";
}
.fa-life-bouy:before,
.fa-life-buoy:before,
.fa-life-saver:before,
.fa-support:before,
.fa-life-ring:before {
  content: "\f1cd";
}
.fa-circle-o-notch:before {
  content: "\f1ce";
}
.fa-ra:before,
.fa-resistance:before,
.fa-rebel:before {
  content: "\f1d0";
}
.fa-ge:before,
.fa-empire:before {
  content: "\f1d1";
}
.fa-git-square:before {
  content: "\f1d2";
}
.fa-git:before {
  content: "\f1d3";
}
.fa-y-combinator-square:before,
.fa-yc-square:before,
.fa-hacker-news:before {
  content: "\f1d4";
}
.fa-tencent-weibo:before {
  content: "\f1d5";
}
.fa-qq:before {
  content: "\f1d6";
}
.fa-wechat:before,
.fa-weixin:before {
  content: "\f1d7";
}
.fa-send:before,
.fa-paper-plane:before {
  content: "\f1d8";
}
.fa-send-o:before,
.fa-paper-plane-o:before {
  content: "\f1d9";
}
.fa-history:before {
  content: "\f1da";
}
.fa-circle-thin:before {
  content: "\f1db";
}
.fa-header:before {
  content: "\f1dc";
}
.fa-paragraph:before {
  content: "\f1dd";
}
.fa-sliders:before {
  content: "\f1de";
}
.fa-share-alt:before {
  content: "\f1e0";
}
.fa-share-alt-square:before {
  content: "\f1e1";
}
.fa-bomb:before {
  content: "\f1e2";
}
.fa-soccer-ball-o:before,
.fa-futbol-o:before {
  content: "\f1e3";
}
.fa-tty:before {
  content: "\f1e4";
}
.fa-binoculars:before {
  content: "\f1e5";
}
.fa-plug:before {
  content: "\f1e6";
}
.fa-slideshare:before {
  content: "\f1e7";
}
.fa-twitch:before {
  content: "\f1e8";
}
.fa-yelp:before {
  content: "\f1e9";
}
.fa-newspaper-o:before {
  content: "\f1ea";
}
.fa-wifi:before {
  content: "\f1eb";
}
.fa-calculator:before {
  content: "\f1ec";
}
.fa-paypal:before {
  content: "\f1ed";
}
.fa-google-wallet:before {
  content: "\f1ee";
}
.fa-cc-visa:before {
  content: "\f1f0";
}
.fa-cc-mastercard:before {
  content: "\f1f1";
}
.fa-cc-discover:before {
  content: "\f1f2";
}
.fa-cc-amex:before {
  content: "\f1f3";
}
.fa-cc-paypal:before {
  content: "\f1f4";
}
.fa-cc-stripe:before {
  content: "\f1f5";
}
.fa-bell-slash:before {
  content: "\f1f6";
}
.fa-bell-slash-o:before {
  content: "\f1f7";
}
.fa-trash:before {
  content: "\f1f8";
}
.fa-copyright:before {
  content: "\f1f9";
}
.fa-at:before {
  content: "\f1fa";
}
.fa-eyedropper:before {
  content: "\f1fb";
}
.fa-paint-brush:before {
  content: "\f1fc";
}
.fa-birthday-cake:before {
  content: "\f1fd";
}
.fa-area-chart:before {
  content: "\f1fe";
}
.fa-pie-chart:before {
  content: "\f200";
}
.fa-line-chart:before {
  content: "\f201";
}
.fa-lastfm:before {
  content: "\f202";
}
.fa-lastfm-square:before {
  content: "\f203";
}
.fa-toggle-off:before {
  content: "\f204";
}
.fa-toggle-on:before {
  content: "\f205";
}
.fa-bicycle:before {
  content: "\f206";
}
.fa-bus:before {
  content: "\f207";
}
.fa-ioxhost:before {
  content: "\f208";
}
.fa-angellist:before {
  content: "\f209";
}
.fa-cc:before {
  content: "\f20a";
}
.fa-shekel:before,
.fa-sheqel:before,
.fa-ils:before {
  content: "\f20b";
}
.fa-meanpath:before {
  content: "\f20c";
}
.fa-buysellads:before {
  content: "\f20d";
}
.fa-connectdevelop:before {
  content: "\f20e";
}
.fa-dashcube:before {
  content: "\f210";
}
.fa-forumbee:before {
  content: "\f211";
}
.fa-leanpub:before {
  content: "\f212";
}
.fa-sellsy:before {
  content: "\f213";
}
.fa-shirtsinbulk:before {
  content: "\f214";
}
.fa-simplybuilt:before {
  content: "\f215";
}
.fa-skyatlas:before {
  content: "\f216";
}
.fa-cart-plus:before {
  content: "\f217";
}
.fa-cart-arrow-down:before {
  content: "\f218";
}
.fa-diamond:before {
  content: "\f219";
}
.fa-ship:before {
  content: "\f21a";
}
.fa-user-secret:before {
  content: "\f21b";
}
.fa-motorcycle:before {
  content: "\f21c";
}
.fa-street-view:before {
  content: "\f21d";
}
.fa-heartbeat:before {
  content: "\f21e";
}
.fa-venus:before {
  content: "\f221";
}
.fa-mars:before {
  content: "\f222";
}
.fa-mercury:before {
  content: "\f223";
}
.fa-intersex:before,
.fa-transgender:before {
  content: "\f224";
}
.fa-transgender-alt:before {
  content: "\f225";
}
.fa-venus-double:before {
  content: "\f226";
}
.fa-mars-double:before {
  content: "\f227";
}
.fa-venus-mars:before {
  content: "\f228";
}
.fa-mars-stroke:before {
  content: "\f229";
}
.fa-mars-stroke-v:before {
  content: "\f22a";
}
.fa-mars-stroke-h:before {
  content: "\f22b";
}
.fa-neuter:before {
  content: "\f22c";
}
.fa-genderless:before {
  content: "\f22d";
}
.fa-facebook-official:before {
  content: "\f230";
}
.fa-pinterest-p:before {
  content: "\f231";
}
.fa-whatsapp:before {
  content: "\f232";
}
.fa-server:before {
  content: "\f233";
}
.fa-user-plus:before {
  content: "\f234";
}
.fa-user-times:before {
  content: "\f235";
}
.fa-hotel:before,
.fa-bed:before {
  content: "\f236";
}
.fa-viacoin:before {
  content: "\f237";
}
.fa-train:before {
  content: "\f238";
}
.fa-subway:before {
  content: "\f239";
}
.fa-medium:before {
  content: "\f23a";
}
.fa-yc:before,
.fa-y-combinator:before {
  content: "\f23b";
}
.fa-optin-monster:before {
  content: "\f23c";
}
.fa-opencart:before {
  content: "\f23d";
}
.fa-expeditedssl:before {
  content: "\f23e";
}
.fa-battery-4:before,
.fa-battery:before,
.fa-battery-full:before {
  content: "\f240";
}
.fa-battery-3:before,
.fa-battery-three-quarters:before {
  content: "\f241";
}
.fa-battery-2:before,
.fa-battery-half:before {
  content: "\f242";
}
.fa-battery-1:before,
.fa-battery-quarter:before {
  content: "\f243";
}
.fa-battery-0:before,
.fa-battery-empty:before {
  content: "\f244";
}
.fa-mouse-pointer:before {
  content: "\f245";
}
.fa-i-cursor:before {
  content: "\f246";
}
.fa-object-group:before {
  content: "\f247";
}
.fa-object-ungroup:before {
  content: "\f248";
}
.fa-sticky-note:before {
  content: "\f249";
}
.fa-sticky-note-o:before {
  content: "\f24a";
}
.fa-cc-jcb:before {
  content: "\f24b";
}
.fa-cc-diners-club:before {
  content: "\f24c";
}
.fa-clone:before {
  content: "\f24d";
}
.fa-balance-scale:before {
  content: "\f24e";
}
.fa-hourglass-o:before {
  content: "\f250";
}
.fa-hourglass-1:before,
.fa-hourglass-start:before {
  content: "\f251";
}
.fa-hourglass-2:before,
.fa-hourglass-half:before {
  content: "\f252";
}
.fa-hourglass-3:before,
.fa-hourglass-end:before {
  content: "\f253";
}
.fa-hourglass:before {
  content: "\f254";
}
.fa-hand-grab-o:before,
.fa-hand-rock-o:before {
  content: "\f255";
}
.fa-hand-stop-o:before,
.fa-hand-paper-o:before {
  content: "\f256";
}
.fa-hand-scissors-o:before {
  content: "\f257";
}
.fa-hand-lizard-o:before {
  content: "\f258";
}
.fa-hand-spock-o:before {
  content: "\f259";
}
.fa-hand-pointer-o:before {
  content: "\f25a";
}
.fa-hand-peace-o:before {
  content: "\f25b";
}
.fa-trademark:before {
  content: "\f25c";
}
.fa-registered:before {
  content: "\f25d";
}
.fa-creative-commons:before {
  content: "\f25e";
}
.fa-gg:before {
  content: "\f260";
}
.fa-gg-circle:before {
  content: "\f261";
}
.fa-tripadvisor:before {
  content: "\f262";
}
.fa-odnoklassniki:before {
  content: "\f263";
}
.fa-odnoklassniki-square:before {
  content: "\f264";
}
.fa-get-pocket:before {
  content: "\f265";
}
.fa-wikipedia-w:before {
  content: "\f266";
}
.fa-safari:before {
  content: "\f267";
}
.fa-chrome:before {
  content: "\f268";
}
.fa-firefox:before {
  content: "\f269";
}
.fa-opera:before {
  content: "\f26a";
}
.fa-internet-explorer:before {
  content: "\f26b";
}
.fa-tv:before,
.fa-television:before {
  content: "\f26c";
}
.fa-contao:before {
  content: "\f26d";
}
.fa-500px:before {
  content: "\f26e";
}
.fa-amazon:before {
  content: "\f270";
}
.fa-calendar-plus-o:before {
  content: "\f271";
}
.fa-calendar-minus-o:before {
  content: "\f272";
}
.fa-calendar-times-o:before {
  content: "\f273";
}
.fa-calendar-check-o:before {
  content: "\f274";
}
.fa-industry:before {
  content: "\f275";
}
.fa-map-pin:before {
  content: "\f276";
}
.fa-map-signs:before {
  content: "\f277";
}
.fa-map-o:before {
  content: "\f278";
}
.fa-map:before {
  content: "\f279";
}
.fa-commenting:before {
  content: "\f27a";
}
.fa-commenting-o:before {
  content: "\f27b";
}
.fa-houzz:before {
  content: "\f27c";
}
.fa-vimeo:before {
  content: "\f27d";
}
.fa-black-tie:before {
  content: "\f27e";
}
.fa-fonticons:before {
  content: "\f280";
}
.fa-reddit-alien:before {
  content: "\f281";
}
.fa-edge:before {
  content: "\f282";
}
.fa-credit-card-alt:before {
  content: "\f283";
}
.fa-codiepie:before {
  content: "\f284";
}
.fa-modx:before {
  content: "\f285";
}
.fa-fort-awesome:before {
  content: "\f286";
}
.fa-usb:before {
  content: "\f287";
}
.fa-product-hunt:before {
  content: "\f288";
}
.fa-mixcloud:before {
  content: "\f289";
}
.fa-scribd:before {
  content: "\f28a";
}
.fa-pause-circle:before {
  content: "\f28b";
}
.fa-pause-circle-o:before {
  content: "\f28c";
}
.fa-stop-circle:before {
  content: "\f28d";
}
.fa-stop-circle-o:before {
  content: "\f28e";
}
.fa-shopping-bag:before {
  content: "\f290";
}
.fa-shopping-basket:before {
  content: "\f291";
}
.fa-hashtag:before {
  content: "\f292";
}
.fa-bluetooth:before {
  content: "\f293";
}
.fa-bluetooth-b:before {
  content: "\f294";
}
.fa-percent:before {
  content: "\f295";
}
.fa-gitlab:before {
  content: "\f296";
}
.fa-wpbeginner:before {
  content: "\f297";
}
.fa-wpforms:before {
  content: "\f298";
}
.fa-envira:before {
  content: "\f299";
}
.fa-universal-access:before {
  content: "\f29a";
}
.fa-wheelchair-alt:before {
  content: "\f29b";
}
.fa-question-circle-o:before {
  content: "\f29c";
}
.fa-blind:before {
  content: "\f29d";
}
.fa-audio-description:before {
  content: "\f29e";
}
.fa-volume-control-phone:before {
  content: "\f2a0";
}
.fa-braille:before {
  content: "\f2a1";
}
.fa-assistive-listening-systems:before {
  content: "\f2a2";
}
.fa-asl-interpreting:before,
.fa-american-sign-language-interpreting:before {
  content: "\f2a3";
}
.fa-deafness:before,
.fa-hard-of-hearing:before,
.fa-deaf:before {
  content: "\f2a4";
}
.fa-glide:before {
  content: "\f2a5";
}
.fa-glide-g:before {
  content: "\f2a6";
}
.fa-signing:before,
.fa-sign-language:before {
  content: "\f2a7";
}
.fa-low-vision:before {
  content: "\f2a8";
}
.fa-viadeo:before {
  content: "\f2a9";
}
.fa-viadeo-square:before {
  content: "\f2aa";
}
.fa-snapchat:before {
  content: "\f2ab";
}
.fa-snapchat-ghost:before {
  content: "\f2ac";
}
.fa-snapchat-square:before {
  content: "\f2ad";
}
.fa-pied-piper:before {
  content: "\f2ae";
}
.fa-first-order:before {
  content: "\f2b0";
}
.fa-yoast:before {
  content: "\f2b1";
}
.fa-themeisle:before {
  content: "\f2b2";
}
.fa-google-plus-circle:before,
.fa-google-plus-official:before {
  content: "\f2b3";
}
.fa-fa:before,
.fa-font-awesome:before {
  content: "\f2b4";
}
.fa-handshake-o:before {
  content: "\f2b5";
}
.fa-envelope-open:before {
  content: "\f2b6";
}
.fa-envelope-open-o:before {
  content: "\f2b7";
}
.fa-linode:before {
  content: "\f2b8";
}
.fa-address-book:before {
  content: "\f2b9";
}
.fa-address-book-o:before {
  content: "\f2ba";
}
.fa-vcard:before,
.fa-address-card:before {
  content: "\f2bb";
}
.fa-vcard-o:before,
.fa-address-card-o:before {
  content: "\f2bc";
}
.fa-user-circle:before {
  content: "\f2bd";
}
.fa-user-circle-o:before {
  content: "\f2be";
}
.fa-user-o:before {
  content: "\f2c0";
}
.fa-id-badge:before {
  content: "\f2c1";
}
.fa-drivers-license:before,
.fa-id-card:before {
  content: "\f2c2";
}
.fa-drivers-license-o:before,
.fa-id-card-o:before {
  content: "\f2c3";
}
.fa-quora:before {
  content: "\f2c4";
}
.fa-free-code-camp:before {
  content: "\f2c5";
}
.fa-telegram:before {
  content: "\f2c6";
}
.fa-thermometer-4:before,
.fa-thermometer:before,
.fa-thermometer-full:before {
  content: "\f2c7";
}
.fa-thermometer-3:before,
.fa-thermometer-three-quarters:before {
  content: "\f2c8";
}
.fa-thermometer-2:before,
.fa-thermometer-half:before {
  content: "\f2c9";
}
.fa-thermometer-1:before,
.fa-thermometer-quarter:before {
  content: "\f2ca";
}
.fa-thermometer-0:before,
.fa-thermometer-empty:before {
  content: "\f2cb";
}
.fa-shower:before {
  content: "\f2cc";
}
.fa-bathtub:before,
.fa-s15:before,
.fa-bath:before {
  content: "\f2cd";
}
.fa-podcast:before {
  content: "\f2ce";
}
.fa-window-maximize:before {
  content: "\f2d0";
}
.fa-window-minimize:before {
  content: "\f2d1";
}
.fa-window-restore:before {
  content: "\f2d2";
}
.fa-times-rectangle:before,
.fa-window-close:before {
  content: "\f2d3";
}
.fa-times-rectangle-o:before,
.fa-window-close-o:before {
  content: "\f2d4";
}
.fa-bandcamp:before {
  content: "\f2d5";
}
.fa-grav:before {
  content: "\f2d6";
}
.fa-etsy:before {
  content: "\f2d7";
}
.fa-imdb:before {
  content: "\f2d8";
}
.fa-ravelry:before {
  content: "\f2d9";
}
.fa-eercast:before {
  content: "\f2da";
}
.fa-microchip:before {
  content: "\f2db";
}
.fa-snowflake-o:before {
  content: "\f2dc";
}
.fa-superpowers:before {
  content: "\f2dd";
}
.fa-wpexplorer:before {
  content: "\f2de";
}
.fa-meetup:before {
  content: "\f2e0";
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}
.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto;
}
/*!
*
* IPython base
*
*/
.modal.fade .modal-dialog {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
}
code {
  color: #000;
}
pre {
  font-size: inherit;
  line-height: inherit;
}
label {
  font-weight: normal;
}
/* Make the page background atleast 100% the height of the view port */
/* Make the page itself atleast 70% the height of the view port */
.border-box-sizing {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.corner-all {
  border-radius: 2px;
}
.no-padding {
  padding: 0px;
}
/* Flexible box model classes */
/* Taken from Alex Russell http://infrequently.org/2009/08/css-3-progress/ */
/* This file is a compatability layer.  It allows the usage of flexible box 
model layouts accross multiple browsers, including older browsers.  The newest,
universal implementation of the flexible box model is used when available (see
`Modern browsers` comments below).  Browsers that are known to implement this 
new spec completely include:

    Firefox 28.0+
    Chrome 29.0+
    Internet Explorer 11+ 
    Opera 17.0+

Browsers not listed, including Safari, are supported via the styling under the
`Old browsers` comments below.
*/
.hbox {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.hbox > * {
  /* Old browsers */
  -webkit-box-flex: 0;
  -moz-box-flex: 0;
  box-flex: 0;
  /* Modern browsers */
  flex: none;
}
.vbox {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.vbox > * {
  /* Old browsers */
  -webkit-box-flex: 0;
  -moz-box-flex: 0;
  box-flex: 0;
  /* Modern browsers */
  flex: none;
}
.hbox.reverse,
.vbox.reverse,
.reverse {
  /* Old browsers */
  -webkit-box-direction: reverse;
  -moz-box-direction: reverse;
  box-direction: reverse;
  /* Modern browsers */
  flex-direction: row-reverse;
}
.hbox.box-flex0,
.vbox.box-flex0,
.box-flex0 {
  /* Old browsers */
  -webkit-box-flex: 0;
  -moz-box-flex: 0;
  box-flex: 0;
  /* Modern browsers */
  flex: none;
  width: auto;
}
.hbox.box-flex1,
.vbox.box-flex1,
.box-flex1 {
  /* Old browsers */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  /* Modern browsers */
  flex: 1;
}
.hbox.box-flex,
.vbox.box-flex,
.box-flex {
  /* Old browsers */
  /* Old browsers */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  /* Modern browsers */
  flex: 1;
}
.hbox.box-flex2,
.vbox.box-flex2,
.box-flex2 {
  /* Old browsers */
  -webkit-box-flex: 2;
  -moz-box-flex: 2;
  box-flex: 2;
  /* Modern browsers */
  flex: 2;
}
.box-group1 {
  /*  Deprecated */
  -webkit-box-flex-group: 1;
  -moz-box-flex-group: 1;
  box-flex-group: 1;
}
.box-group2 {
  /* Deprecated */
  -webkit-box-flex-group: 2;
  -moz-box-flex-group: 2;
  box-flex-group: 2;
}
.hbox.start,
.vbox.start,
.start {
  /* Old browsers */
  -webkit-box-pack: start;
  -moz-box-pack: start;
  box-pack: start;
  /* Modern browsers */
  justify-content: flex-start;
}
.hbox.end,
.vbox.end,
.end {
  /* Old browsers */
  -webkit-box-pack: end;
  -moz-box-pack: end;
  box-pack: end;
  /* Modern browsers */
  justify-content: flex-end;
}
.hbox.center,
.vbox.center,
.center {
  /* Old browsers */
  -webkit-box-pack: center;
  -moz-box-pack: center;
  box-pack: center;
  /* Modern browsers */
  justify-content: center;
}
.hbox.baseline,
.vbox.baseline,
.baseline {
  /* Old browsers */
  -webkit-box-pack: baseline;
  -moz-box-pack: baseline;
  box-pack: baseline;
  /* Modern browsers */
  justify-content: baseline;
}
.hbox.stretch,
.vbox.stretch,
.stretch {
  /* Old browsers */
  -webkit-box-pack: stretch;
  -moz-box-pack: stretch;
  box-pack: stretch;
  /* Modern browsers */
  justify-content: stretch;
}
.hbox.align-start,
.vbox.align-start,
.align-start {
  /* Old browsers */
  -webkit-box-align: start;
  -moz-box-align: start;
  box-align: start;
  /* Modern browsers */
  align-items: flex-start;
}
.hbox.align-end,
.vbox.align-end,
.align-end {
  /* Old browsers */
  -webkit-box-align: end;
  -moz-box-align: end;
  box-align: end;
  /* Modern browsers */
  align-items: flex-end;
}
.hbox.align-center,
.vbox.align-center,
.align-center {
  /* Old browsers */
  -webkit-box-align: center;
  -moz-box-align: center;
  box-align: center;
  /* Modern browsers */
  align-items: center;
}
.hbox.align-baseline,
.vbox.align-baseline,
.align-baseline {
  /* Old browsers */
  -webkit-box-align: baseline;
  -moz-box-align: baseline;
  box-align: baseline;
  /* Modern browsers */
  align-items: baseline;
}
.hbox.align-stretch,
.vbox.align-stretch,
.align-stretch {
  /* Old browsers */
  -webkit-box-align: stretch;
  -moz-box-align: stretch;
  box-align: stretch;
  /* Modern browsers */
  align-items: stretch;
}
div.error {
  margin: 2em;
  text-align: center;
}
div.error > h1 {
  font-size: 500%;
  line-height: normal;
}
div.error > p {
  font-size: 200%;
  line-height: normal;
}
div.traceback-wrapper {
  text-align: left;
  max-width: 800px;
  margin: auto;
}
div.traceback-wrapper pre.traceback {
  max-height: 600px;
  overflow: auto;
}
/**
 * Primary styles
 *
 * Author: Jupyter Development Team
 */
body {
  background-color: #fff;
  /* This makes sure that the body covers the entire window and needs to
       be in a different element than the display: box in wrapper below */
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  overflow: visible;
}
body > #header {
  /* Initially hidden to prevent FLOUC */
  display: none;
  background-color: #fff;
  /* Display over codemirror */
  position: relative;
  z-index: 100;
}
body > #header #header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  padding-bottom: 5px;
  padding-top: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
body > #header .header-bar {
  width: 100%;
  height: 1px;
  background: #e7e7e7;
  margin-bottom: -1px;
}
@media print {
  body > #header {
    display: none !important;
  }
}
#header-spacer {
  width: 100%;
  visibility: hidden;
}
@media print {
  #header-spacer {
    display: none;
  }
}
#ipython_notebook {
  padding-left: 0px;
  padding-top: 1px;
  padding-bottom: 1px;
}
[dir="rtl"] #ipython_notebook {
  margin-right: 10px;
  margin-left: 0;
}
[dir="rtl"] #ipython_notebook.pull-left {
  float: right !important;
  float: right;
}
.flex-spacer {
  flex: 1;
}
#noscript {
  width: auto;
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: center;
  font-size: 22px;
  color: red;
  font-weight: bold;
}
#ipython_notebook img {
  height: 28px;
}
#site {
  width: 100%;
  display: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  overflow: auto;
}
@media print {
  #site {
    height: auto !important;
  }
}
/* Smaller buttons */
.ui-button .ui-button-text {
  padding: 0.2em 0.8em;
  font-size: 77%;
}
input.ui-button {
  padding: 0.3em 0.9em;
}
span#kernel_logo_widget {
  margin: 0 10px;
}
span#login_widget {
  float: right;
}
[dir="rtl"] span#login_widget {
  float: left;
}
span#login_widget > .button,
#logout {
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
span#login_widget > .button:focus,
#logout:focus,
span#login_widget > .button.focus,
#logout.focus {
  color: #333;
  background-color: #e6e6e6;
  border-color: #8c8c8c;
}
span#login_widget > .button:hover,
#logout:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
span#login_widget > .button:active,
#logout:active,
span#login_widget > .button.active,
#logout.active,
.open > .dropdown-togglespan#login_widget > .button,
.open > .dropdown-toggle#logout {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
span#login_widget > .button:active:hover,
#logout:active:hover,
span#login_widget > .button.active:hover,
#logout.active:hover,
.open > .dropdown-togglespan#login_widget > .button:hover,
.open > .dropdown-toggle#logout:hover,
span#login_widget > .button:active:focus,
#logout:active:focus,
span#login_widget > .button.active:focus,
#logout.active:focus,
.open > .dropdown-togglespan#login_widget > .button:focus,
.open > .dropdown-toggle#logout:focus,
span#login_widget > .button:active.focus,
#logout:active.focus,
span#login_widget > .button.active.focus,
#logout.active.focus,
.open > .dropdown-togglespan#login_widget > .button.focus,
.open > .dropdown-toggle#logout.focus {
  color: #333;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}
span#login_widget > .button:active,
#logout:active,
span#login_widget > .button.active,
#logout.active,
.open > .dropdown-togglespan#login_widget > .button,
.open > .dropdown-toggle#logout {
  background-image: none;
}
span#login_widget > .button.disabled:hover,
#logout.disabled:hover,
span#login_widget > .button[disabled]:hover,
#logout[disabled]:hover,
fieldset[disabled] span#login_widget > .button:hover,
fieldset[disabled] #logout:hover,
span#login_widget > .button.disabled:focus,
#logout.disabled:focus,
span#login_widget > .button[disabled]:focus,
#logout[disabled]:focus,
fieldset[disabled] span#login_widget > .button:focus,
fieldset[disabled] #logout:focus,
span#login_widget > .button.disabled.focus,
#logout.disabled.focus,
span#login_widget > .button[disabled].focus,
#logout[disabled].focus,
fieldset[disabled] span#login_widget > .button.focus,
fieldset[disabled] #logout.focus {
  background-color: #fff;
  border-color: #ccc;
}
span#login_widget > .button .badge,
#logout .badge {
  color: #fff;
  background-color: #333;
}
.nav-header {
  text-transform: none;
}
#header > span {
  margin-top: 10px;
}
.modal_stretch .modal-dialog {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 80vh;
}
.modal_stretch .modal-dialog .modal-body {
  max-height: calc(100vh - 200px);
  overflow: auto;
  flex: 1;
}
.modal-header {
  cursor: move;
}
@media (min-width: 768px) {
  .modal .modal-dialog {
    width: 700px;
  }
}
@media (min-width: 768px) {
  select.form-control {
    margin-left: 12px;
    margin-right: 12px;
  }
}
/*!
*
* IPython auth
*
*/
.center-nav {
  display: inline-block;
  margin-bottom: -4px;
}
[dir="rtl"] .center-nav form.pull-left {
  float: right !important;
  float: right;
}
[dir="rtl"] .center-nav .navbar-text {
  float: right;
}
[dir="rtl"] .navbar-inner {
  text-align: right;
}
[dir="rtl"] div.text-left {
  text-align: right;
}
/*!
*
* IPython tree view
*
*/
/* We need an invisible input field on top of the sentense*/
/* "Drag file onto the list ..." */
.alternate_upload {
  background-color: none;
  display: inline;
}
.alternate_upload.form {
  padding: 0;
  margin: 0;
}
.alternate_upload input.fileinput {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
}
.alternate_upload .btn-xs > input.fileinput {
  margin: -1px -5px;
}
.alternate_upload .btn-upload {
  position: relative;
  height: 22px;
}
::-webkit-file-upload-button {
  cursor: pointer;
}
/**
 * Primary styles
 *
 * Author: Jupyter Development Team
 */
ul#tabs {
  margin-bottom: 4px;
}
ul#tabs a {
  padding-top: 6px;
  padding-bottom: 4px;
}
[dir="rtl"] ul#tabs.nav-tabs > li {
  float: right;
}
[dir="rtl"] ul#tabs.nav.nav-tabs {
  padding-right: 0;
}
ul.breadcrumb a:focus,
ul.breadcrumb a:hover {
  text-decoration: none;
}
ul.breadcrumb i.icon-home {
  font-size: 16px;
  margin-right: 4px;
}
ul.breadcrumb span {
  color: #5e5e5e;
}
.list_toolbar {
  padding: 4px 0 4px 0;
  vertical-align: middle;
}
.list_toolbar .tree-buttons {
  padding-top: 1px;
}
[dir="rtl"] .list_toolbar .tree-buttons .pull-right {
  float: left !important;
  float: left;
}
[dir="rtl"] .list_toolbar .col-sm-4,
[dir="rtl"] .list_toolbar .col-sm-8 {
  float: right;
}
.dynamic-buttons {
  padding-top: 3px;
  display: inline-block;
}
.list_toolbar [class*="span"] {
  min-height: 24px;
}
.list_header {
  font-weight: bold;
  background-color: #EEE;
}
.list_placeholder {
  font-weight: bold;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
}
.list_container {
  margin-top: 4px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
}
.list_container > div {
  border-bottom: 1px solid #ddd;
}
.list_container > div:hover .list-item {
  background-color: red;
}
.list_container > div:last-child {
  border: none;
}
.list_item:hover .list_item {
  background-color: #ddd;
}
.list_item a {
  text-decoration: none;
}
.list_item:hover {
  background-color: #fafafa;
}
.list_header > div,
.list_item > div {
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
  line-height: 22px;
}
.list_header > div input,
.list_item > div input {
  margin-right: 7px;
  margin-left: 14px;
  vertical-align: text-bottom;
  line-height: 22px;
  position: relative;
  top: -1px;
}
.list_header > div .item_link,
.list_item > div .item_link {
  margin-left: -1px;
  vertical-align: baseline;
  line-height: 22px;
}
[dir="rtl"] .list_item > div input {
  margin-right: 0;
}
.new-file input[type=checkbox] {
  visibility: hidden;
}
.item_name {
  line-height: 22px;
  height: 24px;
}
.item_icon {
  font-size: 14px;
  color: #5e5e5e;
  margin-right: 7px;
  margin-left: 7px;
  line-height: 22px;
  vertical-align: baseline;
}
.item_modified {
  margin-right: 7px;
  margin-left: 7px;
}
[dir="rtl"] .item_modified.pull-right {
  float: left !important;
  float: left;
}
.item_buttons {
  line-height: 1em;
  margin-left: -5px;
}
.item_buttons .btn,
.item_buttons .btn-group,
.item_buttons .input-group {
  float: left;
}
.item_buttons > .btn,
.item_buttons > .btn-group,
.item_buttons > .input-group {
  margin-left: 5px;
}
.item_buttons .btn {
  min-width: 13ex;
}
.item_buttons .running-indicator {
  padding-top: 4px;
  color: #5cb85c;
}
.item_buttons .kernel-name {
  padding-top: 4px;
  color: #5bc0de;
  margin-right: 7px;
  float: left;
}
[dir="rtl"] .item_buttons.pull-right {
  float: left !important;
  float: left;
}
[dir="rtl"] .item_buttons .kernel-name {
  margin-left: 7px;
  float: right;
}
.toolbar_info {
  height: 24px;
  line-height: 24px;
}
.list_item input:not([type=checkbox]) {
  padding-top: 3px;
  padding-bottom: 3px;
  height: 22px;
  line-height: 14px;
  margin: 0px;
}
.highlight_text {
  color: blue;
}
#project_name {
  display: inline-block;
  padding-left: 7px;
  margin-left: -2px;
}
#project_name > .breadcrumb {
  padding: 0px;
  margin-bottom: 0px;
  background-color: transparent;
  font-weight: bold;
}
.sort_button {
  display: inline-block;
  padding-left: 7px;
}
[dir="rtl"] .sort_button.pull-right {
  float: left !important;
  float: left;
}
#tree-selector {
  padding-right: 0px;
}
#button-select-all {
  min-width: 50px;
}
[dir="rtl"] #button-select-all.btn {
  float: right ;
}
#select-all {
  margin-left: 7px;
  margin-right: 2px;
  margin-top: 2px;
  height: 16px;
}
[dir="rtl"] #select-all.pull-left {
  float: right !important;
  float: right;
}
.menu_icon {
  margin-right: 2px;
}
.tab-content .row {
  margin-left: 0px;
  margin-right: 0px;
}
.folder_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\f114";
}
.folder_icon:before.fa-pull-left {
  margin-right: .3em;
}
.folder_icon:before.fa-pull-right {
  margin-left: .3em;
}
.folder_icon:before.pull-left {
  margin-right: .3em;
}
.folder_icon:before.pull-right {
  margin-left: .3em;
}
.notebook_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\f02d";
  position: relative;
  top: -1px;
}
.notebook_icon:before.fa-pull-left {
  margin-right: .3em;
}
.notebook_icon:before.fa-pull-right {
  margin-left: .3em;
}
.notebook_icon:before.pull-left {
  margin-right: .3em;
}
.notebook_icon:before.pull-right {
  margin-left: .3em;
}
.running_notebook_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\f02d";
  position: relative;
  top: -1px;
  color: #5cb85c;
}
.running_notebook_icon:before.fa-pull-left {
  margin-right: .3em;
}
.running_notebook_icon:before.fa-pull-right {
  margin-left: .3em;
}
.running_notebook_icon:before.pull-left {
  margin-right: .3em;
}
.running_notebook_icon:before.pull-right {
  margin-left: .3em;
}
.file_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\f016";
  position: relative;
  top: -2px;
}
.file_icon:before.fa-pull-left {
  margin-right: .3em;
}
.file_icon:before.fa-pull-right {
  margin-left: .3em;
}
.file_icon:before.pull-left {
  margin-right: .3em;
}
.file_icon:before.pull-right {
  margin-left: .3em;
}
#notebook_toolbar .pull-right {
  padding-top: 0px;
  margin-right: -1px;
}
ul#new-menu {
  left: auto;
  right: 0;
}
#new-menu .dropdown-header {
  font-size: 10px;
  border-bottom: 1px solid #e5e5e5;
  padding: 0 0 3px;
  margin: -3px 20px 0;
}
.kernel-menu-icon {
  padding-right: 12px;
  width: 24px;
  content: "\f096";
}
.kernel-menu-icon:before {
  content: "\f096";
}
.kernel-menu-icon-current:before {
  content: "\f00c";
}
#tab_content {
  padding-top: 20px;
}
#running .panel-group .panel {
  margin-top: 3px;
  margin-bottom: 1em;
}
#running .panel-group .panel .panel-heading {
  background-color: #EEE;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 7px;
  padding-right: 7px;
  line-height: 22px;
}
#running .panel-group .panel .panel-heading a:focus,
#running .panel-group .panel .panel-heading a:hover {
  text-decoration: none;
}
#running .panel-group .panel .panel-body {
  padding: 0px;
}
#running .panel-group .panel .panel-body .list_container {
  margin-top: 0px;
  margin-bottom: 0px;
  border: 0px;
  border-radius: 0px;
}
#running .panel-group .panel .panel-body .list_container .list_item {
  border-bottom: 1px solid #ddd;
}
#running .panel-group .panel .panel-body .list_container .list_item:last-child {
  border-bottom: 0px;
}
.delete-button {
  display: none;
}
.duplicate-button {
  display: none;
}
.rename-button {
  display: none;
}
.move-button {
  display: none;
}
.download-button {
  display: none;
}
.shutdown-button {
  display: none;
}
.dynamic-instructions {
  display: inline-block;
  padding-top: 4px;
}
/*!
*
* IPython text editor webapp
*
*/
.selected-keymap i.fa {
  padding: 0px 5px;
}
.selected-keymap i.fa:before {
  content: "\f00c";
}
#mode-menu {
  overflow: auto;
  max-height: 20em;
}
.edit_app #header {
  -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
}
.edit_app #menubar .navbar {
  /* Use a negative 1 bottom margin, so the border overlaps the border of the
    header */
  margin-bottom: -1px;
}
.dirty-indicator {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 20px;
}
.dirty-indicator.fa-pull-left {
  margin-right: .3em;
}
.dirty-indicator.fa-pull-right {
  margin-left: .3em;
}
.dirty-indicator.pull-left {
  margin-right: .3em;
}
.dirty-indicator.pull-right {
  margin-left: .3em;
}
.dirty-indicator-dirty {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 20px;
}
.dirty-indicator-dirty.fa-pull-left {
  margin-right: .3em;
}
.dirty-indicator-dirty.fa-pull-right {
  margin-left: .3em;
}
.dirty-indicator-dirty.pull-left {
  margin-right: .3em;
}
.dirty-indicator-dirty.pull-right {
  margin-left: .3em;
}
.dirty-indicator-clean {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 20px;
}
.dirty-indicator-clean.fa-pull-left {
  margin-right: .3em;
}
.dirty-indicator-clean.fa-pull-right {
  margin-left: .3em;
}
.dirty-indicator-clean.pull-left {
  margin-right: .3em;
}
.dirty-indicator-clean.pull-right {
  margin-left: .3em;
}
.dirty-indicator-clean:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\f00c";
}
.dirty-indicator-clean:before.fa-pull-left {
  margin-right: .3em;
}
.dirty-indicator-clean:before.fa-pull-right {
  margin-left: .3em;
}
.dirty-indicator-clean:before.pull-left {
  margin-right: .3em;
}
.dirty-indicator-clean:before.pull-right {
  margin-left: .3em;
}
#filename {
  font-size: 16pt;
  display: table;
  padding: 0px 5px;
}
#current-mode {
  padding-left: 5px;
  padding-right: 5px;
}
#texteditor-backdrop {
  padding-top: 20px;
  padding-bottom: 20px;
}
@media not print {
  #texteditor-backdrop {
    background-color: #EEE;
  }
}
@media print {
  #texteditor-backdrop #texteditor-container .CodeMirror-gutter,
  #texteditor-backdrop #texteditor-container .CodeMirror-gutters {
    background-color: #fff;
  }
}
@media not print {
  #texteditor-backdrop #texteditor-container .CodeMirror-gutter,
  #texteditor-backdrop #texteditor-container .CodeMirror-gutters {
    background-color: #fff;
  }
}
@media not print {
  #texteditor-backdrop #texteditor-container {
    padding: 0px;
    background-color: #fff;
    -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
    box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  }
}
.CodeMirror-dialog {
  background-color: #fff;
}
/*!
*
* IPython notebook
*
*/
/* CSS font colors for translated ANSI escape sequences */
/* The color values are a mix of
   http://www.xcolors.net/dl/baskerville-ivorylight and
   http://www.xcolors.net/dl/euphrasia */
.ansi-black-fg {
  color: #3E424D;
}
.ansi-black-bg {
  background-color: #3E424D;
}
.ansi-black-intense-fg {
  color: #282C36;
}
.ansi-black-intense-bg {
  background-color: #282C36;
}
.ansi-red-fg {
  color: #E75C58;
}
.ansi-red-bg {
  background-color: #E75C58;
}
.ansi-red-intense-fg {
  color: #B22B31;
}
.ansi-red-intense-bg {
  background-color: #B22B31;
}
.ansi-green-fg {
  color: #00A250;
}
.ansi-green-bg {
  background-color: #00A250;
}
.ansi-green-intense-fg {
  color: #007427;
}
.ansi-green-intense-bg {
  background-color: #007427;
}
.ansi-yellow-fg {
  color: #DDB62B;
}
.ansi-yellow-bg {
  background-color: #DDB62B;
}
.ansi-yellow-intense-fg {
  color: #B27D12;
}
.ansi-yellow-intense-bg {
  background-color: #B27D12;
}
.ansi-blue-fg {
  color: #208FFB;
}
.ansi-blue-bg {
  background-color: #208FFB;
}
.ansi-blue-intense-fg {
  color: #0065CA;
}
.ansi-blue-intense-bg {
  background-color: #0065CA;
}
.ansi-magenta-fg {
  color: #D160C4;
}
.ansi-magenta-bg {
  background-color: #D160C4;
}
.ansi-magenta-intense-fg {
  color: #A03196;
}
.ansi-magenta-intense-bg {
  background-color: #A03196;
}
.ansi-cyan-fg {
  color: #60C6C8;
}
.ansi-cyan-bg {
  background-color: #60C6C8;
}
.ansi-cyan-intense-fg {
  color: #258F8F;
}
.ansi-cyan-intense-bg {
  background-color: #258F8F;
}
.ansi-white-fg {
  color: #C5C1B4;
}
.ansi-white-bg {
  background-color: #C5C1B4;
}
.ansi-white-intense-fg {
  color: #A1A6B2;
}
.ansi-white-intense-bg {
  background-color: #A1A6B2;
}
.ansi-default-inverse-fg {
  color: #FFFFFF;
}
.ansi-default-inverse-bg {
  background-color: #000000;
}
.ansi-bold {
  font-weight: bold;
}
.ansi-underline {
  text-decoration: underline;
}
/* The following styles are deprecated an will be removed in a future version */
.ansibold {
  font-weight: bold;
}
.ansi-inverse {
  outline: 0.5px dotted;
}
/* use dark versions for foreground, to improve visibility */
.ansiblack {
  color: black;
}
.ansired {
  color: darkred;
}
.ansigreen {
  color: darkgreen;
}
.ansiyellow {
  color: #c4a000;
}
.ansiblue {
  color: darkblue;
}
.ansipurple {
  color: darkviolet;
}
.ansicyan {
  color: steelblue;
}
.ansigray {
  color: gray;
}
/* and light for background, for the same reason */
.ansibgblack {
  background-color: black;
}
.ansibgred {
  background-color: red;
}
.ansibggreen {
  background-color: green;
}
.ansibgyellow {
  background-color: yellow;
}
.ansibgblue {
  background-color: blue;
}
.ansibgpurple {
  background-color: magenta;
}
.ansibgcyan {
  background-color: cyan;
}
.ansibggray {
  background-color: gray;
}
div.cell {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: 2px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  width: 100%;
  padding: 5px;
  /* This acts as a spacer between cells, that is outside the border */
  margin: 0px;
  outline: none;
  position: relative;
  overflow: visible;
}
div.cell:before {
  position: absolute;
  display: block;
  top: -1px;
  left: -1px;
  width: 5px;
  height: calc(100% +  2px);
  content: '';
  background: transparent;
}
div.cell.jupyter-soft-selected {
  border-left-color: #E3F2FD;
  border-left-width: 1px;
  padding-left: 5px;
  border-right-color: #E3F2FD;
  border-right-width: 1px;
  background: #E3F2FD;
}
@media print {
  div.cell.jupyter-soft-selected {
    border-color: transparent;
  }
}
div.cell.selected,
div.cell.selected.jupyter-soft-selected {
  border-color: #ababab;
}
div.cell.selected:before,
div.cell.selected.jupyter-soft-selected:before {
  position: absolute;
  display: block;
  top: -1px;
  left: -1px;
  width: 5px;
  height: calc(100% +  2px);
  content: '';
  background: #42A5F5;
}
@media print {
  div.cell.selected,
  div.cell.selected.jupyter-soft-selected {
    border-color: transparent;
  }
}
.edit_mode div.cell.selected {
  border-color: #66BB6A;
}
.edit_mode div.cell.selected:before {
  position: absolute;
  display: block;
  top: -1px;
  left: -1px;
  width: 5px;
  height: calc(100% +  2px);
  content: '';
  background: #66BB6A;
}
@media print {
  .edit_mode div.cell.selected {
    border-color: transparent;
  }
}
.prompt {
  /* This needs to be wide enough for 3 digit prompt numbers: In[100]: */
  min-width: 14ex;
  /* This padding is tuned to match the padding on the CodeMirror editor. */
  padding: 0.4em;
  margin: 0px;
  font-family: monospace;
  text-align: right;
  /* This has to match that of the the CodeMirror class line-height below */
  line-height: 1.21429em;
  /* Don't highlight prompt number selection */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* Use default cursor */
  cursor: default;
}
@media (max-width: 540px) {
  .prompt {
    text-align: left;
  }
}
div.inner_cell {
  min-width: 0;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* Old browsers */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  /* Modern browsers */
  flex: 1;
}
/* input_area and input_prompt must match in top border and margin for alignment */
div.input_area {
  border: 1px solid #cfcfcf;
  border-radius: 2px;
  background: #f7f7f7;
  line-height: 1.21429em;
}
/* This is needed so that empty prompt areas can collapse to zero height when there
   is no content in the output_subarea and the prompt. The main purpose of this is
   to make sure that empty JavaScript output_subareas have no height. */
div.prompt:empty {
  padding-top: 0;
  padding-bottom: 0;
}
div.unrecognized_cell {
  padding: 5px 5px 5px 0px;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
div.unrecognized_cell .inner_cell {
  border-radius: 2px;
  padding: 5px;
  font-weight: bold;
  color: red;
  border: 1px solid #cfcfcf;
  background: #eaeaea;
}
div.unrecognized_cell .inner_cell a {
  color: inherit;
  text-decoration: none;
}
div.unrecognized_cell .inner_cell a:hover {
  color: inherit;
  text-decoration: none;
}
@media (max-width: 540px) {
  div.unrecognized_cell > div.prompt {
    display: none;
  }
}
div.code_cell {
  /* avoid page breaking on code cells when printing */
}
@media print {
  div.code_cell {
    page-break-inside: avoid;
  }
}
/* any special styling for code cells that are currently running goes here */
div.input {
  page-break-inside: avoid;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
@media (max-width: 540px) {
  div.input {
    /* Old browsers */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-align: stretch;
    display: -moz-box;
    -moz-box-orient: vertical;
    -moz-box-align: stretch;
    display: box;
    box-orient: vertical;
    box-align: stretch;
    /* Modern browsers */
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}
/* input_area and input_prompt must match in top border and margin for alignment */
div.input_prompt {
  color: #303F9F;
  border-top: 1px solid transparent;
}
div.input_area > div.highlight {
  margin: 0.4em;
  border: none;
  padding: 0px;
  background-color: transparent;
}
div.input_area > div.highlight > pre {
  margin: 0px;
  border: none;
  padding: 0px;
  background-color: transparent;
}
/* The following gets added to the <head> if it is detected that the user has a
 * monospace font with inconsistent normal/bold/italic height.  See
 * notebookmain.js.  Such fonts will have keywords vertically offset with
 * respect to the rest of the text.  The user should select a better font.
 * See: https://github.com/ipython/ipython/issues/1503
 *
 * .CodeMirror span {
 *      vertical-align: bottom;
 * }
 */
.CodeMirror {
  line-height: 1.21429em;
  /* Changed from 1em to our global default */
  font-size: 14px;
  height: auto;
  /* Changed to auto to autogrow */
  background: none;
  /* Changed from white to allow our bg to show through */
}
.CodeMirror-scroll {
  /*  The CodeMirror docs are a bit fuzzy on if overflow-y should be hidden or visible.*/
  /*  We have found that if it is visible, vertical scrollbars appear with font size changes.*/
  overflow-y: hidden;
  overflow-x: auto;
}
.CodeMirror-lines {
  /* In CM2, this used to be 0.4em, but in CM3 it went to 4px. We need the em value because */
  /* we have set a different line-height and want this to scale with that. */
  /* Note that this should set vertical padding only, since CodeMirror assumes
       that horizontal padding will be set on CodeMirror pre */
  padding: 0.4em 0;
}
.CodeMirror-linenumber {
  padding: 0 8px 0 4px;
}
.CodeMirror-gutters {
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
}
.CodeMirror pre {
  /* In CM3 this went to 4px from 0 in CM2. This sets horizontal padding only,
    use .CodeMirror-lines for vertical */
  padding: 0 0.4em;
  border: 0;
  border-radius: 0;
}
.CodeMirror-cursor {
  border-left: 1.4px solid black;
}
@media screen and (min-width: 2138px) and (max-width: 4319px) {
  .CodeMirror-cursor {
    border-left: 2px solid black;
  }
}
@media screen and (min-width: 4320px) {
  .CodeMirror-cursor {
    border-left: 4px solid black;
  }
}
/*

Original style from softwaremaniacs.org (c) Ivan Sagalaev <Maniac@SoftwareManiacs.Org>
Adapted from GitHub theme

*/
.highlight-base {
  color: #000;
}
.highlight-variable {
  color: #000;
}
.highlight-variable-2 {
  color: #1a1a1a;
}
.highlight-variable-3 {
  color: #333333;
}
.highlight-string {
  color: #BA2121;
}
.highlight-comment {
  color: #408080;
  font-style: italic;
}
.highlight-number {
  color: #080;
}
.highlight-atom {
  color: #88F;
}
.highlight-keyword {
  color: #008000;
  font-weight: bold;
}
.highlight-builtin {
  color: #008000;
}
.highlight-error {
  color: #f00;
}
.highlight-operator {
  color: #AA22FF;
  font-weight: bold;
}
.highlight-meta {
  color: #AA22FF;
}
/* previously not defined, copying from default codemirror */
.highlight-def {
  color: #00f;
}
.highlight-string-2 {
  color: #f50;
}
.highlight-qualifier {
  color: #555;
}
.highlight-bracket {
  color: #997;
}
.highlight-tag {
  color: #170;
}
.highlight-attribute {
  color: #00c;
}
.highlight-header {
  color: blue;
}
.highlight-quote {
  color: #090;
}
.highlight-link {
  color: #00c;
}
/* apply the same style to codemirror */
.cm-s-ipython span.cm-keyword {
  color: #008000;
  font-weight: bold;
}
.cm-s-ipython span.cm-atom {
  color: #88F;
}
.cm-s-ipython span.cm-number {
  color: #080;
}
.cm-s-ipython span.cm-def {
  color: #00f;
}
.cm-s-ipython span.cm-variable {
  color: #000;
}
.cm-s-ipython span.cm-operator {
  color: #AA22FF;
  font-weight: bold;
}
.cm-s-ipython span.cm-variable-2 {
  color: #1a1a1a;
}
.cm-s-ipython span.cm-variable-3 {
  color: #333333;
}
.cm-s-ipython span.cm-comment {
  color: #408080;
  font-style: italic;
}
.cm-s-ipython span.cm-string {
  color: #BA2121;
}
.cm-s-ipython span.cm-string-2 {
  color: #f50;
}
.cm-s-ipython span.cm-meta {
  color: #AA22FF;
}
.cm-s-ipython span.cm-qualifier {
  color: #555;
}
.cm-s-ipython span.cm-builtin {
  color: #008000;
}
.cm-s-ipython span.cm-bracket {
  color: #997;
}
.cm-s-ipython span.cm-tag {
  color: #170;
}
.cm-s-ipython span.cm-attribute {
  color: #00c;
}
.cm-s-ipython span.cm-header {
  color: blue;
}
.cm-s-ipython span.cm-quote {
  color: #090;
}
.cm-s-ipython span.cm-link {
  color: #00c;
}
.cm-s-ipython span.cm-error {
  color: #f00;
}
.cm-s-ipython span.cm-tab {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAAXNSR0IArs4c6QAAAGFJREFUSMft1LsRQFAQheHPowAKoACx3IgEKtaEHujDjORSgWTH/ZOdnZOcM/sgk/kFFWY0qV8foQwS4MKBCS3qR6ixBJvElOobYAtivseIE120FaowJPN75GMu8j/LfMwNjh4HUpwg4LUAAAAASUVORK5CYII=);
  background-position: right;
  background-repeat: no-repeat;
}
div.output_wrapper {
  /* this position must be relative to enable descendents to be absolute within it */
  position: relative;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  z-index: 1;
}
/* class for the output area when it should be height-limited */
div.output_scroll {
  /* ideally, this would be max-height, but FF barfs all over that */
  height: 24em;
  /* FF needs this *and the wrapper* to specify full width, or it will shrinkwrap */
  width: 100%;
  overflow: auto;
  border-radius: 2px;
  -webkit-box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.8);
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.8);
  display: block;
}
/* output div while it is collapsed */
div.output_collapsed {
  margin: 0px;
  padding: 0px;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
div.out_prompt_overlay {
  height: 100%;
  padding: 0px 0.4em;
  position: absolute;
  border-radius: 2px;
}
div.out_prompt_overlay:hover {
  /* use inner shadow to get border that is computed the same on WebKit/FF */
  -webkit-box-shadow: inset 0 0 1px #000;
  box-shadow: inset 0 0 1px #000;
  background: rgba(240, 240, 240, 0.5);
}
div.output_prompt {
  color: #D84315;
}
/* This class is the outer container of all output sections. */
div.output_area {
  padding: 0px;
  page-break-inside: avoid;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
div.output_area .MathJax_Display {
  text-align: left !important;
}
div.output_area .rendered_html table {
  margin-left: 0;
  margin-right: 0;
}
div.output_area .rendered_html img {
  margin-left: 0;
  margin-right: 0;
}
div.output_area img,
div.output_area svg {
  max-width: 100%;
  height: auto;
}
div.output_area img.unconfined,
div.output_area svg.unconfined {
  max-width: none;
}
div.output_area .mglyph > img {
  max-width: none;
}
/* This is needed to protect the pre formating from global settings such
   as that of bootstrap */
.output {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-box-align: stretch;
  display: box;
  box-orient: vertical;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
@media (max-width: 540px) {
  div.output_area {
    /* Old browsers */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-box-align: stretch;
    display: -moz-box;
    -moz-box-orient: vertical;
    -moz-box-align: stretch;
    display: box;
    box-orient: vertical;
    box-align: stretch;
    /* Modern browsers */
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}
div.output_area pre {
  margin: 0;
  padding: 1px 0 1px 0;
  border: 0;
  vertical-align: baseline;
  color: black;
  background-color: transparent;
  border-radius: 0;
}
/* This class is for the output subarea inside the output_area and after
   the prompt div. */
div.output_subarea {
  overflow-x: auto;
  padding: 0.4em;
  /* Old browsers */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  /* Modern browsers */
  flex: 1;
  max-width: calc(100% - 14ex);
}
div.output_scroll div.output_subarea {
  overflow-x: visible;
}
/* The rest of the output_* classes are for special styling of the different
   output types */
/* all text output has this class: */
div.output_text {
  text-align: left;
  color: #000;
  /* This has to match that of the the CodeMirror class line-height below */
  line-height: 1.21429em;
}
/* stdout/stderr are 'text' as well as 'stream', but execute_result/error are *not* streams */
div.output_stderr {
  background: #fdd;
  /* very light red background for stderr */
}
div.output_latex {
  text-align: left;
}
/* Empty output_javascript divs should have no height */
div.output_javascript:empty {
  padding: 0;
}
.js-error {
  color: darkred;
}
/* raw_input styles */
div.raw_input_container {
  line-height: 1.21429em;
  padding-top: 5px;
}
pre.raw_input_prompt {
  /* nothing needed here. */
}
input.raw_input {
  font-family: monospace;
  font-size: inherit;
  color: inherit;
  width: auto;
  /* make sure input baseline aligns with prompt */
  vertical-align: baseline;
  /* padding + margin = 0.5em between prompt and cursor */
  padding: 0em 0.25em;
  margin: 0em 0.25em;
}
input.raw_input:focus {
  box-shadow: none;
}
p.p-space {
  margin-bottom: 10px;
}
div.output_unrecognized {
  padding: 5px;
  font-weight: bold;
  color: red;
}
div.output_unrecognized a {
  color: inherit;
  text-decoration: none;
}
div.output_unrecognized a:hover {
  color: inherit;
  text-decoration: none;
}
.rendered_html {
  color: #000;
  /* any extras will just be numbers: */
}
.rendered_html em {
  font-style: italic;
}
.rendered_html strong {
  font-weight: bold;
}
.rendered_html u {
  text-decoration: underline;
}
.rendered_html :link {
  text-decoration: underline;
}
.rendered_html :visited {
  text-decoration: underline;
}
.rendered_html h1 {
  font-size: 185.7%;
  margin: 1.08em 0 0 0;
  font-weight: bold;
  line-height: 1.0;
}
.rendered_html h2 {
  font-size: 157.1%;
  margin: 1.27em 0 0 0;
  font-weight: bold;
  line-height: 1.0;
}
.rendered_html h3 {
  font-size: 128.6%;
  margin: 1.55em 0 0 0;
  font-weight: bold;
  line-height: 1.0;
}
.rendered_html h4 {
  font-size: 100%;
  margin: 2em 0 0 0;
  font-weight: bold;
  line-height: 1.0;
}
.rendered_html h5 {
  font-size: 100%;
  margin: 2em 0 0 0;
  font-weight: bold;
  line-height: 1.0;
  font-style: italic;
}
.rendered_html h6 {
  font-size: 100%;
  margin: 2em 0 0 0;
  font-weight: bold;
  line-height: 1.0;
  font-style: italic;
}
.rendered_html h1:first-child {
  margin-top: 0.538em;
}
.rendered_html h2:first-child {
  margin-top: 0.636em;
}
.rendered_html h3:first-child {
  margin-top: 0.777em;
}
.rendered_html h4:first-child {
  margin-top: 1em;
}
.rendered_html h5:first-child {
  margin-top: 1em;
}
.rendered_html h6:first-child {
  margin-top: 1em;
}
.rendered_html ul:not(.list-inline),
.rendered_html ol:not(.list-inline) {
  padding-left: 2em;
}
.rendered_html ul {
  list-style: disc;
}
.rendered_html ul ul {
  list-style: square;
  margin-top: 0;
}
.rendered_html ul ul ul {
  list-style: circle;
}
.rendered_html ol {
  list-style: decimal;
}
.rendered_html ol ol {
  list-style: upper-alpha;
  margin-top: 0;
}
.rendered_html ol ol ol {
  list-style: lower-alpha;
}
.rendered_html ol ol ol ol {
  list-style: lower-roman;
}
.rendered_html ol ol ol ol ol {
  list-style: decimal;
}
.rendered_html * + ul {
  margin-top: 1em;
}
.rendered_html * + ol {
  margin-top: 1em;
}
.rendered_html hr {
  color: black;
  background-color: black;
}
.rendered_html pre {
  margin: 1em 2em;
  padding: 0px;
  background-color: #fff;
}
.rendered_html code {
  background-color: #eff0f1;
}
.rendered_html p code {
  padding: 1px 5px;
}
.rendered_html pre code {
  background-color: #fff;
}
.rendered_html pre,
.rendered_html code {
  border: 0;
  color: #000;
  font-size: 100%;
}
.rendered_html blockquote {
  margin: 1em 2em;
}
.rendered_html table {
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-collapse: collapse;
  border-spacing: 0;
  color: black;
  font-size: 12px;
  table-layout: fixed;
}
.rendered_html thead {
  border-bottom: 1px solid black;
  vertical-align: bottom;
}
.rendered_html tr,
.rendered_html th,
.rendered_html td {
  text-align: right;
  vertical-align: middle;
  padding: 0.5em 0.5em;
  line-height: normal;
  white-space: normal;
  max-width: none;
  border: none;
}
.rendered_html th {
  font-weight: bold;
}
.rendered_html tbody tr:nth-child(odd) {
  background: #f5f5f5;
}
.rendered_html tbody tr:hover {
  background: rgba(66, 165, 245, 0.2);
}
.rendered_html * + table {
  margin-top: 1em;
}
.rendered_html p {
  text-align: left;
}
.rendered_html * + p {
  margin-top: 1em;
}
.rendered_html img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.rendered_html * + img {
  margin-top: 1em;
}
.rendered_html img,
.rendered_html svg {
  max-width: 100%;
  height: auto;
}
.rendered_html img.unconfined,
.rendered_html svg.unconfined {
  max-width: none;
}
.rendered_html .alert {
  margin-bottom: initial;
}
.rendered_html * + .alert {
  margin-top: 1em;
}
[dir="rtl"] .rendered_html p {
  text-align: right;
}
div.text_cell {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
@media (max-width: 540px) {
  div.text_cell > div.prompt {
    display: none;
  }
}
div.text_cell_render {
  /*font-family: "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;*/
  outline: none;
  resize: none;
  width: inherit;
  border-style: none;
  padding: 0.5em 0.5em 0.5em 0.4em;
  color: #000;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
a.anchor-link:link {
  text-decoration: none;
  padding: 0px 20px;
  visibility: hidden;
}
h1:hover .anchor-link,
h2:hover .anchor-link,
h3:hover .anchor-link,
h4:hover .anchor-link,
h5:hover .anchor-link,
h6:hover .anchor-link {
  visibility: visible;
}
.text_cell.rendered .input_area {
  display: none;
}
.text_cell.rendered .rendered_html {
  overflow-x: auto;
  overflow-y: hidden;
}
.text_cell.rendered .rendered_html tr,
.text_cell.rendered .rendered_html th,
.text_cell.rendered .rendered_html td {
  max-width: none;
}
.text_cell.unrendered .text_cell_render {
  display: none;
}
.text_cell .dropzone .input_area {
  border: 2px dashed #bababa;
  margin: -1px;
}
.cm-header-1,
.cm-header-2,
.cm-header-3,
.cm-header-4,
.cm-header-5,
.cm-header-6 {
  font-weight: bold;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.cm-header-1 {
  font-size: 185.7%;
}
.cm-header-2 {
  font-size: 157.1%;
}
.cm-header-3 {
  font-size: 128.6%;
}
.cm-header-4 {
  font-size: 110%;
}
.cm-header-5 {
  font-size: 100%;
  font-style: italic;
}
.cm-header-6 {
  font-size: 100%;
  font-style: italic;
}
/*!
*
* IPython notebook webapp
*
*/
@media (max-width: 767px) {
  .notebook_app {
    padding-left: 0px;
    padding-right: 0px;
  }
}
#ipython-main-app {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: 100%;
}
div#notebook_panel {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  height: 100%;
}
div#notebook {
  font-size: 14px;
  line-height: 20px;
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  /* This spaces the page away from the edge of the notebook area */
  padding-top: 20px;
  margin: 0px;
  outline: none;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  min-height: 100%;
}
@media not print {
  #notebook-container {
    padding: 15px;
    background-color: #fff;
    min-height: 0;
    -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
    box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  }
}
@media print {
  #notebook-container {
    width: 100%;
  }
}
div.ui-widget-content {
  border: 1px solid #ababab;
  outline: none;
}
pre.dialog {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0.4em;
  padding-left: 2em;
}
p.dialog {
  padding: 0.2em;
}
/* Word-wrap output correctly.  This is the CSS3 spelling, though Firefox seems
   to not honor it correctly.  Webkit browsers (Chrome, rekonq, Safari) do.
 */
pre,
code,
kbd,
samp {
  white-space: pre-wrap;
}
#fonttest {
  font-family: monospace;
}
p {
  margin-bottom: 0;
}
.end_space {
  min-height: 100px;
  transition: height .2s ease;
}
.notebook_app > #header {
  -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
}
@media not print {
  .notebook_app {
    background-color: #EEE;
  }
}
kbd {
  border-style: solid;
  border-width: 1px;
  box-shadow: none;
  margin: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 1px;
  padding-bottom: 1px;
}
.jupyter-keybindings {
  padding: 1px;
  line-height: 24px;
  border-bottom: 1px solid gray;
}
.jupyter-keybindings input {
  margin: 0;
  padding: 0;
  border: none;
}
.jupyter-keybindings i {
  padding: 6px;
}
.well code {
  background-color: #ffffff;
  border-color: #ababab;
  border-width: 1px;
  border-style: solid;
  padding: 2px;
  padding-top: 1px;
  padding-bottom: 1px;
}
/* CSS for the cell toolbar */
.celltoolbar {
  border: thin solid #CFCFCF;
  border-bottom: none;
  background: #EEE;
  border-radius: 2px 2px 0px 0px;
  width: 100%;
  height: 29px;
  padding-right: 4px;
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
  /* Old browsers */
  -webkit-box-pack: end;
  -moz-box-pack: end;
  box-pack: end;
  /* Modern browsers */
  justify-content: flex-end;
  display: -webkit-flex;
}
@media print {
  .celltoolbar {
    display: none;
  }
}
.ctb_hideshow {
  display: none;
  vertical-align: bottom;
}
/* ctb_show is added to the ctb_hideshow div to show the cell toolbar.
   Cell toolbars are only shown when the ctb_global_show class is also set.
*/
.ctb_global_show .ctb_show.ctb_hideshow {
  display: block;
}
.ctb_global_show .ctb_show + .input_area,
.ctb_global_show .ctb_show + div.text_cell_input,
.ctb_global_show .ctb_show ~ div.text_cell_render {
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
}
.ctb_global_show .ctb_show ~ div.text_cell_render {
  border: 1px solid #cfcfcf;
}
.celltoolbar {
  font-size: 87%;
  padding-top: 3px;
}
.celltoolbar select {
  display: block;
  width: 100%;
  height: 32px;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #555555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 2px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
  width: inherit;
  font-size: inherit;
  height: 22px;
  padding: 0px;
  display: inline-block;
}
.celltoolbar select:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
.celltoolbar select::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.celltoolbar select:-ms-input-placeholder {
  color: #999;
}
.celltoolbar select::-webkit-input-placeholder {
  color: #999;
}
.celltoolbar select::-ms-expand {
  border: 0;
  background-color: transparent;
}
.celltoolbar select[disabled],
.celltoolbar select[readonly],
fieldset[disabled] .celltoolbar select {
  background-color: #eeeeee;
  opacity: 1;
}
.celltoolbar select[disabled],
fieldset[disabled] .celltoolbar select {
  cursor: not-allowed;
}
textarea.celltoolbar select {
  height: auto;
}
select.celltoolbar select {
  height: 30px;
  line-height: 30px;
}
textarea.celltoolbar select,
select[multiple].celltoolbar select {
  height: auto;
}
.celltoolbar label {
  margin-left: 5px;
  margin-right: 5px;
}
.tags_button_container {
  width: 100%;
  display: flex;
}
.tag-container {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
}
.tag-container > * {
  margin: 0 4px;
}
.remove-tag-btn {
  margin-left: 4px;
}
.tags-input {
  display: flex;
}
.cell-tag:last-child:after {
  content: "";
  position: absolute;
  right: 0;
  width: 40px;
  height: 100%;
  /* Fade to background color of cell toolbar */
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #EEE);
}
.tags-input > * {
  margin-left: 4px;
}
.cell-tag,
.tags-input input,
.tags-input button {
  display: block;
  width: 100%;
  height: 32px;
  padding: 6px 12px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #555555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 2px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  height: 30px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 1px;
  box-shadow: none;
  width: inherit;
  font-size: inherit;
  height: 22px;
  line-height: 22px;
  padding: 0px 4px;
  display: inline-block;
}
.cell-tag:focus,
.tags-input input:focus,
.tags-input button:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
}
.cell-tag::-moz-placeholder,
.tags-input input::-moz-placeholder,
.tags-input button::-moz-placeholder {
  color: #999;
  opacity: 1;
}
.cell-tag:-ms-input-placeholder,
.tags-input input:-ms-input-placeholder,
.tags-input button:-ms-input-placeholder {
  color: #999;
}
.cell-tag::-webkit-input-placeholder,
.tags-input input::-webkit-input-placeholder,
.tags-input button::-webkit-input-placeholder {
  color: #999;
}
.cell-tag::-ms-expand,
.tags-input input::-ms-expand,
.tags-input button::-ms-expand {
  border: 0;
  background-color: transparent;
}
.cell-tag[disabled],
.tags-input input[disabled],
.tags-input button[disabled],
.cell-tag[readonly],
.tags-input input[readonly],
.tags-input button[readonly],
fieldset[disabled] .cell-tag,
fieldset[disabled] .tags-input input,
fieldset[disabled] .tags-input button {
  background-color: #eeeeee;
  opacity: 1;
}
.cell-tag[disabled],
.tags-input input[disabled],
.tags-input button[disabled],
fieldset[disabled] .cell-tag,
fieldset[disabled] .tags-input input,
fieldset[disabled] .tags-input button {
  cursor: not-allowed;
}
textarea.cell-tag,
textarea.tags-input input,
textarea.tags-input button {
  height: auto;
}
select.cell-tag,
select.tags-input input,
select.tags-input button {
  height: 30px;
  line-height: 30px;
}
textarea.cell-tag,
textarea.tags-input input,
textarea.tags-input button,
select[multiple].cell-tag,
select[multiple].tags-input input,
select[multiple].tags-input button {
  height: auto;
}
.cell-tag,
.tags-input button {
  padding: 0px 4px;
}
.cell-tag {
  background-color: #fff;
  white-space: nowrap;
}
.tags-input input[type=text]:focus {
  outline: none;
  box-shadow: none;
  border-color: #ccc;
}
.completions {
  position: absolute;
  z-index: 110;
  overflow: hidden;
  border: 1px solid #ababab;
  border-radius: 2px;
  -webkit-box-shadow: 0px 6px 10px -1px #adadad;
  box-shadow: 0px 6px 10px -1px #adadad;
  line-height: 1;
}
.completions select {
  background: white;
  outline: none;
  border: none;
  padding: 0px;
  margin: 0px;
  overflow: auto;
  font-family: monospace;
  font-size: 110%;
  color: #000;
  width: auto;
}
.completions select option.context {
  color: #286090;
}
#kernel_logo_widget .current_kernel_logo {
  display: none;
  margin-top: -1px;
  margin-bottom: -1px;
  width: 32px;
  height: 32px;
}
[dir="rtl"] #kernel_logo_widget {
  float: left !important;
  float: left;
}
.modal .modal-body .move-path {
  display: flex;
  flex-direction: row;
  justify-content: space;
  align-items: center;
}
.modal .modal-body .move-path .server-root {
  padding-right: 20px;
}
.modal .modal-body .move-path .path-input {
  flex: 1;
}
#menubar {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin-top: 1px;
}
#menubar .navbar {
  border-top: 1px;
  border-radius: 0px 0px 2px 2px;
  margin-bottom: 0px;
}
#menubar .navbar-toggle {
  float: left;
  padding-top: 7px;
  padding-bottom: 7px;
  border: none;
}
#menubar .navbar-collapse {
  clear: left;
}
[dir="rtl"] #menubar .navbar-toggle {
  float: right;
}
[dir="rtl"] #menubar .navbar-collapse {
  clear: right;
}
[dir="rtl"] #menubar .navbar-nav {
  float: right;
}
[dir="rtl"] #menubar .nav {
  padding-right: 0px;
}
[dir="rtl"] #menubar .navbar-nav > li {
  float: right;
}
[dir="rtl"] #menubar .navbar-right {
  float: left !important;
}
[dir="rtl"] ul.dropdown-menu {
  text-align: right;
  left: auto;
}
[dir="rtl"] ul#new-menu.dropdown-menu {
  right: auto;
  left: 0;
}
.nav-wrapper {
  border-bottom: 1px solid #e7e7e7;
}
i.menu-icon {
  padding-top: 4px;
}
[dir="rtl"] i.menu-icon.pull-right {
  float: left !important;
  float: left;
}
ul#help_menu li a {
  overflow: hidden;
  padding-right: 2.2em;
}
ul#help_menu li a i {
  margin-right: -1.2em;
}
[dir="rtl"] ul#help_menu li a {
  padding-left: 2.2em;
}
[dir="rtl"] ul#help_menu li a i {
  margin-right: 0;
  margin-left: -1.2em;
}
[dir="rtl"] ul#help_menu li a i.pull-right {
  float: left !important;
  float: left;
}
.dropdown-submenu {
  position: relative;
}
.dropdown-submenu > .dropdown-menu {
  top: 0;
  left: 100%;
  margin-top: -6px;
  margin-left: -1px;
}
[dir="rtl"] .dropdown-submenu > .dropdown-menu {
  right: 100%;
  margin-right: -1px;
}
.dropdown-submenu:hover > .dropdown-menu {
  display: block;
}
.dropdown-submenu > a:after {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: block;
  content: "\f0da";
  float: right;
  color: #333333;
  margin-top: 2px;
  margin-right: -10px;
}
.dropdown-submenu > a:after.fa-pull-left {
  margin-right: .3em;
}
.dropdown-submenu > a:after.fa-pull-right {
  margin-left: .3em;
}
.dropdown-submenu > a:after.pull-left {
  margin-right: .3em;
}
.dropdown-submenu > a:after.pull-right {
  margin-left: .3em;
}
[dir="rtl"] .dropdown-submenu > a:after {
  float: left;
  content: "\f0d9";
  margin-right: 0;
  margin-left: -10px;
}
.dropdown-submenu:hover > a:after {
  color: #262626;
}
.dropdown-submenu.pull-left {
  float: none;
}
.dropdown-submenu.pull-left > .dropdown-menu {
  left: -100%;
  margin-left: 10px;
}
#notification_area {
  float: right !important;
  float: right;
  z-index: 10;
}
[dir="rtl"] #notification_area {
  float: left !important;
  float: left;
}
.indicator_area {
  float: right !important;
  float: right;
  color: #777;
  margin-left: 5px;
  margin-right: 5px;
  width: 11px;
  z-index: 10;
  text-align: center;
  width: auto;
}
[dir="rtl"] .indicator_area {
  float: left !important;
  float: left;
}
#kernel_indicator {
  float: right !important;
  float: right;
  color: #777;
  margin-left: 5px;
  margin-right: 5px;
  width: 11px;
  z-index: 10;
  text-align: center;
  width: auto;
  border-left: 1px solid;
}
#kernel_indicator .kernel_indicator_name {
  padding-left: 5px;
  padding-right: 5px;
}
[dir="rtl"] #kernel_indicator {
  float: left !important;
  float: left;
  border-left: 0;
  border-right: 1px solid;
}
#modal_indicator {
  float: right !important;
  float: right;
  color: #777;
  margin-left: 5px;
  margin-right: 5px;
  width: 11px;
  z-index: 10;
  text-align: center;
  width: auto;
}
[dir="rtl"] #modal_indicator {
  float: left !important;
  float: left;
}
#readonly-indicator {
  float: right !important;
  float: right;
  color: #777;
  margin-left: 5px;
  margin-right: 5px;
  width: 11px;
  z-index: 10;
  text-align: center;
  width: auto;
  margin-top: 2px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  display: none;
}
.modal_indicator:before {
  width: 1.28571429em;
  text-align: center;
}
.edit_mode .modal_indicator:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\f040";
}
.edit_mode .modal_indicator:before.fa-pull-left {
  margin-right: .3em;
}
.edit_mode .modal_indicator:before.fa-pull-right {
  margin-left: .3em;
}
.edit_mode .modal_indicator:before.pull-left {
  margin-right: .3em;
}
.edit_mode .modal_indicator:before.pull-right {
  margin-left: .3em;
}
.command_mode .modal_indicator:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: ' ';
}
.command_mode .modal_indicator:before.fa-pull-left {
  margin-right: .3em;
}
.command_mode .modal_indicator:before.fa-pull-right {
  margin-left: .3em;
}
.command_mode .modal_indicator:before.pull-left {
  margin-right: .3em;
}
.command_mode .modal_indicator:before.pull-right {
  margin-left: .3em;
}
.kernel_idle_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\f10c";
}
.kernel_idle_icon:before.fa-pull-left {
  margin-right: .3em;
}
.kernel_idle_icon:before.fa-pull-right {
  margin-left: .3em;
}
.kernel_idle_icon:before.pull-left {
  margin-right: .3em;
}
.kernel_idle_icon:before.pull-right {
  margin-left: .3em;
}
.kernel_busy_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\f111";
}
.kernel_busy_icon:before.fa-pull-left {
  margin-right: .3em;
}
.kernel_busy_icon:before.fa-pull-right {
  margin-left: .3em;
}
.kernel_busy_icon:before.pull-left {
  margin-right: .3em;
}
.kernel_busy_icon:before.pull-right {
  margin-left: .3em;
}
.kernel_dead_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\f1e2";
}
.kernel_dead_icon:before.fa-pull-left {
  margin-right: .3em;
}
.kernel_dead_icon:before.fa-pull-right {
  margin-left: .3em;
}
.kernel_dead_icon:before.pull-left {
  margin-right: .3em;
}
.kernel_dead_icon:before.pull-right {
  margin-left: .3em;
}
.kernel_disconnected_icon:before {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\f127";
}
.kernel_disconnected_icon:before.fa-pull-left {
  margin-right: .3em;
}
.kernel_disconnected_icon:before.fa-pull-right {
  margin-left: .3em;
}
.kernel_disconnected_icon:before.pull-left {
  margin-right: .3em;
}
.kernel_disconnected_icon:before.pull-right {
  margin-left: .3em;
}
.notification_widget {
  color: #777;
  z-index: 10;
  background: rgba(240, 240, 240, 0.5);
  margin-right: 4px;
  color: #333;
  background-color: #fff;
  border-color: #ccc;
}
.notification_widget:focus,
.notification_widget.focus {
  color: #333;
  background-color: #e6e6e6;
  border-color: #8c8c8c;
}
.notification_widget:hover {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.notification_widget:active,
.notification_widget.active,
.open > .dropdown-toggle.notification_widget {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
.notification_widget:active:hover,
.notification_widget.active:hover,
.open > .dropdown-toggle.notification_widget:hover,
.notification_widget:active:focus,
.notification_widget.active:focus,
.open > .dropdown-toggle.notification_widget:focus,
.notification_widget:active.focus,
.notification_widget.active.focus,
.open > .dropdown-toggle.notification_widget.focus {
  color: #333;
  background-color: #d4d4d4;
  border-color: #8c8c8c;
}
.notification_widget:active,
.notification_widget.active,
.open > .dropdown-toggle.notification_widget {
  background-image: none;
}
.notification_widget.disabled:hover,
.notification_widget[disabled]:hover,
fieldset[disabled] .notification_widget:hover,
.notification_widget.disabled:focus,
.notification_widget[disabled]:focus,
fieldset[disabled] .notification_widget:focus,
.notification_widget.disabled.focus,
.notification_widget[disabled].focus,
fieldset[disabled] .notification_widget.focus {
  background-color: #fff;
  border-color: #ccc;
}
.notification_widget .badge {
  color: #fff;
  background-color: #333;
}
.notification_widget.warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
}
.notification_widget.warning:focus,
.notification_widget.warning.focus {
  color: #fff;
  background-color: #ec971f;
  border-color: #985f0d;
}
.notification_widget.warning:hover {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}
.notification_widget.warning:active,
.notification_widget.warning.active,
.open > .dropdown-toggle.notification_widget.warning {
  color: #fff;
  background-color: #ec971f;
  border-color: #d58512;
}
.notification_widget.warning:active:hover,
.notification_widget.warning.active:hover,
.open > .dropdown-toggle.notification_widget.warning:hover,
.notification_widget.warning:active:focus,
.notification_widget.warning.active:focus,
.open > .dropdown-toggle.notification_widget.warning:focus,
.notification_widget.warning:active.focus,
.notification_widget.warning.active.focus,
.open > .dropdown-toggle.notification_widget.warning.focus {
  color: #fff;
  background-color: #d58512;
  border-color: #985f0d;
}
.notification_widget.warning:active,
.notification_widget.warning.active,
.open > .dropdown-toggle.notification_widget.warning {
  background-image: none;
}
.notification_widget.warning.disabled:hover,
.notification_widget.warning[disabled]:hover,
fieldset[disabled] .notification_widget.warning:hover,
.notification_widget.warning.disabled:focus,
.notification_widget.warning[disabled]:focus,
fieldset[disabled] .notification_widget.warning:focus,
.notification_widget.warning.disabled.focus,
.notification_widget.warning[disabled].focus,
fieldset[disabled] .notification_widget.warning.focus {
  background-color: #f0ad4e;
  border-color: #eea236;
}
.notification_widget.warning .badge {
  color: #f0ad4e;
  background-color: #fff;
}
.notification_widget.success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.notification_widget.success:focus,
.notification_widget.success.focus {
  color: #fff;
  background-color: #449d44;
  border-color: #255625;
}
.notification_widget.success:hover {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}
.notification_widget.success:active,
.notification_widget.success.active,
.open > .dropdown-toggle.notification_widget.success {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}
.notification_widget.success:active:hover,
.notification_widget.success.active:hover,
.open > .dropdown-toggle.notification_widget.success:hover,
.notification_widget.success:active:focus,
.notification_widget.success.active:focus,
.open > .dropdown-toggle.notification_widget.success:focus,
.notification_widget.success:active.focus,
.notification_widget.success.active.focus,
.open > .dropdown-toggle.notification_widget.success.focus {
  color: #fff;
  background-color: #398439;
  border-color: #255625;
}
.notification_widget.success:active,
.notification_widget.success.active,
.open > .dropdown-toggle.notification_widget.success {
  background-image: none;
}
.notification_widget.success.disabled:hover,
.notification_widget.success[disabled]:hover,
fieldset[disabled] .notification_widget.success:hover,
.notification_widget.success.disabled:focus,
.notification_widget.success[disabled]:focus,
fieldset[disabled] .notification_widget.success:focus,
.notification_widget.success.disabled.focus,
.notification_widget.success[disabled].focus,
fieldset[disabled] .notification_widget.success.focus {
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.notification_widget.success .badge {
  color: #5cb85c;
  background-color: #fff;
}
.notification_widget.info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.notification_widget.info:focus,
.notification_widget.info.focus {
  color: #fff;
  background-color: #31b0d5;
  border-color: #1b6d85;
}
.notification_widget.info:hover {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.notification_widget.info:active,
.notification_widget.info.active,
.open > .dropdown-toggle.notification_widget.info {
  color: #fff;
  background-color: #31b0d5;
  border-color: #269abc;
}
.notification_widget.info:active:hover,
.notification_widget.info.active:hover,
.open > .dropdown-toggle.notification_widget.info:hover,
.notification_widget.info:active:focus,
.notification_widget.info.active:focus,
.open > .dropdown-toggle.notification_widget.info:focus,
.notification_widget.info:active.focus,
.notification_widget.info.active.focus,
.open > .dropdown-toggle.notification_widget.info.focus {
  color: #fff;
  background-color: #269abc;
  border-color: #1b6d85;
}
.notification_widget.info:active,
.notification_widget.info.active,
.open > .dropdown-toggle.notification_widget.info {
  background-image: none;
}
.notification_widget.info.disabled:hover,
.notification_widget.info[disabled]:hover,
fieldset[disabled] .notification_widget.info:hover,
.notification_widget.info.disabled:focus,
.notification_widget.info[disabled]:focus,
fieldset[disabled] .notification_widget.info:focus,
.notification_widget.info.disabled.focus,
.notification_widget.info[disabled].focus,
fieldset[disabled] .notification_widget.info.focus {
  background-color: #5bc0de;
  border-color: #46b8da;
}
.notification_widget.info .badge {
  color: #5bc0de;
  background-color: #fff;
}
.notification_widget.danger {
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.notification_widget.danger:focus,
.notification_widget.danger.focus {
  color: #fff;
  background-color: #c9302c;
  border-color: #761c19;
}
.notification_widget.danger:hover {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.notification_widget.danger:active,
.notification_widget.danger.active,
.open > .dropdown-toggle.notification_widget.danger {
  color: #fff;
  background-color: #c9302c;
  border-color: #ac2925;
}
.notification_widget.danger:active:hover,
.notification_widget.danger.active:hover,
.open > .dropdown-toggle.notification_widget.danger:hover,
.notification_widget.danger:active:focus,
.notification_widget.danger.active:focus,
.open > .dropdown-toggle.notification_widget.danger:focus,
.notification_widget.danger:active.focus,
.notification_widget.danger.active.focus,
.open > .dropdown-toggle.notification_widget.danger.focus {
  color: #fff;
  background-color: #ac2925;
  border-color: #761c19;
}
.notification_widget.danger:active,
.notification_widget.danger.active,
.open > .dropdown-toggle.notification_widget.danger {
  background-image: none;
}
.notification_widget.danger.disabled:hover,
.notification_widget.danger[disabled]:hover,
fieldset[disabled] .notification_widget.danger:hover,
.notification_widget.danger.disabled:focus,
.notification_widget.danger[disabled]:focus,
fieldset[disabled] .notification_widget.danger:focus,
.notification_widget.danger.disabled.focus,
.notification_widget.danger[disabled].focus,
fieldset[disabled] .notification_widget.danger.focus {
  background-color: #d9534f;
  border-color: #d43f3a;
}
.notification_widget.danger .badge {
  color: #d9534f;
  background-color: #fff;
}
div#pager {
  background-color: #fff;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  display: none;
  position: fixed;
  bottom: 0px;
  width: 100%;
  max-height: 50%;
  padding-top: 8px;
  -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  /* Display over codemirror */
  z-index: 100;
  /* Hack which prevents jquery ui resizable from changing top. */
  top: auto !important;
}
div#pager pre {
  line-height: 1.21429em;
  color: #000;
  background-color: #f7f7f7;
  padding: 0.4em;
}
div#pager #pager-button-area {
  position: absolute;
  top: 8px;
  right: 20px;
}
div#pager #pager-contents {
  position: relative;
  overflow: auto;
  width: 100%;
  height: 100%;
}
div#pager #pager-contents #pager-container {
  position: relative;
  padding: 15px 0px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
div#pager .ui-resizable-handle {
  top: 0px;
  height: 8px;
  background: #f7f7f7;
  border-top: 1px solid #cfcfcf;
  border-bottom: 1px solid #cfcfcf;
  /* This injects handle bars (a short, wide = symbol) for 
        the resize handle. */
}
div#pager .ui-resizable-handle::after {
  content: '';
  top: 2px;
  left: 50%;
  height: 3px;
  width: 30px;
  margin-left: -15px;
  position: absolute;
  border-top: 1px solid #cfcfcf;
}
.quickhelp {
  /* Old browsers */
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: stretch;
  display: -moz-box;
  -moz-box-orient: horizontal;
  -moz-box-align: stretch;
  display: box;
  box-orient: horizontal;
  box-align: stretch;
  /* Modern browsers */
  display: flex;
  flex-direction: row;
  align-items: stretch;
  line-height: 1.8em;
}
.shortcut_key {
  display: inline-block;
  width: 21ex;
  text-align: right;
  font-family: monospace;
}
.shortcut_descr {
  display: inline-block;
  /* Old browsers */
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  box-flex: 1;
  /* Modern browsers */
  flex: 1;
}
span.save_widget {
  height: 30px;
  margin-top: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  width: 50%;
  flex: 1;
}
span.save_widget span.filename {
  height: 100%;
  line-height: 1em;
  margin-left: 16px;
  border: none;
  font-size: 146.5%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 2px;
}
span.save_widget span.filename:hover {
  background-color: #e6e6e6;
}
[dir="rtl"] span.save_widget.pull-left {
  float: right !important;
  float: right;
}
[dir="rtl"] span.save_widget span.filename {
  margin-left: 0;
  margin-right: 16px;
}
span.checkpoint_status,
span.autosave_status {
  font-size: small;
  white-space: nowrap;
  padding: 0 5px;
}
@media (max-width: 767px) {
  span.save_widget {
    font-size: small;
    padding: 0 0 0 5px;
  }
  span.checkpoint_status,
  span.autosave_status {
    display: none;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  span.checkpoint_status {
    display: none;
  }
  span.autosave_status {
    font-size: x-small;
  }
}
.toolbar {
  padding: 0px;
  margin-left: -5px;
  margin-top: 2px;
  margin-bottom: 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.toolbar select,
.toolbar label {
  width: auto;
  vertical-align: middle;
  margin-right: 2px;
  margin-bottom: 0px;
  display: inline;
  font-size: 92%;
  margin-left: 0.3em;
  margin-right: 0.3em;
  padding: 0px;
  padding-top: 3px;
}
.toolbar .btn {
  padding: 2px 8px;
}
.toolbar .btn-group {
  margin-top: 0px;
  margin-left: 5px;
}
.toolbar-btn-label {
  margin-left: 6px;
}
#maintoolbar {
  margin-bottom: -3px;
  margin-top: -8px;
  border: 0px;
  min-height: 27px;
  margin-left: 0px;
  padding-top: 11px;
  padding-bottom: 3px;
}
#maintoolbar .navbar-text {
  float: none;
  vertical-align: middle;
  text-align: right;
  margin-left: 5px;
  margin-right: 0px;
  margin-top: 0px;
}
.select-xs {
  height: 24px;
}
[dir="rtl"] .btn-group > .btn,
.btn-group-vertical > .btn {
  float: right;
}
.pulse,
.dropdown-menu > li > a.pulse,
li.pulse > a.dropdown-toggle,
li.pulse.open > a.dropdown-toggle {
  background-color: #F37626;
  color: white;
}
/**
 * Primary styles
 *
 * Author: Jupyter Development Team
 */
/** WARNING IF YOU ARE EDITTING THIS FILE, if this is a .css file, It has a lot
 * of chance of beeing generated from the ../less/[samename].less file, you can
 * try to get back the less file by reverting somme commit in history
 **/
/*
 * We'll try to get something pretty, so we
 * have some strange css to have the scroll bar on
 * the left with fix button on the top right of the tooltip
 */
@-moz-keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/*properties of tooltip after "expand"*/
.bigtooltip {
  overflow: auto;
  height: 200px;
  -webkit-transition-property: height;
  -webkit-transition-duration: 500ms;
  -moz-transition-property: height;
  -moz-transition-duration: 500ms;
  transition-property: height;
  transition-duration: 500ms;
}
/*properties of tooltip before "expand"*/
.smalltooltip {
  -webkit-transition-property: height;
  -webkit-transition-duration: 500ms;
  -moz-transition-property: height;
  -moz-transition-duration: 500ms;
  transition-property: height;
  transition-duration: 500ms;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 80px;
}
.tooltipbuttons {
  position: absolute;
  padding-right: 15px;
  top: 0px;
  right: 0px;
}
.tooltiptext {
  /*avoid the button to overlap on some docstring*/
  padding-right: 30px;
}
.ipython_tooltip {
  max-width: 700px;
  /*fade-in animation when inserted*/
  -webkit-animation: fadeOut 400ms;
  -moz-animation: fadeOut 400ms;
  animation: fadeOut 400ms;
  -webkit-animation: fadeIn 400ms;
  -moz-animation: fadeIn 400ms;
  animation: fadeIn 400ms;
  vertical-align: middle;
  background-color: #f7f7f7;
  overflow: visible;
  border: #ababab 1px solid;
  outline: none;
  padding: 3px;
  margin: 0px;
  padding-left: 7px;
  font-family: monospace;
  min-height: 50px;
  -moz-box-shadow: 0px 6px 10px -1px #adadad;
  -webkit-box-shadow: 0px 6px 10px -1px #adadad;
  box-shadow: 0px 6px 10px -1px #adadad;
  border-radius: 2px;
  position: absolute;
  z-index: 1000;
}
.ipython_tooltip a {
  float: right;
}
.ipython_tooltip .tooltiptext pre {
  border: 0;
  border-radius: 0;
  font-size: 100%;
  background-color: #f7f7f7;
}
.pretooltiparrow {
  left: 0px;
  margin: 0px;
  top: -16px;
  width: 40px;
  height: 16px;
  overflow: hidden;
  position: absolute;
}
.pretooltiparrow:before {
  background-color: #f7f7f7;
  border: 1px #ababab solid;
  z-index: 11;
  content: "";
  position: absolute;
  left: 15px;
  top: 10px;
  width: 25px;
  height: 25px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
}
ul.typeahead-list i {
  margin-left: -10px;
  width: 18px;
}
[dir="rtl"] ul.typeahead-list i {
  margin-left: 0;
  margin-right: -10px;
}
ul.typeahead-list {
  max-height: 80vh;
  overflow: auto;
}
ul.typeahead-list > li > a {
  /** Firefox bug **/
  /* see https://github.com/jupyter/notebook/issues/559 */
  white-space: normal;
}
ul.typeahead-list  > li > a.pull-right {
  float: left !important;
  float: left;
}
[dir="rtl"] .typeahead-list {
  text-align: right;
}
.cmd-palette .modal-body {
  padding: 7px;
}
.cmd-palette form {
  background: white;
}
.cmd-palette input {
  outline: none;
}
.no-shortcut {
  min-width: 20px;
  color: transparent;
}
[dir="rtl"] .no-shortcut.pull-right {
  float: left !important;
  float: left;
}
[dir="rtl"] .command-shortcut.pull-right {
  float: left !important;
  float: left;
}
.command-shortcut:before {
  content: "(command mode)";
  padding-right: 3px;
  color: #777777;
}
.edit-shortcut:before {
  content: "(edit)";
  padding-right: 3px;
  color: #777777;
}
[dir="rtl"] .edit-shortcut.pull-right {
  float: left !important;
  float: left;
}
#find-and-replace #replace-preview .match,
#find-and-replace #replace-preview .insert {
  background-color: #BBDEFB;
  border-color: #90CAF9;
  border-style: solid;
  border-width: 1px;
  border-radius: 0px;
}
[dir="ltr"] #find-and-replace .input-group-btn + .form-control {
  border-left: none;
}
[dir="rtl"] #find-and-replace .input-group-btn + .form-control {
  border-right: none;
}
#find-and-replace #replace-preview .replace .match {
  background-color: #FFCDD2;
  border-color: #EF9A9A;
  border-radius: 0px;
}
#find-and-replace #replace-preview .replace .insert {
  background-color: #C8E6C9;
  border-color: #A5D6A7;
  border-radius: 0px;
}
#find-and-replace #replace-preview {
  max-height: 60vh;
  overflow: auto;
}
#find-and-replace #replace-preview pre {
  padding: 5px 10px;
}
.terminal-app {
  background: #EEE;
}
.terminal-app #header {
  background: #fff;
  -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
  box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.2);
}
.terminal-app .terminal {
  width: 100%;
  float: left;
  font-family: monospace;
  color: white;
  background: black;
  padding: 0.4em;
  border-radius: 2px;
  -webkit-box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.4);
  box-shadow: 0px 0px 12px 1px rgba(87, 87, 87, 0.4);
}
.terminal-app .terminal,
.terminal-app .terminal dummy-screen {
  line-height: 1em;
  font-size: 14px;
}
.terminal-app .terminal .xterm-rows {
  padding: 10px;
}
.terminal-app .terminal-cursor {
  color: black;
  background: white;
}
.terminal-app #terminado-container {
  margin-top: 20px;
}
/*# sourceMappingURL=style.min.css.map */
    </style>
<style type="text/css">
    .highlight .hll { background-color: #ffffcc }
.highlight  { background: #f8f8f8; }
.highlight .c { color: #408080; font-style: italic } /* Comment */
.highlight .err { border: 1px solid #FF0000 } /* Error */
.highlight .k { color: #008000; font-weight: bold } /* Keyword */
.highlight .o { color: #666666 } /* Operator */
.highlight .ch { color: #408080; font-style: italic } /* Comment.Hashbang */
.highlight .cm { color: #408080; font-style: italic } /* Comment.Multiline */
.highlight .cp { color: #BC7A00 } /* Comment.Preproc */
.highlight .cpf { color: #408080; font-style: italic } /* Comment.PreprocFile */
.highlight .c1 { color: #408080; font-style: italic } /* Comment.Single */
.highlight .cs { color: #408080; font-style: italic } /* Comment.Special */
.highlight .gd { color: #A00000 } /* Generic.Deleted */
.highlight .ge { font-style: italic } /* Generic.Emph */
.highlight .gr { color: #FF0000 } /* Generic.Error */
.highlight .gh { color: #000080; font-weight: bold } /* Generic.Heading */
.highlight .gi { color: #00A000 } /* Generic.Inserted */
.highlight .go { color: #888888 } /* Generic.Output */
.highlight .gp { color: #000080; font-weight: bold } /* Generic.Prompt */
.highlight .gs { font-weight: bold } /* Generic.Strong */
.highlight .gu { color: #800080; font-weight: bold } /* Generic.Subheading */
.highlight .gt { color: #0044DD } /* Generic.Traceback */
.highlight .kc { color: #008000; font-weight: bold } /* Keyword.Constant */
.highlight .kd { color: #008000; font-weight: bold } /* Keyword.Declaration */
.highlight .kn { color: #008000; font-weight: bold } /* Keyword.Namespace */
.highlight .kp { color: #008000 } /* Keyword.Pseudo */
.highlight .kr { color: #008000; font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: #B00040 } /* Keyword.Type */
.highlight .m { color: #666666 } /* Literal.Number */
.highlight .s { color: #BA2121 } /* Literal.String */
.highlight .na { color: #7D9029 } /* Name.Attribute */
.highlight .nb { color: #008000 } /* Name.Builtin */
.highlight .nc { color: #0000FF; font-weight: bold } /* Name.Class */
.highlight .no { color: #880000 } /* Name.Constant */
.highlight .nd { color: #AA22FF } /* Name.Decorator */
.highlight .ni { color: #999999; font-weight: bold } /* Name.Entity */
.highlight .ne { color: #D2413A; font-weight: bold } /* Name.Exception */
.highlight .nf { color: #0000FF } /* Name.Function */
.highlight .nl { color: #A0A000 } /* Name.Label */
.highlight .nn { color: #0000FF; font-weight: bold } /* Name.Namespace */
.highlight .nt { color: #008000; font-weight: bold } /* Name.Tag */
.highlight .nv { color: #19177C } /* Name.Variable */
.highlight .ow { color: #AA22FF; font-weight: bold } /* Operator.Word */
.highlight .w { color: #bbbbbb } /* Text.Whitespace */
.highlight .mb { color: #666666 } /* Literal.Number.Bin */
.highlight .mf { color: #666666 } /* Literal.Number.Float */
.highlight .mh { color: #666666 } /* Literal.Number.Hex */
.highlight .mi { color: #666666 } /* Literal.Number.Integer */
.highlight .mo { color: #666666 } /* Literal.Number.Oct */
.highlight .sa { color: #BA2121 } /* Literal.String.Affix */
.highlight .sb { color: #BA2121 } /* Literal.String.Backtick */
.highlight .sc { color: #BA2121 } /* Literal.String.Char */
.highlight .dl { color: #BA2121 } /* Literal.String.Delimiter */
.highlight .sd { color: #BA2121; font-style: italic } /* Literal.String.Doc */
.highlight .s2 { color: #BA2121 } /* Literal.String.Double */
.highlight .se { color: #BB6622; font-weight: bold } /* Literal.String.Escape */
.highlight .sh { color: #BA2121 } /* Literal.String.Heredoc */
.highlight .si { color: #BB6688; font-weight: bold } /* Literal.String.Interpol */
.highlight .sx { color: #008000 } /* Literal.String.Other */
.highlight .sr { color: #BB6688 } /* Literal.String.Regex */
.highlight .s1 { color: #BA2121 } /* Literal.String.Single */
.highlight .ss { color: #19177C } /* Literal.String.Symbol */
.highlight .bp { color: #008000 } /* Name.Builtin.Pseudo */
.highlight .fm { color: #0000FF } /* Name.Function.Magic */
.highlight .vc { color: #19177C } /* Name.Variable.Class */
.highlight .vg { color: #19177C } /* Name.Variable.Global */
.highlight .vi { color: #19177C } /* Name.Variable.Instance */
.highlight .vm { color: #19177C } /* Name.Variable.Magic */
.highlight .il { color: #666666 } /* Literal.Number.Integer.Long */
    </style>


<style type="text/css">
/* Overrides of notebook CSS for static HTML export */
body {
  overflow: visible;
  padding: 8px;
}

div#notebook {
  overflow: visible;
  border-top: none;
}@media print {
  div.cell {
    display: block;
    page-break-inside: avoid;
  } 
  div.output_wrapper { 
    display: block;
    page-break-inside: avoid; 
  }
  div.output { 
    display: block;
    page-break-inside: avoid; 
  }
}
</style>

<!-- Custom stylesheet, it must be in the same directory as the html file -->
<link rel="stylesheet" href="custom.css">

<!-- Loading mathjax macro -->
<!-- Load mathjax -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-AMS_HTML"></script>
    <!-- MathJax configuration -->
    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [ ['$','$'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
            processEscapes: true,
            processEnvironments: true
        },
        // Center justify equations in code and markdown cells. Elsewhere
        // we use CSS to left justify single line equations in code cells.
        displayAlign: 'center',
        "HTML-CSS": {
            styles: {'.MathJax_Display': {"margin": 0}},
            linebreaks: { automatic: true }
        }
    });
    </script>
    <!-- End of mathjax configuration --></head>
<body>
  <div tabindex="-1" id="notebook" class="border-box-sizing">
    <div class="container" id="notebook-container">

<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="Difference-between-2019-and-2021-Outdoor-Track-and-Field-Times---Collegiate-Level">Difference between 2019 and 2021 Outdoor Track and Field Times - Collegiate Level<a class="anchor-link" href="#Difference-between-2019-and-2021-Outdoor-Track-and-Field-Times---Collegiate-Level">&#182;</a></h1>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Question: Is there a significant difference in the average 1500m time between 2019 and 2021? More specifically, are the 2021 College Outdoor 1500m times faster, on average, than those of 2019? For context, the 1500m is the metric equivalent of the mile. While the mile is not run at the Olympics, the 1500m is the championship standard.</p>
<ul>
<li>Spikes are the shoes that runners use to compete. There has been quite a bit of commentary regarding Nike's new "super spikes", namely the <a href="https://www.nike.com/t/air-zoom-victory-racing-shoe-Q21pf3">Air Zoom Victory</a> and the <a href="https://www.nike.com/t/zoomx-dragoy-racing-spike-Vrr0B6">Dragonfly</a>. Both shoes offer superior cushioning (<a href="https://www.nike.com/zoomx">Nike ZoomX</a>) foam to be exact, while the Air Zoom Victory also includes a full length carbon plate. These spikes have been said by some to even offer a synthetic advantage over traditional spikes. </li>
<li>According to Nike, "...[ZoomX] is lighter, softer and more responsive than any Nike foam, designed to maximize speed by delivering greater energy return. ZoomX was derived from a foam traditionally used in aerospace innovation, applied for the first time in performance footwear in the Nike Zoom Vaporfly Elite and 4%." </li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>The data used for this project is the simplest out there: the top 95 1500m times in the country. Both lists are taken from Division 1, combining the East and West regions. Here is a link to the <a href="https://www.tfrrs.org/lists/2568.html#event13">2019 Data</a>. Here is a link to the <a href="https://www.tfrrs.org/lists/3191.html#event13">2021 Data</a>.</p>
<p>The 2021 Data is taken from the date 4/26/2021. The season is not complete. I will update the data as meets complete and new results are available.</p>
<ul>
<li>This is not a randomized control trial. This is an observational study. </li>
<li>This data collection process was quite simple. </li>
<li>These results are what they are and take with them what you will. </li>
<li>I do not have data on the shoes of the athletes, however from a layman's perspective, almost all of the athletes we have seen competing at an extremely high level this season have been wearing, you guessed it, the Victory or Dragonfly. In a more general sense then, we are testing whether or not the 2021 and 2019 1500m teams are significantly different. </li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>$H_{0}: \mu_{2019} = \mu_{2021}$ : The average 1500m time in 2019 is the same as that of 2021.</p>
<p>$H_{1}: \mu_{2019} \neq \mu_{2021}$ : The average 1500m time in 2021 is either faster or slower than that of 2021; there is a significant difference between the two.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[1]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#import all of the necessary modules </span>
<span class="kn">from</span> <span class="nn">datascience</span> <span class="kn">import</span> <span class="o">*</span> 
<span class="kn">import</span> <span class="nn">datetime</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span> 
<span class="kn">from</span> <span class="nn">scipy</span> <span class="kn">import</span> <span class="n">stats</span> 
<span class="kn">from</span> <span class="nn">scipy.optimize</span> <span class="kn">import</span> <span class="n">curve_fit</span> 
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plot</span>
<span class="o">%</span><span class="k">matplotlib</span> inline
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[2]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#load datasets </span>
<span class="n">twenty_twenty_one_outdoor_times</span> <span class="o">=</span> <span class="n">Table</span><span class="o">.</span><span class="n">read_table</span><span class="p">(</span><span class="s2">&quot;2021 Outdoor 1500m Times 426.csv&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[3]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">twenty_nineteen_outdoor_times</span> <span class="o">=</span> <span class="n">Table</span><span class="o">.</span><span class="n">read_table</span><span class="p">(</span><span class="s2">&quot;2019 Outdoor Times.csv&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[4]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">twenty_nineteen_outdoor_times</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[4]:</div>



<div class="output_html rendered_html output_subarea output_execute_result">
<table border="1" class="dataframe">
    <thead>
        <tr>
            <th>Rank</th> <th>Name </th> <th>Year </th> <th>School</th> <th>Time </th> <th>Meet </th> <th>Date </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1   </td> <td>Hoare, Oliver     </td> <td>JR-3 </td> <td>Wisconsin       </td> <td>03:37.2</td> <td>Bryan Clay Invitational   </td> <td>17-Apr-19</td>
        </tr>
        <tr>
            <td>2   </td> <td>Villarreal, Carlos</td> <td>JR-3 </td> <td>Arizona         </td> <td>03:37.2</td> <td>Bryan Clay Invitational   </td> <td>17-Apr-19</td>
        </tr>
        <tr>
            <td>3   </td> <td>Nuguse, Yared     </td> <td>SO-2 </td> <td>Notre Dame      </td> <td>03:38.3</td> <td>Bryan Clay Invitational   </td> <td>17-Apr-19</td>
        </tr>
        <tr>
            <td>4   </td> <td>Paulson, William  </td> <td>SR-4 </td> <td>Arizona State   </td> <td>03:38.3</td> <td>Bryan Clay Invitational   </td> <td>17-Apr-19</td>
        </tr>
        <tr>
            <td>5   </td> <td>Worley, Sam       </td> <td>SO-2 </td> <td>Texas           </td> <td>03:38.6</td> <td>Bryan Clay Invitational   </td> <td>17-Apr-19</td>
        </tr>
        <tr>
            <td>6   </td> <td>Suliman, Waleed   </td> <td>SO-2 </td> <td>Ole Miss        </td> <td>03:38.7</td> <td>Bryan Clay Invitational   </td> <td>17-Apr-19</td>
        </tr>
        <tr>
            <td>7   </td> <td>Brown, Reed       </td> <td>SO-2 </td> <td>Oregon          </td> <td>03:38.8</td> <td>Payton Jordan Invitational</td> <td>2-May-19 </td>
        </tr>
        <tr>
            <td>8   </td> <td>Beamish, Geordie  </td> <td>JR-3 </td> <td>Northern Arizona</td> <td>03:39.1</td> <td>Bryan Clay Invitational   </td> <td>17-Apr-19</td>
        </tr>
        <tr>
            <td>9   </td> <td>Kusche, George    </td> <td>SO-2 </td> <td>Nebraska        </td> <td>03:39.3</td> <td>Payton Jordan Invitational</td> <td>2-May-19 </td>
        </tr>
        <tr>
            <td>10  </td> <td>Grijalva, Luis    </td> <td>SO-2 </td> <td>Northern Arizona</td> <td>03:39.5</td> <td>Bryan Clay Invitational   </td> <td>17-Apr-19</td>
        </tr>
    </tbody>
</table>
<p>... (85 rows omitted)</p>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[5]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#turn non-string characters into strings so that the computer can read them </span>
<span class="n">string_2019_times</span> <span class="o">=</span> <span class="p">[</span><span class="nb">str</span><span class="p">(</span><span class="n">i</span><span class="p">)</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">twenty_nineteen_outdoor_times</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;Time &quot;</span><span class="p">)]</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[6]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">string_2021_times</span> <span class="o">=</span> <span class="p">[</span><span class="nb">str</span><span class="p">(</span><span class="n">i</span><span class="p">)</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">twenty_twenty_one_outdoor_times</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;Time&quot;</span><span class="p">)]</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[7]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#write a function to convert each time string in the dataset into a seconds-only version, which makes it easier to graph </span>
<span class="k">def</span> <span class="nf">split_minutes_and_seconds</span><span class="p">(</span><span class="n">time_str</span><span class="p">):</span>
    <span class="sd">&quot;&quot;&quot;Get Seconds from time.&quot;&quot;&quot;</span>
    <span class="n">split_list</span> <span class="o">=</span> <span class="p">(</span><span class="n">time_str</span><span class="o">.</span><span class="n">split</span><span class="p">(</span><span class="s2">&quot;:&quot;</span><span class="p">))</span>
    <span class="n">milliseconds</span> <span class="o">=</span> <span class="p">(</span><span class="n">split_list</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">split</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">))</span>
    <span class="n">int_milliseconds</span> <span class="o">=</span> <span class="p">[</span><span class="nb">int</span><span class="p">(</span><span class="n">i</span><span class="p">)</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">milliseconds</span><span class="p">]</span>
    <span class="k">return</span> <span class="nb">int</span><span class="p">(</span><span class="n">split_list</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="o">*</span> <span class="mi">60</span> <span class="o">+</span> <span class="n">int_milliseconds</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="n">int_milliseconds</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">/</span> <span class="mi">10</span>

<span class="n">split_minutes_and_seconds</span><span class="p">(</span><span class="s2">&quot;03:39.7&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[7]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>219.7</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[8]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">clean_2019_times</span> <span class="o">=</span> <span class="p">[</span><span class="n">split_minutes_and_seconds</span><span class="p">(</span><span class="n">i</span><span class="p">)</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">string_2019_times</span><span class="p">]</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[9]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">clean_2021_times</span> <span class="o">=</span> <span class="p">[</span><span class="n">split_minutes_and_seconds</span><span class="p">(</span><span class="n">i</span><span class="p">)</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">string_2021_times</span><span class="p">]</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[10]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">len</span><span class="p">(</span><span class="n">clean_2021_times</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[10]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>100</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[11]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#deleting the last five rows of the 2021 dataset so that the length of each dataset is the same </span>
<span class="k">del</span> <span class="n">clean_2021_times</span><span class="p">[</span><span class="mi">95</span><span class="p">:</span><span class="mi">100</span><span class="p">]</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[12]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">len</span><span class="p">(</span><span class="n">clean_2021_times</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[12]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>95</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[13]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">len</span><span class="p">(</span><span class="n">clean_2019_times</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[13]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>95</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[14]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#creating the final table </span>
<span class="n">final_table</span> <span class="o">=</span> <span class="n">Table</span><span class="p">()</span><span class="o">.</span><span class="n">with_columns</span><span class="p">(</span><span class="s2">&quot;Rank&quot;</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">96</span><span class="p">,</span> <span class="mi">1</span><span class="p">))</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[15]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">final_table</span> <span class="o">=</span> <span class="n">final_table</span><span class="o">.</span><span class="n">with_column</span><span class="p">(</span><span class="s2">&quot;2019 Outdoor 1500m Times&quot;</span><span class="p">,</span> <span class="n">clean_2019_times</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[16]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">final_table</span> <span class="o">=</span> <span class="n">final_table</span><span class="o">.</span><span class="n">with_column</span><span class="p">(</span><span class="s2">&quot;2021 Outdoor 1500m Times&quot;</span><span class="p">,</span> <span class="n">clean_2021_times</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[17]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">final_table</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[17]:</div>



<div class="output_html rendered_html output_subarea output_execute_result">
<table border="1" class="dataframe">
    <thead>
        <tr>
            <th>Rank</th> <th>2019 Outdoor 1500m Times</th> <th>2021 Outdoor 1500m Times</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1   </td> <td>217.2                   </td> <td>216                     </td>
        </tr>
        <tr>
            <td>2   </td> <td>217.2                   </td> <td>216.5                   </td>
        </tr>
        <tr>
            <td>3   </td> <td>218.3                   </td> <td>217                     </td>
        </tr>
        <tr>
            <td>4   </td> <td>218.3                   </td> <td>217.2                   </td>
        </tr>
        <tr>
            <td>5   </td> <td>218.6                   </td> <td>217.2                   </td>
        </tr>
        <tr>
            <td>6   </td> <td>218.7                   </td> <td>217.8                   </td>
        </tr>
        <tr>
            <td>7   </td> <td>218.8                   </td> <td>217.8                   </td>
        </tr>
        <tr>
            <td>8   </td> <td>219.1                   </td> <td>218.1                   </td>
        </tr>
        <tr>
            <td>9   </td> <td>219.3                   </td> <td>218.3                   </td>
        </tr>
        <tr>
            <td>10  </td> <td>219.5                   </td> <td>218.6                   </td>
        </tr>
    </tbody>
</table>
<p>... (85 rows omitted)</p>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[18]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">final_table</span><span class="o">.</span><span class="n">hist</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="n">bins</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">217</span><span class="p">,</span> <span class="mi">225</span><span class="p">,</span> <span class="mf">0.5</span><span class="p">))</span>
<span class="n">final_table</span><span class="o">.</span><span class="n">hist</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="n">bins</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">216</span><span class="p">,</span> <span class="mi">225</span><span class="p">,</span> <span class="mf">0.5</span><span class="p">))</span>
<span class="n">final_table</span><span class="o">.</span><span class="n">hist</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span> <span class="n">bins</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">215</span><span class="p">,</span> <span class="mi">225</span><span class="p">,</span> <span class="mf">0.5</span><span class="p">))</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>You can see visually from these distributions that the times of 2019 have less clustering in the range 218 to 223 (3:38 to 3:43). A visual inspection is nice, but let's perform a couple of hypothesis tests. Mind you, the 2021 season has not even been completed. There are still weeks to go!</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[97]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#code to create a scatter of the overall rank vs. 2019 outdoor 1500m time </span>
<span class="n">final_table</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="s2">&quot;Rank&quot;</span><span class="p">,</span><span class="s2">&quot;2019 Outdoor 1500m Times&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[99]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#code to create a scatter of the overall rank vs. 2021 outdoor 1500m time </span>
<span class="n">final_table</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="s2">&quot;Rank&quot;</span><span class="p">,</span><span class="s2">&quot;2021 Outdoor 1500m Times&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVIAAAFCCAYAAACjA1V0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAADh0RVh0U29mdHdhcmUAbWF0cGxvdGxpYiB2ZXJzaW9uMy4yLjIsIGh0dHA6Ly9tYXRwbG90bGliLm9yZy+WH4yJAAAgAElEQVR4nO3de5xcdX3/8ddnJ3vJZpNASEKuSxKlyEUouIoWRSte64VqoUUtIqKplVbxBwUJVVG5CLRY8FKNXJQSxFaw2oJCahEVBUwiNMByCZdcyIYNCZvN7ia7m5nP749zJp5MZmbP7Nx2Zt7Px2MfmTnnzDnf84DH53G+5/P9fr7m7oiIyPg1VbsBIiK1ToFURKRICqQiIkVSIBURKZICqYhIkRRIRUSKNKnaDSi1mTNn+qJFi6rdDBGpM6tXr37R3Wdl21d3gXTRokWsWrWq2s0QkTpjZutz7VPXXkSkSAqkIiJFUiAVESmSAqmISJEUSEVEiqRAKiJSJAVSEZEi1d04UhGRbHb0D9C7rY/ZBx0AsPfz9GkdRZ9bgVRE6t699z/MRVddTzKZYmBwCMzoaJ9MItHEZed/jBOPP7qo86trLyJ1bUf/ABdddT2tLc1MnzaFjT1b2bC5l+nTOmhtaWbZldexo3+gqGtU9InUzBYCNwFzgBSw3N2vMbOrgPcAI8DTwJnu3hf5XSfwGHCxu/9TJdssIhNDumve2tLM8Mjofl30bJ9bW5p54pmNDI+McuD0qQwM7cKsCQNGRkaZ0t7G4K5herf1FdXFr3TXfg9wrruvMbOpwGozWwmsBC509z1mdgVwIXBB5HdfBX5a4baKyASR7ppv79vJpp6tLJw3myZjbxc92l1Pf04mU2zq2cq8g2ey+YUXSSZTzJ55AO4pHGhpaWZo124mJZr2Bt/xqmggdfceoCf8vNPMuoH57n535LD7gVPSX8zsz4FngMFKtlVEJoZ01zzR1MSWrdtJJBJsfuFFUikHg66jD6N73XqcP3xOuZNoSpBIJOjd9hKLO+ey7rnnSTQ1sXDuLDCjr3+ASeE70mITTlVLNpnZIuBY4IGMXR8FfhAeM4XgyfStwHl5zrUUWArQ2dlZ+saKSFlky6Rndt0ffPhxhkdG6ZgyGXdoaZnErl0jYJCwJgYHd+/trqc/k0qRTKWY3NbCyMgeDjpgGs3Nk7js/LN4zTGv2Hutms7am1kHcBtwjrv3R7ZfRND9XxFu+iLwVXcfMLOc53P35cBygK6uLq0vLVIDsmXS093xaNe9rbWFJ57eyOKFczCDkZE9JBJGKuWkPMWUKW17u+vpz1jwRDoysgczSKZStLU085pjXrE3cJYigKZVPJCaWTNBEF3h7rdHtp8BvBs4yd3TwfB44BQzuxI4AEiZ2W53/3ql2y0ipRPNpDc3T9qvOx7tur/uuCN5+aIk657bzNzZB9HTu40F82aTCAPt4NDuvd316Od0UF4wbzbJZLIkXfhcKp21N+B6oNvdr45sfwdBF/6N7j6U3u7ub4gcczEwoCAqUvt6t/WRTKZon9y2N5Me7Y5Hu+4jI6PMnzOLpkSCy88/i8OWLCwoa58+tlxBFCr/RHoCcDqw1sweCrctA64FWoGVYRf+fnf/RIXbJiIVsKN/gJ0DQ7jD0K7dtLY079cdj3bd09n1zK55WvR7rs/lVums/a+BbC8774zx24tL3iARqajoe9HBoSEGd+1iSvvkrN3xdNe9lNn1ctEUURGpiOh70fbJbbRPbmVwaDff/PKneNkh84DsWftSZtfLRYFUREoqV3GQp9dvZnBoNx1T2gFonxzMKpra0Z43kz6RA2iaAqmIlEyu4iADg0MkU87Gnq08s7GHIw9dxOS2lpLMKpoIVLREREoiV3GQ9vY2NvZs5fkXXuTwl3diwNonnmVwaHhCv/csxLifSM3sCOBw4Lfuvrl0TRKRiSzXbKRcxUGiM4862ifz2uOOYEvvS3zzkk9x3Cv/qKr3UiqxAqmZfR2YlB6SZGbvJ5jGmQD6zeyt7v678jVTRCaCfLORchUHic48amlpZnR0lI4pbXsTTPUg7hPpOwmma6Z9Efhv4PPAPwNfIJiVJCJ1aqzZSLmKg0RnG9XCUKbxiBtI5wDPAZjZAuBI4Cx3X2tm1xLMVhKROjbWbKSxioNEP9dTEIX4gXQXkL7zNwL9wKrw+wAwtcTtEpEJZvZBB5BINOWcjRSnOEi9BdC0uFn7NcDZZnYUcDaw0t1T4b7FhDVGRaR+TZ/WwWXnf4zhkVH6+gdZOHcWh8w/mLmzZ5BMJpkz+6CyFweZqOI+kV4E/Ax4GOgDovPg/xx4sMTtEpEqyVcj9JjDl3DHjZdVrTjIRBUrkLr778J1k14BPBWtIUpQB/SpcjRORCprrBqhB07v2G/VzUYMnJliD8h390F3X50RRHH3O9z9ydI3TUQqKduA+vXPv0BPb7C8R0/vNhKJRElW3aw3sQOpmR1rZreb2YtmtsfMjgu3XxbWExWRGrOjf4Cnnt3Ehudf2LukR/vkNoZHRoOsvBvJVIqWlkm4Q6KpiT3JFL3b+sY+eQOJOyD/9cD/ECxCdwvwd5HdKYJ3pj8reetEpGwyV+bMNqA+W1a+XubHl1LcZNNXgLsIEksJ9g2ka4APl7hdIlJG2VbmzDWgvpJLdtSquIH0OOD97u5mlrm43IvArNI2S0RKKTMTn21lznwD6hs9Kz+WuIF0N9CeY99cYEdpmiMipZYtE59tZc5KrLZZr+Imm34NnGNmici29JPpWcD/lrRVIlISuUrbHXTgdF6+aB7PbtzCrBkHNPyA+mLFfSL9HHAfwYD8HxIE0TPM7GrgVcCry9M8EYH8g+TzraCZq7RdvpU5FUQLF3dA/sNmdiJwFcEsJyNIOP2KYAnlJ8rXRJHGNtYg+aZwkbh0Jfo4pe3GWplTChO7sLO7rwFOMrM2YAbQF12DPg4zWwjcRFBNKgUsd/drzOwq4D3ACPA0cKa795nZawhmTkEQvC929x8Vck2RWjZW6brNL7xIKuVg0HX0YbFL29VrObtqKbhCvrvvBsZbEX8PcK67rzGzqcBqM1sJrAQudPc9ZnYFcCFwAfAI0BVunws8bGb/5e57xnl9kQmpkKrz0dJ1u3aNgEHCmvZWoi+ktJ2CaGnEDqRmdjhwCrAQaMvY7e5+xljncPcewkpR7r7TzLqB+e5+d+Sw+8PrkPHE28YfElwidaPQqvPRQfKJhJFKOSlP7a1EX2hpOyle3JlNHwZuIAhkvQRd8KiCA5yZLQKOBR7I2PVRgmVM0scdH177EOB0PY1KPRlv1fnoIPlE+I40Woleg+grq5Cs/Y8JquIXPcnWzDqA24BzokVQzOwigu7/ivQ2d38AODJ8Iv6emf00fL0QPd9SYClAZ2dnsc0TKYlc67unP8fpuscdJJ/r/MrEV0YhS418okRBtJkgiK5w99sj288gWPfpJHff7wnX3bvNbBA4ij9U50/vW06YlOrq6lL3X6ou3/ruhXTdC+maN0Il+okqbiC9j2Dp5Z8XczEzM4L1nbrd/erI9ncQJJfeGH0vamaLgY1hsukQ4DDCtaNEJqps3XWnsKy6uua1JW4g/TvgdjPbBtwNvJR5QGTpkXxOAE4H1prZQ+G2ZcC1QCuwMoi13B8u/fx64LNmNkowXOqT7v5izDaLVEy6Gx9nfffxdN0VRCe2uIF0E/B74OYc+z3Oudz91wTjQTPdmeP4fwP+LWYbRaoiTjm66PruyqrXn7iB9DvAXwH/CTzO/ll7kYZUSDk6ZdXrV9xAejLwD+5+TTkbIzLRFVuOTln1+hQ3kA4Cj5WzISITXSnL0Slw1pe4ZfRuBD5YzoaITGQqRyf5xH0iXQ98IJwX/zOyZ+1vKGXDRCaSp9dvZnBoNx1T2hkeGVE5OtlH3ED6r+G/hwAnZdnvBNM4RerOvfc/zAWXL2fd+s08s7GHw5YsVDk62UfcQLq4rK0QmaDSXfop7W288rBFPPbUerrXbWDhnFkkJjWpHJ0A8Qs7ry93Q0Qmot5tfSSTKdont9E+uY3XHncEW3pf4oarzuNlh8xTOToBxlGPVKSRzD7oABKJJoZ27aZ9chujo3vomNLGyw6Zx/RpHQqgAuTJ2pvZM2Z2TPj52fB7rr+nK9dkkcqZPq2Dy87/GMMjo2zdvoPhkVF142U/+Z5I7wX6I59VVUkaSnrw/TGHL+GOGy9TN15yyhdI7yEMpO7+kYq0RmSCiA6+T4TJpBOPP7razZIJKt+A/BuBl1WqISITRXTw/cwZ02ltaWbZldexo3+g2k2TCSrfE2m2Kk0idSPOgnMA7ZPbGNw1TO+2PnXrJStl7aUhxV1wbv6cmQzt2s2kRNPegCuSaaxAOt/MlsQ5kbs/U4L2iJRdoQvOtbY2K1MveY0VSH9YwLkSxTREpFxylb4rZME5BVHJZ6xAeimgMaJSs/KVvit0wTmRXMYKpP/t7g9WpCUiJZZrEbrXHXckL1+U1IJzUjJKNkndilP6TgvOSSkokEpdGk/pOwVOGa98A/K/SLB6qEhNySx9Z0D3ug3Mmz2Tznmz6esf0Jx5KamcT6Tu/sVSX8zMFgI3AXMI1qlf7u7XmNlVwHsIVid9GjjT3fvM7K3AV4CWcN8/uPv/lrpdUj929A/sk5VX6TuphEp37fcA57r7GjObCqwOly9ZCVzo7nvM7ArgQuAC4EXgPe6+2cyOAu4C5le4zVIj0hn64ZHRvVn5+XNmqvSdlF1FA6m79wA94eedZtYNzHf3uyOH3Q+cEh7z+8j2R4E2M2t19+FKtVlqQzRDf+D0qSSTSQ2ol4qpWrLJzBYBxwIPZOz6KPCDLD/5C+D32YKomS0FlgJ0dnaWtJ1SG6KV7IH9svIKolJOcZdjLikz6wBuA85x9/7I9osIuv8rMo4/ErgC+Jts53P35e7e5e5ds2bNKl/DZcKKVrIHtCCdVNS4AqmZNWX+FfDbZoIgusLdb49sPwN4N/Ahd/fI9gXAj4APu7tmWUlWqmQv1RSra29mk4EvAKcCC7L8zuOcy8wMuB7odverI9vfQZBceqO7D0W2HwDcQZCIui9OW6VxnXj80apkL1UR9x3pN4EPAf8F3EowFGk8TgBOB9aa2UPhtmXAtUArsDKItdzv7p8A/g54OfA5M/tcePzb3L13nNeXOhQtSqKsvFSDRXrRuQ8y2wZ80d2vLX+TitPV1eWrVq2qdjOkQrQkiFSKma12965s++K+2xwGukvXJJHiaUkQmSjiBtLvAqeVsR0iBUsXJWlubgaCJUH2JFP0buurcsuk0cR9R/o54F/N7G6C2UUvZR7g7jeUsmEi+WQWJTny0EVMbmvRkiBSFXED6auA9wKzgbdk2e+AAqlURGZRkseeWs/aJ57lyEMXceWypUo2ScXFDaTfArYBHwceZ/xZe5HY0tn4aI1QIGdRkm9e8imOe+UfVbnV0ojiBtJXAKe4+53lbIxIWjobv71vJ5t6trJw3myajP2WCsksSiJSDXED6RPAlHI2RCQt3XVPNDWxZet2EokEm194kVTKwfZfKkRFSaTa4gbSzwJXmtmD7r6+nA2SxhatJ9oxZTLu0NIyiV27RsAgYU1ZlwpREJVqihtI/5Eg0fSkmT3J/ll7d/c3lrRl0nAy64kuXjgHMxgZ2UMiYaRSTspTOZcKEamWuIE0SZBkEimL7PVENzN39kH09G5jwbzZJMJ3pH39A0wKZzEpiMpEECuQuvubytwOaXC56olefv5ZHLZk4T5ZexUlkYlGq4jKhBCtJ9o+uS1v110BVCaaOKXvZgPvBI4AZoSbtwOPAT9VJSYphXQ90WVXXsfgrmF13aWm5AykYbHmS4HPEKziOUSQZDLgAKAdGDGzfyGoFzp2GSmRULT0HQTd9WMOX6J6olKT8j2RXgicQxBM/83dn4vuNLNDCGqLXgTsDI8TGVO09N3A4BCY0dE+WWXwpGblq/70cYInzS9nBlEAd1/v7pcQFGb+eJnaJ3Ummp2fPm0KG3u2smFzL9OndagMntSsfIH0YOD3efanrQmPFRlTNDs/PDKKWRNN4SB7lcGTWpUvkHYTrwbpB9AYU4kpmp1vbWnGPbXPIHuVwZNalO8d6ZeAH5rZYcDNwKMEySYnyN4fSbCO0xuBU8rcTqkTmdn5hXNnaZC91LycgdTd/9PM3gVcDlxHEECjDHgYeI+7/7R8TZRal5mhnzt7Brdce5EG2UvdyDuO1N3vAu4K15Y/kuBJ1AjGkT7q7hvL30SpZWNl6A9dvADQIHupbbHWbHL3Te5+l7t/391vcfefjSeImtlCM7vHzLrN7FEz+3S4/Soze9zM/s/MfhSuZ4+ZHRQeP2BmXy/0elJdytBLo4gzsykBvJ7sM5vuc/c9BVxvD3Cuu68xs6nAajNbCawkGGq1x8yuIBjDegGwm2C9qKPCP6kh0Qz9wNAuzJowYGRklCntbQzuGqZ3W5+eRqXm5Q2kZvY3wJeBgwi69Jm2mdnn3P1bcS7m7j1AT/h5p5l1A/Pd/e7IYfcTJq/cfRD4tZm9PM75ZWLJlqF3UIZe6k7Orn0YRL8J/BdwEsFY0ebw72DgT4EfA18Pjy2ImS0CjgUeyNj1UUDJqzqQztAPj4zS1z/Iwrmz6Jw3m77+AYZHRpWhl7qR74n0M8Cl7v75LPu2AvcC95rZZuD/Ad+Oe1Ez6wBuA85x9/7I9osIuv8r4p4r/N1SYClAZ2dnIT+VEsg2bz69YF3m/Pn0fmXopZ7kC6SLgJ/HOMfPgX+Ie0EzayYIoivc/fbI9jOAdwMnFVoAxd2XA8sBurq6VDylgrJl5ZPJ1N4F6w6c3rHf/HkFUKk3+bL2zxJ06cfyFiDWOk5mZsD1QLe7Xx3Z/g6C5NJ73X0ozrmk+rJl5dc//wI9vcGCdT2920gkEsrOS93L90R6NfCtcAzpCuARss9sOgP425jXO4GgYtRaM3so3LYMuBZoBVYGsZb73f0TAGb2HDANaDGzPwfe5u6Pxb1BKZ9sWXlSKZKpFJPbWoK1lpqaGB4ZVXZe6lq+mU3fCYPaJQTBMpMBLwJnu/t34lzM3X9N9uz/nXl+syjOuaXysmXlMSfRlGBkZA9mkEyllJ2XujfWzKbvmNkNwOvIMrMJ+G2B40iljuSaN59+R7pg3mySyaSy81L3rN4K23d1dfmqVauq3Yy6lc7Qp7PymZn49OfofgVRqQdmttrdu7LtG9fid2Z2MMFa9lqvqYGkM/Tb+3YqKy8SkW9A/nvNbHrGtg+a2XpgM9BjZs+a2anlbqRUXzpDn2hqYstWZeVFovINf/oRcFj6i5mdTFCX9AXgswTz4bcBt5rZW8rZSKmuHf0DPPjw4wyPjNKUaMIdWlom4Q6JpiZVtZeGl69rn5ld/yzwC+At7p4CMLN/DredD/xPGdonVZbuzg+PjPLE0xtZvHAOZigrLxIRq4xe6Fjg6+kgCuDuSeAbwKtL3TCpvuiA+zmzZvDyRfN4duMWZs04gGQyyZzZBykrL0JhyaYkQbc+0xaCNe6ljkS78wdOnwrA/DmzaEokuPz8szhsyUJl5UVCYwXSi83sxfDzCLAYuC/jmIUE40qlTmR255PJFPPnzGRo127aWpp5zTGvUPAUicgXSDcAh0e+9xF04W/OOO7PCAbnSx2IducPnD6VZDLJuueeJ9HURGtrs7rxIlnkmyK6KOY5fkxQ4ERqXL7u/GXnn6UnUZEcxjUgP8rdby1FQ6S61J0XGb+iA6nUPnXnRYpTdCA1s78A/t3dEyVoj1RBtBweqDsvUqhCxpFKnYqWwwPUnRcpUM4nUjP7cMxzaDB+jcsshzcp0aTuvEgB8nXtv0tQDT9bIeZM9VWLr8Hs6B9g7uwZ3HLtRRpkLzIO+QLpdoKlmC8Z4xzvBK4pWYukoqKL1yXCJ9FDFy+odrNEakq+d6SrgSXu/nS+P6CnQm2VEotm62fOmE5rS7NK4omMw1iB9NgY59gK/LI0zZFKyszWt09uU0k8kXHIGUjdfZm7TxvrBO7+S3f/09I2SyohW7ZeJfFECqfhTw0sna0fHhll6/YdDI+MKlsvMg4VndlkZguBm4A5QApY7u7XmNlVwHsIKkw9DZzp7n3hby4EziIo4/cpd7+rkm2udycefzR33HjZ3sXrFERFClfpJ9I9wLnufjjwWuBsMzsCWAkc5e5HA08SLGNCuO80gqWg3wF808w0g6rEpk/r4NDFCxRERcapooHU3XvcfU34eSfQDcx397vdfU942P1AevzNycCt7j7s7s8C64DXVLLNIiJjqVrREjNbRDAq4IGMXR8FfhB+nk8QWNM2hdsyz7UUWArQ2dlZ4pbWvrHWoteTqEhxYgXScFnm3e4+XIqLmlkHcBtwjrv3R7ZfRND9X5HelOXn+82icvflwHKArq4uzbKKyLYWfZMBZnS0T947CD+6Lr2IFGbMrr2ZTSJYdvltpbigmTUTBNEV7n57ZPsZwLuBD7l7OhhuIljKJG0BsLkU7WgE2dai3/zCi2zYvJUNm3uZPq1Dg/BFSmDMQBq+u3yBIGteFDMz4Hqg292vjmx/B3AB8F53H4r85CfAaWbWamaLgUOBB4ttR6NID7iPrkWfTDoONFkTIyOjGoQvUgJx35HeDHwMuLPI650AnA6sNbOHwm3LgGuBVmBlEGu5390/4e6Pmtm/A48RdPnPDpeAlizS70LT70B3DgzhDqlkau9a9ImEkUo5KU/R0tKsQfgiJRA3kD4HfNDMfkewRlMPGe8q3f2GsU7i7r8m+3vPnAHa3S8FLo3ZzoYVLT4yMDi09x3o4NAQg7uMObNmsKlnKwvmzSYRviPt6x9QyTyREogbSL8R/jsfeFWW/Q6MGUilPKLFR5qbJ9G9bj0OvO64I2mf3Mrg0G6+ecmnmTljurL2ImUQN5AuLmsrpChPr9/M4NBuOqa0MzwyglkTBoyMjDKlvY3BXcNM7Winc/7B+/xOAVSkNGIFUndfX+6GyPjce//DXHD5ctat38wzG3s4bMlC3FM46B2oSIUUNCDfzI4C3gjMIBgS9Ut3f6QcDZOxpbv0U9rbeOVhi3jsqfV0r9vAwjmzSExq0jtQkQqJOyB/EsHSIx9g32SRm9ktwEeUTa+8aD3R9sltvPa4I9jS+xI3XHUeLztknt6BilRI3Ln2XwD+Evg8wfvSyeG/nwf+KvxXKiyznujo6B46prTxskPmqRCJSAXFDaR/DXzZ3S919/VhEZH14dCkS4C4K45KCameqMjEEPcd6Tzgtzn2/Qa4qDTNkUKpnqhI9cUNpJsJZiX9T5Z9f4Lmv1fV9GkdCqAiVRQ3kK4ALjKzVPi5h6DK/WkET6NXlKd5IiITX9xAejGwBPhi+DnNgO+H26WCovPq9TQqUl1xB+TvIZhrfxlwInAgsB24190fK2P7JIvovHrVExWpPvtD6c/60NXV5atWrap2M8pmR/8A7zpzGa0tzbRPbmNo126GR0a548bL9GQqUkZmttrdu7Ltiz2zyczaCZYBic5s+gXw3YwaolImO/oHePDhxxkeGeXA6VMBaJ8czKXv3danQCpSJXFnNs0hCJp/BKwHthC8Mz0F+Hsze5O7v1CuRsofuvPDI6M88fRGkskU8+fM1Fx6kQkg7hPplQTvRd/g7velN5rZnxAsG3IF8JGSt06AfcvkHTh9KslkknXPPU+iqYnW1mYNwhepsriB9J3ABdEgCuDuvzGzfwS+UvKWNbjoyp9PPLNxn+78/DmzaEokuOz8s3jNMa9QEBWpsriBtIPcg+43hfulRDJX/px38Ew2v/DiPt35tpZmBVGRCSLuXPsnCNZayuavgcdL0xzJtvJn77aXWNw5l3XPPc+W3u2aUy8ywcR9Iv0n4CYzOxi4hX1nNr2F3EFWCpQujdfcPGnvyp8jI3s46IBpNDdPUndeZAKKOyD/5nD405eA6yK7XgA+4e63lKNxjShdGi+68qcZJFMpdedFJqi4XXvcfTlBFagjgTeE/8539+/EPYeZLTSze8ys28weNbNPh9tPDb+nzKwrcnyLmd1oZmvN7GEze1Pca9WqdGm8ZCrFnFkzSCaTzJl9EMlkUt15kQmqoKVG3D0FdBdxvT3Aue6+xsymAqvNbCXwCPB+4NsZx388vO4rzWw28FMze3XYjrqQuRZ977Y+jjl8yd7SeK0tzXtX/lQQFZmYcgZSMyuoWLO73xTjmB6C96u4+04z6yZ4ql0ZXjPzJ0cAPw+P7zWzPqALeLCQtk1Uudai1/x5kdqS74n0uxnf05PyLcs2gDEDaZSZLQKOBR7Ic9jDwMlmdiuwEHhV+G/NB9J8a9GPjo6y7MrrNH9epEbkC6TRtewXEGTr7wBuJUgyHUywGN47w39jM7MOghlR57h7f55DbwAOB1YRTE39DcHrgczzLQWWAnR2dhbSlKqJsxa95s+L1IacgTS6lr2ZXQPc6u4XRA55AvilmV0BnA+8L84FzayZIIiucPfb8x0blu/7TOS3vwGeynLccmA5BNWf4rSjmrQWvUh9iZu1PwlYmWPfynD/mCx4CXo90O3uV8c4vt3MpoSf3wrsqfX6p5lr0RvQvW4D82bPpHPebPr6BzTgXqTGxM3aDxMkebKt2fRqYCTmeU4gGLy/1sweCrctA1qBrwGzgDvM7CF3fzswG7grXOLkeWp84H9mGTytRS9SH+IG0n8HLjazJPAf/OEd6V8SrHl/fZyTuPuv2TdZFfWjLMc/BxwWs40TWq4yeJlr0SuAitSeuIH0XGAqcDn7VnpygiTUeSVuV11RGTyR+hZ3iugu4HQz+zJwPDCXYDzoA+7+ZBnbVxfS8+fbJ7cBKoMnUm/iVsg/EVgTBs0nM/ZNAV7l7r8sQ/vqQnr+/NCu3XvXWdK8eZH6ETdrfw/BLKNsXhHulxzS8+eHR0bZun2HsvIidSbuO9JcCSIIMu7JErSlLqXn0kfnzysrL1Jf8s21X0SwwF1aVzgjKWoywcqiG0resjqg9edFGkO+J9IzCIY2efj3NfafZ28EUzbPLlcDa1U0U59+L6r58yL1aayiJb8gCJb/SxAsM2cVDQNPuvv2cjSulmVm6rX+vEj9Gr88y0AAABBoSURBVGuu/XoAM/tTgqz9zko1rNZly9Rr/rxIfYqVtXf3exVEC6NMvUjjiDuO9Fn2rT2ayd39ZaVpUv048fijlakXaQBxhz/dy/6B9CDgT4ABgneokoXmz4vUv7hTRD+SbbuZHQD8jOxVoUREGkLsVUSzcfc+4Crg86VpTv3Y0T/AU89uYkf/QLWbIiJlVtAqojnsJliKREIaiC/SWMb9RGpmk8zsj4GLgUdL1qIaFx2IP3PGdFpbmll25XV6MhWpY3Gz9ilyZ+37gXeVrEU1TgPxRRpP3K79l9g/kO4mGLD/U3ffUdJW1TANxBdpPHGz9heXuR11Iz0Qf9mV1zG4a5hJ4TtSPY2K1K/YySYzOxhYGH7d5O5bytOk2qWSeSKNacxAamanA58lKOAc3f44cIW731SmttUUZepFGlferL2Z/SvwPYL3o1cCnySoAnVluO1GM/t2uRs50SlTL9LYcgZSM/sAsBQ4x92PcvcL3f3b7v6t8PNRwP8DzgqPHZOZLTSze8ys28weNbNPh9tPDb+nzKwrcnyzmX3PzNaGv7mwuNstj2yZ+j3JFL3b+qrcMhGphHxPpJ8Arnf3a3Md4O7XENQt/duY19sDnOvuhwOvBc42syOAR4D3A5kL6J0KtLr7K4FXAX8TVu6fUKKZekCZepEGky+QHgPcHuMcPwyPHZO797j7mvDzTqAbmO/u3e7+RLafAFPMbBLBsiYjBONWJxSVzBNpbPmSTc0EY0XHsnuM82QVPlkeCzyQ57AfAicDPUA78Jls1fjNbCnBawg6OzsLbUpJqGSeSOPK90T6FPCGGOc4EVhXyEXDRfRuI3j/mu8J8zUEK5TOAxYD55rZksyD3H25u3e5e9esWbMKaUpJTZ/WwaGLFyiIijSYfIH0B8B5ZnZcrgPCxNC5wPfjXtDMmgmC6Ap3H+vVwQeBn7n7qLv3AvcBXWP8RkSkovIF0q8CTwD3mdm1ZvZWMzs0/HurmX0N+BXwJPAvcS5mZgZcD3S7+9UxfrIBeLMFphAkqB6Pcy0RkUrJt/jdbjN7C3AtQVY+c8llB24B/t7d47xLBTgBOB1Ya2YPhduWAa0Eyz3PAu4ws4fc/e3AN4AbCbL6Btzo7v8X81plk57BlM7K672oSGMz93xLMYUHmc0F3kQwRdSAjcAv3H1zWVs3Dl1dXb5q1aqynT86g2lgcAjM6GifrNlMInXOzFa7e9ZXi7ECaS0pZyDd0T/Au85cRmtLM83Nk7h/zWM48LrjjmR0dJThkVHuuPEyPZmK1KF8gbSopUYaTXQG0/DIKGZNNFkTIyOjms0k0sBKsdRIw4jOYGptacY9hQMtLc2azSTSwPREWoDoDKa+/kEWzp1F57zZ9PUPaDaTSAPTE2mBMmcwgbL2Io1OgXQcpk/r2CdoKoCKNLaiu/Zm1mZm1ZngLiIyAZTiHem7gGdLcB4RkZqkZJOISJFyviM1s8/HPMcRJWqLiEhNypdsuphgPr3FOE99TY8SESlAvq79FuBbBAWe8/2dVuY2iohMaPmeSFcBx7l7Mt8JzCzvfhGRepfvifQXwPQY53gO0Nr2ItKwcgZSd7/a3cdMJLn7anc/s7TNEhGpHRr+JCJSJE0RHYOq4YvIWPIGUjObD3wcmA88Btzg7jsyjjkc+Ia7v7lsrawSVcMXkThydu3DdecfBj4HvAf4Z+AJMzsp49BpwBvL1L6q2dE/wEVXXU9rSzPTp01hY89WNmzuZfq0Dlpbmll25XXs6B+odjNFZALI9470EqAXWOzuc4AjCVYVvdPMPliJxlWTquGLSFz5AukbgC+5+wYAd+8G3kywqudNZvbJCrSvarJVw095StXwRWQ/+QLpTOD56AZ3T7r7J4CrgK+Z2QWFXMzMFprZPWbWbWaPmtmnw+2nht9TZtYVOf5DZvZQ5C9lZn9cyDXHS9XwRSSufMmmDQTd+V9l7nD3C81sALgc+GkB19sDnOvua8xsKrDazFYSrFv/fuDbGddZAawAMLNXAj9294cKuN64pDP1xxy+RNXwRWRM+QLpL4EPEcy334+7X2pmO4Gvxr2Yu/cAPeHnnWbWDcx395UAZnnro3wA+H7ca41XNFOfLTuvACoimfJ17ZcD95vZQbkOcPdrCYJtwVNEw1EBxwIPxPzJX1HmQBrN1M+cMV3ZeRGJJecTqbuvBlaPdQJ3vxW4tZCLmlkHcBtwjrv3xzj+eGDI3R/JsX8psBSgs3P8q55EM/UA7ZPbGNw1TO+2Pj2JikhOsaeImlm7mc0P/9rHe0EzayYIoivc/faYPzuNPE+j7r7c3bvcvWvWrFnjbdo+mXpA2XkRiSVvIDWzeWb2L2b2LLCTIAG1AdhpZs+G++bHvZgFL0GvB7rd/eqYv2kCTqXAp97xiGbqt27foey8iMRi7tmL25vZUcA9BMH2v4BHge0EFfMPJFhi5D3h4W/K1e3OOOfrCUYBrAVS4eZlQCvwNWAW0Ac85O5vD3/zJuAr7v7aODfU1dXlq1atinNoTtH59QqiIgJgZqvdvSvrvjyBdCVBBfz35nqPaWbTgJ8AI+7+thK1tyilCKQiIpnyBdJ8w59eB7w/XzLI3fvN7HKCd54iIg0p3zvSXUCcLMsBwO7SNEdEpPbkC6Q/Bv7JzE7MdYCZvQG4EvjPUjdMRKRW5Ovan0eQZLrHzDYTTON8iWDp5RkE00fnA/eHx4qINKR8A/L7gDeY2ckE2fkjgSUEWfvtwEqCRNNPPFfGSkSkAYy51Ii7/5igmy8iIllo8TsRkSKNGUjN7E1hXdDjcuyfb2afL33TKm9H/wBPPbtJRUpEpCA5u/ZhYZG7geMJ3ot6OEj/o+6+OXLoAuALwJfK2dByG6t8nohILvmeSJcBhwMfIZgOejZh2TszO6L8Tasclc8TkWLkC6TvB77g7v/m7o+7+7eA44AXgF+a2asr0sIKyFY+T4vbiUhc+QJpJ/D76AZ3f55g6eX/A34eFhSpeSqfJyLFyBdIewnef+7D3QeBdxJUcboTeFd5mlY5Kp8nIsXIV/3ph8Aedz8tx/5JwC3AKYC7e6JsrSxAMdWfVD5PRHLJV/0p3xPp94FDcq3Z5O57CNZR+jZBseeaN31aB4cuXqAgKiIFyTdF9DbGKI8XTg3921I3SkSklmhmk4hIkRRIRUSKpEAqIlIkBVIRkSIpkIqIFEmBVESkSBUNpGa20MzuMbNuM3vUzD4dbj81/J4ys66M3xxtZr8N9681s7ZStkml80SkWGNWyC+xPcC57r7GzKYCq8PSfI8QFEn5dvTgcPbUzcDp7v5wODlgtFSNUek8ESmFij6RunuPu68JP+8EuoH57t7t7k9k+cnbgP9z94fD32xz92Qp2qLSeSJSKlV7R2pmiwjrm+Y57I8ICkrfZWZrzOz8HOdaamarzGzV1q1bY11fpfNEpFSqEkjD6vu3Aee4e3+eQycBrwc+FP77PjM7KfMgd1/u7l3u3jVr1qxYbVDpPBEplYoHUjNrJgiiK9z99jEO3wTc6+4vuvsQQdm+rGtHFUql80SkVCqabDIzA64Hut396hg/uQs438zagRGCotJfLVV7Tjz+aO648TKVzhORolQ6a38CcDqw1sweCrctA1qBrwGzgDvM7CF3f7u7v2RmVwO/Axy4093vKGWDpk/rUAAVkaJUNJC6+68JViTN5kc5fnMzwRAoEZEJSTObRESKpEAqIlIkBVIRkSIpkIqIFEmBVESkSAqkIiJFUiAVESmSBSsq1w8z2wqsj3HoTODFMjenGnRftUX3VTsOcfesxTzqLpDGZWar3L1r7CNri+6rtui+6oO69iIiRVIgFREpUiMH0uXVbkCZ6L5qi+6rDjTsO1IRkVJp5CdSEZGSaMhAambvMLMnzGydmX222u0ZrzzLW88ws5Vm9lT474HVbmuhzCxhZr83s/8Ov9f8PQGY2QFm9kMzezz87/a6Wr83M/tM+P/fI2b2fTNrq/V7KlTDBVIzSwDfAN4JHAF8wMyOqG6rxi29vPXhwGuBs8N7+Szwc3c/FPh5+L3WfJpgldm0ergngGuAn7n7K4BjCO6xZu/NzOYDnwK63P0oIAGcRg3f03g0XCAFXgOsc/dn3H0EuBU4ucptGpdcy1sT3M/3wsO+B/x5dVo4Pma2AHgXcF1kc03fE4CZTQNOJFhuB3cfcfc+av/eJgGTzWwS0A5spvbvqSCNGEjnAxsj3zeF22paxvLWB7t7DwTBFphdvZaNy78A5wOpyLZavyeAJcBW4MbwtcV1ZjaFGr43d38e+CdgA9AD7HD3u6nhexqPRgyk2ZY6qemhCwUsbz3hmdm7gV53X13ttpTBJIJVcP/V3Y8FBqnxLm/47vNkYDEwD5hiZn9d3VZVXiMG0k3Awsj3BQRdkZqUY3nrF8xsbrh/LtBbrfaNwwnAe83sOYLXLm82s5up7XtK2wRscvcHwu8/JAistXxvbwGedfet7j4K3A78CbV9TwVrxED6O+BQM1tsZi0EL8Z/UuU2jUue5a1/ApwRfj4D+HGl2zZe7n6huy9w90UE/23+193/mhq+pzR33wJsNLPDwk0nAY9R2/e2AXitmbWH/z+eRPCuvpbvqWANOSDfzP6M4D1cArjB3S+tcpPGxcxeD/wKWMsf3icuI3hP+u9AJ8H/6Ke6+/aqNLIIZvYm4Dx3f7eZHUR93NMfEyTRWoBngDMJHmhq9t7M7IvAXxGMIvk98DGggxq+p0I1ZCAVESmlRuzai4iUlAKpiEiRFEhFRIqkQCoiUiQFUhGRIimQSs0xs4+YmUf+RszsaTO7zMzaynjd75rZpnKdX2rXpGo3QKQIpxLMFpoKvA+4MPz899VslDQeBVKpZQ+5+7rw80ozOxQ4y8w+7e6pfD8UKSV17aWerAEmE6ypjpm9zczuNLMeMxsKCw+fG9ak3cvMnjOzm83stLDY8qCZrQpnjuVlZmea2WgtFwiX4umJVOrJImAHsC38voSgqPDXgN1AF3AxMIv9qy69ATgM+Fx47JeB/zazRWHN0P2Y2YXAF4GPu/t3S3gfUmMUSKWWJcJiwul3pH9BUEowCeDu30ofGBbU+BXBHPfzzGxZRvd/GvDH7v5SePwWggI3fwbcEr2omTURVLr/KPA+d7+jTPcnNUKBVGrZ4xnfv+nuX09/Ccu3XQy8g6BWZvT/99nAlsj336aDaGht+G9nxjUmEZT3Owl4i7v/dtytl7qhd6RSy94HvJrgqfF/gE+a2Ydh71PjT4B3A5cAbw6PTVf6yhwmtU9lIncfznHcNIJlUH4DPFiSu5Cap0AqtewRd1/l7j8lCJhPAleFy3e8jOCd6AXu/h13/5W7rwKSRV5zO0Eg/VPg++GrBWlwCqRSF8InyH8g6LJ/kmARNoDR9DHhagIfKsG1fkGwCu07gVsVTEWBVOqGu/+EIEF0HvAcsB641MxOMbOTgZUlvNavCN69vg34QRikpUEpkEq9+UeCp9KPEiwBvAW4CfgG8EvgK6W6kLvfB7ydYN2i/wiXrpEGpAr5IiJF0hOpiEiRFEhFRIqkQCoiUiQFUhGRIimQiogUSYFURKRICqQiIkVSIBURKZICqYhIkf4/gnaYwl0I1h8AAAAASUVORK5CYII=
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Upon inspection of both of these datasets, I am actually tempted to use exponential regression to model the data. I'll do that another day though, because that is not the focus of this current project.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[19]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">nineteen_avg</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">final_table</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;2019 Outdoor 1500m Times&quot;</span><span class="p">))</span>
<span class="n">twentyone_avg</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">final_table</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;2021 Outdoor 1500m Times&quot;</span><span class="p">))</span>
<span class="n">nineteen_sd</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">std</span><span class="p">(</span><span class="n">final_table</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;2019 Outdoor 1500m Times&quot;</span><span class="p">))</span>
<span class="n">twentyone_sd</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">std</span><span class="p">(</span><span class="n">final_table</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;2021 Outdoor 1500m Times&quot;</span><span class="p">))</span>                    
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[20]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">nineteen_avg</span><span class="p">,</span> <span class="n">nineteen_sd</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>


<div class="output_subarea output_stream output_stdout output_text">
<pre>223.37578947368414 2.1763182714935256
</pre>
</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[21]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">twentyone_avg</span><span class="p">,</span> <span class="n">twentyone_sd</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>


<div class="output_subarea output_stream output_stdout output_text">
<pre>221.62105263157895 2.0807839988479087
</pre>
</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Now it's time to talk about the two distributions. For 2019, the average, $\bar{X}_{2019}$, was $03:43.37$, while the average for 2021 was $03:41.62$. The standard deviation for 2019, $\sigma_{2019}$, was 2.176, while that of 2021, $\sigma_{2021}$, was 2.0807.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>You can tell from these two histograms that there is obvious left skewness, and that they are not normally distributed. I'm going to use the fact that I can take the sample mean of a sample of sufficient size, and that sample will be approximately normal. Under those rules, I can use the central limit theorem.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>What follows is that the distribution of the difference of sample means is distributed, $\bar{X}_{2019} - \bar{X}_{2021}$, and the difference in standard deviation can be computed as $\sqrt{\frac{2.1763182714935256^2}{95} + \frac{2.0807839988479087^2}{95}}$</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[22]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">import</span> <span class="nn">math</span> 
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[23]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">nineteen_variance</span> <span class="o">=</span> <span class="p">(</span><span class="n">nineteen_sd</span><span class="o">**</span><span class="mi">2</span> <span class="o">/</span> <span class="mi">95</span><span class="p">)</span>
<span class="n">twentyone_variance</span> <span class="o">=</span> <span class="p">(</span><span class="n">twentyone_sd</span><span class="o">**</span><span class="mi">2</span> <span class="o">/</span> <span class="mi">95</span><span class="p">)</span>
<span class="n">difference_sd</span> <span class="o">=</span> <span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="n">nineteen_variance</span> <span class="o">+</span> <span class="n">twentyone_variance</span><span class="p">)</span>
<span class="n">difference_sd</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[23]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>0.3089204167435882</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>So, we can write the distribution of the difference in sample means as</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[24]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">difference_mean</span> <span class="o">=</span> <span class="p">(</span><span class="n">nineteen_avg</span> <span class="o">-</span> <span class="n">twentyone_avg</span><span class="p">)</span>
<span class="n">difference_mean</span> 
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[24]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>1.7547368421051885</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>A 95% confidence interval for the true difference between the two sample means would be as follows:</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>To select our z-score, we look at the normal curve. For a $95\%$ confidence interval, we look at the data in the middle $95\%$. This means that we need to find $\Phi^{-1}(0.975)$ for the positive upper value. Here, $\Phi^{-1}$ indicates that we are using the inverse of the normal CDF.</p>
<p>The formula to find the upper and lower bounds of our confidence interval is:</p>
<p>CI = $\bar{X} \pm z * SD(\bar{X})$</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[102]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">z</span> <span class="o">=</span> <span class="n">stats</span><span class="o">.</span><span class="n">norm</span><span class="o">.</span><span class="n">ppf</span><span class="p">(</span><span class="mf">0.975</span><span class="p">)</span>
<span class="n">ci_lower</span> <span class="o">=</span> <span class="n">difference_mean</span> <span class="o">-</span> <span class="p">(</span><span class="n">z</span> <span class="o">*</span> <span class="n">difference_sd</span><span class="p">)</span>
<span class="n">ci_upper</span> <span class="o">=</span> <span class="n">difference_mean</span> <span class="o">+</span> <span class="p">(</span><span class="n">z</span> <span class="o">*</span> <span class="n">difference_sd</span><span class="p">)</span>
<span class="n">ci_lower</span><span class="p">,</span> <span class="n">ci_upper</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[102]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>(1.1492639511986513, 2.3602097330117258)</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Notice how 0 is not in the interval. This proves that there is a significant difference between the 1500m times of 2019 and 2020. The positive difference indicates that the 2019 1500m times were slower, on average. I will eventually update this page to include an exponential regression model that minimizes the SSE, so we can use a runner's rank to determine their time.</p>
<ul>
<li>It must be noted that this is a 95% confidence interval. We must perform a hypothesis test to come to an outright conclusion, of whether the data favor the null or alternative hypotheses. Once the season is over and the data is final, I will complete the hypothesis test. </li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Now let's have some fun with the data. I mentioned before that I thought that there was some clustering in relation to the range 3:38 to 3:43. Well, let's see the count of each between both data sets.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[26]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">final_table</span><span class="o">.</span><span class="n">where</span><span class="p">(</span><span class="s2">&quot;2019 Outdoor 1500m Times&quot;</span><span class="p">,</span> <span class="n">are</span><span class="o">.</span><span class="n">between_or_equal_to</span><span class="p">(</span><span class="mi">218</span><span class="p">,</span><span class="mi">223</span><span class="p">))</span><span class="o">.</span><span class="n">num_rows</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[26]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>27</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[27]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">final_table</span><span class="o">.</span><span class="n">where</span><span class="p">(</span><span class="s2">&quot;2021 Outdoor 1500m Times&quot;</span><span class="p">,</span> <span class="n">are</span><span class="o">.</span><span class="n">between_or_equal_to</span><span class="p">(</span><span class="mi">218</span><span class="p">,</span><span class="mi">223</span><span class="p">))</span><span class="o">.</span><span class="n">num_rows</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[27]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>56</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Wow! There are almost double the amount of times between 3:38 and 3:43 in comparison to those of 2019. 56 vs. 27. That's a 107% increase in concentration of 1500m times in that range from 2019.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[28]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">nineteen_percentiles</span> <span class="o">=</span> <span class="p">[</span><span class="n">percentile</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="n">final_table</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="mi">1</span><span class="p">))</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">110</span><span class="p">,</span> <span class="mi">10</span><span class="p">)]</span>
<span class="n">twentyone_percentiles</span> <span class="o">=</span> <span class="p">[</span><span class="n">percentile</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="n">final_table</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="mi">2</span><span class="p">))</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">110</span><span class="p">,</span> <span class="mi">10</span><span class="p">)]</span>
<span class="n">x_axis_values</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">101</span><span class="p">,</span> <span class="mi">10</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[76]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">figure</span><span class="p">,</span> <span class="n">axis_1</span> <span class="o">=</span> <span class="n">plot</span><span class="o">.</span><span class="n">subplots</span><span class="p">()</span>
<span class="n">axis_1</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">x_axis_values</span><span class="p">,</span> <span class="n">nineteen_percentiles</span><span class="p">,</span> <span class="n">color</span> <span class="o">=</span> <span class="s2">&quot;blue&quot;</span><span class="p">)</span>
<span class="n">axis_2</span> <span class="o">=</span> <span class="n">axis_1</span><span class="o">.</span><span class="n">twinx</span><span class="p">()</span>
<span class="n">axis_2</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">x_axis_values</span><span class="p">,</span> <span class="n">twentyone_percentiles</span><span class="p">,</span> <span class="n">color</span> <span class="o">=</span> <span class="s2">&quot;purple&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[76]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>[&lt;matplotlib.lines.Line2D at 0x11fe380d0&gt;]</pre>
</div>

</div>

<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>We can see from the graph that for each percentile, the 2019 data is above that of 2021, signaling that you must be faster this year to be of a higher percentile.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[55]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#export the cleaned data to my computer so I can easily visualize within R and Plotly </span>
<span class="n">final_table</span><span class="o">.</span><span class="n">to_csv</span><span class="p">(</span><span class="s2">&quot;2019 and 2021 Outdoor 1500m Data.csv&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[69]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#creating an x-axis for the normal curve </span>
<span class="n">x_values</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">500</span><span class="p">,</span> <span class="mf">0.01</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[70]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#using the equation of the gaussian function to model a theoretical distribution of the mean for each year </span>
<span class="n">y_values</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span> <span class="o">/</span> <span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="mi">2</span><span class="o">*</span><span class="n">math</span><span class="o">.</span><span class="n">pi</span><span class="p">))</span><span class="o">**</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">e</span><span class="o">**</span><span class="p">(</span><span class="o">-</span><span class="mf">0.5</span><span class="o">*</span><span class="p">((</span><span class="n">x_values</span> <span class="o">-</span> <span class="n">nineteen_avg</span><span class="p">)</span> <span class="o">/</span> <span class="p">(</span><span class="n">nineteen_sd</span> <span class="o">/</span> <span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="mi">95</span><span class="p">))))</span><span class="o">**</span><span class="mi">2</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>


<div class="output_subarea output_stream output_stderr output_text">
<pre>&lt;ipython-input-70-35b6ab5a80d6&gt;:2: RuntimeWarning: overflow encountered in power
  y_values = (1 / math.sqrt(2*math.pi))**(np.e**(-0.5*((x_values - nineteen_avg) / (nineteen_sd / math.sqrt(95))))**2)
</pre>
</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[71]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">y_values_2</span> <span class="o">=</span> <span class="p">(</span><span class="mi">1</span> <span class="o">/</span> <span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="mi">2</span><span class="o">*</span><span class="n">math</span><span class="o">.</span><span class="n">pi</span><span class="p">))</span><span class="o">**</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">e</span><span class="o">**</span><span class="p">(</span><span class="o">-</span><span class="mf">0.5</span><span class="o">*</span><span class="p">((</span><span class="n">x_values</span> <span class="o">-</span> <span class="n">twentyone_avg</span><span class="p">)</span> <span class="o">/</span> <span class="p">(</span><span class="n">twentyone_sd</span> <span class="o">/</span> <span class="n">math</span><span class="o">.</span><span class="n">sqrt</span><span class="p">(</span><span class="mi">95</span><span class="p">))))</span><span class="o">**</span><span class="mi">2</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>


<div class="output_subarea output_stream output_stderr output_text">
<pre>&lt;ipython-input-71-99ab16e7ad22&gt;:1: RuntimeWarning: overflow encountered in power
  y_values_2 = (1 / math.sqrt(2*math.pi))**(np.e**(-0.5*((x_values - twentyone_avg) / (twentyone_sd / math.sqrt(95))))**2)
</pre>
</div>
</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[93]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#using the guassian equation to draw two normal distributions of the data </span>
<span class="n">figure_2</span><span class="p">,</span> <span class="n">axis_2</span><span class="o">=</span> <span class="n">plot</span><span class="o">.</span><span class="n">subplots</span><span class="p">()</span>
<span class="n">axis_2</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">x_values</span><span class="p">,</span> <span class="n">y_values</span><span class="p">,</span> <span class="n">color</span> <span class="o">=</span> <span class="s2">&quot;red&quot;</span><span class="p">,</span> <span class="n">label</span> <span class="o">=</span> <span class="s2">&quot;2019&quot;</span><span class="p">)</span>
<span class="n">axis_3</span> <span class="o">=</span> <span class="n">axis_2</span><span class="o">.</span><span class="n">twinx</span><span class="p">()</span>
<span class="n">axis_3</span><span class="o">.</span><span class="n">plot</span><span class="p">(</span><span class="n">x_values</span><span class="p">,</span> <span class="n">y_values_2</span><span class="p">,</span> <span class="n">color</span> <span class="o">=</span> <span class="s2">&quot;blue&quot;</span><span class="p">)</span>
<span class="n">plot</span><span class="o">.</span><span class="n">xlim</span><span class="p">(</span><span class="mi">220</span><span class="p">,</span> <span class="mi">226</span><span class="p">)</span>
<span class="n">plot</span><span class="o">.</span><span class="n">axvline</span><span class="p">(</span><span class="n">x</span><span class="o">=</span><span class="n">nineteen_avg</span><span class="p">)</span>
<span class="n">plot</span><span class="o">.</span><span class="n">axvline</span><span class="p">(</span><span class="n">x</span><span class="o">=</span><span class="n">twentyone_avg</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[93]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>&lt;matplotlib.lines.Line2D at 0x1201d2a00&gt;</pre>
</div>

</div>

<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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
"
>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>These are two normal curves, approximated using the <a href="https://en.wikipedia.org/wiki/Normal_distribution">gaussian</a> equation, for the 2019 distribution (in red) and the 2021 distribution (in blue). You can see that virtually 100% of 2019's normalized mean data finishes before 2021's mean data starts.</p>

</div>
</div>
</div>
    </div>
  </div>
</body>

 


</html>
