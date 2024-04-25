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
  portfolio: string | null;
}

export interface forms {
  form_content: string | null;
}

// for graphs

export interface GraficoModel {
  Value: number | null;
  Color: string | null;
  Size: string | null;
  Legend: string | null;
}
