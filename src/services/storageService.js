const get = (key, fallback = null) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : fallback
}

const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const remove = (key) => {
  localStorage.removeItem(key)
}

export const storageService = {
  get,
  set,
  remove,
}