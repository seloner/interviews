/**
|--------------------------------------------------
| There are N guests who are invited to a party. The K-th guest will attend the party at time Sk, and leave the party at time Ek.
  that, given an integer array S and an integer array E, both of length N, returns an integer denoting the minimum number of chairs you need such that everyone attending the party can sit down.
|--------------------------------------------------
*/

const s = [1, 2, 6, 5, 3];
const e = [5, 5, 7, 6, 8];

const currentChairs = (currentTime, array) => {
  let chairs = 0;
  array.forEach(element => {
    if (element.s <= currentTime) {
      if (element.e > currentTime) chairs++;
    }
  });
  return chairs;
};
const solution = (S, E) => {
  let array = [];
  S.forEach((item, index) => array.push({ s: item, e: E[index] }));
  let maxChairs = 0;
  array.forEach(element => {
    const chairs = currentChairs(element.s, array);
    if (chairs > maxChairs) maxChairs = chairs;
  });
  return maxChairs;
};

console.log("Max chairs: " + solution(s, e));
