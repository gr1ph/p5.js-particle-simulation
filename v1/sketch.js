// Particle class
class Particle {
  constructor(x, y, mass) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.mass = mass;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.position.x, this.position.y, this.mass * 10, this.mass * 10);
  }
}

// Global variables
let particles = [];
let G = 1; // Gravitational constant

function setup() {
  createCanvas(800, 600);
  // Create particles
  for (let i = 0; i < 100; i++) {
    let mass = random(1, 5);
    let x = random(width);
    let y = random(height);
    particles.push(new Particle(x, y, mass));
  }
}

function draw() {
  background(255);

  // Calculate forces between particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let p1 = particles[i];
      let p2 = particles[j];
      let force = calculateGravitationalForce(p1, p2);
      p1.applyForce(force);
      p2.applyForce(force.mult(-1));
    }
  }

  // Update and display particles
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

function calculateGravitationalForce(p1, p2) {
  let direction = p5.Vector.sub(p2.position, p1.position);
  let distance = direction.mag();
  distance = constrain(distance, 5, 25); // Avoid extreme forces at very close distances
  direction.normalize();
  let strength = (G * p1.mass * p2.mass) / (distance * distance);
  direction.mult(strength);
  return direction;
}
