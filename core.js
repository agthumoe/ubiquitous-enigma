function lcm(...numbers) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  return numbers.reduce((a, b) => Math.abs(a * b) / gcd(a, b));
}

class Doctor {
  constructor(name, consultationTime) {
    this.name = name;
    this.consultationTime = consultationTime;
  }

  setNumberOfPatientsPerLcm(numberOfPatientsPerLcm) {
    this.numberOfPatientsPerLcm = numberOfPatientsPerLcm;
  }
}

module.exports = {
  lcm,
  Doctor,
};
