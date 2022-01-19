/** Return the first element with the given selector*/
function qs(name) {
    return document.querySelector(name);
}

/** Return list of element with the given selector*/
function qsAll(name) {
    return document.querySelectorAll(name);
}

/** Return element by class name at a particular position*/
function dot(className) {
    return qs(`.${className}`)
}

function onClick(selector, run){
    if(qs(selector))
        qs(selector).addEventListener('click', run)
}