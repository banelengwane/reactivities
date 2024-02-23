export interface User {
    username: string;
    displayName: string;
    token: string;
    image?: string;
}

export interface UserFormValues {
    email: string;
    passowrd: string;
    displayName?: string;
    username?: string;
}