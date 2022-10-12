export interface CityResponse {
  rajaongkir: Rajaongkir;
}

export interface Rajaongkir {
  query: Query;
  status: Status;
  results: Result[];
}

export interface Query {
  province: string;
}

export interface Result {
  city_id: string;
  province_id: string;
  province: string;
  type: string;
  city_name: string;
  postal_code: string;
}

export interface Status {
  code: number;
  description: string;
}
