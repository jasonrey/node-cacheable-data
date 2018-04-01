# Cachable

## Methods

```
cacheable(function => Promise) => (function CacheWrapper => Promise)
```

The `cacheable` library receives a function, lazily executes it, and caches the data resolved from the function. It returns a function that returns a Promise that resolves to the cached data.

```
CacheWrapper.refresh = () => Promise
```

CacheWrapper returned by `cacheable` method, contains the `refresh` method, which allows manual trigger to re-run user function and refresh cached data.

## Usage

```
const cacheable = require('cacheable')

const cacheWrapper = cacheable(() => {
  // Your custom function to load the data
  // Should return a Promise that resolves to the data to cache
})

const cachedData = await cacheWrapper()
```
