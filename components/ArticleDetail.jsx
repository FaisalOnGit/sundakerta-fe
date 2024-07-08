// components/article-detail.tsx
import Head from "next/head";

const ArticleDetail = ({ article }) => {
  return (
    <div>
      <Head>
        <title>{article.judul} - Desa Sundakerta</title>
        <meta name="description" content={article.konten} />
      </Head>

      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{article.judul}</h1>
        <p className="text-lg text-gray-700">{article.konten}</p>
      </main>
    </div>
  );
};

export default ArticleDetail;
