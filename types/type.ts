export interface ProjectData {
  id: string;
  name: string;
  documentType: string;
  documentNumber: string;
  phone: string;
  description: string;
}

export interface TableColumn {
  id: string;
  label: string;
  width: string;
  hasInfo?: boolean;
}

export interface UserProfile {
  name: string;
}

export interface User {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  mensaje: string;
  type_document: string;
  numero_documento: string;
}
