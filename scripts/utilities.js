function toggleCollapsible(obj) {
    //this.classList.toggle("active");
    if(typeof(obj)=='string'){ obj = document.getElementsById(obj); }
    if (getComputedStyle(obj, null).getPropertyValue("display") === "none") {
        obj.style.display = "block";
    } else {
        obj.style.display = "none";
    }
}

function linkPlaceholderCollapsibles(){
    let colls = document.getElementsByClassName("PlaceholderCollapsible");
    let i;
    for (i = 0; i < colls.length; i++) {
        let placeholder = colls[i].getElementsByClassName("CollapsiblePlaceholder")[0];
        let content = colls[i].getElementsByClassName("CollapsibleContent")[0];
        placeholder.addEventListener("click", function() {
            toggleCollapsible(content);
            toggleCollapsible(placeholder);
        });
        content.addEventListener("click", function() {
            toggleCollapsible(placeholder);
            toggleCollapsible(content);
        });
    }
}

function defineMathJaxMacros(){
  MathJax = {
    tex: {
      macros: {
        'd': ['{\\mathrm{d}}'],
        'e': ['{\\mathrm{e}}'],
        'Trinion': ['{\\rlap{\\kern 0.15em\\raise.04em\\scriptsize{ ⇌}}{◯} }']
      }
    }
  }
}

