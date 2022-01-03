const $word = document.querySelector(".word");
const $form = document.querySelector(".form");
const $explain1 = document.querySelector(".explain1");
const $explain2 = document.querySelector(".explain2");
const $explain3 = document.querySelector(".explain3");
const $noun1 = document.querySelector(".noun1");
const $definition1 = document.querySelector(".definition1");
const $example1 = document.querySelector(".example1");
const $noun2 = document.querySelector(".noun2");
const $definition2 = document.querySelector(".definition2");
const $example2 = document.querySelector(".example2");
const $noun3 = document.querySelector(".noun3");
const $definition3 = document.querySelector(".definition3");
const $example3 = document.querySelector(".example3");
const $searchWord = document.querySelector(".search-word");
async function getDictionary(word) {
    let data = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
    );
    data = await data.json();
    return data;
}
$form.onsubmit = async (e) => {
    e.preventDefault();
    let word = $form.word.value;
    try {
        let data = await getDictionary(word);

        let meanings = data[0].meanings;

        console.log(meanings);
        if (meanings[0] != null) {
            $noun1.innerHTML = meanings[0].partOfSpeech;
            $definition1.innerHTML = meanings[0].definitions[0].definition;
            $example1.innerHTML = meanings[0].definitions[0].example;
            $explain1.style.display = "block";
            $searchWord.innerHTML = word;
        }

        if (meanings[1] != null) {
            $noun2.innerHTML = meanings[1].partOfSpeech;
            $definition2.innerHTML = meanings[1].definitions[0].definition;
            $example2.innerHTML = meanings[1].definitions[0].example;
            $explain2.style.display = "block";
        }

        if (meanings[2] != null) {
            $noun3.innerHTML = meanings[2].partOfSpeech;
            $definition3.innerHTML = meanings[2].definitions[0].definition;
            $example3.innerHTML = meanings[2].definitions[0].example;
            $explain3.style.display = "block";
        }

        $form.word.value = "";
    } catch (error) {
        alert(`Try Again!`);
        $form.word.value = "";
    }
};
