import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const yearDiscovery = data.asteroids.map(
    (asteroid) => asteroid.discoveryYear
  );
  return mostAmountOfDiscovery(yearDiscovery);
}

function mostAmountOfDiscovery(arr) {
  let hash = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (hash.has(arr[i])) {
      hash.set(arr[i], hash.get(arr[i]) + 1);
    } else {
      hash.set(arr[i], 1);
    }

    var count = 0,
      result = -1;

    hash.forEach((value, key) => {
      if (count < value) {
        result = key;
        count = value;
      }
    });
  }

  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
