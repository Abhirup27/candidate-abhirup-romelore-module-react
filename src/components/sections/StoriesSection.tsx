import { stories } from '../../data/stories';
import { StoryCard } from '../cards/StoryCard';

const StoriesSection = () => (
    <section id="stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Sacred Stories & Hidden Histories
                </h2>
                <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                    Each tale reveals a different facet of Rome's eternal soul, from ancient mysteries to modern pilgrimages.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {stories.map((story, index) => (
                    <StoryCard key={index} {...story} />
                ))}
            </div>
        </div>
    </section>
);

export default StoriesSection;