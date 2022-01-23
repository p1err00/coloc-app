export default interface Vote {
    id_vote : string,
    nom : string,
    instigator : string,
    date_creation : Date,
    is_anonyme : boolean,
    nb_response : number,
    id_coloc : number,
    timer : Date
}