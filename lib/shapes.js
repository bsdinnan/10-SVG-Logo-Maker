class Shape {
    constructor() {
        this.color = 'black';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
    }
}

class Triangle extends Shape {
    constructor() {
        super();
        this.type = 'triangle';
    }

    render() {
        return `<polygon points="100,0 0,200 200,200" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    constructor() {
        super();
        this.type = 'circle';
    }

    render() {
        return `<circle cx="100" cy="100" r="100" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor() {
        super();
        this.type = 'square';
    }

    render() {
        return `<rect x="0" y="0" width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };