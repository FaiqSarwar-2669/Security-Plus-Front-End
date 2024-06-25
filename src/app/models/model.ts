export interface registration {
  bussiness_owner: string | null;
  bussiness_type: string | null;
  password: string | null;
  conform_password: string | null;
  email: string | null;
}

export interface login {
  email: string | null;
  password: string | null;
}
export interface forgetPassword {
  email: string | null;
}
export interface changePassword {
  password: string | null;
  confirm_password: string | null;
}

//models for service provider conpanies

export interface portfolio {
  logo: File | null;
  Banner_image: File | null;
  // logo: string | null;
  // Banner_image: string | null;
  portfolio: string | null;
}

export interface forms {
  form_content: string | null;
}

export interface FormContent {
  type?: string;
  Type?: string;
  id?: string;
  label?: string;
  placeholder?: string;
  data?: string;
  required?: string;
  text?: string;
  title?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  options?: string[];
}

// for graphs

export interface GraficoModel {
  Value: number | null;
  Color: string | null;
  Size: string | null;
  Legend: string | null;
}
