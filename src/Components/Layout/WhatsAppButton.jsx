import React from 'react';
import { MessageCircle } from 'lucide-react'; // MessageCircle icon best lagta hai WhatsApp ke liye
import whatsappicon from '../../assets/whatsapp-icon.png'
const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/+34 622818061"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 flex items-center justify-center text-white  rounded-full  hover:scale-110 active:scale-95 transition-all duration-300 group animate-bounce"
            aria-label="Chat on WhatsApp"
        >
            {/* Lucide Icon - size aur stroke adjust ki hai */}
            <img src={whatsappicon} alt="whatsapp" className="w-18 h-18 md:w-20 md:h-20   " />

            {/* Tooltip */}
            <span className="absolute right-full  scale-0 origin-right transition-all duration-300 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white font-semibold shadow-xl group-hover:scale-100 whitespace-nowrap">
                Chat with us
            </span>
        </a>
    );
};

export default WhatsAppButton;