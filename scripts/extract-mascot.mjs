import sharp from 'file:///C:/Users/gor/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.mjs';

const input = new URL('../assets/green-lev-mascot.png', import.meta.url);
const output = new URL('../assets/green-lev-mascot-cutout.png', import.meta.url);
const source = sharp(input.pathname.replace(/^\/(.:)/, '$1'));
const { data, info } = await source.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const count = width * height;
const background = new Uint8Array(count);
const queue = new Int32Array(count);
let head = 0;
let tail = 0;

const canRemove = (index) => {
  const offset = index * channels;
  const r = data[offset];
  const g = data[offset + 1];
  const b = data[offset + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  return min > 222 && max - min < 13;
};

const enqueue = (index) => {
  if (!background[index] && canRemove(index)) {
    background[index] = 1;
    queue[tail++] = index;
  }
};

for (let x = 0; x < width; x += 1) {
  enqueue(x);
  enqueue((height - 1) * width + x);
}
for (let y = 0; y < height; y += 1) {
  enqueue(y * width);
  enqueue(y * width + width - 1);
}

while (head < tail) {
  const index = queue[head++];
  const x = index % width;
  const y = Math.floor(index / width);
  if (x > 0) enqueue(index - 1);
  if (x + 1 < width) enqueue(index + 1);
  if (y > 0) enqueue(index - width);
  if (y + 1 < height) enqueue(index + width);
}

for (let index = 0; index < count; index += 1) {
  if (background[index]) data[index * channels + 3] = 0;
}

await sharp(data, { raw: info }).png().toFile(output.pathname.replace(/^\/(.:)/, '$1'));
