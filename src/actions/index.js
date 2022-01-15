export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num // the param I want to pass
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}