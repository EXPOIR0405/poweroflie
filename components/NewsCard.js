export default function NewsCard({ category, title, date, thumbnail }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="p-4">
        <span className="inline-block px-3 py-1 rounded-full text-sm text-red-500 border border-red-500 mb-2">
          {category}
        </span>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-500">{date}</p>
      </div>
      {thumbnail && (
        <div className="aspect-video">
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