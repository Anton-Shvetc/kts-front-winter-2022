// Перечисление методов HTTP-запроса
export enum HTTPMethod {
  POST = "POST",
  GET = "GET"
}

export type RequestParams<ReqT> = {
  method: HTTPMethod; 
  endpoint: string; 
  headers: Record<string, string>; 

  data: ReqT;
};

// Перечисление статусов ответа
export enum StatusHTTP {
  UNEXPECTED_ERROR = 'UNEXPECTED_ERROR'
   
}

export type ApiResponse<SuccessT, ErrorT> =
  | {
      success: true;
      data: SuccessT;
      status: number;
    }
  | {
      success: false;
      data: ErrorT;
      status: number;
    } 
    | {
      success: false;
      data: any;
      status: StatusHTTP;
    }

export interface IApiStore {
  readonly baseUrl: string;
  request<SuccessT, ErrorT = any, ReqT = {}>(
    params: RequestParams<ReqT>
  ): Promise<ApiResponse<SuccessT, ErrorT>>;
}
