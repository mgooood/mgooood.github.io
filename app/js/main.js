function isJavascriptAvailable() {
    console.log('javascript is available');
}
function isJQueryAvailable() {
    if (typeof jQuery === 'undefined') {
        console.log('jQuery is available');
    } else {
        console.log('jQuery is not available');
    }
    
}

isJavascriptAvailable();
isJQueryAvailable();