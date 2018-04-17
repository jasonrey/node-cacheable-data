module.exports = fx => {
  const cacheable = fx => {
    cacheable.data = null
    cacheable.loaded = false

    const returnfx = async () => {
      if (!cacheable.loaded) {
        await returnfx.refresh()
      }

      return cacheable.data
    }

    returnfx.refresh = async () => {
      const data = await fx()

      cacheable.data = data
      cacheable.loaded = true

      return data
    }

    return returnfx
  }

  return cacheable(fx)
}
