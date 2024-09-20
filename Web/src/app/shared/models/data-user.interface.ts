export interface DataUser {
    name: string,
    email: string,
    type: UserType
}

export enum UserType {
    company = 'company',
    person = 'person',
}