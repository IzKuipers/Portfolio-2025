<script lang="ts">
  import ProgressiveWriter from "$lib/ProgressiveWriter.svelte";
  import type p5 from "p5";
  import type { Color } from "p5";
  import P5 from "p5-svelte";

  const sketch = (p5: p5) => {
    let bgMountains: any;
    let midMountains: any;
    let fgMountains: any;
    let offsetX = 0;
    let offsetY = 0;

    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.P2D);
      regenerateMountains();
    };

    p5.draw = () => {
      p5.background(5, 20, 31);

      drawMountainLayer(bgMountains, offsetX * 0.3, offsetY * 0.1);
      drawMountainLayer(midMountains, offsetX * 0.6, offsetY * 0.2);
      drawMountainLayer(fgMountains, offsetX * 1.2, offsetY * 0.3);
    };

    p5.mouseMoved = () => {
      offsetX = p5.map(p5.mouseX, 0, p5.width, -50, 50);
      offsetY = p5.map(p5.mouseY, 0, p5.height, -100, 100);
    };

    p5.windowResized = () => {
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
      regenerateMountains();
    };

    function regenerateMountains() {
      bgMountains = createMountainLayer(p5.color(32, 87, 132), 0.3);
      midMountains = createMountainLayer(p5.color(20, 59, 90), 0.6);
      fgMountains = createMountainLayer(p5.color(9, 28, 44), 1.2);
    }

    function createMountainLayer(col: Color, heightFactor: number) {
      let mountains = [];
      let peakCount = p5.windowWidth / 100;
      let spacing = p5.width / (peakCount - 1);

      for (let i = 0; i < peakCount; i++) {
        let x = i * spacing;
        let y = p5.height * (0.5 + p5.random(-0.12, 0.12)) * heightFactor;

        mountains.push({ x, y });
      }

      return { peaks: mountains, col: col };
    }

    function drawMountainLayer(layer: any, offsetX: number, offsetY: number) {
      p5.fill(layer.col);
      p5.noStroke();
      p5.beginShape();
      p5.vertex(-p5.width, p5.height);
      for (let peak of layer.peaks) {
        p5.vertex(peak.x + offsetX, peak.y + offsetY);
      }
      p5.vertex(p5.width * 2, p5.height);
      p5.endShape(p5.CLOSE);
    }
  };
</script>

<div class="page workshop">
  <P5 {sketch} />
  <div class="page error">
    <h1>
      <ProgressiveWriter
        text={["The Workshop"]}
        blinker
        delay={500}
        speed={100}
      />
    </h1>
    <p class="subtitle">
      <ProgressiveWriter
        text={[`This page is under construction`]}
        speed={40}
        delay={1000}
      />
    </p>
  </div>
</div>
