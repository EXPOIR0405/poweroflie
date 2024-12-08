export default function NewsCard({ category, title, date, content, thumbnail }) {
  return (
    <div className="flex flex-col h-full border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4 flex-1">
        <span className="inline-block px-3 py-1 rounded-full text-sm text-red-500 border border-red-500 mb-3">
          {category}
        </span>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-3">{date}</p>
        {content && (
          <p className="text-gray-700 line-clamp-3 text-sm">
            {content}
          </p>
        )}
      </div>
      {thumbnail && (
        <div className="aspect-[4/3] sm:aspect-[16/9]">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
} 