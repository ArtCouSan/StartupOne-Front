import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { PostAlterDTO } from '../dto/post-alter.dto';
import { PostSaveDTO } from '../dto/post-save.dto';
import { PostModel } from '../model/post.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private urlAPI = 'http://localhost:8080/v1/post/';

    constructor(private httpClient: HttpClient) { }

    listPost(): Observable<PostModel[]> {
        return this.httpClient.get(`${this.urlAPI}`).pipe(
            tap({
                error: error => {

                }
            }),
            delay(200),
            map(response => response as PostModel[])
        )
    }
    
    getPost(id: number): Observable<PostModel> {
        return this.httpClient.get(`${this.urlAPI}/${id}`).pipe(
            tap({
                error: error => {

                }
            }),
            delay(200),
            map(response => response as PostModel)
        )
    }

    savePost(post: PostSaveDTO): Observable<PostModel> {
        return this.httpClient.post(`${this.urlAPI}`, post).pipe(
            tap({
                error: error => {

                }
            }),
            delay(200),
            map(response => response as PostModel)
        )
    }

    alterPost(post: PostAlterDTO): Observable<PostModel> {
        return this.httpClient.put(`${this.urlAPI}`, post).pipe(
            tap({
                error: error => {

                }
            }),
            delay(200),
            map(response => response as PostModel)
        )
    }

    deletePost(id: number): Observable<PostModel> {
        return this.httpClient.delete(`${this.urlAPI}/${id}`).pipe(
            tap({
                error: error => {

                }
            }),
            delay(200),
            map(response => response as PostModel)
        )
    }

    private getQueryList(): string {
        return ``;
    }

}