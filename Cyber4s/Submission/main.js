class ClassicGuitar {
  constructor(manufactureYear, brand, price, numberOfString = 6, used = false, id) {
    this.manufactureYear = manufactureYear;
    this.brand = brand;
    this.price = price;
    this.numberOfString = numberOfString;
    this.used = used;
    this.id = id;
  }
  play() {
    console.log("🎶🎶🎶");
    this.price = this.price / 100 * 90;
  }
  static detectSound(sound = '') {

  }
}
class ElectricGuitar extends ClassicGuitar {
  constructor(manufactureYear, brand, price, numberOfString = 6, used = false, id, longback = true) {
    super(manufactureYear, brand, price, numberOfString = 6, used = false, id);
    this.longback = longback;
  }
  play() {
    console.log("🎸🎸🎸");
    this.price = this.price / 100 * 90;
  }
}

class BassGuitar extends ClassicGuitar {
  constructor(manufactureYear, brand, price, numberOfString = 4, used = false, id) {
    super(manufactureYear, brand, price, numberOfString, used = false, id);
  }
  play() {
    console.log("🔊🔊🔊");
    this.price = this.price / 100 * 90;
  }
  playSolo() {
    console.log("💥", "🤘", "🎵", "📢", "💢", "🕺");
    this.price = this.price / 100 * 80;
  }
}
const elayGuitar = new BassGuitar(1978, 'Fender', 345, 6, false, 35);
elayGuitar.playSolo();
console.log(elayGuitar);