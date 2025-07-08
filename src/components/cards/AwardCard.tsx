import { ExternalLink } from 'lucide-react';
import type {ReactNode} from 'react';

interface AwardCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    link: string;
    linkText: string;
}

export const AwardCard = ({ icon, title, description, link, linkText }: AwardCardProps) => (
    <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-[#800000] hover:border-[#B8860B] transition-all duration-300 transform hover:-translate-y-1 group">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-bold text-stone-800" style={{ fontFamily: 'Playfair Display, serif' }}>
                {title}
            </h3>
        </div>
        <p className="text-stone-600 mb-4">
            {description}
        </p>
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#800000] hover:text-[#B8860B] font-semibold transition-colors group/link"
        >
            {linkText}
            <ExternalLink className="h-4 w-4 ml-2 transition-transform group-hover/link:translate-x-0.5" />
        </a>
    </div>
);