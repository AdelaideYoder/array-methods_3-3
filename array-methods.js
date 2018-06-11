// const animals = ["cow", "chicken", "pig", "fish"]

// /*
//     A function whose purpose is to cook an animal and
//     return the processed result
// */
// const cookIt = function (animal) {
//     switch (animal) {
//         case "cow":
//             console.log("steak");
//             break;
//         case "chicken":
//             console.log("drumstick");
//             break;
//         case "pig":
//             console.log("bacon");
//             break;
//         case "fish":
//             console.log("sushi");
//             break;
//     }
// }

// // Execute the cookIt function for each item in the array
// animals.forEach(cookIt)

//---------------------------------ARRAY METHODS--------------------------------------------------
//--------------------------------FIRST EXERCISE--------------------------------------------------
// /*
//     Use the forEach method to add the name of each planet
//     to a section element in your HTML with an id of "planets".
//     Use string templates to construct the DOM elements.
// */

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.getElementById("planets")

const planetsList = function (planet) {
    const planetsListName = document.createElement("section")
    planetsListName.innerHTML = planet
    planetEl.appendChild(planetsListName)
    console.log(planetsListName)
}

// planets.forEach(planetsList)

//--------------------------------SECOND EXERCISE--------------------------------------------------
// /*
//     Use the map method to create a new array where the
//     first letter of each planet is capitalized. Use the
//     `toUpperCase()` method on strings.

//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
// */

const capPlanets = planets.map(function (planet) {
    // return planet.toUpperCase(1)+ planet.slice(1);
    return planet.charAt(0).toUpperCase() + planet.slice(1);
})

console.log(planets)
console.log(capPlanets)

capPlanets.forEach(planetsList)





// /*
//     Use the filter method to create a new array that
//     contains planets with the letter 'e'. Use the `includes()`
//     method on strings.

//     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// */


// // Use the reduce method to create a sentence from the words in the following array
// const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]