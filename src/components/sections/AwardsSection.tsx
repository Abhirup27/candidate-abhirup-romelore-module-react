import { Award, Star } from 'lucide-react';
import { AwardCard } from '../cards/AwardCard';

const AwardsSection = () => (
    <section className="py-16 bg-[#F8F5ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-stone-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Recognition & Community
                </h2>
                <p className="text-lg text-stone-600">
                    Join our award-winning community and discover exclusive content
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <AwardCard
                    icon={<Award className="h-8 w-8 text-[#800000] group-hover:text-[#B8860B] mr-3 transition-colors" />}
                    title="Vote Top216"
                    description="Cast your vote for inspiring changemakers across every category in this global people's choice award."
                    link="https://top216.com/vote"
                    linkText="Vote Now"
                />

                <AwardCard
                    icon={<Star className="h-8 w-8 text-[#800000] group-hover:text-[#B8860B] mr-3 transition-colors" />}
                    title="Explore TheTop36"
                    description="Discover premium content bundles and participate in gamified prize draws on our digital rewards platform."
                    link="https://thetop36.com/highlights"
                    linkText="Explore Now"
                />
            </div>
        </div>
    </section>
);

export default AwardsSection;