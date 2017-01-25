(function(a) {
  skel.breakpoints({wide:"(max-width: 1680px)", normal:"(max-width: 1280px)", narrow:"(max-width: 960px)", narrower:"(max-width: 840px)", mobile:"(max-width: 736px)"});
  a(function() {
    var g = a(window), d = a("body");
    d.addClass("is-loading");
    g.on("load", function() {
      d.removeClass("is-loading");
    });
    9 > skel.vars.IEVersion && a(":last-child").addClass("last-child");
    a("form").placeholder();
    skel.on("+mobile -mobile", function() {
      a.prioritize(".important\\28 mobile\\29", skel.breakpoint("mobile").active);
    });
    a("#nav > ul").dropotron({mode:"fade", speed:350, noOpenerFade:!0, alignment:"center"});
    a(".scrolly").scrolly();
    a('<div id="navButton"><a href="#navPanel" class="toggle"></a></div>').appendTo(d);
    a('<div id="navPanel"><nav>' + a("#nav").navList() + "</nav></div>").appendTo(d).panel({delay:500, hideOnClick:!0, hideOnSwipe:!0, resetScroll:!0, resetForms:!0, target:d, visibleClass:"navPanel-visible"});
    "wp" == skel.vars.os && 10 > skel.vars.osVersion && a("#navButton, #navPanel, #page-wrapper").css("transition", "none");
    a(".carousel").each(function() {
      var b = a(this), d = a('<span class="forward"></span>'), k = a('<span class="backward"></span>'), e = b.children(".reel"), h = e.children("article"), c = 0, l, m, n, f;
      h.addClass("loading");
      b.onVisible(function() {
        var a, b = h.length - Math.ceil(g.width() / NaN);
        a = window.setInterval(function() {
          var d = h.filter(".loading"), c = d.first();
          d.length <= b ? (window.clearInterval(a), h.removeClass("loading")) : 10 > skel.vars.IEVersion ? (c.fadeTo(750, 1), window.setTimeout(function() {
            c.removeClass("loading");
          }, 50)) : c.removeClass("loading");
        }, 250);
      }, 50);
      b._update = function() {
        c = 0;
        m = -1 * n + g.width();
        l = 0;
        b._updatePos();
      };
      b._updatePos = 9 > skel.vars.IEVersion ? function() {
        e.css("left", c);
      } : function() {
        e.css("transform", "translate(" + c + "px, 0)");
      };
      d.appendTo(b).hide().mouseenter(function(a) {
        f = window.setInterval(function() {
          c -= 4;
          c <= m && (window.clearInterval(f), c = m);
          b._updatePos();
        }, 10);
      }).mouseleave(function(a) {
        window.clearInterval(f);
      });
      k.appendTo(b).hide().mouseenter(function(a) {
        f = window.setInterval(function() {
          c += 4;
          c >= l && (window.clearInterval(f), c = l);
          b._updatePos();
        }, 10);
      }).mouseleave(function(a) {
        window.clearInterval(f);
      });
      g.load(function() {
        n = e[0].scrollWidth;
        skel.on("change", function() {
          skel.vars.touch ? (e.css("overflow-y", "hidden").css("overflow-x", "scroll").scrollLeft(0), d.hide(), k.hide()) : (e.css("overflow", "visible").scrollLeft(0), d.show(), k.show());
          b._update();
        });
        g.resize(function() {
          n = e[0].scrollWidth;
          b._update();
        }).trigger("resize");
      });
    });
  });
})(jQuery);