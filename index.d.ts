interface Cacheable {
  data: any
  loaded: boolean
  process: ReturnFx
}

interface ReturnFx {
  (): Promise<Pick<Cacheable, 'data'>>
  refresh: () => Promise<UserFunction>
}

interface UserFunction {
  (): Promise<any>
}

declare function Cacheable (fx: UserFunction): Promise<ReturnFx>

export = Cacheable
