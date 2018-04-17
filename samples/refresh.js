const cacheable = require('../')

const delay = (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms))

const cacheWrapper = cacheable(async () => {
  await delay()
  return Date.now()
})

;(async () => {
  console.log(await cacheWrapper()) // 1522628353835

  console.log(await cacheWrapper()) // 1522628353835

  console.log(await cacheWrapper.refresh()) // 1522628353837

  console.log(await cacheWrapper()) // 1522628353837
})()
