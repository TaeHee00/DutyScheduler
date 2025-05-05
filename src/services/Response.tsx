export interface Response<DTO> {
  data: DTO;
  status: number;
  message: string;
};
