const swappedKeyVal = (object) => {
  let swappedObj = {};
  for (const prop in object) {
    if (prop !== 'hobbies') {
        swappedObj = {
          ...swappedObj,
          [object[prop]]: prop,
        };
    } else {
        swappedObj = {
            ...swappedObj,
        [JSON.stringify(object[prop])] : prop
          };
    }
  }
  return swappedObj;
};

const unicorn = {
    corns: 1,
    wings: 2,
    tails: 1,
    poop: "rainbow",
    food: "vanilla clouds ice cream",
    mentalStates: "unstable happiness",
    hobbies: ["Flying", "Pooping", "Laughing Out Load", "Mud Wallowing"],
  };    
  
  console.log(swappedKeyVal(unicorn));
  