export interface registration {
    bussiness_fname: string | null,
    bussiness_lname: string | null,
    bussiness_owner: string | null,
    area_code: string | null,
    phone_number: string | null,
    street_adress: string | null,
    city_name: string | null,
    provice: string | null,
    bussiness_type: string | null,
    password: string | null,
    conform_password: string | null,
    logo: string | null,
    email: string | null,

}


export interface login{
    email: string| null,
    password: string| null,
}
export interface forgetPassword{
    email: string| null,
}
export interface changePassword{
    password: string| null,
    confirm_password: string| null,
}

