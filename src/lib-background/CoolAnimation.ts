import P5 from "p5";

export type SketchCleanup = { cleanup: () => void };

export const visualisation = ({ width, height }: { width: number, height: number }): SketchCleanup => {
    let x = Math.floor(width / 2);
    let y = Math.floor(height / 2);
    let xSpeed = width / (width * 0.6 ) ;
    let ySpeed = height / (height * 0.55  ) ;
    const r = 169;

    const sketch = (p5: P5) => {
        p5.setup = () => {
            let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
            canvas.position(0, 0);
            canvas.style('z-index', '-1');
        };
        p5.draw = () => {
            p5.background(0);
            let ballOne = p5.ellipse(x, y, r, r);
            let ballTwo = p5.ellipse(x + 1, y, r, r);
            p5.strokeWeight(0);
            hexagon(x, y, 1);
            hexagon(x + 5, y + 3, 1.05);
            ballOne.fill('rgba(85,24,140,0.6)');
            x += xSpeed;
            y += ySpeed;
            if (x > width - r || x < r) {
                xSpeed = -xSpeed;
            }
            if (y > height - r || y < r) {
                ySpeed = -ySpeed;
            }
        };
        const hexagon = (transX: number, transY: number, s: number) => {
            p5.stroke(255);
            p5.strokeWeight(0);
            p5.fill('rgba(152,100,255, 0.3)');
            p5.push();
            p5.translate(transX, transY);
            p5.scale(s);
            p5.beginShape();
            p5.vertex(-75, -130);
            p5.vertex(75, -130);
            p5.vertex(150, 0);
            p5.vertex(75, 130);
            p5.vertex(-75, 130);
            p5.vertex(-150, 0);
            p5.endShape(p5.CLOSE);
            p5.pop();
        };
    };

    const p5 = new P5(sketch);

    return {
        cleanup: p5.remove,
    };
};