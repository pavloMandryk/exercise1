export const colorGenerator = (key) => {
    let letters = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[key.length + i]
    }
    return color
  }
  