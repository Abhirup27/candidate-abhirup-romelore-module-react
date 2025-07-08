import { Menu } from 'lucide-react';

interface NavbarProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (value: boolean) => void;
    createCheckoutSession: () => void;
}

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen, createCheckoutSession }: NavbarProps) => (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-amber-700" style={{ fontFamily: 'Playfair Display, serif' }}>
                        RomeLore
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#stories" className="text-stone-700 hover:text-amber-700 transition-colors">Stories</a>
                    <a href="#discover" className="text-stone-700 hover:text-amber-700 transition-colors">Discover</a>
                    <a href="#community" className="text-stone-700 hover:text-amber-700 transition-colors">Community</a>
                    <button
                        onClick={createCheckoutSession}
                        className="bg-amber-700 text-white px-4 py-2 rounded-lg hover:bg-amber-800 transition-colors border-2 border-amber-700 hover:border-amber-800"
                    >
                        Join Premium
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <Menu className="h-6 w-6 text-stone-700" />
                    </button>
                </div>
            </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#stories" className="block px-3 py-2 text-stone-700 hover:text-amber-700">Stories</a>
                    <a href="#discover" className="block px-3 py-2 text-stone-700 hover:text-amber-700">Discover</a>
                    <a href="#community" className="block px-3 py-2 text-stone-700 hover:text-amber-700">Community</a>
                    <button
                        onClick={createCheckoutSession}
                        className="w-full text-left px-3 py-2 bg-amber-700 text-white rounded-lg hover:bg-amber-800 transition-colors"
                    >
                        Join Premium
                    </button>
                </div>
            </div>
        )}
    </nav>
);

export default Navbar;