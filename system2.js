class System {
  constructor(doctors) {
    this.doctors = doctors;
    this.updateCurrentWaitingTimes();
  }

  updateCurrentWaitingTimes() {
    this.currentWaitingTimes = this.doctors.map(() => 0);
  }

  calculateConsultationTime(queuePosition) {
    let index = 0;
    for (let i = 1; i < this.doctors.length; i++) {
      if (this.currentWaitingTimes[i] < this.currentWaitingTimes[index]) {
        index = i;
      }
    }
    this.currentWaitingTimes[index] += this.doctors[index].consultationTime;
    queuePosition--;
    if (queuePosition === 0) {
      const result =
        this.currentWaitingTimes[index] - this.doctors[index].consultationTime;
      // reset currentWaitingTimes
      this.updateCurrentWaitingTimes();
      return result;
    }
    return this.calculateConsultationTime(queuePosition);
  }
}

module.exports = System;
