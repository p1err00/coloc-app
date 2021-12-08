export interface Message{
    id_message : number,
    id_channel : string,
    id_user_send : number,
    message : string,
    date_envoi : Date,
    file : string,
    seen : Boolean
}