// import Head from "next/head";
// import axios from "axios";
// import Link from "next/link";

// const ArticleDetail = ({ article }) => {
//   if (!article) {
//     return <div>Article not found</div>;
//   }

//   return (
//     <div>
//       <Head>
//         <title>{article.judul} - Desa Sundakerta</title>
//         <meta name="description" content={article.judul} />
//       </Head>

//       <main className="max-w-7xl mx-auto p-4">
//         <h1 className="text-4xl font-bold mb-4">{article.judul}</h1>
//         <img
//           src={article.urlGambar}
//           alt={article.judul}
//           className="mb-4 w-full h-auto"
//         />
//         <p>{article.konten}</p>
//         <Link href="/artikel">
//           <a className="mt-8 inline-block text-blue-500">Back to Articles</a>
//         </Link>
//       </main>
//     </div>
//   );
// };

// export async function getStaticProps(context) {
//   const { slug } = context.params;

//   try {
//     const response = await axios.get(
//       `http://localhost:3000/api/artikel?slug=${slug}`
//     );
//     const article = response.data;

//     if (!article) {
//       return {
//         notFound: true,
//       };
//     }

//     return {
//       props: {
//         article,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching article:", error);
//     return {
//       notFound: true,
//     };
//   }
// }

// export default ArticleDetail;

// export const generateStaticParams = async () => {
//   const posts = getPostMetadata("recipes"); // Ganti 'recipes' dengan jenis konten yang sesuai
//   return posts.map((post) => ({ params: { slug: post.slug } }));
// };
