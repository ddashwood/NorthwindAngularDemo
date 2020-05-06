export interface PagedResults<TDto> {
  pageNumber: number;
  pageSize: number;
  maxPage: number;

  data: TDto[];
}
