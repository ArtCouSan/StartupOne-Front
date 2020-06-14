export interface PostModel {
    id?: number,
    title?: string,
    description?: string,
    files?: FileModel[]
}

export interface FileModel {
    id?: number,
    name?: string,
    principal?: boolean,
    position?: number,
    data?: string
}