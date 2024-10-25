import { getPlaiceholder } from 'plaiceholder';

import path from 'node:path';
import fs from 'node:fs/promises';

import sharp from 'sharp';

export const getImageRemote = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
  };
};

export const getImage = async (src: string) => {
  const buffer = await fs.readFile(path.join('./public', src));

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
  };
};
