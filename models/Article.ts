// models/Article.ts

export interface ArticleResponse {
  _id: string;
  judul: string;
  konten: string;
  penulis: string;
  tanggal: Date;
  urlGambar?: string;
}
