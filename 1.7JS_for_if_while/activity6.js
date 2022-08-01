let bobsFollower = [`Sarah`, `Sue`, `Christine`, `Charlotte`];
let hanahsFollower = [`Mike`, `Christine`, `Garry`, `Sue`];

let contains = bobsFollower.some(element => {
  return hanahsFollower.includes(element);
});

console.log(contains);