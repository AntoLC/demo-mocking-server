export interface IIMDB {
  d: IDataIMDB[];
  q: string;
  v: number;
}

export interface IDataIMDB {
  i?: IImageIMDB;
  id: string;
  l: string;
  s: string;
  q?: string;
  qid?: string;
  rank?: number;
  y?: number;
  yr?: string;
}

export interface IImageIMDB {
  height?: number;
  imageUrl?: string;
  width?: number;
}
