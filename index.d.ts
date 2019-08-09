declare type CachedData<T> = T
declare type CachedProcess<T> = null | Pick<ReturnFx<T>, 'refresh'>
declare type UserFunction<T> = () => Promise<T>

declare interface ReturnFx<T> {
  (): Promise<CachedData<T>>
  refresh: () => Promise<UserFunction<T> | CachedProcess<T>>
}

declare interface Cacheable<T> extends ReturnFx<T> {
  data: CachedData<T>
  loaded: boolean
  process: CachedProcess<T>
  (fx?: UserFunction<T>): Promise<CachedData<T>>
}

/**
 * Caches any data that is supplied by the user
 * @param fx Defines a user given function
 * @returns Returns a promise of the user given function
 */
declare function Cacheable<T>(fx: UserFunction<T>): Cacheable<T>

export = Cacheable
