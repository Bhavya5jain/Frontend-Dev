class User {
  constructor(name, rating = 5.0) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(from, to, distance) {
    this.from = from;
    this.to = to;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance == null || this.distance === '') {
      throw new Error('Distance must be provided');
    }
    const d = Number(this.distance);
    if (isNaN(d)) {
      throw new Error('Distance must be a numeric value');
    }
    if (d < 0) {
      throw new Error('Distance cannot be negative');
    }
    const ratePerKm = 12; 
    return +(d * ratePerKm).toFixed(2);
  }
}

document.getElementById('runQ5').addEventListener('click', () => {
  const out = document.getElementById('q5out');
  const from = document.getElementById('fromInput').value.trim() || 'Unknown';
  const to = document.getElementById('toInput').value.trim() || 'Unknown';
  const distance = document.getElementById('distanceInput').value.trim();

  try {
    const rider = new User('Aman', 4.7);
    const driver = new Driver('Rohit', 4.9, 'Maruti Dzire');
    const trip = new Trip(from, to, distance);
    const fare = trip.calculateFare();
    out.textContent = [
      `Rider: ${rider.name} (rating: ${rider.rating})`,
      `Driver: ${driver.name} • ${driver.vehicle}`,
      `From: ${from} → To: ${to}`,
      `Distance: ${distance} km`,
      `Fare: ₹${fare}`
    ].join('\n');
  } catch (err) {
    out.textContent = 'Trip Error: ' + err.message;
  }
});
