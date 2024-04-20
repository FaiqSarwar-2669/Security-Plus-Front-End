export interface registration {
    bussiness_owner: string | null,
    bussiness_type: string | null,
    password: string | null,
    conform_password: string | null,
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

