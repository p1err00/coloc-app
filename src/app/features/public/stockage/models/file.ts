export interface File{
    id_file : number,
    id_stockage_folder : number,
    nom : string,
    extension : string,
    path : string,
    id_user : number,
    public : boolean,
    is_shared : boolean,
    id_shared : string
}