export function random(end: number): number {
  return Math.random() * end;
}

export function randomInt(end: number): number {
  return Math.floor(random(end));
}

export function randomRange(start: number, end: number): number {
  return Math.random() * (end - start) + start;
}

export function randomChoice<T>(array: T[]): T {
  return array[randomInt(array.length)];
}

export function scrambleArray<T>(array: T[]): T[] {
  const scrambleArray: T[] = array;

  for (let i = array.length - 1; i > 0; i--) {
    const j = randomInt(i);

    [array[j], array[i]] = [array[i], array[j]];
  }

  return scrambleArray;
}
