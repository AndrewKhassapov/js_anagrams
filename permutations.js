// Permutations and anagram generator:

// String to generate anagram from.
const str = "W O R D";

// Creates all alphabetic anagrams.
// Repeat characters are treated individually.
function anagrams(string) {
    const regex = /[a-zA-Z]/g; // Regex filter for only alphabetic characters.
    let array = string.match(regex);

    let out = permutations(array);

    for (let i = 0; i < out.length; i++) {
        out[i] = out[i].join("");
    }

    return out;
}

// Creates an array of all permutations.
function permutations(array) {
    let out = [];

    if (typeof (array) !== "string") {
        array = array.toString();
    }

    for (let i = 0; i < array.length; i++) {
        let rest = permutations(array.slice(0, i).concat(array.slice(i + 1)));
        if (!rest.length) {
            out.push([array[i]]);
        } else {
            for (let j = 0; j < rest.length; j++) {
                out.push([array[i]].concat(rest[j]));
            }
        }
    }
    return out;
}

// Print result.
console.log(anagrams(str));