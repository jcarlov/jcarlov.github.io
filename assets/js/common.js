$(document).ready(function () {
  // Abstract, award and bibtex panels: at most one open per entry.
  //
  // These were <a role="button"> with no href, which meant no tabindex and so
  // no place in the tab order at all -- the main control on the publications
  // page could only be reached with a mouse. They are <button> elements now,
  // which is why there is no keydown handling here: the browser gives Enter
  // and Space to a real button for free, and a handler of our own would only
  // be a second, worse implementation of it.
  //
  // What is still ours to do is aria-expanded, and it has to be resynced for
  // the whole group rather than flipped on the button that was clicked:
  // opening the abstract closes the award, so that button's state changes too
  // even though nobody touched it.
  var PANELS = ["abstract", "award", "bibtex"];

  function syncExpanded($entry) {
    PANELS.forEach(function (kind) {
      var open = $entry.find("." + kind + ".hidden").hasClass("open");
      $entry.find("button." + kind).attr("aria-expanded", open ? "true" : "false");
    });
  }

  $("button.abstract, button.award, button.bibtex").click(function () {
    var $entry = $(this).parent().parent();
    var clicked = this;
    PANELS.forEach(function (kind) {
      var $panel = $entry.find("." + kind + ".hidden");
      if (clicked.classList.contains(kind)) {
        $panel.toggleClass("open");
      } else {
        $panel.filter(".open").removeClass("open");
      }
    });
    syncExpanded($entry);
  });

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
