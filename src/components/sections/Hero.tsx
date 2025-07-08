const Hero = () => (
    <section className="relative pt-16 pb-20 overflow-hidden">
        <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&h=800&fit=crop)',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="absolute inset-0 bg-stone-900/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="pt-20 pb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Timeless Tales of the
                    <span className="text-amber-400 block">Eternal City</span>
                </h1>
                <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-3xl mx-auto">
                    Discover secret histories, spiritual crossroads, and hidden stories shared by travelers, pilgrims, and locals who call Rome home.
                </p>
                <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-amber-600 hover:border-amber-700 transition-all transform hover:scale-105">
                    Begin Your Journey
                </button>
            </div>
        </div>
    </section>
);

export default Hero;