const cacheable = require('./')

const cacheWrapper = cacheable(async () => Date.now())

;(async () => {
  console.log(await cacheWrapper()) // 1522628353835

  console.log(await cacheWrapper()) // 1522628353835

  console.log(await cacheWrapper.refresh()) // 1522628353837

  console.log(await cacheWrapper()) // 1522628353837
})()
