export interface User {
    uid: string;
    email: string; // actualizamos el tipo para aceptar null
    displayName: string;
    emailVerified: string;
}