const imageFrame= document.querySelector('#image-frame');

const RANDOM_IMG_ENDPOINT = "https://dog.ceo/api/breeds/image/random";

const image = fetch(RANDOM_IMG_ENDPOINT);

function getBreedFromURL(url) {
    const breedStartIndex = url.indexOf('breeds/') + 7;

    let breedSlice = url.slice(breedStartIndex);

    return breedSlice.slice(0, breedSlice.indexOf('/'));
}

function reverseBreedString(string) {
    string = string.split('-');
    return `${string[1] + ' ' + string[0]}`;
}

function setUpImageElement(url, breedSlice) {
    const imgElement = document.createElement('img');

    imgElement.setAttribute('src', url);

    imageFrame.appendChild(imgElement);

    imgElement.setAttribute('alt', breedSlice);

}

image
    .then(response => response.json())
    .then(responseObj => {
        const url = responseObj.message;

        let breedSlice = getBreedFromURL(url);

        if (breedSlice.includes('-')) {
            breedSlice = reverseBreedString(breedSlice);
        }

        setUpImageElement(url, breedSlice);
        
        console.log(breedSlice);

        console.log(BREEDS.filter(breed => breed.includes(breedSlice)));

    })

const BREEDS = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "shepherd australian", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "norwegian buhund", "boston bulldog", "english bulldog", "french bulldog", "staffordshire bullterrier", "australian cattledog", "chihuahua", "chow", "clumber", "cockapoo", "border collie", "coonhound", "cardigan corgi", "cotondetulear", "dachshund", "dalmatian", "great dane", "scottish deerhound", "dhole", "dingo", "doberman", "norwegian elkhound", "entlebucher", "eskimo", "lapphund finnish", "bichon frise", "germanshepherd", "italian greyhound", "groenendael", "havanese", "afghan hound", "basset hound", "blood hound", "english hound", "ibizan hound", "plott hound", "walker hound", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "bull mastiff", "english mastiff", "tibetan mastiff", "mexicanhairless", "mix", "bernese mountain", "swiss mountain", "newfoundland", "otterhound", "caucasian ovcharka", "papillon", "pekinese", "pembroke", "miniature pinscher", "pitbull", "german pointer", "germanlonghair pointer", "pomeranian", "medium poodle", "miniature poodle", "standard poodle", "toy poodle", "pug", "puggle", "pyrenees", "redbone", "chesapeake retriever", "curly retriever", "flatcoated retriever", "golden retriever", "rhodesian ridgeback", "rottweiler", "saluki", "samoyed", "schipperke", "giant schnauzer", "miniature schnauzer", "english setter", "gordon setter", "irish setter", "sharpei", "english sheepdog", "shetland sheepdog", "shiba", "shihtzu", "blenheim spaniel", "brittany spaniel", "cocker spaniel", "irish spaniel", "japanese spaniel", "sussex spaniel", "welsh spaniel", "english springer", "stbernard", "american terrier", "australian terrier", "bedlington terrier", "border terrier", "cairn terrier", "dandie terrier", "fox terrier", "irish terrier", "kerryblue terrier", "lakeland terrier", "norfolk terrier", "norwich terrier", "patterdale terrier", "russell terrier", "scottish terrier", "sealyham terrier", "silky terrier", "tibetan terrier", "toy terrier", "welsh terrier", "westhighland terrier", "wheaten terrier", "yorkshire terrier", "tervuren", "vizsla", "spanish waterdog", "weimaraner", "whippet", "irish wolfhound"];
