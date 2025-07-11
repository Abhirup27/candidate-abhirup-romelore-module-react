import { useEffect, useState } from 'react';
import { StoryCard, type StoryCardProps } from '../cards/StoryCard';

const StoriesSection = () => {
    const [stories, setStories] = useState<StoryCardProps[]>([]);
    const [loadingStories, setLoadingStories] = useState(true);
    useEffect(() => {
        const fetchStories = async () => {
            try {
                setLoadingStories(true);
                const response = await fetch('https://demo3.roop-backend.site/api/v1/stories');
                const data = await response.json();
                setStories(data);
            } catch (error) {
                console.error('Failed to fetch stories:', error);
            } finally {
                setLoadingStories(false);
            }
        };

        fetchStories();
    }, []);
    return (
        <section id="stories" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4"
                        style={{fontFamily: 'Playfair Display, serif'}}>
                        Sacred Stories & Hidden Histories
                    </h2>
                    <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                        Each tale reveals a different facet of Rome's eternal soul, from ancient mysteries to modern
                        pilgrimages.
                    </p>
                </div>

                {loadingStories ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-700"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {stories.map((story, index) => (
                            <StoryCard
                                key={index}
                                title={story.title}
                                author={story.author}
                                excerpt={story.excerpt}
                                image={story.image}
                                category={story.category || "Sacred Sites"}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default StoriesSection;