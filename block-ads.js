function removeAds() {
    var spans = document.getElementsByTagName("span");
    var promoted = "Promoted";
    //var promotedSpans = [];

    for (var i = 0; i < spans.length; i++) {
    if (spans[i].textContent == promoted) {
        spans[i].parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
        //promotedSpans.push();
    }
    }
    //console.log(promotedSpans);
}
removeAds();
MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    console.log(mutations, observer);
    removeAds();
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
});
