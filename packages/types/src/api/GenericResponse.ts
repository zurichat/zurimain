export type ApiResponse<T = null> = T extends null
  ? {
      status: number;
      message: string;
    }
  : {
      code: number;
      message: string;
      data: T;
    };

export default ApiResponse;
