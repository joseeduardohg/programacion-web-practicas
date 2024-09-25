export function fromDegToRad(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

export function fromRadToDeg(radians: number): number {
  return (radians * 180) / Math.PI;
}
