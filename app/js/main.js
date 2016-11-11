function isJavascriptAvailable() {
    console.log('javascript is available');
}
function isJQueryAvailable() {
    if (jQuery) {
        console.log('jQuery is available');
    } else {
        console.log('jQuery is not available');
    }
    
}

isJavascriptAvailable();
isJQueryAvailable();