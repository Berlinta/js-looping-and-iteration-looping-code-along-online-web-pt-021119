function writeCards(names, event) {
    let newArray = [];

    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newArray
}

function countdown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}