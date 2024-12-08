export default function NewsCategoryTabs({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex gap-4">
      {categories.map(category => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full ${
            activeCategory === category 
              ? 'bg-red-500 text-white' 
              : 'text-gray-600'
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
} 