export const normalizeText = (text = '') =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

export const detectBrand = (name = '') => {
  const text = normalizeText(name)

  if (text.includes('isdin')) return 'ISDIN'
  if (text.includes('eucerin')) return 'Eucerin'
  if (text.includes('avon')) return 'Avon'
  if (text.includes('la roche')) return 'La Roche-Posay'
  if (text.includes('bioderma')) return 'Bioderma'

  return 'SolarCheck'
}

export const detectFps = (name = '') => {
  const text = name.toUpperCase()

  if (text.includes('SPF 50+') || text.includes('FPS 50+')) return '50+'
  if (text.includes('SPF 50') || text.includes('FPS 50')) return '50'
  if (text.includes('SPF 30') || text.includes('FPS 30')) return '30'
  if (text.includes('SPF 100') || text.includes('FPS 100')) return '100'

  return 'No informado'
}

export const detectUse = (name = '') => {
  const text = normalizeText(name)

  if (text.includes('kids') || text.includes('nino') || text.includes('infantil')) {
    return 'Infantil'
  }

  if (text.includes('face') || text.includes('facial')) return 'Facial'
  if (text.includes('body') || text.includes('corporal')) return 'Corporal'

  return 'General'
}

export const detectFormat = (name = '') => {
  const text = normalizeText(name)

  if (text.includes('stick')) return 'Stick'
  if (text.includes('spray')) return 'Spray'
  if (text.includes('gel')) return 'Gel'
  if (text.includes('cream') || text.includes('crema')) return 'Crema'
  if (text.includes('fluid') || text.includes('fluido')) return 'Fluido'

  return 'No informado'
}