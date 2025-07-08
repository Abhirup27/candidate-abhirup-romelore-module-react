import { useState, useEffect, useRef } from 'react';
import { Navbar, Footer, PaymentModal } from './components/layout';
import { Hero, CareDuelBanner, StoriesSection, AwardsSection, CommunitySection } from './components/sections';
import { RaffleWidget } from './components/widgets';
import { stories } from './data/stories';
import { useClickOutside } from './hooks/useClickOutside';
import './App.css';

const App = () => {
    const [raffleExpanded, setRaffleExpanded] = useState(false);
    const [raffleTickets, setRaffleTickets] = useState(0);
    const [paymentStatus, setPaymentStatus] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const raffleRef = useRef<HTMLDivElement>(null);

    // Handle payment status from URL
    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        if (query.get('payment') === 'success') {
            setPaymentStatus('success');
            window.history.replaceState({}, document.title, window.location.pathname);
        } else if (query.get('payment') === 'cancel') {
            setPaymentStatus('canceled');
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    // Mock API calls
    const fetchRaffleStatus = async () => {
        await new Promise(resolve => setTimeout(resolve, 500));
        setRaffleTickets(Math.floor(Math.random() * 10) + 1);
    };

    const joinRaffle = async () => {
        try {
            const sessionId = `raffle_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
            window.location.href = `${import.meta.env.VITE_STRIPE_RAFFLE_LINK}?client_reference_id=${sessionId}`;
        } catch (error) {
            console.error('Error joining raffle:', error);
        }
    };

    const createCheckoutSession = async () => {
        try {
            const sessionId = `premium_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
            window.location.href = `${import.meta.env.VITE_STRIPE_PREMIUM_LINK}?client_reference_id=${sessionId}`;
        } catch (error) {
            setPaymentStatus('error');
        }
    };

    useEffect(() => {
        fetchRaffleStatus();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100" style={{
            fontFamily: 'Lora, serif',
            '--primary-color': '#B8860B',
            '--accent-color': '#800000'
        }}>
            <Navbar
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                createCheckoutSession={createCheckoutSession}
            />

            <Hero />
            <CareDuelBanner />
            <StoriesSection />
            <AwardsSection />
            <CommunitySection createCheckoutSession={createCheckoutSession} />
            <Footer />

            <RaffleWidget
                raffleExpanded={raffleExpanded}
                setRaffleExpanded={setRaffleExpanded}
                raffleTickets={raffleTickets}
                joinRaffle={joinRaffle}
                paymentStatus={paymentStatus}
                raffleRef={raffleRef}
            />

            <PaymentModal
                status={paymentStatus}
                setPaymentStatus={setPaymentStatus}
            />
        </div>
    );
};

export default App;