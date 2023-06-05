const { lcm } = require("./core");

class System {
  constructor(doctors) {
    this.doctors = doctors;
    this.updateLcmAndConsultationTime();
  }

  updateLcmAndConsultationTime() {
    this.lcm = lcm(...this.doctors.map((doctor) => doctor.consultationTime));
    this.doctors.forEach((doctor) => {
      doctor.setNumberOfPatientsPerLcm(this.lcm / doctor.consultationTime);
    });
  }

  calculateConsultationTime(queuePosition) {
    // queue position should be (queuePosition - 1) * LCM / sum(consultationTimes of all doctors)
    const queuePositionInLcm = (queuePosition - 1) * this.lcm;
    const totalPatientsPerLcm = this.doctors.reduce((acc, doctor) => {
      return acc + doctor.numberOfPatientsPerLcm;
    }, 0);
    return queuePositionInLcm / totalPatientsPerLcm;
  }
}

module.exports = System;
