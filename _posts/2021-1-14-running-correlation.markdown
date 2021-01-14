<!DOCTYPE html>
<html>
<head><meta charset="utf-8" />

<title>Running Correlation Between Stride Length and Average Pace Per Mile</title>

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
<h1 id="Analyzing-the-Correlation-Between-Running-Stride-Length-and-Average-Pace-Per-Mile">Analyzing the Correlation Between Running Stride Length and Average Pace Per Mile<a class="anchor-link" href="#Analyzing-the-Correlation-Between-Running-Stride-Length-and-Average-Pace-Per-Mile">&#182;</a></h1>
</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[2]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">from</span> <span class="nn">datascience</span> <span class="kn">import</span> <span class="o">*</span>
<span class="o">%</span><span class="k">matplotlib</span> inline
<span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plots</span>
<span class="n">plots</span><span class="o">.</span><span class="n">style</span><span class="o">.</span><span class="n">use</span><span class="p">(</span><span class="s1">&#39;fivethirtyeight&#39;</span><span class="p">)</span>
<span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Importing-the-Data">Importing the Data<a class="anchor-link" href="#Importing-the-Data">&#182;</a></h2>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>The data generating process was as follows: I went on my run. Once I finished my run, I saved it. I uploaded the run to my iPhone via bluetooth. Once the running data uploaded, I exported a CSV file of the data to my computer. The watch I use is the COROS Pace 2.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[44]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">progressive_longrun_data</span> <span class="o">=</span> <span class="n">Table</span><span class="o">.</span><span class="n">read_table</span><span class="p">(</span><span class="s2">&quot;ProgressiveLongRun.csv&quot;</span><span class="p">)</span>
<span class="n">progressive_cleaned</span> <span class="o">=</span> <span class="n">progressive_longrun_data</span><span class="o">.</span><span class="n">take</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="mi">18</span><span class="p">,</span><span class="mi">1</span><span class="p">))</span>
<span class="n">progressive_cleaned</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>



<div class="output_html rendered_html output_subarea ">
<table border="1" class="dataframe">
    <thead>
        <tr>
            <th>Split</th> <th>Time</th> <th>Moving Time</th> <th>Distance</th> <th>Elevation Gain</th> <th>Elev Loss</th> <th>Avg Pace</th> <th>Avg Moving Pace</th> <th>Best Pace</th> <th>Avg Run Cadence</th> <th>Max Run Cadence</th> <th>Avg Stride Length</th> <th>Avg HR</th> <th>Max HR</th> <th>Avg Temperature</th> <th>Calories</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1    </td> <td>0:06:39</td> <td>0:06:39    </td> <td>1.61    </td> <td>0             </td> <td>31       </td> <td>0:04:08 </td> <td>0:04:05        </td> <td>0:03:39  </td> <td>82             </td> <td>84             </td> <td>148              </td> <td>128   </td> <td>147   </td> <td>24             </td> <td>48      </td>
        </tr>
        <tr>
            <td>2    </td> <td>0:06:33</td> <td>0:06:33    </td> <td>1.61    </td> <td>6             </td> <td>30       </td> <td>0:04:04 </td> <td>0:04:03        </td> <td>0:03:46  </td> <td>82             </td> <td>83             </td> <td>150              </td> <td>141   </td> <td>145   </td> <td>22             </td> <td>63      </td>
        </tr>
        <tr>
            <td>3    </td> <td>0:06:33</td> <td>0:06:33    </td> <td>1.61    </td> <td>27            </td> <td>21       </td> <td>0:04:04 </td> <td>0:04:08        </td> <td>0:03:47  </td> <td>83             </td> <td>86             </td> <td>149              </td> <td>149   </td> <td>154   </td> <td>20             </td> <td>59      </td>
        </tr>
        <tr>
            <td>4    </td> <td>0:06:31</td> <td>0:06:31    </td> <td>1.61    </td> <td>16            </td> <td>31       </td> <td>0:04:03 </td> <td>0:04:04        </td> <td>0:03:54  </td> <td>82             </td> <td>85             </td> <td>150              </td> <td>151   </td> <td>153   </td> <td>21             </td> <td>70      </td>
        </tr>
        <tr>
            <td>5    </td> <td>0:06:33</td> <td>0:06:33    </td> <td>1.61    </td> <td>56            </td> <td>15       </td> <td>0:04:04 </td> <td>0:04:06        </td> <td>0:03:14  </td> <td>84             </td> <td>89             </td> <td>147              </td> <td>148   </td> <td>156   </td> <td>21             </td> <td>58      </td>
        </tr>
        <tr>
            <td>6    </td> <td>0:06:31</td> <td>0:06:31    </td> <td>1.61    </td> <td>5             </td> <td>31       </td> <td>0:04:03 </td> <td>0:04:02        </td> <td>0:03:52  </td> <td>82             </td> <td>85             </td> <td>150              </td> <td>155   </td> <td>165   </td> <td>23             </td> <td>72      </td>
        </tr>
        <tr>
            <td>7    </td> <td>0:06:29</td> <td>0:06:29    </td> <td>1.61    </td> <td>49            </td> <td>0        </td> <td>0:04:02 </td> <td>0:04:01        </td> <td>0:03:51  </td> <td>84             </td> <td>87             </td> <td>148              </td> <td>167   </td> <td>172   </td> <td>23             </td> <td>70      </td>
        </tr>
        <tr>
            <td>8    </td> <td>0:06:31</td> <td>0:06:27    </td> <td>1.61    </td> <td>34            </td> <td>4        </td> <td>0:04:00 </td> <td>0:04:01        </td> <td>0:03:47  </td> <td>84             </td> <td>86             </td> <td>148              </td> <td>165   </td> <td>173   </td> <td>24             </td> <td>68      </td>
        </tr>
        <tr>
            <td>9    </td> <td>0:06:27</td> <td>0:06:27    </td> <td>1.61    </td> <td>7             </td> <td>29       </td> <td>0:04:00 </td> <td>0:04:01        </td> <td>0:03:48  </td> <td>83             </td> <td>85             </td> <td>151              </td> <td>159   </td> <td>167   </td> <td>25             </td> <td>65      </td>
        </tr>
        <tr>
            <td>10   </td> <td>0:06:21</td> <td>0:06:21    </td> <td>1.61    </td> <td>0             </td> <td>34       </td> <td>0:03:57 </td> <td>0:03:57        </td> <td>0:03:52  </td> <td>83             </td> <td>84             </td> <td>154              </td> <td>162   </td> <td>170   </td> <td>25             </td> <td>78      </td>
        </tr>
        <tr>
            <td>11   </td> <td>0:06:15</td> <td>0:06:15    </td> <td>1.61    </td> <td>0             </td> <td>35       </td> <td>0:03:53 </td> <td>0:03:53        </td> <td>0:03:38  </td> <td>83             </td> <td>85             </td> <td>155              </td> <td>165   </td> <td>169   </td> <td>25             </td> <td>69      </td>
        </tr>
        <tr>
            <td>12   </td> <td>0:06:12</td> <td>0:06:12    </td> <td>1.61    </td> <td>34            </td> <td>24       </td> <td>0:03:51 </td> <td>0:03:53        </td> <td>0:03:37  </td> <td>84             </td> <td>88             </td> <td>154              </td> <td>165   </td> <td>170   </td> <td>24             </td> <td>68      </td>
        </tr>
        <tr>
            <td>13   </td> <td>0:06:05</td> <td>0:06:05    </td> <td>1.61    </td> <td>15            </td> <td>32       </td> <td>0:03:47 </td> <td>0:03:49        </td> <td>0:03:28  </td> <td>84             </td> <td>89             </td> <td>157              </td> <td>159   </td> <td>167   </td> <td>24             </td> <td>66      </td>
        </tr>
        <tr>
            <td>14   </td> <td>0:05:55</td> <td>0:05:55    </td> <td>1.61    </td> <td>46            </td> <td>17       </td> <td>0:03:41 </td> <td>0:03:41        </td> <td>0:02:46  </td> <td>86             </td> <td>90             </td> <td>159              </td> <td>164   </td> <td>176   </td> <td>23             </td> <td>67      </td>
        </tr>
        <tr>
            <td>15   </td> <td>0:05:51</td> <td>0:05:51    </td> <td>1.61    </td> <td>17            </td> <td>30       </td> <td>0:03:38 </td> <td>0:03:39        </td> <td>0:03:23  </td> <td>84             </td> <td>86             </td> <td>163              </td> <td>168   </td> <td>173   </td> <td>24             </td> <td>71      </td>
        </tr>
        <tr>
            <td>16   </td> <td>0:05:46</td> <td>0:05:46    </td> <td>1.61    </td> <td>48            </td> <td>1        </td> <td>0:03:35 </td> <td>0:03:38        </td> <td>0:03:29  </td> <td>87             </td> <td>89             </td> <td>162              </td> <td>171   </td> <td>177   </td> <td>23             </td> <td>72      </td>
        </tr>
        <tr>
            <td>17   </td> <td>0:05:39</td> <td>0:05:39    </td> <td>1.61    </td> <td>38            </td> <td>5        </td> <td>0:03:31 </td> <td>0:03:32        </td> <td>0:03:24  </td> <td>86             </td> <td>89             </td> <td>165              </td> <td>172   </td> <td>179   </td> <td>23             </td> <td>61      </td>
        </tr>
        <tr>
            <td>18   </td> <td>0:05:27</td> <td>0:05:27    </td> <td>1.61    </td> <td>9             </td> <td>22       </td> <td>0:03:23 </td> <td>0:03:21        </td> <td>0:02:53  </td> <td>87             </td> <td>91             </td> <td>169              </td> <td>173   </td> <td>180   </td> <td>24             </td> <td>74      </td>
        </tr>
    </tbody>
</table>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="Initial-Visualization-of-the-Data">Initial Visualization of the Data<a class="anchor-link" href="#Initial-Visualization-of-the-Data">&#182;</a></h1>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>We want to visualize the data initially, so that we can see if there are any obvious patterns in the data. Upon initial inspection, there looks to be good possibility for a linear relationship between average running pace and average stride length.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[84]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">progressive_cleaned</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="s2">&quot;Avg Pace&quot;</span><span class="p">,</span> <span class="s2">&quot;Avg Stride Length&quot;</span><span class="p">)</span>
<span class="n">plots</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">&quot;Average Running Pace (Minutes per Kilometer)&quot;</span><span class="p">)</span>
<span class="n">plots</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">&quot;Average Stride Length (Centimeters)&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[84]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>Text(0, 0.5, &#39;Average Stride Length (Centimeters)&#39;)</pre>
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
<p>In the initial visualization of the data, it becomes apparent that the minutes and second display on the x axis isn't very elegant. I spend the following few lines converting the strings of times into solely seconds displays.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[65]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">import</span> <span class="nn">datetime</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[89]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">string_version</span> <span class="o">=</span> <span class="p">[</span><span class="nb">str</span><span class="p">(</span><span class="n">i</span><span class="p">)</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">progressive_cleaned</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;Avg Pace&quot;</span><span class="p">)]</span>
<span class="c1">#modifying the running time in minutes per kilometer from elements in a numpy array to individual strings </span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[91]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">updated_list</span> <span class="o">=</span> <span class="p">[]</span>
<span class="c1">#creating an empty list that we can append the datetime version of the strings to </span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">string_version</span><span class="p">:</span>
    <span class="n">date_time_version</span> <span class="o">=</span> <span class="n">datetime</span><span class="o">.</span><span class="n">datetime</span><span class="o">.</span><span class="n">strptime</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="s2">&quot;%H:%M:%S&quot;</span><span class="p">)</span>
    <span class="n">updated_list</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">date_time_version</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[&nbsp;]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">updated_list</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[103]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">final_list</span> <span class="o">=</span> <span class="p">[]</span>
<span class="c1">#the final list for which we are going to append the time in seconds per kilometer</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">updated_list</span><span class="p">:</span>
    <span class="n">a_timedelta</span> <span class="o">=</span> <span class="n">i</span> <span class="o">-</span> <span class="n">datetime</span><span class="o">.</span><span class="n">datetime</span><span class="p">(</span><span class="mi">1900</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span>
    <span class="n">seconds</span> <span class="o">=</span> <span class="n">a_timedelta</span><span class="o">.</span><span class="n">total_seconds</span><span class="p">()</span>
    <span class="n">final_list</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="nb">int</span><span class="p">(</span><span class="n">seconds</span><span class="p">))</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[107]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">finale_list</span> <span class="o">=</span> <span class="n">make_array</span><span class="p">(</span><span class="n">final_list</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[110]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">running_pace_vs_stride_length</span> <span class="o">=</span> <span class="n">Table</span><span class="p">()</span><span class="o">.</span><span class="n">with_column</span><span class="p">(</span><span class="s2">&quot;Average Running Pace&quot;</span><span class="p">,</span> <span class="n">final_list</span><span class="p">)</span><span class="o">.</span><span class="n">with_column</span><span class="p">(</span><span class="s2">&quot;Average Stride Length&quot;</span><span class="p">,</span> <span class="n">progressive_cleaned</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;Avg Stride Length&quot;</span><span class="p">))</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[113]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">running_pace_vs_stride_length</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>



<div class="output_html rendered_html output_subarea ">
<table border="1" class="dataframe">
    <thead>
        <tr>
            <th>Average Running Pace</th> <th>Average Stride Length</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>248                 </td> <td>148                  </td>
        </tr>
        <tr>
            <td>244                 </td> <td>150                  </td>
        </tr>
        <tr>
            <td>244                 </td> <td>149                  </td>
        </tr>
        <tr>
            <td>243                 </td> <td>150                  </td>
        </tr>
        <tr>
            <td>244                 </td> <td>147                  </td>
        </tr>
        <tr>
            <td>243                 </td> <td>150                  </td>
        </tr>
        <tr>
            <td>242                 </td> <td>148                  </td>
        </tr>
        <tr>
            <td>240                 </td> <td>148                  </td>
        </tr>
        <tr>
            <td>240                 </td> <td>151                  </td>
        </tr>
        <tr>
            <td>237                 </td> <td>154                  </td>
        </tr>
        <tr>
            <td>233                 </td> <td>155                  </td>
        </tr>
        <tr>
            <td>231                 </td> <td>154                  </td>
        </tr>
        <tr>
            <td>227                 </td> <td>157                  </td>
        </tr>
        <tr>
            <td>221                 </td> <td>159                  </td>
        </tr>
        <tr>
            <td>218                 </td> <td>163                  </td>
        </tr>
        <tr>
            <td>215                 </td> <td>162                  </td>
        </tr>
        <tr>
            <td>211                 </td> <td>165                  </td>
        </tr>
        <tr>
            <td>203                 </td> <td>169                  </td>
        </tr>
    </tbody>
</table>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[115]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">running_pace_vs_stride_length</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="s2">&quot;Average Running Pace&quot;</span><span class="p">,</span> <span class="s2">&quot;Average Stride Length&quot;</span><span class="p">)</span>
<span class="n">plots</span><span class="o">.</span><span class="n">xlabel</span><span class="p">(</span><span class="s2">&quot;Average Running Pace (Seconds per Kilometer)&quot;</span><span class="p">)</span>
<span class="n">plots</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s2">&quot;Average Stride Length (Centimeters)&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[115]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>Text(0, 0.5, &#39;Average Stride Length (Centimeters)&#39;)</pre>
</div>

</div>

<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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c1UW0UVGEARER0dj7ty5mDhxIhITEwEAp06dQmpqqmQBiYjK86zzitXUechqaq7KIqrIZGdnw9vbG8OHD8fWrVsRGRmJzMxMAMDWrVvx+eefSxqSiOjfnnVesZo6D1lNzVVZRL9P5vbt2zh48CASEhIg/PMNAYDXX38dP//8s2QBiYjK83heMYN6+qLmFaup85DV1FyVRdSF/+joaHz22Wfo2LEjSktLNdqaNm2K27dvSxKOiEibx/OKxcfHw9HRUXT/mqam5qosot8nY2trW25bYWGhxpENERHRY6KKjIODA3766ady206fPo1WrVpVaigiIqodRJ0uGzduHKZPnw4TExMMHjwYAJCTk4Pt27djw4YNWLVqlaQhiYhIN4kqMqNGjcKNGzcQEhKC4OBgAI/eK6Onp4cPPvgAQ4YMkTQkERHpJlFFBgA+/vhjjB07FsePH0d6ejoUCgV69uyJ5s2bSxiPiIh0magiU1paCn19fdjb22PkyJFSZyIiolpCVJF5+eWXMWjQIPj5+cHFxUXqTERENUJtn1esKoi6u6x///745ptv4OnpiU6dOuHzzz9HUlKS1NmIiKpVbZ9XrCqIKjIrV65EXFwctm7dCicnJyxZsgQuLi7o378/wsPDkZtbu+baISICav+8YlVB9ASZBgYG6NevH7Zt24a4uDisWLECJSUlmDp1Kl5++WUpMxIRVYvaPq9YVXiuqf5NTU3h5eWF3r17w8rKCg8fPqzsXERE1a62zytWFUTfwgwAubm52LdvH3bu3Ilff/0V9evXR9++fTF06FCp8hERVZvaPq9YVRBVZA4ePIidO3fiwIEDKCgoQNeuXbFq1SoMGDAAxsY8fCQiovKJKjJ+fn5wdHTERx99hCFDhsDOzk7qXEREVAuIKjJHjx5F+/bty207deoUIiIiEBoaWqnBiIhI94kqMv8uMAkJCYiIiMDOnTuRlJSEhg0bssgQEVEZoi/85+TkYO/evYiMjMSZM2cAAK+++io+/PBDDBo0SLKARESku55aZFQqFY4cOYLIyEj8+OOPKCgogI2NDd5//31s3LgRISEh6NatW1VlJSIiHaO1yMydOxe7du1Ceno66tevj379+sHf3x8eHh64f/8+NmzYUJU5iYhIB2ktMqGhoZDJZOjduzfWrVsHhUKhbpP9M80CERHR02h94v/dd99F48aN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
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
<p>Now we have cleaned the data, dropped the unnecessary parts, and have a simple visualization of what we are going to look at in further detail. We have a two column table containing what we would like to analyze for this particular moment. Time for some statistical testing.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[121]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># Creating some functions that we will use to analyze the data. </span>
<span class="c1">#We need standard units so that we can run our correlation function. </span>

<span class="k">def</span> <span class="nf">standard_units</span><span class="p">(</span><span class="n">x</span><span class="p">):</span>
    <span class="sd">&quot;&quot;&quot; Converts an array x to standard units &quot;&quot;&quot;</span>
    <span class="k">return</span> <span class="p">(</span><span class="n">x</span> <span class="o">-</span> <span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">x</span><span class="p">))</span> <span class="o">/</span> <span class="n">np</span><span class="o">.</span><span class="n">std</span><span class="p">(</span><span class="n">x</span><span class="p">)</span>

<span class="k">def</span> <span class="nf">correlation</span><span class="p">(</span><span class="n">t</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">):</span>
    <span class="sd">&quot;&quot;&quot; Computes correlation: t is a table, and x and y are column names &quot;&quot;&quot;</span>
    <span class="n">x_su</span> <span class="o">=</span> <span class="n">standard_units</span><span class="p">(</span><span class="n">t</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="n">x</span><span class="p">))</span>
    <span class="n">y_su</span> <span class="o">=</span> <span class="n">standard_units</span><span class="p">(</span><span class="n">t</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="n">y</span><span class="p">))</span>
    <span class="k">return</span> <span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">x_su</span> <span class="o">*</span> <span class="n">y_su</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[122]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#generating the correlation coefficient </span>
<span class="n">correlation</span><span class="p">(</span><span class="n">running_pace_vs_stride_length</span><span class="p">,</span> <span class="s2">&quot;Average Running Pace&quot;</span><span class="p">,</span> <span class="s2">&quot;Average Stride Length&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[122]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>-0.9819409345425044</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Wow! We generated a correlation coefficient of -0.98, which means there is almost an exactly proportionate decrease in stride length for an increase in the amount of seconds it take to complete each kilometer! However, a correlation coefficient alone is not enough. We need to also look at a linear regression line and plot the residuals.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[124]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#our slope and intercept functions </span>
<span class="k">def</span> <span class="nf">slope</span><span class="p">(</span><span class="n">t</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">):</span>
    <span class="sd">&quot;&quot;&quot; Computes the slope of the regression line, like correlation above &quot;&quot;&quot;</span>
    <span class="n">r</span> <span class="o">=</span> <span class="n">correlation</span><span class="p">(</span><span class="n">t</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">)</span>
    <span class="n">y_sd</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">std</span><span class="p">(</span><span class="n">t</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="n">y</span><span class="p">))</span>
    <span class="n">x_sd</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">std</span><span class="p">(</span><span class="n">t</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="n">x</span><span class="p">))</span>
    <span class="k">return</span> <span class="n">r</span> <span class="o">*</span> <span class="n">y_sd</span> <span class="o">/</span> <span class="n">x_sd</span>

<span class="k">def</span> <span class="nf">intercept</span><span class="p">(</span><span class="n">t</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">):</span>
    <span class="sd">&quot;&quot;&quot; Computes the intercept of the regression line, like slope above &quot;&quot;&quot;</span>
    <span class="n">x_mean</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">t</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="n">x</span><span class="p">))</span>
    <span class="n">y_mean</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">t</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="n">y</span><span class="p">))</span>
    <span class="k">return</span> <span class="n">y_mean</span> <span class="o">-</span> <span class="n">slope</span><span class="p">(</span><span class="n">t</span><span class="p">,</span> <span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">)</span><span class="o">*</span><span class="n">x_mean</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[126]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">slope_for_regression_line</span> <span class="o">=</span> <span class="n">slope</span><span class="p">(</span><span class="n">running_pace_vs_stride_length</span><span class="p">,</span> <span class="s2">&quot;Average Running Pace&quot;</span><span class="p">,</span> <span class="s2">&quot;Average Stride Length&quot;</span><span class="p">)</span>
<span class="n">slope_for_regression_line</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[126]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>-0.48736086175942556</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[128]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">intercept_for_regression_line</span> <span class="o">=</span> <span class="n">intercept</span><span class="p">(</span><span class="n">running_pace_vs_stride_length</span><span class="p">,</span> <span class="s2">&quot;Average Running Pace&quot;</span><span class="p">,</span> <span class="s2">&quot;Average Stride Length&quot;</span><span class="p">)</span>
<span class="n">intercept_for_regression_line</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[128]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>267.67321364452425</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[129]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1">#generating the predicted stride length from running pace and adding that to the table </span>
<span class="n">predictions</span> <span class="o">=</span> <span class="n">slope_for_regression_line</span> <span class="o">*</span> <span class="n">running_pace_vs_stride_length</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;Average Running Pace&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="n">intercept_for_regression_line</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[130]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">predictions</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[130]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>array([146.80771993, 148.75716338, 148.75716338, 149.24452424,
       148.75716338, 149.24452424, 149.7318851 , 150.70660682,
       150.70660682, 152.16868941, 154.11813285, 155.09285458,
       157.04229803, 159.9664632 , 161.42854578, 162.89062837,
       164.84007181, 168.73895871])</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[147]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">run_with_predictions</span> <span class="o">=</span> <span class="n">running_pace_vs_stride_length</span><span class="o">.</span><span class="n">with_column</span><span class="p">(</span><span class="s2">&quot;Predicted Stride Length&quot;</span><span class="p">,</span> <span class="n">predictions</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[148]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">run_with_errors</span> <span class="o">=</span> <span class="n">run_with_predictions</span><span class="o">.</span><span class="n">with_column</span><span class="p">(</span><span class="s2">&quot;Error&quot;</span><span class="p">,</span> <span class="n">run_with_predictions</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;Average Stride Length&quot;</span><span class="p">)</span> <span class="o">-</span> <span class="n">run_with_predictions</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;Predicted Stride Length&quot;</span><span class="p">))</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[150]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">run_with_errors</span><span class="o">.</span><span class="n">show</span><span class="p">()</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>



<div class="output_html rendered_html output_subarea ">
<table border="1" class="dataframe">
    <thead>
        <tr>
            <th>Average Running Pace</th> <th>Average Stride Length</th> <th>Predicted Stride Length</th> <th>Error</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>248                 </td> <td>148                  </td> <td>146.808                </td> <td>1.19228  </td>
        </tr>
        <tr>
            <td>244                 </td> <td>150                  </td> <td>148.757                </td> <td>1.24284  </td>
        </tr>
        <tr>
            <td>244                 </td> <td>149                  </td> <td>148.757                </td> <td>0.242837 </td>
        </tr>
        <tr>
            <td>243                 </td> <td>150                  </td> <td>149.245                </td> <td>0.755476 </td>
        </tr>
        <tr>
            <td>244                 </td> <td>147                  </td> <td>148.757                </td> <td>-1.75716 </td>
        </tr>
        <tr>
            <td>243                 </td> <td>150                  </td> <td>149.245                </td> <td>0.755476 </td>
        </tr>
        <tr>
            <td>242                 </td> <td>148                  </td> <td>149.732                </td> <td>-1.73189 </td>
        </tr>
        <tr>
            <td>240                 </td> <td>148                  </td> <td>150.707                </td> <td>-2.70661 </td>
        </tr>
        <tr>
            <td>240                 </td> <td>151                  </td> <td>150.707                </td> <td>0.293393 </td>
        </tr>
        <tr>
            <td>237                 </td> <td>154                  </td> <td>152.169                </td> <td>1.83131  </td>
        </tr>
        <tr>
            <td>233                 </td> <td>155                  </td> <td>154.118                </td> <td>0.881867 </td>
        </tr>
        <tr>
            <td>231                 </td> <td>154                  </td> <td>155.093                </td> <td>-1.09285 </td>
        </tr>
        <tr>
            <td>227                 </td> <td>157                  </td> <td>157.042                </td> <td>-0.042298</td>
        </tr>
        <tr>
            <td>221                 </td> <td>159                  </td> <td>159.966                </td> <td>-0.966463</td>
        </tr>
        <tr>
            <td>218                 </td> <td>163                  </td> <td>161.429                </td> <td>1.57145  </td>
        </tr>
        <tr>
            <td>215                 </td> <td>162                  </td> <td>162.891                </td> <td>-0.890628</td>
        </tr>
        <tr>
            <td>211                 </td> <td>165                  </td> <td>164.84                 </td> <td>0.159928 </td>
        </tr>
        <tr>
            <td>203                 </td> <td>169                  </td> <td>168.739                </td> <td>0.261041 </td>
        </tr>
    </tbody>
</table>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[152]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">root_mean_squared_error</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">run_with_errors</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;Error&quot;</span><span class="p">)</span> <span class="o">**</span> <span class="mi">2</span><span class="p">)</span> <span class="o">**</span> <span class="mf">0.5</span>
</pre></div>

    </div>
</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[153]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">root_mean_squared_error</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[153]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>1.2311567965332846</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[162]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">run_with_errors</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="s2">&quot;Average Running Pace&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt"></div>




<div class="output_png output_subarea ">
<img src="data:image/png;base64,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Hh60a9eOnTt3ArBnzx5ycnLs2gQFBdGkSRNbGxEREZGKyMXoCpKSkgDw8fGxm+7j48OpU6cAOHPmDM7OztSuXbtAmzNnzlxz3QkJCUa7VyFUlTqvRrVXXVW9fhGpPAyHqctMJpPda6vVWmDala7XJiQkxCF9K88SEhKqRJ1Xo9qrZu1QtetXiBSpfAyf5rNYLAAFjjCdO3fOdrTK19eXvLw8kpOTr9lGREREpCIyHKbq1auHxWJh48aNtmmZmZns2LGDNm3aABAeHo6rq6tdmxMnThAfH29rIyIiIlIRFek0X1paGocPHwYgPz+f48ePs2/fPry9valbty4xMTG8/vrrhISE0KhRI2bMmEH16tXp06cPADVr1uSRRx5h4sSJ+Pj44O3tzfjx42nWrBkRERElVpyIiIhISStSmNq9ezc9evSwvY6LiyMuLo4BAwYwd+5cRo0axcWLFxk9ejQpKSm0bNmSVatW4eXlZVtm6tSpODs7M2TIEDIzM+nQoQPz5s3D2dnZ8VWJiIiIlBJTSkqKtaw7UZVV9YG4qr1qqsr1V+XaRSorPZtPRERExACFKREREREDFKZEREREDFCYEhERETFAYUpERETEAIUpEREREQMUpkREREQMUJgSERERMUBhSkRERMQAhSkRERERAxSmRERERAxQmBIRERExQGFKRERExACFKREREREDFKZEREREDFCYEhERETFAYUpERETEAIUpEREREQMUpkREREQMUJgSERERMUBhSkRERMQAhSkRERERAxSmRERERAxQmBIRERExQGFKRERExACFKREREREDFKZEREREDFCYEhERETHAIWEqLCwMs9lc4Kdfv34AxMTEFJh3zz33OGLTIiIiImXKxREr2bhxI3l5ebbXp0+fJiIigl69etmmRUREMH/+fNtrNzc3R2xaREREpEw5JEzVqVPH7vWiRYvw8vKyC1Pu7u5YLBZHbE5ERESk3HD4mCmr1cqiRYuIjo7G09PTNn3Hjh00atSIli1b8tRTT3H27FlHb1pERESk1JlSUlKsjlzhhg0b6N27N19//TXNmzcHYOXKlXh4eFCvXj2OHj3KlClTyM/PZ9OmTbi7u19zXQkJCY7smohIuRASElLWXRARB3J4mBo0aBDHjh1jw4YN12xz6tQpwsLCWLBgAVFRUY7cfIWTkJBQZf+wqvaqWTtU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0PbSdEcKAdo2K96yFeVLnogUXan95XVzcyM8PJyNGzfSq1cv2/SNGzcSFRVleP2+HoV/8FQU45t7/+kD0tgplWup5e5sFw5quZePD+Dy2q/SeE/gxk+BVcTfeevvP0V1+RSrk+mPMVaXaw71rsa3UcEFlvnH/y5Q38vV9nv0j/9d4K02jg1TIiJ/VqqfVk8++SSPPfYYLVu2pE2bNixYsIDTp08zZMiQ0uxGuVYaH5ClFQ5uVHntV2mFlvIaJh3pagPQC9u3xRljVVnGT4pIxVGqf6179+7N+fPnee2110hKSuKWW27hk08+ITi44LdLKTnl9YhGee1XaSmvYdKRbjToFCdgVoVQKiLlS6n/lRk+fDjDhw8v7c2KlHtVIUxeDjpAkYJOcQJmVQilIlK+6CubiJSay0En8aK1SLdZKE7ArAqhVETKF4UpESk1l4NOQkKKw69SFREpK6X+oGMRERGRykRhSkRERMQAhSkRERERAxSmRERERAxQmBIRERExQGFKRERExACFKREREREDFKZEREREDDClpKTcyEPcRURERORPdGRKRERExACFKREREREDFKZEREREDFCYEhERETFAYUpERETEAIUpB3vjjTfo1KkTdevWpWHDhkRHR3PgwAG7NqtXr6Z37940bNgQs9nMli1bCqwnKyuL0aNH06BBAwICAujfvz8nTpworTKK5Xq15+TkMGnSJNq1a0dAQABNmjRh+PDhHDt2zG49lbF2gClTptC6dWsCAgKoV68eUVFR7Ny5065NZa39z0aNGoXZbGbWrFl20yti7VC0+mNiYjCbzXY/99xzj12bilq/iChMOdzWrVsZNmwY69evZ/Xq1bi4uNCrVy9+/fVXW5uMjAzuuOMOXnnllWuuZ9y4caxZs4b333+ftWvXcuHCBaKjo8nLyyuNMorlerVnZGSwd+9enn/+eTZv3szHH3/MiRMn6NOnD7m5ubb1VMbaAUJCQpgxYwbbt29n3bp11KtXjz59+nDmzBlbm8pa+2Wff/45P/zwA/7+/gXmVcTaoej1R0REEB8fb/v59NNP7eZX1PpFRPeZKnFpaWkEBwezZMkS7rvvPrt5ycnJNGzYkDVr1tC+fXvb9NTUVBo1asScOXPo168fAMePHycsLIwVK1bQpUuXUq2huAqr/bKffvqJtm3bsm3bNpo1a1alav/tt98I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
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
<h1 id="Taking-A-Closer-Look-at-the-Residuals">Taking A Closer Look at the Residuals<a class="anchor-link" href="#Taking-A-Closer-Look-at-the-Residuals">&#182;</a></h1>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>From that plot, we can tell that the trend in the residuals looks good. The aim of any linear regression estimate is to generate residuals that appear as white noise. However, the plot is a little bit zoomed out. Let's manipulate the x and y axis to generate a closer look at the residuals.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[166]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">run_with_errors</span><span class="o">.</span><span class="n">scatter</span><span class="p">(</span><span class="s2">&quot;Average Running Pace&quot;</span><span class="p">,</span> <span class="s2">&quot;Error&quot;</span><span class="p">)</span>
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
<div class="prompt input_prompt">In&nbsp;[169]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">mean_stride_length</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">run_with_errors</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;Average Stride Length&quot;</span><span class="p">))</span>
<span class="n">mean_stride_length</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[169]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>154.38888888888889</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[173]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">maximum_error</span> <span class="o">=</span> <span class="nb">max</span><span class="p">(</span><span class="nb">abs</span><span class="p">(</span><span class="n">run_with_errors</span><span class="o">.</span><span class="n">column</span><span class="p">(</span><span class="s2">&quot;Error&quot;</span><span class="p">)))</span>
<span class="n">maximum_error</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[173]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>2.706606822262131</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[174]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="mi">2</span> <span class="o">/</span> <span class="mf">154.38</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[174]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>0.012955045990413267</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[175]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">root_mean_squared_error</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[175]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>1.2311567965332846</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[176]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">root_mean_squared_error</span> <span class="o">/</span> <span class="n">mean_stride_length</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">


<div class="output_area">

    <div class="prompt output_prompt">Out[176]:</div>




<div class="output_text output_subarea output_execute_result">
<pre>0.007974387311118792</pre>
</div>

</div>

</div>
</div>

</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>With this zoomed in look, we can tell that most of our errors hover around the range +- 2. This means that our usual error is around 2 centimeters. That's not a bad error. Given the mean stride length of 154, the predicted percentage of stride length that we will be off by is about 1.3 percent. That's a darn good estimate. If we take into consideration the RMSE of 1.23, we take 1.23 / 154.38 and get a result of 0.007, which is 0.07 percent.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="Conclusion">Conclusion<a class="anchor-link" href="#Conclusion">&#182;</a></h1>
</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="prompt input_prompt">
</div><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>From analysis of the errors, and correlation coefficient of -0.98, we can conclude that linear prediction is a good indicator for calculating my stride length, given a running pace between 200 and 300 seconds per kilometer.</p>

</div>
</div>
</div>
<div class="cell border-box-sizing code_cell rendered">
<div class="input">
<div class="prompt input_prompt">In&nbsp;[&nbsp;]:</div>
<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span>
</pre></div>

    </div>
</div>
</div>

</div>
    </div>
  </div>
</body>




</html>
