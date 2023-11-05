const { Circle } = require('../lib/shapes');

test('Circle renders SVG', () => {
    const circle = new Circle();
    circle.setColor('blue');
    const svg = circle.render();
    expect(svg).toEqual('<circle cx="100" cy="100" r="50" fill="blue" />');
});

const { Triangle } = require('../lib/shapes');

test('Triangle renders SVG', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

const { Square } = require('../lib/shapes');

test('Square renders SVG', () => {
    const square = new Square();
    square.setColor('blue');
    const svg = square.render();
    expect(svg).toEqual('<rect x="50" y="50" width="100" height="100" fill="blue" />');
});