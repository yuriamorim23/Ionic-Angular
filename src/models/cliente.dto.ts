export interface ClienteDTO {
    id : string;
    nome : string;
    email : string;
    imageUrl? : string; // interrogacao serve para deixar o campo opcional
}