(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\nbody {\r\n    position: relative; \r\n}\r\nbody {\r\n    background: #fff;\r\n   \r\n}\r\n#bg {\r\n    position: fixed; \r\n    top: -50%; \r\n    left: -50%; \r\n    width: 200%; \r\n    height: 200%;\r\n  }\r\n#bg img {\r\n    position: absolute; \r\n    top: 0; \r\n    left: 0; \r\n    right: 0; \r\n    bottom: 0; \r\n    margin: auto; \r\n    min-width: 50%;\r\n    min-height: 50%;\r\n  }\r\n.blurred-box{\r\n    padding-top:50px;\r\n    width: 90%;\r\n    height:500px;\r\n    margin-left: 5.2%;\r\n    margin-top: -10%;\r\n    background: inherit;\r\n    border-radius: 2px;\r\n   overflow: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n.blurred-box:after{\r\n   content: '';\r\n   background: inherit; \r\n   position: absolute;\r\n   left: -25px;\r\n   right: 0;\r\n   top: -25px;  \r\n   z-index: 99;\r\n   bottom: 0;\r\n \r\n   box-shadow: inset 0 0 0 300px rgba(255,255,255,0.3);\r\n   -webkit-filter: blur(0.1em);\r\n           filter: blur(0.1em);\r\n  }\r\n.stock-image-intro{\r\n    height:100%;\r\n    width: 40%;\r\n    \r\n    position: fixed;\r\n    z-index: -1;  \r\n}\r\n.stock-image{\r\n      height:40%;\r\n      width: 40%;\r\n      min-width: 1000px;\r\n      position: fixed;\r\n      z-index: -1;  \r\n  }\r\n.block {\r\n    height: 5em;\r\n    line-height: 5em;\r\n    width: 10em;\r\n    background: #464646;\r\n    color: #fdfdfd;\r\n    text-align: center;\r\n    margin: 1em auto;\r\n    text-shadow: 0 0 1px #333; /* so one can see fadeBgColor properly */\r\n  }\r\n.animatable {\r\n    \r\n    /* initially hide animatable objects */\r\n    visibility: hidden;\r\n    \r\n    /* initially pause animatable objects their animations */\r\n    -webkit-animation-play-state: paused;   \r\n    animation-play-state: paused; \r\n  }\r\n/* show objects being animated */\r\n.animated {\r\n    visibility: visible;\r\n    \r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n    \r\n    -webkit-animation-duration: 3s;\r\n    animation-duration: 3s;\r\n  \r\n    -webkit-animation-play-state: running;\r\n    animation-play-state: running;\r\n  }\r\n/* CSS Animations (extracted from http://glifo.uiparade.com/) */\r\n@-webkit-keyframes fadeInDown {\r\n      0% {\r\n          opacity: 0;\r\n          -webkit-transform: translateY(-20px);\r\n      }\t100% {\r\n          opacity: 1;\r\n          -webkit-transform: translateY(0);\r\n      }\r\n  }\r\n@keyframes fadeInDown {\r\n      0% {\r\n          opacity: 0;\r\n          transform: translateY(-20px);\r\n      }\r\n      100% {\r\n          opacity: 1;\r\n          transform: translateY(0);\r\n      }\r\n  }\r\n@-webkit-keyframes fadeIn {\r\n      0% {\r\n          opacity: 0;\r\n      }\r\n      20% {\r\n          opacity: 0;\r\n      }\r\n      100% {\r\n          opacity: 1;\r\n      }\r\n  }\r\n@keyframes fadeIn {\r\n      0% {\r\n          opacity: 0;\r\n      }\r\n      60% {\r\n          opacity: 0;\r\n      }\r\n      20% {\r\n          opacity: 0;\r\n      }\r\n      100% {\r\n          opacity: 1;\r\n      }\r\n  }\r\n@-webkit-keyframes bounceInLeft {\r\n      0% {\r\n          opacity: 0;\r\n          -webkit-transform: translateX(-2000px);\r\n      }\r\n      60% {\r\n          -webkit-transform: translateX(20px);\r\n      }\r\n  \r\n      80% {\r\n          -webkit-transform: translateX(-5px);\r\n      }\r\n  \r\n      100% {\r\n          opacity: 1;\r\n          -webkit-transform: translateX(0);\r\n      }\r\n  }\r\n@keyframes bounceInLeft {\r\n      0% {\r\n          opacity: 0;\r\n          transform: translateX(-2000px);\r\n      }\r\n  \r\n      60% {\r\n          transform: translateX(20px);\r\n      }\r\n  \r\n      80% {\r\n          transform: translateX(-5px);\r\n      }\r\n  \r\n      100% {\r\n          opacity: 1;\r\n          transform: translateX(0);\r\n      }\r\n  }\r\n@-webkit-keyframes bounceInRight {\r\n      0% {\r\n          opacity: 0;\r\n          -webkit-transform: translateX(2000px);\r\n      }\r\n  \r\n      60% {\r\n          -webkit-transform: translateX(-20px);\r\n      }\r\n  \r\n      80% {\r\n          -webkit-transform: translateX(5px);\r\n      }\r\n  \r\n      100% {\r\n          opacity: 1;\r\n          -webkit-transform: translateX(0);\r\n      }\r\n  }\r\n@keyframes bounceInRight {\r\n      0% {\r\n          opacity: 0;\r\n          transform: translateX(2000px);\r\n      }\r\n  \r\n      60% {\r\n          transform: translateX(-20px);\r\n      }\r\n  \r\n      80% {\r\n          transform: translateX(5px);\r\n      }\r\n  \r\n      100% {\r\n          opacity: 1;\r\n          transform: translateX(0);\r\n      }\r\n  }\r\n@-webkit-keyframes fadeInUp {\r\n      0% {\r\n          opacity: 0;\r\n          -webkit-transform: translateY(20px);\r\n      }\t100% {\r\n          opacity: 1;\r\n          -webkit-transform: translateY(0);\r\n      }\r\n  }\r\n@keyframes fadeInUp {\r\n      0% {\r\n          opacity: 0;\r\n          transform: translateY(20px);\r\n      }\r\n  \r\n      100% {\r\n          opacity: 1;\r\n          transform: translateY(0);\r\n      }\r\n  }\r\n@-webkit-keyframes bounceIn {\r\n      0% {\r\n          opacity: 0;\r\n          -webkit-transform: scale(.3);\r\n      }\r\n      50% {\r\n          -webkit-transform: scale(1.05);\r\n      }\r\n  \r\n      70% {\r\n          -webkit-transform: scale(.9);\r\n      }\r\n  \r\n      100% {\r\n          opacity: 1;\r\n          -webkit-transform: scale(1);\r\n      }\r\n  }\r\n@keyframes bounceIn {\r\n      0% {\r\n          opacity: 0;\r\n          transform: scale(.3);\r\n      }\r\n  \r\n      50% {\r\n          transform: scale(1.05);\r\n      }\r\n  \r\n      70% {\r\n          transform: scale(.9);\r\n      }\r\n  \r\n      100% {\r\n          opacity: 1;\r\n          transform: scale(1);\r\n      }\r\n  }\r\n@-webkit-keyframes moveUp {\r\n      0% {\r\n          opacity: 1;\r\n          -webkit-transform: translateY(40px);\r\n      }\t100% {\r\n          opacity: 1;\r\n          -webkit-transform: translateY(0);\r\n      }\r\n  }\r\n@keyframes moveUp {\r\n      0% {\r\n          opacity: 1;\r\n          transform: translateY(40px);\r\n      }\r\n  \r\n      100% {\r\n          opacity: 1;\r\n          transform: translateY(0);\r\n      }\r\n  }\r\n@-webkit-keyframes fadeBgColor {\r\n      0%{\r\n          background:none;\r\n      }\r\n    70%{\r\n          background:none;\r\n      }\r\n      100%{\r\n          background:#464646;\r\n      }\r\n  }\r\n@keyframes fadeBgColor {\r\n      0%{\r\n          background:none;\r\n      }\r\n    70%{\r\n          background:none;\r\n      }\r\n      100%{\r\n          background:#464646;\r\n      }\r\n  }\r\n.animated.animationDelay{\r\n      animation-delay:.4s;\r\n      -webkit-animation-delay:.4s;\r\n  }\r\n.animated.animationDelayMed{\r\n      animation-delay:1.2s;\r\n      -webkit-animation-delay:1.2s;\r\n  }\r\n.animated.animationDelayLong{\r\n      animation-delay:1.6s;\r\n      -webkit-animation-delay:1.6s;\r\n  }\r\n.animated.fadeBgColor {\r\n      -webkit-animation-name: fadeBgColor;\r\n      animation-name: fadeBgColor;\r\n  }\r\n.animated.bounceIn {\r\n      -webkit-animation-name: bounceIn;\r\n      animation-name: bounceIn;\r\n  }\r\n.animated.bounceInRight {\r\n      -webkit-animation-name: bounceInRight;\r\n      animation-name: bounceInRight;\r\n  }\r\n.animated.bounceInLeft {\r\n      -webkit-animation-name: bounceInLeft;\r\n      animation-name: bounceInLeft;\r\n  }\r\n.animated.fadeIn {\r\n      -webkit-animation-name: fadeIn;\r\n      animation-name: fadeIn;\r\n  }\r\n.animated.fadeInDown {\r\n      -webkit-animation-name: fadeInDown;\r\n      animation-name: fadeInDown;\r\n  }\r\n.animated.fadeInUp {\r\n      -webkit-animation-name: fadeInUp;\r\n      animation-name: fadeInUp;\r\n  }\r\n.animated.moveUp {\r\n      -webkit-animation-name: moveUp;\r\n      animation-name: moveUp;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,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cUM7TUFHckMsNkJBQTZCO0VBQ2pDO0FBQ0E7TUFDSSxvQ0FBb0M7TUFHcEMsNEJBQTRCO0VBQ2hDO0FBQ0E7TUFDSSw4QkFBOEI7TUFHOUIsc0JBQXNCO0VBQzFCO0FBQ0E7TUFDSSxrQ0FBa0M7TUFHbEMsMEJBQTBCO0VBQzlCO0FBQ0E7TUFDSSxnQ0FBZ0M7TUFHaEMsd0JBQXdCO0VBQzVCO0FBQ0E7TUFDSSw4QkFBOEI7TUFHOUIsc0JBQXNCO0VBQzFCIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5ib2R5IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgXHJcbn1cclxuI2JnIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbiAgICB0b3A6IC01MCU7IFxyXG4gICAgbGVmdDogLTUwJTsgXHJcbiAgICB3aWR0aDogMjAwJTsgXHJcbiAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgfVxyXG4gICNiZyBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIHRvcDogMDsgXHJcbiAgICBsZWZ0OiAwOyBcclxuICAgIHJpZ2h0OiAwOyBcclxuICAgIGJvdHRvbTogMDsgXHJcbiAgICBtYXJnaW46IGF1dG87IFxyXG4gICAgbWluLXdpZHRoOiA1MCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MCU7XHJcbiAgfVxyXG4uYmx1cnJlZC1ib3h7XHJcbiAgICBwYWRkaW5nLXRvcDo1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDo1MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1LjIlO1xyXG4gICAgbWFyZ2luLXRvcDogLTEwJTtcclxuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmJsdXJyZWQtYm94OmFmdGVye1xyXG4gICBjb250ZW50OiAnJztcclxuICAgYmFja2dyb3VuZDogaW5oZXJpdDsgXHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgbGVmdDogLTI1cHg7XHJcbiAgIHJpZ2h0OiAwO1xyXG4gICB0b3A6IC0yNXB4OyAgXHJcbiAgIHotaW5kZXg6IDk5O1xyXG4gICBib3R0b206IDA7XHJcbiBcclxuICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMzAwcHggcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xyXG4gICBmaWx0ZXI6IGJsdXIoMC4xZW0pO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuLnN0b2NrLWltYWdlLWludHJve1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAtMTsgIFxyXG59XHJcbiAgLnN0b2NrLWltYWdle1xyXG4gICAgICBoZWlnaHQ6NDAlO1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgICBtaW4td2lkdGg6IDEwMDBweDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB6LWluZGV4OiAtMTsgIFxyXG4gIH1cclxuICAuYmxvY2sge1xyXG4gICAgaGVpZ2h0OiA1ZW07XHJcbiAgICBsaW5lLWhlaWdodDogNWVtO1xyXG4gICAgd2lkdGg6IDEwZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDY0NjQ2O1xyXG4gICAgY29sb3I6ICNmZGZkZmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxcHggIzMzMzsgLyogc28gb25lIGNhbiBzZWUgZmFkZUJnQ29sb3IgcHJvcGVybHkgKi9cclxuICB9XHJcbiAgXHJcbiAgLmFuaW1hdGFibGUge1xyXG4gICAgXHJcbiAgICAvKiBpbml0aWFsbHkgaGlkZSBhbmltYXRhYmxlIG9iamVjdHMgKi9cclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIFxyXG4gICAgLyogaW5pdGlhbGx5IHBhdXNlIGFuaW1hdGFibGUgb2JqZWN0cyB0aGVpciBhbmltYXRpb25zICovXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7ICAgXHJcbiAgICAtbW96LWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7ICAgICBcclxuICAgIC1tcy1hbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gICAgLW8tYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDsgICBcclxuICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7IFxyXG4gIH1cclxuICBcclxuICAvKiBzaG93IG9iamVjdHMgYmVpbmcgYW5pbWF0ZWQgKi9cclxuICAuYW5pbWF0ZWQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgLW1zLWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAtby1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgICAtby1hbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcztcclxuICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xyXG4gICAgLW1zLWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xyXG4gICAgLW8tYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XHJcbiAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcclxuICB9XHJcbiAgXHJcbiAgLyogQ1NTIEFuaW1hdGlvbnMgKGV4dHJhY3RlZCBmcm9tIGh0dHA6Ly9nbGlmby51aXBhcmFkZS5jb20vKSAqL1xyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgICAgfVx0MTAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtby1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgICAgMjAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIDIwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICBALW8ta2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgICAgMjAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICA2MCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICAyMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluTGVmdCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwMHB4KTtcclxuICAgICAgfVxyXG4gICAgICA2MCUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgODAlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtbW96LWtleWZyYW1lcyBib3VuY2VJbkxlZnQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgNjAlIHtcclxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIDgwJSB7XHJcbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICBALW8ta2V5ZnJhbWVzIGJvdW5jZUluTGVmdCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMDBweCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgNjAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgODAlIHtcclxuICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBib3VuY2VJbkxlZnQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMDAwcHgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIDYwJSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgODAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluUmlnaHQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwMHB4KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICA2MCUge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIDgwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtbW96LWtleWZyYW1lcyBib3VuY2VJblJpZ2h0IHtcclxuICAgICAgMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgNjAlIHtcclxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICA4MCUge1xyXG4gICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICBALW8ta2V5ZnJhbWVzIGJvdW5jZUluUmlnaHQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgNjAlIHtcclxuICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgODAlIHtcclxuICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJvdW5jZUluUmlnaHQge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMDBweCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgNjAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgODAlIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICAgIH1cdDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtbW96LWtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICBALW8ta2V5ZnJhbWVzIGZhZGVJblVwIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlSW5VcCB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjMpO1xyXG4gICAgICB9XHJcbiAgICAgIDUwJSB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgNzAlIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtbW96LWtleWZyYW1lcyBib3VuY2VJbiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoLjMpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIDUwJSB7XHJcbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgNzAlIHtcclxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSguOSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtby1rZXlmcmFtZXMgYm91bmNlSW4ge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSguMyk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgNTAlIHtcclxuICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgNzAlIHtcclxuICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoLjkpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBib3VuY2VJbiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4zKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICA1MCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICA3MCUge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOSk7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbW92ZVVwIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xyXG4gICAgICB9XHQxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICBALW1vei1rZXlmcmFtZXMgbW92ZVVwIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtby1rZXlmcmFtZXMgbW92ZVVwIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBtb3ZlVXAge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUJnQ29sb3Ige1xyXG4gICAgICAwJXtcclxuICAgICAgICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgfVxyXG4gICAgNzAle1xyXG4gICAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCV7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiM0NjQ2NDY7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgQC1vLWtleWZyYW1lcyBmYWRlQmdDb2xvciB7XHJcbiAgICAgIDAle1xyXG4gICAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICB9XHJcbiAgICA3MCV7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJXtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IzQ2NDY0NjtcclxuICAgICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGZhZGVCZ0NvbG9yIHtcclxuICAgICAgMCV7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgIH1cclxuICAgIDcwJXtcclxuICAgICAgICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgICAgfVxyXG4gICAgICAxMDAle1xyXG4gICAgICAgICAgYmFja2dyb3VuZDojNDY0NjQ2O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hbmltYXRlZC5hbmltYXRpb25EZWxheXtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5Oi40cztcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6LjRzO1xyXG4gIH1cclxuICAuYW5pbWF0ZWQuYW5pbWF0aW9uRGVsYXlNZWR7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheToxLjJzO1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheToxLjJzO1xyXG4gIH1cclxuICAuYW5pbWF0ZWQuYW5pbWF0aW9uRGVsYXlMb25ne1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6MS42cztcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MS42cztcclxuICB9XHJcbiAgLmFuaW1hdGVkLmZhZGVCZ0NvbG9yIHtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUJnQ29sb3I7XHJcbiAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGZhZGVCZ0NvbG9yO1xyXG4gICAgICAtby1hbmltYXRpb24tbmFtZTogZmFkZUJnQ29sb3I7XHJcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlQmdDb2xvcjtcclxuICB9XHJcbiAgLmFuaW1hdGVkLmJvdW5jZUluIHtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlSW47XHJcbiAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xyXG4gICAgICAtby1hbmltYXRpb24tbmFtZTogYm91bmNlSW47XHJcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcclxuICB9XHJcbiAgLmFuaW1hdGVkLmJvdW5jZUluUmlnaHQge1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0O1xyXG4gICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0O1xyXG4gICAgICAtby1hbmltYXRpb24tbmFtZTogYm91bmNlSW5SaWdodDtcclxuICAgICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluUmlnaHQ7XHJcbiAgfVxyXG4gIC5hbmltYXRlZC5ib3VuY2VJbkxlZnQge1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkxlZnQ7XHJcbiAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluTGVmdDtcclxuICAgICAgLW8tYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluTGVmdDtcclxuICAgICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluTGVmdDtcclxuICB9XHJcbiAgLmFuaW1hdGVkLmZhZGVJbiB7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgICAtby1hbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gIH1cclxuICAuYW5pbWF0ZWQuZmFkZUluRG93biB7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgICAgIC1vLWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICB9XHJcbiAgLmFuaW1hdGVkLmZhZGVJblVwIHtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluVXA7XHJcbiAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xyXG4gICAgICAtby1hbmltYXRpb24tbmFtZTogZmFkZUluVXA7XHJcbiAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5VcDtcclxuICB9XHJcbiAgLmFuaW1hdGVkLm1vdmVVcCB7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IG1vdmVVcDtcclxuICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogbW92ZVVwO1xyXG4gICAgICAtby1hbmltYXRpb24tbmFtZTogbW92ZVVwO1xyXG4gICAgICBhbmltYXRpb24tbmFtZTogbW92ZVVwO1xyXG4gIH0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\manik\Documents\webFrontend\codemonks\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);