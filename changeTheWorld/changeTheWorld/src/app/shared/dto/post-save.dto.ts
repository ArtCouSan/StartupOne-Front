export interface PostSaveDTO {
    title?: string,
    description?: string,
    files?: FileSaveDTO[]
}

export interface FileSaveDTO {
    name?: string,
    principal?: boolean,
    position?: number,
    data?: string
}