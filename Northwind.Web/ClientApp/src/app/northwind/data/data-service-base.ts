import { HttpClient } from "@angular/common/http";
import { PagedResults } from "./paged-results";

export class DataServiceBase<T> {
  constructor(private http: HttpClient, private baseUrl: string, private apiController: string) {
  }

  public loadAll(page: number, pageSize: number, complete: (result: PagedResults<T>) => void): void {
    let url = this.baseUrl + `api/${this.apiController}?${encodeURIComponent('page')}=${encodeURIComponent(page)}` +
      `&${encodeURIComponent('pageSize')}=${encodeURIComponent(pageSize)}`;

    this.http.get<PagedResults<T>>(url).subscribe(result => {
      complete(result);
    }, error => console.error(error));
  }

  public loadSingle(id: number | string, complete: (item: T) => void): void {
    let url = this.baseUrl + `api/${this.apiController}/${encodeURIComponent(id)}`

    this.http.get<T>(url).subscribe(result => {
      complete(result);
    }, error => console.error(error));
  }
}
