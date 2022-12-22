const imageFrame= document.querySelector('#image-frame');

const RANDOM_IMG_ENDPOINT = "https://dog.ceo/api/breeds/image/random";

let guessCount = 0;

async function fetchDogImageURL(url) {
    const response = await fetch(url);

    const responseObject = await response.json();

    return responseObject.message;
}

function getBreedFromURL(url) {
    const breedStartIndex = url.indexOf('breeds/') + 7;

    let breedSlice = url.slice(breedStartIndex);

    breedSlice = breedSlice.slice(0, breedSlice.indexOf('/'));

    if (breedSlice.includes('-')) {
        breedSlice = reverseBreedString(breedSlice);
    }

    return breedSlice;
}

let testURL = 'https://images.dog.ceo/breeds/pinscher-miniature/n02107312_4234.jpg';

// console.log(getBreedFromURL(testURL))

//Another way of parsing the URL for the breed
function parseURL(url) {
    let parsedURL = url.split('/');

    let [, , , , breed] = parsedURL;

    if (breed.includes('-')) {
        breed = breed.split('-');

        [breed[1], breed[0]] = [breed[0], breed[1]];

        breed = breed.join(' ');
    }

    return breed;
}

function reverseBreedString(string) {
    string = string.split('-');
    return `${string[1] + ' ' + string[0]}`;
}

function setUpImageElement(imageURL, altText) {
    const imgElement = document.createElement('img');

    imgElement.setAttribute('id', 'dog-image');

    imgElement.setAttribute('src', imageURL);

    imageFrame.appendChild(imgElement);

    imgElement.setAttribute('alt', altText);
}

function disable(button) {
    button.setAttribute('disabled', '');
}

function addNextButton(parent) {
    const nextButton = document.createElement('button');

    nextButton.classList.add('nextButton');

    nextButton.classList.add('optionButton');

    nextButton.setAttribute('type', 'button');

    nextButton.textContent = 'Next -->'

    parent.appendChild(nextButton);

    nextButton.addEventListener('click', () => {
        location.reload();
    })
}

function setUpOptions(optionsArray, correctAnswer) {
    const optionsContainer = document.querySelector('#options');

    for (let i = 0; i < optionsArray.length; i++) {
        const optionButton = document.createElement('button');

        optionButton.classList.add('optionButton');

        optionButton.value = optionsArray[i];

        optionButton.name = optionsArray[i];

        optionButton.textContent = capitalize(optionsArray[i]);

        optionButton.setAttribute('type', 'button');

        optionButton.addEventListener('click', () => {
            if (optionButton.value === correctAnswer) {
                optionButton.classList.add('correct');

                addNextButton(optionsContainer);
            } else {
                optionButton.classList.add('incorrect');

                optionButton.setAttribute('disabled', '');

                guessCount++;

                if (guessCount === 3) {
                    const buttons = document.querySelectorAll('.optionButton');

                    for (let button of buttons) {
                        if (button.value === correctAnswer) {
                            button.classList.add('correct');

                            addNextButton(optionsContainer);
                        }
                    }
                }
            }
        })

        optionsContainer.appendChild(optionButton);
    }
}

function getRandomElement(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function getMultipleChoices(choiceCount, correctAnswer, array) {        
    let choices = [correctAnswer];
    
    while (choices.length < choiceCount) {
        choices.push(getRandomElement(array));
        // This seems pretty inefficient. Although the choiceCount is never really that high, so perhaps it is okay.
        choices = [...new Set(choices)];
    }

    return shuffleArray(choices);
}

//Alternative way of ensuring there are no repeats in an array before pushing to it:
function checkForRepeat(array) {
    let newArray = [];

    while (newArray.length < 3) {   
        let randomElement = getRandomElement(array);
        
        if (!newArray.includes(randomElement)) {
            newArray.push(randomElement);
        }
    }
    
    console.log(newArray);

    return newArray;
}

function capitalize(string) {
    const stringArray = string.split(' ');

    const capitalizedArr = stringArray.map(word => {
        const firstLetter = word[0].toUpperCase();

        const restOfWord = word.slice(1);

        return firstLetter + restOfWord;
    });

    return capitalizedArr.join(' ').trim();
}

async function renderQuiz() {   
    try {
        imageFrame.textContent = 'Fetching Dog...';
        
        const dogURL = await fetchDogImageURL(RANDOM_IMG_ENDPOINT);

        let breedSlice = getBreedFromURL(dogURL);

        // console.log(breedSlice);

        setUpImageElement(dogURL, breedSlice);

        const dogImageElement = document.querySelector('#dog-image');

        const optionsArray = getMultipleChoices(4, breedSlice, BREEDS);

        dogImageElement.addEventListener('load', () => {
            setUpOptions(optionsArray, breedSlice);
            imageFrame.replaceChildren(dogImageElement);
        })

        // console.log(breedSlice);

        // console.log(BREEDS.filter(breed => breed.includes(breedSlice)));

        // console.log(optionsArray);
    } catch (error) {
        console.error('Error!', error);
    }
}

renderQuiz()

//Using Promise and .then() syntax
// image
//     .then(response => response.json())
//     .then(responseObj => {
//         const url = responseObj.message;
//         console.log(url);

//         let breedSlice = getBreedFromURL(url);

//         if (breedSlice.includes('-')) {
//             breedSlice = reverseBreedString(breedSlice);
//         }

//         setUpImageElement(url, breedSlice);

//         const optionsArray = getMultipleChoices(4, breedSlice, BREEDS);

//         console.log(breedSlice);

//         console.log(BREEDS.filter(breed => breed.includes(breedSlice)));

//         console.log(optionsArray);

//         setUpOptions(optionsArray, breedSlice);

//     })


const BREEDS = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "shepherd australian", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "norwegian buhund", "boston bulldog", "english bulldog", "french bulldog", "staffordshire bullterrier", "australian cattledog", "chihuahua", "chow", "clumber", "cockapoo", "border collie", "coonhound", "cardigan corgi", "cotondetulear", "dachshund", "dalmatian", "great dane", "scottish deerhound", "dhole", "dingo", "doberman", "norwegian elkhound", "entlebucher", "eskimo", "lapphund finnish", "bichon frise", "german shepherd", "italian greyhound", "groenendael", "havanese", "afghan hound", "basset hound", "blood hound", "english hound", "ibizan hound", "plott hound", "walker hound", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "bull mastiff", "english mastiff", "tibetan mastiff", "mexicanhairless", "mix", "bernese mountain", "swiss mountain", "newfoundland", "otterhound", "caucasian ovcharka", "papillon", "pekinese", "pembroke", "miniature pinscher", "pitbull", "german pointer", "german longhair pointer", "pomeranian", "medium poodle", "miniature poodle", "standard poodle", "toy poodle", "pug", "puggle", "pyrenees", "redbone", "chesapeake retriever", "curly retriever", "flatcoated retriever", "golden retriever", "rhodesian ridgeback", "rottweiler", "saluki", "samoyed", "schipperke", "giant schnauzer", "miniature schnauzer", "english setter", "gordon setter", "irish setter", "sharpei", "english sheepdog", "shetland sheepdog", "shiba", "shihtzu", "blenheim spaniel", "brittany spaniel", "cocker spaniel", "irish spaniel", "japanese spaniel", "sussex spaniel", "welsh spaniel", "english springer", "stbernard", "american terrier", "australian terrier", "bedlington terrier", "border terrier", "cairn terrier", "dandie terrier", "fox terrier", "irish terrier", "kerryblue terrier", "lakeland terrier", "norfolk terrier", "norwich terrier", "patterdale terrier", "russell terrier", "scottish terrier", "sealyham terrier", "silky terrier", "tibetan terrier", "toy terrier", "welsh terrier", "westhighland terrier", "wheaten terrier", "yorkshire terrier", "tervuren", "vizsla", "spanish waterdog", "weimaraner", "whippet", "irish wolfhound"];