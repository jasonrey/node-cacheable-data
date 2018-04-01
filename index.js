const Cacheable = function Cacheable (fx) {
  this.data = null

  this.loaded = false

  const returnfx = async () => {
    if (!this.loaded) {
      await returnfx.refresh()
    }

    return this.data
  }

  returnfx.refresh = async () => {
    this.loaded = true

    const data = await fx()

    this.data = data

    return data
  }

  return returnfx
}

module.exports = Cacheable
