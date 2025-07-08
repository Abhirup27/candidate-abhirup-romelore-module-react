import { Heart, ExternalLink } from 'lucide-react';

const CareDuelBanner = () => (
    <section className="bg-[#FFFDF9] border-t-2 border-b-2 border-[#800000] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <Heart className="h-5 w-5 text-[#800000]" />
                <span className="text-[#B8860B] font-semibold">Topic of the Week:</span>
                <a
                    href="https://careduel.com/topic-of-the-week"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#800000] hover:text-[#660000] font-medium flex items-center transition-colors group"
                >
                    Kindness in Ancient Rome - A Modern Reflection
                    <ExternalLink className="h-4 w-4 ml-1 transition-transform group-hover:translate-y-0.5" />
                </a>
            </div>
            <p className="text-center text-sm text-[#5a5a5a] mt-2 max-w-2xl mx-auto">
                A narrative-based platform where users engage in weekly kindness challenges
            </p>
        </div>
    </section>
);

export default CareDuelBanner;