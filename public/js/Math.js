export default function Math() {
  random = (min, max) => {
    if (!max) {
      max = min;
      min = 0;
    }
    return this.floor(Math.random() * (max - min + 1)) + min;
  };

  floor = (num) => {
    return Math.floor(num); // kinda useless lol but oh well 🤷‍♂️
  };

  clamp = (num, min, max) => {
    return Math.max(min, Math.min(max, num));
  };

  map = (v, vMin, vMax, nMin, nMax) => {
    return ((v - vMin) / (vMax - vMin)) * (nMax - nMin) + nMin;
  };
}
