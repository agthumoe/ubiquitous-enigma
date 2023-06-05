const { Doctor } = require("./core");
const System = require("./system1");

describe("testing system1", () => {
  beforeEach(() => {
    this.doctorA = new Doctor("Dr. A", 3);
    this.doctorB = new Doctor("Dr. B", 4);
    this.system = new System([this.doctorA, this.doctorB]);
  });

  afterEach(() => {
    this.doctorA = null;
    this.doctorB = null;
  });

  test("testing system1 initialization", () => {
    expect(this.system.doctors.length).toBe(2);
    expect(this.system.lcm).toBe(12);
    expect(this.doctorA.numberOfPatientsPerLcm).toBe(4);
    expect(this.doctorB.numberOfPatientsPerLcm).toBe(3);
  });

  test("testing system1 calculateConsultationTime", () => {
    // queue position is 8, so there are 7 patients in the queue.
    // Doctor A can see 4 patients in 12 minutes, and
    // Doctor B can see 3 patients in 12 minutes. So, the answer is 12 minutes
    expect(this.system.calculateConsultationTime(8)).toBe(12);
    // queue position is 15, so there are 14 patients in the queue.
    // Doctor A can see 8 patients in 24 minutes, and
    // Doctor B can see 6 patients in 24 minutes. So, the answer is 24 minutes
    expect(this.system.calculateConsultationTime(15)).toBe(24);
  });

  test("testing system1 calculateConsultationTime with 3 doctors", () => {
    const doctorC = new Doctor("Dr. C", 2);
    this.system.doctors.push(doctorC);
    this.system.updateLcmAndConsultationTime();

    // queue position is 14, so there are 13 patients in the queue.
    // Doctor A can see 4 patients in 12 minutes, and
    // Doctor B can see 3 patients in 12 minutes, and
    // Doctor C can see 6 patients in 12 minutes. So, the answer is 12 minutes
    expect(this.system.calculateConsultationTime(14)).toBe(12);

    // queue position is 27, so there are 26 patients in the queue.
    // Doctor A can see 8 patients in 24 minutes, and
    // Doctor B can see 6 patients in 24 minutes, and
    // Doctor C can see 12 patients in 24 minutes. So, the answer is 24 minutes
    expect(this.system.calculateConsultationTime(27)).toBe(24);
  });
});
