const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copycats = [...cats, name];
    return(copycats)
}

function prependCat(name) {
    const copycats = [name, ...cats];
    return(copycats);
}

function removeLastCat() {
    return(cats.slice(0, -1));
}

function removeFirstCat() {
    return(cats.slice(1, cats.length))
}