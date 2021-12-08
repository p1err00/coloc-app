export interface Notification {
    id_notif : number,
    nom_notif : string,
    desc_notif : string,
    date_creation_notif : Date,
    is_read : boolean,
    id_coloc : number,
    id_user_send : number,
    id_user_receive : number
}