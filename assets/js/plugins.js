/*!
* jQuery meanMenu v2.0.8
* @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
* Find more information at http://www.meanthemes.com/plugins/meanmenu/
*/
!function($) {
    "use strict";
    $.fn.meanmenu = function(e) {
        var n = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        e = $.extend(n, e);
        var a = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function() {
            var n = e.meanMenuTarget
              , t = e.meanMenuContainer
              , r = e.meanMenuClose
              , i = e.meanMenuCloseSize
              , s = e.meanMenuOpen
              , u = e.meanRevealPosition
              , m = e.meanRevealPositionDistance
              , l = e.meanRevealColour
              , o = e.meanScreenWidth
              , c = e.meanNavPush
              , v = ".meanmenu-reveal"
              , h = e.meanShowChildren
              , d = e.meanExpandableChildren
              , y = e.meanExpand
              , j = e.meanContract
              , Q = e.meanRemoveAttrs
              , f = e.onePage
              , g = e.meanDisplay
              , p = e.removeElements
              , C = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0),
            (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var w = ""
              , x = function() {
                if ("center" === u) {
                    var e = window.innerWidth || document.documentElement.clientWidth
                      , n = e / 2 - 22 + "px";
                    w = "left:" + n + ";right:auto;",
                    C ? jQuery(".meanmenu-reveal").animate({
                        left: n
                    }) : jQuery(".meanmenu-reveal").css("left", n)
                }
            }
              , A = !1
              , E = !1;
            "right" === u && (w = "right:" + m + ";left:auto;"),
            "left" === u && (w = "left:" + m + ";right:auto;"),
            x();
            var M = ""
              , P = function() {
                M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s)
            }
              , W = function() {
                jQuery(".mean-bar,.mean-push").remove(),
                jQuery(t).removeClass("mean-container"),
                jQuery(n).css("display", g),
                A = !1,
                E = !1,
                jQuery(p).removeClass("mean-remove")
            }
              , b = function() {
                var e = "background:" + l + ";color:" + l + ";" + w;
                if (o >= a) {
                    jQuery(p).addClass("mean-remove"),
                    E = !0,
                    jQuery(t).addClass("mean-container"),
                    jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                    var r = jQuery(n).html();
                    jQuery(".mean-nav").html(r),
                    Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                        jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"),
                        jQuery(this).removeAttr("id")
                    }),
                    jQuery(n).before('<div class="mean-push" />'),
                    jQuery(".mean-push").css("margin-top", c),
                    jQuery(n).hide(),
                    jQuery(".meanmenu-reveal").show(),
                    jQuery(v).html(s),
                    M = jQuery(v),
                    jQuery(".mean-nav ul").hide(),
                    h ? d ? (jQuery(".mean-nav ul ul").each(function() {
                        jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>")
                    }),
                    jQuery(".mean-expand").on("click", function(e) {
                        e.preventDefault(),
                        jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y),
                        jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(j),
                        jQuery(this).prev("ul").slideDown(300, function() {})),
                        jQuery(this).toggleClass("mean-clicked")
                    })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(),
                    jQuery(".mean-nav ul li").last().addClass("mean-last"),
                    M.removeClass("meanclose"),
                    jQuery(M).click(function(e) {
                        e.preventDefault(),
                        A === !1 ? (M.css("text-align", "center"),
                        M.css("text-indent", "0"),
                        M.css("font-size", i),
                        jQuery(".mean-nav ul:first").slideDown(),
                        A = !0) : (jQuery(".mean-nav ul:first").slideUp(),
                        A = !1),
                        M.toggleClass("meanclose"),
                        P(),
                        jQuery(p).addClass("mean-remove")
                    }),
                    f && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                        jQuery(".mean-nav ul:first").slideUp(),
                        A = !1,
                        jQuery(M).toggleClass("meanclose").html(s)
                    })
                } else
                    W()
            };
            C || jQuery(window).resize(function() {
                a = window.innerWidth || document.documentElement.clientWidth,
                a > o,
                W(),
                o >= a ? (b(),
                x()) : W()
            }),
            jQuery(window).resize(function() {
                a = window.innerWidth || document.documentElement.clientWidth,
                C ? (x(),
                o >= a ? E === !1 && b() : W()) : (W(),
                o >= a && (b(),
                x()))
            }),
            b()
        })
    }
}(jQuery);

/*
 Slick Slider
 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues
 */
!function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            i.extend(n, n.initials),
            n.activeBreakpoint = null,
            n.animType = null,
            n.animProp = null,
            n.breakpoints = [],
            n.breakpointSettings = [],
            n.cssTransitions = !1,
            n.focussed = !1,
            n.interrupted = !1,
            n.hidden = "hidden",
            n.paused = !0,
            n.positionProp = null,
            n.respondTo = null,
            n.rowCount = 1,
            n.shouldClick = !0,
            n.$slider = i(t),
            n.$slidesCache = null,
            n.transformType = null,
            n.transitionType = null,
            n.visibilityChange = "visibilitychange",
            n.windowWidth = 0,
            n.windowTimer = null,
            s = i(t).data("slick") || {},
            n.options = i.extend({}, n.defaults, o, s),
            n.currentSlide = n.options.initialSlide,
            n.originalSettings = n.options,
            void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
            n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
            n.visibilityChange = "webkitvisibilitychange"),
            n.autoPlay = i.proxy(n.autoPlay, n),
            n.autoPlayClear = i.proxy(n.autoPlayClear, n),
            n.autoPlayIterator = i.proxy(n.autoPlayIterator, n),
            n.changeSlide = i.proxy(n.changeSlide, n),
            n.clickHandler = i.proxy(n.clickHandler, n),
            n.selectHandler = i.proxy(n.selectHandler, n),
            n.setPosition = i.proxy(n.setPosition, n),
            n.swipeHandler = i.proxy(n.swipeHandler, n),
            n.dragHandler = i.proxy(n.dragHandler, n),
            n.keyHandler = i.proxy(n.keyHandler, n),
            n.instanceUid = e++,
            n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            n.registerBreakpoints(),
            n.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t)
            o = t,
            t = null;
        else if (t < 0 || t >= s.slideCount)
            return !1;
        s.unload(),
        "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e)
        }),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, t) {
        var o = {}
          , s = this;
        s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
        i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i),
                !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)",
                s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)",
                s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(),
        e = Math.ceil(e),
        !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)",
        s.$slideTrack.css(o),
        t && setTimeout(function() {
            s.disableTransition(),
            t.call()
        }, s.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this
          , t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)),
        t
    }
    ,
    e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(i) {
        var e = this
          , t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var i = this
          , e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll,
        i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0; e <= o.getDotCount(); e += 1)
                t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots),
            o.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(),
        n = l.$slider.children(),
        l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o),
            l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints)
                r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            l = s),
            e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }
    ,
    e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        n = r.slideCount % r.options.slidesToScroll != 0,
        o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        e.data.message) {
        case "previous":
            s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
            break;
        case "next":
            s = 0 === o ? r.options.slidesToScroll : o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
            break;
        case "index":
            var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(),
        t = 0,
        i > e[e.length - 1])
            i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i))
    }
    ,
    e.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(),
        i.stopPropagation(),
        i.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    e.prototype.disableTransition = function(i) {
        var e = this
          , t = {};
        t[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }),
        t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i),
        t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }),
        e && setTimeout(function() {
            t.disableTransition(i),
            e.call()
        }, t.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i),
        e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"),
                e.autoPlay())
            }, 0)
        })
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var i = this
          , e = 0
          , t = 0
          , o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow)
                ++o;
            else
                for (; e < i.slideCount; )
                    ++o,
                    e = t + i.options.slidesToScroll,
                    t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode)
            o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount; )
                ++o,
                e = t + i.options.slidesToScroll,
                t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else
            o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }
    ,
    e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0,
        t = n.$slides.first().outerHeight(!0),
        !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
        s = -1,
        !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)),
        r = t * n.options.slidesToShow * s),
        n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1,
        r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
        r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth,
        r = (i + n.options.slidesToShow - n.slideCount) * t),
        n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0,
        r = 0),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0,
        n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
        e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r,
        !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        e += (n.$list.width() - o.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        return this.options[i]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll,
        o = -1 * e.options.slidesToScroll,
        i = 2 * e.slideCount); t < i; )
            s.push(t),
            t = o + e.options.slidesToScroll,
            o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return e = n,
                !1
        }),
        Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this
          , t = Math.ceil(e.slideCount / e.options.slidesToShow)
          , o = e.getNavigableIndexes().filter(function(i) {
            return i >= 0 && i < e.slideCount
        });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }),
            -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }),
        e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }),
            i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
            e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide),
        i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide),
        !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler),
        i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
        i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
        i.$nextArrow.show()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this)
                  , t = i(this).attr("data-lazy")
                  , o = i(this).attr("data-srcset")
                  , s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes")
                  , r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o),
                        s && e.attr("sizes", s)),
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }
                ,
                r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    n.$slider.trigger("lazyLoadError", [n, e, t])
                }
                ,
                r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
        s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
        s = Math.ceil(o + n.options.slidesToShow),
        !0 === n.options.fade && (o > 0 && o--,
        s <= n.slideCount && s++)),
        t = n.$slider.find(".slick-slide").slice(o, s),
        "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)
                r < 0 && (r = n.slideCount - 1),
                t = (t = t.add(d.eq(r))).add(d.eq(l)),
                r--,
                l++;
        e(t),
        n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(),
        i.$slideTrack.css({
            opacity: 1
        }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(),
        i.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(),
        i.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(),
        i.options.autoplay = !0,
        i.paused = !1,
        i.focussed = !1,
        i.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && (t.initADA(),
        t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(i) {
        i.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(),
        o = t.attr("data-lazy"),
        s = t.attr("data-srcset"),
        n = t.attr("data-sizes") || l.$slider.attr("data-sizes"),
        (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s),
            n && t.attr("sizes", n)),
            t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === l.options.adaptiveHeight && l.setPosition(),
            l.$slider.trigger("lazyLoaded", [l, t, o]),
            l.progressiveLazyLoad()
        }
        ,
        r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            l.$slider.trigger("lazyLoadError", [l, t, o]),
            l.progressiveLazyLoad())
        }
        ,
        r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }
    ,
    e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow,
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        t = s.currentSlide,
        s.destroy(!0),
        i.extend(s, s.initials, {
            currentSlide: t
        }),
        s.init(),
        e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1,
                n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0; )
                        s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1),
                        o--;
                    s.breakpoints.push(t),
                    s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i,
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
            return !1;
        o.unload(),
        !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    e.prototype.setCSS = function(i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i),
        e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        s[o.positionProp] = i,
        !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {},
        !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")",
        o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)",
        o.$slideTrack.css(s)))
    }
    ,
    e.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
        !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })),
        i.listWidth = i.$list.width(),
        i.listHeight = i.$list.height(),
        !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
        i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
        i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1,
            !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }),
        t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0],
        l = arguments[1],
        n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0],
        s = arguments[1],
        l = arguments[2],
        "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")),
        "single" === n)
            r.options[o] = s;
        else if ("multiple" === n)
            i.each(o, function(i, e) {
                r.options[i] = e
            });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive))
                    r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0; )
                        r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1),
                        e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(),
        r.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
        i.$slider.trigger("setPosition", [i])
    }
    ,
    e.prototype.setProps = function() {
        var i = this
          , e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left",
        "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0),
        i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
        void 0 !== e.OTransform && (i.animType = "OTransform",
        i.transformType = "-o-transform",
        i.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.MozTransform && (i.animType = "MozTransform",
        i.transformType = "-moz-transform",
        i.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
        void 0 !== e.webkitTransform && (i.animType = "webkitTransform",
        i.transformType = "-webkit-transform",
        i.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.msTransform && (i.animType = "msTransform",
        i.transformType = "-ms-transform",
        i.transitionType = "msTransition",
        void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform",
        i.transformType = "transform",
        i.transitionType = "transition"),
        i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }
    ,
    e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2),
            !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
            t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
            n.$slides.eq(i).addClass("slick-center")
        } else
            i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
            o = !0 === n.options.infinite ? n.options.slidesToShow + i : i,
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && (t = null,
        s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
            e = s.slideCount; e > s.slideCount - o; e -= 1)
                t = e - 1,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1)
                t = e,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "")
            })
        }
    }
    ,
    e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(),
        e.interrupted = i
    }
    ,
    e.prototype.selectHandler = function(e) {
        var t = this
          , o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide")
          , s = parseInt(o.attr("data-slick-index"));
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }
    ,
    e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1,
        !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i),
            o = i,
            d = a.getLeft(o),
            r = a.getLeft(a.currentSlide),
            a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft,
            !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer),
                s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o,
                a.animating = !0,
                a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                n = a.currentSlide,
                a.currentSlide = s,
                a.setSlideClasses(a.currentSlide),
                a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
                a.updateDots(),
                a.updateArrows(),
                !0 === a.options.fade)
                    return !0 !== t ? (a.fadeSlideOut(n),
                    a.fadeSlide(s, function() {
                        a.postSlide(s)
                    })) : a.postSlide(s),
                    void a.animateHeight();
                !0 !== t ? a.animateSlide(d, function() {
                    a.postSlide(s)
                }) : a.postSlide(s)
            }
    }
    ,
    e.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
        i.$nextArrow.hide()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
        i.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX,
        e = s.touchObject.startY - s.touchObject.curY,
        t = Math.atan2(e, i),
        (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1,
        o.swiping = !1,
        o.scrolling)
            return o.scrolling = !1,
            !1;
        if (o.interrupted = !1,
        o.shouldClick = !(o.touchObject.swipeLength > 10),
        void 0 === o.touchObject.curX)
            return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
            case "left":
            case "down":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                o.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e),
            o.touchObject = {},
            o.$slider.trigger("swipe", [o, t]))
        } else
            o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
            o.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
            }
    }
    ,
    e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
        !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide),
        l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
        l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
        l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))),
        r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))),
        !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0,
        !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
        t = l.swipeDirection(),
        void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0,
        i.preventDefault()),
        s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1),
        !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
        o = l.touchObject.swipeLength,
        l.touchObject.edgeHit = !1,
        !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction,
        l.touchObject.edgeHit = !0),
        !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s,
        !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
        !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null,
        !1) : void l.setCSS(l.swipeLeft))))
    }
    ,
    e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0,
        1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)
            return t.touchObject = {},
            !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
        t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX,
        t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY,
        t.dragging = !0
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }
    ,
    i.fn.slick = function() {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i],s) : t = o[i].slick[s].apply(o[i].slick, n),
            void 0 !== t)
                return t;
        return o
    }
});

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {}
              , n = i[e] = i[e] || [];
            return n.indexOf(t) == -1 && n.push(t),
            this
        }
    }
    ,
    t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[e] = i[e] || {};
            return n[t] = !0,
            this
        }
    }
    ,
    t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return n != -1 && i.splice(n, 1),
            this
        }
    }
    ,
    t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0),
            t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o]
                  , s = n && n[r];
                s && (this.off(e, r),
                delete n[r]),
                r.apply(this, t)
            }
            return this
        }
    }
    ,
    t.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }
    function n(e) {
        if (Array.isArray(e))
            return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? d.call(e) : [e]
    }
    function o(e, t, r) {
        if (!(this instanceof o))
            return new o(e,t,r);
        var s = e;
        return "string" == typeof e && (s = document.querySelectorAll(e)),
        s ? (this.elements = n(s),
        this.options = i({}, this.options),
        "function" == typeof t ? r = t : i(this.options, t),
        r && this.on("always", r),
        this.getImages(),
        h && (this.jqDeferred = new h.Deferred),
        void setTimeout(this.check.bind(this))) : void a.error("Bad element for imagesLoaded " + (s || e))
    }
    function r(e) {
        this.img = e
    }
    function s(e, t) {
        this.url = e,
        this.element = t,
        this.img = new Image
    }
    var h = e.jQuery
      , a = e.console
      , d = Array.prototype.slice;
    o.prototype = Object.create(t.prototype),
    o.prototype.options = {},
    o.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e),
        this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    }
    ;
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n; ) {
                var o = n && n[2];
                o && this.addBackground(o, e),
                n = i.exec(t.backgroundImage)
            }
    }
    ,
    o.prototype.addImage = function(e) {
        var t = new r(e);
        this.images.push(t)
    }
    ,
    o.prototype.addBackground = function(e, t) {
        var i = new s(e,t);
        this.images.push(i)
    }
    ,
    o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e),
            t.check()
        }) : void this.complete()
    }
    ,
    o.prototype.progress = function(e, t, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded,
        this.emitEvent("progress", [this, e, t]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && a && a.log("progress: " + i, e, t)
    }
    ,
    o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(e, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }
    ,
    r.prototype = Object.create(t.prototype),
    r.prototype.check = function() {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    r.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.img, t])
    }
    ,
    r.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    r.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    r.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype = Object.create(r.prototype),
    s.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    s.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emitEvent("progress", [this, this.element, t])
    }
    ,
    o.makeJQueryPlugin = function(t) {
        t = t || e.jQuery,
        t && (h = t,
        h.fn.imagesLoaded = function(e, t) {
            var i = new o(this,e,t);
            return i.jqDeferred.promise(h(this))
        }
        )
    }
    ,
    o.makeJQueryPlugin(),
    o
});

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function(t, u) {
                var h = a.data(u, i);
                if (!h)
                    return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0))
                    return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }),
            void 0 !== n ? n : t
        }
        function h(t, e) {
            t.each(function(t, o) {
                var n = a.data(o, i);
                n ? (n.option(e),
                n._init()) : (n = new s(o,e),
                a.data(o, i, n))
            })
        }
        a = a || e || t.jQuery,
        a && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t),
            this
        }
        ,
        o(a))
    }
    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var n = Array.prototype.slice
      , s = t.console
      , r = "undefined" == typeof s ? function() {}
    : function(t) {
        s.error(t)
    }
    ;
    return o(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , o = i[t] = i[t] || {};
            return o[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n]
                  , r = o && o[s];
                r && (this.off(t, s),
                delete o[s]),
                s.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t)
          , i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }
    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        e
    }
    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            r = 200 == Math.round(t(n.width)),
            s.isBoxSizeOuter = r,
            i.removeChild(e)
        }
    }
    function s(e) {
        if (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l]
                  , c = s[f]
                  , m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight
              , y = a.paddingTop + a.paddingBottom
              , g = a.marginLeft + a.marginRight
              , v = a.marginTop + a.marginBottom
              , _ = a.borderLeftWidth + a.borderRightWidth
              , z = a.borderTopWidth + a.borderBottomWidth
              , I = d && r
              , x = t(s.width);
            x !== !1 && (a.width = x + (I ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (I ? 0 : y + z)),
            a.innerWidth = a.width - (p + _),
            a.innerHeight = a.height - (y + z),
            a.outerWidth = a.width + g,
            a.outerHeight = a.height + v,
            a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = u.length, d = !1;
    return s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i]
              , n = o + "MatchesSelector";
            if (t[n])
                return n
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    i.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ;
    var o = Array.prototype.slice;
    i.makeArray = function(t) {
        if (Array.isArray(t))
            return t;
        if (null === t || void 0 === t)
            return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? o.call(t) : [t]
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!o)
                    return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                    n.push(i[s])
            }
        }),
        n
    }
    ,
    i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var o = t.prototype[e]
          , n = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[n];
            clearTimeout(t);
            var e = arguments
              , s = this;
            this[n] = setTimeout(function() {
                o.apply(s, e),
                delete s[n]
            }, i)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var n = t.console;
    return i.htmlInit = function(e, o) {
        i.docReady(function() {
            var s = i.toDashed(o)
              , r = "data-" + s
              , a = document.querySelectorAll("[" + r + "]")
              , u = document.querySelectorAll(".js-" + s)
              , h = i.makeArray(a).concat(i.makeArray(u))
              , d = r + "-options"
              , l = t.jQuery;
            h.forEach(function(t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t,i);
                l && l.data(t, o, u)
            })
        })
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function o(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function n(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    var s = document.documentElement.style
      , r = "string" == typeof s.transition ? "transition" : "WebkitTransition"
      , a = "string" == typeof s.transform ? "transform" : "WebkitTransform"
      , u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[r]
      , h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay"
    }
      , d = o.prototype = Object.create(t.prototype);
    d.constructor = o,
    d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    d.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    d.getSize = function() {
        this.size = e(this.element)
    }
    ,
    d.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }
    ,
    d.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , o = t[e ? "left" : "right"]
          , n = t[i ? "top" : "bottom"]
          , s = parseFloat(o)
          , r = parseFloat(n)
          , a = this.layout.size;
        o.indexOf("%") != -1 && (s = s / 100 * a.width),
        n.indexOf("%") != -1 && (r = r / 100 * a.height),
        s = isNaN(s) ? 0 : s,
        r = isNaN(r) ? 0 : r,
        s -= e ? a.paddingLeft : a.paddingRight,
        r -= i ? a.paddingTop : a.paddingBottom,
        this.position.x = s,
        this.position.y = r
    }
    ,
    d.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop")
          , n = i ? "paddingLeft" : "paddingRight"
          , s = i ? "left" : "right"
          , r = i ? "right" : "left"
          , a = this.position.x + t[n];
        e[s] = this.getXValue(a),
        e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom"
          , h = o ? "top" : "bottom"
          , d = o ? "bottom" : "top"
          , l = this.position.y + t[u];
        e[h] = this.getYValue(l),
        e[d] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    d.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    d.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    d._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , o = this.position.y
          , n = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e),
        n && !this.isTransitioning)
            return void this.layoutPosition();
        var s = t - i
          , r = e - o
          , a = {};
        a.transform = this.getTranslate(s, r),
        this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    d.getTranslate = function(t, e) {
        var i = this.layout._getOption("originLeft")
          , o = this.layout._getOption("originTop");
        return t = i ? t : -t,
        e = o ? e : -e,
        "translate3d(" + t + "px, " + e + "px, 0)"
    }
    ,
    d.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    d.moveTo = d._transitionTo,
    d.setPosition = function(t, e) {
        this.position.x = parseFloat(t),
        this.position.y = parseFloat(e)
    }
    ,
    d._nonTransition = function(t) {
        this.css(t.to),
        t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    d.transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0,
            t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to),
        this.css(t.to),
        this.isTransitioning = !0
    }
    ;
    var l = "opacity," + n(a);
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t,
            this.css({
                transitionProperty: l,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(u, this, !1)
        }
    }
    ,
    d.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    d.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var f = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o],
            i(e.ingProperties) && this.disableTransition(),
            o in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[o]),
            o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this),
                delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    d.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(u, this, !1),
        this.isTransitioning = !1
    }
    ,
    d._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    }
    ;
    var c = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(c)
    }
    ,
    d.stagger = function(t) {
        t = isNaN(t) ? 0 : t,
        this.staggerDelay = t + "ms"
    }
    ,
    d.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    d.remove = function() {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }),
        void this.hide()) : void this.removeElem()
    }
    ,
    d.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    d.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }
    ,
    d.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, o, n) {
    "use strict";
    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i)
            return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        h && (this.$element = h(this.element)),
        this.options = o.extend({}, this.constructor.defaults),
        this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n,
        f[n] = this,
        this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }
    function r(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    function a(t) {
        if ("number" == typeof t)
            return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/)
          , i = e && e[1]
          , o = e && e[2];
        if (!i.length)
            return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }
    var u = t.console
      , h = t.jQuery
      , d = function() {}
      , l = 0
      , f = {};
    s.namespace = "outlayer",
    s.Item = n,
    s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var c = s.prototype;
    o.extend(c, e.prototype),
    c.option = function(t) {
        o.extend(this.options, t)
    }
    ,
    c._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    c._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }
    ,
    c.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    c._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n]
              , r = new i(s,this);
            o.push(r)
        }
        return o
    }
    ,
    c._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }
    ,
    c.getItemElements = function() {
        return this.items.map(function(t) {
            return t.element
        })
    }
    ,
    c.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    c._init = c.layout,
    c._resetLayout = function() {
        this.getSize()
    }
    ,
    c.getSize = function() {
        this.size = i(this.element)
    }
    ,
    c._getMeasurement = function(t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n),
        this[t] = o ? i(o)[e] : n) : this[t] = 0
    }
    ,
    c.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    c._getItemsForLayout = function(t) {
        return t.filter(function(t) {
            return !t.isIgnored
        })
    }
    ,
    c._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var i = [];
            t.forEach(function(t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t,
                o.isInstant = e || t.isLayoutInstant,
                i.push(o)
            }, this),
            this._processLayoutQueue(i)
        }
    }
    ,
    c._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    c._processLayoutQueue = function(t) {
        this.updateStagger(),
        t.forEach(function(t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }
    ,
    c.updateStagger = function() {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t),
        this.stagger)
    }
    ,
    c._positionItem = function(t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger),
        t.moveTo(e, i))
    }
    ,
    c._postLayout = function() {
        this.resizeContainer()
    }
    ,
    c.resizeContainer = function() {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1))
        }
    }
    ,
    c._getContainerSize = d,
    c._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    c._emitCompleteOnItems = function(t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }
        function o() {
            r++,
            r == s && i()
        }
        var n = this
          , s = e.length;
        if (!e || !s)
            return void i();
        var r = 0;
        e.forEach(function(e) {
            e.once(t, o)
        })
    }
    ,
    c.dispatchEvent = function(t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o),
        h)
            if (this.$element = this.$element || h(this.element),
            e) {
                var n = h.Event(e);
                n.type = t,
                this.$element.trigger(n, i)
            } else
                this.$element.trigger(t, i)
    }
    ,
    c.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    c.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    c.stamp = function(t) {
        t = this._find(t),
        t && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    c.unstamp = function(t) {
        t = this._find(t),
        t && t.forEach(function(t) {
            o.removeFrom(this.stamps, t),
            this.unignore(t)
        }, this)
    }
    ,
    c._find = function(t) {
        if (t)
            return "string" == typeof t && (t = this.element.querySelectorAll(t)),
            t = o.makeArray(t)
    }
    ,
    c._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    c._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    c._manageStamp = d,
    c._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , o = this._boundingRect
          , n = i(t)
          , s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom
        };
        return s
    }
    ,
    c.handleEvent = o.handleEvent,
    c.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    c.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    c.onresize = function() {
        this.resize()
    }
    ,
    o.debounceMethod(s, "onresize", 100),
    c.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    c.needsResizeLayout = function() {
        var t = i(this.element)
          , e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }
    ,
    c.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    c.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    c.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    c.reveal = function(t) {
        if (this._emitCompleteOnItems("reveal", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.reveal()
            })
        }
    }
    ,
    c.hide = function(t) {
        if (this._emitCompleteOnItems("hide", t),
        t && t.length) {
            var e = this.updateStagger();
            t.forEach(function(t, i) {
                t.stagger(i * e),
                t.hide()
            })
        }
    }
    ,
    c.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    c.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    c.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t)
                return i
        }
    }
    ,
    c.getItems = function(t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this),
        e
    }
    ,
    c.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach(function(t) {
            t.remove(),
            o.removeFrom(this.items, t)
        }, this)
    }
    ,
    c.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach(function(t) {
            t.destroy()
        }),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
        delete this.element.outlayerGUID,
        h && h.removeData(this.element, this.constructor.namespace)
    }
    ,
    s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }
    ,
    s.create = function(t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults),
        o.extend(i.defaults, e),
        i.compatOptions = o.extend({}, s.compatOptions),
        i.namespace = t,
        i.data = s.data,
        i.Item = r(n),
        o.htmlInit(i, t),
        h && h.bridget && h.bridget(t, i),
        i
    }
    ;
    var m = {
        ms: 1,
        s: 1e3
    };
    return s.Item = n,
    s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    "use strict";
    function e() {
        t.Item.apply(this, arguments)
    }
    var i = e.prototype = Object.create(t.Item.prototype)
      , o = i._create;
    i._create = function() {
        this.id = this.layout.itemGUID++,
        o.call(this),
        this.sortData = {}
    }
    ,
    i.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var t = this.layout.options.getSortData
              , e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    }
    ;
    var n = i.destroy;
    return i.destroy = function() {
        n.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    "use strict";
    function i(t) {
        this.isotope = t,
        t && (this.options = t.options[this.namespace],
        this.element = t.element,
        this.items = t.filteredItems,
        this.size = t.size)
    }
    var o = i.prototype
      , n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function(t) {
        o[t] = function() {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }),
    o.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element)
          , i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }
    ,
    o._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    o.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    o.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    o.getSegmentSize = function(t, e) {
        var i = t + e
          , o = "outer" + e;
        if (this._getMeasurement(i, o),
        !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }
    ,
    o.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }
    ,
    o.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    o.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    i.modes = {},
    i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = Object.create(o),
        n.prototype.constructor = n,
        e && (n.options = e),
        n.prototype.namespace = t,
        i.modes[t] = n,
        n
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var t = 0; t < this.cols; t++)
            this.colYs.push(0);
        this.maxY = 0,
        this.horizontalColIndex = 0
    }
    ,
    o.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var t = this.items[0]
              , i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter
          , n = this.containerWidth + this.gutter
          , s = n / o
          , r = o - n % o
          , a = r && r < 1 ? "round" : "floor";
        s = Math[a](s),
        this.cols = Math.max(s, 1)
    }
    ,
    o.getContainerWidth = function() {
        var t = this._getOption("fitWidth")
          , i = t ? this.element.parentNode : this.element
          , o = e(i);
        this.containerWidth = o && o.innerWidth
    }
    ,
    o._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth
          , i = e && e < 1 ? "round" : "ceil"
          , o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
            x: this.columnWidth * s.col,
            y: s.y
        }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++)
            this.colYs[h] = a;
        return r
    }
    ,
    o._getTopColPosition = function(t) {
        var e = this._getTopColGroup(t)
          , i = Math.min.apply(Math, e);
        return {
            col: e.indexOf(i),
            y: i
        }
    }
    ,
    o._getTopColGroup = function(t) {
        if (t < 2)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
            e[o] = this._getColGroupY(o, t);
        return e
    }
    ,
    o._getColGroupY = function(t, e) {
        if (e < 2)
            return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }
    ,
    o._getHorizontalColPosition = function(t, e) {
        var i = this.horizontalColIndex % this.cols
          , o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex,
        {
            col: i,
            y: this._getColGroupY(i, t)
        }
    }
    ,
    o._manageStamp = function(t) {
        var i = e(t)
          , o = this._getElementOffset(t)
          , n = this._getOption("originLeft")
          , s = n ? o.left : o.right
          , r = s + i.outerWidth
          , a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1,
        u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++)
            this.colYs[l] = Math.max(d, this.colYs[l])
    }
    ,
    o._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    o._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    o.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t != this.containerWidth
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    "use strict";
    var i = t.create("masonry")
      , o = i.prototype
      , n = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0
    };
    for (var s in e.prototype)
        n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        r.call(this)
    }
    ;
    var a = o._getOption;
    return o._getOption = function(t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("fitRows")
      , i = e.prototype;
    return i._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter
          , i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0,
        this.y = this.maxY);
        var o = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
        this.x += e,
        o
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0
    })
      , i = e.prototype;
    return i._resetLayout = function() {
        this.y = 0
    }
    ,
    i._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
          , i = this.y;
        return this.y += t.size.outerHeight,
        {
            x: e,
            y: i
        }
    }
    ,
    i._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, o, n, s, r) {
    function a(t, e) {
        return function(i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n]
                  , r = i.sortData[s]
                  , a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e
                      , h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }
    var u = t.jQuery
      , h = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    d.Item = s,
    d.LayoutMode = r;
    var l = d.prototype;
    l._create = function() {
        this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        e.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"];
        for (var t in r.modes)
            this._initLayoutMode(t)
    }
    ,
    l.reloadItems = function() {
        this.itemGUID = 0,
        e.prototype.reloadItems.call(this)
    }
    ,
    l._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t),
        t
    }
    ,
    l._initLayoutMode = function(t) {
        var e = r.modes[t]
          , i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i,
        this.modes[t] = new e(this)
    }
    ,
    l.layout = function() {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }
    ,
    l._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, t),
        this._isLayoutInited = !0
    }
    ,
    l.arrange = function(t) {
        this.option(t),
        this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e),
        this._sort(),
        this._layout()
    }
    ,
    l._init = l.arrange,
    l._hideReveal = function(t) {
        this.reveal(t.needReveal),
        this.hide(t.needHide)
    }
    ,
    l._getIsInstant = function() {
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e,
        e
    }
    ,
    l._bindArrangeComplete = function() {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }
        var e, i, o, n = this;
        this.once("layoutComplete", function() {
            e = !0,
            t()
        }),
        this.once("hideComplete", function() {
            i = !0,
            t()
        }),
        this.once("revealComplete", function() {
            o = !0,
            t()
        })
    }
    ,
    l._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a),
                u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {
            matches: i,
            needReveal: o,
            needHide: n
        }
    }
    ,
    l._getFilterTest = function(t) {
        return u && this.options.isJQueryFiltering ? function(e) {
            return u(e.element).is(t);
        }
        : "function" == typeof t ? function(e) {
            return t(e.element)
        }
        : function(e) {
            return o(e.element, t)
        }
    }
    ,
    l.updateSortData = function(t) {
        var e;
        t ? (t = n.makeArray(t),
        e = this.getItems(t)) : e = this.items,
        this._getSorters(),
        this._updateItemsSortData(e)
    }
    ,
    l._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }
    ,
    l._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    }
    ;
    var f = function() {
        function t(t) {
            if ("string" != typeof t)
                return t;
            var i = h(t).split(" ")
              , o = i[0]
              , n = o.match(/^\[(.+)\]$/)
              , s = n && n[1]
              , r = e(s, o)
              , a = d.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(r(t))
            }
            : function(t) {
                return t && r(t)
            }
        }
        function e(t, e) {
            return t ? function(e) {
                return e.getAttribute(t)
            }
            : function(t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }
        return t
    }();
    d.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    },
    l._sort = function() {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }
    ,
    l._getIsSameSortBy = function(t) {
        for (var e = 0; e < t.length; e++)
            if (t[e] != this.sortHistory[e])
                return !1;
        return !0
    }
    ,
    l._mode = function() {
        var t = this.options.layoutMode
          , e = this.modes[t];
        if (!e)
            throw new Error("No layout mode: " + t);
        return e.options = this.options[t],
        e
    }
    ,
    l._resetLayout = function() {
        e.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    l._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }
    ,
    l._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }
    ,
    l._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    l.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    l.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }
    ,
    l.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(),
            this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems),
            this.filteredItems = i.concat(this.filteredItems),
            this.items = e.concat(this.items)
        }
    }
    ,
    l._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide),
        this.reveal(e.matches),
        this.layoutItems(e.matches, !0),
        e.matches
    }
    ,
    l.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++)
                o = e[i],
                this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++)
                e[i].isLayoutInstant = !0;
            for (this.arrange(),
            i = 0; i < n; i++)
                delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    }
    ;
    var c = l.remove;
    return l.remove = function(t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }
    ,
    l.shuffle = function() {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    l._noTransition = function(t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i,
        o
    }
    ,
    l.getFilteredItemElements = function() {
        return this.filteredItems.map(function(t) {
            return t.element
        })
    }
    ,
    d
});

/*jquery.mb.YTPlayer 01-10-2018
 _ jquery.mb.components 
 _ email: matteo@open-lab.com 
 _ Copyright (c) 2001-2018. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */
function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0,
    jQuery(document).trigger("YTAPIReady"))
}
function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3] || 0, 10)]
    }
}
function uncamel(a) {
    return a.replace(/([A-Z])/g, function(a) {
        return "-" + a.toLowerCase()
    })
}
function setUnit(a, b) {
    return "string" != typeof a || a.match(/^[\-0-9\.]+jQuery/) ? "" + a + b : a
}
function setFilter(a, b, c) {
    var d = uncamel(b)
      , e = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    a[e + "filter"] = a[e + "filter"] || "",
    c = setUnit(c > jQuery.CSS.filters[b].max ? jQuery.CSS.filters[b].max : c, jQuery.CSS.filters[b].unit),
    a[e + "filter"] += d + "(" + c + ") ",
    delete a[b]
}
function isTouchSupported() {
    var a = nAgt.msMaxTouchPoints
      , b = "ontouchstart"in document.createElement("div");
    return !(!a && !b)
}
function isTouchSupported() {
    var a = nAgt.msMaxTouchPoints
      , b = "ontouchstart"in document.createElement("div");
    return !(!a && !b)
}
var ytp = ytp || {}
  , getYTPVideoID = function(a) {
    var b, c;
    return a.indexOf("youtu.be") > 0 || a.indexOf("youtube.com/embed") > 0 ? (b = a.substr(a.lastIndexOf("/") + 1, a.length),
    c = b.indexOf("?list=") > 0 ? b.substr(b.lastIndexOf("="), b.length) : null,
    b = c ? b.substr(0, b.lastIndexOf("?")) : b) : a.indexOf("http") > -1 ? (b = a.match(/[\\?&]v=([^&#]*)/)[1],
    c = a.indexOf("list=") > 0 ? a.match(/[\\?&]list=([^&#]*)/)[1] : null) : (b = a.length > 15 ? null : a,
    c = b ? null : a),
    {
        videoID: b,
        playlistID: c
    }
};
!function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.2.6",
        build: "7274",
        author: "Matteo Bicocchi (pupunzi)",
        apiKey: "",
        defaults: {
            videoURL: null,
            containment: "body",
            ratio: "auto",
            fadeOnStartTime: 1500,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            coverImage: !1,
            loop: !0,
            addRaster: !1,
            mask: !1,
            opacity: 1,
            quality: "default",
            vol: 50,
            mute: !1,
            showControls: !0,
            anchor: "center,center",
            showAnnotations: !1,
            cc_load_policy: !1,
            showYTLogo: !0,
            useOnMobile: !0,
            mobileFallbackImage: null,
            playOnlyIfVisible: !1,
            onScreenPercentage: 30,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            optimizeDisplay: !0,
            abundance: .2,
            gaTrack: !0,
            remember_last_time: !1,
            addFilters: !1,
            onReady: function(a) {},
            onError: function(a, b) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        controlBar: null,
        locationProtocol: "https:",
        defaultFilters: {
            grayscale: {
                value: 0,
                unit: "%"
            },
            hue_rotate: {
                value: 0,
                unit: "deg"
            },
            invert: {
                value: 0,
                unit: "%"
            },
            opacity: {
                value: 0,
                unit: "%"
            },
            saturate: {
                value: 0,
                unit: "%"
            },
            sepia: {
                value: 0,
                unit: "%"
            },
            brightness: {
                value: 0,
                unit: "%"
            },
            contrast: {
                value: 0,
                unit: "%"
            },
            blur: {
                value: 0,
                unit: "px"
            }
        },
        buildPlayer: function(options) {
            function isIframe() {
                var a = !1;
                try {
                    self.location.href != top.location.href && (a = !0)
                } catch (b) {
                    a = !0
                }
                return a
            }
            if (ytp.YTAPIReady || "undefined" != typeof window.YT)
                setTimeout(function() {
                    jQuery(document).trigger("YTAPIReady"),
                    ytp.YTAPIReady = !0
                }, 100);
            else {
                jQuery("#YTAPI").remove();
                var tag = jQuery("<script></script>").attr({
                    src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                    id: "YTAPI"
                });
                jQuery("head").prepend(tag)
            }
            return this.each(function() {
                var YTPlayer = this
                  , $YTPlayer = jQuery(YTPlayer);
                $YTPlayer.hide(),
                YTPlayer.loop = 0,
                YTPlayer.state = 0,
                YTPlayer.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters),
                YTPlayer.filtersEnabled = !0,
                YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(),
                $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "object" != typeof property && (property = {}),
                YTPlayer.opt = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaults, YTPlayer.opt, options, property),
                YTPlayer.opt.elementId = YTPlayer.id,
                0 === YTPlayer.opt.vol && (YTPlayer.opt.vol = 1,
                YTPlayer.opt.mute = !0),
                YTPlayer.opt.autoPlay && 0 == YTPlayer.opt.mute && jQuery.mbBrowser.chrome && (jQuery(document).one("mousedown.YTPstart", function() {
                    $YTPlayer.YTPPlay()
                }),
                console.info("YTPlayer info: On Webkit browsers you can not autoplay the video if the audio is on.")),
                YTPlayer.opt.loop && "boolean" == typeof YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999);
                var fullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
                YTPlayer.opt.realfullscreen = isIframe() || !fullScreenAvailable ? !1 : YTPlayer.opt.realfullscreen,
                YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3",
                YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? "1" : "0",
                YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage,
                jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (YTPlayer.opt.opacity = 1),
                YTPlayer.opt.containment = "self" === YTPlayer.opt.containment ? $YTPlayer : jQuery(YTPlayer.opt.containment),
                YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1,
                YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio,
                YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio),
                YTPlayer.orig_containment_background = YTPlayer.opt.containment.css("background-image"),
                $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime()),
                YTPlayer.playerID = "iframe_" + YTPlayer.id,
                YTPlayer.isAlone = !1,
                YTPlayer.hasFocus = !0,
                YTPlayer.videoID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1,
                YTPlayer.playlistID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1;
                var start_from_last = 0;
                if (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) && (start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID))),
                YTPlayer.opt.remember_last_time && start_from_last && (YTPlayer.start_from_last = start_from_last,
                jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID)),
                YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment),
                YTPlayer.isBackground = YTPlayer.opt.containment.is("body"),
                !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    YTPlayer.isPlayer && $YTPlayer.show(),
                    YTPlayer.overlay = jQuery("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }).addClass("YTPOverlay"),
                    YTPlayer.wrapper = jQuery("<div/>").attr("id", "wrapper_" + YTPlayer.id).css({
                        position: "absolute",
                        zIndex: 0,
                        minWidth: "100%",
                        minHeight: "100%",
                        left: 0,
                        top: 0,
                        overflow: "hidden",
                        opacity: 0
                    }).addClass("mbYTP_wrapper"),
                    YTPlayer.isPlayer && (YTPlayer.inlinePlayButton = jQuery("<div/>").addClass("inlinePlayButton").html(jQuery.mbYTPlayer.controls.play),
                    $YTPlayer.append(YTPlayer.inlinePlayButton),
                    YTPlayer.inlinePlayButton.on("click", function(a) {
                        $YTPlayer.YTPPlay(),
                        a.stopPropagation()
                    }),
                    YTPlayer.opt.autoPlay && YTPlayer.inlinePlayButton.hide(),
                    YTPlayer.overlay.on("click", function() {
                        $YTPlayer.YTPTogglePlay()
                    }).css({
                        cursor: "pointer"
                    }));
                    var playerBox = jQuery("<div/>").attr("id", YTPlayer.playerID).addClass("playerBox");
                    if (playerBox.css({
                        position: "absolute",
                        zIndex: 0,
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        overflow: "hidden",
                        opacity: 1
                    }),
                    YTPlayer.wrapper.append(playerBox),
                    playerBox.after(YTPlayer.overlay),
                    YTPlayer.isPlayer && (YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer"),
                    YTPlayer.inlineWrapper.css({
                        position: "relative",
                        maxWidth: YTPlayer.opt.containment.css("width")
                    }),
                    YTPlayer.opt.containment.css({
                        position: "relative",
                        paddingBottom: "56.25%",
                        overflow: "hidden",
                        height: 0
                    }),
                    YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)),
                    YTPlayer.opt.containment.children().not("script, style").each(function() {
                        "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                    }),
                    YTPlayer.isBackground ? (jQuery("body").css({
                        boxSizing: "border-box"
                    }),
                    YTPlayer.wrapper.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 0
                    })) : "static" == YTPlayer.opt.containment.css("position") && (YTPlayer.opt.containment.css({
                        position: "relative"
                    }),
                    $YTPlayer.show()),
                    YTPlayer.opt.containment.prepend(YTPlayer.wrapper),
                    YTPlayer.isBackground || YTPlayer.overlay.on("mouseenter", function() {
                        YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
                    }).on("mouseleave", function() {
                        YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
                    }),
                    jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile)
                        return YTPlayer.opt.mobileFallbackImage && (YTPlayer.wrapper.css({
                            backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            opacity: 1
                        }),
                        YTPlayer.wrapper.css({
                            opacity: 1
                        })),
                        $YTPlayer;
                    jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && YTPlayer.opt.useOnMobile && jQuery("body").one("touchstart", function() {
                        YTPlayer.player.playVideo()
                    }),
                    jQuery(document).one("YTAPIReady", function() {
                        $YTPlayer.trigger("YTAPIReady_" + YTPlayer.id),
                        ytp.YTAPIReady = !0
                    }),
                    YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage),
                    $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function() {
                        var a = this
                          , b = jQuery(a);
                        a.isBackground && ytp.backgroundIsInited || a.isInit || (a.isBackground && (ytp.backgroundIsInited = !0),
                        a.opt.autoPlay = "undefined" == typeof a.opt.autoPlay ? !!a.isBackground : a.opt.autoPlay,
                        a.opt.vol = a.opt.vol ? a.opt.vol : 100,
                        jQuery.mbYTPlayer.getDataFromAPI(a),
                        jQuery(a).on("YTPChanged", function(c) {
                            if (!a.isInit) {
                                a.isInit = !0;
                                var d = {
                                    modestbranding: 1,
                                    autoplay: 0,
                                    controls: 0,
                                    showinfo: 0,
                                    rel: 0,
                                    enablejsapi: 1,
                                    version: 3,
                                    playerapiid: a.playerID,
                                    origin: "*",
                                    allowfullscreen: !0,
                                    wmode: "transparent",
                                    iv_load_policy: a.opt.showAnnotations,
                                    cc_load_policy: a.opt.cc_load_policy,
                                    playsinline: jQuery.mbBrowser.mobile ? 1 : 0,
                                    html5: document.createElement("video").canPlayType ? 1 : 0
                                };
                                new YT.Player(a.playerID,{
                                    playerVars: d,
                                    events: {
                                        onReady: function(c) {
                                            a.player = c.target,
                                            a.player.loadVideoById({
                                                videoId: a.videoID.toString(),
                                                suggestedQuality: a.opt.quality
                                            }),
                                            b.trigger("YTPlayerIsReady_" + a.id)
                                        },
                                        onStateChange: function(b) {
                                            if ("function" == typeof b.target.getPlayerState) {
                                                var c = b.target.getPlayerState();
                                                if (a.preventTrigger || a.isStarting)
                                                    return void (a.preventTrigger = !1);
                                                a.state = c;
                                                var d;
                                                switch (c) {
                                                case -1:
                                                    d = "YTPUnstarted";
                                                    break;
                                                case 0:
                                                    d = "YTPRealEnd";
                                                    break;
                                                case 1:
                                                    d = "YTPPlay",
                                                    a.controlBar.length && a.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause),
                                                    a.isPlayer && a.inlinePlayButton.hide(),
                                                    jQuery(document).off("mousedown.YTPstart");
                                                    break;
                                                case 2:
                                                    d = "YTPPause",
                                                    a.controlBar.length && a.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play),
                                                    a.isPlayer && a.inlinePlayButton.show();
                                                    break;
                                                case 3:
                                                    a.player.setPlaybackQuality(a.opt.quality),
                                                    d = "YTPBuffering",
                                                    a.controlBar.length && a.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                                                    break;
                                                case 5:
                                                    d = "YTPCued"
                                                }
                                                var e = jQuery.Event(d);
                                                e.time = a.currentTime,
                                                jQuery(a).trigger(e)
                                            }
                                        },
                                        onPlaybackQualityChange: function(b) {
                                            var c = b.target.getPlaybackQuality()
                                              , d = jQuery.Event("YTPQualityChange");
                                            d.quality = c,
                                            jQuery(a).trigger(d)
                                        },
                                        onError: function(c) {
                                            switch ("function" == typeof a.opt.onError && a.opt.onError(b, c),
                                            c.data) {
                                            case 2:
                                                console.error("video ID:: " + a.videoID + ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");
                                                break;
                                            case 5:
                                                console.error("video ID:: " + a.videoID + ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");
                                                break;
                                            case 100:
                                                console.error("video ID:: " + a.videoID + ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");
                                                break;
                                            case 101:
                                            case 150:
                                                console.error("video ID:: " + a.videoID + ": The owner of the requested video does not allow it to be played in embedded players.")
                                            }
                                            a.isList && jQuery(a).YTPPlayNext()
                                        }
                                    }
                                }),
                                b.on("YTPlayerIsReady_" + a.id, function() {
                                    return a.isReady ? this : (a.playerEl = a.player.getIframe(),
                                    jQuery(a.playerEl).unselectable(),
                                    b.optimizeDisplay(),
                                    jQuery(window).off("resize.YTP_" + a.id).on("resize.YTP_" + a.id, function() {
                                        b.optimizeDisplay()
                                    }),
                                    a.opt.remember_last_time && jQuery(window).on("unload.YTP_" + a.id, function() {
                                        var b = a.player.getCurrentTime();
                                        jQuery.mbCookie.set("YTPlayer_start_from" + a.videoID, b, 0)
                                    }),
                                    void b.YTPCheckForState())
                                })
                            }
                        }))
                    }),
                    $YTPlayer.off("YTPTime.mask"),
                    jQuery.mbYTPlayer.applyMask(YTPlayer)
                }
            })
        },
        isOnScreen: function(a, b) {
            b = b || 10;
            var c = a.wrapper
              , d = jQuery(window).scrollTop()
              , e = d + jQuery(window).height()
              , f = c.height() * b / 100
              , g = c.offset().top + f
              , h = c.offset().top + (c.height() - f);
            return e >= h && g >= d
        },
        getDataFromAPI: function(a) {
            if (a.videoData = jQuery.mbStorage.get("YTPlayer_data_" + a.videoID),
            jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                if (a.hasData && a.isPlayer && !a.opt.autoPlay) {
                    var b = a.opt.coverImage ? "url(" + a.opt.coverImage + ") center center" : a.orig_containment_background;
                    console.debug("1", b),
                    a.opt.containment.css({
                        background: b,
                        backgroundSize: "cover"
                    })
                }
            }),
            a.videoData)
                setTimeout(function() {
                    a.dataReceived = !0;
                    var b = jQuery.Event("YTPChanged");
                    b.time = a.currentTime,
                    b.videoId = a.videoID,
                    b.opt = a.opt,
                    jQuery(a).trigger(b);
                    var c = jQuery.Event("YTPData");
                    c.prop = {};
                    for (var d in a.videoData)
                        c.prop[d] = a.videoData[d];
                    jQuery(a).trigger(c)
                }, a.opt.fadeOnStartTime),
                a.hasData = !0;
            else if (jQuery.mbYTPlayer.apiKey)
                jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + a.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(b) {
                    function c(b) {
                        a.videoData = {},
                        a.videoData.id = a.videoID,
                        a.videoData.channelTitle = b.channelTitle,
                        a.videoData.title = b.title,
                        a.videoData.description = b.description.length < 400 ? b.description : b.description.substring(0, 400) + " ...",
                        a.videoData.thumb_max = b.thumbnails.maxres ? b.thumbnails.maxres.url : null,
                        a.videoData.thumb_high = b.thumbnails.high ? b.thumbnails.high.url : null,
                        a.videoData.thumb_medium = b.thumbnails.medium ? b.thumbnails.medium.url : null,
                        jQuery.mbStorage.set("YTPlayer_data_" + a.videoID, a.videoData)
                    }
                    a.dataReceived = !0;
                    var d = jQuery.Event("YTPChanged");
                    d.time = a.currentTime,
                    d.videoId = a.videoID,
                    jQuery(a).trigger(d),
                    b.items[0] ? (c(b.items[0].snippet),
                    a.hasData = !0) : (a.videoData = {},
                    a.hasData = !1);
                    var e = jQuery.Event("YTPData");
                    e.prop = {};
                    for (var f in a.videoData)
                        e.prop[f] = a.videoData[f];
                    jQuery(a).trigger(e)
                });
            else {
                if (setTimeout(function() {
                    var b = jQuery.Event("YTPChanged");
                    b.time = a.currentTime,
                    b.videoId = a.videoID,
                    jQuery(a).trigger(b)
                }, 50),
                !a.opt.autoPlay) {
                    var b = a.opt.coverImage ? "url(" + a.opt.coverImage + ") center center" : a.orig_containment_background;
                    b && a.opt.containment.css({
                        background: b,
                        backgroundSize: "cover"
                    })
                }
                a.videoData = null
            }
            a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio,
            a.isPlayer && !a.opt.autoPlay && (a.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(),
            jQuery(a).append(a.loading),
            a.loading.fadeIn())
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove()
        },
        getVideoData: function() {
            var a = this.get(0);
            return a.videoData
        },
        getVideoID: function() {
            var a = this.get(0);
            return a.videoID || !1
        },
        getPlaylistID: function() {
            var a = this.get(0);
            return a.playlistID || !1
        },
        setVideoQuality: function(a) {
            var b = this.get(0);
            return b.player.setPlaybackQuality(a),
            this
        },
        playlist: function(a, b, c) {
            var d = this
              , e = d.get(0);
            return e.isList = !0,
            b && (a = jQuery.shuffle(a)),
            e.videoID || (e.videos = a,
            e.videoCounter = 1,
            e.videoLength = a.length,
            jQuery(e).data("property", a[0]),
            jQuery(e).YTPlayer()),
            "function" == typeof c && jQuery(e).one("YTPChanged", function() {
                c(e)
            }),
            jQuery(e).on("YTPEnd", function() {
                jQuery(e).YTPPlayNext()
            }),
            this
        },
        playNext: function() {
            var a = this.get(0);
            return a.videoCounter++,
            a.videoCounter > a.videoLength && (a.videoCounter = 1),
            jQuery(a).YTPPlayIndex(a.videoCounter),
            this
        },
        playPrev: function() {
            var a = this.get(0);
            return a.videoCounter--,
            a.videoCounter <= 0 && (a.videoCounter = a.videoLength),
            jQuery(a).YTPPlayIndex(a.videoCounter),
            this
        },
        playIndex: function(a) {
            var b = this.get(0);
            b.checkForStartAt && (clearInterval(b.checkForStartAt),
            clearInterval(b.getState)),
            b.videoCounter = a,
            b.videoCounter >= b.videoLength && (b.videoCounter = b.videoLength);
            var c = b.videos[b.videoCounter - 1];
            return jQuery(b).YTPChangeVideo(c),
            this
        },
        changeVideo: function(a) {
            var b = this
              , c = b.get(0);
            c.opt.startAt = 0,
            c.opt.stopAt = 0,
            c.opt.mask = !1,
            c.opt.mute = !0,
            c.opt.autoPlay = !0,
            c.opt.addFilters = !1,
            c.opt.coverImage = !1,
            c.hasData = !1,
            c.hasChanged = !0,
            c.player.loopTime = void 0,
            a && jQuery.extend(c.opt, a),
            console.debug("changeVideo::", c.opt),
            c.videoID = getYTPVideoID(c.opt.videoURL).videoID,
            c.opt.loop && "boolean" == typeof c.opt.loop && (c.opt.loop = 9999),
            c.wrapper.css({
                background: "none"
            }),
            jQuery(c.playerEl).CSSAnimate({
                opacity: 0
            }, c.opt.fadeOnStartTime, function() {
                jQuery.mbYTPlayer.getDataFromAPI(c),
                console.debug("YTPGetPlayer::", b.YTPGetPlayer()),
                b.YTPGetPlayer().loadVideoById({
                    videoId: c.videoID,
                    suggestedQuality: c.opt.quality
                }),
                b.YTPPause(),
                b.optimizeDisplay(),
                b.YTPCheckForState()
            });
            var d = jQuery.Event("YTPChangeVideo");
            return d.time = c.currentTime,
            jQuery(c).trigger(d),
            jQuery.mbYTPlayer.applyMask(c),
            this
        },
        getPlayer: function() {
            var a = this.get(0);
            return a.isReady ? a.player || null : null
        },
        playerDestroy: function() {
            var a = this.get(0);
            return a.isReady ? (ytp.YTAPIReady = !0,
            ytp.backgroundIsInited = !1,
            a.isInit = !1,
            a.videoID = null,
            a.isReady = !1,
            a.wrapper.remove(),
            jQuery("#controlBar_" + a.id).remove(),
            clearInterval(a.checkForStartAt),
            clearInterval(a.getState),
            this) : this
        },
        fullscreen: function(real) {
            function hideMouse() {
                YTPlayer.overlay.css({
                    cursor: "none"
                })
            }
            function RunPrefixMethod(a, b) {
                for (var c, d, e = ["webkit", "moz", "ms", "o", ""], f = 0; f < e.length && !a[c]; ) {
                    if (c = b,
                    "" == e[f] && (c = c.substr(0, 1).toLowerCase() + c.substr(1)),
                    c = e[f] + c,
                    d = typeof a[c],
                    "undefined" != d)
                        return e = [e[f]],
                        "function" == d ? a[c]() : a[c];
                    f++
                }
            }
            function launchFullscreen(a) {
                RunPrefixMethod(a, "RequestFullScreen")
            }
            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            "undefined" == typeof real && (real = eval(YTPlayer.opt.realfullscreen));
            var controls = jQuery("#controlBar_" + YTPlayer.id)
              , fullScreenBtn = controls.find(".mb_OnlyYT")
              , videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    var a = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    a ? (jQuery(YTPlayer).YTPSetVideoQuality("default"),
                    jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1,
                    fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                    jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),
                    videoWrapper.removeClass("YTPFullscreen"),
                    videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, YTPlayer.opt.fadeOnStartTime),
                    videoWrapper.css({
                        zIndex: 0
                    }),
                    YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls),
                    jQuery(window).resize(),
                    jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"),
            clearTimeout(YTPlayer.hideCursor),
            YTPlayer.overlay.css({
                cursor: "auto"
            }),
            real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, YTPlayer.opt.fadeOnStartTime),
            videoWrapper.css({
                zIndex: 0
            })),
            fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
            YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function(a) {
                YTPlayer.overlay.css({
                    cursor: "auto"
                }),
                clearTimeout(YTPlayer.hideCursor),
                jQuery(a.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
            }),
            hideMouse(),
            real ? (videoWrapper.css({
                opacity: 0
            }),
            videoWrapper.addClass("YTPFullscreen"),
            launchFullscreen(videoWrapper.get(0)),
            setTimeout(function() {
                videoWrapper.CSSAnimate({
                    opacity: 1
                }, 2 * YTPlayer.opt.fadeOnStartTime),
                videoWrapper.append(controls),
                jQuery(YTPlayer).optimizeDisplay(),
                YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
            }, YTPlayer.opt.fadeOnStartTime)) : videoWrapper.css({
                zIndex: 1e4
            }).CSSAnimate({
                opacity: 1
            }, 2 * YTPlayer.opt.fadeOnStartTime),
            fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),
            YTPlayer.isAlone = !0),
            this
        },
        toggleLoops: function() {
            var a = this.get(0)
              , b = a.opt;
            return 1 == b.loop ? b.loop = 0 : (b.startAt ? a.player.seekTo(b.startAt) : a.player.playVideo(),
            b.loop = 1),
            this
        },
        play: function() {
            var a = this.get(0);
            if (!a.isReady)
                return this;
            a.player.playVideo(),
            jQuery(a.playerEl).css({
                opacity: 1
            }),
            a.wrapper.css({
                backgroundImage: "none"
            }),
            a.wrapper.CSSAnimate({
                opacity: a.isAlone ? 1 : a.opt.opacity
            }, a.opt.fadeOnStartTime);
            var b = jQuery("#controlBar_" + a.id)
              , c = b.find(".mb_YTPPlayPause");
            return c.html(jQuery.mbYTPlayer.controls.pause),
            a.state = 1,
            this
        },
        togglePlay: function(a) {
            var b = this.get(0);
            return b.isReady ? (1 == b.state ? this.YTPPause() : this.YTPPlay(),
            "function" == typeof a && a(b.state),
            this) : this
        },
        stop: function() {
            var a = this.get(0);
            if (!a.isReady)
                return this;
            var b = jQuery("#controlBar_" + a.id)
              , c = b.find(".mb_YTPPlayPause");
            return c.html(jQuery.mbYTPlayer.controls.play),
            a.player.stopVideo(),
            this
        },
        pause: function() {
            var a = this.get(0);
            return a.isReady ? (a.player.pauseVideo(),
            a.state = 2,
            this) : this
        },
        seekTo: function(a) {
            var b = this.get(0);
            return b.isReady ? (b.player.seekTo(a, !0),
            this) : this
        },
        setVolume: function(a) {
            var b = this.get(0);
            return b.isReady ? (b.opt.vol = a,
            b.player.setVolume(b.opt.vol),
            b.volumeBar && b.volumeBar.length && b.volumeBar.updateSliderVal(a),
            this) : this
        },
        getVolume: function() {
            var a = this.get(0);
            return a.isReady ? a.player.getVolume() : this
        },
        toggleVolume: function() {
            var a = this.get(0);
            return a.isReady ? (a.isMute ? (jQuery.mbBrowser.mobile || this.YTPSetVolume(a.opt.vol),
            this.YTPUnmute()) : this.YTPMute(),
            this) : this
        },
        mute: function() {
            var a = this.get(0);
            if (!a.isReady)
                return this;
            if (a.isMute)
                return this;
            a.player.mute(),
            a.isMute = !0,
            a.player.setVolume(0),
            a.volumeBar && a.volumeBar.length && a.volumeBar.width() > 10 && a.volumeBar.updateSliderVal(0);
            var b = jQuery("#controlBar_" + a.id)
              , c = b.find(".mb_YTPMuteUnmute");
            c.html(jQuery.mbYTPlayer.controls.unmute),
            jQuery(a).addClass("isMuted"),
            a.volumeBar && a.volumeBar.length && a.volumeBar.addClass("muted");
            var d = jQuery.Event("YTPMuted");
            return d.time = a.currentTime,
            a.preventTrigger || jQuery(a).trigger(d),
            this
        },
        unmute: function() {
            var a = this.get(0);
            if (!a.isReady)
                return this;
            if (!a.isMute)
                return this;
            a.player.unMute(),
            a.isMute = !1,
            jQuery(a).YTPSetVolume(a.opt.vol),
            a.volumeBar && a.volumeBar.length && a.volumeBar.updateSliderVal(a.opt.vol > 10 ? a.opt.vol : 10);
            var b = jQuery("#controlBar_" + a.id)
              , c = b.find(".mb_YTPMuteUnmute");
            c.html(jQuery.mbYTPlayer.controls.mute),
            jQuery(a).removeClass("isMuted"),
            a.volumeBar && a.volumeBar.length && a.volumeBar.removeClass("muted");
            var d = jQuery.Event("YTPUnmuted");
            return d.time = a.currentTime,
            a.preventTrigger || jQuery(a).trigger(d),
            this
        },
        applyFilter: function(a, b) {
            var c = this
              , d = c.get(0);
            return d.isReady ? (d.filters[a].value = b,
            void (d.filtersEnabled && c.YTPEnableFilters())) : this
        },
        applyFilters: function(a) {
            var b = this
              , c = b.get(0);
            if (!c.isReady)
                return this;
            if (!c.isReady)
                return jQuery(c).on("YTPReady", function() {
                    b.YTPApplyFilters(a)
                }),
                this;
            for (var d in a)
                b.YTPApplyFilter(d, a[d]);
            b.trigger("YTPFiltersApplied")
        },
        toggleFilter: function(a, b) {
            var c = this
              , d = c.get(0);
            return d.isReady ? (d.filters[a].value ? d.filters[a].value = 0 : d.filters[a].value = b,
            d.filtersEnabled && jQuery(d).YTPEnableFilters(),
            this) : this
        },
        toggleFilters: function(a) {
            var b = this
              , c = b.get(0);
            return c.isReady ? (c.filtersEnabled ? (jQuery(c).trigger("YTPDisableFilters"),
            jQuery(c).YTPDisableFilters()) : (jQuery(c).YTPEnableFilters(),
            jQuery(c).trigger("YTPEnableFilters")),
            "function" == typeof a && a(c.filtersEnabled),
            this) : this
        },
        disableFilters: function() {
            var a = this
              , b = a.get(0);
            if (!b.isReady)
                return this;
            var c = jQuery(b.playerEl);
            return c.css("-webkit-filter", ""),
            c.css("filter", ""),
            b.filtersEnabled = !1,
            this
        },
        enableFilters: function() {
            var a = this
              , b = a.get(0);
            if (!b.isReady)
                return this;
            var c = jQuery(b.playerEl)
              , d = "";
            for (var e in b.filters)
                b.filters[e].value && (d += e.replace("_", "-") + "(" + b.filters[e].value + b.filters[e].unit + ") ");
            return c.css("-webkit-filter", d),
            c.css("filter", d),
            b.filtersEnabled = !0,
            this
        },
        removeFilter: function(a, b) {
            var c = this
              , d = c.get(0);
            if (!d.isReady)
                return this;
            if ("function" == typeof a && (b = a,
            a = null),
            a)
                c.YTPApplyFilter(a, 0),
                "function" == typeof b && b(a);
            else {
                for (var e in d.filters)
                    c.YTPApplyFilter(e, 0);
                "function" == typeof b && b(e),
                d.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters)
            }
            var f = jQuery.Event("YTPFiltersApplied");
            return c.trigger(f),
            this
        },
        getFilters: function() {
            var a = this.get(0);
            return a.isReady ? a.filters : this
        },
        addMask: function(a) {
            var b = this.get(0);
            if (!b.isReady)
                return this;
            a || (a = b.actualMask);
            var c = jQuery("<img/>").attr("src", a).on("load", function() {
                b.overlay.CSSAnimate({
                    opacity: 0
                }, b.opt.fadeOnStartTime, function() {
                    b.hasMask = !0,
                    c.remove(),
                    b.overlay.css({
                        backgroundImage: "url(" + a + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    }),
                    b.overlay.CSSAnimate({
                        opacity: 1
                    }, b.opt.fadeOnStartTime)
                })
            });
            return this
        },
        removeMask: function() {
            var a = this.get(0);
            return a.isReady ? (a.overlay.CSSAnimate({
                opacity: 0
            }, a.opt.fadeOnStartTime, function() {
                a.hasMask = !1,
                a.overlay.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                }),
                a.overlay.CSSAnimate({
                    opacity: 1
                }, a.opt.fadeOnStartTime)
            }),
            this) : this
        },
        applyMask: function(a) {
            var b = jQuery(a);
            if (!a.isReady)
                return this;
            if (b.off("YTPTime.mask"),
            a.opt.mask)
                if ("string" == typeof a.opt.mask)
                    b.YTPAddMask(a.opt.mask),
                    a.actualMask = a.opt.mask;
                else if ("object" == typeof a.opt.mask) {
                    for (var c in a.opt.mask)
                        if (a.opt.mask[c]) {
                            jQuery("<img/>").attr("src", a.opt.mask[c])
                        }
                    a.opt.mask[0] && b.YTPAddMask(a.opt.mask[0]),
                    b.on("YTPTime.mask", function(c) {
                        for (var d in a.opt.mask)
                            c.time == d && (a.opt.mask[d] ? (b.YTPAddMask(a.opt.mask[d]),
                            a.actualMask = a.opt.mask[d]) : b.YTPRemoveMask())
                    })
                }
        },
        toggleMask: function() {
            var a = this.get(0);
            if (!a.isReady)
                return this;
            var b = jQuery(a);
            return a.hasMask ? b.YTPRemoveMask() : b.YTPAddMask(),
            this
        },
        manageProgress: function() {
            var a = this.get(0)
              , b = jQuery("#controlBar_" + a.id)
              , c = b.find(".mb_YTPProgress")
              , d = b.find(".mb_YTPLoaded")
              , e = b.find(".mb_YTPseekbar")
              , f = c.outerWidth()
              , g = Math.floor(a.player.getCurrentTime())
              , h = Math.floor(a.player.getDuration())
              , i = g * f / h
              , j = 0
              , k = 100 * a.player.getVideoLoadedFraction();
            return d.css({
                left: j,
                width: k + "%"
            }),
            e.css({
                left: 0,
                width: i
            }),
            {
                totalTime: h,
                currentTime: g
            }
        },
        buildControls: function(YTPlayer) {
            if (jQuery("#controlBar_" + YTPlayer.id).remove(),
            !YTPlayer.opt.showControls)
                return void (YTPlayer.controlBar = !1);
            if (YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl,
            !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide().on("click", function(a) {
                    a.stopPropagation()
                });
                var buttonBar = jQuery("<div/>").addClass("buttonBar")
                  , playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlayPause ytpicon").on("click", function(a) {
                    a.stopPropagation(),
                    jQuery(YTPlayer).YTPTogglePlay()
                })
                  , MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").on("click", function(a) {
                    a.stopPropagation(),
                    jQuery(YTPlayer).YTPToggleVolume()
                })
                  , volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                    display: "inline-block"
                });
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime")
                  , vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + YTPlayer.opt.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                    window.open(vURL, "viewOnYT")
                })
                  , onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function(a) {
                    a.stopPropagation(),
                    jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realfullscreen)
                })
                  , progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").on("click", function(a) {
                    a.stopPropagation(),
                    timeBar.css({
                        width: a.clientX - timeBar.offset().left
                    }),
                    YTPlayer.timeW = a.clientX - timeBar.offset().left,
                    YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                        width: 0
                    });
                    var b = Math.floor(YTPlayer.player.getDuration());
                    YTPlayer["goto"] = timeBar.outerWidth() * b / progressBar.outerWidth(),
                    YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0),
                    YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                        width: 0
                    })
                })
                  , loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute")
                  , timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar),
                buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),
                YTPlayer.opt.showYTLogo && buttonBar.append(movieUrl),
                (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo),
                YTPlayer.controlBar.append(buttonBar).append(progressBar),
                YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"),
                YTPlayer.wrapper.before(YTPlayer.controlBar)),
                volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function(a) {
                        0 == a.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(),
                        YTPlayer.player.setVolume(a.value),
                        YTPlayer.isMute || (YTPlayer.opt.vol = a.value)
                    }
                })
            }
        },
        checkForState: function() {
            var YTPlayer = this.get(0)
              , $YTPlayer = jQuery(YTPlayer);
            clearInterval(YTPlayer.getState);
            var interval = 100;
            return jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer),
            void (YTPlayer.getState = setInterval(function() {
                var $YTPlayer = jQuery(YTPlayer);
                if (YTPlayer.isReady) {
                    var prog = jQuery(YTPlayer).YTPManageProgress()
                      , stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                    if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0,
                    YTPlayer.currentTime != prog.currentTime) {
                        var YTPEvent = jQuery.Event("YTPTime");
                        YTPEvent.time = YTPlayer.currentTime,
                        jQuery(YTPlayer).trigger(YTPEvent)
                    }
                    if (YTPlayer.currentTime = prog.currentTime,
                    YTPlayer.totalTime = YTPlayer.player.getDuration(),
                    0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"),
                    YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),
                    eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0,
                    YTPlayer.preventTrigger = !0,
                    YTPlayer.preventTrigger = !0,
                    $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1,
                    YTPlayer.preventTrigger = !0,
                    $YTPlayer.YTPPause())),
                    YTPlayer.opt.playOnlyIfVisible) {
                        var isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage);
                        isOnScreen || 1 != YTPlayer.state ? isOnScreen && !YTPlayer.isOnScreen && (YTPlayer.isOnScreen = !0,
                        YTPlayer.player.playVideo()) : (YTPlayer.isOnScreen = !1,
                        $YTPlayer.YTPPause())
                    }
                    if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"),
                    YTPlayer.isCompact = !0,
                    !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"),
                    YTPlayer.isCompact = !1,
                    !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),
                    YTPlayer.player.getPlayerState() > 0 && (parseFloat(YTPlayer.player.getDuration() - .5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                        if (YTPlayer.isEnded)
                            return;
                        if (YTPlayer.isEnded = !0,
                        setTimeout(function() {
                            YTPlayer.isEnded = !1
                        }, 1e3),
                        YTPlayer.isList) {
                            if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                                YTPlayer.player.loopTime = void 0,
                                clearInterval(YTPlayer.getState);
                                var YTPEnd = jQuery.Event("YTPEnd");
                                return YTPEnd.time = YTPlayer.currentTime,
                                void jQuery(YTPlayer).trigger(YTPEnd)
                            }
                        } else if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                            YTPlayer.player.loopTime = void 0,
                            YTPlayer.state = 2;
                            var bgndURL = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                            return YTPlayer.opt.containment.css({
                                background: bgndURL,
                                backgroundSize: "cover"
                            }),
                            jQuery(YTPlayer).YTPPause(),
                            void YTPlayer.wrapper.CSSAnimate({
                                opacity: 0
                            }, YTPlayer.opt.fadeOnStartTime, function() {
                                YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                                var a = jQuery.Event("YTPEnd");
                                a.time = YTPlayer.currentTime,
                                jQuery(YTPlayer).trigger(a),
                                YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
                                var b = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                                YTPlayer.opt.containment.css({
                                    background: b,
                                    backgroundSize: "cover"
                                })
                            })
                        }
                        YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1,
                        YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1,
                        YTPlayer.preventTrigger = !0,
                        YTPlayer.state = 2,
                        YTPlayer.player.pauseVideo(),
                        YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0),
                        YTPlayer.player.playVideo()
                    }
                }
            }, interval))) : ($YTPlayer.YTPPlayerDestroy(),
            clearInterval(YTPlayer.getState),
            void clearInterval(YTPlayer.checkForStartAt))
        },
        checkForStart: function(YTPlayer) {
            var $YTPlayer = jQuery(YTPlayer);
            if (!jQuery.contains(document, YTPlayer))
                return void $YTPlayer.YTPPlayerDestroy();
            if (jQuery.mbYTPlayer.buildControls(YTPlayer),
            YTPlayer.overlay)
                if (YTPlayer.opt.addRaster) {
                    var classN = "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster";
                    YTPlayer.overlay.addClass(YTPlayer.isRetina ? classN + " retina" : classN)
                } else
                    YTPlayer.overlay.removeClass(function(a, b) {
                        var c = b.split(" ")
                          , d = [];
                        return jQuery.each(c, function(a, b) {
                            /raster.*/.test(b) && d.push(b)
                        }),
                        d.push("retina"),
                        d.join(" ")
                    });
            YTPlayer.preventTrigger = !0,
            YTPlayer.state = 2,
            $YTPlayer.YTPPause(),
            $YTPlayer.YTPMute(),
            YTPlayer.preventTrigger = !0,
            YTPlayer.player.playVideo(),
            YTPlayer.isStarting = !0;
            var startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
            return YTPlayer.checkForStartAt = setInterval(function() {
                YTPlayer.player.seekTo(startAt, !0);
                var canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();
                if (YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
                    YTPlayer.start_from_last = null,
                    clearInterval(YTPlayer.checkForStartAt),
                    "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady(YTPlayer),
                    YTPlayer.isReady = !0,
                    $YTPlayer.YTPRemoveFilter(),
                    YTPlayer.opt.addFilters ? $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters) : $YTPlayer.YTPApplyFilters({}),
                    $YTPlayer.YTPEnableFilters();
                    var YTPready = jQuery.Event("YTPReady");
                    if (YTPready.time = YTPlayer.currentTime,
                    jQuery(YTPlayer).trigger(YTPready),
                    YTPlayer.state = 2,
                    jQuery(YTPlayer).YTPPause(),
                    YTPlayer.opt.mute || jQuery(YTPlayer).YTPUnmute(),
                    "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) ? _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]) : "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()),
                    YTPlayer.opt.autoPlay) {
                        var YTPStart = jQuery.Event("YTPStart");
                        YTPStart.time = YTPlayer.currentTime,
                        jQuery(YTPlayer).trigger(YTPStart),
                        YTPlayer.isStarting = !1,
                        "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari ? setTimeout(function() {
                            $YTPlayer.YTPPlay()
                        }, 10) : $YTPlayer.YTPPlay()
                    } else
                        YTPlayer.player.pauseVideo(),
                        setTimeout(function() {
                            YTPlayer.start_from_last && YTPlayer.player.seekTo(startAt, !0),
                            YTPlayer.isPlayer || (YTPlayer.opt.coverImage ? (YTPlayer.wrapper.css({
                                opacity: 0
                            }),
                            setTimeout(function() {
                                var a = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                                YTPlayer.wrapper.css({
                                    background: a,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat"
                                })
                            }, YTPlayer.opt.fadeOnStartTime)) : (jQuery(YTPlayer.playerEl).CSSAnimate({
                                opacity: 1
                            }, YTPlayer.opt.fadeOnStartTime),
                            YTPlayer.wrapper.CSSAnimate({
                                opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                            }, YTPlayer.opt.fadeOnStartTime))),
                            YTPlayer.isStarting = !1
                        }, 150),
                        YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                    YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && YTPlayer.loading && YTPlayer.loading.length && (YTPlayer.loading.html("Ready"),
                    setTimeout(function() {
                        YTPlayer.loading.fadeOut()
                    }, 100)),
                    YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.slideDown(1e3)
                } else
                    "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && (YTPlayer.player.playVideo(),
                    startAt >= 0 && YTPlayer.player.seekTo(startAt, !0))
            }, 100),
            $YTPlayer
        },
        getTime: function() {
            var a = this.get(0);
            return jQuery.mbYTPlayer.formatTime(a.currentTime)
        },
        getTotalTime: function(a) {
            var b = this.get(0);
            return jQuery.mbYTPlayer.formatTime(b.totalTime)
        },
        formatTime: function(a) {
            var b = Math.floor(a / 60)
              , c = Math.floor(a - 60 * b);
            return (9 >= b ? "0" + b : b) + " : " + (9 >= c ? "0" + c : c)
        },
        setAnchor: function(a) {
            var b = this;
            b.optimizeDisplay(a)
        },
        getAnchor: function() {
            var a = this.get(0);
            return a.opt.anchor
        }
    },
    jQuery.fn.optimizeDisplay = function(anchor) {
        var YTPlayer = this.get(0)
          , vid = {};
        YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor,
        YTPlayer.opt.anchor = "undefined " != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : "center,center";
        var YTPAlign = YTPlayer.opt.anchor.split(",")
          , el = YTPlayer.wrapper
          , iframe = jQuery(YTPlayer.playerEl);
        if (YTPlayer.opt.optimizeDisplay) {
            var abundance = iframe.height() * YTPlayer.opt.abundance
              , win = {};
            win.width = el.outerWidth(),
            win.height = el.outerHeight() + abundance,
            YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio,
            YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio),
            vid.width = win.width,
            vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio),
            vid.marginTop = Math.ceil(-((vid.height - win.height) / 2)),
            vid.marginLeft = 0;
            var lowest = vid.height < win.height;
            lowest && (vid.height = win.height,
            vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio),
            vid.marginTop = 0,
            vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2)));
            for (var a in YTPAlign)
                if (YTPAlign.hasOwnProperty(a)) {
                    var al = YTPAlign[a].replace(/ /g, "");
                    switch (al) {
                    case "top":
                        vid.marginTop = lowest ? -((vid.height - win.height) / 2) : 0;
                        break;
                    case "bottom":
                        vid.marginTop = lowest ? 0 : -(vid.height - win.height);
                        break;
                    case "left":
                        vid.marginLeft = 0;
                        break;
                    case "right":
                        vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
                        break;
                    default:
                        vid.width > win.width && (vid.marginLeft = -((vid.width - win.width) / 2))
                    }
                }
        } else
            vid.width = "100%",
            vid.height = "100%",
            vid.marginTop = 0,
            vid.marginLeft = 0;
        iframe.css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft,
            maxWidth: "initial"
        })
    }
    ,
    jQuery.shuffle = function(a) {
        for (var b = a.slice(), c = b.length, d = c; d--; ) {
            var e = parseInt(Math.random() * c)
              , f = b[d];
            b[d] = b[e],
            b[e] = f
        }
        return b
    }
    ,
    jQuery.fn.unselectable = function() {
        return this.each(function() {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on")
        })
    }
    ,
    jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer,
    jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer,
    jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState,
    jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer,
    jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID,
    jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID,
    jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo,
    jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy,
    jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play,
    jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay,
    jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop,
    jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause,
    jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo,
    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist,
    jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext,
    jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev,
    jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex,
    jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute,
    jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute,
    jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume,
    jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume,
    jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume,
    jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData,
    jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen,
    jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops,
    jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality,
    jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress,
    jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter,
    jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters,
    jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter,
    jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters,
    jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter,
    jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters,
    jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters,
    jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters,
    jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime,
    jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime,
    jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask,
    jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask,
    jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask,
    jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor,
    jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor
}(jQuery, ytp),
jQuery.support.CSStransition = function() {
    var a = (document.body || document.documentElement).style;
    return void 0 !== a.transition || void 0 !== a.WebkitTransition || void 0 !== a.MozTransition || void 0 !== a.MsTransition || void 0 !== a.OTransition
}(),
jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {
            min: 0,
            max: 100,
            unit: "px"
        },
        brightness: {
            min: 0,
            max: 400,
            unit: "%"
        },
        contrast: {
            min: 0,
            max: 400,
            unit: "%"
        },
        grayscale: {
            min: 0,
            max: 100,
            unit: "%"
        },
        hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
        },
        invert: {
            min: 0,
            max: 100,
            unit: "%"
        },
        saturate: {
            min: 0,
            max: 400,
            unit: "%"
        },
        sepia: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    normalizeCss: function(a) {
        var b = jQuery.extend(!0, {}, a);
        jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"),
        jQuery.CSS.sfx = "";
        for (var c in b) {
            if ("transform" === c && (b[jQuery.CSS.sfx + "transform"] = b[c],
            delete b[c]),
            "transform-origin" === c && (b[jQuery.CSS.sfx + "transform-origin"] = a[c],
            delete b[c]),
            "filter" !== c || jQuery.browser.mozilla || (b[jQuery.CSS.sfx + "filter"] = a[c],
            delete b[c]),
            "blur" === c && setFilter(b, "blur", a[c]),
            "brightness" === c && setFilter(b, "brightness", a[c]),
            "contrast" === c && setFilter(b, "contrast", a[c]),
            "grayscale" === c && setFilter(b, "grayscale", a[c]),
            "hueRotate" === c && setFilter(b, "hueRotate", a[c]),
            "invert" === c && setFilter(b, "invert", a[c]),
            "saturate" === c && setFilter(b, "saturate", a[c]),
            "sepia" === c && setFilter(b, "sepia", a[c]),
            "x" === c) {
                var d = jQuery.CSS.sfx + "transform";
                b[d] = b[d] || "",
                b[d] += " translateX(" + setUnit(a[c], "px") + ")",
                delete b[c]
            }
            "y" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " translateY(" + setUnit(a[c], "px") + ")",
            delete b[c]),
            "z" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " translateZ(" + setUnit(a[c], "px") + ")",
            delete b[c]),
            "rotate" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " rotate(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "rotateX" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " rotateX(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "rotateY" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " rotateY(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "rotateZ" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " rotateZ(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "scale" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " scale(" + setUnit(a[c], "") + ")",
            delete b[c]),
            "scaleX" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " scaleX(" + setUnit(a[c], "") + ")",
            delete b[c]),
            "scaleY" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " scaleY(" + setUnit(a[c], "") + ")",
            delete b[c]),
            "scaleZ" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " scaleZ(" + setUnit(a[c], "") + ")",
            delete b[c]),
            "skew" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " skew(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "skewX" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " skewX(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "skewY" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " skewY(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "perspective" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " perspective(" + setUnit(a[c], "px") + ")",
            delete b[c])
        }
        return b
    },
    getProp: function(a) {
        var b, c = [];
        for (b in a)
            0 > c.indexOf(b) && c.push(uncamel(b));
        return c.join(",")
    },
    animate: function(a, b, c, d, e) {
        return this.each(function() {
            function f() {
                g.called = !0,
                g.CSSAIsRunning = !1,
                h.off(jQuery.CSS.transitionEnd + "." + g.id),
                clearTimeout(g.timeout),
                h.css(jQuery.CSS.sfx + "transition", ""),
                "function" == typeof e && e.apply(g),
                "function" == typeof g.CSSqueue && (g.CSSqueue(),
                g.CSSqueue = null)
            }
            var g = this
              , h = jQuery(this);
            g.id = g.id || "CSSA_" + (new Date).getTime();
            var i = i || {
                type: "noEvent"
            };
            if (g.CSSAIsRunning && g.eventType == i.type && !jQuery.browser.msie && 9 >= jQuery.browser.version)
                g.CSSqueue = function() {
                    h.CSSAnimate(a, b, c, d, e)
                }
                ;
            else if (g.CSSqueue = null,
            g.eventType = i.type,
            0 !== h.length && a) {
                if (a = jQuery.normalizeCss(a),
                g.CSSAIsRunning = !0,
                "function" == typeof b && (e = b,
                b = jQuery.fx.speeds._default),
                "function" == typeof c && (d = c,
                c = 0),
                "string" == typeof c && (e = c,
                c = 0),
                "function" == typeof d && (e = d,
                d = "cubic-bezier(0.65,0.03,0.36,0.72)"),
                "string" == typeof b)
                    for (var j in jQuery.fx.speeds) {
                        if (b == j) {
                            b = jQuery.fx.speeds[j];
                            break
                        }
                        b = jQuery.fx.speeds._default
                    }
                if (b || (b = jQuery.fx.speeds._default),
                "string" == typeof e && (d = e,
                e = null),
                jQuery.support.CSStransition) {
                    var k = {
                        "default": "ease",
                        "in": "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    };
                    k[d] && (d = k[d]),
                    h.off(jQuery.CSS.transitionEnd + "." + g.id),
                    k = jQuery.CSS.getProp(a);
                    var l = {};
                    jQuery.extend(l, a),
                    l[jQuery.CSS.sfx + "transition-property"] = k,
                    l[jQuery.CSS.sfx + "transition-duration"] = b + "ms",
                    l[jQuery.CSS.sfx + "transition-delay"] = c + "ms",
                    l[jQuery.CSS.sfx + "transition-timing-function"] = d,
                    setTimeout(function() {
                        h.one(jQuery.CSS.transitionEnd + "." + g.id, f),
                        h.css(l)
                    }, 1),
                    g.timeout = setTimeout(function() {
                        g.called || !e ? (g.called = !1,
                        g.CSSAIsRunning = !1) : (h.css(jQuery.CSS.sfx + "transition", ""),
                        e.apply(g),
                        g.CSSAIsRunning = !1,
                        "function" == typeof g.CSSqueue && (g.CSSqueue(),
                        g.CSSqueue = null))
                    }, b + c + 10)
                } else {
                    for (k in a)
                        "transform" === k && delete a[k],
                        "filter" === k && delete a[k],
                        "transform-origin" === k && delete a[k],
                        "auto" === a[k] && delete a[k],
                        "x" === k && (i = a[k],
                        j = "left",
                        a[j] = i,
                        delete a[k]),
                        "y" === k && (i = a[k],
                        j = "top",
                        a[j] = i,
                        delete a[k]),
                        "-ms-transform" !== k && "-ms-filter" !== k || delete a[k];
                    h.delay(c).animate(a, b, e)
                }
            }
        })
    }
},
jQuery.fn.CSSAnimate = jQuery.CSS.animate,
jQuery.normalizeCss = jQuery.CSS.normalizeCss,
jQuery.fn.css3 = function(a) {
    return this.each(function() {
        var b = jQuery(this)
          , c = jQuery.normalizeCss(a);
        b.css(c)
    })
}
;
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {},
jQuery.browser.mozilla = !1,
jQuery.browser.webkit = !1,
jQuery.browser.opera = !1,
jQuery.browser.safari = !1,
jQuery.browser.chrome = !1,
jQuery.browser.androidStock = !1,
jQuery.browser.msie = !1,
jQuery.browser.edge = !1,
jQuery.browser.ua = nAgt;
var getOS = function() {
    var a = {
        version: "Unknown version",
        name: "Unknown OS"
    };
    return -1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"),
    -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"),
    -1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux"),
    /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1],
    a.version = a.version.replace(/_/g, ".").substring(0, 5)),
    /Windows/.test(nAgt) && (a.version = "Unknown.Unknown"),
    /Windows NT 5.1/.test(nAgt) && (a.version = "5.1"),
    /Windows NT 6.0/.test(nAgt) && (a.version = "6.0"),
    /Windows NT 6.1/.test(nAgt) && (a.version = "6.1"),
    /Windows NT 6.2/.test(nAgt) && (a.version = "6.2"),
    /Windows NT 10.0/.test(nAgt) && (a.version = "10.0"),
    /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown"),
    a.name = a.name.toLowerCase(),
    a.major_version = "Unknown",
    a.minor_version = "Unknown",
    "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]),
    a.minor_version = parseFloat(a.version.split(".")[1])),
    a
};
jQuery.browser.os = getOS(),
jQuery.browser.hasTouch = isTouchSupported(),
jQuery.browser.name = navigator.appName,
jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera")))
    jQuery.browser.opera = !0,
    jQuery.browser.name = "Opera",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 6),
    -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
    jQuery.browser.opera = !0,
    jQuery.browser.name = "Opera",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
    jQuery.browser.msie = !0,
    jQuery.browser.name = "Microsoft Internet Explorer",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0,
    jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3
      , end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else
    -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0,
    jQuery.browser.name = "Microsoft Edge",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0,
    jQuery.browser.chrome = !0,
    jQuery.browser.name = "Chrome",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"),
    jQuery.browser.webkit = !0,
    jQuery.browser.androidStock = !0,
    jQuery.browser.name = "androidStock",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0,
    jQuery.browser.safari = !0,
    jQuery.browser.name = "Safari",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
    -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0,
    jQuery.browser.safari = !0,
    jQuery.browser.name = "Safari",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
    -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0,
    jQuery.browser.name = "Firefox",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset),
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 1),
    jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
-1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10),
isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
jQuery.browser.version = jQuery.browser.majorVersion,
jQuery.browser.android = /Android/i.test(nAgt),
jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt),
jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt),
jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt),
jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt),
jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt),
jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle,
jQuery.isMobile = jQuery.browser.mobile,
jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(),
jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt),
jQuery.mbBrowser = jQuery.browser,
jQuery.browser.versionCompare = function(a, b) {
    if ("stringstring" != typeof a + typeof b)
        return !1;
    for (var c = a.split("."), d = b.split("."), e = 0, f = Math.max(c.length, d.length); f > e; e++) {
        if (c[e] && !d[e] && 0 < parseInt(c[e]) || parseInt(c[e]) > parseInt(d[e]))
            return 1;
        if (d[e] && !c[e] && 0 < parseInt(d[e]) || parseInt(c[e]) < parseInt(d[e]))
            return -1
    }
    return 0
}
;
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {},
jQuery.browser.mozilla = !1,
jQuery.browser.webkit = !1,
jQuery.browser.opera = !1,
jQuery.browser.safari = !1,
jQuery.browser.chrome = !1,
jQuery.browser.androidStock = !1,
jQuery.browser.msie = !1,
jQuery.browser.edge = !1,
jQuery.browser.ua = nAgt;
var getOS = function() {
    var a = {
        version: "Unknown version",
        name: "Unknown OS"
    };
    return -1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"),
    -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"),
    -1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux"),
    /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1],
    a.version = a.version.replace(/_/g, ".").substring(0, 5)),
    /Windows/.test(nAgt) && (a.version = "Unknown.Unknown"),
    /Windows NT 5.1/.test(nAgt) && (a.version = "5.1"),
    /Windows NT 6.0/.test(nAgt) && (a.version = "6.0"),
    /Windows NT 6.1/.test(nAgt) && (a.version = "6.1"),
    /Windows NT 6.2/.test(nAgt) && (a.version = "6.2"),
    /Windows NT 10.0/.test(nAgt) && (a.version = "10.0"),
    /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown"),
    a.name = a.name.toLowerCase(),
    a.major_version = "Unknown",
    a.minor_version = "Unknown",
    "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]),
    a.minor_version = parseFloat(a.version.split(".")[1])),
    a
};
jQuery.browser.os = getOS(),
jQuery.browser.hasTouch = isTouchSupported(),
jQuery.browser.name = navigator.appName,
jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera")))
    jQuery.browser.opera = !0,
    jQuery.browser.name = "Opera",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 6),
    -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
    jQuery.browser.opera = !0,
    jQuery.browser.name = "Opera",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
    jQuery.browser.msie = !0,
    jQuery.browser.name = "Microsoft Internet Explorer",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0,
    jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3
      , end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else
    -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0,
    jQuery.browser.name = "Microsoft Edge",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0,
    jQuery.browser.chrome = !0,
    jQuery.browser.name = "Chrome",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"),
    jQuery.browser.webkit = !0,
    jQuery.browser.androidStock = !0,
    jQuery.browser.name = "androidStock",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0,
    jQuery.browser.safari = !0,
    jQuery.browser.name = "Safari",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
    -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0,
    jQuery.browser.safari = !0,
    jQuery.browser.name = "Safari",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
    -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0,
    jQuery.browser.name = "Firefox",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset),
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 1),
    jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
-1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10),
isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
jQuery.browser.version = jQuery.browser.majorVersion,
jQuery.browser.android = /Android/i.test(nAgt),
jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt),
jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt),
jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt),
jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt),
jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt),
jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle,
jQuery.isMobile = jQuery.browser.mobile,
jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(),
jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt),
jQuery.mbBrowser = jQuery.browser,
jQuery.browser.versionCompare = function(a, b) {
    if ("stringstring" != typeof a + typeof b)
        return !1;
    for (var c = a.split("."), d = b.split("."), e = 0, f = Math.max(c.length, d.length); f > e; e++) {
        if (c[e] && !d[e] && 0 < parseInt(c[e]) || parseInt(c[e]) > parseInt(d[e]))
            return 1;
        if (d[e] && !c[e] && 0 < parseInt(d[e]) || parseInt(c[e]) < parseInt(d[e]))
            return -1
    }
    return 0
}
,
function(a) {
    a.simpleSlider = {
        defaults: {
            initialval: 0,
            scale: 100,
            orientation: "h",
            readonly: !1,
            callback: !1
        },
        events: {
            start: a.browser.mobile ? "touchstart" : "mousedown",
            end: a.browser.mobile ? "touchend" : "mouseup",
            move: a.browser.mobile ? "touchmove" : "mousemove"
        },
        init: function(b) {
            return this.each(function() {
                var c = this
                  , d = a(c);
                d.addClass("simpleSlider"),
                c.opt = {},
                a.extend(c.opt, a.simpleSlider.defaults, b),
                a.extend(c.opt, d.data());
                var e = "h" == c.opt.orientation ? "horizontal" : "vertical";
                e = a("<div/>").addClass("level").addClass(e),
                d.prepend(e),
                c.level = e,
                d.css({
                    cursor: "default"
                }),
                "auto" == c.opt.scale && (c.opt.scale = a(c).outerWidth()),
                d.updateSliderVal(),
                c.opt.readonly || (d.on(a.simpleSlider.events.start, function(b) {
                    a.browser.mobile && (b = b.changedTouches[0]),
                    c.canSlide = !0,
                    d.updateSliderVal(b),
                    "h" == c.opt.orientation ? d.css({
                        cursor: "col-resize"
                    }) : d.css({
                        cursor: "row-resize"
                    }),
                    a.browser.mobile || (b.preventDefault(),
                    b.stopPropagation())
                }),
                a(document).on(a.simpleSlider.events.move, function(b) {
                    a.browser.mobile && (b = b.changedTouches[0]),
                    c.canSlide && (a(document).css({
                        cursor: "default"
                    }),
                    d.updateSliderVal(b),
                    a.browser.mobile || (b.preventDefault(),
                    b.stopPropagation()))
                }).on(a.simpleSlider.events.end, function() {
                    a(document).css({
                        cursor: "auto"
                    }),
                    c.canSlide = !1,
                    d.css({
                        cursor: "auto"
                    })
                }))
            })
        },
        updateSliderVal: function(b) {
            var c = this.get(0);
            if (c.opt) {
                c.opt.initialval = "number" == typeof c.opt.initialval ? c.opt.initialval : c.opt.initialval(c);
                var d = a(c).outerWidth()
                  , e = a(c).outerHeight();
                c.x = "object" == typeof b ? b.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof b ? b * d / c.opt.scale : c.opt.initialval * d / c.opt.scale,
                c.y = "object" == typeof b ? b.clientY + document.body.scrollTop - this.offset().top : "number" == typeof b ? (c.opt.scale - c.opt.initialval - b) * e / c.opt.scale : c.opt.initialval * e / c.opt.scale,
                c.y = this.outerHeight() - c.y,
                c.scaleX = c.x * c.opt.scale / d,
                c.scaleY = c.y * c.opt.scale / e,
                c.outOfRangeX = c.scaleX > c.opt.scale ? c.scaleX - c.opt.scale : 0 > c.scaleX ? c.scaleX : 0,
                c.outOfRangeY = c.scaleY > c.opt.scale ? c.scaleY - c.opt.scale : 0 > c.scaleY ? c.scaleY : 0,
                c.outOfRange = "h" == c.opt.orientation ? c.outOfRangeX : c.outOfRangeY,
                c.value = "undefined" != typeof b ? "h" == c.opt.orientation ? c.x >= this.outerWidth() ? c.opt.scale : 0 >= c.x ? 0 : c.scaleX : c.y >= this.outerHeight() ? c.opt.scale : 0 >= c.y ? 0 : c.scaleY : "h" == c.opt.orientation ? c.scaleX : c.scaleY,
                "h" == c.opt.orientation ? c.level.width(Math.floor(100 * c.x / d) + "%") : c.level.height(Math.floor(100 * c.y / e)),
                "function" == typeof c.opt.callback && c.opt.callback(c)
            }
        }
    },
    a.fn.simpleSlider = a.simpleSlider.init,
    a.fn.updateSliderVal = a.simpleSlider.updateSliderVal
}(jQuery),
function(a) {
    a.mbCookie = {
        set: function(a, b, c, d) {
            "object" == typeof b && (b = JSON.stringify(b)),
            d = d ? "; domain=" + d : "";
            var e = new Date
              , f = "";
            c > 0 && (e.setTime(e.getTime() + 864e5 * c),
            f = "; expires=" + e.toGMTString()),
            document.cookie = a + "=" + b + f + "; path=/" + d
        },
        get: function(a) {
            a += "=";
            for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
                for (var d = b[c]; " " == d.charAt(0); )
                    d = d.substring(1, d.length);
                if (0 == d.indexOf(a))
                    try {
                        return JSON.parse(d.substring(a.length, d.length))
                    } catch (e) {
                        return d.substring(a.length, d.length)
                    }
            }
            return null
        },
        remove: function(b) {
            a.mbCookie.set(b, "", -1)
        }
    },
    a.mbStorage = {
        set: function(a, b) {
            "object" == typeof b && (b = JSON.stringify(b)),
            localStorage.setItem(a, b)
        },
        get: function(a) {
            if (!localStorage[a])
                return null;
            try {
                return JSON.parse(localStorage[a])
            } catch (b) {
                return localStorage[a]
            }
        },
        remove: function(a) {
            a ? localStorage.removeItem(a) : localStorage.clear()
        }
    }
}(jQuery);

/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function() {}, u = !!window.jQuery, v = a(window), w = function(a, c) {
        b.ev.on(o + a + p, c)
    }, x = function(b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b,
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : (f = a(f),
        c && f.appendTo(c)),
        f
    }, y = function(c, d) {
        b.ev.triggerHandler(o + c, d),
        b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1),
        b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    }, z = function(c) {
        return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)),
        g = c),
        b.currTemplate.closeBtn
    }, A = function() {
        a.magnificPopup.instance || (b = new t,
        b.init(),
        a.magnificPopup.instance = b)
    }, B = function() {
        var a = document.createElement("p").style
          , b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition)
            return !0;
        for (; b.length; )
            if (b.pop() + "Transition"in a)
                return !0;
        return !1
    };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener,
            b.isAndroid = /android/gi.test(c),
            b.isIOS = /iphone|ipad|ipod/gi.test(c),
            b.supportsTransition = B(),
            b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            d = a(document),
            b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(),
                b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e],
                    g.parsed && (g = g.el[0]),
                    g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else
                b.items = a.isArray(c.items) ? c.items : [c.items],
                b.index = c.index || 0;
            if (b.isOpen)
                return void b.updateItemHTML();
            b.types = [],
            f = "",
            c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d,
            c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {},
            b.st = a.extend(!0, {}, a.magnificPopup.defaults, c),
            b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos,
            b.st.modal && (b.st.closeOnContentClick = !1,
            b.st.closeOnBgClick = !1,
            b.st.showCloseBtn = !1,
            b.st.enableEscapeKey = !1),
            b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }),
            b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }),
            b.container = x("container", b.wrap)),
            b.contentContainer = x("content"),
            b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1),
                b["init" + j].call(b)
            }
            y("BeforeOpen"),
            b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }),
            f += " mfp-close-btn-in") : b.wrap.append(z())),
            b.st.alignTop && (f += " mfp-align-top"),
            b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }),
            (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }),
            b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }),
            v.on("resize" + p, function() {
                b.updateSize()
            }),
            b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
            f && b.wrap.addClass(f);
            var k = b.wH = v.height()
              , n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"),
            r && b._addClassToMFP(r),
            b.updateItemHTML(),
            y("BuildControls"),
            a("html").css(n),
            b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
            b._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                b.content ? (b._addClassToMFP(q),
                b._setFocus()) : b.bgOverlay.addClass(q),
                d.on("focusin" + p, b._onFocusIn)
            }, 16),
            b.isOpen = !0,
            b.updateSize(k),
            y(m),
            c
        },
        close: function() {
            b.isOpen && (y(i),
            b.isOpen = !1,
            b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r),
            setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(),
            b.wrap.detach(),
            b.container.empty(),
            b.st.mainClass && (c += b.st.mainClass + " "),
            b._removeClassFromMFP(c),
            b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "",
                a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p),
            b.ev.off(p),
            b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            b.bgOverlay.attr("class", "mfp-bg"),
            b.container.attr("class", "mfp-container"),
            !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(),
            b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
            b.currItem = null,
            b.content = null,
            b.currTemplate = null,
            b.prevHeight = 0,
            y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth
                  , d = window.innerHeight * c;
                b.wrap.css("height", d),
                b.wH = d
            } else
                b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH),
            y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(),
            b.content && b.content.detach(),
            c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
            b.currItem = c,
            !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f),
                f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d),
            c.preloaded = !0,
            y(n, c),
            e = c.type,
            b.container.prepend(b.contentContainer),
            y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a,
            a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "",
            y(k),
            b.container.addClass("mfp-" + c + "-holder"),
            b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                el: a(e)
            } : (d = e.type,
            e = {
                data: e,
                src: e.src
            }),
            e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"),
                e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline",
            e.index = c,
            e.parsed = !0,
            b.items[c] = e,
            y("ElementParse", e),
            b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this,
                b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a,
            c.items ? (c.isObj = !0,
            a.off(e).on(e, d)) : (c.isObj = !1,
            c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a,
            a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b))
                            return !0
                    } else if (v.width() < g)
                        return !0;
                c.type && (c.preventDefault(),
                b.isOpen && c.stopPropagation()),
                e.el = a(c.mfpEl),
                e.delegate && (e.items = d.find(e.delegate)),
                b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c),
                d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e),
                a = e.status,
                d = e.text,
                b.preloader.html(d),
                b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }),
                b.container.addClass("mfp-s-" + a),
                c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick
                  , e = b.st.closeOnBgClick;
                if (d && e)
                    return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)
                        return !0
                } else if (e && a.contains(document, c))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a),
            b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a),
            b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(),
            !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)),
            y(l, [b, c, d]),
            a.each(c, function(c, d) {
                if (void 0 === d || d === !1)
                    return !0;
                if (e = c.split("_"),
                e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else
                    b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(a),
                b.scrollbarSize = a.offsetWidth - a.clientWidth,
                document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    },
    a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(),
            b = b ? a.extend(!0, {}, b) : {},
            b.isObj = !0,
            b.index = c || 0,
            this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options),
            a.extend(this.proto, c.proto),
            this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d,
                f.delegate && (e = e.find(f.delegate)),
                e = e.eq(g)),
                b._openClick({
                    mfpEl: e
                }, d, f)
            } else
                b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else
            c = a.extend(!0, {}, c),
            u ? d.data("magnificPopup", c) : d[0].magnificPopup = c,
            b.addGroup(d, c);
        return d
    }
    ;
    var C, D, E, F = "inline", G = function() {
        E && (D.after(E.addClass(C)).detach(),
        E = null)
    };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F),
                w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(),
                c.src) {
                    var e = b.st.inline
                      , f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass,
                        D = x(C),
                        C = "mfp-" + C),
                        E = f.after(D).detach().removeClass(C)),
                        b.updateStatus("ready")
                    } else
                        b.updateStatus("error", e.tNotFound),
                        f = a("<div>");
                    return c.inlineElement = f,
                    f
                }
                return b.updateStatus("ready"),
                b._parseMarkup(d, {}, c),
                d
            }
        }
    });
    var H, I = "ajax", J = function() {
        H && a(document.body).removeClass(H)
    }, K = function() {
        J(),
        b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I),
                H = b.st.ajax.cursor,
                w(h + "." + I, K),
                w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H),
                b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g),
                        b.appendContent(a(g.data), I),
                        c.finished = !0,
                        J(),
                        b._setFocus(),
                        setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16),
                        b.updateStatus("ready"),
                        y("AjaxContentAdded")
                    },
                    error: function() {
                        J(),
                        c.finished = c.loadError = !0,
                        b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d),
                ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title)
            return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))
                return d.call(b, c);
            if (c.el)
                return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image
                  , d = ".image";
                b.types.push("image"),
                w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }),
                w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor),
                    v.off("resize" + p)
                }),
                w("Resize" + d, b.resizeImage),
                b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)),
                    a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0,
                L && clearInterval(L),
                a.isCheckingImgSize = !1,
                y("ImageHasSize", a),
                a.imgHidden && (b.content && b.content.removeClass("mfp-loading"),
                a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0
                  , d = a.img[0]
                  , e = function(f) {
                    L && clearInterval(L),
                    L = setInterval(function() {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L),
                        c++,
                        void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0
                  , f = function() {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("ready")),
                    c.hasSize = !0,
                    c.loaded = !0,
                    y("ImageLoadComplete")) : (e++,
                    200 > e ? setTimeout(f, 100) : g()))
                }
                  , g = function() {
                    c && (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("error", h.tError.replace("%url%", c.src))),
                    c.hasSize = !0,
                    c.loaded = !0,
                    c.loadError = !0)
                }
                  , h = b.st.image
                  , i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img",
                    c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")),
                    c.img = a(j).on("load.mfploader", f).on("error.mfploader", g),
                    j.src = c.src,
                    i.is("img") && (c.img = c.img.clone()),
                    j = c.img[0],
                    j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c),
                b.resizeImage(),
                c.hasSize ? (L && clearInterval(L),
                c.loadError ? (d.addClass("mfp-loading"),
                b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"),
                b.updateStatus("ready")),
                d) : (b.updateStatus("loading"),
                c.loading = !0,
                c.hasSize || (c.imgHidden = !0,
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
                d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform),
        N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function(a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , d = "all " + c.duration / 1e3 + "s " + c.easing
                          , e = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d,
                        b.css(e),
                        b
                    }, k = function() {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.content.css("visibility", "hidden"),
                            a = b._getItemToZoom(),
                            !a)
                                return void k();
                            f = j(a),
                            f.css(b._getOffset()),
                            b.wrap.append(f),
                            e = setTimeout(function() {
                                f.css(b._getOffset(!0)),
                                e = setTimeout(function() {
                                    k(),
                                    setTimeout(function() {
                                        f.remove(),
                                        a = f = null,
                                        y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }),
                    w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e),
                            b.st.removalDelay = g,
                            !a) {
                                if (a = b._getItemToZoom(),
                                !a)
                                    return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)),
                            b.wrap.append(f),
                            b.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }),
                    w(h + d, function() {
                        b._allowZoom() && (k(),
                        f && f.remove(),
                        a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset()
                  , f = parseInt(d.css("padding-top"), 10)
                  , g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left,
                h.top = e.top),
                h
            }
        }
    });
    var P = "iframe"
      , Q = "//about:blank"
      , R = function(a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q),
            b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P),
                w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }),
                w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src
                  , f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)),
                    e = this.src.replace("%id%", e),
                    !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e),
                b._parseMarkup(d, g, c),
                b.updateStatus("ready"),
                d
            }
        }
    });
    var S = function(a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }
      , T = function(a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery
                  , e = ".mfp-gallery";
                return b.direction = !0,
                c && c.enabled ? (f += " mfp-gallery",
                w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(),
                        !1) : void 0
                    }),
                    d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }),
                w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }),
                w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }),
                w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup
                          , e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s)
                          , f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }),
                        f.click(function() {
                            b.next()
                        }),
                        b.container.append(e.add(f))
                    }
                }),
                w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout),
                    b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(),
                        b._preloadTimeout = null
                    }, 16)
                }),
                void w(h + e, function() {
                    d.off(e),
                    b.wrap.off("click" + e),
                    b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0,
                b.index = S(b.index + 1),
                b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1,
                b.index = S(b.index - 1),
                b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index,
                b.index = a,
                b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++)
                    b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c),
                !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)),
                    y("LazyLoad", d),
                    "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0,
                        d.loadError = !0,
                        y("LazyLoadError", d)
                    }).attr("src", d.src)),
                    d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina
                      , c = a.ratio;
                    c = isNaN(c) ? c() : c,
                    c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }),
                    w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }),
    A()
});

/*!
Mailchimp Ajax Submit
jQuery Plugin
Author: Siddharth Doshi
*/
(function($) {
    "use strict";
    $.ajaxChimp = {
        responses: {
            "We have sent you a confirmation email": 0,
            "Please enter a value": 1,
            "An email address must contain a single @": 2,
            "The domain portion of the email address is invalid (the portion after the @: )": 3,
            "The username portion of the email address is invalid (the portion before the @: )": 4,
            "This email address looks fake or invalid. Please enter a real email address": 5
        },
        translations: {
            en: null
        },
        init: function(selector, options) {
            $(selector).ajaxChimp(options)
        }
    };
    $.fn.ajaxChimp = function(options) {
        $(this).each(function(i, elem) {
            var form = $(elem);
            var email = form.find("input[type=email]");
            var label = form.find("label[for=" + email.attr("id") + "]");
            var settings = $.extend({
                url: form.attr("action"),
                language: "en"
            }, options);
            var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
            form.attr("novalidate", "true");
            email.attr("name", "EMAIL");
            form.submit(function() {
                var msg;
                function successCallback(resp) {
                    if (resp.result === "success") {
                        msg = "We have sent you a confirmation email";
                        label.removeClass("error").addClass("valid");
                        email.removeClass("error").addClass("valid")
                    } else {
                        email.removeClass("valid").addClass("error");
                        label.removeClass("valid").addClass("error");
                        var index = -1;
                        try {
                            var parts = resp.msg.split(" - ", 2);
                            if (parts[1] === undefined) {
                                msg = resp.msg
                            } else {
                                var i = parseInt(parts[0], 10);
                                if (i.toString() === parts[0]) {
                                    index = parts[0];
                                    msg = parts[1]
                                } else {
                                    index = -1;
                                    msg = resp.msg
                                }
                            }
                        } catch (e) {
                            index = -1;
                            msg = resp.msg
                        }
                    }
                    if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
                        msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
                    }
                    label.html(msg);
                    label.show(2e3);
                    if (settings.callback) {
                        settings.callback(resp)
                    }
                }
                var data = {};
                var dataArray = form.serializeArray();
                $.each(dataArray, function(index, item) {
                    data[item.name] = item.value
                });
                $.ajax({
                    url: url,
                    data: data,
                    success: successCallback,
                    dataType: "jsonp",
                    error: function(resp, text) {
                        console.log("mailchimp ajax submit error: " + text)
                    }
                });
                var submitMsg = "Submitting...";
                if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
                    submitMsg = $.ajaxChimp.translations[settings.language]["submit"]
                }
                label.html(submitMsg).show(2e3);
                return false
            })
        });
        return this
    }
}
)(jQuery);

/*! For license information please see summernote-lite.min.js.LICENSE.txt */
!function(t, e) {
    if ("object" == typeof exports && "object" == typeof module)
        module.exports = e(require("jquery"));
    else if ("function" == typeof define && define.amd)
        define(["jquery"], e);
    else {
        var n = "object" == typeof exports ? e(require("jquery")) : e(t.jQuery);
        for (var o in n)
            ("object" == typeof exports ? exports : t)[o] = n[o]
    }
}(window, (function(t) {
    return function(t) {
        var e = {};
        function n(o) {
            if (e[o])
                return e[o].exports;
            var i = e[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(i.exports, i, i.exports, n),
            i.l = !0,
            i.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: o
            })
        }
        ,
        n.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(t, e) {
            if (1 & e && (t = n(t)),
            8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var o = Object.create(null);
            if (n.r(o),
            Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var i in t)
                    n.d(o, i, function(e) {
                        return t[e]
                    }
                    .bind(null, i));
            return o
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = 51)
    }({
        0: function(e, n) {
            e.exports = t
        },
        1: function(t, e, n) {
            "use strict";
            var o = n(0)
              , i = n.n(o);
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var s = function() {
                function t(e, n, o, i) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.markup = e,
                    this.children = n,
                    this.options = o,
                    this.callback = i
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "render",
                    value: function(t) {
                        var e = i()(this.markup);
                        if (this.options && this.options.contents && e.html(this.options.contents),
                        this.options && this.options.className && e.addClass(this.options.className),
                        this.options && this.options.data && i.a.each(this.options.data, (function(t, n) {
                            e.attr("data-" + t, n)
                        }
                        )),
                        this.options && this.options.click && e.on("click", this.options.click),
                        this.children) {
                            var n = e.find(".note-children-container");
                            this.children.forEach((function(t) {
                                t.render(n.length ? n : e)
                            }
                            ))
                        }
                        return this.callback && this.callback(e, this.options),
                        this.options && this.options.callback && this.options.callback(e),
                        t && t.append(e),
                        e
                    }
                }]) && a(e.prototype, n),
                o && a(e, o),
                t
            }();
            e.a = {
                create: function(t, e) {
                    return function() {
                        var n = "object" === r(arguments[1]) ? arguments[1] : arguments[0]
                          , o = Array.isArray(arguments[0]) ? arguments[0] : [];
                        return n && n.children && (o = n.children),
                        new s(t,o,n,e)
                    }
                }
            }
        },
        2: function(t, e) {
            (function(e) {
                t.exports = e
            }
            ).call(this, {})
        },
        3: function(t, e, n) {
            "use strict";
            var o = n(0)
              , i = n.n(o);
            i.a.summernote = i.a.summernote || {
                lang: {}
            },
            i.a.extend(i.a.summernote.lang, {
                "en-US": {
                    font: {
                        bold: "Bold",
                        italic: "Italic",
                        underline: "Underline",
                        clear: "Remove Font Style",
                        height: "Line Height",
                        name: "Font Family",
                        strikethrough: "Strikethrough",
                        subscript: "Subscript",
                        superscript: "Superscript",
                        size: "Font Size",
                        sizeunit: "Font Size Unit"
                    },
                    image: {
                        image: "Picture",
                        insert: "Insert Image",
                        resizeFull: "Resize full",
                        resizeHalf: "Resize half",
                        resizeQuarter: "Resize quarter",
                        resizeNone: "Original size",
                        floatLeft: "Float Left",
                        floatRight: "Float Right",
                        floatNone: "Remove float",
                        shapeRounded: "Shape: Rounded",
                        shapeCircle: "Shape: Circle",
                        shapeThumbnail: "Shape: Thumbnail",
                        shapeNone: "Shape: None",
                        dragImageHere: "Drag image or text here",
                        dropImage: "Drop image or Text",
                        selectFromFiles: "Select from files",
                        maximumFileSize: "Maximum file size",
                        maximumFileSizeError: "Maximum file size exceeded.",
                        url: "Image URL",
                        remove: "Remove Image",
                        original: "Original"
                    },
                    video: {
                        video: "Video",
                        videoLink: "Video Link",
                        insert: "Insert Video",
                        url: "Video URL",
                        providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"
                    },
                    link: {
                        link: "Link",
                        insert: "Insert Link",
                        unlink: "Unlink",
                        edit: "Edit",
                        textToDisplay: "Text to display",
                        url: "To what URL should this link go?",
                        openInNewWindow: "Open in new window",
                        useProtocol: "Use default protocol"
                    },
                    table: {
                        table: "Table",
                        addRowAbove: "Add row above",
                        addRowBelow: "Add row below",
                        addColLeft: "Add column left",
                        addColRight: "Add column right",
                        delRow: "Delete row",
                        delCol: "Delete column",
                        delTable: "Delete table"
                    },
                    hr: {
                        insert: "Insert Horizontal Rule"
                    },
                    style: {
                        style: "Style",
                        p: "Normal",
                        blockquote: "Quote",
                        pre: "Code",
                        h1: "Header 1",
                        h2: "Header 2",
                        h3: "Header 3",
                        h4: "Header 4",
                        h5: "Header 5",
                        h6: "Header 6"
                    },
                    lists: {
                        unordered: "Unordered list",
                        ordered: "Ordered list"
                    },
                    options: {
                        help: "Help",
                        fullscreen: "Full Screen",
                        codeview: "Code View"
                    },
                    paragraph: {
                        paragraph: "Paragraph",
                        outdent: "Outdent",
                        indent: "Indent",
                        left: "Align left",
                        center: "Align center",
                        right: "Align right",
                        justify: "Justify full"
                    },
                    color: {
                        recent: "Recent Color",
                        more: "More Color",
                        background: "Background Color",
                        foreground: "Text Color",
                        transparent: "Transparent",
                        setTransparent: "Set transparent",
                        reset: "Reset",
                        resetToDefault: "Reset to default",
                        cpSelect: "Select"
                    },
                    shortcut: {
                        shortcuts: "Keyboard shortcuts",
                        close: "Close",
                        textFormatting: "Text formatting",
                        action: "Action",
                        paragraphFormatting: "Paragraph formatting",
                        documentStyle: "Document Style",
                        extraKeys: "Extra keys"
                    },
                    help: {
                        escape: "Escape",
                        insertParagraph: "Insert Paragraph",
                        undo: "Undo the last command",
                        redo: "Redo the last command",
                        tab: "Tab",
                        untab: "Untab",
                        bold: "Set a bold style",
                        italic: "Set a italic style",
                        underline: "Set a underline style",
                        strikethrough: "Set a strikethrough style",
                        removeFormat: "Clean a style",
                        justifyLeft: "Set left align",
                        justifyCenter: "Set center align",
                        justifyRight: "Set right align",
                        justifyFull: "Set full align",
                        insertUnorderedList: "Toggle unordered list",
                        insertOrderedList: "Toggle ordered list",
                        outdent: "Outdent on current paragraph",
                        indent: "Indent on current paragraph",
                        formatPara: "Change current block's format as a paragraph(P tag)",
                        formatH1: "Change current block's format as H1",
                        formatH2: "Change current block's format as H2",
                        formatH3: "Change current block's format as H3",
                        formatH4: "Change current block's format as H4",
                        formatH5: "Change current block's format as H5",
                        formatH6: "Change current block's format as H6",
                        insertHorizontalRule: "Insert horizontal rule",
                        "linkDialog.show": "Show Link Dialog"
                    },
                    history: {
                        undo: "Undo",
                        redo: "Redo"
                    },
                    specialChar: {
                        specialChar: "SPECIAL CHARACTERS",
                        select: "Select Special characters"
                    },
                    output: {
                        noSelection: "No Selection Made!"
                    }
                }
            });
            var r = "function" == typeof define && n(2)
              , a = ["sans-serif", "serif", "monospace", "cursive", "fantasy"];
            function s(t) {
                return -1 === i.a.inArray(t.toLowerCase(), a) ? "'".concat(t, "'") : t
            }
            var l, c = navigator.userAgent, u = /MSIE|Trident/i.test(c);
            if (u) {
                var d = /MSIE (\d+[.]\d+)/.exec(c);
                d && (l = parseFloat(d[1])),
                (d = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(c)) && (l = parseFloat(d[1]))
            }
            var h = /Edge\/\d+/.test(c)
              , f = "ontouchstart"in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
              , p = u ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input"
              , m = {
                isMac: navigator.appVersion.indexOf("Mac") > -1,
                isMSIE: u,
                isEdge: h,
                isFF: !h && /firefox/i.test(c),
                isPhantom: /PhantomJS/i.test(c),
                isWebkit: !h && /webkit/i.test(c),
                isChrome: !h && /chrome/i.test(c),
                isSafari: !h && /safari/i.test(c) && !/chrome/i.test(c),
                browserVersion: l,
                jqueryVersion: parseFloat(i.a.fn.jquery),
                isSupportAmd: r,
                isSupportTouch: f,
                isFontInstalled: function(t) {
                    var e = "Comic Sans MS" === t ? "Courier New" : "Comic Sans MS"
                      , n = document.createElement("canvas").getContext("2d");
                    n.font = "200px '" + e + "'";
                    var o = n.measureText("mmmmmmmmmmwwwww").width;
                    return n.font = "200px " + s(t) + ', "' + e + '"',
                    o !== n.measureText("mmmmmmmmmmwwwww").width
                },
                isW3CRangeSupport: !!document.createRange,
                inputEventName: p,
                genericFontFamilies: a,
                validFontName: s
            };
            var v = 0;
            var g = {
                eq: function(t) {
                    return function(e) {
                        return t === e
                    }
                },
                eq2: function(t, e) {
                    return t === e
                },
                peq2: function(t) {
                    return function(e, n) {
                        return e[t] === n[t]
                    }
                },
                ok: function() {
                    return !0
                },
                fail: function() {
                    return !1
                },
                self: function(t) {
                    return t
                },
                not: function(t) {
                    return function() {
                        return !t.apply(t, arguments)
                    }
                },
                and: function(t, e) {
                    return function(n) {
                        return t(n) && e(n)
                    }
                },
                invoke: function(t, e) {
                    return function() {
                        return t[e].apply(t, arguments)
                    }
                },
                resetUniqueId: function() {
                    v = 0
                },
                uniqueId: function(t) {
                    var e = ++v + "";
                    return t ? t + e : e
                },
                rect2bnd: function(t) {
                    var e = i()(document);
                    return {
                        top: t.top + e.scrollTop(),
                        left: t.left + e.scrollLeft(),
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    }
                },
                invertObject: function(t) {
                    var e = {};
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[t[n]] = n);
                    return e
                },
                namespaceToCamel: function(t, e) {
                    return (e = e || "") + t.split(".").map((function(t) {
                        return t.substring(0, 1).toUpperCase() + t.substring(1)
                    }
                    )).join("")
                },
                debounce: function(t, e, n) {
                    var o;
                    return function() {
                        var i = this
                          , r = arguments
                          , a = function() {
                            o = null,
                            n || t.apply(i, r)
                        }
                          , s = n && !o;
                        clearTimeout(o),
                        o = setTimeout(a, e),
                        s && t.apply(i, r)
                    }
                },
                isValidUrl: function(t) {
                    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(t)
                }
            };
            function b(t) {
                return t[0]
            }
            function k(t) {
                return t[t.length - 1]
            }
            function y(t) {
                return t.slice(1)
            }
            function w(t, e) {
                if (t && t.length && e) {
                    if (t.indexOf)
                        return -1 !== t.indexOf(e);
                    if (t.contains)
                        return t.contains(e)
                }
                return !1
            }
            var C = {
                head: b,
                last: k,
                initial: function(t) {
                    return t.slice(0, t.length - 1)
                },
                tail: y,
                prev: function(t, e) {
                    if (t && t.length && e) {
                        var n = t.indexOf(e);
                        return -1 === n ? null : t[n - 1]
                    }
                    return null
                },
                next: function(t, e) {
                    if (t && t.length && e) {
                        var n = t.indexOf(e);
                        return -1 === n ? null : t[n + 1]
                    }
                    return null
                },
                find: function(t, e) {
                    for (var n = 0, o = t.length; n < o; n++) {
                        var i = t[n];
                        if (e(i))
                            return i
                    }
                },
                contains: w,
                all: function(t, e) {
                    for (var n = 0, o = t.length; n < o; n++)
                        if (!e(t[n]))
                            return !1;
                    return !0
                },
                sum: function(t, e) {
                    return e = e || g.self,
                    t.reduce((function(t, n) {
                        return t + e(n)
                    }
                    ), 0)
                },
                from: function(t) {
                    for (var e = [], n = t.length, o = -1; ++o < n; )
                        e[o] = t[o];
                    return e
                },
                isEmpty: function(t) {
                    return !t || !t.length
                },
                clusterBy: function(t, e) {
                    return t.length ? y(t).reduce((function(t, n) {
                        var o = k(t);
                        return e(k(o), n) ? o[o.length] = n : t[t.length] = [n],
                        t
                    }
                    ), [[b(t)]]) : []
                },
                compact: function(t) {
                    for (var e = [], n = 0, o = t.length; n < o; n++)
                        t[n] && e.push(t[n]);
                    return e
                },
                unique: function(t) {
                    for (var e = [], n = 0, o = t.length; n < o; n++)
                        w(e, t[n]) || e.push(t[n]);
                    return e
                }
            }
              , x = String.fromCharCode(160);
            function S(t) {
                return t && i()(t).hasClass("note-editable")
            }
            function T(t) {
                return t = t.toUpperCase(),
                function(e) {
                    return e && e.nodeName.toUpperCase() === t
                }
            }
            function E(t) {
                return t && 3 === t.nodeType
            }
            function $(t) {
                return t && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(t.nodeName.toUpperCase())
            }
            function N(t) {
                return !S(t) && (t && /^DIV|^P|^LI|^H[1-7]/.test(t.nodeName.toUpperCase()))
            }
            var I = T("PRE")
              , P = T("LI");
            var R = T("TABLE")
              , L = T("DATA");
            function A(t) {
                return !(z(t) || F(t) || D(t) || N(t) || R(t) || B(t) || L(t))
            }
            function F(t) {
                return t && /^UL|^OL/.test(t.nodeName.toUpperCase())
            }
            var D = T("HR");
            function H(t) {
                return t && /^TD|^TH/.test(t.nodeName.toUpperCase())
            }
            var B = T("BLOCKQUOTE");
            function z(t) {
                return H(t) || B(t) || S(t)
            }
            var M = T("A");
            var O = T("BODY");
            var j = m.isMSIE && m.browserVersion < 11 ? "&nbsp;" : "<br>";
            function U(t) {
                return E(t) ? t.nodeValue.length : t ? t.childNodes.length : 0
            }
            function W(t) {
                var e = U(t);
                return 0 === e || (!E(t) && 1 === e && t.innerHTML === j || !(!C.all(t.childNodes, E) || "" !== t.innerHTML))
            }
            function K(t) {
                $(t) || U(t) || (t.innerHTML = j)
            }
            function V(t, e) {
                for (; t; ) {
                    if (e(t))
                        return t;
                    if (S(t))
                        break;
                    t = t.parentNode
                }
                return null
            }
            function q(t, e) {
                e = e || g.fail;
                var n = [];
                return V(t, (function(t) {
                    return S(t) || n.push(t),
                    e(t)
                }
                )),
                n
            }
            function _(t, e) {
                e = e || g.fail;
                for (var n = []; t && !e(t); )
                    n.push(t),
                    t = t.nextSibling;
                return n
            }
            function G(t, e) {
                var n = e.nextSibling
                  , o = e.parentNode;
                return n ? o.insertBefore(t, n) : o.appendChild(t),
                t
            }
            function Y(t, e) {
                return i.a.each(e, (function(e, n) {
                    t.appendChild(n)
                }
                )),
                t
            }
            function Z(t) {
                return 0 === t.offset
            }
            function X(t) {
                return t.offset === U(t.node)
            }
            function Q(t) {
                return Z(t) || X(t)
            }
            function J(t, e) {
                for (; t && t !== e; ) {
                    if (0 !== et(t))
                        return !1;
                    t = t.parentNode
                }
                return !0
            }
            function tt(t, e) {
                if (!e)
                    return !1;
                for (; t && t !== e; ) {
                    if (et(t) !== U(t.parentNode) - 1)
                        return !1;
                    t = t.parentNode
                }
                return !0
            }
            function et(t) {
                for (var e = 0; t = t.previousSibling; )
                    e += 1;
                return e
            }
            function nt(t) {
                return !!(t && t.childNodes && t.childNodes.length)
            }
            function ot(t, e) {
                var n, o;
                if (0 === t.offset) {
                    if (S(t.node))
                        return null;
                    n = t.node.parentNode,
                    o = et(t.node)
                } else
                    nt(t.node) ? o = U(n = t.node.childNodes[t.offset - 1]) : (n = t.node,
                    o = e ? 0 : t.offset - 1);
                return {
                    node: n,
                    offset: o
                }
            }
            function it(t, e) {
                var n, o;
                if (U(t.node) === t.offset) {
                    if (S(t.node))
                        return null;
                    var i = at(t.node);
                    i ? (n = i,
                    o = 0) : (n = t.node.parentNode,
                    o = et(t.node) + 1)
                } else
                    nt(t.node) ? (n = t.node.childNodes[t.offset],
                    o = 0) : (n = t.node,
                    o = e ? U(t.node) : t.offset + 1);
                return {
                    node: n,
                    offset: o
                }
            }
            function rt(t, e) {
                var n, o;
                if (W(t.node))
                    return {
                        node: n = t.node.nextSibling,
                        offset: o = 0
                    };
                if (U(t.node) === t.offset) {
                    if (S(t.node))
                        return null;
                    var i = at(t.node);
                    i ? (n = i,
                    o = 0) : (n = t.node.parentNode,
                    o = et(t.node) + 1),
                    S(n) && (n = t.node.nextSibling,
                    o = 0)
                } else if (nt(t.node)) {
                    if (o = 0,
                    W(n = t.node.childNodes[t.offset]))
                        return null
                } else if (n = t.node,
                o = e ? U(t.node) : t.offset + 1,
                W(n))
                    return null;
                return {
                    node: n,
                    offset: o
                }
            }
            function at(t) {
                if (t.nextSibling && t.parent === t.nextSibling.parent)
                    return E(t.nextSibling) ? t.nextSibling : at(t.nextSibling)
            }
            function st(t, e) {
                return t.node === e.node && t.offset === e.offset
            }
            function lt(t, e) {
                var n = e && e.isSkipPaddingBlankHTML
                  , o = e && e.isNotSplitEdgePoint
                  , i = e && e.isDiscardEmptySplits;
                if (i && (n = !0),
                Q(t) && (E(t.node) || o)) {
                    if (Z(t))
                        return t.node;
                    if (X(t))
                        return t.node.nextSibling
                }
                if (E(t.node))
                    return t.node.splitText(t.offset);
                var r = t.node.childNodes[t.offset]
                  , a = G(t.node.cloneNode(!1), t.node);
                return Y(a, _(r)),
                n || (K(t.node),
                K(a)),
                i && (W(t.node) && dt(t.node),
                W(a)) ? (dt(a),
                t.node.nextSibling) : a
            }
            function ct(t, e, n) {
                var o = q(e.node, g.eq(t));
                return o.length ? 1 === o.length ? lt(e, n) : o.reduce((function(t, o) {
                    return t === e.node && (t = lt(e, n)),
                    lt({
                        node: o,
                        offset: t ? et(t) : U(o)
                    }, n)
                }
                )) : null
            }
            function ut(t) {
                return document.createElement(t)
            }
            function dt(t, e) {
                if (t && t.parentNode) {
                    if (t.removeNode)
                        return t.removeNode(e);
                    var n = t.parentNode;
                    if (!e) {
                        for (var o = [], i = 0, r = t.childNodes.length; i < r; i++)
                            o.push(t.childNodes[i]);
                        for (var a = 0, s = o.length; a < s; a++)
                            n.insertBefore(o[a], t)
                    }
                    n.removeChild(t)
                }
            }
            var ht = T("TEXTAREA");
            function ft(t, e) {
                var n = ht(t[0]) ? t.val() : t.html();
                return e ? n.replace(/[\n\r]/g, "") : n
            }
            var pt = {
                NBSP_CHAR: x,
                ZERO_WIDTH_NBSP_CHAR: "\ufeff",
                blank: j,
                emptyPara: "<p>".concat(j, "</p>"),
                makePredByNodeName: T,
                isEditable: S,
                isControlSizing: function(t) {
                    return t && i()(t).hasClass("note-control-sizing")
                },
                isText: E,
                isElement: function(t) {
                    return t && 1 === t.nodeType
                },
                isVoid: $,
                isPara: N,
                isPurePara: function(t) {
                    return N(t) && !P(t)
                },
                isHeading: function(t) {
                    return t && /^H[1-7]/.test(t.nodeName.toUpperCase())
                },
                isInline: A,
                isBlock: g.not(A),
                isBodyInline: function(t) {
                    return A(t) && !V(t, N)
                },
                isBody: O,
                isParaInline: function(t) {
                    return A(t) && !!V(t, N)
                },
                isPre: I,
                isList: F,
                isTable: R,
                isData: L,
                isCell: H,
                isBlockquote: B,
                isBodyContainer: z,
                isAnchor: M,
                isDiv: T("DIV"),
                isLi: P,
                isBR: T("BR"),
                isSpan: T("SPAN"),
                isB: T("B"),
                isU: T("U"),
                isS: T("S"),
                isI: T("I"),
                isImg: T("IMG"),
                isTextarea: ht,
                deepestChildIsEmpty: function(t) {
                    do {
                        if (null === t.firstElementChild || "" === t.firstElementChild.innerHTML)
                            break
                    } while (t = t.firstElementChild);
                    return W(t)
                },
                isEmpty: W,
                isEmptyAnchor: g.and(M, W),
                isClosestSibling: function(t, e) {
                    return t.nextSibling === e || t.previousSibling === e
                },
                withClosestSiblings: function(t, e) {
                    e = e || g.ok;
                    var n = [];
                    return t.previousSibling && e(t.previousSibling) && n.push(t.previousSibling),
                    n.push(t),
                    t.nextSibling && e(t.nextSibling) && n.push(t.nextSibling),
                    n
                },
                nodeLength: U,
                isLeftEdgePoint: Z,
                isRightEdgePoint: X,
                isEdgePoint: Q,
                isLeftEdgeOf: J,
                isRightEdgeOf: tt,
                isLeftEdgePointOf: function(t, e) {
                    return Z(t) && J(t.node, e)
                },
                isRightEdgePointOf: function(t, e) {
                    return X(t) && tt(t.node, e)
                },
                prevPoint: ot,
                nextPoint: it,
                nextPointWithEmptyNode: rt,
                isSamePoint: st,
                isVisiblePoint: function(t) {
                    if (E(t.node) || !nt(t.node) || W(t.node))
                        return !0;
                    var e = t.node.childNodes[t.offset - 1]
                      , n = t.node.childNodes[t.offset];
                    return !(e && !$(e) || n && !$(n))
                },
                prevPointUntil: function(t, e) {
                    for (; t; ) {
                        if (e(t))
                            return t;
                        t = ot(t)
                    }
                    return null
                },
                nextPointUntil: function(t, e) {
                    for (; t; ) {
                        if (e(t))
                            return t;
                        t = it(t)
                    }
                    return null
                },
                isCharPoint: function(t) {
                    if (!E(t.node))
                        return !1;
                    var e = t.node.nodeValue.charAt(t.offset - 1);
                    return e && " " !== e && e !== x
                },
                isSpacePoint: function(t) {
                    if (!E(t.node))
                        return !1;
                    var e = t.node.nodeValue.charAt(t.offset - 1);
                    return " " === e || e === x
                },
                walkPoint: function(t, e, n, o) {
                    for (var i = t; i && (n(i),
                    !st(i, e)); ) {
                        i = rt(i, o && t.node !== i.node && e.node !== i.node)
                    }
                },
                ancestor: V,
                singleChildAncestor: function(t, e) {
                    for (t = t.parentNode; t && 1 === U(t); ) {
                        if (e(t))
                            return t;
                        if (S(t))
                            break;
                        t = t.parentNode
                    }
                    return null
                },
                listAncestor: q,
                lastAncestor: function(t, e) {
                    var n = q(t);
                    return C.last(n.filter(e))
                },
                listNext: _,
                listPrev: function(t, e) {
                    e = e || g.fail;
                    for (var n = []; t && !e(t); )
                        n.push(t),
                        t = t.previousSibling;
                    return n
                },
                listDescendant: function(t, e) {
                    var n = [];
                    return e = e || g.ok,
                    function o(i) {
                        t !== i && e(i) && n.push(i);
                        for (var r = 0, a = i.childNodes.length; r < a; r++)
                            o(i.childNodes[r])
                    }(t),
                    n
                },
                commonAncestor: function(t, e) {
                    for (var n = q(t), o = e; o; o = o.parentNode)
                        if (n.indexOf(o) > -1)
                            return o;
                    return null
                },
                wrap: function(t, e) {
                    var n = t.parentNode
                      , o = i()("<" + e + ">")[0];
                    return n.insertBefore(o, t),
                    o.appendChild(t),
                    o
                },
                insertAfter: G,
                appendChildNodes: Y,
                position: et,
                hasChildren: nt,
                makeOffsetPath: function(t, e) {
                    return q(e, g.eq(t)).map(et).reverse()
                },
                fromOffsetPath: function(t, e) {
                    for (var n = t, o = 0, i = e.length; o < i; o++)
                        n = n.childNodes.length <= e[o] ? n.childNodes[n.childNodes.length - 1] : n.childNodes[e[o]];
                    return n
                },
                splitTree: ct,
                splitPoint: function(t, e) {
                    var n, o, i = e ? N : z, r = q(t.node, i), a = C.last(r) || t.node;
                    i(a) ? (n = r[r.length - 2],
                    o = a) : o = (n = a).parentNode;
                    var s = n && ct(n, t, {
                        isSkipPaddingBlankHTML: e,
                        isNotSplitEdgePoint: e
                    });
                    return s || o !== t.node || (s = t.node.childNodes[t.offset]),
                    {
                        rightNode: s,
                        container: o
                    }
                },
                create: ut,
                createText: function(t) {
                    return document.createTextNode(t)
                },
                remove: dt,
                removeWhile: function(t, e) {
                    for (; t && !S(t) && e(t); ) {
                        var n = t.parentNode;
                        dt(t),
                        t = n
                    }
                },
                replace: function(t, e) {
                    if (t.nodeName.toUpperCase() === e.toUpperCase())
                        return t;
                    var n = ut(e);
                    return t.style.cssText && (n.style.cssText = t.style.cssText),
                    Y(n, C.from(t.childNodes)),
                    G(n, t),
                    dt(t),
                    n
                },
                html: function(t, e) {
                    var n = ft(t);
                    if (e) {
                        n = (n = n.replace(/<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g, (function(t, e, n) {
                            n = n.toUpperCase();
                            var o = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(n) && !!e
                              , i = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(n);
                            return t + (o || i ? "\n" : "")
                        }
                        ))).trim()
                    }
                    return n
                },
                value: ft,
                posFromPlaceholder: function(t) {
                    var e = i()(t)
                      , n = e.offset()
                      , o = e.outerHeight(!0);
                    return {
                        left: n.left,
                        top: n.top + o
                    }
                },
                attachEvents: function(t, e) {
                    Object.keys(e).forEach((function(n) {
                        t.on(n, e[n])
                    }
                    ))
                },
                detachEvents: function(t, e) {
                    Object.keys(e).forEach((function(n) {
                        t.off(n, e[n])
                    }
                    ))
                },
                isCustomStyleTag: function(t) {
                    return t && !E(t) && C.contains(t.classList, "note-styletag")
                }
            };
            function mt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var vt = function() {
                function t(e, n) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.$note = e,
                    this.memos = {},
                    this.modules = {},
                    this.layoutInfo = {},
                    this.options = i.a.extend(!0, {}, n),
                    i.a.summernote.ui = i.a.summernote.ui_template(this.options),
                    this.ui = i.a.summernote.ui,
                    this.initialize()
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "initialize",
                    value: function() {
                        return this.layoutInfo = this.ui.createLayout(this.$note),
                        this._initialize(),
                        this.$note.hide(),
                        this
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this._destroy(),
                        this.$note.removeData("summernote"),
                        this.ui.removeLayout(this.$note, this.layoutInfo)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var t = this.isDisabled();
                        this.code(pt.emptyPara),
                        this._destroy(),
                        this._initialize(),
                        t && this.disable()
                    }
                }, {
                    key: "_initialize",
                    value: function() {
                        var t = this;
                        this.options.id = g.uniqueId(i.a.now()),
                        this.options.container = this.options.container || this.layoutInfo.editor;
                        var e = i.a.extend({}, this.options.buttons);
                        Object.keys(e).forEach((function(n) {
                            t.memo("button." + n, e[n])
                        }
                        ));
                        var n = i.a.extend({}, this.options.modules, i.a.summernote.plugins || {});
                        Object.keys(n).forEach((function(e) {
                            t.module(e, n[e], !0)
                        }
                        )),
                        Object.keys(this.modules).forEach((function(e) {
                            t.initializeModule(e)
                        }
                        ))
                    }
                }, {
                    key: "_destroy",
                    value: function() {
                        var t = this;
                        Object.keys(this.modules).reverse().forEach((function(e) {
                            t.removeModule(e)
                        }
                        )),
                        Object.keys(this.memos).forEach((function(e) {
                            t.removeMemo(e)
                        }
                        )),
                        this.triggerEvent("destroy", this)
                    }
                }, {
                    key: "code",
                    value: function(t) {
                        var e = this.invoke("codeview.isActivated");
                        if (void 0 === t)
                            return this.invoke("codeview.sync"),
                            e ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
                        e ? this.invoke("codeview.sync", t) : this.layoutInfo.editable.html(t),
                        this.$note.val(t),
                        this.triggerEvent("change", t, this.layoutInfo.editable)
                    }
                }, {
                    key: "isDisabled",
                    value: function() {
                        return "false" === this.layoutInfo.editable.attr("contenteditable")
                    }
                }, {
                    key: "enable",
                    value: function() {
                        this.layoutInfo.editable.attr("contenteditable", !0),
                        this.invoke("toolbar.activate", !0),
                        this.triggerEvent("disable", !1),
                        this.options.editing = !0
                    }
                }, {
                    key: "disable",
                    value: function() {
                        this.invoke("codeview.isActivated") && this.invoke("codeview.deactivate"),
                        this.layoutInfo.editable.attr("contenteditable", !1),
                        this.options.editing = !1,
                        this.invoke("toolbar.deactivate", !0),
                        this.triggerEvent("disable", !0)
                    }
                }, {
                    key: "triggerEvent",
                    value: function() {
                        var t = C.head(arguments)
                          , e = C.tail(C.from(arguments))
                          , n = this.options.callbacks[g.namespaceToCamel(t, "on")];
                        n && n.apply(this.$note[0], e),
                        this.$note.trigger("summernote." + t, e)
                    }
                }, {
                    key: "initializeModule",
                    value: function(t) {
                        var e = this.modules[t];
                        e.shouldInitialize = e.shouldInitialize || g.ok,
                        e.shouldInitialize() && (e.initialize && e.initialize(),
                        e.events && pt.attachEvents(this.$note, e.events))
                    }
                }, {
                    key: "module",
                    value: function(t, e, n) {
                        if (1 === arguments.length)
                            return this.modules[t];
                        this.modules[t] = new e(this),
                        n || this.initializeModule(t)
                    }
                }, {
                    key: "removeModule",
                    value: function(t) {
                        var e = this.modules[t];
                        e.shouldInitialize() && (e.events && pt.detachEvents(this.$note, e.events),
                        e.destroy && e.destroy()),
                        delete this.modules[t]
                    }
                }, {
                    key: "memo",
                    value: function(t, e) {
                        if (1 === arguments.length)
                            return this.memos[t];
                        this.memos[t] = e
                    }
                }, {
                    key: "removeMemo",
                    value: function(t) {
                        this.memos[t] && this.memos[t].destroy && this.memos[t].destroy(),
                        delete this.memos[t]
                    }
                }, {
                    key: "createInvokeHandlerAndUpdateState",
                    value: function(t, e) {
                        var n = this;
                        return function(o) {
                            n.createInvokeHandler(t, e)(o),
                            n.invoke("buttons.updateCurrentStyle")
                        }
                    }
                }, {
                    key: "createInvokeHandler",
                    value: function(t, e) {
                        var n = this;
                        return function(o) {
                            o.preventDefault();
                            var r = i()(o.target);
                            n.invoke(t, e || r.closest("[data-value]").data("value"), r)
                        }
                    }
                }, {
                    key: "invoke",
                    value: function() {
                        var t = C.head(arguments)
                          , e = C.tail(C.from(arguments))
                          , n = t.split(".")
                          , o = n.length > 1
                          , i = o && C.head(n)
                          , r = o ? C.last(n) : C.head(n)
                          , a = this.modules[i || "editor"];
                        return !i && this[r] ? this[r].apply(this, e) : a && a[r] && a.shouldInitialize() ? a[r].apply(a, e) : void 0
                    }
                }]) && mt(e.prototype, n),
                o && mt(e, o),
                t
            }();
            function gt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            function bt(t, e) {
                var n, o, i = t.parentElement(), r = document.body.createTextRange(), a = C.from(i.childNodes);
                for (n = 0; n < a.length; n++)
                    if (!pt.isText(a[n])) {
                        if (r.moveToElementText(a[n]),
                        r.compareEndPoints("StartToStart", t) >= 0)
                            break;
                        o = a[n]
                    }
                if (0 !== n && pt.isText(a[n - 1])) {
                    var s = document.body.createTextRange()
                      , l = null;
                    s.moveToElementText(o || i),
                    s.collapse(!o),
                    l = o ? o.nextSibling : i.firstChild;
                    var c = t.duplicate();
                    c.setEndPoint("StartToStart", s);
                    for (var u = c.text.replace(/[\r\n]/g, "").length; u > l.nodeValue.length && l.nextSibling; )
                        u -= l.nodeValue.length,
                        l = l.nextSibling;
                    l.nodeValue;
                    e && l.nextSibling && pt.isText(l.nextSibling) && u === l.nodeValue.length && (u -= l.nodeValue.length,
                    l = l.nextSibling),
                    i = l,
                    n = u
                }
                return {
                    cont: i,
                    offset: n
                }
            }
            function kt(t) {
                var e = document.body.createTextRange()
                  , n = function t(e, n) {
                    var o, i;
                    if (pt.isText(e)) {
                        var r = pt.listPrev(e, g.not(pt.isText))
                          , a = C.last(r).previousSibling;
                        o = a || e.parentNode,
                        n += C.sum(C.tail(r), pt.nodeLength),
                        i = !a
                    } else {
                        if (o = e.childNodes[n] || e,
                        pt.isText(o))
                            return t(o, 0);
                        n = 0,
                        i = !1
                    }
                    return {
                        node: o,
                        collapseToStart: i,
                        offset: n
                    }
                }(t.node, t.offset);
                return e.moveToElementText(n.node),
                e.collapse(n.collapseToStart),
                e.moveStart("character", n.offset),
                e
            }
            i.a.fn.extend({
                summernote: function() {
                    var t = i.a.type(C.head(arguments))
                      , e = "string" === t
                      , n = "object" === t
                      , o = i.a.extend({}, i.a.summernote.options, n ? C.head(arguments) : {});
                    o.langInfo = i.a.extend(!0, {}, i.a.summernote.lang["en-US"], i.a.summernote.lang[o.lang]),
                    o.icons = i.a.extend(!0, {}, i.a.summernote.options.icons, o.icons),
                    o.tooltip = "auto" === o.tooltip ? !m.isSupportTouch : o.tooltip,
                    this.each((function(t, e) {
                        var n = i()(e);
                        if (!n.data("summernote")) {
                            var r = new vt(n,o);
                            n.data("summernote", r),
                            n.data("summernote").triggerEvent("init", r.layoutInfo)
                        }
                    }
                    ));
                    var r = this.first();
                    if (r.length) {
                        var a = r.data("summernote");
                        if (e)
                            return a.invoke.apply(a, C.from(arguments));
                        o.focus && a.invoke("editor.focus")
                    }
                    return this
                }
            });
            var yt = function() {
                function t(e, n, o, i) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.sc = e,
                    this.so = n,
                    this.ec = o,
                    this.eo = i,
                    this.isOnEditable = this.makeIsOn(pt.isEditable),
                    this.isOnList = this.makeIsOn(pt.isList),
                    this.isOnAnchor = this.makeIsOn(pt.isAnchor),
                    this.isOnCell = this.makeIsOn(pt.isCell),
                    this.isOnData = this.makeIsOn(pt.isData)
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "nativeRange",
                    value: function() {
                        if (m.isW3CRangeSupport) {
                            var t = document.createRange();
                            return t.setStart(this.sc, this.so),
                            t.setEnd(this.ec, this.eo),
                            t
                        }
                        var e = kt({
                            node: this.sc,
                            offset: this.so
                        });
                        return e.setEndPoint("EndToEnd", kt({
                            node: this.ec,
                            offset: this.eo
                        })),
                        e
                    }
                }, {
                    key: "getPoints",
                    value: function() {
                        return {
                            sc: this.sc,
                            so: this.so,
                            ec: this.ec,
                            eo: this.eo
                        }
                    }
                }, {
                    key: "getStartPoint",
                    value: function() {
                        return {
                            node: this.sc,
                            offset: this.so
                        }
                    }
                }, {
                    key: "getEndPoint",
                    value: function() {
                        return {
                            node: this.ec,
                            offset: this.eo
                        }
                    }
                }, {
                    key: "select",
                    value: function() {
                        var t = this.nativeRange();
                        if (m.isW3CRangeSupport) {
                            var e = document.getSelection();
                            e.rangeCount > 0 && e.removeAllRanges(),
                            e.addRange(t)
                        } else
                            t.select();
                        return this
                    }
                }, {
                    key: "scrollIntoView",
                    value: function(t) {
                        var e = i()(t).height();
                        return t.scrollTop + e < this.sc.offsetTop && (t.scrollTop += Math.abs(t.scrollTop + e - this.sc.offsetTop)),
                        this
                    }
                }, {
                    key: "normalize",
                    value: function() {
                        var e = function(t, e) {
                            if (!t)
                                return t;
                            if (pt.isVisiblePoint(t) && (!pt.isEdgePoint(t) || pt.isRightEdgePoint(t) && !e || pt.isLeftEdgePoint(t) && e || pt.isRightEdgePoint(t) && e && pt.isVoid(t.node.nextSibling) || pt.isLeftEdgePoint(t) && !e && pt.isVoid(t.node.previousSibling) || pt.isBlock(t.node) && pt.isEmpty(t.node)))
                                return t;
                            var n = pt.ancestor(t.node, pt.isBlock)
                              , o = !1;
                            if (!o) {
                                var i = pt.prevPoint(t) || {
                                    node: null
                                };
                                o = (pt.isLeftEdgePointOf(t, n) || pt.isVoid(i.node)) && !e
                            }
                            var r = !1;
                            if (!r) {
                                var a = pt.nextPoint(t) || {
                                    node: null
                                };
                                r = (pt.isRightEdgePointOf(t, n) || pt.isVoid(a.node)) && e
                            }
                            if (o || r) {
                                if (pt.isVisiblePoint(t))
                                    return t;
                                e = !e
                            }
                            return (e ? pt.nextPointUntil(pt.nextPoint(t), pt.isVisiblePoint) : pt.prevPointUntil(pt.prevPoint(t), pt.isVisiblePoint)) || t
                        }
                          , n = e(this.getEndPoint(), !1)
                          , o = this.isCollapsed() ? n : e(this.getStartPoint(), !0);
                        return new t(o.node,o.offset,n.node,n.offset)
                    }
                }, {
                    key: "nodes",
                    value: function(t, e) {
                        t = t || g.ok;
                        var n = e && e.includeAncestor
                          , o = e && e.fullyContains
                          , i = this.getStartPoint()
                          , r = this.getEndPoint()
                          , a = []
                          , s = [];
                        return pt.walkPoint(i, r, (function(e) {
                            var i;
                            pt.isEditable(e.node) || (o ? (pt.isLeftEdgePoint(e) && s.push(e.node),
                            pt.isRightEdgePoint(e) && C.contains(s, e.node) && (i = e.node)) : i = n ? pt.ancestor(e.node, t) : e.node,
                            i && t(i) && a.push(i))
                        }
                        ), !0),
                        C.unique(a)
                    }
                }, {
                    key: "commonAncestor",
                    value: function() {
                        return pt.commonAncestor(this.sc, this.ec)
                    }
                }, {
                    key: "expand",
                    value: function(e) {
                        var n = pt.ancestor(this.sc, e)
                          , o = pt.ancestor(this.ec, e);
                        if (!n && !o)
                            return new t(this.sc,this.so,this.ec,this.eo);
                        var i = this.getPoints();
                        return n && (i.sc = n,
                        i.so = 0),
                        o && (i.ec = o,
                        i.eo = pt.nodeLength(o)),
                        new t(i.sc,i.so,i.ec,i.eo)
                    }
                }, {
                    key: "collapse",
                    value: function(e) {
                        return e ? new t(this.sc,this.so,this.sc,this.so) : new t(this.ec,this.eo,this.ec,this.eo)
                    }
                }, {
                    key: "splitText",
                    value: function() {
                        var e = this.sc === this.ec
                          , n = this.getPoints();
                        return pt.isText(this.ec) && !pt.isEdgePoint(this.getEndPoint()) && this.ec.splitText(this.eo),
                        pt.isText(this.sc) && !pt.isEdgePoint(this.getStartPoint()) && (n.sc = this.sc.splitText(this.so),
                        n.so = 0,
                        e && (n.ec = n.sc,
                        n.eo = this.eo - this.so)),
                        new t(n.sc,n.so,n.ec,n.eo)
                    }
                }, {
                    key: "deleteContents",
                    value: function() {
                        if (this.isCollapsed())
                            return this;
                        var e = this.splitText()
                          , n = e.nodes(null, {
                            fullyContains: !0
                        })
                          , o = pt.prevPointUntil(e.getStartPoint(), (function(t) {
                            return !C.contains(n, t.node)
                        }
                        ))
                          , r = [];
                        return i.a.each(n, (function(t, e) {
                            var n = e.parentNode;
                            o.node !== n && 1 === pt.nodeLength(n) && r.push(n),
                            pt.remove(e, !1)
                        }
                        )),
                        i.a.each(r, (function(t, e) {
                            pt.remove(e, !1)
                        }
                        )),
                        new t(o.node,o.offset,o.node,o.offset).normalize()
                    }
                }, {
                    key: "makeIsOn",
                    value: function(t) {
                        return function() {
                            var e = pt.ancestor(this.sc, t);
                            return !!e && e === pt.ancestor(this.ec, t)
                        }
                    }
                }, {
                    key: "isLeftEdgeOf",
                    value: function(t) {
                        if (!pt.isLeftEdgePoint(this.getStartPoint()))
                            return !1;
                        var e = pt.ancestor(this.sc, t);
                        return e && pt.isLeftEdgeOf(this.sc, e)
                    }
                }, {
                    key: "isCollapsed",
                    value: function() {
                        return this.sc === this.ec && this.so === this.eo
                    }
                }, {
                    key: "wrapBodyInlineWithPara",
                    value: function() {
                        if (pt.isBodyContainer(this.sc) && pt.isEmpty(this.sc))
                            return this.sc.innerHTML = pt.emptyPara,
                            new t(this.sc.firstChild,0,this.sc.firstChild,0);
                        var e, n = this.normalize();
                        if (pt.isParaInline(this.sc) || pt.isPara(this.sc))
                            return n;
                        if (pt.isInline(n.sc)) {
                            var o = pt.listAncestor(n.sc, g.not(pt.isInline));
                            e = C.last(o),
                            pt.isInline(e) || (e = o[o.length - 2] || n.sc.childNodes[n.so])
                        } else
                            e = n.sc.childNodes[n.so > 0 ? n.so - 1 : 0];
                        if (e) {
                            var i = pt.listPrev(e, pt.isParaInline).reverse();
                            if ((i = i.concat(pt.listNext(e.nextSibling, pt.isParaInline))).length) {
                                var r = pt.wrap(C.head(i), "p");
                                pt.appendChildNodes(r, C.tail(i))
                            }
                        }
                        return this.normalize()
                    }
                }, {
                    key: "insertNode",
                    value: function(t) {
                        var e = this;
                        (pt.isText(t) || pt.isInline(t)) && (e = this.wrapBodyInlineWithPara().deleteContents());
                        var n = pt.splitPoint(e.getStartPoint(), pt.isInline(t));
                        return n.rightNode ? (n.rightNode.parentNode.insertBefore(t, n.rightNode),
                        pt.isEmpty(n.rightNode) && pt.isPara(t) && n.rightNode.parentNode.removeChild(n.rightNode)) : n.container.appendChild(t),
                        t
                    }
                }, {
                    key: "pasteHTML",
                    value: function(t) {
                        t = i.a.trim(t);
                        var e = i()("<div></div>").html(t)[0]
                          , n = C.from(e.childNodes)
                          , o = this
                          , r = !1;
                        return o.so >= 0 && (n = n.reverse(),
                        r = !0),
                        n = n.map((function(t) {
                            return o.insertNode(t)
                        }
                        )),
                        r && (n = n.reverse()),
                        n
                    }
                }, {
                    key: "toString",
                    value: function() {
                        var t = this.nativeRange();
                        return m.isW3CRangeSupport ? t.toString() : t.text
                    }
                }, {
                    key: "getWordRange",
                    value: function(e) {
                        var n = this.getEndPoint();
                        if (!pt.isCharPoint(n))
                            return this;
                        var o = pt.prevPointUntil(n, (function(t) {
                            return !pt.isCharPoint(t)
                        }
                        ));
                        return e && (n = pt.nextPointUntil(n, (function(t) {
                            return !pt.isCharPoint(t)
                        }
                        ))),
                        new t(o.node,o.offset,n.node,n.offset)
                    }
                }, {
                    key: "getWordsRange",
                    value: function(e) {
                        var n = this.getEndPoint()
                          , o = function(t) {
                            return !pt.isCharPoint(t) && !pt.isSpacePoint(t)
                        };
                        if (o(n))
                            return this;
                        var i = pt.prevPointUntil(n, o);
                        return e && (n = pt.nextPointUntil(n, o)),
                        new t(i.node,i.offset,n.node,n.offset)
                    }
                }, {
                    key: "getWordsMatchRange",
                    value: function(e) {
                        var n = this.getEndPoint()
                          , o = pt.prevPointUntil(n, (function(o) {
                            if (!pt.isCharPoint(o) && !pt.isSpacePoint(o))
                                return !0;
                            var i = new t(o.node,o.offset,n.node,n.offset)
                              , r = e.exec(i.toString());
                            return r && 0 === r.index
                        }
                        ))
                          , i = new t(o.node,o.offset,n.node,n.offset)
                          , r = i.toString()
                          , a = e.exec(r);
                        return a && a[0].length === r.length ? i : null
                    }
                }, {
                    key: "bookmark",
                    value: function(t) {
                        return {
                            s: {
                                path: pt.makeOffsetPath(t, this.sc),
                                offset: this.so
                            },
                            e: {
                                path: pt.makeOffsetPath(t, this.ec),
                                offset: this.eo
                            }
                        }
                    }
                }, {
                    key: "paraBookmark",
                    value: function(t) {
                        return {
                            s: {
                                path: C.tail(pt.makeOffsetPath(C.head(t), this.sc)),
                                offset: this.so
                            },
                            e: {
                                path: C.tail(pt.makeOffsetPath(C.last(t), this.ec)),
                                offset: this.eo
                            }
                        }
                    }
                }, {
                    key: "getClientRects",
                    value: function() {
                        return this.nativeRange().getClientRects()
                    }
                }]) && gt(e.prototype, n),
                o && gt(e, o),
                t
            }()
              , wt = {
                create: function(t, e, n, o) {
                    if (4 === arguments.length)
                        return new yt(t,e,n,o);
                    if (2 === arguments.length)
                        return new yt(t,e,n = t,o = e);
                    var i = this.createFromSelection();
                    if (!i && 1 === arguments.length) {
                        var r = arguments[0];
                        return pt.isEditable(r) && (r = r.lastChild),
                        this.createFromBodyElement(r, pt.emptyPara === arguments[0].innerHTML)
                    }
                    return i
                },
                createFromBodyElement: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = this.createFromNode(t);
                    return n.collapse(e)
                },
                createFromSelection: function() {
                    var t, e, n, o;
                    if (m.isW3CRangeSupport) {
                        var i = document.getSelection();
                        if (!i || 0 === i.rangeCount)
                            return null;
                        if (pt.isBody(i.anchorNode))
                            return null;
                        var r = i.getRangeAt(0);
                        t = r.startContainer,
                        e = r.startOffset,
                        n = r.endContainer,
                        o = r.endOffset
                    } else {
                        var a = document.selection.createRange()
                          , s = a.duplicate();
                        s.collapse(!1);
                        var l = a;
                        l.collapse(!0);
                        var c = bt(l, !0)
                          , u = bt(s, !1);
                        pt.isText(c.node) && pt.isLeftEdgePoint(c) && pt.isTextNode(u.node) && pt.isRightEdgePoint(u) && u.node.nextSibling === c.node && (c = u),
                        t = c.cont,
                        e = c.offset,
                        n = u.cont,
                        o = u.offset
                    }
                    return new yt(t,e,n,o)
                },
                createFromNode: function(t) {
                    var e = t
                      , n = 0
                      , o = t
                      , i = pt.nodeLength(o);
                    return pt.isVoid(e) && (n = pt.listPrev(e).length - 1,
                    e = e.parentNode),
                    pt.isBR(o) ? (i = pt.listPrev(o).length - 1,
                    o = o.parentNode) : pt.isVoid(o) && (i = pt.listPrev(o).length,
                    o = o.parentNode),
                    this.create(e, n, o, i)
                },
                createFromNodeBefore: function(t) {
                    return this.createFromNode(t).collapse(!0)
                },
                createFromNodeAfter: function(t) {
                    return this.createFromNode(t).collapse()
                },
                createFromBookmark: function(t, e) {
                    var n = pt.fromOffsetPath(t, e.s.path)
                      , o = e.s.offset
                      , i = pt.fromOffsetPath(t, e.e.path)
                      , r = e.e.offset;
                    return new yt(n,o,i,r)
                },
                createFromParaBookmark: function(t, e) {
                    var n = t.s.offset
                      , o = t.e.offset
                      , i = pt.fromOffsetPath(C.head(e), t.s.path)
                      , r = pt.fromOffsetPath(C.last(e), t.e.path);
                    return new yt(i,n,r,o)
                }
            }
              , Ct = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                ESCAPE: 27,
                SPACE: 32,
                DELETE: 46,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                NUM0: 48,
                NUM1: 49,
                NUM2: 50,
                NUM3: 51,
                NUM4: 52,
                NUM5: 53,
                NUM6: 54,
                NUM7: 55,
                NUM8: 56,
                B: 66,
                E: 69,
                I: 73,
                J: 74,
                K: 75,
                L: 76,
                R: 82,
                S: 83,
                U: 85,
                V: 86,
                Y: 89,
                Z: 90,
                SLASH: 191,
                LEFTBRACKET: 219,
                BACKSLASH: 220,
                RIGHTBRACKET: 221,
                HOME: 36,
                END: 35,
                PAGEUP: 33,
                PAGEDOWN: 34
            }
              , xt = {
                isEdit: function(t) {
                    return C.contains([Ct.BACKSPACE, Ct.TAB, Ct.ENTER, Ct.SPACE, Ct.DELETE], t)
                },
                isMove: function(t) {
                    return C.contains([Ct.LEFT, Ct.UP, Ct.RIGHT, Ct.DOWN], t)
                },
                isNavigation: function(t) {
                    return C.contains([Ct.HOME, Ct.END, Ct.PAGEUP, Ct.PAGEDOWN], t)
                },
                nameFromCode: g.invertObject(Ct),
                code: Ct
            };
            function St(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var Tt = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.stack = [],
                    this.stackOffset = -1,
                    this.context = e,
                    this.$editable = e.layoutInfo.editable,
                    this.editable = this.$editable[0]
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "makeSnapshot",
                    value: function() {
                        var t = wt.create(this.editable);
                        return {
                            contents: this.$editable.html(),
                            bookmark: t && t.isOnEditable() ? t.bookmark(this.editable) : {
                                s: {
                                    path: [],
                                    offset: 0
                                },
                                e: {
                                    path: [],
                                    offset: 0
                                }
                            }
                        }
                    }
                }, {
                    key: "applySnapshot",
                    value: function(t) {
                        null !== t.contents && this.$editable.html(t.contents),
                        null !== t.bookmark && wt.createFromBookmark(this.editable, t.bookmark).select()
                    }
                }, {
                    key: "rewind",
                    value: function() {
                        this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(),
                        this.stackOffset = 0,
                        this.applySnapshot(this.stack[this.stackOffset])
                    }
                }, {
                    key: "commit",
                    value: function() {
                        this.stack = [],
                        this.stackOffset = -1,
                        this.recordUndo()
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.stack = [],
                        this.stackOffset = -1,
                        this.$editable.html(""),
                        this.recordUndo()
                    }
                }, {
                    key: "undo",
                    value: function() {
                        this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(),
                        this.stackOffset > 0 && (this.stackOffset--,
                        this.applySnapshot(this.stack[this.stackOffset]))
                    }
                }, {
                    key: "redo",
                    value: function() {
                        this.stack.length - 1 > this.stackOffset && (this.stackOffset++,
                        this.applySnapshot(this.stack[this.stackOffset]))
                    }
                }, {
                    key: "recordUndo",
                    value: function() {
                        this.stackOffset++,
                        this.stack.length > this.stackOffset && (this.stack = this.stack.slice(0, this.stackOffset)),
                        this.stack.push(this.makeSnapshot()),
                        this.stack.length > this.context.options.historyLimit && (this.stack.shift(),
                        this.stackOffset -= 1)
                    }
                }]) && St(e.prototype, n),
                o && St(e, o),
                t
            }();
            function Et(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var $t = function() {
                function t() {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "jQueryCSS",
                    value: function(t, e) {
                        if (m.jqueryVersion < 1.9) {
                            var n = {};
                            return i.a.each(e, (function(e, o) {
                                n[o] = t.css(o)
                            }
                            )),
                            n
                        }
                        return t.css(e)
                    }
                }, {
                    key: "fromNode",
                    value: function(t) {
                        var e = this.jQueryCSS(t, ["font-family", "font-size", "text-align", "list-style-type", "line-height"]) || {}
                          , n = t[0].style.fontSize || e["font-size"];
                        return e["font-size"] = parseInt(n, 10),
                        e["font-size-unit"] = n.match(/[a-z%]+$/),
                        e
                    }
                }, {
                    key: "stylePara",
                    value: function(t, e) {
                        i.a.each(t.nodes(pt.isPara, {
                            includeAncestor: !0
                        }), (function(t, n) {
                            i()(n).css(e)
                        }
                        ))
                    }
                }, {
                    key: "styleNodes",
                    value: function(t, e) {
                        t = t.splitText();
                        var n = e && e.nodeName || "SPAN"
                          , o = !(!e || !e.expandClosestSibling)
                          , r = !(!e || !e.onlyPartialContains);
                        if (t.isCollapsed())
                            return [t.insertNode(pt.create(n))];
                        var a = pt.makePredByNodeName(n)
                          , s = t.nodes(pt.isText, {
                            fullyContains: !0
                        }).map((function(t) {
                            return pt.singleChildAncestor(t, a) || pt.wrap(t, n)
                        }
                        ));
                        if (o) {
                            if (r) {
                                var l = t.nodes();
                                a = g.and(a, (function(t) {
                                    return C.contains(l, t)
                                }
                                ))
                            }
                            return s.map((function(t) {
                                var e = pt.withClosestSiblings(t, a)
                                  , n = C.head(e)
                                  , o = C.tail(e);
                                return i.a.each(o, (function(t, e) {
                                    pt.appendChildNodes(n, e.childNodes),
                                    pt.remove(e)
                                }
                                )),
                                C.head(e)
                            }
                            ))
                        }
                        return s
                    }
                }, {
                    key: "current",
                    value: function(t) {
                        var e = i()(pt.isElement(t.sc) ? t.sc : t.sc.parentNode)
                          , n = this.fromNode(e);
                        try {
                            n = i.a.extend(n, {
                                "font-bold": document.queryCommandState("bold") ? "bold" : "normal",
                                "font-italic": document.queryCommandState("italic") ? "italic" : "normal",
                                "font-underline": document.queryCommandState("underline") ? "underline" : "normal",
                                "font-subscript": document.queryCommandState("subscript") ? "subscript" : "normal",
                                "font-superscript": document.queryCommandState("superscript") ? "superscript" : "normal",
                                "font-strikethrough": document.queryCommandState("strikethrough") ? "strikethrough" : "normal",
                                "font-family": document.queryCommandValue("fontname") || n["font-family"]
                            })
                        } catch (t) {}
                        if (t.isOnList()) {
                            var o = ["circle", "disc", "disc-leading-zero", "square"].indexOf(n["list-style-type"]) > -1;
                            n["list-style"] = o ? "unordered" : "ordered"
                        } else
                            n["list-style"] = "none";
                        var r = pt.ancestor(t.sc, pt.isPara);
                        if (r && r.style["line-height"])
                            n["line-height"] = r.style.lineHeight;
                        else {
                            var a = parseInt(n["line-height"], 10) / parseInt(n["font-size"], 10);
                            n["line-height"] = a.toFixed(1)
                        }
                        return n.anchor = t.isOnAnchor() && pt.ancestor(t.sc, pt.isAnchor),
                        n.ancestors = pt.listAncestor(t.sc, pt.isEditable),
                        n.range = t,
                        n
                    }
                }]) && Et(e.prototype, n),
                o && Et(e, o),
                t
            }();
            function Nt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var It = function() {
                function t() {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "insertOrderedList",
                    value: function(t) {
                        this.toggleList("OL", t)
                    }
                }, {
                    key: "insertUnorderedList",
                    value: function(t) {
                        this.toggleList("UL", t)
                    }
                }, {
                    key: "indent",
                    value: function(t) {
                        var e = this
                          , n = wt.create(t).wrapBodyInlineWithPara()
                          , o = n.nodes(pt.isPara, {
                            includeAncestor: !0
                        })
                          , r = C.clusterBy(o, g.peq2("parentNode"));
                        i.a.each(r, (function(t, n) {
                            var o = C.head(n);
                            if (pt.isLi(o)) {
                                var r = e.findList(o.previousSibling);
                                r ? n.map((function(t) {
                                    return r.appendChild(t)
                                }
                                )) : (e.wrapList(n, o.parentNode.nodeName),
                                n.map((function(t) {
                                    return t.parentNode
                                }
                                )).map((function(t) {
                                    return e.appendToPrevious(t)
                                }
                                )))
                            } else
                                i.a.each(n, (function(t, e) {
                                    i()(e).css("marginLeft", (function(t, e) {
                                        return (parseInt(e, 10) || 0) + 25
                                    }
                                    ))
                                }
                                ))
                        }
                        )),
                        n.select()
                    }
                }, {
                    key: "outdent",
                    value: function(t) {
                        var e = this
                          , n = wt.create(t).wrapBodyInlineWithPara()
                          , o = n.nodes(pt.isPara, {
                            includeAncestor: !0
                        })
                          , r = C.clusterBy(o, g.peq2("parentNode"));
                        i.a.each(r, (function(t, n) {
                            var o = C.head(n);
                            pt.isLi(o) ? e.releaseList([n]) : i.a.each(n, (function(t, e) {
                                i()(e).css("marginLeft", (function(t, e) {
                                    return (e = parseInt(e, 10) || 0) > 25 ? e - 25 : ""
                                }
                                ))
                            }
                            ))
                        }
                        )),
                        n.select()
                    }
                }, {
                    key: "toggleList",
                    value: function(t, e) {
                        var n = this
                          , o = wt.create(e).wrapBodyInlineWithPara()
                          , r = o.nodes(pt.isPara, {
                            includeAncestor: !0
                        })
                          , a = o.paraBookmark(r)
                          , s = C.clusterBy(r, g.peq2("parentNode"));
                        if (C.find(r, pt.isPurePara)) {
                            var l = [];
                            i.a.each(s, (function(e, o) {
                                l = l.concat(n.wrapList(o, t))
                            }
                            )),
                            r = l
                        } else {
                            var c = o.nodes(pt.isList, {
                                includeAncestor: !0
                            }).filter((function(e) {
                                return !i.a.nodeName(e, t)
                            }
                            ));
                            c.length ? i.a.each(c, (function(e, n) {
                                pt.replace(n, t)
                            }
                            )) : r = this.releaseList(s, !0)
                        }
                        wt.createFromParaBookmark(a, r).select()
                    }
                }, {
                    key: "wrapList",
                    value: function(t, e) {
                        var n = C.head(t)
                          , o = C.last(t)
                          , i = pt.isList(n.previousSibling) && n.previousSibling
                          , r = pt.isList(o.nextSibling) && o.nextSibling
                          , a = i || pt.insertAfter(pt.create(e || "UL"), o);
                        return t = t.map((function(t) {
                            return pt.isPurePara(t) ? pt.replace(t, "LI") : t
                        }
                        )),
                        pt.appendChildNodes(a, t),
                        r && (pt.appendChildNodes(a, C.from(r.childNodes)),
                        pt.remove(r)),
                        t
                    }
                }, {
                    key: "releaseList",
                    value: function(t, e) {
                        var n = this
                          , o = [];
                        return i.a.each(t, (function(t, r) {
                            var a = C.head(r)
                              , s = C.last(r)
                              , l = e ? pt.lastAncestor(a, pt.isList) : a.parentNode
                              , c = l.parentNode;
                            if ("LI" === l.parentNode.nodeName)
                                r.map((function(t) {
                                    var e = n.findNextSiblings(t);
                                    c.nextSibling ? c.parentNode.insertBefore(t, c.nextSibling) : c.parentNode.appendChild(t),
                                    e.length && (n.wrapList(e, l.nodeName),
                                    t.appendChild(e[0].parentNode))
                                }
                                )),
                                0 === l.children.length && c.removeChild(l),
                                0 === c.childNodes.length && c.parentNode.removeChild(c);
                            else {
                                var u = l.childNodes.length > 1 ? pt.splitTree(l, {
                                    node: s.parentNode,
                                    offset: pt.position(s) + 1
                                }, {
                                    isSkipPaddingBlankHTML: !0
                                }) : null
                                  , d = pt.splitTree(l, {
                                    node: a.parentNode,
                                    offset: pt.position(a)
                                }, {
                                    isSkipPaddingBlankHTML: !0
                                });
                                r = e ? pt.listDescendant(d, pt.isLi) : C.from(d.childNodes).filter(pt.isLi),
                                !e && pt.isList(l.parentNode) || (r = r.map((function(t) {
                                    return pt.replace(t, "P")
                                }
                                ))),
                                i.a.each(C.from(r).reverse(), (function(t, e) {
                                    pt.insertAfter(e, l)
                                }
                                ));
                                var h = C.compact([l, d, u]);
                                i.a.each(h, (function(t, e) {
                                    var n = [e].concat(pt.listDescendant(e, pt.isList));
                                    i.a.each(n.reverse(), (function(t, e) {
                                        pt.nodeLength(e) || pt.remove(e, !0)
                                    }
                                    ))
                                }
                                ))
                            }
                            o = o.concat(r)
                        }
                        )),
                        o
                    }
                }, {
                    key: "appendToPrevious",
                    value: function(t) {
                        return t.previousSibling ? pt.appendChildNodes(t.previousSibling, [t]) : this.wrapList([t], "LI")
                    }
                }, {
                    key: "findList",
                    value: function(t) {
                        return t ? C.find(t.children, (function(t) {
                            return ["OL", "UL"].indexOf(t.nodeName) > -1
                        }
                        )) : null
                    }
                }, {
                    key: "findNextSiblings",
                    value: function(t) {
                        for (var e = []; t.nextSibling; )
                            e.push(t.nextSibling),
                            t = t.nextSibling;
                        return e
                    }
                }]) && Nt(e.prototype, n),
                o && Nt(e, o),
                t
            }();
            function Pt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var Rt = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.bullet = new It,
                    this.options = e.options
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "insertTab",
                    value: function(t, e) {
                        var n = pt.createText(new Array(e + 1).join(pt.NBSP_CHAR));
                        (t = t.deleteContents()).insertNode(n, !0),
                        (t = wt.create(n, e)).select()
                    }
                }, {
                    key: "insertParagraph",
                    value: function(t, e) {
                        e = (e = (e = e || wt.create(t)).deleteContents()).wrapBodyInlineWithPara();
                        var n, o = pt.ancestor(e.sc, pt.isPara);
                        if (o) {
                            if (pt.isLi(o) && (pt.isEmpty(o) || pt.deepestChildIsEmpty(o)))
                                return void this.bullet.toggleList(o.parentNode.nodeName);
                            var r = null;
                            if (1 === this.options.blockquoteBreakingLevel ? r = pt.ancestor(o, pt.isBlockquote) : 2 === this.options.blockquoteBreakingLevel && (r = pt.lastAncestor(o, pt.isBlockquote)),
                            r) {
                                n = i()(pt.emptyPara)[0],
                                pt.isRightEdgePoint(e.getStartPoint()) && pt.isBR(e.sc.nextSibling) && i()(e.sc.nextSibling).remove();
                                var a = pt.splitTree(r, e.getStartPoint(), {
                                    isDiscardEmptySplits: !0
                                });
                                a ? a.parentNode.insertBefore(n, a) : pt.insertAfter(n, r)
                            } else {
                                n = pt.splitTree(o, e.getStartPoint());
                                var s = pt.listDescendant(o, pt.isEmptyAnchor);
                                s = s.concat(pt.listDescendant(n, pt.isEmptyAnchor)),
                                i.a.each(s, (function(t, e) {
                                    pt.remove(e)
                                }
                                )),
                                (pt.isHeading(n) || pt.isPre(n) || pt.isCustomStyleTag(n)) && pt.isEmpty(n) && (n = pt.replace(n, "p"))
                            }
                        } else {
                            var l = e.sc.childNodes[e.so];
                            n = i()(pt.emptyPara)[0],
                            l ? e.sc.insertBefore(n, l) : e.sc.appendChild(n)
                        }
                        wt.create(n, 0).normalize().select().scrollIntoView(t)
                    }
                }]) && Pt(e.prototype, n),
                o && Pt(e, o),
                t
            }();
            function Lt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var At = function t(e, n, o, i) {
                var r = {
                    colPos: 0,
                    rowPos: 0
                }
                  , a = []
                  , s = [];
                function l(t, e, n, o, i, r, s) {
                    var l = {
                        baseRow: n,
                        baseCell: o,
                        isRowSpan: i,
                        isColSpan: r,
                        isVirtual: s
                    };
                    a[t] || (a[t] = []),
                    a[t][e] = l
                }
                function c(t, e, n, o) {
                    return {
                        baseCell: t.baseCell,
                        action: e,
                        virtualTable: {
                            rowIndex: n,
                            cellIndex: o
                        }
                    }
                }
                function u(t, e) {
                    if (!a[t])
                        return e;
                    if (!a[t][e])
                        return e;
                    for (var n = e; a[t][n]; )
                        if (n++,
                        !a[t][n])
                            return n
                }
                function d(t, e) {
                    var n = u(t.rowIndex, e.cellIndex)
                      , o = e.colSpan > 1
                      , i = e.rowSpan > 1
                      , a = t.rowIndex === r.rowPos && e.cellIndex === r.colPos;
                    l(t.rowIndex, n, t, e, i, o, !1);
                    var s = e.attributes.rowSpan ? parseInt(e.attributes.rowSpan.value, 10) : 0;
                    if (s > 1)
                        for (var c = 1; c < s; c++) {
                            var d = t.rowIndex + c;
                            h(d, n, e, a),
                            l(d, n, t, e, !0, o, !0)
                        }
                    var f = e.attributes.colSpan ? parseInt(e.attributes.colSpan.value, 10) : 0;
                    if (f > 1)
                        for (var p = 1; p < f; p++) {
                            var m = u(t.rowIndex, n + p);
                            h(t.rowIndex, m, e, a),
                            l(t.rowIndex, m, t, e, i, !0, !0)
                        }
                }
                function h(t, e, n, o) {
                    t === r.rowPos && r.colPos >= n.cellIndex && n.cellIndex <= e && !o && r.colPos++
                }
                function f(e) {
                    switch (n) {
                    case t.where.Column:
                        if (e.isColSpan)
                            return t.resultAction.SubtractSpanCount;
                        break;
                    case t.where.Row:
                        if (!e.isVirtual && e.isRowSpan)
                            return t.resultAction.AddCell;
                        if (e.isRowSpan)
                            return t.resultAction.SubtractSpanCount
                    }
                    return t.resultAction.RemoveCell
                }
                function p(e) {
                    switch (n) {
                    case t.where.Column:
                        if (e.isColSpan)
                            return t.resultAction.SumSpanCount;
                        if (e.isRowSpan && e.isVirtual)
                            return t.resultAction.Ignore;
                        break;
                    case t.where.Row:
                        if (e.isRowSpan)
                            return t.resultAction.SumSpanCount;
                        if (e.isColSpan && e.isVirtual)
                            return t.resultAction.Ignore
                    }
                    return t.resultAction.AddCell
                }
                this.getActionList = function() {
                    for (var e = n === t.where.Row ? r.rowPos : -1, i = n === t.where.Column ? r.colPos : -1, l = 0, u = !0; u; ) {
                        var d = e >= 0 ? e : l
                          , h = i >= 0 ? i : l
                          , m = a[d];
                        if (!m)
                            return u = !1,
                            s;
                        var v = m[h];
                        if (!v)
                            return u = !1,
                            s;
                        var g = t.resultAction.Ignore;
                        switch (o) {
                        case t.requestAction.Add:
                            g = p(v);
                            break;
                        case t.requestAction.Delete:
                            g = f(v)
                        }
                        s.push(c(v, g, d, h)),
                        l++
                    }
                    return s
                }
                ,
                e && e.tagName && ("td" === e.tagName.toLowerCase() || "th" === e.tagName.toLowerCase()) && (r.colPos = e.cellIndex,
                e.parentElement && e.parentElement.tagName && "tr" === e.parentElement.tagName.toLowerCase() && (r.rowPos = e.parentElement.rowIndex)),
                function() {
                    for (var t = i.rows, e = 0; e < t.length; e++)
                        for (var n = t[e].cells, o = 0; o < n.length; o++)
                            d(t[e], n[o])
                }()
            };
            At.where = {
                Row: 0,
                Column: 1
            },
            At.requestAction = {
                Add: 0,
                Delete: 1
            },
            At.resultAction = {
                Ignore: 0,
                SubtractSpanCount: 1,
                RemoveCell: 2,
                AddCell: 3,
                SumSpanCount: 4
            };
            var Ft = function() {
                function t() {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "tab",
                    value: function(t, e) {
                        var n = pt.ancestor(t.commonAncestor(), pt.isCell)
                          , o = pt.ancestor(n, pt.isTable)
                          , i = pt.listDescendant(o, pt.isCell)
                          , r = C[e ? "prev" : "next"](i, n);
                        r && wt.create(r, 0).select()
                    }
                }, {
                    key: "addRow",
                    value: function(t, e) {
                        for (var n = pt.ancestor(t.commonAncestor(), pt.isCell), o = i()(n).closest("tr"), r = this.recoverAttributes(o), a = i()("<tr" + r + "></tr>"), s = new At(n,At.where.Row,At.requestAction.Add,i()(o).closest("table")[0]).getActionList(), l = 0; l < s.length; l++) {
                            var c = s[l]
                              , u = this.recoverAttributes(c.baseCell);
                            switch (c.action) {
                            case At.resultAction.AddCell:
                                a.append("<td" + u + ">" + pt.blank + "</td>");
                                break;
                            case At.resultAction.SumSpanCount:
                                if ("top" === e && (c.baseCell.parent ? c.baseCell.closest("tr").rowIndex : 0) <= o[0].rowIndex) {
                                    var d = i()("<div></div>").append(i()("<td" + u + ">" + pt.blank + "</td>").removeAttr("rowspan")).html();
                                    a.append(d);
                                    break
                                }
                                var h = parseInt(c.baseCell.rowSpan, 10);
                                h++,
                                c.baseCell.setAttribute("rowSpan", h)
                            }
                        }
                        if ("top" === e)
                            o.before(a);
                        else {
                            if (n.rowSpan > 1) {
                                var f = o[0].rowIndex + (n.rowSpan - 2);
                                return void i()(i()(o).parent().find("tr")[f]).after(i()(a))
                            }
                            o.after(a)
                        }
                    }
                }, {
                    key: "addCol",
                    value: function(t, e) {
                        var n = pt.ancestor(t.commonAncestor(), pt.isCell)
                          , o = i()(n).closest("tr");
                        i()(o).siblings().push(o);
                        for (var r = new At(n,At.where.Column,At.requestAction.Add,i()(o).closest("table")[0]).getActionList(), a = 0; a < r.length; a++) {
                            var s = r[a]
                              , l = this.recoverAttributes(s.baseCell);
                            switch (s.action) {
                            case At.resultAction.AddCell:
                                "right" === e ? i()(s.baseCell).after("<td" + l + ">" + pt.blank + "</td>") : i()(s.baseCell).before("<td" + l + ">" + pt.blank + "</td>");
                                break;
                            case At.resultAction.SumSpanCount:
                                if ("right" === e) {
                                    var c = parseInt(s.baseCell.colSpan, 10);
                                    c++,
                                    s.baseCell.setAttribute("colSpan", c)
                                } else
                                    i()(s.baseCell).before("<td" + l + ">" + pt.blank + "</td>")
                            }
                        }
                    }
                }, {
                    key: "recoverAttributes",
                    value: function(t) {
                        var e = "";
                        if (!t)
                            return e;
                        for (var n = t.attributes || [], o = 0; o < n.length; o++)
                            "id" !== n[o].name.toLowerCase() && n[o].specified && (e += " " + n[o].name + "='" + n[o].value + "'");
                        return e
                    }
                }, {
                    key: "deleteRow",
                    value: function(t) {
                        for (var e = pt.ancestor(t.commonAncestor(), pt.isCell), n = i()(e).closest("tr"), o = n.children("td, th").index(i()(e)), r = n[0].rowIndex, a = new At(e,At.where.Row,At.requestAction.Delete,i()(n).closest("table")[0]).getActionList(), s = 0; s < a.length; s++)
                            if (a[s]) {
                                var l = a[s].baseCell
                                  , c = a[s].virtualTable
                                  , u = l.rowSpan && l.rowSpan > 1
                                  , d = u ? parseInt(l.rowSpan, 10) : 0;
                                switch (a[s].action) {
                                case At.resultAction.Ignore:
                                    continue;
                                case At.resultAction.AddCell:
                                    var h = n.next("tr")[0];
                                    if (!h)
                                        continue;
                                    var f = n[0].cells[o];
                                    u && (d > 2 ? (d--,
                                    h.insertBefore(f, h.cells[o]),
                                    h.cells[o].setAttribute("rowSpan", d),
                                    h.cells[o].innerHTML = "") : 2 === d && (h.insertBefore(f, h.cells[o]),
                                    h.cells[o].removeAttribute("rowSpan"),
                                    h.cells[o].innerHTML = ""));
                                    continue;
                                case At.resultAction.SubtractSpanCount:
                                    u && (d > 2 ? (d--,
                                    l.setAttribute("rowSpan", d),
                                    c.rowIndex !== r && l.cellIndex === o && (l.innerHTML = "")) : 2 === d && (l.removeAttribute("rowSpan"),
                                    c.rowIndex !== r && l.cellIndex === o && (l.innerHTML = "")));
                                    continue;
                                case At.resultAction.RemoveCell:
                                    continue
                                }
                            }
                        n.remove()
                    }
                }, {
                    key: "deleteCol",
                    value: function(t) {
                        for (var e = pt.ancestor(t.commonAncestor(), pt.isCell), n = i()(e).closest("tr"), o = n.children("td, th").index(i()(e)), r = new At(e,At.where.Column,At.requestAction.Delete,i()(n).closest("table")[0]).getActionList(), a = 0; a < r.length; a++)
                            if (r[a])
                                switch (r[a].action) {
                                case At.resultAction.Ignore:
                                    continue;
                                case At.resultAction.SubtractSpanCount:
                                    var s = r[a].baseCell;
                                    if (s.colSpan && s.colSpan > 1) {
                                        var l = s.colSpan ? parseInt(s.colSpan, 10) : 0;
                                        l > 2 ? (l--,
                                        s.setAttribute("colSpan", l),
                                        s.cellIndex === o && (s.innerHTML = "")) : 2 === l && (s.removeAttribute("colSpan"),
                                        s.cellIndex === o && (s.innerHTML = ""))
                                    }
                                    continue;
                                case At.resultAction.RemoveCell:
                                    pt.remove(r[a].baseCell, !0);
                                    continue
                                }
                    }
                }, {
                    key: "createTable",
                    value: function(t, e, n) {
                        for (var o, r = [], a = 0; a < t; a++)
                            r.push("<td>" + pt.blank + "</td>");
                        o = r.join("");
                        for (var s, l = [], c = 0; c < e; c++)
                            l.push("<tr>" + o + "</tr>");
                        s = l.join("");
                        var u = i()("<table>" + s + "</table>");
                        return n && n.tableClassName && u.addClass(n.tableClassName),
                        u[0]
                    }
                }, {
                    key: "deleteTable",
                    value: function(t) {
                        var e = pt.ancestor(t.commonAncestor(), pt.isCell);
                        i()(e).closest("table").remove()
                    }
                }]) && Lt(e.prototype, n),
                o && Lt(e, o),
                t
            }();
            function Dt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var Ht = function() {
                function t(e) {
                    var n = this;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.$note = e.layoutInfo.note,
                    this.$editor = e.layoutInfo.editor,
                    this.$editable = e.layoutInfo.editable,
                    this.options = e.options,
                    this.lang = this.options.langInfo,
                    this.editable = this.$editable[0],
                    this.lastRange = null,
                    this.snapshot = null,
                    this.style = new $t,
                    this.table = new Ft,
                    this.typing = new Rt(e),
                    this.bullet = new It,
                    this.history = new Tt(e),
                    this.context.memo("help.escape", this.lang.help.escape),
                    this.context.memo("help.undo", this.lang.help.undo),
                    this.context.memo("help.redo", this.lang.help.redo),
                    this.context.memo("help.tab", this.lang.help.tab),
                    this.context.memo("help.untab", this.lang.help.untab),
                    this.context.memo("help.insertParagraph", this.lang.help.insertParagraph),
                    this.context.memo("help.insertOrderedList", this.lang.help.insertOrderedList),
                    this.context.memo("help.insertUnorderedList", this.lang.help.insertUnorderedList),
                    this.context.memo("help.indent", this.lang.help.indent),
                    this.context.memo("help.outdent", this.lang.help.outdent),
                    this.context.memo("help.formatPara", this.lang.help.formatPara),
                    this.context.memo("help.insertHorizontalRule", this.lang.help.insertHorizontalRule),
                    this.context.memo("help.fontName", this.lang.help.fontName);
                    for (var o = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor"], r = 0, a = o.length; r < a; r++)
                        this[o[r]] = function(t) {
                            return function(e) {
                                n.beforeCommand(),
                                document.execCommand(t, !1, e),
                                n.afterCommand(!0)
                            }
                        }(o[r]),
                        this.context.memo("help." + o[r], this.lang.help[o[r]]);
                    this.fontName = this.wrapCommand((function(t) {
                        return n.fontStyling("font-family", m.validFontName(t))
                    }
                    )),
                    this.fontSize = this.wrapCommand((function(t) {
                        var e = n.currentStyle()["font-size-unit"];
                        return n.fontStyling("font-size", t + e)
                    }
                    )),
                    this.fontSizeUnit = this.wrapCommand((function(t) {
                        var e = n.currentStyle()["font-size"];
                        return n.fontStyling("font-size", e + t)
                    }
                    ));
                    for (var s = 1; s <= 6; s++)
                        this["formatH" + s] = function(t) {
                            return function() {
                                n.formatBlock("H" + t)
                            }
                        }(s),
                        this.context.memo("help.formatH" + s, this.lang.help["formatH" + s]);
                    this.insertParagraph = this.wrapCommand((function() {
                        n.typing.insertParagraph(n.editable)
                    }
                    )),
                    this.insertOrderedList = this.wrapCommand((function() {
                        n.bullet.insertOrderedList(n.editable)
                    }
                    )),
                    this.insertUnorderedList = this.wrapCommand((function() {
                        n.bullet.insertUnorderedList(n.editable)
                    }
                    )),
                    this.indent = this.wrapCommand((function() {
                        n.bullet.indent(n.editable)
                    }
                    )),
                    this.outdent = this.wrapCommand((function() {
                        n.bullet.outdent(n.editable)
                    }
                    )),
                    this.insertNode = this.wrapCommand((function(t) {
                        n.isLimited(i()(t).text().length) || (n.getLastRange().insertNode(t),
                        n.setLastRange(wt.createFromNodeAfter(t).select()))
                    }
                    )),
                    this.insertText = this.wrapCommand((function(t) {
                        if (!n.isLimited(t.length)) {
                            var e = n.getLastRange().insertNode(pt.createText(t));
                            n.setLastRange(wt.create(e, pt.nodeLength(e)).select())
                        }
                    }
                    )),
                    this.pasteHTML = this.wrapCommand((function(t) {
                        if (!n.isLimited(t.length)) {
                            t = n.context.invoke("codeview.purify", t);
                            var e = n.getLastRange().pasteHTML(t);
                            n.setLastRange(wt.createFromNodeAfter(C.last(e)).select())
                        }
                    }
                    )),
                    this.formatBlock = this.wrapCommand((function(t, e) {
                        var o = n.options.callbacks.onApplyCustomStyle;
                        o ? o.call(n, e, n.context, n.onFormatBlock) : n.onFormatBlock(t, e)
                    }
                    )),
                    this.insertHorizontalRule = this.wrapCommand((function() {
                        var t = n.getLastRange().insertNode(pt.create("HR"));
                        t.nextSibling && n.setLastRange(wt.create(t.nextSibling, 0).normalize().select())
                    }
                    )),
                    this.lineHeight = this.wrapCommand((function(t) {
                        n.style.stylePara(n.getLastRange(), {
                            lineHeight: t
                        })
                    }
                    )),
                    this.createLink = this.wrapCommand((function(t) {
                        var e = t.url
                          , o = t.text
                          , r = t.isNewWindow
                          , a = t.checkProtocol
                          , s = t.range || n.getLastRange()
                          , l = o.length - s.toString().length;
                        if (!(l > 0 && n.isLimited(l))) {
                            var c = s.toString() !== o;
                            "string" == typeof e && (e = e.trim()),
                            n.options.onCreateLink ? e = n.options.onCreateLink(e) : a && (e = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/.test(e) ? e : n.options.defaultProtocol + e);
                            var u = [];
                            if (c) {
                                var d = (s = s.deleteContents()).insertNode(i()("<A>" + o + "</A>")[0]);
                                u.push(d)
                            } else
                                u = n.style.styleNodes(s, {
                                    nodeName: "A",
                                    expandClosestSibling: !0,
                                    onlyPartialContains: !0
                                });
                            i.a.each(u, (function(t, n) {
                                i()(n).attr("href", e),
                                r ? i()(n).attr("target", "_blank") : i()(n).removeAttr("target")
                            }
                            )),
                            n.setLastRange(n.createRangeFromList(u).select())
                        }
                    }
                    )),
                    this.color = this.wrapCommand((function(t) {
                        var e = t.foreColor
                          , n = t.backColor;
                        e && document.execCommand("foreColor", !1, e),
                        n && document.execCommand("backColor", !1, n)
                    }
                    )),
                    this.foreColor = this.wrapCommand((function(t) {
                        document.execCommand("foreColor", !1, t)
                    }
                    )),
                    this.insertTable = this.wrapCommand((function(t) {
                        var e = t.split("x");
                        n.getLastRange().deleteContents().insertNode(n.table.createTable(e[0], e[1], n.options))
                    }
                    )),
                    this.removeMedia = this.wrapCommand((function() {
                        var t = i()(n.restoreTarget()).parent();
                        t.closest("figure").length ? t.closest("figure").remove() : t = i()(n.restoreTarget()).detach(),
                        n.context.triggerEvent("media.delete", t, n.$editable)
                    }
                    )),
                    this.floatMe = this.wrapCommand((function(t) {
                        var e = i()(n.restoreTarget());
                        e.toggleClass("note-float-left", "left" === t),
                        e.toggleClass("note-float-right", "right" === t),
                        e.css("float", "none" === t ? "" : t)
                    }
                    )),
                    this.resize = this.wrapCommand((function(t) {
                        var e = i()(n.restoreTarget());
                        0 === (t = parseFloat(t)) ? e.css("width", "") : e.css({
                            width: 100 * t + "%",
                            height: ""
                        })
                    }
                    ))
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "initialize",
                    value: function() {
                        var t = this;
                        this.$editable.on("keydown", (function(e) {
                            if (e.keyCode === xt.code.ENTER && t.context.triggerEvent("enter", e),
                            t.context.triggerEvent("keydown", e),
                            t.snapshot = t.history.makeSnapshot(),
                            t.hasKeyShortCut = !1,
                            e.isDefaultPrevented() || (t.options.shortcuts ? t.hasKeyShortCut = t.handleKeyMap(e) : t.preventDefaultEditableShortCuts(e)),
                            t.isLimited(1, e)) {
                                var n = t.getLastRange();
                                if (n.eo - n.so == 0)
                                    return !1
                            }
                            t.setLastRange(),
                            t.options.recordEveryKeystroke && !1 === t.hasKeyShortCut && t.history.recordUndo()
                        }
                        )).on("keyup", (function(e) {
                            t.setLastRange(),
                            t.context.triggerEvent("keyup", e)
                        }
                        )).on("focus", (function(e) {
                            t.setLastRange(),
                            t.context.triggerEvent("focus", e)
                        }
                        )).on("blur", (function(e) {
                            t.context.triggerEvent("blur", e)
                        }
                        )).on("mousedown", (function(e) {
                            t.context.triggerEvent("mousedown", e)
                        }
                        )).on("mouseup", (function(e) {
                            t.setLastRange(),
                            t.history.recordUndo(),
                            t.context.triggerEvent("mouseup", e)
                        }
                        )).on("scroll", (function(e) {
                            t.context.triggerEvent("scroll", e)
                        }
                        )).on("paste", (function(e) {
                            t.setLastRange(),
                            t.context.triggerEvent("paste", e)
                        }
                        )).on("input", (function() {
                            t.isLimited(0) && t.snapshot && t.history.applySnapshot(t.snapshot)
                        }
                        )),
                        this.$editable.attr("spellcheck", this.options.spellCheck),
                        this.$editable.attr("autocorrect", this.options.spellCheck),
                        this.options.disableGrammar && this.$editable.attr("data-gramm", !1),
                        this.$editable.html(pt.html(this.$note) || pt.emptyPara),
                        this.$editable.on(m.inputEventName, g.debounce((function() {
                            t.context.triggerEvent("change", t.$editable.html(), t.$editable)
                        }
                        ), 10)),
                        this.$editable.on("focusin", (function(e) {
                            t.context.triggerEvent("focusin", e)
                        }
                        )).on("focusout", (function(e) {
                            t.context.triggerEvent("focusout", e)
                        }
                        )),
                        this.options.airMode ? this.options.overrideContextMenu && this.$editor.on("contextmenu", (function(e) {
                            return t.context.triggerEvent("contextmenu", e),
                            !1
                        }
                        )) : (this.options.width && this.$editor.outerWidth(this.options.width),
                        this.options.height && this.$editable.outerHeight(this.options.height),
                        this.options.maxHeight && this.$editable.css("max-height", this.options.maxHeight),
                        this.options.minHeight && this.$editable.css("min-height", this.options.minHeight)),
                        this.history.recordUndo(),
                        this.setLastRange()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.$editable.off()
                    }
                }, {
                    key: "handleKeyMap",
                    value: function(t) {
                        var e = this.options.keyMap[m.isMac ? "mac" : "pc"]
                          , n = [];
                        t.metaKey && n.push("CMD"),
                        t.ctrlKey && !t.altKey && n.push("CTRL"),
                        t.shiftKey && n.push("SHIFT");
                        var o = xt.nameFromCode[t.keyCode];
                        o && n.push(o);
                        var i = e[n.join("+")];
                        if ("TAB" !== o || this.options.tabDisable)
                            if (i) {
                                if (!1 !== this.context.invoke(i))
                                    return t.preventDefault(),
                                    !0
                            } else
                                xt.isEdit(t.keyCode) && this.afterCommand();
                        else
                            this.afterCommand();
                        return !1
                    }
                }, {
                    key: "preventDefaultEditableShortCuts",
                    value: function(t) {
                        (t.ctrlKey || t.metaKey) && C.contains([66, 73, 85], t.keyCode) && t.preventDefault()
                    }
                }, {
                    key: "isLimited",
                    value: function(t, e) {
                        return t = t || 0,
                        (void 0 === e || !(xt.isMove(e.keyCode) || xt.isNavigation(e.keyCode) || e.ctrlKey || e.metaKey || C.contains([xt.code.BACKSPACE, xt.code.DELETE], e.keyCode))) && this.options.maxTextLength > 0 && this.$editable.text().length + t > this.options.maxTextLength
                    }
                }, {
                    key: "createRange",
                    value: function() {
                        return this.focus(),
                        this.setLastRange(),
                        this.getLastRange()
                    }
                }, {
                    key: "createRangeFromList",
                    value: function(t) {
                        var e = wt.createFromNodeBefore(C.head(t)).getStartPoint()
                          , n = wt.createFromNodeAfter(C.last(t)).getEndPoint();
                        return wt.create(e.node, e.offset, n.node, n.offset)
                    }
                }, {
                    key: "setLastRange",
                    value: function(t) {
                        t ? this.lastRange = t : (this.lastRange = wt.create(this.editable),
                        0 === i()(this.lastRange.sc).closest(".note-editable").length && (this.lastRange = wt.createFromBodyElement(this.editable)))
                    }
                }, {
                    key: "getLastRange",
                    value: function() {
                        return this.lastRange || this.setLastRange(),
                        this.lastRange
                    }
                }, {
                    key: "saveRange",
                    value: function(t) {
                        t && this.getLastRange().collapse().select()
                    }
                }, {
                    key: "restoreRange",
                    value: function() {
                        this.lastRange && (this.lastRange.select(),
                        this.focus())
                    }
                }, {
                    key: "saveTarget",
                    value: function(t) {
                        this.$editable.data("target", t)
                    }
                }, {
                    key: "clearTarget",
                    value: function() {
                        this.$editable.removeData("target")
                    }
                }, {
                    key: "restoreTarget",
                    value: function() {
                        return this.$editable.data("target")
                    }
                }, {
                    key: "currentStyle",
                    value: function() {
                        var t = wt.create();
                        return t && (t = t.normalize()),
                        t ? this.style.current(t) : this.style.fromNode(this.$editable)
                    }
                }, {
                    key: "styleFromNode",
                    value: function(t) {
                        return this.style.fromNode(t)
                    }
                }, {
                    key: "undo",
                    value: function() {
                        this.context.triggerEvent("before.command", this.$editable.html()),
                        this.history.undo(),
                        this.context.triggerEvent("change", this.$editable.html(), this.$editable)
                    }
                }, {
                    key: "commit",
                    value: function() {
                        this.context.triggerEvent("before.command", this.$editable.html()),
                        this.history.commit(),
                        this.context.triggerEvent("change", this.$editable.html(), this.$editable)
                    }
                }, {
                    key: "redo",
                    value: function() {
                        this.context.triggerEvent("before.command", this.$editable.html()),
                        this.history.redo(),
                        this.context.triggerEvent("change", this.$editable.html(), this.$editable)
                    }
                }, {
                    key: "beforeCommand",
                    value: function() {
                        this.context.triggerEvent("before.command", this.$editable.html()),
                        document.execCommand("styleWithCSS", !1, this.options.styleWithCSS),
                        this.focus()
                    }
                }, {
                    key: "afterCommand",
                    value: function(t) {
                        this.normalizeContent(),
                        this.history.recordUndo(),
                        t || this.context.triggerEvent("change", this.$editable.html(), this.$editable)
                    }
                }, {
                    key: "tab",
                    value: function() {
                        var t = this.getLastRange();
                        if (t.isCollapsed() && t.isOnCell())
                            this.table.tab(t);
                        else {
                            if (0 === this.options.tabSize)
                                return !1;
                            this.isLimited(this.options.tabSize) || (this.beforeCommand(),
                            this.typing.insertTab(t, this.options.tabSize),
                            this.afterCommand())
                        }
                    }
                }, {
                    key: "untab",
                    value: function() {
                        var t = this.getLastRange();
                        if (t.isCollapsed() && t.isOnCell())
                            this.table.tab(t, !0);
                        else if (0 === this.options.tabSize)
                            return !1
                    }
                }, {
                    key: "wrapCommand",
                    value: function(t) {
                        return function() {
                            this.beforeCommand(),
                            t.apply(this, arguments),
                            this.afterCommand()
                        }
                    }
                }, {
                    key: "insertImage",
                    value: function(t, e) {
                        var n, o = this;
                        return (n = t,
                        i.a.Deferred((function(t) {
                            var e = i()("<img>");
                            e.one("load", (function() {
                                e.off("error abort"),
                                t.resolve(e)
                            }
                            )).one("error abort", (function() {
                                e.off("load").detach(),
                                t.reject(e)
                            }
                            )).css({
                                display: "none"
                            }).appendTo(document.body).attr("src", n)
                        }
                        )).promise()).then((function(t) {
                            o.beforeCommand(),
                            "function" == typeof e ? e(t) : ("string" == typeof e && t.attr("data-filename", e),
                            t.css("width", Math.min(o.$editable.width(), t.width()))),
                            t.show(),
                            o.getLastRange().insertNode(t[0]),
                            o.setLastRange(wt.createFromNodeAfter(t[0]).select()),
                            o.afterCommand()
                        }
                        )).fail((function(t) {
                            o.context.triggerEvent("image.upload.error", t)
                        }
                        ))
                    }
                }, {
                    key: "insertImagesAsDataURL",
                    value: function(t) {
                        var e = this;
                        i.a.each(t, (function(t, n) {
                            var o = n.name;
                            e.options.maximumImageFileSize && e.options.maximumImageFileSize < n.size ? e.context.triggerEvent("image.upload.error", e.lang.image.maximumFileSizeError) : function(t) {
                                return i.a.Deferred((function(e) {
                                    i.a.extend(new FileReader, {
                                        onload: function(t) {
                                            var n = t.target.result;
                                            e.resolve(n)
                                        },
                                        onerror: function(t) {
                                            e.reject(t)
                                        }
                                    }).readAsDataURL(t)
                                }
                                )).promise()
                            }(n).then((function(t) {
                                return e.insertImage(t, o)
                            }
                            )).fail((function() {
                                e.context.triggerEvent("image.upload.error")
                            }
                            ))
                        }
                        ))
                    }
                }, {
                    key: "insertImagesOrCallback",
                    value: function(t) {
                        this.options.callbacks.onImageUpload ? this.context.triggerEvent("image.upload", t) : this.insertImagesAsDataURL(t)
                    }
                }, {
                    key: "getSelectedText",
                    value: function() {
                        var t = this.getLastRange();
                        return t.isOnAnchor() && (t = wt.createFromNode(pt.ancestor(t.sc, pt.isAnchor))),
                        t.toString()
                    }
                }, {
                    key: "onFormatBlock",
                    value: function(t, e) {
                        if (document.execCommand("FormatBlock", !1, m.isMSIE ? "<" + t + ">" : t),
                        e && e.length && (e[0].tagName.toUpperCase() !== t.toUpperCase() && (e = e.find(t)),
                        e && e.length)) {
                            var n = e[0].className || "";
                            if (n) {
                                var o = this.createRange();
                                i()([o.sc, o.ec]).closest(t).addClass(n)
                            }
                        }
                    }
                }, {
                    key: "formatPara",
                    value: function() {
                        this.formatBlock("P")
                    }
                }, {
                    key: "fontStyling",
                    value: function(t, e) {
                        var n = this.getLastRange();
                        if ("" !== n) {
                            var o = this.style.styleNodes(n);
                            if (this.$editor.find(".note-status-output").html(""),
                            i()(o).css(t, e),
                            n.isCollapsed()) {
                                var r = C.head(o);
                                r && !pt.nodeLength(r) && (r.innerHTML = pt.ZERO_WIDTH_NBSP_CHAR,
                                wt.createFromNode(r.firstChild).select(),
                                this.setLastRange(),
                                this.$editable.data("bogus", r))
                            } else
                                this.setLastRange(this.createRangeFromList(o).select())
                        } else {
                            var a = i.a.now();
                            this.$editor.find(".note-status-output").html('<div id="note-status-output-' + a + '" class="alert alert-info">' + this.lang.output.noSelection + "</div>"),
                            setTimeout((function() {
                                i()("#note-status-output-" + a).remove()
                            }
                            ), 5e3)
                        }
                    }
                }, {
                    key: "unlink",
                    value: function() {
                        var t = this.getLastRange();
                        if (t.isOnAnchor()) {
                            var e = pt.ancestor(t.sc, pt.isAnchor);
                            (t = wt.createFromNode(e)).select(),
                            this.setLastRange(),
                            this.beforeCommand(),
                            document.execCommand("unlink"),
                            this.afterCommand()
                        }
                    }
                }, {
                    key: "getLinkInfo",
                    value: function() {
                        var t = this.getLastRange().expand(pt.isAnchor)
                          , e = i()(C.head(t.nodes(pt.isAnchor)))
                          , n = {
                            range: t,
                            text: t.toString(),
                            url: e.length ? e.attr("href") : ""
                        };
                        return e.length && (n.isNewWindow = "_blank" === e.attr("target")),
                        n
                    }
                }, {
                    key: "addRow",
                    value: function(t) {
                        var e = this.getLastRange(this.$editable);
                        e.isCollapsed() && e.isOnCell() && (this.beforeCommand(),
                        this.table.addRow(e, t),
                        this.afterCommand())
                    }
                }, {
                    key: "addCol",
                    value: function(t) {
                        var e = this.getLastRange(this.$editable);
                        e.isCollapsed() && e.isOnCell() && (this.beforeCommand(),
                        this.table.addCol(e, t),
                        this.afterCommand())
                    }
                }, {
                    key: "deleteRow",
                    value: function() {
                        var t = this.getLastRange(this.$editable);
                        t.isCollapsed() && t.isOnCell() && (this.beforeCommand(),
                        this.table.deleteRow(t),
                        this.afterCommand())
                    }
                }, {
                    key: "deleteCol",
                    value: function() {
                        var t = this.getLastRange(this.$editable);
                        t.isCollapsed() && t.isOnCell() && (this.beforeCommand(),
                        this.table.deleteCol(t),
                        this.afterCommand())
                    }
                }, {
                    key: "deleteTable",
                    value: function() {
                        var t = this.getLastRange(this.$editable);
                        t.isCollapsed() && t.isOnCell() && (this.beforeCommand(),
                        this.table.deleteTable(t),
                        this.afterCommand())
                    }
                }, {
                    key: "resizeTo",
                    value: function(t, e, n) {
                        var o;
                        if (n) {
                            var i = t.y / t.x
                              , r = e.data("ratio");
                            o = {
                                width: r > i ? t.x : t.y / r,
                                height: r > i ? t.x * r : t.y
                            }
                        } else
                            o = {
                                width: t.x,
                                height: t.y
                            };
                        e.css(o)
                    }
                }, {
                    key: "hasFocus",
                    value: function() {
                        return this.$editable.is(":focus")
                    }
                }, {
                    key: "focus",
                    value: function() {
                        this.hasFocus() || this.$editable.focus()
                    }
                }, {
                    key: "isEmpty",
                    value: function() {
                        return pt.isEmpty(this.$editable[0]) || pt.emptyPara === this.$editable.html()
                    }
                }, {
                    key: "empty",
                    value: function() {
                        this.context.invoke("code", pt.emptyPara)
                    }
                }, {
                    key: "normalizeContent",
                    value: function() {
                        this.$editable[0].normalize()
                    }
                }]) && Dt(e.prototype, n),
                o && Dt(e, o),
                t
            }();
            function Bt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var zt = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.$editable = e.layoutInfo.editable
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "initialize",
                    value: function() {
                        this.$editable.on("paste", this.pasteByEvent.bind(this))
                    }
                }, {
                    key: "pasteByEvent",
                    value: function(t) {
                        var e = this
                          , n = t.originalEvent.clipboardData;
                        if (n && n.items && n.items.length) {
                            var o = n.items.length > 1 ? n.items[1] : C.head(n.items);
                            "file" === o.kind && -1 !== o.type.indexOf("image/") ? (this.context.invoke("editor.insertImagesOrCallback", [o.getAsFile()]),
                            t.preventDefault()) : "string" === o.kind && this.context.invoke("editor.isLimited", n.getData("Text").length) && t.preventDefault()
                        } else if (window.clipboardData) {
                            var i = window.clipboardData.getData("text");
                            this.context.invoke("editor.isLimited", i.length) && t.preventDefault()
                        }
                        setTimeout((function() {
                            e.context.invoke("editor.afterCommand")
                        }
                        ), 10)
                    }
                }]) && Bt(e.prototype, n),
                o && Bt(e, o),
                t
            }();
            function Mt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var Ot = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.$eventListener = i()(document),
                    this.$editor = e.layoutInfo.editor,
                    this.$editable = e.layoutInfo.editable,
                    this.options = e.options,
                    this.lang = this.options.langInfo,
                    this.documentEventHandlers = {},
                    this.$dropzone = i()(['<div class="note-dropzone">', '<div class="note-dropzone-message"></div>', "</div>"].join("")).prependTo(this.$editor)
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "initialize",
                    value: function() {
                        this.options.disableDragAndDrop ? (this.documentEventHandlers.onDrop = function(t) {
                            t.preventDefault()
                        }
                        ,
                        this.$eventListener = this.$dropzone,
                        this.$eventListener.on("drop", this.documentEventHandlers.onDrop)) : this.attachDragAndDropEvent()
                    }
                }, {
                    key: "attachDragAndDropEvent",
                    value: function() {
                        var t = this
                          , e = i()()
                          , n = this.$dropzone.find(".note-dropzone-message");
                        this.documentEventHandlers.onDragenter = function(o) {
                            var i = t.context.invoke("codeview.isActivated")
                              , r = t.$editor.width() > 0 && t.$editor.height() > 0;
                            i || e.length || !r || (t.$editor.addClass("dragover"),
                            t.$dropzone.width(t.$editor.width()),
                            t.$dropzone.height(t.$editor.height()),
                            n.text(t.lang.image.dragImageHere)),
                            e = e.add(o.target)
                        }
                        ,
                        this.documentEventHandlers.onDragleave = function(n) {
                            (e = e.not(n.target)).length && "BODY" !== n.target.nodeName || (e = i()(),
                            t.$editor.removeClass("dragover"))
                        }
                        ,
                        this.documentEventHandlers.onDrop = function() {
                            e = i()(),
                            t.$editor.removeClass("dragover")
                        }
                        ,
                        this.$eventListener.on("dragenter", this.documentEventHandlers.onDragenter).on("dragleave", this.documentEventHandlers.onDragleave).on("drop", this.documentEventHandlers.onDrop),
                        this.$dropzone.on("dragenter", (function() {
                            t.$dropzone.addClass("hover"),
                            n.text(t.lang.image.dropImage)
                        }
                        )).on("dragleave", (function() {
                            t.$dropzone.removeClass("hover"),
                            n.text(t.lang.image.dragImageHere)
                        }
                        )),
                        this.$dropzone.on("drop", (function(e) {
                            var n = e.originalEvent.dataTransfer;
                            e.preventDefault(),
                            n && n.files && n.files.length ? (t.$editable.focus(),
                            t.context.invoke("editor.insertImagesOrCallback", n.files)) : i.a.each(n.types, (function(e, o) {
                                if (!(o.toLowerCase().indexOf("_moz_") > -1)) {
                                    var r = n.getData(o);
                                    o.toLowerCase().indexOf("text") > -1 ? t.context.invoke("editor.pasteHTML", r) : i()(r).each((function(e, n) {
                                        t.context.invoke("editor.insertNode", n)
                                    }
                                    ))
                                }
                            }
                            ))
                        }
                        )).on("dragover", !1)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this;
                        Object.keys(this.documentEventHandlers).forEach((function(e) {
                            t.$eventListener.off(e.substr(2).toLowerCase(), t.documentEventHandlers[e])
                        }
                        )),
                        this.documentEventHandlers = {}
                    }
                }]) && Mt(e.prototype, n),
                o && Mt(e, o),
                t
            }();
            function jt(t) {
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function(t, e) {
                        if (!t)
                            return;
                        if ("string" == typeof t)
                            return Ut(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n)
                            return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return Ut(t, e)
                    }(t))) {
                        var e = 0
                          , n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return e >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[e++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, i, r = !0, a = !1;
                return {
                    s: function() {
                        o = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = o.next();
                        return r = t.done,
                        t
                    },
                    e: function(t) {
                        a = !0,
                        i = t
                    },
                    f: function() {
                        try {
                            r || null == o.return || o.return()
                        } finally {
                            if (a)
                                throw i
                        }
                    }
                }
            }
            function Ut(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, o = new Array(e); n < e; n++)
                    o[n] = t[n];
                return o
            }
            function Wt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var Kt = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.$editor = e.layoutInfo.editor,
                    this.$editable = e.layoutInfo.editable,
                    this.$codable = e.layoutInfo.codable,
                    this.options = e.options,
                    this.CodeMirrorConstructor = window.CodeMirror,
                    this.options.codemirror.CodeMirrorConstructor && (this.CodeMirrorConstructor = this.options.codemirror.CodeMirrorConstructor)
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "sync",
                    value: function(t) {
                        var e = this.isActivated()
                          , n = this.CodeMirrorConstructor;
                        e && (t ? n ? this.$codable.data("cmEditor").getDoc().setValue(t) : this.$codable.val(t) : n && this.$codable.data("cmEditor").save())
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        var t = this;
                        this.$codable.on("keyup", (function(e) {
                            e.keyCode === xt.code.ESCAPE && t.deactivate()
                        }
                        ))
                    }
                }, {
                    key: "isActivated",
                    value: function() {
                        return this.$editor.hasClass("codeview")
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        this.isActivated() ? this.deactivate() : this.activate(),
                        this.context.triggerEvent("codeview.toggled")
                    }
                }, {
                    key: "purify",
                    value: function(t) {
                        if (this.options.codeviewFilter && (t = t.replace(this.options.codeviewFilterRegex, ""),
                        this.options.codeviewIframeFilter)) {
                            var e = this.options.codeviewIframeWhitelistSrc.concat(this.options.codeviewIframeWhitelistSrcBase);
                            t = t.replace(/(<iframe.*?>.*?(?:<\/iframe>)?)/gi, (function(t) {
                                if (/<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(t))
                                    return "";
                                var n, o = jt(e);
                                try {
                                    for (o.s(); !(n = o.n()).done; ) {
                                        var i = n.value;
                                        if (new RegExp('src="(https?:)?//' + i.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + '/(.+)"').test(t))
                                            return t
                                    }
                                } catch (t) {
                                    o.e(t)
                                } finally {
                                    o.f()
                                }
                                return ""
                            }
                            ))
                        }
                        return t
                    }
                }, {
                    key: "activate",
                    value: function() {
                        var t = this
                          , e = this.CodeMirrorConstructor;
                        if (this.$codable.val(pt.html(this.$editable, this.options.prettifyHtml)),
                        this.$codable.height(this.$editable.height()),
                        this.context.invoke("toolbar.updateCodeview", !0),
                        this.context.invoke("airPopover.updateCodeview", !0),
                        this.$editor.addClass("codeview"),
                        this.$codable.focus(),
                        e) {
                            var n = e.fromTextArea(this.$codable[0], this.options.codemirror);
                            if (this.options.codemirror.tern) {
                                var o = new e.TernServer(this.options.codemirror.tern);
                                n.ternServer = o,
                                n.on("cursorActivity", (function(t) {
                                    o.updateArgHints(t)
                                }
                                ))
                            }
                            n.on("blur", (function(e) {
                                t.context.triggerEvent("blur.codeview", n.getValue(), e)
                            }
                            )),
                            n.on("change", (function() {
                                t.context.triggerEvent("change.codeview", n.getValue(), n)
                            }
                            )),
                            n.setSize(null, this.$editable.outerHeight()),
                            this.$codable.data("cmEditor", n)
                        } else
                            this.$codable.on("blur", (function(e) {
                                t.context.triggerEvent("blur.codeview", t.$codable.val(), e)
                            }
                            )),
                            this.$codable.on("input", (function() {
                                t.context.triggerEvent("change.codeview", t.$codable.val(), t.$codable)
                            }
                            ))
                    }
                }, {
                    key: "deactivate",
                    value: function() {
                        if (this.CodeMirrorConstructor) {
                            var t = this.$codable.data("cmEditor");
                            this.$codable.val(t.getValue()),
                            t.toTextArea()
                        }
                        var e = this.purify(pt.value(this.$codable, this.options.prettifyHtml) || pt.emptyPara)
                          , n = this.$editable.html() !== e;
                        this.$editable.html(e),
                        this.$editable.height(this.options.height ? this.$codable.height() : "auto"),
                        this.$editor.removeClass("codeview"),
                        n && this.context.triggerEvent("change", this.$editable.html(), this.$editable),
                        this.$editable.focus(),
                        this.context.invoke("toolbar.updateCodeview", !1),
                        this.context.invoke("airPopover.updateCodeview", !1)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.isActivated() && this.deactivate()
                    }
                }]) && Wt(e.prototype, n),
                o && Wt(e, o),
                t
            }();
            function Vt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var qt = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.$document = i()(document),
                    this.$statusbar = e.layoutInfo.statusbar,
                    this.$editable = e.layoutInfo.editable,
                    this.options = e.options
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "initialize",
                    value: function() {
                        var t = this;
                        this.options.airMode || this.options.disableResizeEditor ? this.destroy() : this.$statusbar.on("mousedown", (function(e) {
                            e.preventDefault(),
                            e.stopPropagation();
                            var n = t.$editable.offset().top - t.$document.scrollTop()
                              , o = function(e) {
                                var o = e.clientY - (n + 24);
                                o = t.options.minheight > 0 ? Math.max(o, t.options.minheight) : o,
                                o = t.options.maxHeight > 0 ? Math.min(o, t.options.maxHeight) : o,
                                t.$editable.height(o)
                            };
                            t.$document.on("mousemove", o).one("mouseup", (function() {
                                t.$document.off("mousemove", o)
                            }
                            ))
                        }
                        ))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.$statusbar.off(),
                        this.$statusbar.addClass("locked")
                    }
                }]) && Vt(e.prototype, n),
                o && Vt(e, o),
                t
            }();
            function _t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var Gt = function() {
                function t(e) {
                    var n = this;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.$editor = e.layoutInfo.editor,
                    this.$toolbar = e.layoutInfo.toolbar,
                    this.$editable = e.layoutInfo.editable,
                    this.$codable = e.layoutInfo.codable,
                    this.$window = i()(window),
                    this.$scrollbar = i()("html, body"),
                    this.onResize = function() {
                        n.resizeTo({
                            h: n.$window.height() - n.$toolbar.outerHeight()
                        })
                    }
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "resizeTo",
                    value: function(t) {
                        this.$editable.css("height", t.h),
                        this.$codable.css("height", t.h),
                        this.$codable.data("cmeditor") && this.$codable.data("cmeditor").setsize(null, t.h)
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        this.$editor.toggleClass("fullscreen"),
                        this.isFullscreen() ? (this.$editable.data("orgHeight", this.$editable.css("height")),
                        this.$editable.data("orgMaxHeight", this.$editable.css("maxHeight")),
                        this.$editable.css("maxHeight", ""),
                        this.$window.on("resize", this.onResize).trigger("resize"),
                        this.$scrollbar.css("overflow", "hidden")) : (this.$window.off("resize", this.onResize),
                        this.resizeTo({
                            h: this.$editable.data("orgHeight")
                        }),
                        this.$editable.css("maxHeight", this.$editable.css("orgMaxHeight")),
                        this.$scrollbar.css("overflow", "visible")),
                        this.context.invoke("toolbar.updateFullscreen", this.isFullscreen())
                    }
                }, {
                    key: "isFullscreen",
                    value: function() {
                        return this.$editor.hasClass("fullscreen")
                    }
                }]) && _t(e.prototype, n),
                o && _t(e, o),
                t
            }();
            function Yt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var Zt = function() {
                function t(e) {
                    var n = this;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.$document = i()(document),
                    this.$editingArea = e.layoutInfo.editingArea,
                    this.options = e.options,
                    this.lang = this.options.langInfo,
                    this.events = {
                        "summernote.mousedown": function(t, e) {
                            n.update(e.target, e) && e.preventDefault()
                        },
                        "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown": function() {
                            n.update()
                        },
                        "summernote.disable summernote.blur": function() {
                            n.hide()
                        },
                        "summernote.codeview.toggled": function() {
                            n.update()
                        }
                    }
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "initialize",
                    value: function() {
                        var t = this;
                        this.$handle = i()(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', this.options.disableResizeImage ? "note-control-holder" : "note-control-sizing", ' note-control-se"></div>', this.options.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>', "</div>", "</div>"].join("")).prependTo(this.$editingArea),
                        this.$handle.on("mousedown", (function(e) {
                            if (pt.isControlSizing(e.target)) {
                                e.preventDefault(),
                                e.stopPropagation();
                                var n = t.$handle.find(".note-control-selection").data("target")
                                  , o = n.offset()
                                  , i = t.$document.scrollTop()
                                  , r = function(e) {
                                    t.context.invoke("editor.resizeTo", {
                                        x: e.clientX - o.left,
                                        y: e.clientY - (o.top - i)
                                    }, n, !e.shiftKey),
                                    t.update(n[0], e)
                                };
                                t.$document.on("mousemove", r).one("mouseup", (function(e) {
                                    e.preventDefault(),
                                    t.$document.off("mousemove", r),
                                    t.context.invoke("editor.afterCommand")
                                }
                                )),
                                n.data("ratio") || n.data("ratio", n.height() / n.width())
                            }
                        }
                        )),
                        this.$handle.on("wheel", (function(e) {
                            e.preventDefault(),
                            t.update()
                        }
                        ))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.$handle.remove()
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        if (this.context.isDisabled())
                            return !1;
                        var n = pt.isImg(t)
                          , o = this.$handle.find(".note-control-selection");
                        if (this.context.invoke("imagePopover.update", t, e),
                        n) {
                            var r = i()(t)
                              , a = r.position()
                              , s = {
                                left: a.left + parseInt(r.css("marginLeft"), 10),
                                top: a.top + parseInt(r.css("marginTop"), 10)
                            }
                              , l = {
                                w: r.outerWidth(!1),
                                h: r.outerHeight(!1)
                            };
                            o.css({
                                display: "block",
                                left: s.left,
                                top: s.top,
                                width: l.w,
                                height: l.h
                            }).data("target", r);
                            var c = new Image;
                            c.src = r.attr("src");
                            var u = l.w + "x" + l.h + " (" + this.lang.image.original + ": " + c.width + "x" + c.height + ")";
                            o.find(".note-control-selection-info").text(u),
                            this.context.invoke("editor.saveTarget", t)
                        } else
                            this.hide();
                        return n
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.context.invoke("editor.clearTarget"),
                        this.$handle.children().hide()
                    }
                }]) && Yt(e.prototype, n),
                o && Yt(e, o),
                t
            }();
            function Xt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var Qt = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i
              , Jt = function() {
                function t(e) {
                    var n = this;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.options = e.options,
                    this.events = {
                        "summernote.keyup": function(t, e) {
                            e.isDefaultPrevented() || n.handleKeyup(e)
                        },
                        "summernote.keydown": function(t, e) {
                            n.handleKeydown(e)
                        }
                    }
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "initialize",
                    value: function() {
                        this.lastWordRange = null
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.lastWordRange = null
                    }
                }, {
                    key: "replace",
                    value: function() {
                        if (this.lastWordRange) {
                            var t = this.lastWordRange.toString()
                              , e = t.match(Qt);
                            if (e && (e[1] || e[2])) {
                                var n = e[1] ? t : "http://" + t
                                  , o = this.options.showDomainOnlyForAutolink ? t.replace(/^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:www\.)?/i, "").split("/")[0] : t
                                  , r = i()("<a />").html(o).attr("href", n)[0];
                                this.context.options.linkTargetBlank && i()(r).attr("target", "_blank"),
                                this.lastWordRange.insertNode(r),
                                this.lastWordRange = null,
                                this.context.invoke("editor.focus")
                            }
                        }
                    }
                }, {
                    key: "handleKeydown",
                    value: function(t) {
                        if (C.contains([xt.code.ENTER, xt.code.SPACE], t.keyCode)) {
                            var e = this.context.invoke("editor.createRange").getWordRange();
                            this.lastWordRange = e
                        }
                    }
                }, {
                    key: "handleKeyup",
                    value: function(t) {
                        C.contains([xt.code.ENTER, xt.code.SPACE], t.keyCode) && this.replace()
                    }
                }]) && Xt(e.prototype, n),
                o && Xt(e, o),
                t
            }();
            function te(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var ee = function() {
                function t(e) {
                    var n = this;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.$note = e.layoutInfo.note,
                    this.events = {
                        "summernote.change": function() {
                            n.$note.val(e.invoke("code"))
                        }
                    }
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "shouldInitialize",
                    value: function() {
                        return pt.isTextarea(this.$note[0])
                    }
                }]) && te(e.prototype, n),
                o && te(e, o),
                t
            }();
            function ne(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var oe = function() {
                function t(e) {
                    var n = this;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.options = e.options.replace || {},
                    this.keys = [xt.code.ENTER, xt.code.SPACE, xt.code.PERIOD, xt.code.COMMA, xt.code.SEMICOLON, xt.code.SLASH],
                    this.previousKeydownCode = null,
                    this.events = {
                        "summernote.keyup": function(t, e) {
                            e.isDefaultPrevented() || n.handleKeyup(e)
                        },
                        "summernote.keydown": function(t, e) {
                            n.handleKeydown(e)
                        }
                    }
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "shouldInitialize",
                    value: function() {
                        return !!this.options.match
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        this.lastWord = null
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.lastWord = null
                    }
                }, {
                    key: "replace",
                    value: function() {
                        if (this.lastWord) {
                            var t = this
                              , e = this.lastWord.toString();
                            this.options.match(e, (function(e) {
                                if (e) {
                                    var n = "";
                                    if ("string" == typeof e ? n = pt.createText(e) : e instanceof jQuery ? n = e[0] : e instanceof Node && (n = e),
                                    !n)
                                        return;
                                    t.lastWord.insertNode(n),
                                    t.lastWord = null,
                                    t.context.invoke("editor.focus")
                                }
                            }
                            ))
                        }
                    }
                }, {
                    key: "handleKeydown",
                    value: function(t) {
                        if (this.previousKeydownCode && C.contains(this.keys, this.previousKeydownCode))
                            this.previousKeydownCode = t.keyCode;
                        else {
                            if (C.contains(this.keys, t.keyCode)) {
                                var e = this.context.invoke("editor.createRange").getWordRange();
                                this.lastWord = e
                            }
                            this.previousKeydownCode = t.keyCode
                        }
                    }
                }, {
                    key: "handleKeyup",
                    value: function(t) {
                        C.contains(this.keys, t.keyCode) && this.replace()
                    }
                }]) && ne(e.prototype, n),
                o && ne(e, o),
                t
            }();
            function ie(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var re = function() {
                function t(e) {
                    var n = this;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.$editingArea = e.layoutInfo.editingArea,
                    this.options = e.options,
                    !0 === this.options.inheritPlaceholder && (this.options.placeholder = this.context.$note.attr("placeholder") || this.options.placeholder),
                    this.events = {
                        "summernote.init summernote.change": function() {
                            n.update()
                        },
                        "summernote.codeview.toggled": function() {
                            n.update()
                        }
                    }
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "shouldInitialize",
                    value: function() {
                        return !!this.options.placeholder
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        var t = this;
                        this.$placeholder = i()('<div class="note-placeholder">'),
                        this.$placeholder.on("click", (function() {
                            t.context.invoke("focus")
                        }
                        )).html(this.options.placeholder).prependTo(this.$editingArea),
                        this.update()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.$placeholder.remove()
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = !this.context.invoke("codeview.isActivated") && this.context.invoke("editor.isEmpty");
                        this.$placeholder.toggle(t)
                    }
                }]) && ie(e.prototype, n),
                o && ie(e, o),
                t
            }();
            function ae(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var se = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.ui = i.a.summernote.ui,
                    this.context = e,
                    this.$toolbar = e.layoutInfo.toolbar,
                    this.options = e.options,
                    this.lang = this.options.langInfo,
                    this.invertedKeyMap = g.invertObject(this.options.keyMap[m.isMac ? "mac" : "pc"])
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "representShortcut",
                    value: function(t) {
                        var e = this.invertedKeyMap[t];
                        return this.options.shortcuts && e ? (m.isMac && (e = e.replace("CMD", "⌘").replace("SHIFT", "⇧")),
                        " (" + (e = e.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")) + ")") : ""
                    }
                }, {
                    key: "button",
                    value: function(t) {
                        return !this.options.tooltip && t.tooltip && delete t.tooltip,
                        t.container = this.options.container,
                        this.ui.button(t)
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        this.addToolbarButtons(),
                        this.addImagePopoverButtons(),
                        this.addLinkPopoverButtons(),
                        this.addTablePopoverButtons(),
                        this.fontInstalledMap = {}
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        delete this.fontInstalledMap
                    }
                }, {
                    key: "isFontInstalled",
                    value: function(t) {
                        return Object.prototype.hasOwnProperty.call(this.fontInstalledMap, t) || (this.fontInstalledMap[t] = m.isFontInstalled(t) || C.contains(this.options.fontNamesIgnoreCheck, t)),
                        this.fontInstalledMap[t]
                    }
                }, {
                    key: "isFontDeservedToAdd",
                    value: function(t) {
                        return "" !== (t = t.toLowerCase()) && this.isFontInstalled(t) && -1 === m.genericFontFamilies.indexOf(t)
                    }
                }, {
                    key: "colorPalette",
                    value: function(t, e, n, o) {
                        var r = this;
                        return this.ui.buttonGroup({
                            className: "note-color " + t,
                            children: [this.button({
                                className: "note-current-color-button",
                                contents: this.ui.icon(this.options.icons.font + " note-recent-color"),
                                tooltip: e,
                                click: function(t) {
                                    var e = i()(t.currentTarget);
                                    n && o ? r.context.invoke("editor.color", {
                                        backColor: e.attr("data-backColor"),
                                        foreColor: e.attr("data-foreColor")
                                    }) : n ? r.context.invoke("editor.color", {
                                        backColor: e.attr("data-backColor")
                                    }) : o && r.context.invoke("editor.color", {
                                        foreColor: e.attr("data-foreColor")
                                    })
                                },
                                callback: function(t) {
                                    var e = t.find(".note-recent-color");
                                    n && (e.css("background-color", r.options.colorButton.backColor),
                                    t.attr("data-backColor", r.options.colorButton.backColor)),
                                    o ? (e.css("color", r.options.colorButton.foreColor),
                                    t.attr("data-foreColor", r.options.colorButton.foreColor)) : e.css("color", "transparent")
                                }
                            }), this.button({
                                className: "dropdown-toggle",
                                contents: this.ui.dropdownButtonContents("", this.options),
                                tooltip: this.lang.color.more,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), this.ui.dropdown({
                                items: (n ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.background + "</div>", "<div>", '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="backColor" data-value="transparent">', this.lang.color.transparent, "</button>", "</div>", '<div class="note-holder" data-event="backColor">\x3c!-- back colors --\x3e</div>', "<div>", '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="backColorPicker">', this.lang.color.cpSelect, "</button>", '<input type="color" id="backColorPicker" class="note-btn note-color-select-btn" value="' + this.options.colorButton.backColor + '" data-event="backColorPalette">', "</div>", '<div class="note-holder-custom" id="backColorPalette" data-event="backColor"></div>', "</div>"].join("") : "") + (o ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.foreground + "</div>", "<div>", '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="removeFormat" data-value="foreColor">', this.lang.color.resetToDefault, "</button>", "</div>", '<div class="note-holder" data-event="foreColor">\x3c!-- fore colors --\x3e</div>', "<div>", '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="foreColorPicker">', this.lang.color.cpSelect, "</button>", '<input type="color" id="foreColorPicker" class="note-btn note-color-select-btn" value="' + this.options.colorButton.foreColor + '" data-event="foreColorPalette">', "</div>", '<div class="note-holder-custom" id="foreColorPalette" data-event="foreColor"></div>', "</div>"].join("") : ""),
                                callback: function(t) {
                                    t.find(".note-holder").each((function(t, e) {
                                        var n = i()(e);
                                        n.append(r.ui.palette({
                                            colors: r.options.colors,
                                            colorsName: r.options.colorsName,
                                            eventName: n.data("event"),
                                            container: r.options.container,
                                            tooltip: r.options.tooltip
                                        }).render())
                                    }
                                    ));
                                    var e = [["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]];
                                    t.find(".note-holder-custom").each((function(t, n) {
                                        var o = i()(n);
                                        o.append(r.ui.palette({
                                            colors: e,
                                            colorsName: e,
                                            eventName: o.data("event"),
                                            container: r.options.container,
                                            tooltip: r.options.tooltip
                                        }).render())
                                    }
                                    )),
                                    t.find("input[type=color]").each((function(e, n) {
                                        i()(n).change((function() {
                                            var e = t.find("#" + i()(this).data("event")).find(".note-color-btn").first()
                                              , n = this.value.toUpperCase();
                                            e.css("background-color", n).attr("aria-label", n).attr("data-value", n).attr("data-original-title", n),
                                            e.click()
                                        }
                                        ))
                                    }
                                    ))
                                },
                                click: function(e) {
                                    e.stopPropagation();
                                    var n = i()("." + t).find(".note-dropdown-menu")
                                      , o = i()(e.target)
                                      , a = o.data("event")
                                      , s = o.attr("data-value");
                                    if ("openPalette" === a) {
                                        var l = n.find("#" + s)
                                          , c = i()(n.find("#" + l.data("event")).find(".note-color-row")[0])
                                          , u = c.find(".note-color-btn").last().detach()
                                          , d = l.val();
                                        u.css("background-color", d).attr("aria-label", d).attr("data-value", d).attr("data-original-title", d),
                                        c.prepend(u),
                                        l.click()
                                    } else {
                                        if (C.contains(["backColor", "foreColor"], a)) {
                                            var h = "backColor" === a ? "background-color" : "color"
                                              , f = o.closest(".note-color").find(".note-recent-color")
                                              , p = o.closest(".note-color").find(".note-current-color-button");
                                            f.css(h, s),
                                            p.attr("data-" + a, s)
                                        }
                                        r.context.invoke("editor." + a, s)
                                    }
                                }
                            })]
                        }).render()
                    }
                }, {
                    key: "addToolbarButtons",
                    value: function() {
                        var t = this;
                        this.context.memo("button.style", (function() {
                            return t.ui.buttonGroup([t.button({
                                className: "dropdown-toggle",
                                contents: t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.magic), t.options),
                                tooltip: t.lang.style.style,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), t.ui.dropdown({
                                className: "dropdown-style",
                                items: t.options.styleTags,
                                title: t.lang.style.style,
                                template: function(e) {
                                    "string" == typeof e && (e = {
                                        tag: e,
                                        title: Object.prototype.hasOwnProperty.call(t.lang.style, e) ? t.lang.style[e] : e
                                    });
                                    var n = e.tag
                                      , o = e.title;
                                    return "<" + n + (e.style ? ' style="' + e.style + '" ' : "") + (e.className ? ' class="' + e.className + '"' : "") + ">" + o + "</" + n + ">"
                                },
                                click: t.context.createInvokeHandler("editor.formatBlock")
                            })]).render()
                        }
                        ));
                        for (var e = function(e, n) {
                            var o = t.options.styleTags[e];
                            t.context.memo("button.style." + o, (function() {
                                return t.button({
                                    className: "note-btn-style-" + o,
                                    contents: '<div data-value="' + o + '">' + o.toUpperCase() + "</div>",
                                    tooltip: t.lang.style[o],
                                    click: t.context.createInvokeHandler("editor.formatBlock")
                                }).render()
                            }
                            ))
                        }, n = 0, o = this.options.styleTags.length; n < o; n++)
                            e(n);
                        this.context.memo("button.bold", (function() {
                            return t.button({
                                className: "note-btn-bold",
                                contents: t.ui.icon(t.options.icons.bold),
                                tooltip: t.lang.font.bold + t.representShortcut("bold"),
                                click: t.context.createInvokeHandlerAndUpdateState("editor.bold")
                            }).render()
                        }
                        )),
                        this.context.memo("button.italic", (function() {
                            return t.button({
                                className: "note-btn-italic",
                                contents: t.ui.icon(t.options.icons.italic),
                                tooltip: t.lang.font.italic + t.representShortcut("italic"),
                                click: t.context.createInvokeHandlerAndUpdateState("editor.italic")
                            }).render()
                        }
                        )),
                        this.context.memo("button.underline", (function() {
                            return t.button({
                                className: "note-btn-underline",
                                contents: t.ui.icon(t.options.icons.underline),
                                tooltip: t.lang.font.underline + t.representShortcut("underline"),
                                click: t.context.createInvokeHandlerAndUpdateState("editor.underline")
                            }).render()
                        }
                        )),
                        this.context.memo("button.clear", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.eraser),
                                tooltip: t.lang.font.clear + t.representShortcut("removeFormat"),
                                click: t.context.createInvokeHandler("editor.removeFormat")
                            }).render()
                        }
                        )),
                        this.context.memo("button.strikethrough", (function() {
                            return t.button({
                                className: "note-btn-strikethrough",
                                contents: t.ui.icon(t.options.icons.strikethrough),
                                tooltip: t.lang.font.strikethrough + t.representShortcut("strikethrough"),
                                click: t.context.createInvokeHandlerAndUpdateState("editor.strikethrough")
                            }).render()
                        }
                        )),
                        this.context.memo("button.superscript", (function() {
                            return t.button({
                                className: "note-btn-superscript",
                                contents: t.ui.icon(t.options.icons.superscript),
                                tooltip: t.lang.font.superscript,
                                click: t.context.createInvokeHandlerAndUpdateState("editor.superscript")
                            }).render()
                        }
                        )),
                        this.context.memo("button.subscript", (function() {
                            return t.button({
                                className: "note-btn-subscript",
                                contents: t.ui.icon(t.options.icons.subscript),
                                tooltip: t.lang.font.subscript,
                                click: t.context.createInvokeHandlerAndUpdateState("editor.subscript")
                            }).render()
                        }
                        )),
                        this.context.memo("button.fontname", (function() {
                            var e = t.context.invoke("editor.currentStyle");
                            return t.options.addDefaultFonts && i.a.each(e["font-family"].split(","), (function(e, n) {
                                n = n.trim().replace(/['"]+/g, ""),
                                t.isFontDeservedToAdd(n) && -1 === t.options.fontNames.indexOf(n) && t.options.fontNames.push(n)
                            }
                            )),
                            t.ui.buttonGroup([t.button({
                                className: "dropdown-toggle",
                                contents: t.ui.dropdownButtonContents('<span class="note-current-fontname"></span>', t.options),
                                tooltip: t.lang.font.name,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), t.ui.dropdownCheck({
                                className: "dropdown-fontname",
                                checkClassName: t.options.icons.menuCheck,
                                items: t.options.fontNames.filter(t.isFontInstalled.bind(t)),
                                title: t.lang.font.name,
                                template: function(t) {
                                    return '<span style="font-family: ' + m.validFontName(t) + '">' + t + "</span>"
                                },
                                click: t.context.createInvokeHandlerAndUpdateState("editor.fontName")
                            })]).render()
                        }
                        )),
                        this.context.memo("button.fontsize", (function() {
                            return t.ui.buttonGroup([t.button({
                                className: "dropdown-toggle",
                                contents: t.ui.dropdownButtonContents('<span class="note-current-fontsize"></span>', t.options),
                                tooltip: t.lang.font.size,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), t.ui.dropdownCheck({
                                className: "dropdown-fontsize",
                                checkClassName: t.options.icons.menuCheck,
                                items: t.options.fontSizes,
                                title: t.lang.font.size,
                                click: t.context.createInvokeHandlerAndUpdateState("editor.fontSize")
                            })]).render()
                        }
                        )),
                        this.context.memo("button.fontsizeunit", (function() {
                            return t.ui.buttonGroup([t.button({
                                className: "dropdown-toggle",
                                contents: t.ui.dropdownButtonContents('<span class="note-current-fontsizeunit"></span>', t.options),
                                tooltip: t.lang.font.sizeunit,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), t.ui.dropdownCheck({
                                className: "dropdown-fontsizeunit",
                                checkClassName: t.options.icons.menuCheck,
                                items: t.options.fontSizeUnits,
                                title: t.lang.font.sizeunit,
                                click: t.context.createInvokeHandlerAndUpdateState("editor.fontSizeUnit")
                            })]).render()
                        }
                        )),
                        this.context.memo("button.color", (function() {
                            return t.colorPalette("note-color-all", t.lang.color.recent, !0, !0)
                        }
                        )),
                        this.context.memo("button.forecolor", (function() {
                            return t.colorPalette("note-color-fore", t.lang.color.foreground, !1, !0)
                        }
                        )),
                        this.context.memo("button.backcolor", (function() {
                            return t.colorPalette("note-color-back", t.lang.color.background, !0, !1)
                        }
                        )),
                        this.context.memo("button.ul", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.unorderedlist),
                                tooltip: t.lang.lists.unordered + t.representShortcut("insertUnorderedList"),
                                click: t.context.createInvokeHandler("editor.insertUnorderedList")
                            }).render()
                        }
                        )),
                        this.context.memo("button.ol", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.orderedlist),
                                tooltip: t.lang.lists.ordered + t.representShortcut("insertOrderedList"),
                                click: t.context.createInvokeHandler("editor.insertOrderedList")
                            }).render()
                        }
                        ));
                        var r = this.button({
                            contents: this.ui.icon(this.options.icons.alignLeft),
                            tooltip: this.lang.paragraph.left + this.representShortcut("justifyLeft"),
                            click: this.context.createInvokeHandler("editor.justifyLeft")
                        })
                          , a = this.button({
                            contents: this.ui.icon(this.options.icons.alignCenter),
                            tooltip: this.lang.paragraph.center + this.representShortcut("justifyCenter"),
                            click: this.context.createInvokeHandler("editor.justifyCenter")
                        })
                          , s = this.button({
                            contents: this.ui.icon(this.options.icons.alignRight),
                            tooltip: this.lang.paragraph.right + this.representShortcut("justifyRight"),
                            click: this.context.createInvokeHandler("editor.justifyRight")
                        })
                          , l = this.button({
                            contents: this.ui.icon(this.options.icons.alignJustify),
                            tooltip: this.lang.paragraph.justify + this.representShortcut("justifyFull"),
                            click: this.context.createInvokeHandler("editor.justifyFull")
                        })
                          , c = this.button({
                            contents: this.ui.icon(this.options.icons.outdent),
                            tooltip: this.lang.paragraph.outdent + this.representShortcut("outdent"),
                            click: this.context.createInvokeHandler("editor.outdent")
                        })
                          , u = this.button({
                            contents: this.ui.icon(this.options.icons.indent),
                            tooltip: this.lang.paragraph.indent + this.representShortcut("indent"),
                            click: this.context.createInvokeHandler("editor.indent")
                        });
                        this.context.memo("button.justifyLeft", g.invoke(r, "render")),
                        this.context.memo("button.justifyCenter", g.invoke(a, "render")),
                        this.context.memo("button.justifyRight", g.invoke(s, "render")),
                        this.context.memo("button.justifyFull", g.invoke(l, "render")),
                        this.context.memo("button.outdent", g.invoke(c, "render")),
                        this.context.memo("button.indent", g.invoke(u, "render")),
                        this.context.memo("button.paragraph", (function() {
                            return t.ui.buttonGroup([t.button({
                                className: "dropdown-toggle",
                                contents: t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.alignLeft), t.options),
                                tooltip: t.lang.paragraph.paragraph,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), t.ui.dropdown([t.ui.buttonGroup({
                                className: "note-align",
                                children: [r, a, s, l]
                            }), t.ui.buttonGroup({
                                className: "note-list",
                                children: [c, u]
                            })])]).render()
                        }
                        )),
                        this.context.memo("button.height", (function() {
                            return t.ui.buttonGroup([t.button({
                                className: "dropdown-toggle",
                                contents: t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.textHeight), t.options),
                                tooltip: t.lang.font.height,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), t.ui.dropdownCheck({
                                items: t.options.lineHeights,
                                checkClassName: t.options.icons.menuCheck,
                                className: "dropdown-line-height",
                                title: t.lang.font.height,
                                click: t.context.createInvokeHandler("editor.lineHeight")
                            })]).render()
                        }
                        )),
                        this.context.memo("button.table", (function() {
                            return t.ui.buttonGroup([t.button({
                                className: "dropdown-toggle",
                                contents: t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.table), t.options),
                                tooltip: t.lang.table.table,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), t.ui.dropdown({
                                title: t.lang.table.table,
                                className: "note-table",
                                items: ['<div class="note-dimension-picker">', '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>', '<div class="note-dimension-picker-highlighted"></div>', '<div class="note-dimension-picker-unhighlighted"></div>', "</div>", '<div class="note-dimension-display">1 x 1</div>'].join("")
                            })], {
                                callback: function(e) {
                                    e.find(".note-dimension-picker-mousecatcher").css({
                                        width: t.options.insertTableMaxSize.col + "em",
                                        height: t.options.insertTableMaxSize.row + "em"
                                    }).mousedown(t.context.createInvokeHandler("editor.insertTable")).on("mousemove", t.tableMoveHandler.bind(t))
                                }
                            }).render()
                        }
                        )),
                        this.context.memo("button.link", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.link),
                                tooltip: t.lang.link.link + t.representShortcut("linkDialog.show"),
                                click: t.context.createInvokeHandler("linkDialog.show")
                            }).render()
                        }
                        )),
                        this.context.memo("button.picture", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.picture),
                                tooltip: t.lang.image.image,
                                click: t.context.createInvokeHandler("imageDialog.show")
                            }).render()
                        }
                        )),
                        this.context.memo("button.video", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.video),
                                tooltip: t.lang.video.video,
                                click: t.context.createInvokeHandler("videoDialog.show")
                            }).render()
                        }
                        )),
                        this.context.memo("button.hr", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.minus),
                                tooltip: t.lang.hr.insert + t.representShortcut("insertHorizontalRule"),
                                click: t.context.createInvokeHandler("editor.insertHorizontalRule")
                            }).render()
                        }
                        )),
                        this.context.memo("button.fullscreen", (function() {
                            return t.button({
                                className: "btn-fullscreen note-codeview-keep",
                                contents: t.ui.icon(t.options.icons.arrowsAlt),
                                tooltip: t.lang.options.fullscreen,
                                click: t.context.createInvokeHandler("fullscreen.toggle")
                            }).render()
                        }
                        )),
                        this.context.memo("button.codeview", (function() {
                            return t.button({
                                className: "btn-codeview note-codeview-keep",
                                contents: t.ui.icon(t.options.icons.code),
                                tooltip: t.lang.options.codeview,
                                click: t.context.createInvokeHandler("codeview.toggle")
                            }).render()
                        }
                        )),
                        this.context.memo("button.redo", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.redo),
                                tooltip: t.lang.history.redo + t.representShortcut("redo"),
                                click: t.context.createInvokeHandler("editor.redo")
                            }).render()
                        }
                        )),
                        this.context.memo("button.undo", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.undo),
                                tooltip: t.lang.history.undo + t.representShortcut("undo"),
                                click: t.context.createInvokeHandler("editor.undo")
                            }).render()
                        }
                        )),
                        this.context.memo("button.help", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.question),
                                tooltip: t.lang.options.help,
                                click: t.context.createInvokeHandler("helpDialog.show")
                            }).render()
                        }
                        ))
                    }
                }, {
                    key: "addImagePopoverButtons",
                    value: function() {
                        var t = this;
                        this.context.memo("button.resizeFull", (function() {
                            return t.button({
                                contents: '<span class="note-fontsize-10">100%</span>',
                                tooltip: t.lang.image.resizeFull,
                                click: t.context.createInvokeHandler("editor.resize", "1")
                            }).render()
                        }
                        )),
                        this.context.memo("button.resizeHalf", (function() {
                            return t.button({
                                contents: '<span class="note-fontsize-10">50%</span>',
                                tooltip: t.lang.image.resizeHalf,
                                click: t.context.createInvokeHandler("editor.resize", "0.5")
                            }).render()
                        }
                        )),
                        this.context.memo("button.resizeQuarter", (function() {
                            return t.button({
                                contents: '<span class="note-fontsize-10">25%</span>',
                                tooltip: t.lang.image.resizeQuarter,
                                click: t.context.createInvokeHandler("editor.resize", "0.25")
                            }).render()
                        }
                        )),
                        this.context.memo("button.resizeNone", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.rollback),
                                tooltip: t.lang.image.resizeNone,
                                click: t.context.createInvokeHandler("editor.resize", "0")
                            }).render()
                        }
                        )),
                        this.context.memo("button.floatLeft", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.floatLeft),
                                tooltip: t.lang.image.floatLeft,
                                click: t.context.createInvokeHandler("editor.floatMe", "left")
                            }).render()
                        }
                        )),
                        this.context.memo("button.floatRight", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.floatRight),
                                tooltip: t.lang.image.floatRight,
                                click: t.context.createInvokeHandler("editor.floatMe", "right")
                            }).render()
                        }
                        )),
                        this.context.memo("button.floatNone", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.rollback),
                                tooltip: t.lang.image.floatNone,
                                click: t.context.createInvokeHandler("editor.floatMe", "none")
                            }).render()
                        }
                        )),
                        this.context.memo("button.removeMedia", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.trash),
                                tooltip: t.lang.image.remove,
                                click: t.context.createInvokeHandler("editor.removeMedia")
                            }).render()
                        }
                        ))
                    }
                }, {
                    key: "addLinkPopoverButtons",
                    value: function() {
                        var t = this;
                        this.context.memo("button.linkDialogShow", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.link),
                                tooltip: t.lang.link.edit,
                                click: t.context.createInvokeHandler("linkDialog.show")
                            }).render()
                        }
                        )),
                        this.context.memo("button.unlink", (function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.unlink),
                                tooltip: t.lang.link.unlink,
                                click: t.context.createInvokeHandler("editor.unlink")
                            }).render()
                        }
                        ))
                    }
                }, {
                    key: "addTablePopoverButtons",
                    value: function() {
                        var t = this;
                        this.context.memo("button.addRowUp", (function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.rowAbove),
                                tooltip: t.lang.table.addRowAbove,
                                click: t.context.createInvokeHandler("editor.addRow", "top")
                            }).render()
                        }
                        )),
                        this.context.memo("button.addRowDown", (function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.rowBelow),
                                tooltip: t.lang.table.addRowBelow,
                                click: t.context.createInvokeHandler("editor.addRow", "bottom")
                            }).render()
                        }
                        )),
                        this.context.memo("button.addColLeft", (function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.colBefore),
                                tooltip: t.lang.table.addColLeft,
                                click: t.context.createInvokeHandler("editor.addCol", "left")
                            }).render()
                        }
                        )),
                        this.context.memo("button.addColRight", (function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.colAfter),
                                tooltip: t.lang.table.addColRight,
                                click: t.context.createInvokeHandler("editor.addCol", "right")
                            }).render()
                        }
                        )),
                        this.context.memo("button.deleteRow", (function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.rowRemove),
                                tooltip: t.lang.table.delRow,
                                click: t.context.createInvokeHandler("editor.deleteRow")
                            }).render()
                        }
                        )),
                        this.context.memo("button.deleteCol", (function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.colRemove),
                                tooltip: t.lang.table.delCol,
                                click: t.context.createInvokeHandler("editor.deleteCol")
                            }).render()
                        }
                        )),
                        this.context.memo("button.deleteTable", (function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.trash),
                                tooltip: t.lang.table.delTable,
                                click: t.context.createInvokeHandler("editor.deleteTable")
                            }).render()
                        }
                        ))
                    }
                }, {
                    key: "build",
                    value: function(t, e) {
                        for (var n = 0, o = e.length; n < o; n++) {
                            for (var i = e[n], r = Array.isArray(i) ? i[0] : i, a = Array.isArray(i) ? 1 === i.length ? [i[0]] : i[1] : [i], s = this.ui.buttonGroup({
                                className: "note-" + r
                            }).render(), l = 0, c = a.length; l < c; l++) {
                                var u = this.context.memo("button." + a[l]);
                                u && s.append("function" == typeof u ? u(this.context) : u)
                            }
                            s.appendTo(t)
                        }
                    }
                }, {
                    key: "updateCurrentStyle",
                    value: function(t) {
                        var e = this
                          , n = t || this.$toolbar
                          , o = this.context.invoke("editor.currentStyle");
                        if (this.updateBtnStates(n, {
                            ".note-btn-bold": function() {
                                return "bold" === o["font-bold"]
                            },
                            ".note-btn-italic": function() {
                                return "italic" === o["font-italic"]
                            },
                            ".note-btn-underline": function() {
                                return "underline" === o["font-underline"]
                            },
                            ".note-btn-subscript": function() {
                                return "subscript" === o["font-subscript"]
                            },
                            ".note-btn-superscript": function() {
                                return "superscript" === o["font-superscript"]
                            },
                            ".note-btn-strikethrough": function() {
                                return "strikethrough" === o["font-strikethrough"]
                            }
                        }),
                        o["font-family"]) {
                            var r = o["font-family"].split(",").map((function(t) {
                                return t.replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, "")
                            }
                            ))
                              , a = C.find(r, this.isFontInstalled.bind(this));
                            n.find(".dropdown-fontname a").each((function(t, e) {
                                var n = i()(e)
                                  , o = n.data("value") + "" == a + "";
                                n.toggleClass("checked", o)
                            }
                            )),
                            n.find(".note-current-fontname").text(a).css("font-family", a)
                        }
                        if (o["font-size"]) {
                            var s = o["font-size"];
                            n.find(".dropdown-fontsize a").each((function(t, e) {
                                var n = i()(e)
                                  , o = n.data("value") + "" == s + "";
                                n.toggleClass("checked", o)
                            }
                            )),
                            n.find(".note-current-fontsize").text(s);
                            var l = o["font-size-unit"];
                            n.find(".dropdown-fontsizeunit a").each((function(t, e) {
                                var n = i()(e)
                                  , o = n.data("value") + "" == l + "";
                                n.toggleClass("checked", o)
                            }
                            )),
                            n.find(".note-current-fontsizeunit").text(l)
                        }
                        if (o["line-height"]) {
                            var c = o["line-height"];
                            n.find(".dropdown-line-height li a").each((function(t, n) {
                                var o = i()(n).data("value") + "" == c + "";
                                e.className = o ? "checked" : ""
                            }
                            ))
                        }
                    }
                }, {
                    key: "updateBtnStates",
                    value: function(t, e) {
                        var n = this;
                        i.a.each(e, (function(e, o) {
                            n.ui.toggleBtnActive(t.find(e), o())
                        }
                        ))
                    }
                }, {
                    key: "tableMoveHandler",
                    value: function(t) {
                        var e, n = i()(t.target.parentNode), o = n.next(), r = n.find(".note-dimension-picker-mousecatcher"), a = n.find(".note-dimension-picker-highlighted"), s = n.find(".note-dimension-picker-unhighlighted");
                        if (void 0 === t.offsetX) {
                            var l = i()(t.target).offset();
                            e = {
                                x: t.pageX - l.left,
                                y: t.pageY - l.top
                            }
                        } else
                            e = {
                                x: t.offsetX,
                                y: t.offsetY
                            };
                        var c = Math.ceil(e.x / 18) || 1
                          , u = Math.ceil(e.y / 18) || 1;
                        a.css({
                            width: c + "em",
                            height: u + "em"
                        }),
                        r.data("value", c + "x" + u),
                        c > 3 && c < this.options.insertTableMaxSize.col && s.css({
                            width: c + 1 + "em"
                        }),
                        u > 3 && u < this.options.insertTableMaxSize.row && s.css({
                            height: u + 1 + "em"
                        }),
                        o.html(c + " x " + u)
                    }
                }]) && ae(e.prototype, n),
                o && ae(e, o),
                t
            }();
            function le(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var ce = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.$window = i()(window),
                    this.$document = i()(document),
                    this.ui = i.a.summernote.ui,
                    this.$note = e.layoutInfo.note,
                    this.$editor = e.layoutInfo.editor,
                    this.$toolbar = e.layoutInfo.toolbar,
                    this.$editable = e.layoutInfo.editable,
                    this.$statusbar = e.layoutInfo.statusbar,
                    this.options = e.options,
                    this.isFollowing = !1,
                    this.followScroll = this.followScroll.bind(this)
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "shouldInitialize",
                    value: function() {
                        return !this.options.airMode
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        var t = this;
                        this.options.toolbar = this.options.toolbar || [],
                        this.options.toolbar.length ? this.context.invoke("buttons.build", this.$toolbar, this.options.toolbar) : this.$toolbar.hide(),
                        this.options.toolbarContainer && this.$toolbar.appendTo(this.options.toolbarContainer),
                        this.changeContainer(!1),
                        this.$note.on("summernote.keyup summernote.mouseup summernote.change", (function() {
                            t.context.invoke("buttons.updateCurrentStyle")
                        }
                        )),
                        this.context.invoke("buttons.updateCurrentStyle"),
                        this.options.followingToolbar && this.$window.on("scroll resize", this.followScroll)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.$toolbar.children().remove(),
                        this.options.followingToolbar && this.$window.off("scroll resize", this.followScroll)
                    }
                }, {
                    key: "followScroll",
                    value: function() {
                        if (this.$editor.hasClass("fullscreen"))
                            return !1;
                        var t = this.$editor.outerHeight()
                          , e = this.$editor.width()
                          , n = this.$toolbar.height()
                          , o = this.$statusbar.height()
                          , r = 0;
                        this.options.otherStaticBar && (r = i()(this.options.otherStaticBar).outerHeight());
                        var a = this.$document.scrollTop()
                          , s = this.$editor.offset().top
                          , l = s - r
                          , c = s + t - r - n - o;
                        !this.isFollowing && a > l && a < c - n ? (this.isFollowing = !0,
                        this.$editable.css({
                            marginTop: this.$toolbar.outerHeight()
                        }),
                        this.$toolbar.css({
                            position: "fixed",
                            top: r,
                            width: e,
                            zIndex: 1e3
                        })) : this.isFollowing && (a < l || a > c) && (this.isFollowing = !1,
                        this.$toolbar.css({
                            position: "relative",
                            top: 0,
                            width: "100%",
                            zIndex: "auto"
                        }),
                        this.$editable.css({
                            marginTop: ""
                        }))
                    }
                }, {
                    key: "changeContainer",
                    value: function(t) {
                        t ? this.$toolbar.prependTo(this.$editor) : this.options.toolbarContainer && this.$toolbar.appendTo(this.options.toolbarContainer),
                        this.options.followingToolbar && this.followScroll()
                    }
                }, {
                    key: "updateFullscreen",
                    value: function(t) {
                        this.ui.toggleBtnActive(this.$toolbar.find(".btn-fullscreen"), t),
                        this.changeContainer(t)
                    }
                }, {
                    key: "updateCodeview",
                    value: function(t) {
                        this.ui.toggleBtnActive(this.$toolbar.find(".btn-codeview"), t),
                        t ? this.deactivate() : this.activate()
                    }
                }, {
                    key: "activate",
                    value: function(t) {
                        var e = this.$toolbar.find("button");
                        t || (e = e.not(".note-codeview-keep")),
                        this.ui.toggleBtn(e, !0)
                    }
                }, {
                    key: "deactivate",
                    value: function(t) {
                        var e = this.$toolbar.find("button");
                        t || (e = e.not(".note-codeview-keep")),
                        this.ui.toggleBtn(e, !1)
                    }
                }]) && le(e.prototype, n),
                o && le(e, o),
                t
            }();
            function ue(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var de = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.ui = i.a.summernote.ui,
                    this.$body = i()(document.body),
                    this.$editor = e.layoutInfo.editor,
                    this.options = e.options,
                    this.lang = this.options.langInfo,
                    e.memo("help.linkDialog.show", this.options.langInfo.help["linkDialog.show"])
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "initialize",
                    value: function() {
                        var t = this.options.dialogsInBody ? this.$body : this.options.container
                          , e = ['<div class="form-group note-form-group">', '<label for="note-dialog-link-txt-'.concat(this.options.id, '" class="note-form-label">').concat(this.lang.link.textToDisplay, "</label>"), '<input id="note-dialog-link-txt-'.concat(this.options.id, '" class="note-link-text form-control note-form-control note-input" type="text"/>'), "</div>", '<div class="form-group note-form-group">', '<label for="note-dialog-link-url-'.concat(this.options.id, '" class="note-form-label">').concat(this.lang.link.url, "</label>"), '<input id="note-dialog-link-url-'.concat(this.options.id, '" class="note-link-url form-control note-form-control note-input" type="text" value="http://"/>'), "</div>", this.options.disableLinkTarget ? "" : i()("<div/>").append(this.ui.checkbox({
                            className: "sn-checkbox-open-in-new-window",
                            text: this.lang.link.openInNewWindow,
                            checked: !0
                        }).render()).html(), i()("<div/>").append(this.ui.checkbox({
                            className: "sn-checkbox-use-protocol",
                            text: this.lang.link.useProtocol,
                            checked: !0
                        }).render()).html()].join("")
                          , n = '<input type="button" href="#" class="'.concat("btn btn-primary note-btn note-btn-primary note-link-btn", '" value="').concat(this.lang.link.insert, '" disabled>');
                        this.$dialog = this.ui.dialog({
                            className: "link-dialog",
                            title: this.lang.link.insert,
                            fade: this.options.dialogsFade,
                            body: e,
                            footer: n
                        }).render().appendTo(t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.ui.hideDialog(this.$dialog),
                        this.$dialog.remove()
                    }
                }, {
                    key: "bindEnterKey",
                    value: function(t, e) {
                        t.on("keypress", (function(t) {
                            t.keyCode === xt.code.ENTER && (t.preventDefault(),
                            e.trigger("click"))
                        }
                        ))
                    }
                }, {
                    key: "toggleLinkBtn",
                    value: function(t, e, n) {
                        this.ui.toggleBtn(t, e.val() && n.val())
                    }
                }, {
                    key: "showLinkDialog",
                    value: function(t) {
                        var e = this;
                        return i.a.Deferred((function(n) {
                            var o = e.$dialog.find(".note-link-text")
                              , i = e.$dialog.find(".note-link-url")
                              , r = e.$dialog.find(".note-link-btn")
                              , a = e.$dialog.find(".sn-checkbox-open-in-new-window input[type=checkbox]")
                              , s = e.$dialog.find(".sn-checkbox-use-protocol input[type=checkbox]");
                            e.ui.onDialogShown(e.$dialog, (function() {
                                e.context.triggerEvent("dialog.shown"),
                                !t.url && g.isValidUrl(t.text) && (t.url = t.text),
                                o.on("input paste propertychange", (function() {
                                    t.text = o.val(),
                                    e.toggleLinkBtn(r, o, i)
                                }
                                )).val(t.text),
                                i.on("input paste propertychange", (function() {
                                    t.text || o.val(i.val()),
                                    e.toggleLinkBtn(r, o, i)
                                }
                                )).val(t.url),
                                m.isSupportTouch || i.trigger("focus"),
                                e.toggleLinkBtn(r, o, i),
                                e.bindEnterKey(i, r),
                                e.bindEnterKey(o, r);
                                var l = void 0 !== t.isNewWindow ? t.isNewWindow : e.context.options.linkTargetBlank;
                                a.prop("checked", l);
                                var c = !t.url && e.context.options.useProtocol;
                                s.prop("checked", c),
                                r.one("click", (function(r) {
                                    r.preventDefault(),
                                    n.resolve({
                                        range: t.range,
                                        url: i.val(),
                                        text: o.val(),
                                        isNewWindow: a.is(":checked"),
                                        checkProtocol: s.is(":checked")
                                    }),
                                    e.ui.hideDialog(e.$dialog)
                                }
                                ))
                            }
                            )),
                            e.ui.onDialogHidden(e.$dialog, (function() {
                                o.off(),
                                i.off(),
                                r.off(),
                                "pending" === n.state() && n.reject()
                            }
                            )),
                            e.ui.showDialog(e.$dialog)
                        }
                        )).promise()
                    }
                }, {
                    key: "show",
                    value: function() {
                        var t = this
                          , e = this.context.invoke("editor.getLinkInfo");
                        this.context.invoke("editor.saveRange"),
                        this.showLinkDialog(e).then((function(e) {
                            t.context.invoke("editor.restoreRange"),
                            t.context.invoke("editor.createLink", e)
                        }
                        )).fail((function() {
                            t.context.invoke("editor.restoreRange")
                        }
                        ))
                    }
                }]) && ue(e.prototype, n),
                o && ue(e, o),
                t
            }();
            function he(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var fe = function() {
                function t(e) {
                    var n = this;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.ui = i.a.summernote.ui,
                    this.options = e.options,
                    this.events = {
                        "summernote.keyup summernote.mouseup summernote.change summernote.scroll": function() {
                            n.update()
                        },
                        "summernote.disable summernote.dialog.shown summernote.blur": function() {
                            n.hide()
                        }
                    }
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "shouldInitialize",
                    value: function() {
                        return !C.isEmpty(this.options.popover.link)
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        this.$popover = this.ui.popover({
                            className: "note-link-popover",
                            callback: function(t) {
                                t.find(".popover-content,.note-popover-content").prepend('<span><a target="_blank"></a>&nbsp;</span>')
                            }
                        }).render().appendTo(this.options.container);
                        var t = this.$popover.find(".popover-content,.note-popover-content");
                        this.context.invoke("buttons.build", t, this.options.popover.link),
                        this.$popover.on("mousedown", (function(t) {
                            t.preventDefault()
                        }
                        ))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.$popover.remove()
                    }
                }, {
                    key: "update",
                    value: function() {
                        if (this.context.invoke("editor.hasFocus")) {
                            var t = this.context.invoke("editor.getLastRange");
                            if (t.isCollapsed() && t.isOnAnchor()) {
                                var e = pt.ancestor(t.sc, pt.isAnchor)
                                  , n = i()(e).attr("href");
                                this.$popover.find("a").attr("href", n).text(n);
                                var o = pt.posFromPlaceholder(e)
                                  , r = i()(this.options.container).offset();
                                o.top -= r.top,
                                o.left -= r.left,
                                this.$popover.css({
                                    display: "block",
                                    left: o.left,
                                    top: o.top
                                })
                            } else
                                this.hide()
                        } else
                            this.hide()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.$popover.hide()
                    }
                }]) && he(e.prototype, n),
                o && he(e, o),
                t
            }();
            function pe(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var me = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.ui = i.a.summernote.ui,
                    this.$body = i()(document.body),
                    this.$editor = e.layoutInfo.editor,
                    this.options = e.options,
                    this.lang = this.options.langInfo
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "initialize",
                    value: function() {
                        var t = "";
                        if (this.options.maximumImageFileSize) {
                            var e = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024))
                              , n = 1 * (this.options.maximumImageFileSize / Math.pow(1024, e)).toFixed(2) + " " + " KMGTP"[e] + "B";
                            t = "<small>".concat(this.lang.image.maximumFileSize + " : " + n, "</small>")
                        }
                        var o = this.options.dialogsInBody ? this.$body : this.options.container
                          , i = ['<div class="form-group note-form-group note-group-select-from-files">', '<label for="note-dialog-image-file-' + this.options.id + '" class="note-form-label">' + this.lang.image.selectFromFiles + "</label>", '<input id="note-dialog-image-file-' + this.options.id + '" class="note-image-input form-control-file note-form-control note-input" ', ' type="file" name="files" accept="image/*" multiple="multiple"/>', t, "</div>", '<div class="form-group note-group-image-url">', '<label for="note-dialog-image-url-' + this.options.id + '" class="note-form-label">' + this.lang.image.url + "</label>", '<input id="note-dialog-image-url-' + this.options.id + '" class="note-image-url form-control note-form-control note-input" type="text"/>', "</div>"].join("")
                          , r = '<input type="button" href="#" class="'.concat("btn btn-primary note-btn note-btn-primary note-image-btn", '" value="').concat(this.lang.image.insert, '" disabled>');
                        this.$dialog = this.ui.dialog({
                            title: this.lang.image.insert,
                            fade: this.options.dialogsFade,
                            body: i,
                            footer: r
                        }).render().appendTo(o)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.ui.hideDialog(this.$dialog),
                        this.$dialog.remove()
                    }
                }, {
                    key: "bindEnterKey",
                    value: function(t, e) {
                        t.on("keypress", (function(t) {
                            t.keyCode === xt.code.ENTER && (t.preventDefault(),
                            e.trigger("click"))
                        }
                        ))
                    }
                }, {
                    key: "show",
                    value: function() {
                        var t = this;
                        this.context.invoke("editor.saveRange"),
                        this.showImageDialog().then((function(e) {
                            t.ui.hideDialog(t.$dialog),
                            t.context.invoke("editor.restoreRange"),
                            "string" == typeof e ? t.options.callbacks.onImageLinkInsert ? t.context.triggerEvent("image.link.insert", e) : t.context.invoke("editor.insertImage", e) : t.context.invoke("editor.insertImagesOrCallback", e)
                        }
                        )).fail((function() {
                            t.context.invoke("editor.restoreRange")
                        }
                        ))
                    }
                }, {
                    key: "showImageDialog",
                    value: function() {
                        var t = this;
                        return i.a.Deferred((function(e) {
                            var n = t.$dialog.find(".note-image-input")
                              , o = t.$dialog.find(".note-image-url")
                              , i = t.$dialog.find(".note-image-btn");
                            t.ui.onDialogShown(t.$dialog, (function() {
                                t.context.triggerEvent("dialog.shown"),
                                n.replaceWith(n.clone().on("change", (function(t) {
                                    e.resolve(t.target.files || t.target.value)
                                }
                                )).val("")),
                                o.on("input paste propertychange", (function() {
                                    t.ui.toggleBtn(i, o.val())
                                }
                                )).val(""),
                                m.isSupportTouch || o.trigger("focus"),
                                i.click((function(t) {
                                    t.preventDefault(),
                                    e.resolve(o.val())
                                }
                                )),
                                t.bindEnterKey(o, i)
                            }
                            )),
                            t.ui.onDialogHidden(t.$dialog, (function() {
                                n.off(),
                                o.off(),
                                i.off(),
                                "pending" === e.state() && e.reject()
                            }
                            )),
                            t.ui.showDialog(t.$dialog)
                        }
                        ))
                    }
                }]) && pe(e.prototype, n),
                o && pe(e, o),
                t
            }();
            function ve(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var ge = function() {
                function t(e) {
                    var n = this;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.ui = i.a.summernote.ui,
                    this.editable = e.layoutInfo.editable[0],
                    this.options = e.options,
                    this.events = {
                        "summernote.disable summernote.blur": function() {
                            n.hide()
                        }
                    }
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "shouldInitialize",
                    value: function() {
                        return !C.isEmpty(this.options.popover.image)
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        this.$popover = this.ui.popover({
                            className: "note-image-popover"
                        }).render().appendTo(this.options.container);
                        var t = this.$popover.find(".popover-content,.note-popover-content");
                        this.context.invoke("buttons.build", t, this.options.popover.image),
                        this.$popover.on("mousedown", (function(t) {
                            t.preventDefault()
                        }
                        ))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.$popover.remove()
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        if (pt.isImg(t)) {
                            var n = i()(t).offset()
                              , o = i()(this.options.container).offset()
                              , r = {};
                            this.options.popatmouse ? (r.left = e.pageX - 20,
                            r.top = e.pageY) : r = n,
                            r.top -= o.top,
                            r.left -= o.left,
                            this.$popover.css({
                                display: "block",
                                left: r.left,
                                top: r.top
                            })
                        } else
                            this.hide()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.$popover.hide()
                    }
                }]) && ve(e.prototype, n),
                o && ve(e, o),
                t
            }();
            function be(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var ke = function() {
                function t(e) {
                    var n = this;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.ui = i.a.summernote.ui,
                    this.options = e.options,
                    this.events = {
                        "summernote.mousedown": function(t, e) {
                            n.update(e.target)
                        },
                        "summernote.keyup summernote.scroll summernote.change": function() {
                            n.update()
                        },
                        "summernote.disable summernote.blur": function() {
                            n.hide()
                        }
                    }
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "shouldInitialize",
                    value: function() {
                        return !C.isEmpty(this.options.popover.table)
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        this.$popover = this.ui.popover({
                            className: "note-table-popover"
                        }).render().appendTo(this.options.container);
                        var t = this.$popover.find(".popover-content,.note-popover-content");
                        this.context.invoke("buttons.build", t, this.options.popover.table),
                        m.isFF && document.execCommand("enableInlineTableEditing", !1, !1),
                        this.$popover.on("mousedown", (function(t) {
                            t.preventDefault()
                        }
                        ))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.$popover.remove()
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        if (this.context.isDisabled())
                            return !1;
                        var e = pt.isCell(t);
                        if (e) {
                            var n = pt.posFromPlaceholder(t)
                              , o = i()(this.options.container).offset();
                            n.top -= o.top,
                            n.left -= o.left,
                            this.$popover.css({
                                display: "block",
                                left: n.left,
                                top: n.top
                            })
                        } else
                            this.hide();
                        return e
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.$popover.hide()
                    }
                }]) && be(e.prototype, n),
                o && be(e, o),
                t
            }();
            function ye(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var we = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.ui = i.a.summernote.ui,
                    this.$body = i()(document.body),
                    this.$editor = e.layoutInfo.editor,
                    this.options = e.options,
                    this.lang = this.options.langInfo
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "initialize",
                    value: function() {
                        var t = this.options.dialogsInBody ? this.$body : this.options.container
                          , e = ['<div class="form-group note-form-group row-fluid">', '<label for="note-dialog-video-url-'.concat(this.options.id, '" class="note-form-label">').concat(this.lang.video.url, ' <small class="text-muted">').concat(this.lang.video.providers, "</small></label>"), '<input id="note-dialog-video-url-'.concat(this.options.id, '" class="note-video-url form-control note-form-control note-input" type="text"/>'), "</div>"].join("")
                          , n = '<input type="button" href="#" class="'.concat("btn btn-primary note-btn note-btn-primary note-video-btn", '" value="').concat(this.lang.video.insert, '" disabled>');
                        this.$dialog = this.ui.dialog({
                            title: this.lang.video.insert,
                            fade: this.options.dialogsFade,
                            body: e,
                            footer: n
                        }).render().appendTo(t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.ui.hideDialog(this.$dialog),
                        this.$dialog.remove()
                    }
                }, {
                    key: "bindEnterKey",
                    value: function(t, e) {
                        t.on("keypress", (function(t) {
                            t.keyCode === xt.code.ENTER && (t.preventDefault(),
                            e.trigger("click"))
                        }
                        ))
                    }
                }, {
                    key: "createVideoNode",
                    value: function(t) {
                        var e, n = t.match(/\/\/(?:(?:www|m)\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/), o = t.match(/(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/), r = t.match(/\/\/vine\.co\/v\/([a-zA-Z0-9]+)/), a = t.match(/\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/), s = t.match(/.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/), l = t.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/), c = t.match(/\/\/v\.qq\.com.*?vid=(.+)/), u = t.match(/\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/), d = t.match(/^.+.(mp4|m4v)$/), h = t.match(/^.+.(ogg|ogv)$/), f = t.match(/^.+.(webm)$/), p = t.match(/(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/);
                        if (n && 11 === n[1].length) {
                            var m = n[1]
                              , v = 0;
                            if (void 0 !== n[2]) {
                                var g = n[2].match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
                                if (g)
                                    for (var b = [3600, 60, 1], k = 0, y = b.length; k < y; k++)
                                        v += void 0 !== g[k + 1] ? b[k] * parseInt(g[k + 1], 10) : 0
                            }
                            e = i()("<iframe>").attr("frameborder", 0).attr("src", "//www.youtube.com/embed/" + m + (v > 0 ? "?start=" + v : "")).attr("width", "640").attr("height", "360")
                        } else if (o && o[0].length)
                            e = i()("<iframe>").attr("frameborder", 0).attr("src", "https://instagram.com/p/" + o[1] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true");
                        else if (r && r[0].length)
                            e = i()("<iframe>").attr("frameborder", 0).attr("src", r[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed");
                        else if (a && a[3].length)
                            e = i()("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("src", "//player.vimeo.com/video/" + a[3]).attr("width", "640").attr("height", "360");
                        else if (s && s[2].length)
                            e = i()("<iframe>").attr("frameborder", 0).attr("src", "//www.dailymotion.com/embed/video/" + s[2]).attr("width", "640").attr("height", "360");
                        else if (l && l[1].length)
                            e = i()("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + l[1]);
                        else if (c && c[1].length || u && u[2].length) {
                            var w = c && c[1].length ? c[1] : u[2];
                            e = i()("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "310").attr("width", "500").attr("src", "https://v.qq.com/txp/iframe/player.html?vid=" + w + "&amp;auto=0")
                        } else if (d || h || f)
                            e = i()("<video controls>").attr("src", t).attr("width", "640").attr("height", "360");
                        else {
                            if (!p || !p[0].length)
                                return !1;
                            e = i()("<iframe>").attr("frameborder", 0).attr("src", "https://www.facebook.com/plugins/video.php?href=" + encodeURIComponent(p[0]) + "&show_text=0&width=560").attr("width", "560").attr("height", "301").attr("scrolling", "no").attr("allowtransparency", "true")
                        }
                        return e.addClass("note-video-clip"),
                        e[0]
                    }
                }, {
                    key: "show",
                    value: function() {
                        var t = this
                          , e = this.context.invoke("editor.getSelectedText");
                        this.context.invoke("editor.saveRange"),
                        this.showVideoDialog(e).then((function(e) {
                            t.ui.hideDialog(t.$dialog),
                            t.context.invoke("editor.restoreRange");
                            var n = t.createVideoNode(e);
                            n && t.context.invoke("editor.insertNode", n)
                        }
                        )).fail((function() {
                            t.context.invoke("editor.restoreRange")
                        }
                        ))
                    }
                }, {
                    key: "showVideoDialog",
                    value: function() {
                        var t = this;
                        return i.a.Deferred((function(e) {
                            var n = t.$dialog.find(".note-video-url")
                              , o = t.$dialog.find(".note-video-btn");
                            t.ui.onDialogShown(t.$dialog, (function() {
                                t.context.triggerEvent("dialog.shown"),
                                n.on("input paste propertychange", (function() {
                                    t.ui.toggleBtn(o, n.val())
                                }
                                )),
                                m.isSupportTouch || n.trigger("focus"),
                                o.click((function(t) {
                                    t.preventDefault(),
                                    e.resolve(n.val())
                                }
                                )),
                                t.bindEnterKey(n, o)
                            }
                            )),
                            t.ui.onDialogHidden(t.$dialog, (function() {
                                n.off(),
                                o.off(),
                                "pending" === e.state() && e.reject()
                            }
                            )),
                            t.ui.showDialog(t.$dialog)
                        }
                        ))
                    }
                }]) && ye(e.prototype, n),
                o && ye(e, o),
                t
            }();
            function Ce(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var xe = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.ui = i.a.summernote.ui,
                    this.$body = i()(document.body),
                    this.$editor = e.layoutInfo.editor,
                    this.options = e.options,
                    this.lang = this.options.langInfo
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "initialize",
                    value: function() {
                        var t = this.options.dialogsInBody ? this.$body : this.options.container
                          , e = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank">Summernote 0.8.18</a> · ', '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ', '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>', "</p>"].join("");
                        this.$dialog = this.ui.dialog({
                            title: this.lang.options.help,
                            fade: this.options.dialogsFade,
                            body: this.createShortcutList(),
                            footer: e,
                            callback: function(t) {
                                t.find(".modal-body,.note-modal-body").css({
                                    "max-height": 300,
                                    overflow: "scroll"
                                })
                            }
                        }).render().appendTo(t)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.ui.hideDialog(this.$dialog),
                        this.$dialog.remove()
                    }
                }, {
                    key: "createShortcutList",
                    value: function() {
                        var t = this
                          , e = this.options.keyMap[m.isMac ? "mac" : "pc"];
                        return Object.keys(e).map((function(n) {
                            var o = e[n]
                              , r = i()('<div><div class="help-list-item"></div></div>');
                            return r.append(i()("<label><kbd>" + n + "</kdb></label>").css({
                                width: 180,
                                "margin-right": 10
                            })).append(i()("<span/>").html(t.context.memo("help." + o) || o)),
                            r.html()
                        }
                        )).join("")
                    }
                }, {
                    key: "showHelpDialog",
                    value: function() {
                        var t = this;
                        return i.a.Deferred((function(e) {
                            t.ui.onDialogShown(t.$dialog, (function() {
                                t.context.triggerEvent("dialog.shown"),
                                e.resolve()
                            }
                            )),
                            t.ui.showDialog(t.$dialog)
                        }
                        )).promise()
                    }
                }, {
                    key: "show",
                    value: function() {
                        var t = this;
                        this.context.invoke("editor.saveRange"),
                        this.showHelpDialog().then((function() {
                            t.context.invoke("editor.restoreRange")
                        }
                        ))
                    }
                }]) && Ce(e.prototype, n),
                o && Ce(e, o),
                t
            }();
            function Se(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var Te = function() {
                function t(e) {
                    var n = this;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.ui = i.a.summernote.ui,
                    this.options = e.options,
                    this.hidable = !0,
                    this.onContextmenu = !1,
                    this.pageX = null,
                    this.pageY = null,
                    this.events = {
                        "summernote.contextmenu": function(t) {
                            n.options.editing && (t.preventDefault(),
                            t.stopPropagation(),
                            n.onContextmenu = !0,
                            n.update(!0))
                        },
                        "summernote.mousedown": function(t, e) {
                            n.pageX = e.pageX,
                            n.pageY = e.pageY
                        },
                        "summernote.keyup summernote.mouseup summernote.scroll": function(t, e) {
                            n.options.editing && !n.onContextmenu && (n.pageX = e.pageX,
                            n.pageY = e.pageY,
                            n.update()),
                            n.onContextmenu = !1
                        },
                        "summernote.disable summernote.change summernote.dialog.shown summernote.blur": function() {
                            n.hide()
                        },
                        "summernote.focusout": function() {
                            n.$popover.is(":active,:focus") || n.hide()
                        }
                    }
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "shouldInitialize",
                    value: function() {
                        return this.options.airMode && !C.isEmpty(this.options.popover.air)
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        var t = this;
                        this.$popover = this.ui.popover({
                            className: "note-air-popover"
                        }).render().appendTo(this.options.container);
                        var e = this.$popover.find(".popover-content");
                        this.context.invoke("buttons.build", e, this.options.popover.air),
                        this.$popover.on("mousedown", (function() {
                            t.hidable = !1
                        }
                        )),
                        this.$popover.on("mouseup", (function() {
                            t.hidable = !0
                        }
                        ))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.$popover.remove()
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = this.context.invoke("editor.currentStyle");
                        if (!e.range || e.range.isCollapsed() && !t)
                            this.hide();
                        else {
                            var n = {
                                left: this.pageX,
                                top: this.pageY
                            }
                              , o = i()(this.options.container).offset();
                            n.top -= o.top,
                            n.left -= o.left,
                            this.$popover.css({
                                display: "block",
                                left: Math.max(n.left, 0) + -5,
                                top: n.top + 5
                            }),
                            this.context.invoke("buttons.updateCurrentStyle", this.$popover)
                        }
                    }
                }, {
                    key: "updateCodeview",
                    value: function(t) {
                        this.ui.toggleBtnActive(this.$popover.find(".btn-codeview"), t),
                        t && this.hide()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.hidable && this.$popover.hide()
                    }
                }]) && Se(e.prototype, n),
                o && Se(e, o),
                t
            }();
            function Ee(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var $e = function() {
                function t(e) {
                    var n = this;
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.context = e,
                    this.ui = i.a.summernote.ui,
                    this.$editable = e.layoutInfo.editable,
                    this.options = e.options,
                    this.hint = this.options.hint || [],
                    this.direction = this.options.hintDirection || "bottom",
                    this.hints = Array.isArray(this.hint) ? this.hint : [this.hint],
                    this.events = {
                        "summernote.keyup": function(t, e) {
                            e.isDefaultPrevented() || n.handleKeyup(e)
                        },
                        "summernote.keydown": function(t, e) {
                            n.handleKeydown(e)
                        },
                        "summernote.disable summernote.dialog.shown summernote.blur": function() {
                            n.hide()
                        }
                    }
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "shouldInitialize",
                    value: function() {
                        return this.hints.length > 0
                    }
                }, {
                    key: "initialize",
                    value: function() {
                        var t = this;
                        this.lastWordRange = null,
                        this.matchingWord = null,
                        this.$popover = this.ui.popover({
                            className: "note-hint-popover",
                            hideArrow: !0,
                            direction: ""
                        }).render().appendTo(this.options.container),
                        this.$popover.hide(),
                        this.$content = this.$popover.find(".popover-content,.note-popover-content"),
                        this.$content.on("click", ".note-hint-item", (function(e) {
                            t.$content.find(".active").removeClass("active"),
                            i()(e.currentTarget).addClass("active"),
                            t.replace()
                        }
                        )),
                        this.$popover.on("mousedown", (function(t) {
                            t.preventDefault()
                        }
                        ))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.$popover.remove()
                    }
                }, {
                    key: "selectItem",
                    value: function(t) {
                        this.$content.find(".active").removeClass("active"),
                        t.addClass("active"),
                        this.$content[0].scrollTop = t[0].offsetTop - this.$content.innerHeight() / 2
                    }
                }, {
                    key: "moveDown",
                    value: function() {
                        var t = this.$content.find(".note-hint-item.active")
                          , e = t.next();
                        if (e.length)
                            this.selectItem(e);
                        else {
                            var n = t.parent().next();
                            n.length || (n = this.$content.find(".note-hint-group").first()),
                            this.selectItem(n.find(".note-hint-item").first())
                        }
                    }
                }, {
                    key: "moveUp",
                    value: function() {
                        var t = this.$content.find(".note-hint-item.active")
                          , e = t.prev();
                        if (e.length)
                            this.selectItem(e);
                        else {
                            var n = t.parent().prev();
                            n.length || (n = this.$content.find(".note-hint-group").last()),
                            this.selectItem(n.find(".note-hint-item").last())
                        }
                    }
                }, {
                    key: "replace",
                    value: function() {
                        var t = this.$content.find(".note-hint-item.active");
                        if (t.length) {
                            var e = this.nodeFromItem(t);
                            if (null !== this.matchingWord && 0 === this.matchingWord.length)
                                this.lastWordRange.so = this.lastWordRange.eo;
                            else if (null !== this.matchingWord && this.matchingWord.length > 0 && !this.lastWordRange.isCollapsed()) {
                                var n = this.lastWordRange.eo - this.lastWordRange.so - this.matchingWord.length;
                                n > 0 && (this.lastWordRange.so += n)
                            }
                            if (this.lastWordRange.insertNode(e),
                            "next" === this.options.hintSelect) {
                                var o = document.createTextNode("");
                                i()(e).after(o),
                                wt.createFromNodeBefore(o).select()
                            } else
                                wt.createFromNodeAfter(e).select();
                            this.lastWordRange = null,
                            this.hide(),
                            this.context.invoke("editor.focus")
                        }
                    }
                }, {
                    key: "nodeFromItem",
                    value: function(t) {
                        var e = this.hints[t.data("index")]
                          , n = t.data("item")
                          , o = e.content ? e.content(n) : n;
                        return "string" == typeof o && (o = pt.createText(o)),
                        o
                    }
                }, {
                    key: "createItemTemplates",
                    value: function(t, e) {
                        var n = this.hints[t];
                        return e.map((function(e) {
                            var o = i()('<div class="note-hint-item"/>');
                            return o.append(n.template ? n.template(e) : e + ""),
                            o.data({
                                index: t,
                                item: e
                            }),
                            o
                        }
                        ))
                    }
                }, {
                    key: "handleKeydown",
                    value: function(t) {
                        this.$popover.is(":visible") && (t.keyCode === xt.code.ENTER ? (t.preventDefault(),
                        this.replace()) : t.keyCode === xt.code.UP ? (t.preventDefault(),
                        this.moveUp()) : t.keyCode === xt.code.DOWN && (t.preventDefault(),
                        this.moveDown()))
                    }
                }, {
                    key: "searchKeyword",
                    value: function(t, e, n) {
                        var o = this.hints[t];
                        if (o && o.match.test(e) && o.search) {
                            var i = o.match.exec(e);
                            this.matchingWord = i[0],
                            o.search(i[1], n)
                        } else
                            n()
                    }
                }, {
                    key: "createGroup",
                    value: function(t, e) {
                        var n = this
                          , o = i()('<div class="note-hint-group note-hint-group-' + t + '"></div>');
                        return this.searchKeyword(t, e, (function(e) {
                            (e = e || []).length && (o.html(n.createItemTemplates(t, e)),
                            n.show())
                        }
                        )),
                        o
                    }
                }, {
                    key: "handleKeyup",
                    value: function(t) {
                        var e = this;
                        if (!C.contains([xt.code.ENTER, xt.code.UP, xt.code.DOWN], t.keyCode)) {
                            var n, o, r = this.context.invoke("editor.getLastRange");
                            if ("words" === this.options.hintMode) {
                                if (n = r.getWordsRange(r),
                                o = n.toString(),
                                this.hints.forEach((function(t) {
                                    if (t.match.test(o))
                                        return n = r.getWordsMatchRange(t.match),
                                        !1
                                }
                                )),
                                !n)
                                    return void this.hide();
                                o = n.toString()
                            } else
                                n = r.getWordRange(),
                                o = n.toString();
                            if (this.hints.length && o) {
                                this.$content.empty();
                                var a = g.rect2bnd(C.last(n.getClientRects()))
                                  , s = i()(this.options.container).offset();
                                a && (a.top -= s.top,
                                a.left -= s.left,
                                this.$popover.hide(),
                                this.lastWordRange = n,
                                this.hints.forEach((function(t, n) {
                                    t.match.test(o) && e.createGroup(n, o).appendTo(e.$content)
                                }
                                )),
                                this.$content.find(".note-hint-item:first").addClass("active"),
                                "top" === this.direction ? this.$popover.css({
                                    left: a.left,
                                    top: a.top - this.$popover.outerHeight() - 5
                                }) : this.$popover.css({
                                    left: a.left,
                                    top: a.top + a.height + 5
                                }))
                            } else
                                this.hide()
                        }
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.$popover.show()
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.$popover.hide()
                    }
                }]) && Ee(e.prototype, n),
                o && Ee(e, o),
                t
            }();
            i.a.summernote = i.a.extend(i.a.summernote, {
                version: "0.8.18",
                plugins: {},
                dom: pt,
                range: wt,
                lists: C,
                options: {
                    langInfo: i.a.summernote.lang["en-US"],
                    editing: !0,
                    modules: {
                        editor: Ht,
                        clipboard: zt,
                        dropzone: Ot,
                        codeview: Kt,
                        statusbar: qt,
                        fullscreen: Gt,
                        handle: Zt,
                        hintPopover: $e,
                        autoLink: Jt,
                        autoSync: ee,
                        autoReplace: oe,
                        placeholder: re,
                        buttons: se,
                        toolbar: ce,
                        linkDialog: de,
                        linkPopover: fe,
                        imageDialog: me,
                        imagePopover: ge,
                        tablePopover: ke,
                        videoDialog: we,
                        helpDialog: xe,
                        airPopover: Te
                    },
                    buttons: {},
                    lang: "en-US",
                    followingToolbar: !1,
                    toolbarPosition: "top",
                    otherStaticBar: "",
                    codeviewKeepButton: !1,
                    toolbar: [["style", ["style"]], ["font", ["bold", "underline", "clear"]], ["fontname", ["fontname"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture", "video"]], ["view", ["fullscreen", "codeview", "help"]]],
                    popatmouse: !0,
                    popover: {
                        image: [["resize", ["resizeFull", "resizeHalf", "resizeQuarter", "resizeNone"]], ["float", ["floatLeft", "floatRight", "floatNone"]], ["remove", ["removeMedia"]]],
                        link: [["link", ["linkDialogShow", "unlink"]]],
                        table: [["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]], ["delete", ["deleteRow", "deleteCol", "deleteTable"]]],
                        air: [["color", ["color"]], ["font", ["bold", "underline", "clear"]], ["para", ["ul", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture"]], ["view", ["fullscreen", "codeview"]]]
                    },
                    airMode: !1,
                    overrideContextMenu: !1,
                    width: null,
                    height: null,
                    linkTargetBlank: !0,
                    useProtocol: !0,
                    defaultProtocol: "http://",
                    focus: !1,
                    tabDisabled: !1,
                    tabSize: 4,
                    styleWithCSS: !1,
                    shortcuts: !0,
                    textareaAutoSync: !0,
                    tooltip: "auto",
                    container: null,
                    maxTextLength: 0,
                    blockquoteBreakingLevel: 2,
                    spellCheck: !0,
                    disableGrammar: !1,
                    placeholder: null,
                    inheritPlaceholder: !1,
                    recordEveryKeystroke: !1,
                    historyLimit: 200,
                    showDomainOnlyForAutolink: !1,
                    hintMode: "word",
                    hintSelect: "after",
                    hintDirection: "bottom",
                    styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
                    fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"],
                    fontNamesIgnoreCheck: [],
                    addDefaultFonts: !0,
                    fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
                    fontSizeUnits: ["px", "pt"],
                    colors: [["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"], ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"], ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"], ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"], ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"], ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"], ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"], ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]],
                    colorsName: [["Black", "Tundora", "Dove Gray", "Star Dust", "Pale Slate", "Gallery", "Alabaster", "White"], ["Red", "Orange Peel", "Yellow", "Green", "Cyan", "Blue", "Electric Violet", "Magenta"], ["Azalea", "Karry", "Egg White", "Zanah", "Botticelli", "Tropical Blue", "Mischka", "Twilight"], ["Tonys Pink", "Peach Orange", "Cream Brulee", "Sprout", "Casper", "Perano", "Cold Purple", "Careys Pink"], ["Mandy", "Rajah", "Dandelion", "Olivine", "Gulf Stream", "Viking", "Blue Marguerite", "Puce"], ["Guardsman Red", "Fire Bush", "Golden Dream", "Chelsea Cucumber", "Smalt Blue", "Boston Blue", "Butterfly Bush", "Cadillac"], ["Sangria", "Mai Tai", "Buddha Gold", "Forest Green", "Eden", "Venice Blue", "Meteorite", "Claret"], ["Rosewood", "Cinnamon", "Olive", "Parsley", "Tiber", "Midnight Blue", "Valentino", "Loulou"]],
                    colorButton: {
                        foreColor: "#000000",
                        backColor: "#FFFF00"
                    },
                    lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
                    tableClassName: "table table-bordered",
                    insertTableMaxSize: {
                        col: 10,
                        row: 10
                    },
                    dialogsInBody: !1,
                    dialogsFade: !1,
                    maximumImageFileSize: null,
                    callbacks: {
                        onBeforeCommand: null,
                        onBlur: null,
                        onBlurCodeview: null,
                        onChange: null,
                        onChangeCodeview: null,
                        onDialogShown: null,
                        onEnter: null,
                        onFocus: null,
                        onImageLinkInsert: null,
                        onImageUpload: null,
                        onImageUploadError: null,
                        onInit: null,
                        onKeydown: null,
                        onKeyup: null,
                        onMousedown: null,
                        onMouseup: null,
                        onPaste: null,
                        onScroll: null
                    },
                    codemirror: {
                        mode: "text/html",
                        htmlMode: !0,
                        lineNumbers: !0
                    },
                    codeviewFilter: !1,
                    codeviewFilterRegex: /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
                    codeviewIframeFilter: !0,
                    codeviewIframeWhitelistSrc: [],
                    codeviewIframeWhitelistSrcBase: ["www.youtube.com", "www.youtube-nocookie.com", "www.facebook.com", "vine.co", "instagram.com", "player.vimeo.com", "www.dailymotion.com", "player.youku.com", "v.qq.com"],
                    keyMap: {
                        pc: {
                            ESC: "escape",
                            ENTER: "insertParagraph",
                            "CTRL+Z": "undo",
                            "CTRL+Y": "redo",
                            TAB: "tab",
                            "SHIFT+TAB": "untab",
                            "CTRL+B": "bold",
                            "CTRL+I": "italic",
                            "CTRL+U": "underline",
                            "CTRL+SHIFT+S": "strikethrough",
                            "CTRL+BACKSLASH": "removeFormat",
                            "CTRL+SHIFT+L": "justifyLeft",
                            "CTRL+SHIFT+E": "justifyCenter",
                            "CTRL+SHIFT+R": "justifyRight",
                            "CTRL+SHIFT+J": "justifyFull",
                            "CTRL+SHIFT+NUM7": "insertUnorderedList",
                            "CTRL+SHIFT+NUM8": "insertOrderedList",
                            "CTRL+LEFTBRACKET": "outdent",
                            "CTRL+RIGHTBRACKET": "indent",
                            "CTRL+NUM0": "formatPara",
                            "CTRL+NUM1": "formatH1",
                            "CTRL+NUM2": "formatH2",
                            "CTRL+NUM3": "formatH3",
                            "CTRL+NUM4": "formatH4",
                            "CTRL+NUM5": "formatH5",
                            "CTRL+NUM6": "formatH6",
                            "CTRL+ENTER": "insertHorizontalRule",
                            "CTRL+K": "linkDialog.show"
                        },
                        mac: {
                            ESC: "escape",
                            ENTER: "insertParagraph",
                            "CMD+Z": "undo",
                            "CMD+SHIFT+Z": "redo",
                            TAB: "tab",
                            "SHIFT+TAB": "untab",
                            "CMD+B": "bold",
                            "CMD+I": "italic",
                            "CMD+U": "underline",
                            "CMD+SHIFT+S": "strikethrough",
                            "CMD+BACKSLASH": "removeFormat",
                            "CMD+SHIFT+L": "justifyLeft",
                            "CMD+SHIFT+E": "justifyCenter",
                            "CMD+SHIFT+R": "justifyRight",
                            "CMD+SHIFT+J": "justifyFull",
                            "CMD+SHIFT+NUM7": "insertUnorderedList",
                            "CMD+SHIFT+NUM8": "insertOrderedList",
                            "CMD+LEFTBRACKET": "outdent",
                            "CMD+RIGHTBRACKET": "indent",
                            "CMD+NUM0": "formatPara",
                            "CMD+NUM1": "formatH1",
                            "CMD+NUM2": "formatH2",
                            "CMD+NUM3": "formatH3",
                            "CMD+NUM4": "formatH4",
                            "CMD+NUM5": "formatH5",
                            "CMD+NUM6": "formatH6",
                            "CMD+ENTER": "insertHorizontalRule",
                            "CMD+K": "linkDialog.show"
                        }
                    },
                    icons: {
                        align: "note-icon-align",
                        alignCenter: "note-icon-align-center",
                        alignJustify: "note-icon-align-justify",
                        alignLeft: "note-icon-align-left",
                        alignRight: "note-icon-align-right",
                        rowBelow: "note-icon-row-below",
                        colBefore: "note-icon-col-before",
                        colAfter: "note-icon-col-after",
                        rowAbove: "note-icon-row-above",
                        rowRemove: "note-icon-row-remove",
                        colRemove: "note-icon-col-remove",
                        indent: "note-icon-align-indent",
                        outdent: "note-icon-align-outdent",
                        arrowsAlt: "note-icon-arrows-alt",
                        bold: "note-icon-bold",
                        caret: "note-icon-caret",
                        circle: "note-icon-circle",
                        close: "note-icon-close",
                        code: "note-icon-code",
                        eraser: "note-icon-eraser",
                        floatLeft: "note-icon-float-left",
                        floatRight: "note-icon-float-right",
                        font: "note-icon-font",
                        frame: "note-icon-frame",
                        italic: "note-icon-italic",
                        link: "note-icon-link",
                        unlink: "note-icon-chain-broken",
                        magic: "note-icon-magic",
                        menuCheck: "note-icon-menu-check",
                        minus: "note-icon-minus",
                        orderedlist: "note-icon-orderedlist",
                        pencil: "note-icon-pencil",
                        picture: "note-icon-picture",
                        question: "note-icon-question",
                        redo: "note-icon-redo",
                        rollback: "note-icon-rollback",
                        square: "note-icon-square",
                        strikethrough: "note-icon-strikethrough",
                        subscript: "note-icon-subscript",
                        superscript: "note-icon-superscript",
                        table: "note-icon-table",
                        textHeight: "note-icon-text-height",
                        trash: "note-icon-trash",
                        underline: "note-icon-underline",
                        undo: "note-icon-undo",
                        unorderedlist: "note-icon-unorderedlist",
                        video: "note-icon-video"
                    }
                }
            })
        },
        51: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(0)
              , i = n.n(o)
              , r = n(1);
            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var s = function() {
                function t(e, n) {
                    if (function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.$node = e,
                    this.options = i.a.extend({}, {
                        title: "",
                        target: n.container,
                        trigger: "hover focus",
                        placement: "bottom"
                    }, n),
                    this.$tooltip = i()(['<div class="note-tooltip">', '<div class="note-tooltip-arrow"></div>', '<div class="note-tooltip-content"></div>', "</div>"].join("")),
                    "manual" !== this.options.trigger) {
                        var o = this.show.bind(this)
                          , r = this.hide.bind(this)
                          , a = this.toggle.bind(this);
                        this.options.trigger.split(" ").forEach((function(t) {
                            "hover" === t ? (e.off("mouseenter mouseleave"),
                            e.on("mouseenter", o).on("mouseleave", r)) : "click" === t ? e.on("click", a) : "focus" === t && e.on("focus", o).on("blur", r)
                        }
                        ))
                    }
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "show",
                    value: function() {
                        var t = this.$node
                          , e = t.offset()
                          , n = i()(this.options.target).offset();
                        e.top -= n.top,
                        e.left -= n.left;
                        var o = this.$tooltip
                          , r = this.options.title || t.attr("title") || t.data("title")
                          , a = this.options.placement || t.data("placement");
                        o.addClass(a),
                        o.find(".note-tooltip-content").text(r),
                        o.appendTo(this.options.target);
                        var s = t.outerWidth()
                          , l = t.outerHeight()
                          , c = o.outerWidth()
                          , u = o.outerHeight();
                        "bottom" === a ? o.css({
                            top: e.top + l,
                            left: e.left + (s / 2 - c / 2)
                        }) : "top" === a ? o.css({
                            top: e.top - u,
                            left: e.left + (s / 2 - c / 2)
                        }) : "left" === a ? o.css({
                            top: e.top + (l / 2 - u / 2),
                            left: e.left - c
                        }) : "right" === a && o.css({
                            top: e.top + (l / 2 - u / 2),
                            left: e.left + s
                        }),
                        o.addClass("in")
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var t = this;
                        this.$tooltip.removeClass("in"),
                        setTimeout((function() {
                            t.$tooltip.remove()
                        }
                        ), 200)
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        this.$tooltip.hasClass("in") ? this.hide() : this.show()
                    }
                }]) && a(e.prototype, n),
                o && a(e, o),
                t
            }();
            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var c = function() {
                function t(e, n) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.$button = e,
                    this.options = i.a.extend({}, {
                        target: n.container
                    }, n),
                    this.setEvent()
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "setEvent",
                    value: function() {
                        var t = this;
                        this.$button.on("click", (function(e) {
                            t.toggle(),
                            e.stopImmediatePropagation()
                        }
                        ))
                    }
                }, {
                    key: "clear",
                    value: function() {
                        var t = i()(".note-btn-group.open");
                        t.find(".note-btn.active").removeClass("active"),
                        t.removeClass("open")
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.$button.addClass("active"),
                        this.$button.parent().addClass("open");
                        var t = this.$button.next()
                          , e = t.offset()
                          , n = t.outerWidth()
                          , o = i()(window).width()
                          , r = parseFloat(i()(this.options.target).css("margin-right"));
                        e.left + n > o - r ? t.css("margin-left", o - r - (e.left + n)) : t.css("margin-left", "")
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.$button.removeClass("active"),
                        this.$button.parent().removeClass("open")
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        var t = this.$button.parent().hasClass("open");
                        this.clear(),
                        t ? this.hide() : this.show()
                    }
                }]) && l(e.prototype, n),
                o && l(e, o),
                t
            }();
            i()(document).on("click", (function(t) {
                i()(t.target).closest(".note-btn-group").length || (i()(".note-btn-group.open").removeClass("open"),
                i()(".note-btn-group .note-btn.active").removeClass("active"))
            }
            )),
            i()(document).on("click.note-dropdown-menu", (function(t) {
                i()(t.target).closest(".note-dropdown-menu").parent().removeClass("open"),
                i()(t.target).closest(".note-dropdown-menu").parent().find(".note-btn.active").removeClass("active")
            }
            ));
            var u = c;
            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            var h = function() {
                function t(e) {
                    !function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                    this.$modal = e,
                    this.$backdrop = i()('<div class="note-modal-backdrop"/>')
                }
                var e, n, o;
                return e = t,
                (n = [{
                    key: "show",
                    value: function() {
                        var t = this;
                        this.$backdrop.appendTo(document.body).show(),
                        this.$modal.addClass("open").show(),
                        this.$modal.trigger("note.modal.show"),
                        this.$modal.off("click", ".close").on("click", ".close", this.hide.bind(this)),
                        this.$modal.on("keydown", (function(e) {
                            27 === e.which && (e.preventDefault(),
                            t.hide())
                        }
                        ))
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.$modal.removeClass("open").hide(),
                        this.$backdrop.hide(),
                        this.$modal.trigger("note.modal.hide"),
                        this.$modal.off("keydown")
                    }
                }]) && d(e.prototype, n),
                o && d(e, o),
                t
            }()
              , f = r.a.create('<div class="note-editor note-frame"/>')
              , p = r.a.create('<div class="note-toolbar" role="toolbar"/>')
              , m = r.a.create('<div class="note-editing-area"/>')
              , v = r.a.create('<textarea class="note-codable" aria-multiline="true"/>')
              , g = r.a.create('<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"/>')
              , b = r.a.create(['<output class="note-status-output" role="status" aria-live="polite"></output>', '<div class="note-statusbar" role="status">', '<div class="note-resizebar" aria-label="resize">', '<div class="note-icon-bar"></div>', '<div class="note-icon-bar"></div>', '<div class="note-icon-bar"></div>', "</div>", "</div>"].join(""))
              , k = r.a.create('<div class="note-editor note-airframe"/>')
              , y = r.a.create(['<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>', '<output class="note-status-output" role="status" aria-live="polite"></output>'].join(""))
              , w = r.a.create('<div class="note-btn-group">')
              , C = r.a.create('<button type="button" class="note-btn" tabindex="-1">', (function(t, e) {
                e && e.tooltip && (t.attr({
                    "aria-label": e.tooltip
                }),
                t.data("_lite_tooltip", new s(t,{
                    title: e.tooltip,
                    container: e.container
                })).on("click", (function(t) {
                    i()(t.currentTarget).data("_lite_tooltip").hide()
                }
                ))),
                e.contents && t.html(e.contents),
                e && e.data && "dropdown" === e.data.toggle && t.data("_lite_dropdown", new u(t,{
                    container: e.container
                })),
                e && e.codeviewKeepButton && t.addClass("note-codeview-keep")
            }
            ))
              , x = r.a.create('<div class="note-dropdown-menu" role="list">', (function(t, e) {
                var n = Array.isArray(e.items) ? e.items.map((function(t) {
                    var n = "string" == typeof t ? t : t.value || ""
                      , o = e.template ? e.template(t) : t
                      , r = i()('<a class="note-dropdown-item" href="#" data-value="' + n + '" role="listitem" aria-label="' + n + '"></a>');
                    return r.html(o).data("item", t),
                    r
                }
                )) : e.items;
                t.html(n).attr({
                    "aria-label": e.title
                }),
                t.on("click", "> .note-dropdown-item", (function(t) {
                    var n = i()(this)
                      , o = n.data("item")
                      , r = n.data("value");
                    o.click ? o.click(n) : e.itemClick && e.itemClick(t, o, r)
                }
                )),
                e && e.codeviewKeepButton && t.addClass("note-codeview-keep")
            }
            ))
              , S = r.a.create('<div class="note-dropdown-menu note-check" role="list">', (function(t, e) {
                var n = Array.isArray(e.items) ? e.items.map((function(t) {
                    var n = "string" == typeof t ? t : t.value || ""
                      , o = e.template ? e.template(t) : t
                      , r = i()('<a class="note-dropdown-item" href="#" data-value="' + n + '" role="listitem" aria-label="' + t + '"></a>');
                    return r.html([z(e.checkClassName), " ", o]).data("item", t),
                    r
                }
                )) : e.items;
                t.html(n).attr({
                    "aria-label": e.title
                }),
                t.on("click", "> .note-dropdown-item", (function(t) {
                    var n = i()(this)
                      , o = n.data("item")
                      , r = n.data("value");
                    o.click ? o.click(n) : e.itemClick && e.itemClick(t, o, r)
                }
                )),
                e && e.codeviewKeepButton && t.addClass("note-codeview-keep")
            }
            ))
              , T = function(t, e) {
                return t + " " + z(e.icons.caret, "span")
            }
              , E = function(t, e) {
                return w([C({
                    className: "dropdown-toggle",
                    contents: t.title + " " + z("note-icon-caret"),
                    tooltip: t.tooltip,
                    data: {
                        toggle: "dropdown"
                    }
                }), x({
                    className: t.className,
                    items: t.items,
                    template: t.template,
                    itemClick: t.itemClick
                })], {
                    callback: e
                }).render()
            }
              , $ = function(t, e) {
                return w([C({
                    className: "dropdown-toggle",
                    contents: t.title + " " + z("note-icon-caret"),
                    tooltip: t.tooltip,
                    data: {
                        toggle: "dropdown"
                    }
                }), S({
                    className: t.className,
                    checkClassName: t.checkClassName,
                    items: t.items,
                    template: t.template,
                    itemClick: t.itemClick
                })], {
                    callback: e
                }).render()
            }
              , N = function(t) {
                return w([C({
                    className: "dropdown-toggle",
                    contents: t.title + " " + z("note-icon-caret"),
                    tooltip: t.tooltip,
                    data: {
                        toggle: "dropdown"
                    }
                }), x([w({
                    className: "note-align",
                    children: t.items[0]
                }), w({
                    className: "note-list",
                    children: t.items[1]
                })])]).render()
            }
              , I = function(t) {
                return w([C({
                    className: "dropdown-toggle",
                    contents: t.title + " " + z("note-icon-caret"),
                    tooltip: t.tooltip,
                    data: {
                        toggle: "dropdown"
                    }
                }), x({
                    className: "note-table",
                    items: ['<div class="note-dimension-picker">', '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>', '<div class="note-dimension-picker-highlighted"></div>', '<div class="note-dimension-picker-unhighlighted"></div>', "</div>", '<div class="note-dimension-display">1 x 1</div>'].join("")
                })], {
                    callback: function(e) {
                        e.find(".note-dimension-picker-mousecatcher").css({
                            width: t.col + "em",
                            height: t.row + "em"
                        }).mousedown(t.itemClick).mousemove((function(e) {
                            !function(t, e, n) {
                                var o, r = i()(t.target.parentNode), a = r.next(), s = r.find(".note-dimension-picker-mousecatcher"), l = r.find(".note-dimension-picker-highlighted"), c = r.find(".note-dimension-picker-unhighlighted");
                                if (void 0 === t.offsetX) {
                                    var u = i()(t.target).offset();
                                    o = {
                                        x: t.pageX - u.left,
                                        y: t.pageY - u.top
                                    }
                                } else
                                    o = {
                                        x: t.offsetX,
                                        y: t.offsetY
                                    };
                                var d = Math.ceil(o.x / 18) || 1
                                  , h = Math.ceil(o.y / 18) || 1;
                                l.css({
                                    width: d + "em",
                                    height: h + "em"
                                }),
                                s.data("value", d + "x" + h),
                                d > 3 && d < e && c.css({
                                    width: d + 1 + "em"
                                }),
                                h > 3 && h < n && c.css({
                                    height: h + 1 + "em"
                                }),
                                a.html(d + " x " + h)
                            }(e, t.col, t.row)
                        }
                        ))
                    }
                }).render()
            }
              , P = r.a.create('<div class="note-color-palette"/>', (function(t, e) {
                for (var n = [], o = 0, r = e.colors.length; o < r; o++) {
                    for (var a = e.eventName, l = e.colors[o], c = e.colorsName[o], u = [], d = 0, h = l.length; d < h; d++) {
                        var f = l[d]
                          , p = c[d];
                        u.push(['<button type="button" class="note-btn note-color-btn"', 'style="background-color:', f, '" ', 'data-event="', a, '" ', 'data-value="', f, '" ', 'data-title="', p, '" ', 'aria-label="', p, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(""))
                    }
                    n.push('<div class="note-color-row">' + u.join("") + "</div>")
                }
                t.html(n.join("")),
                t.find(".note-color-btn").each((function() {
                    i()(this).data("_lite_tooltip", new s(i()(this),{
                        container: e.container
                    }))
                }
                ))
            }
            ))
              , R = function(t, e) {
                return w({
                    className: "note-color",
                    children: [C({
                        className: "note-current-color-button",
                        contents: t.title,
                        tooltip: t.lang.color.recent,
                        click: t.currentClick,
                        callback: function(t) {
                            var n = t.find(".note-recent-color");
                            "foreColor" !== e && (n.css("background-color", "#FFFF00"),
                            t.attr("data-backColor", "#FFFF00"))
                        }
                    }), C({
                        className: "dropdown-toggle",
                        contents: z("note-icon-caret"),
                        tooltip: t.lang.color.more,
                        data: {
                            toggle: "dropdown"
                        }
                    }), x({
                        items: ["<div>", '<div class="note-btn-group btn-background-color">', '<div class="note-palette-title">' + t.lang.color.background + "</div>", "<div>", '<button type="button" class="note-color-reset note-btn note-btn-block" data-event="backColor" data-value="transparent">', t.lang.color.transparent, "</button>", "</div>", '<div class="note-holder" data-event="backColor"></div>', '<div class="btn-sm">', '<input type="color" id="html5bcp" class="note-btn btn-default" value="#21104A" style="width:100%;" data-value="cp">', '<button type="button" class="note-color-reset btn" data-event="backColor" data-value="cpbackColor">', t.lang.color.cpSelect, "</button>", "</div>", "</div>", '<div class="note-btn-group btn-foreground-color">', '<div class="note-palette-title">' + t.lang.color.foreground + "</div>", "<div>", '<button type="button" class="note-color-reset note-btn note-btn-block" data-event="removeFormat" data-value="foreColor">', t.lang.color.resetToDefault, "</button>", "</div>", '<div class="note-holder" data-event="foreColor"></div>', '<div class="btn-sm">', '<input type="color" id="html5fcp" class="note-btn btn-default" value="#21104A" style="width:100%;" data-value="cp">', '<button type="button" class="note-color-reset btn" data-event="foreColor" data-value="cpforeColor">', t.lang.color.cpSelect, "</button>", "</div>", "</div>", "</div>"].join(""),
                        callback: function(n) {
                            n.find(".note-holder").each((function() {
                                var e = i()(this);
                                e.append(P({
                                    colors: t.colors,
                                    eventName: e.data("event")
                                }).render())
                            }
                            )),
                            "fore" === e ? (n.find(".btn-background-color").hide(),
                            n.css({
                                "min-width": "210px"
                            })) : "back" === e && (n.find(".btn-foreground-color").hide(),
                            n.css({
                                "min-width": "210px"
                            }))
                        },
                        click: function(n) {
                            var o = i()(n.target)
                              , r = o.data("event")
                              , a = o.data("value")
                              , s = document.getElementById("html5fcp").value
                              , l = document.getElementById("html5bcp").value;
                            if ("cp" === a ? n.stopPropagation() : "cpbackColor" === a ? a = l : "cpforeColor" === a && (a = s),
                            r && a) {
                                var c = "backColor" === r ? "background-color" : "color"
                                  , u = o.closest(".note-color").find(".note-recent-color")
                                  , d = o.closest(".note-color").find(".note-current-color-button");
                                u.css(c, a),
                                d.attr("data-" + r, a),
                                "fore" === e ? t.itemClick("foreColor", a) : "back" === e ? t.itemClick("backColor", a) : t.itemClick(r, a)
                            }
                        }
                    })]
                }).render()
            }
              , L = r.a.create('<div class="note-modal" aria-hidden="false" tabindex="-1" role="dialog"/>', (function(t, e) {
                e.fade && t.addClass("fade"),
                t.attr({
                    "aria-label": e.title
                }),
                t.html(['<div class="note-modal-content">', e.title ? '<div class="note-modal-header"><button type="button" class="close" aria-label="Close" aria-hidden="true"><i class="note-icon-close"></i></button><h4 class="note-modal-title">' + e.title + "</h4></div>" : "", '<div class="note-modal-body">' + e.body + "</div>", e.footer ? '<div class="note-modal-footer">' + e.footer + "</div>" : "", "</div>"].join("")),
                t.data("modal", new h(t,e))
            }
            ))
              , A = function(t) {
                var e = '<div class="note-form-group"><label for="note-dialog-video-url-' + t.id + '" class="note-form-label">' + t.lang.video.url + ' <small class="text-muted">' + t.lang.video.providers + '</small></label><input id="note-dialog-video-url-' + t.id + '" class="note-video-url note-input" type="text"/></div>'
                  , n = ['<button type="button" href="#" class="note-btn note-btn-primary note-video-btn disabled" disabled>', t.lang.video.insert, "</button>"].join("");
                return L({
                    title: t.lang.video.insert,
                    fade: t.fade,
                    body: e,
                    footer: n
                }).render()
            }
              , F = function(t) {
                var e = '<div class="note-form-group note-group-select-from-files"><label for="note-dialog-image-file-' + t.id + '" class="note-form-label">' + t.lang.image.selectFromFiles + '</label><input id="note-dialog-image-file-' + t.id + '" class="note-note-image-input note-input" type="file" name="files" accept="image/*" multiple="multiple"/>' + t.imageLimitation + '</div><div class="note-form-group"><label for="note-dialog-image-url-' + t.id + '" class="note-form-label">' + t.lang.image.url + '</label><input id="note-dialog-image-url-' + t.id + '" class="note-image-url note-input" type="text"/></div>'
                  , n = ['<button href="#" type="button" class="note-btn note-btn-primary note-btn-large note-image-btn disabled" disabled>', t.lang.image.insert, "</button>"].join("");
                return L({
                    title: t.lang.image.insert,
                    fade: t.fade,
                    body: e,
                    footer: n
                }).render()
            }
              , D = function(t) {
                var e = '<div class="note-form-group"><label for="note-dialog-link-txt-' + t.id + '" class="note-form-label">' + t.lang.link.textToDisplay + '</label><input id="note-dialog-link-txt-' + t.id + '" class="note-link-text note-input" type="text"/></div><div class="note-form-group"><label for="note-dialog-link-url-' + t.id + '" class="note-form-label">' + t.lang.link.url + '</label><input id="note-dialog-link-url-' + t.id + '" class="note-link-url note-input" type="text" value="http://"/></div>' + (t.disableLinkTarget ? "" : '<div class="checkbox"><label for="note-dialog-link-nw-' + t.id + '"><input id="note-dialog-link-nw-' + t.id + '" type="checkbox" checked> ' + t.lang.link.openInNewWindow + "</label></div>") + '<div class="checkbox"><label for="note-dialog-link-up-' + t.id + '"><input id="note-dialog-link-up-' + t.id + '" type="checkbox" checked> ' + t.lang.link.useProtocol + "</label></div>"
                  , n = ['<button href="#" type="button" class="note-btn note-btn-primary note-link-btn disabled" disabled>', t.lang.link.insert, "</button>"].join("");
                return L({
                    className: "link-dialog",
                    title: t.lang.link.insert,
                    fade: t.fade,
                    body: e,
                    footer: n
                }).render()
            }
              , H = r.a.create(['<div class="note-popover bottom">', '<div class="note-popover-arrow"></div>', '<div class="popover-content note-children-container"></div>', "</div>"].join(""), (function(t, e) {
                var n = void 0 !== e.direction ? e.direction : "bottom";
                t.addClass(n).hide(),
                e.hideArrow && t.find(".note-popover-arrow").hide()
            }
            ))
              , B = r.a.create('<div class="checkbox"></div>', (function(t, e) {
                t.html(["<label" + (e.id ? ' for="note-' + e.id + '"' : "") + ">", '<input role="checkbox" type="checkbox"' + (e.id ? ' id="note-' + e.id + '"' : ""), e.checked ? " checked" : "", ' aria-checked="' + (e.checked ? "true" : "false") + '"/>', e.text ? e.text : "", "</label>"].join(""))
            }
            ))
              , z = function(t, e) {
                return "<" + (e = e || "i") + ' class="' + t + '"/>'
            }
              , M = function(t) {
                return {
                    editor: f,
                    toolbar: p,
                    editingArea: m,
                    codable: v,
                    editable: g,
                    statusbar: b,
                    airEditor: k,
                    airEditable: y,
                    buttonGroup: w,
                    button: C,
                    dropdown: x,
                    dropdownCheck: S,
                    dropdownButton: E,
                    dropdownButtonContents: T,
                    dropdownCheckButton: $,
                    paragraphDropdownButton: N,
                    tableDropdownButton: I,
                    colorDropdownButton: R,
                    palette: P,
                    dialog: L,
                    videoDialog: A,
                    imageDialog: F,
                    linkDialog: D,
                    popover: H,
                    checkbox: B,
                    icon: z,
                    options: t,
                    toggleBtn: function(t, e) {
                        t.toggleClass("disabled", !e),
                        t.attr("disabled", !e)
                    },
                    toggleBtnActive: function(t, e) {
                        t.toggleClass("active", e)
                    },
                    check: function(t, e) {
                        t.find(".checked").removeClass("checked"),
                        t.find('[data-value="' + e + '"]').addClass("checked")
                    },
                    onDialogShown: function(t, e) {
                        t.one("note.modal.show", e)
                    },
                    onDialogHidden: function(t, e) {
                        t.one("note.modal.hide", e)
                    },
                    showDialog: function(t) {
                        t.data("modal").show()
                    },
                    hideDialog: function(t) {
                        t.data("modal").hide()
                    },
                    getPopoverContent: function(t) {
                        return t.find(".note-popover-content")
                    },
                    getDialogBody: function(t) {
                        return t.find(".note-modal-body")
                    },
                    createLayout: function(e) {
                        var n = (t.airMode ? k([m([v(), y()])]) : "bottom" === t.toolbarPosition ? f([m([v(), g()]), p(), b()]) : f([p(), m([v(), g()]), b()])).render();
                        return n.insertAfter(e),
                        {
                            note: e,
                            editor: n,
                            toolbar: n.find(".note-toolbar"),
                            editingArea: n.find(".note-editing-area"),
                            editable: n.find(".note-editable"),
                            codable: n.find(".note-codable"),
                            statusbar: n.find(".note-statusbar")
                        }
                    },
                    removeLayout: function(t, e) {
                        t.html(e.editable.html()),
                        e.editor.remove(),
                        t.off("summernote"),
                        t.show()
                    }
                }
            };
            n(3),
            n(6);
            i.a.summernote = i.a.extend(i.a.summernote, {
                ui_template: M,
                interface: "lite"
            })
        },
        6: function(t, e, n) {}
    })
}
));
//# sourceMappingURL=summernote-lite.min.js.map

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by HernÃ¡n Sartorio  */
!function(e) {
    e.fn.niceSelect = function(t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next()
              , n = t.find("option")
              , i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()),
            n.each(function(t) {
                var n = e(this)
                  , i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t)
            return "update" == t ? this.each(function() {
                var t = e(this)
                  , n = e(this).next(".nice-select")
                  , i = n.hasClass("open");
                n.length && (n.remove(),
                s(t),
                i && t.next().trigger("click"))
            }) : "destroy" == t ? (this.each(function() {
                var t = e(this)
                  , s = e(this).next(".nice-select");
                s.length && (s.remove(),
                t.css("display", ""))
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'),
            this;
        this.hide(),
        this.each(function() {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }),
        e(document).off(".nice_select"),
        e(document).on("click.nice_select", ".nice-select", function(t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"),
            s.toggleClass("open"),
            s.hasClass("open") ? (s.find(".option"),
            s.find(".focus").removeClass("focus"),
            s.find(".selected").addClass("focus")) : s.focus()
        }),
        e(document).on("click.nice_select", function(t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }),
        e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
            var s = e(this)
              , n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"),
            s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change")
        }),
        e(document).on("keydown.nice_select", ".nice-select", function(t) {
            var s = e(this)
              , n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode)
                return s.hasClass("open") ? n.trigger("click") : s.trigger("click"),
                !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"),
                    i.addClass("focus"))
                } else
                    s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"),
                    l.addClass("focus"))
                } else
                    s.trigger("click");
                return !1
            }
            if (27 == t.keyCode)
                s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open"))
                return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto",
        "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
        this
    }
}(jQuery);

/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */
(function($, window, document, undefined) {
    var OnePageNav = function(elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data("plugin-options");
        this.$win = $(window);
        this.sections = {};
        this.didScroll = false;
        this.$doc = $(document);
        this.docHeight = this.$doc.height()
    };
    OnePageNav.prototype = {
        defaults: {
            offsetHeight: 0,
            navItems: "a",
            currentClass: "current",
            changeHash: false,
            easing: "swing",
            filter: "",
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            begin: false,
            end: false,
            scrollChange: false
        },
        init: function() {
            this.config = $.extend({}, this.defaults, this.options, this.metadata);
            this.$nav = this.$elem.find(this.config.navItems);
            if (this.config.filter !== "") {
                this.$nav = this.$nav.filter(this.config.filter)
            }
            this.$nav.on("click.onePageNav", $.proxy(this.handleClick, this));
            this.getPositions();
            this.bindInterval();
            this.$win.on("resize.onePageNav", $.proxy(this.getPositions, this));
            return this
        },
        adjustNav: function(self, $parent) {
            self.$elem.find("." + self.config.currentClass).removeClass(self.config.currentClass);
            $parent.addClass(self.config.currentClass)
        },
        bindInterval: function() {
            var self = this;
            var docHeight;
            self.$win.on("scroll.onePageNav", function() {
                self.didScroll = true
            });
            self.t = setInterval(function() {
                docHeight = self.$doc.height();
                if (self.didScroll) {
                    self.didScroll = false;
                    self.scrollChange()
                }
                if (docHeight !== self.docHeight) {
                    self.docHeight = docHeight;
                    self.getPositions()
                }
            }, 250)
        },
        getHash: function($link) {
            return $link.attr("href").split("#")[1]
        },
        getPositions: function() {
            var self = this;
            var linkHref;
            var topPos;
            var $target;
            self.$nav.each(function() {
                linkHref = self.getHash($(this));
                $target = $("#" + linkHref);
                if ($target.length) {
                    topPos = $target.offset().top;
                    self.sections[linkHref] = Math.round(topPos)
                }
            })
        },
        getSection: function(windowPos) {
            var returnValue = null;
            var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var section in this.sections) {
                if ((this.sections[section] - windowHeight) < windowPos) {
                    returnValue = section
                }
            }
            return returnValue
        },
        handleClick: function(e) {
            var self = this;
            var $link = $(e.currentTarget);
            var $parent = $link.parent();
            var newLoc = "#" + self.getHash($link);
            if (!$parent.hasClass(self.config.currentClass)) {
                if (self.config.begin) {
                    self.config.begin()
                }
                self.adjustNav(self, $parent);
                self.unbindInterval();
                self.scrollTo(newLoc, function() {
                    if (self.config.changeHash) {
                        window.location.hash = newLoc
                    }
                    self.bindInterval();
                    if (self.config.end) {
                        self.config.end()
                    }
                })
            }
            e.preventDefault()
        },
        scrollChange: function() {
            var windowTop = this.$win.scrollTop();
            var position = this.getSection(windowTop);
            var $parent;
            if (position !== null) {
                $parent = this.$elem.find('a[href$="#' + position + '"]').parent();
                if (!$parent.hasClass(this.config.currentClass)) {
                    this.adjustNav(this, $parent);
                    if (this.config.scrollChange) {
                        this.config.scrollChange($parent)
                    }
                }
            }
        },
        scrollTo: function(target, callback) {
            var offset = $(target).offset().top - this.config.offsetHeight;
            $("html, body").animate({
                scrollTop: offset
            }, this.config.scrollSpeed, this.config.easing, callback)
        },
        unbindInterval: function() {
            clearInterval(this.t);
            this.$win.unbind("scroll.onePageNav")
        }
    };
    OnePageNav.defaults = OnePageNav.prototype.defaults;
    $.fn.onePageNav = function(options) {
        return this.each(function() {
            new OnePageNav(this,options).init()
        })
    }
}
)(jQuery, window, document);

/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!function(l, o, e) {
    "use strict";
    l.fn.scrollUp = function(o) {
        l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0),
        l.fn.scrollUp.init(o))
    }
    ,
    l.fn.scrollUp.init = function(r) {
        var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r), f = !1;
        switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
            id: p.scrollName,
            href: "#top"
        }),
        p.scrollTitle && d.attr("title", p.scrollTitle),
        d.appendTo("body"),
        p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
        d.css({
            display: "none",
            position: "fixed",
            zIndex: p.zIndex
        }),
        p.activeOverlay && l("<div/>", {
            id: p.scrollName + "-active"
        }).css({
            position: "absolute",
            top: p.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + p.activeOverlay,
            zIndex: p.zIndex
        }).appendTo("body"),
        p.animation) {
        case "fade":
            s = "fadeIn",
            t = "fadeOut",
            c = p.animationSpeed;
            break;
        case "slide":
            s = "slideDown",
            t = "slideUp",
            c = p.animationSpeed;
            break;
        default:
            s = "show",
            t = "hide",
            c = 0
        }
        i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance,
        n = l(o).scroll(function() {
            l(o).scrollTop() > i ? f || (d[s](c),
            f = !0) : f && (d[t](c),
            f = !1)
        }),
        p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0,
        d.click(function(o) {
            o.preventDefault(),
            l("html, body").animate({
                scrollTop: a
            }, p.scrollSpeed, p.easingType)
        })
    }
    ,
    l.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    },
    l.fn.scrollUp.destroy = function(r) {
        l.removeData(e.body, "scrollUp"),
        l("#" + l.fn.scrollUp.settings.scrollName).remove(),
        l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(),
        l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
    }
    ,
    l.scrollUp = l.fn.scrollUp
}(jQuery, window, document);

/*========= Wow Js =========*/
/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/
(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ;
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b)
                d = b[c],
                null == a[c] && (a[c] = d);
            return a
        }
        ,
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }
        ,
        a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1),
            null == c && (c = !1),
            null == d && (d = null),
            null != document.createEvent ? (e = document.createEvent("CustomEvent"),
            e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
            e.eventType = a) : e.eventName = a,
            e
        }
        ,
        a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }
        ,
        a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }
        ,
        a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }
        ,
        a.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        a
    }(),
    c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys,
            b = d = 0,
            e = f.length; e > d; b = ++d)
                if (c = f[b],
                c === a)
                    return this.values[b]
        }
        ,
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys,
            c = e = 0,
            f = g.length; f > e; c = ++e)
                if (d = g[c],
                d === a)
                    return void (this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        }
        ,
        a
    }()),
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {}
        ,
        a
    }()),
    d = this.getComputedStyle || function(a, b) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"),
            e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }),
            (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }
        ,
        this
    }
    ,
    e = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(a) {
            null == a && (a = {}),
            this.scrollCallback = f(this.scrollCallback, this),
            this.scrollHandler = f(this.scrollHandler, this),
            this.resetAnimation = f(this.resetAnimation, this),
            this.start = f(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)),
            this.animationNameCache = new c,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        },
        e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1,
            this.boxes = function() {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass),
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.all = function() {
                var a, c, d, e;
                for (d = this.boxes,
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (e = this.boxes,
                    c = 0,
                    d = e.length; d > c; c++)
                        b = e[c],
                        this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [],
                    c = 0,
                    d = b.length; d > c; c++)
                        f = b[c],
                        g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [],
                            d = [],
                            a = 0,
                            b = c.length; b > a; a++)
                                e = c[a],
                                d.push(this.doSync(e));
                            return d
                        }
                        .call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        e.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        e.prototype.sync = function(b) {
            return a.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element),
            1 === a.nodeType) {
                for (a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length; d > c; c++)
                    b = e[c],
                    g.call(this.all, b) < 0 ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                    f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }
        ,
        e.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = a.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
        }
        ,
        e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }
        ,
        e.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes,
            e = [],
            b = 0,
            c = d.length; c > b; b++)
                a = d[b],
                e.push(a.style.visibility = "visible");
            return e
        }
        ,
        e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement,
            b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }
        ,
        e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b)
                e = b[c],
                a["" + c] = e,
                d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors,
                    h = [],
                    b = 0,
                    d = g.length; d > b; b++)
                        f = g[b],
                        h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }
                .call(this));
            return d
        }
        ,
        e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a),
            g = h.getPropertyCSSValue(b),
            f = this.vendors,
            c = 0,
            e = f.length; e > c; c++)
                i = f[c],
                g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }
        ,
        e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes,
                e = [],
                b = 0,
                c = d.length; c > b; b++)
                    a = d[b],
                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        }
        ,
        e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }
        ,
        e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        e
    }()
}
).call(this);

/*
* Ajax Contact Form 
*/
$(function() {

    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('.form-message');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }).done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#contact-form input:not[type="submit"],#contact-form textarea').val('');
        }).fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });

});
