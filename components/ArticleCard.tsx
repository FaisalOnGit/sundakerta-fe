// components/ArticleCard.tsx
import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  href,
  imageUrl,
}) => {
  return (
    <li className="card border rounded-lg shadow-md overflow-hidden">
      <Link legacyBehavior href={href}>
        <a className="block p-4 transition-transform transform hover:scale-105">
          <div className="relative w-full h-48">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </a>
      </Link>
    </li>
  );
};

export default ArticleCard;
