import { ChevronDown } from 'lucide-react';

export interface StoryCardProps {
    title: string;
    author: string;
    excerpt: string;
    image: string;
    category: string;
}

export const StoryCard = ({ title, author, excerpt, image, category }: StoryCardProps) => (
    <div className="bg-stone-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-stone-200">
    <div className="relative h-48 overflow-hidden">
    <img
        src={image}
alt={title}
className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
/>
<div className="absolute top-4 left-4">
<span className="bg-amber-700 text-white px-3 py-1 rounded-full text-sm font-medium">
    {category}
    </span>
    </div>
    </div>

    <div className="p-6">
<h3 className="text-xl font-bold text-stone-800 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
{title}
</h3>
<p className="text-stone-600 mb-3 text-sm">by {author}</p>
<p className="text-stone-700 mb-4 leading-relaxed">
    {excerpt}
    </p>
    <button className="text-amber-700 hover:text-amber-800 font-semibold flex items-center group">
    Read More
<ChevronDown className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
    </button>
    </div>
    </div>
);