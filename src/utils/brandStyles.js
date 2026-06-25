export const getBrandStyle = (brand) => {
  const styles = {
    ISDIN: {
      gradient: 'linear-gradient(135deg, #4FC3F7, #0F4C81)',
      icon: '💧',
    },
    Eucerin: {
      gradient: 'linear-gradient(135deg, #ffffff, #ffccd5)',
      icon: '🧴',
    },
    Avon: {
      gradient: 'linear-gradient(135deg, #ffafcc, #b5179e)',
      icon: '🌸',
    },
    'La Roche-Posay': {
      gradient: 'linear-gradient(135deg, #caf0f8, #48cae4)',
      icon: '💦',
    },
    Bioderma: {
      gradient: 'linear-gradient(135deg, #ffd6e0, #ff8fab)',
      icon: '🌷',
    },
    SolarCheck: {
      gradient: 'linear-gradient(135deg, #FFD54F, #FFB300)',
      icon: '☀️',
    },
  }

  return styles[brand] || styles.SolarCheck
}