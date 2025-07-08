const Footer = () => (
    <footer className="bg-stone-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-amber-400" style={{ fontFamily: 'Playfair Display, serif' }}>
                        RomeLore
                    </h3>
                    <p className="text-stone-300">
                        Capturing the timeless tales and spiritual crossroads of the Eternal City.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4 text-amber-400">Explore</h4>
                    <ul className="space-y-2 text-stone-300">
                        <li><a href="#stories" className="hover:text-amber-400 transition-colors">Stories</a></li>
                        <li><a href="#discover" className="hover:text-amber-400 transition-colors">Discover</a></li>
                        <li><a href="#community" className="hover:text-amber-400 transition-colors">Community</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4 text-amber-400">Community</h4>
                    <ul className="space-y-2 text-stone-300">
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Share Story</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Guidelines</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Support</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4 text-amber-400">Connect</h4>
                    <ul className="space-y-2 text-stone-300">
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Newsletter</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-amber-400 transition-colors">About</a></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
                <p>&copy; 2025 RomeLore. All rights reserved. Built for the Eternal City.</p>
            </div>
        </div>
    </footer>
);

export default Footer;