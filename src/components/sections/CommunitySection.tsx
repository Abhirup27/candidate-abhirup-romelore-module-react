import { CreditCard } from 'lucide-react';

interface CommunitySectionProps {
    createCheckoutSession: () => void;
}

const CommunitySection = ({ createCheckoutSession }: CommunitySectionProps) => (
    <section id="community" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Join the RomeLore Community
            </h2>
            <p className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
                Share your own stories, connect with fellow travelers, and discover the hidden Rome that guidebooks never mention.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold border-2 border-amber-600 hover:border-amber-700 transition-all">
                    Share Your Story
                </button>
                <button
                    onClick={createCheckoutSession}
                    className="bg-red-900 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-semibold border-2 border-red-800 hover:border-red-700 transition-all flex items-center"
                >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Premium Access - $1
                </button>
            </div>
        </div>
    </section>
);

export default CommunitySection;