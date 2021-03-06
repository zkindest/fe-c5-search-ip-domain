export interface IpGeoInfo {
  hostname?: string
  continent_name: string
  country_name: string
  country_capital: string
  state_prov: string
  city: string
  district: string
  zipcode: string
  latitude: string
  longitude: string
  organization: string
  isp: string
  ip: string
  time_zone: {
    name: string
    offset: number
  }
}

export type Action<T, P = undefined> = P extends undefined
  ? { type: T }
  : { type: T; payload: P }
