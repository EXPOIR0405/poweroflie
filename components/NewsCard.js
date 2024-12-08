import Link from 'next/link';

export default function NewsCard({ id, category, title, date, content, thumbnail }) {
  return (
    <Link href={`/news/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <span className="text-red-600 text-sm font-bold">{category}</span>
          <h3 className="text-lg font-bold mt-2 line-clamp-2">{title}</h3>
          <p className="text-gray-500 text-sm mt-2">{date}</p>
          <p className="text-gray-600 mt-2 line-clamp-2">{content}</p>
        </div>
      </div>
    </Link>
  );
} 