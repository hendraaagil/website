export const getAge = () => {
  const diff = Date.now() - new Date('2003, 09, 26').getTime()
  const age = new Date(diff)
  return Math.abs(age.getUTCFullYear() - 1970)
}

export const getCurrentYear = () => new Date().getFullYear()

export const getReadingTime = (text: string) => {
  const wps = 275 / 60
  const regex = /\w/
  let images = 0
  let words = text.split(' ').filter((word) => {
    if (word.includes('<img')) {
      images += 1
    }
    return regex.test(word)
  }).length

  const imageAdjust = images * 4
  let imageSecs = 0
  let imageFactor = 12
  while (images) {
    imageSecs += imageFactor
    if (imageFactor > 3) {
      imageFactor -= 1
    }
    images -= 1
  }

  return Math.ceil(((words - imageAdjust) / wps + imageSecs) / 60)
}
