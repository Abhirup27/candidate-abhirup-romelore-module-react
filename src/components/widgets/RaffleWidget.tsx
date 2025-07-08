import { Ticket, X } from 'lucide-react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { type RefObject } from 'react';

interface RaffleWidgetProps {
    raffleExpanded: boolean;
    setRaffleExpanded: (value: boolean) => void;
    raffleTickets: number;
    joinRaffle: () => void;
    paymentStatus: string;
    raffleRef: RefObject<HTMLDivElement | null>;
}

const RaffleWidget = ({
                                 raffleExpanded,
                                 setRaffleExpanded,
                                 raffleTickets,
                                 joinRaffle,
                                 paymentStatus,
                                 raffleRef
                             }: RaffleWidgetProps) => {
    useClickOutside(raffleRef, () => setRaffleExpanded(false));

    return (
        <div
            className={`fixed ${raffleExpanded ? 'bottom-10' : 'bottom-6'} right-6 z-50`}
            ref={raffleRef}
        >
            {!raffleExpanded ? (
                <button
                    onClick={() => setRaffleExpanded(true)}
                    className="bg-[#B8860B] hover:bg-[#A67A0A] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:rotate-12 flex items-center justify-center"
                    aria-label="Open raffle"
                >
                    <Ticket className="h-6 w-6" />
                </button>
            ) : (
                <div
                    className="bg-[#FFFDF9] rounded-lg shadow-xl border-2 border-[#B8860B] p-4 overflow-y-auto"
                    style={{ width: '300px', maxHeight: 'min(400px, 80vh)' }}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-stone-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Weekly Raffle
                        </h3>
                        <button
                            onClick={() => setRaffleExpanded(false)}
                            className="text-stone-500 hover:text-stone-700 transition-colors"
                            aria-label="Close raffle"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="text-center mb-6 animate-fade-in">
                        <div className="relative inline-block">
                            <Ticket className="h-16 w-16 text-[#B8860B] mx-auto mb-2" />
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                {raffleTickets}
              </span>
                        </div>
                        <p className="text-stone-600 mb-2">You have</p>
                        <p className="text-2xl font-bold text-[#B8860B]">{raffleTickets} tickets</p>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-[#F8F5ED] p-3 rounded-lg border border-[#B8860B]/30">
                            <h4 className="font-semibold text-stone-800 mb-1">This Week's Prize</h4>
                            <p className="text-sm text-stone-600">Private Vatican tour with local historian</p>
                        </div>

                        <button
                            onClick={joinRaffle}
                            className="w-full bg-[#B8860B] hover:bg-[#A67A0A] text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                        >
                            <Ticket className="h-4 w-4" />
                            Join the Raffle
                        </button>

                        {paymentStatus === 'error' && (
                            <div className="text-red-600 text-sm text-center animate-pulse">
                                Error, try again.
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RaffleWidget;