import { X } from 'lucide-react';

interface PaymentModalProps {
    status: string;
    setPaymentStatus: (status: '' | 'processing' | 'success' | 'canceled') => void;
}

const PaymentModal = ({ status, setPaymentStatus }: PaymentModalProps) => {
    if (!status) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            {status === 'processing' ? (
                <div className="bg-white p-6 rounded-lg text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B8860B] mx-auto mb-4"></div>
                    <p>Processing payment...</p>
                </div>
            ) : status === 'success' ? (
                <div className="bg-white p-6 rounded-lg text-center animate-scale-in">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Payment Successful!</h3>
                    <p className="mb-4">Welcome to RomeLore Premium</p>
                    <button
                        onClick={() => setPaymentStatus('')}
                        className="bg-[#B8860B] text-white px-4 py-2 rounded-lg"
                    >
                        Continue Exploring
                    </button>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg text-center animate-scale-in">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <X className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Payment Canceled</h3>
                    <p className="mb-4">Your payment was not completed.</p>
                    <button
                        onClick={() => setPaymentStatus('')}
                        className="bg-[#B8860B] text-white px-4 py-2 rounded-lg"
                    >
                        Continue Exploring
                    </button>
                </div>
            )}
        </div>
    );
};

export default PaymentModal;