import { HttpClient } from "@angular/common/http";
import { PagedResults } from "./paged-results";
import { Observable } from "rxjs";

export class DataServiceBase<T> {
  constructor(private http: HttpClient, private baseUrl: string, private apiController: string) {
  }

  public loadAll(page: number, pageSize: number): Observable<PagedResults<T>> {
    let url = this.baseUrl + `api/${this.apiController}?${encodeURIComponent('page')}=${encodeURIComponent(page)}` +
      `&${encodeURIComponent('pageSize')}=${encodeURIComponent(pageSize)}`;

    return this.http.get<PagedResults<T>>(url);
  }

  public loadSingle(id: number | string): Observable<T> {
    let url = this.baseUrl + `api/${this.apiController}/${encodeURIComponent(id)}`

    return this.http.get<T>(url);
  }
}
