export function getFormattedCentimeter(height: number) {
  const heightToFeet = height / 3.048

  return heightToFeet.toFixed(1) + 'ft'
} 

export function getFormattedWeight(wight: number) {
  const wightToLbs = wight / 4.536

  return wightToLbs.toFixed(1) + 'lbs'
}

export function getFormattedCentimeterBR(value: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'unit', unit: 'centimeter'}).format(value / 10);
}

export function getFormattedKilogramBR(value: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'unit', unit: 'kilogram'}).format(value / 10);
}