export interface UserInterface {
    id: number;
    name: string;
    username: string;
    isEdit?: boolean;
    isDelete?: boolean;
}
export interface UserTablePropsInterface {
    id: number;
    name: string;
    username: string;
}