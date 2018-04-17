module.exports = fx => {
  const cacheable = fx => {
    cacheable.data = null
    cacheable.loaded = false
    cacheable.process = null

    const returnfx = async () => {
      if (cacheable.process) {
        return cacheable.process
      }

      if (!cacheable.loaded) {
        cacheable.process = returnfx.refresh()
        await cacheable.process
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
