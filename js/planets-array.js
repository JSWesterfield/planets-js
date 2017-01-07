(function(){
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system in order, starting closest to the sun.
    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Finding and logging the index of "Venus" in the planets array.');
    var indexOfVenus = planets.indexOf("Venus");
    console.log(indexOfVenus);
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.

    console.log('Using splice to remove the planet after "Venus".');
    var indexAfterVenus = planets.splice(indexOfVenus + 1, 1);
    console.log(planets);
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log('Using splice to add back the planet after "Venus".');
    planets.splice(planets.indexOfVenus + 1, 0, indexAfterVenus[0]);
    console.log(planets);
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();

    console.log("Sorting the planets array.");
    planets.sort();
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    logPlanets();
})();
