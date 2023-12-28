async function fetchWords(count) {
    const response = await fetch(`https://random-word-api.herokuapp.com/word?number=${count}`);
    const data = await response.json();
    return data;
}

async function generateWordArray() {
    const wordCount = 2; // Change this to the number of words you want
    const words = await fetchWords(wordCount);
    return words;
}

$(document).ready(function () {
    let randomWords = [];
    let currentWordIndex = 0;

    generateWordArray().then(wordsArray => {
        console.log(wordsArray);

        for (let i = 0; i < wordsArray.length; i++) {
            $("<span>").attr('id', `word${i}`).text(wordsArray[i] + ' ').appendTo(".container");
        }

        randomWords = wordsArray;
    });

    $("#inputField").keypress(function (e) {
        if (e.which == 13 || e.which == 32) {
            e.preventDefault();
            let userInput = $("#inputField").val().trim();

            if (currentWordIndex + 1 < randomWords.length && userInput === randomWords[currentWordIndex]) {
                $(`#word${currentWordIndex + 1}`).css('color', 'blue');
            }

            if (userInput === randomWords[currentWordIndex]) {
                $(`#word${currentWordIndex}`).css('color', 'green');
                currentWordIndex++;

                if (currentWordIndex === randomWords.length) {
                    console.log('YOU WIN');
                    alert('WINNER')
                }
            } else {
                $(`#word${currentWordIndex}`).css('color', 'red');
            }

            $('#inputField').val('');
        }
    });
});
