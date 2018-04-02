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
      cacheable.loaded = true

      const data = await fx()

      cacheable.data = data

      return data
    }

    return returnfx
  }

  return cacheable(fx)
}
