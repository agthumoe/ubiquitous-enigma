const { lcm, Doctor } = require("./core");

test("calculating lcm", () => {
  expect(lcm(3, 4)).toBe(12);
  expect(lcm(1, 3)).toBe(3);
  expect(lcm(2, 3)).toBe(6);
  expect(lcm(3, 5)).toBe(15);
  expect(lcm(3, 4, 5)).toBe(60);
  expect(lcm(3, 2, 6)).toBe(6);
});

describe("testing doctor", () => {
  beforeEach(() => {
    this.doctorA = new Doctor("Dr. A", 3);
    this.doctorB = new Doctor("Dr. B", 4);
  });

  afterEach(() => {
    this.doctorA = null;
    this.doctorB = null;
  });

  test("testing doctor initialization", () => {
    expect(this.doctorA.name).toBe("Dr. A");
    expect(this.doctorA.consultationTime).toBe(3);
    expect(this.doctorB.name).toBe("Dr. B");
    expect(this.doctorB.consultationTime).toBe(4);
  });

  test("testing doctor setNumberOfPatientsPerLcm", () => {
    this.doctorA.setNumberOfPatientsPerLcm(4);
    expect(this.doctorA.numberOfPatientsPerLcm).toBe(4);
    this.doctorB.setNumberOfPatientsPerLcm(5);
    expect(this.doctorB.numberOfPatientsPerLcm).toBe(5);
  });
});
