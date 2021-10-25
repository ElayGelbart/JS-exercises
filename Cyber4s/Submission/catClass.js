let cat = {
  tiredness: 50,
  hunger: 100,
  lonliness: 70,
  happiness: 50,
  feed: () => {
    cat.hunger = cat.hunger + 5;
    cat.happiness = cat.happiness + 3;
  },
  play: () => {
    cat.happiness = cat.happiness + 10;
    cat.tiredness = cat.tiredness + 30;
    cat.lonliness = cat.lonliness - 1;
  },
  sleep: () => {
    cat.tiredness = cat.tiredness - 10;
    cat.lonliness = cat.lonliness + 3;
  },
  isHappy: () => {
    if (cat.happiness > 50) {
      console.log('Cat is Happy!');
    }
    else {
      console.log("Cat is not Happy");
    }
  },
  isLonley: () => {
    if (cat.lonliness > 50) {
      console.log('Cat is Alone!');
    }
    else {
      console.log("Cat is not Alone");
    }
  },
  isHungry: () => {
    if (cat.hunger > 50) {
      console.log('Cat is Hungry!');
    }
    else {
      console.log("Cat is Full");
    }
  },
  isTired: () => {
    if (cat.tiredness > 50) {
      console.log('Cat is Tired!');
    }
    else {
      console.log("Cat is Fresh");
    }
  },
}
