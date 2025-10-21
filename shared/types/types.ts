export interface Owners {
  id?: number;
  identification_type: IdentificationTypes;
  identification_number: string;
  name: string;
  last_name: string;
  second_last_name: string;
}

export enum IdentificationTypes {
  cedula = "CEDULA",
  pasaporte = "PASAPORTE",
  cedula_extranjeria = "CEDULA EXTRANJERIA",
}

export interface ApiResponse {
  status: number;
  message: any;
}
