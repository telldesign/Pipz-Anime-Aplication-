import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://kitsu.io/api/edge/anime';

@Injectable({ providedIn: 'root' })
export class AnimeService {

    constructor(private http: HttpClient) {}

    listFromName(userName: string) {
        return this.http
            .get(API + '/?filter[text]=' + userName);
    }
    detailsFromId(id: string) {
        return fetch(API + '/?filter[id]=' + id)
                .then(response => response.json());
    }
}
