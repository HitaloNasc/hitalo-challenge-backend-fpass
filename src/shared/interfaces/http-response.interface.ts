export interface HttpResponse<T> {
    statusCode: number;
    data: T;
}
