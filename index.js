function writeCards(array, eventName) {
    const array1 = [];
    for (var i = 0; i < array.length; i++) {
        array1.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }
    return array1;
}


function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
