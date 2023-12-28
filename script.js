// span text div = .container
// input field text = #inputField

// TODO: Split or slice a word into letters and check letter by letter if user input is correct and color the letter by letter accordingly

// take 10 words from array and show them in span

const wordsArray = ["apple", "banana", "cat", "dog", "elephant", "flower", "guitar", "happy", "island", "jazz", "kite", "lamp", "moon", "notebook", "orange", "piano", "queen", "rainbow", "sunshine", "tree", "umbrella", "violet", "watermelon", "xylophone", "yellow", "zebra", "airplane", "butterfly", "chocolate", "dolphin", "envelope", "fireworks", "garden", "happiness", "ice cream", "jungle", "koala", "lighthouse", "mountain", "nest", "ocean", "parrot", "quilt", "rocket", "sunny", "trampoline", "unicorn", "volcano", "whale", "xylophone", "yoga", "zeppelin"];

$(document).ready(function () {


    let randomWords = [];
    for (let i = 0; i < 5; i++) {
        let randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        randomWords.push(randomWord);
    }

    $(".container").empty();
    randomWords.map(function (word) {
        $("<span>").attr('id', word).text(word + ' ').appendTo(".container");
    });

    $("#inputField").keypress(function (e) {

        if (e.which == 13) {
            let userInput = $("#inputField").val()
            console.log(userInput)
            $('#inputField').val('')

            if (userInput === randomWords[0]) {
                console.log('match')
                $(`#${randomWords}`).css('color', 'green')
                randomWords.shift()
            } else if (userInput !== randomWords[0] && userInput !== randomWords) {
                console.log(`${randomWords} nije match`)
                $(`#${randomWords}`).css('color', 'red')
            }
            if (randomWords.length === 0) {
                console.log('YOU WIN')
            }
            console.log(randomWords)
        }
    })
});
