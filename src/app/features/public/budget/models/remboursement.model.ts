export interface Remboursement {
    id : number,
    id_user_send : number,
    id_user_received : number,
    amount : number,
    date_creation : Date,
    is_payed : boolean,
    date_payment : Date
}