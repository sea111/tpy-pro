/*!
 *  - v1.2.1
 * Homepage: http://bqworks.com/slider-pro/
 * Author: bqworks
 * Author URL: http://bqworks.com/
 */
! function(a, b) {
	"use strict";
	b.SliderPro = {
		modules: [],
		addModule: function(a, c) {
			this.modules.push(a), b.extend(d.prototype, c)
		}
	};
	var c = b.SliderPro.namespace = "SliderPro",
		d = function(a, c) {
			this.instance = a, this.$slider = b(this.instance), this.$slides = null, this.$slidesMask = null, this.$slidesContainer = null, this.slides = [], this.slidesOrder = [], this.options = c, this.settings = {}, this.originalSettings = {}, this.originalGotoSlide = null, this.selectedSlideIndex = 0, this.previousSlideIndex = 0, this.middleSlidePosition = 0, this.supportedAnimation = null, this.vendorPrefix = null, this.transitionEvent = null, this.positionProperty = null, this.isIE = null, this.slidesPosition = 0, this.slideWidth = 0, this.slideHeight = 0, this.slideSize = 0, this.previousSlideWidth = 0, this.previousSlideHeight = 0, this.previousWindowWidth = 0, this.previousWindowHeight = 0, this.visibleOffset = 0, this.allowResize = !0, this.uniqueId = (new Date).valueOf(), this.breakpoints = [], this.currentBreakpoint = -1, this.shuffledIndexes = [], this._init()
		};
	d.prototype = {
		_init: function() {
			var d = this;
			this.supportedAnimation = f.getSupportedAnimation(), this.vendorPrefix = f.getVendorPrefix(), this.transitionEvent = f.getTransitionEvent(), this.isIE = f.checkIE(), this.$slider.removeClass("sp-no-js"), a.navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && this.$slider.addClass("ios");
			var e = /(msie) ([\w.]+)/,
				g = e.exec(a.navigator.userAgent.toLowerCase());
			this.isIE && this.$slider.addClass("ie"), null !== g && this.$slider.addClass("ie" + parseInt(g[2], 10)), this.$slidesContainer = b('<div class="sp-slides-container"></div>').appendTo(this.$slider), this.$slidesMask = b('<div class="sp-mask"></div>').appendTo(this.$slidesContainer), this.$slides = this.$slider.find(".sp-slides").appendTo(this.$slidesMask), this.$slider.find(".sp-slide").appendTo(this.$slides);
			var h = b.SliderPro.modules;
			if("undefined" != typeof h)
				for(var i = 0; i < h.length; i++) {
					var j = h[i].substring(0, 1).toLowerCase() + h[i].substring(1) + "Defaults";
					"undefined" != typeof this[j] && b.extend(this.defaults, this[j])
				}
			if(this.settings = b.extend({}, this.defaults, this.options), "undefined" != typeof h)
				for(var k = 0; k < h.length; k++) "undefined" != typeof this["init" + h[k]] && this["init" + h[k]]();
			if(this.originalSettings = b.extend({}, this.settings), this.originalGotoSlide = this.gotoSlide, null !== this.settings.breakpoints) {
				for(var l in this.settings.breakpoints) this.breakpoints.push({
					size: parseInt(l, 10),
					properties: this.settings.breakpoints[l]
				});
				this.breakpoints = this.breakpoints.sort(function(a, b) {
					return a.size >= b.size ? 1 : -1
				})
			}
			if(this.selectedSlideIndex = this.settings.startSlide, this.settings.shuffle === !0) {
				var m = this.$slides.find(".sp-slide"),
					n = [];
				m.each(function(a) {
					d.shuffledIndexes.push(a)
				});
				for(var o = this.shuffledIndexes.length - 1; o > 0; o--) {
					var p = Math.floor(Math.random() * (o + 1)),
						q = this.shuffledIndexes[o];
					this.shuffledIndexes[o] = this.shuffledIndexes[p], this.shuffledIndexes[p] = q
				}
				b.each(this.shuffledIndexes, function(a, b) {
					n.push(m[b])
				}), this.$slides.empty().append(n)
			}
			b(a).on("resize." + this.uniqueId + "." + c, function() {
				var c = b(a).width(),
					e = b(a).height();
				d.allowResize === !1 || d.previousWindowWidth === c && d.previousWindowHeight === e || (d.previousWindowWidth = c, d.previousWindowHeight = e, d.allowResize = !1, setTimeout(function() {
					d.resize(), d.allowResize = !0
				}, 200))
			}), this.on("update." + c, function() {
				d.previousSlideWidth = 0, d.resize()
			}), this.update(), this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).addClass("sp-selected"), this.trigger({
				type: "init"
			}), b.isFunction(this.settings.init) && this.settings.init.call(this, {
				type: "init"
			})
		},
		update: function() {
			var a = this;
			"horizontal" === this.settings.orientation ? (this.$slider.removeClass("sp-vertical").addClass("sp-horizontal"), this.$slider.css({
				height: "",
				"max-height": ""
			}), this.$slides.find(".sp-slide").css("top", "")) : "vertical" === this.settings.orientation && (this.$slider.removeClass("sp-horizontal").addClass("sp-vertical"), this.$slides.find(".sp-slide").css("left", "")), this.positionProperty = "horizontal" === this.settings.orientation ? "left" : "top", this.gotoSlide = this.originalGotoSlide;
			for(var c = this.slides.length - 1; c >= 0; c--)
				if(0 === this.$slider.find('.sp-slide[data-index="' + c + '"]').length) {
					var d = this.slides[c];
					d.destroy(), this.slides.splice(c, 1)
				}
			this.slidesOrder.length = 0, this.$slider.find(".sp-slide").each(function(c) {
				var d = b(this);
				"undefined" == typeof d.attr("data-init") ? a._createSlide(c, d) : a.slides[c].setIndex(c), a.slidesOrder.push(c)
			}), this.middleSlidePosition = parseInt((a.slidesOrder.length - 1) / 2, 10), this.settings.loop === !0 && this._updateSlidesOrder(), this.trigger({
				type: "update"
			}), b.isFunction(this.settings.update) && this.settings.update.call(this, {
				type: "update"
			})
		},
		_createSlide: function(a, c) {
			var d = new e(b(c), a, this.settings);
			this.slides.splice(a, 0, d)
		},
		_updateSlidesOrder: function() {
			var a, c, d = b.inArray(this.selectedSlideIndex, this.slidesOrder) - this.middleSlidePosition;
			if(0 > d)
				for(a = this.slidesOrder.splice(d, Math.abs(d)), c = a.length - 1; c >= 0; c--) this.slidesOrder.unshift(a[c]);
			else if(d > 0)
				for(a = this.slidesOrder.splice(0, d), c = 0; c <= a.length - 1; c++) this.slidesOrder.push(a[c])
		},
		_updateSlidesPosition: function() {
			for(var a = parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty), 10), b = 0; b < this.slidesOrder.length; b++) {
				var c = this.$slides.find(".sp-slide").eq(this.slidesOrder[b]);
				c.css(this.positionProperty, a + (b - this.middleSlidePosition) * (this.slideSize + this.settings.slideDistance))
			}
		},
		_resetSlidesPosition: function() {
			for(var a = 0; a < this.slidesOrder.length; a++) {
				var b = this.$slides.find(".sp-slide").eq(this.slidesOrder[a]);
				b.css(this.positionProperty, a * (this.slideSize + this.settings.slideDistance))
			}
			var c = -parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty), 10) + this.visibleOffset;
			this._moveTo(c, !0)
		},
		resize: function() {
			var c = this;
			if(null !== this.settings.breakpoints && this.breakpoints.length > 0)
				if(b(a).width() > this.breakpoints[this.breakpoints.length - 1].size && -1 !== this.currentBreakpoint) this.currentBreakpoint = -1, this._setProperties(this.originalSettings, !1);
				else
					for(var d = 0, e = this.breakpoints.length; e > d; d++)
						if(b(a).width() <= this.breakpoints[d].size) {
							if(this.currentBreakpoint !== this.breakpoints[d].size) {
								var f = {
									type: "breakpointReach",
									size: this.breakpoints[d].size,
									settings: this.breakpoints[d].properties
								};
								this.trigger(f), b.isFunction(this.settings.breakpointReach) && this.settings.breakpointReach.call(this, f), this.currentBreakpoint = this.breakpoints[d].size;
								var g = b.extend({}, this.originalSettings, this.breakpoints[d].properties);
								return void this._setProperties(g, !1)
							}
							break
						}
			this.settings.responsive === !0 ? "fullWidth" !== this.settings.forceSize && "fullWindow" !== this.settings.forceSize || "auto" !== this.settings.visibleSize && ("auto" === this.settings.visibleSize || "vertical" !== this.settings.orientation) ? this.$slider.css({
				width: this.settings.width,
				"max-width": this.settings.width,
				marginLeft: ""
			}) : (this.$slider.css("margin", 0), this.$slider.css({
				width: b(a).width(),
				"max-width": "",
				marginLeft: -this.$slider.offset().left
			})) : this.$slider.css({
				width: this.settings.width
			}), -1 === this.settings.aspectRatio && (this.settings.aspectRatio = this.settings.width / this.settings.height), this.slideWidth = this.$slider.width(), this.slideHeight = "fullWindow" === this.settings.forceSize ? b(a).height() : isNaN(this.settings.aspectRatio) ? this.settings.height : this.slideWidth / this.settings.aspectRatio, (this.previousSlideWidth !== this.slideWidth || this.previousSlideHeight !== this.slideHeight || "auto" !== this.settings.visibleSize || this.$slider.outerWidth() > this.$slider.parent().width() || this.$slider.width() !== this.$slidesMask.width()) && (this.previousSlideWidth = this.slideWidth, this.previousSlideHeight = this.slideHeight, this.slideSize = "horizontal" === this.settings.orientation ? this.slideWidth : this.slideHeight, this.visibleSlidesSize = this.slideSize, this.visibleOffset = 0, b.each(this.slides, function(a, b) {
				b.setSize(c.slideWidth, c.slideHeight)
			}), this.$slidesMask.css({
				width: this.slideWidth,
				height: this.slideHeight
			}), this.settings.autoHeight === !0 ? setTimeout(function() {
				c._resizeHeight()
			}, 1) : this.$slidesMask.css(this.vendorPrefix + "transition", ""), "auto" !== this.settings.visibleSize && ("horizontal" === this.settings.orientation ? ("fullWidth" === this.settings.forceSize || "fullWindow" === this.settings.forceSize ? (this.$slider.css("margin", 0), this.$slider.css({
				width: b(a).width(),
				"max-width": "",
				marginLeft: -this.$slider.offset().left
			})) : this.$slider.css({
				width: this.settings.visibleSize,
				"max-width": "100%",
				marginLeft: 0
			}), this.$slidesMask.css("width", this.$slider.width()), this.visibleSlidesSize = this.$slidesMask.width(), this.visibleOffset = Math.round((this.$slider.width() - this.slideWidth) / 2)) : (this.$slider.css("fullWindow" === this.settings.forceSize ? {
				height: b(a).height(),
				"max-height": ""
			} : {
				height: this.settings.visibleSize,
				"max-height": "100%"
			}), this.$slidesMask.css("height", this.$slider.height()), this.visibleSlidesSize = this.$slidesMask.height(), this.visibleOffset = Math.round((this.$slider.height() - this.slideHeight) / 2))), this._resetSlidesPosition(), this.trigger({
				type: "sliderResize"
			}), b.isFunction(this.settings.sliderResize) && this.settings.sliderResize.call(this, {
				type: "sliderResize"
			}))
		},
		_resizeHeight: function() {
			var a = this,
				b = this.getSlideAt(this.selectedSlideIndex),
				d = b.getSize();
			b.off("imagesLoaded." + c), b.on("imagesLoaded." + c, function(c) {
				if(c.index === a.selectedSlideIndex) {
					var d = b.getSize();
					a._resizeHeightTo(d.height)
				}
			}), "loading" !== d && this._resizeHeightTo(d.height)
		},
		gotoSlide: function(a) {
			if(a !== this.selectedSlideIndex && "undefined" != typeof this.slides[a]) {
				var c = this;
				this.previousSlideIndex = this.selectedSlideIndex, this.selectedSlideIndex = a, this.$slides.find(".sp-selected").removeClass("sp-selected"), this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).addClass("sp-selected"), this.settings.loop === !0 && (this._updateSlidesOrder(), this._updateSlidesPosition()), this.settings.autoHeight === !0 && this._resizeHeight();
				var d = -parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty), 10) + this.visibleOffset;
				this._moveTo(d, !1, function() {
					c.settings.loop === !0 && c._resetSlidesPosition(), c.trigger({
						type: "gotoSlideComplete",
						index: a,
						previousIndex: c.previousSlideIndex
					}), b.isFunction(c.settings.gotoSlideComplete) && c.settings.gotoSlideComplete.call(c, {
						type: "gotoSlideComplete",
						index: a,
						previousIndex: c.previousSlideIndex
					})
				}), this.trigger({
					type: "gotoSlide",
					index: a,
					previousIndex: this.previousSlideIndex
				}), b.isFunction(this.settings.gotoSlide) && this.settings.gotoSlide.call(this, {
					type: "gotoSlide",
					index: a,
					previousIndex: this.previousSlideIndex
				})
			}
		},
		nextSlide: function() {
			var a = this.selectedSlideIndex >= this.getTotalSlides() - 1 ? 0 : this.selectedSlideIndex + 1;
			this.gotoSlide(a)
		},
		previousSlide: function() {
			var a = this.selectedSlideIndex <= 0 ? this.getTotalSlides() - 1 : this.selectedSlideIndex - 1;
			this.gotoSlide(a)
		},
		_moveTo: function(a, b, c) {
			var d = this,
				e = {};
			if(a !== this.slidesPosition)
				if(this.slidesPosition = a, "css-3d" !== this.supportedAnimation && "css-2d" !== this.supportedAnimation || this.isIE !== !1) e["margin-" + this.positionProperty] = a, "undefined" != typeof b && b === !0 ? this.$slides.css(e) : (this.$slides.addClass("sp-animated"), this.$slides.animate(e, this.settings.slideAnimationDuration, function() {
					d.$slides.removeClass("sp-animated"), "function" == typeof c && c()
				}));
				else {
					var f, g = "horizontal" === this.settings.orientation ? a : 0,
						h = "horizontal" === this.settings.orientation ? 0 : a;
					e[this.vendorPrefix + "transform"] = "css-3d" === this.supportedAnimation ? "translate3d(" + g + "px, " + h + "px, 0)" : "translate(" + g + "px, " + h + "px)", "undefined" != typeof b && b === !0 ? f = "" : (this.$slides.addClass("sp-animated"), f = this.vendorPrefix + "transform " + this.settings.slideAnimationDuration / 1e3 + "s", this.$slides.on(this.transitionEvent, function(a) {
						a.target === a.currentTarget && (d.$slides.off(d.transitionEvent), d.$slides.removeClass("sp-animated"), "function" == typeof c && c())
					})), e[this.vendorPrefix + "transition"] = f, this.$slides.css(e)
				}
		},
		_stopMovement: function() {
			var a = {};
			if("css-3d" !== this.supportedAnimation && "css-2d" !== this.supportedAnimation || this.isIE !== !1) this.$slides.stop(), this.slidesPosition = parseInt(this.$slides.css("margin-" + this.positionProperty), 10);
			else {
				var b = this.$slides.css(this.vendorPrefix + "transform"),
					c = -1 !== b.indexOf("matrix3d") ? "matrix3d" : "matrix",
					d = b.replace(c, "").match(/-?[0-9\.]+/g),
					e = "matrix3d" === c ? parseInt(d[12], 10) : parseInt(d[4], 10),
					f = "matrix3d" === c ? parseInt(d[13], 10) : parseInt(d[5], 10);
				a[this.vendorPrefix + "transform"] = "css-3d" === this.supportedAnimation ? "translate3d(" + e + "px, " + f + "px, 0)" : "translate(" + e + "px, " + f + "px)", a[this.vendorPrefix + "transition"] = "", this.$slides.css(a), this.$slides.off(this.transitionEvent), this.slidesPosition = "horizontal" === this.settings.orientation ? e : f
			}
			this.$slides.removeClass("sp-animated")
		},
		_resizeHeightTo: function(a) {
			var c = this,
				d = {
					height: a
				};
			"css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation ? (d[this.vendorPrefix + "transition"] = "height " + this.settings.heightAnimationDuration / 1e3 + "s", this.$slidesMask.off(this.transitionEvent), this.$slidesMask.on(this.transitionEvent, function(a) {
				a.target === a.currentTarget && (c.$slidesMask.off(c.transitionEvent), c.trigger({
					type: "resizeHeightComplete"
				}), b.isFunction(c.settings.resizeHeightComplete) && c.settings.resizeHeightComplete.call(c, {
					type: "resizeHeightComplete"
				}))
			}), this.$slidesMask.css(d)) : this.$slidesMask.stop().animate(d, this.settings.heightAnimationDuration, function() {
				c.trigger({
					type: "resizeHeightComplete"
				}), b.isFunction(c.settings.resizeHeightComplete) && c.settings.resizeHeightComplete.call(c, {
					type: "resizeHeightComplete"
				})
			})
		},
		destroy: function() {
			this.$slider.removeData("sliderPro"), this.$slider.removeAttr("style"), this.$slides.removeAttr("style"), this.off("update." + c), b(a).off("resize." + this.uniqueId + "." + c);
			var d = b.SliderPro.modules;
			if("undefined" != typeof d)
				for(var e = 0; e < d.length; e++) "undefined" != typeof this["destroy" + d[e]] && this["destroy" + d[e]]();
			b.each(this.slides, function(a, b) {
				b.destroy()
			}), this.slides.length = 0, this.$slides.prependTo(this.$slider), this.$slidesContainer.remove()
		},
		_setProperties: function(a, b) {
			for(var c in a) this.settings[c] = a[c], b !== !1 && (this.originalSettings[c] = a[c]);
			this.update()
		},
		on: function(a, b) {
			return this.$slider.on(a, b)
		},
		off: function(a) {
			return this.$slider.off(a)
		},
		trigger: function(a) {
			return this.$slider.triggerHandler(a)
		},
		getSlideAt: function(a) {
			return this.slides[a]
		},
		getSelectedSlide: function() {
			return this.selectedSlideIndex
		},
		getTotalSlides: function() {
			return this.slides.length
		},
		defaults: {
			width: 500,
			height: 300,
			responsive: !0,
			aspectRatio: -1,
			imageScaleMode: "cover",
			centerImage: !0,
			autoHeight: !1,
			startSlide: 0,
			shuffle: !1,
			orientation: "horizontal",
			forceSize: "none",
			loop: !0,
			slideDistance: 10,
			slideAnimationDuration: 700,
			heightAnimationDuration: 700,
			visibleSize: "auto",
			breakpoints: null,
			init: function() {},
			update: function() {},
			sliderResize: function() {},
			gotoSlide: function() {},
			gotoSlideComplete: function() {},
			resizeHeightComplete: function() {},
			breakpointReach: function() {}
		}
	};
	var e = function(a, b, c) {
		this.$slide = a, this.$mainImage = null, this.$imageContainer = null, this.hasMainImage = !1, this.isMainImageLoaded = !1, this.isMainImageLoading = !1, this.hasImages = !1, this.areImagesLoaded = !1, this.width = 0, this.height = 0, this.settings = c, this.setIndex(b), this._init()
	};
	e.prototype = {
		_init: function() {
			this.$slide.attr("data-init", !0), this.$mainImage = 0 !== this.$slide.find(".sp-image").length ? this.$slide.find(".sp-image") : null, null !== this.$mainImage && (this.hasMainImage = !0, this.$imageContainer = b('<div class="sp-image-container"></div>').prependTo(this.$slide), 0 !== this.$mainImage.parent("a").length ? this.$mainImage.parent("a").appendTo(this.$imageContainer) : this.$mainImage.appendTo(this.$imageContainer)), this.hasImages = 0 !== this.$slide.find("img").length ? !0 : !1
		},
		setSize: function(a, b) {
			this.width = a, this.height = this.settings.autoHeight === !0 ? "auto" : b, this.$slide.css({
				width: this.width,
				height: this.height
			}), this.hasMainImage === !0 && (this.$imageContainer.css({
				width: this.width,
				height: this.height
			}), "undefined" == typeof this.$mainImage.attr("data-src") && this.resizeMainImage())
		},
		getSize: function() {
			var a, b = this;
			if(this.hasImages === !0 && this.areImagesLoaded === !1 && "undefined" == typeof this.$slide.attr("data-loading")) {
				this.$slide.attr("data-loading", !0);
				var d = f.checkImagesComplete(this.$slide, function() {
					b.areImagesLoaded = !0, b.$slide.removeAttr("data-loading"), b.trigger({
						type: "imagesLoaded." + c,
						index: b.index
					})
				});
				return "complete" === d ? (a = this.calculateSize(), {
					width: a.width,
					height: a.height
				}) : "loading"
			}
			return a = this.calculateSize(), {
				width: a.width,
				height: a.height
			}
		},
		calculateSize: function() {
			var a = this.$slide.width(),
				c = this.$slide.height();
			return this.$slide.children().each(function(d, e) {
				var f = b(e);
				if(f.is(":hidden") !== !0) {
					var g = e.getBoundingClientRect(),
						h = f.position().top + (g.bottom - g.top),
						i = f.position().left + (g.right - g.left);
					h > c && (c = h), i > a && (a = i)
				}
			}), {
				width: a,
				height: c
			}
		},
		resizeMainImage: function(a) {
			var b = this;
			return a === !0 && (this.isMainImageLoaded = !1, this.isMainImageLoading = !1), this.isMainImageLoaded === !1 && this.isMainImageLoading === !1 ? (this.isMainImageLoading = !0, void f.checkImagesComplete(this.$mainImage, function() {
				b.isMainImageLoaded = !0, b.isMainImageLoading = !1, b.resizeMainImage(), b.trigger({
					type: "imagesLoaded." + c,
					index: b.index
				})
			})) : void(this.settings.autoHeight === !0 ? this.$mainImage.css({
				width: "100%",
				height: "auto",
				marginLeft: "",
				marginTop: ""
			}) : ("cover" === this.settings.imageScaleMode ? this.$mainImage.css(this.$mainImage.width() / this.$mainImage.height() <= this.width / this.height ? {
				width: "100%",
				height: "auto"
			} : {
				width: "auto",
				height: "100%"
			}) : "contain" === this.settings.imageScaleMode ? this.$mainImage.css(this.$mainImage.width() / this.$mainImage.height() >= this.width / this.height ? {
				width: "100%",
				height: "auto"
			} : {
				width: "auto",
				height: "100%"
			}) : "exact" === this.settings.imageScaleMode && this.$mainImage.css({
				width: "100%",
				height: "100%"
			}), this.settings.centerImage === !0 && this.$mainImage.css({
				marginLeft: .5 * (this.$imageContainer.width() - this.$mainImage.width()),
				marginTop: .5 * (this.$imageContainer.height() - this.$mainImage.height())
			})))
		},
		destroy: function() {
			this.$slide.removeAttr("style"), this.$slide.removeAttr("data-init"), this.$slide.removeAttr("data-index"), this.$slide.removeAttr("data-loaded"), this.hasMainImage === !0 && (this.$slide.find(".sp-image").removeAttr("style").appendTo(this.$slide), this.$slide.find(".sp-image-container").remove())
		},
		getIndex: function() {
			return this.index
		},
		setIndex: function(a) {
			this.index = a, this.$slide.attr("data-index", this.index)
		},
		on: function(a, b) {
			return this.$slide.on(a, b)
		},
		off: function(a) {
			return this.$slide.off(a)
		},
		trigger: function(a) {
			return this.$slide.triggerHandler(a)
		}
	}, a.SliderPro = d, a.SliderProSlide = e, b.fn.sliderPro = function(a) {
		var c = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			if("undefined" == typeof b(this).data("sliderPro")) {
				var e = new d(this, a);
				b(this).data("sliderPro", e)
			} else if("undefined" != typeof a) {
				var f = b(this).data("sliderPro");
				if("function" == typeof f[a]) f[a].apply(f, c);
				else if("undefined" != typeof f.settings[a]) {
					var g = {};
					g[a] = c[0], f._setProperties(g)
				} else "object" == typeof a ? f._setProperties(a) : b.error(a + " does not exist in sliderPro.")
			}
		})
	};
	var f = {
		supportedAnimation: null,
		vendorPrefix: null,
		transitionEvent: null,
		isIE: null,
		getSupportedAnimation: function() {
			if(null !== this.supportedAnimation) return this.supportedAnimation;
			var a = document.body || document.documentElement,
				b = a.style,
				c = "undefined" != typeof b.transition || "undefined" != typeof b.WebkitTransition || "undefined" != typeof b.MozTransition || "undefined" != typeof b.OTransition;
			if(c === !0) {
				var d = document.createElement("div");
				if(("undefined" != typeof d.style.WebkitPerspective || "undefined" != typeof d.style.perspective) && (this.supportedAnimation = "css-3d"), "css-3d" === this.supportedAnimation && "undefined" != typeof d.styleWebkitPerspective) {
					var e = document.createElement("style");
					e.textContent = "@media (transform-3d),(-webkit-transform-3d){#test-3d{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0;}}", document.getElementsByTagName("head")[0].appendChild(e), d.id = "test-3d", document.body.appendChild(d), (9 !== d.offsetLeft || 5 !== d.offsetHeight) && (this.supportedAnimation = null), e.parentNode.removeChild(e), d.parentNode.removeChild(d)
				}
				null !== this.supportedAnimation || "undefined" == typeof d.style["-webkit-transform"] && "undefined" == typeof d.style.transform || (this.supportedAnimation = "css-2d")
			} else this.supportedAnimation = "javascript";
			return this.supportedAnimation
		},
		getVendorPrefix: function() {
			if(null !== this.vendorPrefix) return this.vendorPrefix;
			var a = document.createElement("div"),
				b = ["Webkit", "Moz", "ms", "O"];
			if("transform" in a.style) return this.vendorPrefix = "", this.vendorPrefix;
			for(var c = 0; c < b.length; c++)
				if(b[c] + "Transform" in a.style) {
					this.vendorPrefix = "-" + b[c].toLowerCase() + "-";
					break
				}
			return this.vendorPrefix
		},
		getTransitionEvent: function() {
			if(null !== this.transitionEvent) return this.transitionEvent;
			var a = document.createElement("div"),
				b = {
					transition: "transitionend",
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd"
				};
			for(var c in b)
				if(c in a.style) {
					this.transitionEvent = b[c];
					break
				}
			return this.transitionEvent
		},
		checkImagesComplete: function(a, b) {
			var c = this,
				d = this.checkImagesStatus(a);
			if("loading" === d) var e = setInterval(function() {
				d = c.checkImagesStatus(a), "complete" === d && (clearInterval(e), "function" == typeof b && b())
			}, 100);
			else "function" == typeof b && b();
			return d
		},
		checkImagesStatus: function(a) {
			var c = "complete";
			return a.is("img") && a[0].complete === !1 ? c = "loading" : a.find("img").each(function() {
				var a = b(this)[0];
				a.complete === !1 && (c = "loading")
			}), c
		},
		checkIE: function() {
			if(null !== this.isIE) return this.isIE; {
				var b = a.navigator.userAgent;
				b.indexOf("MSIE")
			}
			return this.isIE = -1 !== b.indexOf("MSIE") || b.match(/Trident.*rv\:11\./) ? !0 : !1, this.isIE
		}
	};
	a.SliderProUtils = f
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "Thumbnails." + b.SliderPro.namespace,
		d = {
			$thumbnails: null,
			$thumbnailsContainer: null,
			thumbnails: null,
			selectedThumbnailIndex: 0,
			thumbnailsSize: 0,
			thumbnailsContainerSize: 0,
			thumbnailsPosition: 0,
			thumbnailsOrientation: null,
			thumbnailsPositionProperty: null,
			isThumbnailScroller: !1,
			initThumbnails: function() {
				var a = this;
				this.thumbnails = [], this.on("update." + c, b.proxy(this._thumbnailsOnUpdate, this)), this.on("sliderResize." + c, b.proxy(this._thumbnailsOnResize, this)), this.on("gotoSlide." + c, function(b) {
					a._gotoThumbnail(b.index)
				})
			},
			_thumbnailsOnUpdate: function() {
				var a = this;
				if(0 === this.$slider.find(".sp-thumbnail").length && 0 === this.thumbnails.length) return void(this.isThumbnailScroller = !1);
				if(this.isThumbnailScroller = !0, null === this.$thumbnailsContainer && (this.$thumbnailsContainer = b('<div class="sp-thumbnails-container"></div>').insertAfter(this.$slidesContainer)), null === this.$thumbnails)
					if(0 !== this.$slider.find(".sp-thumbnails").length) {
						if(this.$thumbnails = this.$slider.find(".sp-thumbnails").appendTo(this.$thumbnailsContainer), this.settings.shuffle === !0) {
							var c = this.$thumbnails.find(".sp-thumbnail"),
								d = [];
							b.each(this.shuffledIndexes, function(a, e) {
								var f = b(c[e]);
								0 !== f.parent("a").length && (f = f.parent("a")), d.push(f)
							}), this.$thumbnails.empty().append(d)
						}
					} else this.$thumbnails = b('<div class="sp-thumbnails"></div>').appendTo(this.$thumbnailsContainer);
				this.$slides.find(".sp-thumbnail").each(function() {
					var c = b(this),
						d = c.parents(".sp-slide").index(),
						e = a.$thumbnails.find(".sp-thumbnail").length - 1;
					0 !== c.parent("a").length && (c = c.parent("a")), d > e ? c.appendTo(a.$thumbnails) : c.insertBefore(a.$thumbnails.find(".sp-thumbnail").eq(d))
				});
				for(var e = this.thumbnails.length - 1; e >= 0; e--)
					if(0 === this.$thumbnails.find('.sp-thumbnail[data-index="' + e + '"]').length) {
						var f = this.thumbnails[e];
						f.destroy(), this.thumbnails.splice(e, 1)
					}
				this.$thumbnails.find(".sp-thumbnail").each(function(c) {
					var d = b(this);
					"undefined" == typeof d.attr("data-init") ? a._createThumbnail(d, c) : a.thumbnails[c].setIndex(c)
				}), this.$thumbnailsContainer.removeClass("sp-top-thumbnails sp-bottom-thumbnails sp-left-thumbnails sp-right-thumbnails"), "top" === this.settings.thumbnailsPosition ? (this.$thumbnailsContainer.addClass("sp-top-thumbnails"), this.thumbnailsOrientation = "horizontal") : "bottom" === this.settings.thumbnailsPosition ? (this.$thumbnailsContainer.addClass("sp-bottom-thumbnails"), this.thumbnailsOrientation = "horizontal") : "left" === this.settings.thumbnailsPosition ? (this.$thumbnailsContainer.addClass("sp-left-thumbnails"), this.thumbnailsOrientation = "vertical") : "right" === this.settings.thumbnailsPosition && (this.$thumbnailsContainer.addClass("sp-right-thumbnails"), this.thumbnailsOrientation = "vertical"), this.settings.thumbnailPointer === !0 ? this.$thumbnailsContainer.addClass("sp-has-pointer") : this.$thumbnailsContainer.removeClass("sp-has-pointer"), this.selectedThumbnailIndex = this.selectedSlideIndex, this.$thumbnails.find(".sp-thumbnail-container").eq(this.selectedThumbnailIndex).addClass("sp-selected-thumbnail"), this.thumbnailsSize = 0, b.each(this.thumbnails, function(b, c) {
					c.setSize(a.settings.thumbnailWidth, a.settings.thumbnailHeight), a.thumbnailsSize += "horizontal" === a.thumbnailsOrientation ? c.getSize().width : c.getSize().height
				}), "horizontal" === this.thumbnailsOrientation ? (this.$thumbnails.css({
					width: this.thumbnailsSize,
					height: this.settings.thumbnailHeight
				}), this.$thumbnailsContainer.css("height", ""), this.thumbnailsPositionProperty = "left") : (this.$thumbnails.css({
					width: this.settings.thumbnailWidth,
					height: this.thumbnailsSize
				}), this.$thumbnailsContainer.css("width", ""), this.thumbnailsPositionProperty = "top"), this.trigger({
					type: "thumbnailsUpdate"
				}), b.isFunction(this.settings.thumbnailsUpdate) && this.settings.thumbnailsUpdate.call(this, {
					type: "thumbnailsUpdate"
				})
			},
			_createThumbnail: function(a, b) {
				var d = this,
					f = new e(a, this.$thumbnails, b);
				f.on("thumbnailClick." + c, function(a) {
					d.gotoSlide(a.index)
				}), this.thumbnails.splice(b, 0, f)
			},
			_thumbnailsOnResize: function() {
				if(this.isThumbnailScroller !== !1) {
					var c, d = this;
					"horizontal" === this.thumbnailsOrientation ? (this.thumbnailsContainerSize = Math.min(this.$slidesMask.width(), this.thumbnailsSize), this.$thumbnailsContainer.css("width", this.thumbnailsContainerSize), "fullWindow" === this.settings.forceSize && (this.$slidesMask.css("height", this.$slidesMask.height() - this.$thumbnailsContainer.outerHeight(!0)), this.slideHeight = this.$slidesMask.height(), b.each(this.slides, function(a, b) {
						b.setSize(d.slideWidth, d.slideHeight)
					}))) : "vertical" === this.thumbnailsOrientation && (this.$slidesMask.width() + this.$thumbnailsContainer.outerWidth(!0) > this.$slider.parent().width() && ("fullWidth" === this.settings.forceSize || "fullWindow" === this.settings.forceSize ? this.$slider.css("max-width", b(a).width() - this.$thumbnailsContainer.outerWidth(!0)) : this.$slider.css("max-width", this.$slider.parent().width() - this.$thumbnailsContainer.outerWidth(!0)), this.$slidesMask.css("width", this.$slider.width()), "horizontal" === this.settings.orientation ? (this.visibleOffset = Math.round((this.$slider.width() - this.slideSize) / 2), this.visibleSlidesSize = this.$slidesMask.width()) : "vertical" === this.settings.orientation && (this.slideWidth = this.$slider.width(), b.each(this.slides, function(a, b) {
						b.setSize(d.slideWidth, d.slideHeight)
					})), this._resetSlidesPosition()), this.thumbnailsContainerSize = Math.min(this.$slidesMask.height(), this.thumbnailsSize), this.$thumbnailsContainer.css("height", this.thumbnailsContainerSize)), c = this.thumbnailsSize <= this.thumbnailsContainerSize || 0 === this.$thumbnails.find(".sp-selected-thumbnail").length ? 0 : Math.max(-this.thumbnails[this.selectedThumbnailIndex].getPosition()[this.thumbnailsPositionProperty], this.thumbnailsContainerSize - this.thumbnailsSize), "top" === this.settings.thumbnailsPosition ? this.$slider.css({
						paddingTop: this.$thumbnailsContainer.outerHeight(!0),
						paddingLeft: "",
						paddingRight: ""
					}) : "bottom" === this.settings.thumbnailsPosition ? this.$slider.css({
						paddingTop: "",
						paddingLeft: "",
						paddingRight: ""
					}) : "left" === this.settings.thumbnailsPosition ? this.$slider.css({
						paddingTop: "",
						paddingLeft: this.$thumbnailsContainer.outerWidth(!0),
						paddingRight: ""
					}) : "right" === this.settings.thumbnailsPosition && this.$slider.css({
						paddingTop: "",
						paddingLeft: "",
						paddingRight: this.$thumbnailsContainer.outerWidth(!0)
					}), this._moveThumbnailsTo(c, !0)
				}
			},
			_gotoThumbnail: function(a) {
				if(this.isThumbnailScroller !== !1 && "undefined" != typeof this.thumbnails[a]) {
					var c = this.selectedThumbnailIndex,
						d = this.thumbnailsPosition;
					if(this.selectedThumbnailIndex = a, this.$thumbnails.find(".sp-selected-thumbnail").removeClass("sp-selected-thumbnail"), this.$thumbnails.find(".sp-thumbnail-container").eq(this.selectedThumbnailIndex).addClass("sp-selected-thumbnail"), this.selectedThumbnailIndex >= c) {
						var e = this.selectedThumbnailIndex === this.thumbnails.length - 1 ? this.selectedThumbnailIndex : this.selectedThumbnailIndex + 1,
							f = this.thumbnails[e],
							g = "horizontal" === this.thumbnailsOrientation ? f.getPosition().right : f.getPosition().bottom,
							h = -this.thumbnailsPosition + this.thumbnailsContainerSize;
						g > h && (d = this.thumbnailsPosition - (g - h))
					} else if(this.selectedThumbnailIndex < c) {
						var i = 0 === this.selectedThumbnailIndex ? this.selectedThumbnailIndex : this.selectedThumbnailIndex - 1,
							j = this.thumbnails[i],
							k = "horizontal" === this.thumbnailsOrientation ? j.getPosition().left : j.getPosition().top;
						k < -this.thumbnailsPosition && (d = -k)
					}
					this._moveThumbnailsTo(d), this.trigger({
						type: "gotoThumbnail"
					}), b.isFunction(this.settings.gotoThumbnail) && this.settings.gotoThumbnail.call(this, {
						type: "gotoThumbnail"
					})
				}
			},
			_moveThumbnailsTo: function(a, c, d) {
				var e = this,
					f = {};
				if(a !== this.thumbnailsPosition)
					if(this.thumbnailsPosition = a, "css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation) {
						var g, h = "horizontal" === this.thumbnailsOrientation ? a : 0,
							i = "horizontal" === this.thumbnailsOrientation ? 0 : a;
						f[this.vendorPrefix + "transform"] = "css-3d" === this.supportedAnimation ? "translate3d(" + h + "px, " + i + "px, 0)" : "translate(" + h + "px, " + i + "px)", "undefined" != typeof c && c === !0 ? g = "" : (this.$thumbnails.addClass("sp-animated"), g = this.vendorPrefix + "transform 0.7s", this.$thumbnails.on(this.transitionEvent, function(a) {
							a.target === a.currentTarget && (e.$thumbnails.off(e.transitionEvent), e.$thumbnails.removeClass("sp-animated"), "function" == typeof d && d(), e.trigger({
								type: "thumbnailsMoveComplete"
							}), b.isFunction(e.settings.thumbnailsMoveComplete) && e.settings.thumbnailsMoveComplete.call(e, {
								type: "thumbnailsMoveComplete"
							}))
						})), f[this.vendorPrefix + "transition"] = g, this.$thumbnails.css(f)
					} else f["margin-" + this.thumbnailsPositionProperty] = a, "undefined" != typeof c && c === !0 ? this.$thumbnails.css(f) : this.$thumbnails.addClass("sp-animated").animate(f, 700, function() {
						e.$thumbnails.removeClass("sp-animated"), "function" == typeof d && d(), e.trigger({
							type: "thumbnailsMoveComplete"
						}), b.isFunction(e.settings.thumbnailsMoveComplete) && e.settings.thumbnailsMoveComplete.call(e, {
							type: "thumbnailsMoveComplete"
						})
					})
			},
			_stopThumbnailsMovement: function() {
				var a = {};
				if("css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation) {
					var b = this.$thumbnails.css(this.vendorPrefix + "transform"),
						c = -1 !== b.indexOf("matrix3d") ? "matrix3d" : "matrix",
						d = b.replace(c, "").match(/-?[0-9\.]+/g),
						e = "matrix3d" === c ? parseInt(d[12], 10) : parseInt(d[4], 10),
						f = "matrix3d" === c ? parseInt(d[13], 10) : parseInt(d[5], 10);
					a[this.vendorPrefix + "transform"] = "css-3d" === this.supportedAnimation ? "translate3d(" + e + "px, " + f + "px, 0)" : "translate(" + e + "px, " + f + "px)", a[this.vendorPrefix + "transition"] = "", this.$thumbnails.css(a), this.$thumbnails.off(this.transitionEvent), this.thumbnailsPosition = "horizontal" === this.thumbnailsOrientation ? parseInt(d[4], 10) : parseInt(d[5], 10)
				} else this.$thumbnails.stop(), this.thumbnailsPosition = parseInt(this.$thumbnails.css("margin-" + this.thumbnailsPositionProperty), 10);
				this.$thumbnails.removeClass("sp-animated")
			},
			destroyThumbnails: function() {
				var d = this;
				this.off("update." + c), this.isThumbnailScroller !== !1 && (this.off("sliderResize." + c), this.off("gotoSlide." + c), b(a).off("resize." + this.uniqueId + "." + c), this.$thumbnails.find(".sp-thumbnail").each(function() {
					var a = b(this),
						e = parseInt(a.attr("data-index"), 10),
						f = d.thumbnails[e];
					f.off("thumbnailClick." + c), f.destroy()
				}), this.thumbnails.length = 0, this.$thumbnails.appendTo(this.$slider), this.$thumbnailsContainer.remove(), this.$slider.css({
					paddingTop: "",
					paddingLeft: "",
					paddingRight: ""
				}))
			},
			thumbnailsDefaults: {
				thumbnailWidth: 100,
				thumbnailHeight: 80,
				thumbnailsPosition: "bottom",
				thumbnailPointer: !1,
				thumbnailsUpdate: function() {},
				gotoThumbnail: function() {},
				thumbnailsMoveComplete: function() {}
			}
		},
		e = function(a, b, c) {
			this.$thumbnail = a, this.$thumbnails = b, this.$thumbnailContainer = null, this.width = 0, this.height = 0, this.isImageLoaded = !1, this.setIndex(c), this._init()
		};
	e.prototype = {
		_init: function() {
			var a = this;
			this.$thumbnail.attr("data-init", !0), this.$thumbnailContainer = b('<div class="sp-thumbnail-container"></div>').appendTo(this.$thumbnails), 0 !== this.$thumbnail.parent("a").length ? this.$thumbnail.parent("a").appendTo(this.$thumbnailContainer) : this.$thumbnail.appendTo(this.$thumbnailContainer), this.$thumbnailContainer.on("click." + c, function() {
				a.trigger({
					type: "thumbnailClick." + c,
					index: a.index
				})
			})
		},
		setSize: function(a, b) {
			this.width = a, this.height = b, this.$thumbnailContainer.css({
				width: this.width,
				height: this.height
			}), this.$thumbnail.is("img") && "undefined" == typeof this.$thumbnail.attr("data-src") && this.resizeImage()
		},
		getSize: function() {
			return {
				width: this.$thumbnailContainer.outerWidth(!0),
				height: this.$thumbnailContainer.outerHeight(!0)
			}
		},
		getPosition: function() {
			return {
				left: this.$thumbnailContainer.position().left + parseInt(this.$thumbnailContainer.css("marginLeft"), 10),
				right: this.$thumbnailContainer.position().left + parseInt(this.$thumbnailContainer.css("marginLeft"), 10) + this.$thumbnailContainer.outerWidth(),
				top: this.$thumbnailContainer.position().top + parseInt(this.$thumbnailContainer.css("marginTop"), 10),
				bottom: this.$thumbnailContainer.position().top + parseInt(this.$thumbnailContainer.css("marginTop"), 10) + this.$thumbnailContainer.outerHeight()
			}
		},
		setIndex: function(a) {
			this.index = a, this.$thumbnail.attr("data-index", this.index)
		},
		resizeImage: function() {
			var a = this;
			if(this.isImageLoaded === !1) return void SliderProUtils.checkImagesComplete(this.$thumbnailContainer, function() {
				a.isImageLoaded = !0, a.resizeImage()
			});
			this.$thumbnail = this.$thumbnailContainer.find(".sp-thumbnail");
			var b = this.$thumbnail.width(),
				c = this.$thumbnail.height();
			this.$thumbnail.css(b / c <= this.width / this.height ? {
				width: "100%",
				height: "auto"
			} : {
				width: "auto",
				height: "100%"
			}), this.$thumbnail.css({
				marginLeft: .5 * (this.$thumbnailContainer.width() - this.$thumbnail.width()),
				marginTop: .5 * (this.$thumbnailContainer.height() - this.$thumbnail.height())
			})
		},
		destroy: function() {
			this.$thumbnailContainer.off("click." + c), this.$thumbnail.removeAttr("data-init"), this.$thumbnail.removeAttr("data-index"), 0 !== this.$thumbnail.parent("a").length ? this.$thumbnail.parent("a").insertBefore(this.$thumbnailContainer) : this.$thumbnail.insertBefore(this.$thumbnailContainer), this.$thumbnailContainer.remove()
		},
		on: function(a, b) {
			return this.$thumbnailContainer.on(a, b)
		},
		off: function(a) {
			return this.$thumbnailContainer.off(a)
		},
		trigger: function(a) {
			return this.$thumbnailContainer.triggerHandler(a)
		}
	}, b.SliderPro.addModule("Thumbnails", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "ConditionalImages." + b.SliderPro.namespace,
		d = {
			previousImageSize: null,
			currentImageSize: null,
			isRetinaScreen: !1,
			initConditionalImages: function() {
				this.currentImageSize = this.previousImageSize = "default", this.isRetinaScreen = "undefined" != typeof this._isRetina && this._isRetina() === !0, this.on("update." + c, b.proxy(this._conditionalImagesOnUpdate, this)), this.on("sliderResize." + c, b.proxy(this._conditionalImagesOnResize, this))
			},
			_conditionalImagesOnUpdate: function() {
				b.each(this.slides, function(a, c) {
					var d = c.$slide;
					d.find("img:not([ data-default ])").each(function() {
						var a = b(this);
						"undefined" != typeof a.attr("data-src") ? a.attr("data-default", a.attr("data-src")) : a.attr("data-default", a.attr("src"))
					})
				})
			},
			_conditionalImagesOnResize: function() {
				if(this.currentImageSize = this.slideWidth <= this.settings.smallSize ? "small" : this.slideWidth <= this.settings.mediumSize ? "medium" : this.slideWidth <= this.settings.largeSize ? "large" : "default", this.previousImageSize !== this.currentImageSize) {
					var a = this;
					b.each(this.slides, function(c, d) {
						var e = d.$slide;
						e.find("img").each(function() {
							var c = b(this),
								e = "";
							a.isRetinaScreen === !0 && "undefined" != typeof c.attr("data-retina" + a.currentImageSize) ? (e = c.attr("data-retina" + a.currentImageSize), "undefined" != typeof c.attr("data-retina") && c.attr("data-retina") !== e && c.attr("data-retina", e)) : (a.isRetinaScreen === !1 || a.isRetinaScreen === !0 && "undefined" == typeof c.attr("data-retina")) && "undefined" != typeof c.attr("data-" + a.currentImageSize) && (e = c.attr("data-" + a.currentImageSize), "undefined" != typeof c.attr("data-src") && c.attr("data-src") !== e && c.attr("data-src", e)), "" !== e && "undefined" == typeof c.attr("data-src") && c.attr("src") !== e && a._loadConditionalImage(c, e, function(a) {
								a.hasClass("sp-image") && (d.$mainImage = a, d.resizeMainImage(!0))
							})
						})
					}), this.previousImageSize = this.currentImageSize
				}
			},
			_loadConditionalImage: function(a, c, d) {
				var e = b(new Image);
				e.attr("class", a.attr("class")), e.attr("style", a.attr("style")), b.each(a.data(), function(a, b) {
					e.attr("data-" + a, b)
				}), "undefined" != typeof a.attr("width") && e.attr("width", a.attr("width")), "undefined" != typeof a.attr("height") && e.attr("height", a.attr("height")), "undefined" != typeof a.attr("alt") && e.attr("alt", a.attr("alt")), "undefined" != typeof a.attr("title") && e.attr("title", a.attr("title")), e.attr("src", c), e.insertAfter(a), a.remove(), a = null, "function" == typeof d && d(e)
			},
			destroyConditionalImages: function() {
				this.off("update." + c), this.off("sliderResize." + c)
			},
			conditionalImagesDefaults: {
				smallSize: 480,
				mediumSize: 768,
				largeSize: 1024
			}
		};
	b.SliderPro.addModule("ConditionalImages", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "Retina." + b.SliderPro.namespace,
		d = {
			initRetina: function() {
				this._isRetina() !== !1 && (this.on("update." + c, b.proxy(this._checkRetinaImages, this)), 0 !== this.$slider.find(".sp-thumbnail").length && this.on("update.Thumbnails." + c, b.proxy(this._checkRetinaThumbnailImages, this)))
			},
			_isRetina: function() {
				return a.devicePixelRatio >= 2 ? !0 : a.matchMedia && a.matchMedia("(-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx)").matches ? !0 : !1
			},
			_checkRetinaImages: function() {
				var a = this;
				b.each(this.slides, function(c, d) {
					var e = d.$slide;
					"undefined" == typeof e.attr("data-retina-loaded") && (e.attr("data-retina-loaded", !0), e.find("img[data-retina]").each(function() {
						var c = b(this);
						"undefined" != typeof c.attr("data-src") ? c.attr("data-src", c.attr("data-retina")) : a._loadRetinaImage(c, function(a) {
							a.hasClass("sp-image") && (d.$mainImage = a, d.resizeMainImage(!0))
						})
					}))
				})
			},
			_checkRetinaThumbnailImages: function() {
				var a = this;
				b.each(this.thumbnails, function(c, d) {
					var e = d.$thumbnailContainer;
					"undefined" == typeof e.attr("data-retina-loaded") && (e.attr("data-retina-loaded", !0), e.find("img[data-retina]").each(function() {
						var c = b(this);
						"undefined" != typeof c.attr("data-src") ? c.attr("data-src", c.attr("data-retina")) : a._loadRetinaImage(c, function(a) {
							a.hasClass("sp-thumbnail") && d.resizeImage()
						})
					}))
				})
			},
			_loadRetinaImage: function(a, c) {
				var d = !1,
					e = "";
				if("undefined" != typeof a.attr("data-retina") && (d = !0, e = a.attr("data-retina")), "undefined" != typeof a.attr("data-src") && (d === !1 && (e = a.attr("data-src")), a.removeAttr("data-src")), "" !== e) {
					var f = b(new Image);
					f.attr("class", a.attr("class")), f.attr("style", a.attr("style")), b.each(a.data(), function(a, b) {
						f.attr("data-" + a, b)
					}), "undefined" != typeof a.attr("width") && f.attr("width", a.attr("width")), "undefined" != typeof a.attr("height") && f.attr("height", a.attr("height")), "undefined" != typeof a.attr("alt") && f.attr("alt", a.attr("alt")), "undefined" != typeof a.attr("title") && f.attr("title", a.attr("title")), f.insertAfter(a), a.remove(), a = null, f.attr("src", e), "function" == typeof c && c(f)
				}
			},
			destroyRetina: function() {
				this.off("update." + c), this.off("update.Thumbnails." + c)
			}
		};
	b.SliderPro.addModule("Retina", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "LazyLoading." + b.SliderPro.namespace,
		d = {
			allowLazyLoadingCheck: !0,
			initLazyLoading: function() {
				this.on("sliderResize." + c, b.proxy(this._lazyLoadingOnResize, this)), this.on("gotoSlide." + c, b.proxy(this._checkAndLoadVisibleImages, this)), this.on("thumbnailsUpdate." + c + " thumbnailsMoveComplete." + c, b.proxy(this._checkAndLoadVisibleThumbnailImages, this))
			},
			_lazyLoadingOnResize: function() {
				var a = this;
				this.allowLazyLoadingCheck !== !1 && (this.allowLazyLoadingCheck = !1, this._checkAndLoadVisibleImages(), 0 !== this.$slider.find(".sp-thumbnail").length && this._checkAndLoadVisibleThumbnailImages(), setTimeout(function() {
					a.allowLazyLoadingCheck = !0
				}, 500))
			},
			_checkAndLoadVisibleImages: function() {
				if(0 !== this.$slider.find(".sp-slide:not([ data-loaded ])").length) {
					var a = this,
						c = this.settings.loop === !0 ? this.middleSlidePosition : this.selectedSlideIndex,
						d = Math.ceil((this.visibleSlidesSize - this.slideSize) / 2 / this.slideSize),
						e = c - d - 1 > 0 ? c - d - 1 : 0,
						f = c + d + 1 < this.getTotalSlides() - 1 ? c + d + 1 : this.getTotalSlides() - 1,
						g = this.slidesOrder.slice(e, f + 1);
					b.each(g, function(c, d) {
						var e = a.slides[d],
							f = e.$slide;
						"undefined" == typeof f.attr("data-loaded") && (f.attr("data-loaded", !0), f.find("img[ data-src ]").each(function() {
							var c = b(this);
							a._loadImage(c, function(a) {
								a.hasClass("sp-image") && (e.$mainImage = a, e.resizeMainImage(!0))
							})
						}))
					})
				}
			},
			_checkAndLoadVisibleThumbnailImages: function() {
				if(0 !== this.$slider.find(".sp-thumbnail-container:not([ data-loaded ])").length) {
					var a = this,
						c = this.thumbnailsSize / this.thumbnails.length,
						d = Math.floor(Math.abs(this.thumbnailsPosition / c)),
						e = Math.floor((-this.thumbnailsPosition + this.thumbnailsContainerSize) / c),
						f = this.thumbnails.slice(d, e + 1);
					b.each(f, function(c, d) {
						var e = d.$thumbnailContainer;
						"undefined" == typeof e.attr("data-loaded") && (e.attr("data-loaded", !0), e.find("img[ data-src ]").each(function() {
							var c = b(this);
							a._loadImage(c, function() {
								d.resizeImage()
							})
						}))
					})
				}
			},
			_loadImage: function(a, c) {
				var d = b(new Image);
				d.attr("class", a.attr("class")), d.attr("style", a.attr("style")), b.each(a.data(), function(a, b) {
					d.attr("data-" + a, b)
				}), "undefined" != typeof a.attr("width") && d.attr("width", a.attr("width")), "undefined" != typeof a.attr("height") && d.attr("height", a.attr("height")), "undefined" != typeof a.attr("alt") && d.attr("alt", a.attr("alt")), "undefined" != typeof a.attr("title") && d.attr("title", a.attr("title")), d.attr("src", a.attr("data-src")), d.removeAttr("data-src"), d.insertAfter(a), a.remove(), a = null, "function" == typeof c && c(d)
			},
			destroyLazyLoading: function() {
				this.off("update." + c), this.off("gotoSlide." + c), this.off("sliderResize." + c), this.off("thumbnailsUpdate." + c), this.off("thumbnailsMoveComplete." + c)
			}
		};
	b.SliderPro.addModule("LazyLoading", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "Layers." + b.SliderPro.namespace,
		d = {
			layersGotoSlideReference: null,
			waitForLayersTimer: null,
			initLayers: function() {
				this.on("update." + c, b.proxy(this._layersOnUpdate, this)), this.on("sliderResize." + c, b.proxy(this._layersOnResize, this)), this.on("gotoSlide." + c, b.proxy(this._layersOnGotoSlide, this))
			},
			_layersOnUpdate: function() {
				var a = this;
				b.each(this.slides, function(a, c) {
					c.$slide;
					this.$slide.find(".sp-layer:not([ data-layer-init ])").each(function() {
						var a = new f(b(this));
						"undefined" == typeof c.layers && (c.layers = []), c.layers.push(a), b(this).hasClass("sp-static") === !1 && ("undefined" == typeof c.animatedLayers && (c.animatedLayers = []), c.animatedLayers.push(a))
					})
				}), this.settings.waitForLayers === !0 && (clearTimeout(this.waitForLayersTimer), this.waitForLayersTimer = setTimeout(function() {
					a.layersGotoSlideReference = a.gotoSlide, a.gotoSlide = a._layersGotoSlide
				}, 1))
			},
			_layersOnResize: function() {
				var a, c, d = this,
					e = this.settings.autoScaleLayers;
				return this.settings.autoScaleLayers === !1 ? void this.showLayers(this.selectedSlideIndex) : (-1 === this.settings.autoScaleReference ? "string" == typeof this.settings.width && -1 !== this.settings.width.indexOf("%") ? e = !1 : a = parseInt(this.settings.width, 10) : a = this.settings.autoScaleReference, c = e === !0 && this.slideWidth < a ? d.slideWidth / a : 1, b.each(this.slides, function(a, d) {
					"undefined" != typeof d.layers && b.each(d.layers, function(a, b) {
						b.scale(c)
					})
				}), void this.showLayers(this.selectedSlideIndex))
			},
			_layersGotoSlide: function(a) {
				var b = this,
					d = this.slides[this.selectedSlideIndex].animatedLayers;
				this.$slider.hasClass("sp-swiping") || "undefined" == typeof d || 0 === d.length ? this.layersGotoSlideReference(a) : (this.on("hideLayersComplete." + c, function() {
					b.off("hideLayersComplete." + c), b.layersGotoSlideReference(a)
				}), this.hideLayers(this.selectedSlideIndex))
			},
			_layersOnGotoSlide: function() {
				this.previousSlideIndex !== this.selectedSlideIndex && this.settings.waitForLayers === !1 && this.hideLayers(this.previousSlideIndex), this.showLayers(this.selectedSlideIndex)
			},
			showLayers: function(a) {
				var c = this,
					d = this.slides[a].animatedLayers,
					e = 0;
				"undefined" != typeof d && b.each(d, function(a, f) {
					f.isVisible() === !0 ? (e++, e === d.length && (c.trigger({
						type: "showLayersComplete",
						index: a
					}), b.isFunction(c.settings.showLayersComplete) && c.settings.showLayersComplete.call(c, {
						type: "showLayersComplete",
						index: a
					}))) : f.show(function() {
						e++, e === d.length && (c.trigger({
							type: "showLayersComplete",
							index: a
						}), b.isFunction(c.settings.showLayersComplete) && c.settings.showLayersComplete.call(c, {
							type: "showLayersComplete",
							index: a
						}))
					})
				})
			},
			hideLayers: function(a) {
				var c = this,
					d = this.slides[a].animatedLayers,
					e = 0;
				"undefined" != typeof d && b.each(d, function(a, f) {
					f.isVisible() === !1 ? (e++, e === d.length && (c.trigger({
						type: "hideLayersComplete",
						index: a
					}), b.isFunction(c.settings.hideLayersComplete) && c.settings.hideLayersComplete.call(c, {
						type: "hideLayersComplete",
						index: a
					}))) : f.hide(function() {
						e++, e === d.length && (c.trigger({
							type: "hideLayersComplete",
							index: a
						}), b.isFunction(c.settings.hideLayersComplete) && c.settings.hideLayersComplete.call(c, {
							type: "hideLayersComplete",
							index: a
						}))
					})
				})
			},
			destroyLayers: function() {
				this.off("update." + c), this.off("resize." + c), this.off("gotoSlide." + c), this.off("hideLayersComplete." + c)
			},
			layersDefaults: {
				waitForLayers: !1,
				autoScaleLayers: !0,
				autoScaleReference: -1,
				showLayersComplete: function() {},
				hideLayersComplete: function() {}
			}
		},
		e = a.SliderProSlide.prototype.destroy;
	a.SliderProSlide.prototype.destroy = function() {
		"undefined" != typeof this.layers && (b.each(this.layers, function(a, b) {
			b.destroy()
		}), this.layers.length = 0), "undefined" != typeof this.animatedLayers && (this.animatedLayers.length = 0), e.apply(this)
	};
	var f = function(a) {
		this.$layer = a, this.visible = !1, this.styled = !1, this.data = null, this.position = null, this.horizontalProperty = null, this.verticalProperty = null, this.horizontalPosition = null, this.verticalPosition = null, this.scaleRatio = 1, this.supportedAnimation = SliderProUtils.getSupportedAnimation(), this.vendorPrefix = SliderProUtils.getVendorPrefix(), this.transitionEvent = SliderProUtils.getTransitionEvent(), this.stayTimer = null, this._init()
	};
	f.prototype = {
		_init: function() {
			this.$layer.attr("data-layer-init", !0), this.$layer.hasClass("sp-static") ? this._setStyle() : this.$layer.css({
				visibility: "hidden",
				display: "none"
			})
		},
		_setStyle: function() {
			this.styled = !0, this.$layer.css("display", ""), this.data = this.$layer.data(), "undefined" != typeof this.data.width && this.$layer.css("width", this.data.width), "undefined" != typeof this.data.height && this.$layer.css("height", this.data.height), "undefined" != typeof this.data.depth && this.$layer.css("z-index", this.data.depth), this.position = this.data.position ? this.data.position.toLowerCase() : "topleft", this.horizontalProperty = -1 !== this.position.indexOf("right") ? "right" : -1 !== this.position.indexOf("left") ? "left" : "center", this.verticalProperty = -1 !== this.position.indexOf("bottom") ? "bottom" : -1 !== this.position.indexOf("top") ? "top" : "center", this._setPosition(), this.scale(this.scaleRatio)
		},
		_setPosition: function() {
			var a = this.$layer.attr("style");
			this.horizontalPosition = "undefined" != typeof this.data.horizontal ? this.data.horizontal : 0, this.verticalPosition = "undefined" != typeof this.data.vertical ? this.data.vertical : 0, "center" === this.horizontalProperty ? (this.$layer.is("img") === !1 && ("undefined" == typeof a || "undefined" != typeof a && -1 === a.indexOf("width")) && (this.$layer.css("white-space", "nowrap"), this.$layer.css("width", this.$layer.outerWidth(!0))), this.$layer.css({
				marginLeft: "auto",
				marginRight: "auto",
				left: this.horizontalPosition,
				right: 0
			})) : this.$layer.css(this.horizontalProperty, this.horizontalPosition), "center" === this.verticalProperty ? (this.$layer.is("img") === !1 && ("undefined" == typeof a || "undefined" != typeof a && -1 === a.indexOf("height")) && (this.$layer.css("white-space", "nowrap"), this.$layer.css("height", this.$layer.outerHeight(!0))), this.$layer.css({
				marginTop: "auto",
				marginBottom: "auto",
				top: this.verticalPosition,
				bottom: 0
			})) : this.$layer.css(this.verticalProperty, this.verticalPosition)
		},
		scale: function(a) {
			if(!this.$layer.hasClass("sp-no-scale") && (this.scaleRatio = a, this.styled !== !1)) {
				var b = "center" === this.horizontalProperty ? "left" : this.horizontalProperty,
					c = "center" === this.verticalProperty ? "top" : this.verticalProperty,
					d = {};
				d[this.vendorPrefix + "transform-origin"] = this.horizontalProperty + " " + this.verticalProperty, d[this.vendorPrefix + "transform"] = "scale(" + this.scaleRatio + ")", "string" != typeof this.horizontalPosition && (d[b] = this.horizontalPosition * this.scaleRatio), "string" != typeof this.verticalPosition && (d[c] = this.verticalPosition * this.scaleRatio), "string" == typeof this.data.width && -1 !== this.data.width.indexOf("%") && (d.width = (parseInt(this.data.width, 10) / this.scaleRatio).toString() + "%"), "string" == typeof this.data.height && -1 !== this.data.height.indexOf("%") && (d.height = (parseInt(this.data.height, 10) / this.scaleRatio).toString() + "%"), this.$layer.css(d)
			}
		},
		show: function(a) {
			if(this.visible !== !0) {
				this.visible = !0, this.styled === !1 && this._setStyle();
				var b = this,
					c = "undefined" != typeof this.data.showOffset ? this.data.showOffset : 50,
					d = "undefined" != typeof this.data.showDuration ? this.data.showDuration / 1e3 : .4,
					e = "undefined" != typeof this.data.showDelay ? this.data.showDelay : 10,
					f = "undefined" != typeof b.data.stayDuration ? parseInt(b.data.stayDuration, 10) : -1;
				if("javascript" === this.supportedAnimation) this.$layer.stop().delay(e).css({
					opacity: 0,
					visibility: "visible"
				}).animate({
					opacity: 1
				}, 1e3 * d, function() {
					-1 !== f && (b.stayTimer = setTimeout(function() {
						b.hide(), b.stayTimer = null
					}, f)), "undefined" != typeof a && a()
				});
				else {
					var g = {
							opacity: 0,
							visibility: "visible"
						},
						h = {
							opacity: 1
						},
						i = "";
					g[this.vendorPrefix + "transform"] = "scale(" + this.scaleRatio + ")", h[this.vendorPrefix + "transform"] = "scale(" + this.scaleRatio + ")", h[this.vendorPrefix + "transition"] = "opacity " + d + "s", "undefined" != typeof this.data.showTransition && ("left" === this.data.showTransition ? i = c + "px, 0" : "right" === this.data.showTransition ? i = "-" + c + "px, 0" : "up" === this.data.showTransition ? i = "0, " + c + "px" : "down" === this.data.showTransition && (i = "0, -" + c + "px"), g[this.vendorPrefix + "transform"] += "css-3d" === this.supportedAnimation ? " translate3d(" + i + ", 0)" : " translate(" + i + ")", h[this.vendorPrefix + "transform"] += "css-3d" === this.supportedAnimation ? " translate3d(0, 0, 0)" : " translate(0, 0)", h[this.vendorPrefix + "transition"] += ", " + this.vendorPrefix + "transform " + d + "s"), this.$layer.on(this.transitionEvent, function(c) {
						c.target === c.currentTarget && (b.$layer.off(b.transitionEvent).css(b.vendorPrefix + "transition", ""), -1 !== f && (b.stayTimer = setTimeout(function() {
							b.hide(), b.stayTimer = null
						}, f)), "undefined" != typeof a && a())
					}), this.$layer.css(g), setTimeout(function() {
						b.$layer.css(h)
					}, e)
				}
			}
		},
		hide: function(a) {
			if(this.visible !== !1) {
				var c = this,
					d = "undefined" != typeof this.data.hideOffset ? this.data.hideOffset : 50,
					e = "undefined" != typeof this.data.hideDuration ? this.data.hideDuration / 1e3 : .4,
					f = "undefined" != typeof this.data.hideDelay ? this.data.hideDelay : 10;
				if(this.visible = !1, null !== this.stayTimer && clearTimeout(this.stayTimer), "javascript" === this.supportedAnimation) this.$layer.stop().delay(f).animate({
					opacity: 0
				}, 1e3 * e, function() {
					b(this).css("visibility", "hidden"), "undefined" != typeof a && a()
				});
				else {
					var g = "",
						h = {
							opacity: 0
						};
					h[this.vendorPrefix + "transform"] = "scale(" + this.scaleRatio + ")", h[this.vendorPrefix + "transition"] = "opacity " + e + "s", "undefined" != typeof this.data.hideTransition && ("left" === this.data.hideTransition ? g = "-" + d + "px, 0" : "right" === this.data.hideTransition ? g = d + "px, 0" : "up" === this.data.hideTransition ? g = "0, -" + d + "px" : "down" === this.data.hideTransition && (g = "0, " + d + "px"), h[this.vendorPrefix + "transform"] += "css-3d" === this.supportedAnimation ? " translate3d(" + g + ", 0)" : " translate(" + g + ")", h[this.vendorPrefix + "transition"] += ", " + this.vendorPrefix + "transform " + e + "s"), this.$layer.on(this.transitionEvent, function(b) {
						b.target === b.currentTarget && (c.$layer.off(c.transitionEvent).css(c.vendorPrefix + "transition", ""), c.visible === !1 && c.$layer.css("visibility", "hidden"), "undefined" != typeof a && a())
					}), setTimeout(function() {
						c.$layer.css(h)
					}, f)
				}
			}
		},
		isVisible: function() {
			return this.visible === !1 || this.$layer.is(":hidden") ? !1 : !0
		},
		destroy: function() {
			this.$layer.removeAttr("style"), this.$layer.removeAttr("data-layer-init")
		}
	}, b.SliderPro.addModule("Layers", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "Fade." + b.SliderPro.namespace,
		d = {
			fadeGotoSlideReference: null,
			initFade: function() {
				this.on("update." + c, b.proxy(this._fadeOnUpdate, this))
			},
			_fadeOnUpdate: function() {
				this.settings.fade === !0 && (this.fadeGotoSlideReference = this.gotoSlide, this.gotoSlide = this._fadeGotoSlide)
			},
			_fadeGotoSlide: function(a) {
				if(a !== this.selectedSlideIndex)
					if(this.$slider.hasClass("sp-swiping")) this.fadeGotoSlideReference(a);
					else {
						var c, d, e = this,
							f = a;
						b.each(this.slides, function(a, b) {
							var g = b.getIndex(),
								h = b.$slide;
							g === f ? (h.css({
								opacity: 0,
								left: 0,
								top: 0,
								"z-index": 20
							}), c = h) : g === e.selectedSlideIndex ? (h.css({
								opacity: 1,
								left: 0,
								top: 0,
								"z-index": 10
							}), d = h) : h.css("visibility", "hidden")
						}), this.previousSlideIndex = this.selectedSlideIndex, this.selectedSlideIndex = a, this.$slides.find(".sp-selected").removeClass("sp-selected"), this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).addClass("sp-selected"), e.settings.loop === !0 && e._updateSlidesOrder(), this._moveTo(this.visibleOffset, !0), this.settings.fadeOutPreviousSlide === !0 && this._fadeSlideTo(d, 0), this._fadeSlideTo(c, 1, function() {
							b.each(e.slides, function(a, b) {
								var c = b.$slide;
								c.css({
									visibility: "",
									opacity: "",
									"z-index": ""
								})
							}), e._resetSlidesPosition(), e.trigger({
								type: "gotoSlideComplete",
								index: a,
								previousIndex: e.previousSlideIndex
							}), b.isFunction(e.settings.gotoSlideComplete) && e.settings.gotoSlideComplete.call(e, {
								type: "gotoSlideComplete",
								index: a,
								previousIndex: e.previousSlideIndex
							})
						}), this.settings.autoHeight === !0 && this._resizeHeight(), this.trigger({
							type: "gotoSlide",
							index: a,
							previousIndex: this.previousSlideIndex
						}), b.isFunction(this.settings.gotoSlide) && this.settings.gotoSlide.call(this, {
							type: "gotoSlide",
							index: a,
							previousIndex: this.previousSlideIndex
						})
					}
			},
			_fadeSlideTo: function(a, b, c) {
				var d = this;
				"css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation ? (setTimeout(function() {
					var c = {
						opacity: b
					};
					c[d.vendorPrefix + "transition"] = "opacity " + d.settings.fadeDuration / 1e3 + "s", a.css(c)
				}, 100), a.on(this.transitionEvent, function(b) {
					b.target === b.currentTarget && (a.off(d.transitionEvent), a.css(d.vendorPrefix + "transition", ""), "function" == typeof c && c())
				})) : a.stop().animate({
					opacity: b
				}, this.settings.fadeDuration, function() {
					"function" == typeof c && c()
				})
			},
			destroyFade: function() {
				this.off("update." + c), null !== this.fadeGotoSlideReference && (this.gotoSlide = this.fadeGotoSlideReference)
			},
			fadeDefaults: {
				fade: !1,
				fadeOutPreviousSlide: !0,
				fadeDuration: 500
			}
		};
	b.SliderPro.addModule("Fade", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "TouchSwipe." + b.SliderPro.namespace,
		d = {
			touchStartPoint: {
				x: 0,
				y: 0
			},
			touchEndPoint: {
				x: 0,
				y: 0
			},
			touchDistance: {
				x: 0,
				y: 0
			},
			touchStartPosition: 0,
			isTouchMoving: !1,
			touchSwipeEvents: {
				startEvent: "",
				moveEvent: "",
				endEvent: ""
			},
			initTouchSwipe: function() {
				this.settings.touchSwipe !== !1 && (this.touchSwipeEvents.startEvent = "touchstart." + c + " mousedown." + c, this.touchSwipeEvents.moveEvent = "touchmove." + c + " mousemove." + c, this.touchSwipeEvents.endEvent = "touchend." + this.uniqueId + "." + c + " mouseup." + this.uniqueId + "." + c, this.$slidesMask.on(this.touchSwipeEvents.startEvent, b.proxy(this._onTouchStart, this)), this.$slidesMask.on("dragstart." + c, function(a) {
					a.preventDefault()
				}), this.$slidesMask.addClass("sp-grab"))
			},
			_onTouchStart: function(a) {
				if(!(b(a.target).closest(".sp-selectable").length >= 1)) {
					var d = "undefined" != typeof a.originalEvent.touches ? a.originalEvent.touches[0] : a.originalEvent;
					"undefined" == typeof a.originalEvent.touches && a.preventDefault(), b(a.target).parents(".sp-slide").find("a").one("click." + c, function(a) {
						a.preventDefault()
					}), this.touchStartPoint.x = d.pageX || d.clientX, this.touchStartPoint.y = d.pageY || d.clientY, this.touchStartPosition = this.slidesPosition, this.touchDistance.x = this.touchDistance.y = 0, this.$slides.hasClass("sp-animated") && (this.isTouchMoving = !0, this._stopMovement(), this.touchStartPosition = this.slidesPosition), this.$slidesMask.on(this.touchSwipeEvents.moveEvent, b.proxy(this._onTouchMove, this)), b(document).on(this.touchSwipeEvents.endEvent, b.proxy(this._onTouchEnd, this)), this.$slidesMask.removeClass("sp-grab").addClass("sp-grabbing"), this.$slider.addClass("sp-swiping")
				}
			},
			_onTouchMove: function(a) {
				var b = "undefined" != typeof a.originalEvent.touches ? a.originalEvent.touches[0] : a.originalEvent;
				this.isTouchMoving = !0, this.touchEndPoint.x = b.pageX || b.clientX, this.touchEndPoint.y = b.pageY || b.clientY, this.touchDistance.x = this.touchEndPoint.x - this.touchStartPoint.x, this.touchDistance.y = this.touchEndPoint.y - this.touchStartPoint.y;
				var c = "horizontal" === this.settings.orientation ? this.touchDistance.x : this.touchDistance.y,
					d = "horizontal" === this.settings.orientation ? this.touchDistance.y : this.touchDistance.x;
				Math.abs(c) > Math.abs(d) && (a.preventDefault(), this.settings.loop === !1 && (this.slidesPosition > this.touchStartPosition && 0 === this.selectedSlideIndex || this.slidesPosition < this.touchStartPosition && this.selectedSlideIndex === this.getTotalSlides() - 1) && (c = .2 * c), this._moveTo(this.touchStartPosition + c, !0))
			},
			_onTouchEnd: function(a) {
				var d = this,
					e = "horizontal" === this.settings.orientation ? this.touchDistance.x : this.touchDistance.y;
				if(this.$slidesMask.off(this.touchSwipeEvents.moveEvent), b(document).off(this.touchSwipeEvents.endEvent), this.$slidesMask.removeClass("sp-grabbing").addClass("sp-grab"), (this.isTouchMoving === !1 || this.isTouchMoving === !0 && Math.abs(this.touchDistance.x) < 10 && Math.abs(this.touchDistance.y) < 10) && (b(a.target).parents(".sp-slide").find("a").off("click." + c), this.$slider.removeClass("sp-swiping")), setTimeout(function() {
						d.$slider.removeClass("sp-swiping")
					}, 1), this.isTouchMoving !== !1) {
					this.isTouchMoving = !1, b(a.target).parents(".sp-slide").one("click", function(a) {
						a.preventDefault()
					});
					var f = -parseInt(this.$slides.find(".sp-slide").eq(this.selectedSlideIndex).css(this.positionProperty), 10) + this.visibleOffset;
					if(Math.abs(e) < this.settings.touchSwipeThreshold) this._moveTo(f);
					else {
						var g = e / (this.slideSize + this.settings.slideDistance);
						g = parseInt(g, 10) + (g > 0 ? 1 : -1);
						var h = this.slidesOrder[b.inArray(this.selectedSlideIndex, this.slidesOrder) - g];
						this.settings.loop === !0 ? this.gotoSlide(h) : "undefined" != typeof h ? this.gotoSlide(h) : this._moveTo(f)
					}
				}
			},
			destroyTouchSwipe: function() {
				this.$slidesMask.off(this.touchSwipeEvents.startEvent), this.$slidesMask.off(this.touchSwipeEvents.moveEvent), this.$slidesMask.off("dragstart." + c), b(document).off(this.touchSwipeEvents.endEvent), this.$slidesMask.removeClass("sp-grab")
			},
			touchSwipeDefaults: {
				touchSwipe: !0,
				touchSwipeThreshold: 50
			}
		};
	b.SliderPro.addModule("TouchSwipe", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "Caption." + b.SliderPro.namespace,
		d = {
			$captionContainer: null,
			captionContent: "",
			initCaption: function() {
				this.on("update." + c, b.proxy(this._captionOnUpdate, this)), this.on("gotoSlide." + c, b.proxy(this._updateCaptionContent, this))
			},
			_captionOnUpdate: function() {
				this.$captionContainer = this.$slider.find(".sp-caption-container"), this.$slider.find(".sp-caption").length && 0 === this.$captionContainer.length && (this.$captionContainer = b('<div class="sp-caption-container"></div>').appendTo(this.$slider), this._updateCaptionContent()), this.$slides.find(".sp-caption").each(function() {
					b(this).css("display", "none")
				})
			},
			_updateCaptionContent: function() {
				var a = this,
					b = this.$slider.find(".sp-slide").eq(this.selectedSlideIndex).find(".sp-caption"),
					c = 0 !== b.length ? b.html() : "";
				this.settings.fadeCaption === !0 ? "" !== this.captionContent ? (0 === parseFloat(this.$captionContainer.css("opacity"), 10) && (this.$captionContainer.css(this.vendorPrefix + "transition", ""), this.$captionContainer.css("opacity", 1)), this._fadeCaptionTo(0, function() {
					a.captionContent = c, "" !== c ? (a.$captionContainer.html(a.captionContent), a._fadeCaptionTo(1)) : a.$captionContainer.empty()
				})) : (this.captionContent = c, this.$captionContainer.html(this.captionContent), this.$captionContainer.css("opacity", 0), this._fadeCaptionTo(1)) : (this.captionContent = c, this.$captionContainer.html(this.captionContent))
			},
			_fadeCaptionTo: function(a, b) {
				var c = this;
				"css-3d" === this.supportedAnimation || "css-2d" === this.supportedAnimation ? (setTimeout(function() {
					var b = {
						opacity: a
					};
					b[c.vendorPrefix + "transition"] = "opacity " + c.settings.captionFadeDuration / 1e3 + "s", c.$captionContainer.css(b)
				}, 1), this.$captionContainer.on(this.transitionEvent, function(a) {
					a.target === a.currentTarget && (c.$captionContainer.off(c.transitionEvent), c.$captionContainer.css(c.vendorPrefix + "transition", ""), "function" == typeof b && b())
				})) : this.$captionContainer.stop().animate({
					opacity: a
				}, this.settings.captionFadeDuration, function() {
					"function" == typeof b && b()
				})
			},
			destroyCaption: function() {
				this.off("update." + c), this.off("gotoSlide." + c), this.$captionContainer.remove(), this.$slider.find(".sp-caption").each(function() {
					b(this).css("display", "")
				})
			},
			captionDefaults: {
				fadeCaption: !0,
				captionFadeDuration: 500
			}
		};
	b.SliderPro.addModule("Caption", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "DeepLinking." + b.SliderPro.namespace,
		d = {
			initDeepLinking: function() {
				var d = this;
				this.on("init." + c, function() {
					d._gotoHash(a.location.hash)
				}), this.on("gotoSlide." + c, function(b) {
					if(d.settings.updateHash === !0) {
						var c = d.$slider.find(".sp-slide").eq(b.index).attr("id");
						"undefined" == typeof c && (c = b.index), a.location.hash = d.$slider.attr("id") + "/" + c
					}
				}), b(a).on("hashchange." + this.uniqueId + "." + c, function() {
					d._gotoHash(a.location.hash)
				})
			},
			_parseHash: function(a) {
				if("" !== a) {
					a = a.substring(1);
					var b = a.split("/"),
						c = b.pop(),
						d = a.slice(0, -c.toString().length - 1);
					if(this.$slider.attr("id") === d) return {
						sliderID: d,
						slideId: c
					}
				}
				return !1
			},
			_gotoHash: function(a) {
				var b = this._parseHash(a);
				if(b !== !1) {
					var c = b.slideId,
						d = parseInt(c, 10);
					if(isNaN(d)) {
						var e = this.$slider.find(".sp-slide#" + c).index(); - 1 !== e && e !== this.selectedSlideIndex && this.gotoSlide(e)
					} else d !== this.selectedSlideIndex && this.gotoSlide(d)
				}
			},
			destroyDeepLinking: function() {
				this.off("init." + c), this.off("gotoSlide." + c), b(a).off("hashchange." + this.uniqueId + "." + c)
			},
			deepLinkingDefaults: {
				updateHash: !1
			}
		};
	b.SliderPro.addModule("DeepLinking", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "Autoplay." + b.SliderPro.namespace,
		d = {
			autoplayTimer: null,
			isTimerRunning: !1,
			isTimerPaused: !1,
			initAutoplay: function() {
				this.on("update." + c, b.proxy(this._autoplayOnUpdate, this))
			},
			_autoplayOnUpdate: function() {
				this.settings.autoplay === !0 ? (this.on("gotoSlide." + c, b.proxy(this._autoplayOnGotoSlide, this)), this.on("mouseenter." + c, b.proxy(this._autoplayOnMouseEnter, this)), this.on("mouseleave." + c, b.proxy(this._autoplayOnMouseLeave, this)), this.startAutoplay()) : (this.off("gotoSlide." + c), this.off("mouseenter." + c), this.off("mouseleave." + c), this.stopAutoplay())
			},
			_autoplayOnGotoSlide: function() {
				this.isTimerRunning === !0 && this.stopAutoplay(), this.isTimerPaused === !1 && this.startAutoplay()
			},
			_autoplayOnMouseEnter: function() {
				!this.isTimerRunning || "pause" !== this.settings.autoplayOnHover && "stop" !== this.settings.autoplayOnHover || (this.stopAutoplay(), this.isTimerPaused = !0)
			},
			_autoplayOnMouseLeave: function() {
				this.settings.autoplay === !0 && this.isTimerRunning === !1 && "stop" !== this.settings.autoplayOnHover && (this.startAutoplay(), this.isTimerPaused = !1)
			},
			startAutoplay: function() {
				var a = this;
				this.isTimerRunning = !0, this.autoplayTimer = setTimeout(function() {
					"normal" === a.settings.autoplayDirection ? a.nextSlide() : "backwards" === a.settings.autoplayDirection && a.previousSlide()
				}, this.settings.autoplayDelay)
			},
			stopAutoplay: function() {
				this.isTimerRunning = !1, this.isTimerPaused = !1, clearTimeout(this.autoplayTimer)
			},
			destroyAutoplay: function() {
				clearTimeout(this.autoplayTimer), this.off("update." + c), this.off("gotoSlide." + c), this.off("mouseenter." + c), this.off("mouseleave." + c)
			},
			autoplayDefaults: {
				autoplay: !0,
				autoplayDelay: 5e3,
				autoplayDirection: "normal",
				autoplayOnHover: "pause"
			}
		};
	b.SliderPro.addModule("Autoplay", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "Keyboard." + b.SliderPro.namespace,
		d = {
			initKeyboard: function() {
				var a = this,
					d = !1;
				this.settings.keyboard !== !1 && (this.$slider.on("focus." + c, function() {
					d = !0
				}), this.$slider.on("blur." + c, function() {
					d = !1
				}), b(document).on("keydown." + this.uniqueId + "." + c, function(b) {
					(a.settings.keyboardOnlyOnFocus !== !0 || d !== !1) && (37 === b.which ? a.previousSlide() : 39 === b.which ? a.nextSlide() : 13 === b.which && a.$slider.find(".sp-slide").eq(a.selectedSlideIndex).find(".sp-image-container a")[0].click())
				}))
			},
			destroyKeyboard: function() {
				this.$slider.off("focus." + c), this.$slider.off("blur." + c), b(document).off("keydown." + this.uniqueId + "." + c)
			},
			keyboardDefaults: {
				keyboard: !0,
				keyboardOnlyOnFocus: !1
			}
		};
	b.SliderPro.addModule("Keyboard", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "FullScreen." + b.SliderPro.namespace,
		d = {
			isFullScreen: !1,
			$fullScreenButton: null,
			sizeBeforeFullScreen: {},
			initFullScreen: function() {
				(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) && this.on("update." + c, b.proxy(this._fullScreenOnUpdate, this))
			},
			_fullScreenOnUpdate: function() {
				this.settings.fullScreen === !0 && null === this.$fullScreenButton ? this._addFullScreen() : this.settings.fullScreen === !1 && null !== this.$fullScreenButton && this._removeFullScreen(), this.settings.fullScreen === !0 && (this.settings.fadeFullScreen === !0 ? this.$fullScreenButton.addClass("sp-fade-full-screen") : this.settings.fadeFullScreen === !1 && this.$fullScreenButton.removeClass("sp-fade-full-screen"))
			},
			_addFullScreen: function() {
				this.$fullScreenButton = b('<div class="sp-full-screen-button"></div>').appendTo(this.$slider), this.$fullScreenButton.on("click." + c, b.proxy(this._onFullScreenButtonClick, this)), document.addEventListener("fullscreenchange", b.proxy(this._onFullScreenChange, this)), document.addEventListener("mozfullscreenchange", b.proxy(this._onFullScreenChange, this)), document.addEventListener("webkitfullscreenchange", b.proxy(this._onFullScreenChange, this)), document.addEventListener("MSFullscreenChange", b.proxy(this._onFullScreenChange, this))
			},
			_removeFullScreen: function() {
				null !== this.$fullScreenButton && (this.$fullScreenButton.off("click." + c), this.$fullScreenButton.remove(), this.$fullScreenButton = null, document.removeEventListener("fullscreenchange", this._onFullScreenChange), document.removeEventListener("mozfullscreenchange", this._onFullScreenChange), document.removeEventListener("webkitfullscreenchange", this._onFullScreenChange), document.removeEventListener("MSFullscreenChange", this._onFullScreenChange))
			},
			_onFullScreenButtonClick: function() {
				this.isFullScreen === !1 ? this.instance.requestFullScreen ? this.instance.requestFullScreen() : this.instance.mozRequestFullScreen ? this.instance.mozRequestFullScreen() : this.instance.webkitRequestFullScreen ? this.instance.webkitRequestFullScreen() : this.instance.msRequestFullscreen && this.instance.msRequestFullscreen() : document.exitFullScreen ? document.exitFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
			},
			_onFullScreenChange: function() {
				this.isFullScreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? !0 : !1, this.isFullScreen === !0 ? (this.sizeBeforeFullScreen = {
					forceSize: this.settings.forceSize,
					autoHeight: this.settings.autoHeight
				}, this.$slider.addClass("sp-full-screen"), this.settings.forceSize = "fullWindow", this.settings.autoHeight = !1) : (this.$slider.css("margin", ""), this.$slider.removeClass("sp-full-screen"), this.settings.forceSize = this.sizeBeforeFullScreen.forceSize, this.settings.autoHeight = this.sizeBeforeFullScreen.autoHeight), this.resize()
			},
			destroyFullScreen: function() {
				this.off("update." + c), this._removeFullScreen()
			},
			fullScreenDefaults: {
				fullScreen: !1,
				fadeFullScreen: !0
			}
		};
	b.SliderPro.addModule("FullScreen", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "Buttons." + b.SliderPro.namespace,
		d = {
			$buttons: null,
			initButtons: function() {
				this.on("update." + c, b.proxy(this._buttonsOnUpdate, this))
			},
			_buttonsOnUpdate: function() {
				this.$buttons = this.$slider.find(".sp-buttons"), this.settings.buttons === !0 && this.getTotalSlides() > 1 && 0 === this.$buttons.length ? this._createButtons() : this.settings.buttons === !0 && this.getTotalSlides() !== this.$buttons.find(".sp-button").length && 0 !== this.$buttons.length ? this._adjustButtons() : (this.settings.buttons === !1 || this.getTotalSlides() <= 1 && 0 !== this.$buttons.length) && this._removeButtons()
			},
			_createButtons: function() {
				var a = this;
				this.$buttons = b('<div class="sp-buttons"></div>').appendTo(this.$slider);
				for(var d = 0; d < this.getTotalSlides(); d++) b('<div class="sp-button"></div>').appendTo(this.$buttons);
				this.$buttons.on("click." + c, ".sp-button", function() {
					a.gotoSlide(b(this).index())
				}), this.$buttons.find(".sp-button").eq(this.selectedSlideIndex).addClass("sp-selected-button"), this.on("gotoSlide." + c, function(b) {
					a.$buttons.find(".sp-selected-button").removeClass("sp-selected-button"), a.$buttons.find(".sp-button").eq(b.index).addClass("sp-selected-button")
				}), this.$slider.addClass("sp-has-buttons")
			},
			_adjustButtons: function() {
				this.$buttons.empty();
				for(var a = 0; a < this.getTotalSlides(); a++) b('<div class="sp-button"></div>').appendTo(this.$buttons);
				this.$buttons.find(".sp-selected-button").removeClass("sp-selected-button"), this.$buttons.find(".sp-button").eq(this.selectedSlideIndex).addClass("sp-selected-button")
			},
			_removeButtons: function() {
				this.$buttons.off("click." + c, ".sp-button"), this.off("gotoSlide." + c), this.$buttons.remove(), this.$slider.removeClass("sp-has-buttons")
			},
			destroyButtons: function() {
				this._removeButtons(), this.off("update." + c)
			},
			buttonsDefaults: {
				buttons: !0
			}
		};
	b.SliderPro.addModule("Buttons", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "Arrows." + b.SliderPro.namespace,
		d = {
			$arrows: null,
			$previousArrow: null,
			$nextArrow: null,
			initArrows: function() {
				this.on("update." + c, b.proxy(this._arrowsOnUpdate, this)), this.on("gotoSlide." + c, b.proxy(this._checkArrowsVisibility, this))
			},
			_arrowsOnUpdate: function() {
				var a = this;
				this.settings.arrows === !0 && null === this.$arrows ? (this.$arrows = b('<div class="sp-arrows"></div>').appendTo(this.$slidesContainer), this.$previousArrow = b('<div class="sp-arrow sp-previous-arrow"></div>').appendTo(this.$arrows), this.$nextArrow = b('<div class="sp-arrow sp-next-arrow"></div>').appendTo(this.$arrows), this.$previousArrow.on("click." + c, function() {
					a.previousSlide()
				}), this.$nextArrow.on("click." + c, function() {
					a.nextSlide()
				}), this._checkArrowsVisibility()) : this.settings.arrows === !1 && null !== this.$arrows && this._removeArrows(), this.settings.arrows === !0 && (this.settings.fadeArrows === !0 ? this.$arrows.addClass("sp-fade-arrows") : this.settings.fadeArrows === !1 && this.$arrows.removeClass("sp-fade-arrows"))
			},
			_checkArrowsVisibility: function() {
				this.settings.arrows !== !1 && this.settings.loop !== !0 && (0 === this.selectedSlideIndex ? this.$previousArrow.css("display", "none") : this.$previousArrow.css("display", "block"), this.selectedSlideIndex === this.getTotalSlides() - 1 ? this.$nextArrow.css("display", "none") : this.$nextArrow.css("display", "block"))
			},
			_removeArrows: function() {
				null !== this.$arrows && (this.$previousArrow.off("click." + c), this.$nextArrow.off("click." + c), this.$arrows.remove(), this.$arrows = null)
			},
			destroyArrows: function() {
				this._removeArrows(), this.off("update." + c), this.off("gotoSlide." + c)
			},
			arrowsDefaults: {
				arrows: !1,
				fadeArrows: !0
			}
		};
	b.SliderPro.addModule("Arrows", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "ThumbnailTouchSwipe." + b.SliderPro.namespace,
		d = {
			thumbnailTouchStartPoint: {
				x: 0,
				y: 0
			},
			thumbnailTouchEndPoint: {
				x: 0,
				y: 0
			},
			thumbnailTouchDistance: {
				x: 0,
				y: 0
			},
			thumbnailTouchStartPosition: 0,
			isThumbnailTouchMoving: !1,
			isThumbnailTouchSwipe: !1,
			thumbnailTouchSwipeEvents: {
				startEvent: "",
				moveEvent: "",
				endEvent: ""
			},
			initThumbnailTouchSwipe: function() {
				this.on("update." + c, b.proxy(this._thumbnailTouchSwipeOnUpdate, this))
			},
			_thumbnailTouchSwipeOnUpdate: function() {
				this.isThumbnailScroller !== !1 && (this.settings.thumbnailTouchSwipe === !0 && this.isThumbnailTouchSwipe === !1 && (this.isThumbnailTouchSwipe = !0, this.thumbnailTouchSwipeEvents.startEvent = "touchstart." + c + " mousedown." + c, this.thumbnailTouchSwipeEvents.moveEvent = "touchmove." + c + " mousemove." + c, this.thumbnailTouchSwipeEvents.endEvent = "touchend." + this.uniqueId + "." + c + " mouseup." + this.uniqueId + "." + c, this.$thumbnails.on(this.thumbnailTouchSwipeEvents.startEvent, b.proxy(this._onThumbnailTouchStart, this)), this.$thumbnails.on("dragstart." + c, function(a) {
					a.preventDefault()
				}), this.$thumbnails.addClass("sp-grab")), b.each(this.thumbnails, function(a, b) {
					b.off("thumbnailClick")
				}))
			},
			_onThumbnailTouchStart: function(a) {
				if(!(b(a.target).closest(".sp-selectable").length >= 1)) {
					var d = "undefined" != typeof a.originalEvent.touches ? a.originalEvent.touches[0] : a.originalEvent;
					"undefined" == typeof a.originalEvent.touches && a.preventDefault(), b(a.target).parents(".sp-thumbnail-container").find("a").one("click." + c, function(a) {
						a.preventDefault()
					}), this.thumbnailTouchStartPoint.x = d.pageX || d.clientX, this.thumbnailTouchStartPoint.y = d.pageY || d.clientY, this.thumbnailTouchStartPosition = this.thumbnailsPosition, this.thumbnailTouchDistance.x = this.thumbnailTouchDistance.y = 0, this.$thumbnails.hasClass("sp-animated") && (this.isThumbnailTouchMoving = !0, this._stopThumbnailsMovement(), this.thumbnailTouchStartPosition = this.thumbnailsPosition), this.$thumbnails.on(this.thumbnailTouchSwipeEvents.moveEvent, b.proxy(this._onThumbnailTouchMove, this)), b(document).on(this.thumbnailTouchSwipeEvents.endEvent, b.proxy(this._onThumbnailTouchEnd, this)), this.$thumbnails.removeClass("sp-grab").addClass("sp-grabbing"), this.$thumbnailsContainer.addClass("sp-swiping")
				}
			},
			_onThumbnailTouchMove: function(a) {
				var b = "undefined" != typeof a.originalEvent.touches ? a.originalEvent.touches[0] : a.originalEvent;
				this.isThumbnailTouchMoving = !0, this.thumbnailTouchEndPoint.x = b.pageX || b.clientX, this.thumbnailTouchEndPoint.y = b.pageY || b.clientY, this.thumbnailTouchDistance.x = this.thumbnailTouchEndPoint.x - this.thumbnailTouchStartPoint.x, this.thumbnailTouchDistance.y = this.thumbnailTouchEndPoint.y - this.thumbnailTouchStartPoint.y;
				var c = "horizontal" === this.thumbnailsOrientation ? this.thumbnailTouchDistance.x : this.thumbnailTouchDistance.y,
					d = "horizontal" === this.thumbnailsOrientation ? this.thumbnailTouchDistance.y : this.thumbnailTouchDistance.x;
				if(Math.abs(c) > Math.abs(d)) {
					if(a.preventDefault(), this.thumbnailsPosition >= 0) {
						var e = -this.thumbnailTouchStartPosition;
						c = e + .2 * (c - e)
					} else if(this.thumbnailsPosition <= -this.thumbnailsSize + this.thumbnailsContainerSize) {
						var f = this.thumbnailsSize - this.thumbnailsContainerSize + this.thumbnailTouchStartPosition;
						c = -f + .2 * (c + f)
					}
					this._moveThumbnailsTo(this.thumbnailTouchStartPosition + c, !0)
				}
			},
			_onThumbnailTouchEnd: function(a) {
				{
					var d = this;
					"horizontal" === this.thumbnailsOrientation ? this.thumbnailTouchDistance.x : this.thumbnailTouchDistance.y
				}
				if(this.$thumbnails.off(this.thumbnailTouchSwipeEvents.moveEvent), b(document).off(this.thumbnailTouchSwipeEvents.endEvent), this.$thumbnails.removeClass("sp-grabbing").addClass("sp-grab"), this.isThumbnailTouchMoving === !1 || this.isThumbnailTouchMoving === !0 && Math.abs(this.thumbnailTouchDistance.x) < 10 && Math.abs(this.thumbnailTouchDistance.y) < 10) {
					var e = b(a.target).hasClass("sp-thumbnail-container") ? b(a.target) : b(a.target).parents(".sp-thumbnail-container"),
						f = e.index();
					return void(0 !== b(a.target).parents("a").length ? (b(a.target).parents("a").off("click." + c), this.$thumbnailsContainer.removeClass("sp-swiping")) : f !== this.selectedThumbnailIndex && -1 !== f && this.gotoSlide(f))
				}
				this.isThumbnailTouchMoving = !1, b(a.target).parents(".sp-thumbnail").one("click", function(a) {
					a.preventDefault()
				}), setTimeout(function() {
					d.$thumbnailsContainer.removeClass("sp-swiping")
				}, 1), this.thumbnailsPosition > 0 ? this._moveThumbnailsTo(0) : this.thumbnailsPosition < this.thumbnailsContainerSize - this.thumbnailsSize && this._moveThumbnailsTo(this.thumbnailsContainerSize - this.thumbnailsSize), this.trigger({
					type: "thumbnailsMoveComplete"
				}), b.isFunction(this.settings.thumbnailsMoveComplete) && this.settings.thumbnailsMoveComplete.call(this, {
					type: "thumbnailsMoveComplete"
				})
			},
			destroyThumbnailTouchSwipe: function() {
				this.off("update." + c), this.isThumbnailScroller !== !1 && (this.$thumbnails.off(this.thumbnailTouchSwipeEvents.startEvent), this.$thumbnails.off(this.thumbnailTouchSwipeEvents.moveEvent), this.$thumbnails.off("dragstart." + c), b(document).off(this.thumbnailTouchSwipeEvents.endEvent), this.$thumbnails.removeClass("sp-grab"))
			},
			thumbnailTouchSwipeDefaults: {
				thumbnailTouchSwipe: !0
			}
		};
	b.SliderPro.addModule("ThumbnailTouchSwipe", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "ThumbnailArrows." + b.SliderPro.namespace,
		d = {
			$thumbnailArrows: null,
			$previousThumbnailArrow: null,
			$nextThumbnailArrow: null,
			initThumbnailArrows: function() {
				var a = this;
				this.on("update." + c, b.proxy(this._thumbnailArrowsOnUpdate, this)), this.on("sliderResize." + c + " thumbnailsMoveComplete." + c, function() {
					a.isThumbnailScroller === !0 && a.settings.thumbnailArrows === !0 && a._checkThumbnailArrowsVisibility()
				})
			},
			_thumbnailArrowsOnUpdate: function() {
				var a = this;
				this.isThumbnailScroller !== !1 && (this.settings.thumbnailArrows === !0 && null === this.$thumbnailArrows ? (this.$thumbnailArrows = b('<div class="sp-thumbnail-arrows"></div>').appendTo(this.$thumbnailsContainer), this.$previousThumbnailArrow = b('<div class="sp-thumbnail-arrow sp-previous-thumbnail-arrow"></div>').appendTo(this.$thumbnailArrows), this.$nextThumbnailArrow = b('<div class="sp-thumbnail-arrow sp-next-thumbnail-arrow"></div>').appendTo(this.$thumbnailArrows), this.$previousThumbnailArrow.on("click." + c, function() {
					var b = Math.min(0, a.thumbnailsPosition + a.thumbnailsContainerSize);
					a._moveThumbnailsTo(b)
				}), this.$nextThumbnailArrow.on("click." + c, function() {
					var b = Math.max(a.thumbnailsContainerSize - a.thumbnailsSize, a.thumbnailsPosition - a.thumbnailsContainerSize);
					a._moveThumbnailsTo(b)
				})) : this.settings.thumbnailArrows === !1 && null !== this.$thumbnailArrows && this._removeThumbnailArrows(), this.settings.thumbnailArrows === !0 && (this.settings.fadeThumbnailArrows === !0 ? this.$thumbnailArrows.addClass("sp-fade-thumbnail-arrows") : this.settings.fadeThumbnailArrows === !1 && this.$thumbnailArrows.removeClass("sp-fade-thumbnail-arrows"), this._checkThumbnailArrowsVisibility()))
			},
			_checkThumbnailArrowsVisibility: function() {
				0 === this.thumbnailsPosition ? this.$previousThumbnailArrow.css("display", "none") : this.$previousThumbnailArrow.css("display", "block"), this.thumbnailsPosition === this.thumbnailsContainerSize - this.thumbnailsSize ? this.$nextThumbnailArrow.css("display", "none") : this.$nextThumbnailArrow.css("display", "block")
			},
			_removeThumbnailArrows: function() {
				null !== this.$thumbnailArrows && (this.$previousThumbnailArrow.off("click." + c), this.$nextThumbnailArrow.off("click." + c), this.$thumbnailArrows.remove(), this.$thumbnailArrows = null)
			},
			destroyThumbnailArrows: function() {
				this._removeThumbnailArrows(), this.off("update." + c), this.off("sliderResize." + c), this.off("thumbnailsMoveComplete." + c)
			},
			thumbnailArrowsDefaults: {
				thumbnailArrows: !1,
				fadeThumbnailArrows: !0
			}
		};
	b.SliderPro.addModule("ThumbnailArrows", d)
}(window, jQuery),
function(a, b) {
	"use strict";
	var c = "Video." + b.SliderPro.namespace,
		d = {
			initVideo: function() {
				this.on("update." + c, b.proxy(this._videoOnUpdate, this)), this.on("gotoSlideComplete." + c, b.proxy(this._videoOnGotoSlideComplete, this))
			},
			_videoOnUpdate: function() {
				var a = this;
				this.$slider.find(".sp-video").not("a, [data-video-init]").each(function() {
					var c = b(this);
					a._initVideo(c)
				}), this.$slider.find("a.sp-video").not("[data-video-preinit]").each(function() {
					var c = b(this);
					a._preinitVideo(c)
				})
			},
			_initVideo: function(a) {
				var d = this;
				a.attr("data-video-init", !0).videoController(), a.on("videoPlay." + c, function() {
					"stopAutoplay" === d.settings.playVideoAction && "undefined" != typeof d.stopAutoplay && (d.stopAutoplay(), d.settings.autoplay = !1);
					var c = {
						type: "videoPlay",
						video: a
					};
					d.trigger(c), b.isFunction(d.settings.videoPlay) && d.settings.videoPlay.call(d, c)
				}), a.on("videoPause." + c, function() {
					"startAutoplay" === d.settings.pauseVideoAction && "undefined" != typeof d.startAutoplay && (d.startAutoplay(), d.settings.autoplay = !0);
					var c = {
						type: "videoPause",
						video: a
					};
					d.trigger(c), b.isFunction(d.settings.videoPause) && d.settings.videoPause.call(d, c)
				}), a.on("videoEnded." + c, function() {
					"startAutoplay" === d.settings.endVideoAction && "undefined" != typeof d.startAutoplay ? (d.startAutoplay(), d.settings.autoplay = !0) : "nextSlide" === d.settings.endVideoAction ? d.nextSlide() : "replayVideo" === d.settings.endVideoAction && a.videoController("replay");
					var c = {
						type: "videoEnd",
						video: a
					};
					d.trigger(c), b.isFunction(d.settings.videoEnd) && d.settings.videoEnd.call(d, c)
				})
			},
			_preinitVideo: function(a) {
				var d = this;
				a.attr("data-video-preinit", !0), a.on("click." + c, function(c) {
					if(!d.$slider.hasClass("sp-swiping")) {
						c.preventDefault();
						var e, f, g, h, i, j, k, l = a.attr("href"),
							m = a.children("img").attr("width"),
							n = a.children("img").attr("height"); - 1 !== l.indexOf("youtube") || -1 !== l.indexOf("youtu.be") ? f = "youtube" : -1 !== l.indexOf("vimeo") && (f = "vimeo"), g = "youtube" === f ? /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/ : /http:\/\/(www\.)?vimeo.com\/(\d+)/, h = l.match(g), i = h[2], j = "youtube" === f ? "http://www.youtube.com/embed/" + i + "?enablejsapi=1&wmode=opaque" : "http://player.vimeo.com/video/" + i + "?api=1", k = l.split("?")[1], "undefined" != typeof k && (k = k.split("&"), b.each(k, function(a, b) {
							-1 === b.indexOf(i) && (j += "&" + b)
						})), e = b("<iframe></iframe>").attr({
							src: j,
							width: m,
							height: n,
							"class": a.attr("class"),
							frameborder: 0
						}).insertBefore(a), d._initVideo(e), e.videoController("play"), a.css("display", "none")
					}
				})
			},
			_videoOnGotoSlideComplete: function(a) {
				var b = this.$slides.find(".sp-slide").eq(a.previousIndex).find(".sp-video[data-video-init]");
				if(-1 !== a.previousIndex && 0 !== b.length && ("stopVideo" === this.settings.leaveVideoAction ? b.videoController("stop") : "pauseVideo" === this.settings.leaveVideoAction ? b.videoController("pause") : "removeVideo" === this.settings.leaveVideoAction && (0 !== b.siblings("a.sp-video").length ? (b.siblings("a.sp-video").css("display", ""), b.videoController("destroy"), b.remove()) : b.videoController("stop"))), "playVideo" === this.settings.reachVideoAction) {
					var d = this.$slides.find(".sp-slide").eq(a.index).find(".sp-video[data-video-init]"),
						e = this.$slides.find(".sp-slide").eq(a.index).find(".sp-video[data-video-preinit]");
					0 !== d.length ? d.videoController("play") : 0 !== e.length && e.trigger("click." + c)
				}
			},
			destroyVideo: function() {
				this.$slider.find(".sp-video[ data-video-preinit ]").each(function() {
					var a = b(this);
					a.removeAttr("data-video-preinit"), a.off("click." + c)
				}), this.$slider.find(".sp-video[ data-video-init ]").each(function() {
					var a = b(this);
					a.removeAttr("data-video-init"), a.off("Video"), a.videoController("destroy")
				}), this.off("update." + c), this.off("gotoSlideComplete." + c)
			},
			videoDefaults: {
				reachVideoAction: "none",
				leaveVideoAction: "pauseVideo",
				playVideoAction: "stopAutoplay",
				pauseVideoAction: "none",
				endVideoAction: "none",
				videoPlay: function() {},
				videoPause: function() {},
				videoEnd: function() {}
			}
		};
	b.SliderPro.addModule("Video", d)
}(window, jQuery),
function(a) {
	"use strict";
	var b = window.navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1,
		c = function(b, c) {
			this.$video = a(b), this.options = c, this.settings = {}, this.player = null, this._init()
		};
	c.prototype = {
		_init: function() {
			this.settings = a.extend({}, this.defaults, this.options);
			var b = this,
				c = a.VideoController.players,
				d = this.$video.attr("id");
			for(var e in c)
				if("undefined" != typeof c[e] && c[e].isType(this.$video)) {
					this.player = new c[e](this.$video);
					break
				}
			if(null !== this.player) {
				var f = ["ready", "start", "play", "pause", "ended"];
				a.each(f, function(c, e) {
					var f = "video" + e.charAt(0).toUpperCase() + e.slice(1);
					b.player.on(e, function() {
						b.trigger({
							type: f,
							video: d
						}), a.isFunction(b.settings[f]) && b.settings[f].call(b, {
							type: f,
							video: d
						})
					})
				})
			}
		},
		play: function() {
			b === !0 && this.player.isStarted() === !1 || "playing" === this.player.getState() || this.player.play()
		},
		stop: function() {
			b === !0 && this.player.isStarted() === !1 || "stopped" === this.player.getState() || this.player.stop()
		},
		pause: function() {
			b === !0 && this.player.isStarted() === !1 || "paused" === this.player.getState() || this.player.pause()
		},
		replay: function() {
			(b !== !0 || this.player.isStarted() !== !1) && this.player.replay()
		},
		on: function(a, b) {
			return this.$video.on(a, b)
		},
		off: function(a) {
			return this.$video.off(a)
		},
		trigger: function(a) {
			return this.$video.triggerHandler(a)
		},
		destroy: function() {
			this.player.isStarted() === !0 && this.stop(), this.player.off("ready"), this.player.off("start"), this.player.off("play"), this.player.off("pause"), this.player.off("ended"), this.$video.removeData("videoController")
		},
		defaults: {
			videoReady: function() {},
			videoStart: function() {},
			videoPlay: function() {},
			videoPause: function() {},
			videoEnded: function() {}
		}
	}, a.VideoController = {
		players: {},
		addPlayer: function(a, b) {
			this.players[a] = b
		}
	}, a.fn.videoController = function(b) {
		var d = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			if("undefined" == typeof a(this).data("videoController")) {
				var e = new c(this, b);
				a(this).data("videoController", e)
			} else if("undefined" != typeof b) {
				var f = a(this).data("videoController");
				"function" == typeof f[b] ? f[b].apply(f, d) : a.error(b + " does not exist in videoController.")
			}
		})
	};
	var d = function(b) {
		this.$video = b, this.player = null, this.ready = !1, this.started = !1, this.state = "", this.events = a({}), this._init()
	};
	d.prototype = {
		_init: function() {},
		play: function() {},
		pause: function() {},
		stop: function() {},
		replay: function() {},
		isType: function() {},
		isReady: function() {
			return this.ready
		},
		isStarted: function() {
			return this.started
		},
		getState: function() {
			return this.state
		},
		on: function(a, b) {
			return this.events.on(a, b)
		},
		off: function(a) {
			return this.events.off(a)
		},
		trigger: function(a) {
			return this.events.triggerHandler(a)
		}
	};
	var e = {
			youtubeAPIAdded: !1,
			youtubeVideos: []
		},
		f = function(b) {
			this.init = !1;
			var c = window.YT && window.YT.Player;
			if("undefined" != typeof c) d.call(this, b);
			else if(e.youtubeVideos.push({
					video: b,
					scope: this
				}), e.youtubeAPIAdded === !1) {
				e.youtubeAPIAdded = !0;
				var f = document.createElement("script");
				f.src = "http://www.youtube.com/player_api";
				var g = document.getElementsByTagName("script")[0];
				g.parentNode.insertBefore(f, g), window.onYouTubePlayerAPIReady = function() {
					a.each(e.youtubeVideos, function(a, b) {
						d.call(b.scope, b.video)
					})
				}
			}
		};
	f.prototype = new d, f.prototype.constructor = f, a.VideoController.addPlayer("YoutubeVideo", f), f.isType = function(a) {
		if(a.is("iframe")) {
			var b = a.attr("src");
			if(-1 !== b.indexOf("youtube.com") || -1 !== b.indexOf("youtu.be")) return !0
		}
		return !1
	}, f.prototype._init = function() {
		this.init = !0, this._setup()
	}, f.prototype._setup = function() {
		var a = this;
		this.player = new YT.Player(this.$video[0], {
			events: {
				onReady: function() {
					a.trigger({
						type: "ready"
					}), a.ready = !0
				},
				onStateChange: function(b) {
					switch(b.data) {
						case YT.PlayerState.PLAYING:
							a.started === !1 && (a.started = !0, a.trigger({
								type: "start"
							})), a.state = "playing", a.trigger({
								type: "play"
							});
							break;
						case YT.PlayerState.PAUSED:
							a.state = "paused", a.trigger({
								type: "pause"
							});
							break;
						case YT.PlayerState.ENDED:
							a.state = "ended", a.trigger({
								type: "ended"
							})
					}
				}
			}
		})
	}, f.prototype.play = function() {
		var a = this;
		if(this.ready === !0) this.player.playVideo();
		else var b = setInterval(function() {
			a.ready === !0 && (clearInterval(b), a.player.playVideo())
		}, 100)
	}, f.prototype.pause = function() {
		b === !0 ? this.stop() : this.player.pauseVideo()
	}, f.prototype.stop = function() {
		this.player.seekTo(1), this.player.stopVideo(), this.state = "stopped"
	}, f.prototype.replay = function() {
		this.player.seekTo(1), this.player.playVideo()
	}, f.prototype.on = function(a, b) {
		var c = this;
		if(this.init === !0) d.prototype.on.call(this, a, b);
		else var e = setInterval(function() {
			c.init === !0 && (clearInterval(e), d.prototype.on.call(c, a, b))
		}, 100)
	};
	var g = {
			vimeoAPIAdded: !1,
			vimeoVideos: []
		},
		h = function(b) {
			if(this.init = !1, "undefined" != typeof window.Froogaloop) d.call(this, b);
			else if(g.vimeoVideos.push({
					video: b,
					scope: this
				}), g.vimeoAPIAdded === !1) {
				g.vimeoAPIAdded = !0;
				var c = document.createElement("script");
				c.src = "http://a.vimeocdn.com/js/froogaloop2.min.js";
				var e = document.getElementsByTagName("script")[0];
				e.parentNode.insertBefore(c, e);
				var f = setInterval(function() {
					"undefined" != typeof window.Froogaloop && (clearInterval(f), a.each(g.vimeoVideos, function(a, b) {
						d.call(b.scope, b.video)
					}))
				}, 100)
			}
		};
	h.prototype = new d, h.prototype.constructor = h, a.VideoController.addPlayer("VimeoVideo", h), h.isType = function(a) {
		if(a.is("iframe")) {
			var b = a.attr("src");
			if(-1 !== b.indexOf("vimeo.com")) return !0
		}
		return !1
	}, h.prototype._init = function() {
		this.init = !0, this._setup()
	}, h.prototype._setup = function() {
		var a = this;
		this.player = $f(this.$video[0]), this.player.addEvent("ready", function() {
			a.ready = !0, a.trigger({
				type: "ready"
			}), a.player.addEvent("play", function() {
				a.started === !1 && (a.started = !0, a.trigger({
					type: "start"
				})), a.state = "playing", a.trigger({
					type: "play"
				})
			}), a.player.addEvent("pause", function() {
				a.state = "paused", a.trigger({
					type: "pause"
				})
			}), a.player.addEvent("finish", function() {
				a.state = "ended", a.trigger({
					type: "ended"
				})
			})
		})
	}, h.prototype.play = function() {
		var a = this;
		if(this.ready === !0) this.player.api("play");
		else var b = setInterval(function() {
			a.ready === !0 && (clearInterval(b), a.player.api("play"))
		}, 100)
	}, h.prototype.pause = function() {
		this.player.api("pause")
	}, h.prototype.stop = function() {
		this.player.api("seekTo", 0), this.player.api("pause"), this.state = "stopped"
	}, h.prototype.replay = function() {
		this.player.api("seekTo", 0), this.player.api("play")
	}, h.prototype.on = function(a, b) {
		var c = this;
		if(this.init === !0) d.prototype.on.call(this, a, b);
		else var e = setInterval(function() {
			c.init === !0 && (clearInterval(e), d.prototype.on.call(c, a, b))
		}, 100)
	};
	var i = function(a) {
		d.call(this, a)
	};
	i.prototype = new d, i.prototype.constructor = i, a.VideoController.addPlayer("HTML5Video", i), i.isType = function(a) {
		return a.is("video") && a.hasClass("video-js") === !1 && a.hasClass("sublime") === !1 ? !0 : !1
	}, i.prototype._init = function() {
		var a = this;
		this.player = this.$video[0], this.ready = !0, this.player.addEventListener("play", function() {
			a.started === !1 && (a.started = !0, a.trigger({
				type: "start"
			})), a.state = "playing", a.trigger({
				type: "play"
			})
		}), this.player.addEventListener("pause", function() {
			a.state = "paused", a.trigger({
				type: "pause"
			})
		}), this.player.addEventListener("ended", function() {
			a.state = "ended", a.trigger({
				type: "ended"
			})
		})
	}, i.prototype.play = function() {
		this.player.play()
	}, i.prototype.pause = function() {
		this.player.pause()
	}, i.prototype.stop = function() {
		this.player.currentTime = 0, this.player.pause(), this.state = "stopped"
	}, i.prototype.replay = function() {
		this.player.currentTime = 0, this.player.play()
	};
	var j = function(a) {
		d.call(this, a)
	};
	j.prototype = new d, j.prototype.constructor = j, a.VideoController.addPlayer("VideoJSVideo", j), j.isType = function(a) {
		return "undefined" == typeof a.attr("data-videojs-id") && !a.hasClass("video-js") || "undefined" == typeof videojs ? !1 : !0
	}, j.prototype._init = function() {
		var a = this,
			b = this.$video.attr(this.$video.hasClass("video-js") ? "id" : "data-videojs-id");
		this.player = videojs(b), this.player.ready(function() {
			a.ready = !0, a.trigger({
				type: "ready"
			}), a.player.on("play", function() {
				a.started === !1 && (a.started = !0, a.trigger({
					type: "start"
				})), a.state = "playing", a.trigger({
					type: "play"
				})
			}), a.player.on("pause", function() {
				a.state = "paused", a.trigger({
					type: "pause"
				})
			}), a.player.on("ended", function() {
				a.state = "ended", a.trigger({
					type: "ended"
				})
			})
		})
	}, j.prototype.play = function() {
		this.player.play()
	}, j.prototype.pause = function() {
		this.player.pause()
	}, j.prototype.stop = function() {
		this.player.currentTime(0), this.player.pause(), this.state = "stopped"
	}, j.prototype.replay = function() {
		this.player.currentTime(0), this.player.play()
	};
	var k = function(a) {
		d.call(this, a)
	};
	k.prototype = new d, k.prototype.constructor = k, a.VideoController.addPlayer("SublimeVideo", k), k.isType = function(a) {
		return a.hasClass("sublime") && "undefined" != typeof sublime ? !0 : !1
	}, k.prototype._init = function() {
		var a = this;
		sublime.ready(function() {
			a.player = sublime.player(a.$video.attr("id")), a.ready = !0, a.trigger({
				type: "ready"
			}), a.player.on("play", function() {
				a.started === !1 && (a.started = !0, a.trigger({
					type: "start"
				})), a.state = "playing", a.trigger({
					type: "play"
				})
			}), a.player.on("pause", function() {
				a.state = "paused", a.trigger({
					type: "pause"
				})
			}), a.player.on("stop", function() {
				a.state = "stopped", a.trigger({
					type: "stop"
				})
			}), a.player.on("end", function() {
				a.state = "ended", a.trigger({
					type: "ended"
				})
			})
		})
	}, k.prototype.play = function() {
		this.player.play()
	}, k.prototype.pause = function() {
		this.player.pause()
	}, k.prototype.stop = function() {
		this.player.stop()
	}, k.prototype.replay = function() {
		this.player.stop(), this.player.play()
	};
	var l = function(a) {
		d.call(this, a)
	};
	l.prototype = new d, l.prototype.constructor = l, a.VideoController.addPlayer("JWPlayerVideo", l), l.isType = function(a) {
		return "undefined" == typeof a.attr("data-jwplayer-id") && !a.hasClass("jwplayer") && 0 === a.find("object[data*='jwplayer']").length || "undefined" == typeof jwplayer ? !1 : !0
	}, l.prototype._init = function() {
		var a, b = this;
		this.$video.hasClass("jwplayer") ? a = this.$video.attr("id") : "undefined" != typeof this.$video.attr("data-jwplayer-id") ? a = this.$video.attr("data-jwplayer-id") : 0 !== this.$video.find("object[data*='jwplayer']").length && (a = this.$video.find("object").attr("id")), this.player = jwplayer(a), this.player.onReady(function() {
			b.ready = !0, b.trigger({
				type: "ready"
			}), b.player.onPlay(function() {
				b.started === !1 && (b.started = !0, b.trigger({
					type: "start"
				})), b.state = "playing", b.trigger({
					type: "play"
				})
			}), b.player.onPause(function() {
				b.state = "paused", b.trigger({
					type: "pause"
				})
			}), b.player.onComplete(function() {
				b.state = "ended", b.trigger({
					type: "ended"
				})
			})
		})
	}, l.prototype.play = function() {
		this.player.play(!0)
	}, l.prototype.pause = function() {
		this.player.pause(!0)
	}, l.prototype.stop = function() {
		this.player.stop(), this.state = "stopped"
	}, l.prototype.replay = function() {
		this.player.seek(0), this.player.play(!0)
	}
}(jQuery);