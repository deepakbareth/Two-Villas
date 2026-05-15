import React, { useState } from 'react';
import { X, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
    // --- STATE ---
    const [baseDate, setBaseDate] = useState(new Date());
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [guests, setGuests] = useState(2);

    const pricePerNight = 250;

    // --- NAVIGATION LOGIC ---
    const handlePrevMonth = () => {
        const today = new Date();
        if (baseDate.getFullYear() === today.getFullYear() && baseDate.getMonth() <= today.getMonth()) {
            return;
        }
        setBaseDate(new Date(baseDate.getFullYear(), baseDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setBaseDate(new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 1));
    };

    const isPrevDisabled = () => {
        const today = new Date();
        return baseDate.getFullYear() === today.getFullYear() && baseDate.getMonth() === today.getMonth();
    };

    // --- MOCK UNAVAILABLE DATES ---
    const getIsUnavailable = (date) => {
        const day = date.getDate();
        return [5, 6, 15, 22].includes(day);
    };

    // --- SELECTION LOGIC ---
    const handleDateClick = (date) => {
        if (getIsUnavailable(date)) return;

        if (checkIn && checkOut) {
            setCheckIn(date);
            setCheckOut(null);
        } else if (!checkIn) {
            setCheckIn(date);
        } else if (checkIn && !checkOut) {
            if (date <= checkIn) {
                setCheckIn(date);
            } else {
                setCheckOut(date);
                setIsModalOpen(true);
            }
        }
    };

    const isDateInRange = (date) => {
        if (checkIn && checkOut) {
            return date > checkIn && date < checkOut;
        }
        return false;
    };

    const totalNights = checkIn && checkOut
        ? Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24))
        : 0;
    const totalPrice = totalNights * pricePerNight;

    // --- FORM SUBMISSION LOGIC ---
    const handleBookingSubmit = () => {
        // 1. Format the data exactly how an API would want it
        const bookingData = {
            checkInDate: checkIn.toLocaleDateString('en-US'),
            checkOutDate: checkOut.toLocaleDateString('en-US'),
            totalNights: totalNights,
            guests: guests,
            pricePerNight: pricePerNight,
            totalPrice: totalPrice,
            status: "Pending Mock Submission"
        };

        // 2. Log it beautifully to the browser console for testing
        console.log("==== NEW BOOKING SUBMISSION ====");
        console.table(bookingData);
        console.log("================================");

        // 3. Give the user visual feedback
        alert(`Booking simulated successfully for ${totalNights} nights!\nTotal: $${totalPrice}\n\nCheck your browser console to see the formatted data object.`);

        // 4. Close the modal and reset the calendar state
        setIsModalOpen(false);
        setCheckIn(null);
        setCheckOut(null);
        setGuests(2);
    };

    // --- RENDER MONTH FUNCTION ---
    const renderMonth = (monthOffset) => {
        const monthDate = new Date(baseDate.getFullYear(), baseDate.getMonth() + monthOffset, 1);
        const year = monthDate.getFullYear();
        const month = monthDate.getMonth();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();

        const days = [];
        const monthName = monthDate.toLocaleString('default', { month: 'long' });

        for (let i = 0; i < firstDayIndex; i++) {
            days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const isUnavailable = getIsUnavailable(date);
            const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

            const isCheckIn = checkIn?.getTime() === date.getTime();
            const isCheckOut = checkOut?.getTime() === date.getTime();
            const inRange = isDateInRange(date);

            const disabled = isUnavailable || isPast;

            let cellClasses = "w-10 h-10 flex items-center justify-center text-sm transition-all duration-200 ";

            if (disabled) {
                cellClasses += "bg-gray-200 text-gray-400 line-through rounded-none cursor-not-allowed";
            } else if (isCheckIn || isCheckOut) {
                cellClasses += "bg-[#17818A] text-white font-bold rounded-full shadow-md cursor-pointer";
            } else if (inRange) {
                cellClasses += "bg-[#17818A]/20 text-[#0a2342] cursor-pointer rounded-none";
            } else {
                cellClasses += "text-[#0a2342] hover:bg-gray-100 rounded-full cursor-pointer";
            }

            days.push(
                <button
                    key={day}
                    disabled={disabled}
                    onClick={() => handleDateClick(date)}
                    className={cellClasses}
                >
                    {day}
                </button>
            );
        }

        return (
            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 w-full">
                <h3 className="text-xl font-serif font-bold text-[#1a2b3c] mb-6 text-center">
                    {monthName} {year}
                </h3>
                <div className="grid grid-cols-7 gap-y-4 gap-x-1 justify-items-center mb-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                        <div key={day} className="text-xs font-bold text-gray-400 uppercase">{day}</div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-y-2 gap-x-1 justify-items-center">
                    {days}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full max-w-[1200px] mx-auto py-12 px-4 scroll-mt-18" id="calendar">

            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-6xl font-serif text-[#17818A] mb-4">Availability</h2>
                <p className="text-gray-500">Select your check-in and check-out dates.</p>
            </div>

            <div className="relative">
                <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full z-10 px-2 md:-px-12 pointer-events-none">
                    <button
                        onClick={handlePrevMonth}
                        disabled={isPrevDisabled()}
                        className={`pointer-events-auto p-3 rounded-full shadow-lg border border-gray-100 bg-white transition-all transform -translate-x-4 md:-translate-x-16 ${isPrevDisabled() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 text-[#0a2342] hover:scale-110'}`}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={handleNextMonth}
                        className="pointer-events-auto p-3 rounded-full shadow-lg border border-gray-100 bg-white hover:bg-gray-50 text-[#0a2342] transition-all transform translate-x-4 md:translate-x-16 hover:scale-110"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-0">
                    {renderMonth(0)}
                    <div className="hidden md:block">
                        {renderMonth(1)}
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                    <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">

                        <div className="bg-[#1a2b3c] p-6 text-white relative">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <h3 className="text-2xl font-serif font-bold mb-1">Your Stay</h3>
                            <p className="text-white/80 text-sm">Review your dates and select guests.</p>
                        </div>

                        <div className="p-6 space-y-6">

                            <div className="flex items-center justify-between bg-[#F0F8FF] p-4 rounded-xl border border-[#17818A]/20">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Check-in</span>
                                    <span className="text-[#0a2342] font-medium">{checkIn?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                                <div className="h-8 w-[1px] bg-gray-300 mx-2"></div>
                                <div className="flex flex-col text-right">
                                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Check-out</span>
                                    <span className="text-[#0a2342] font-medium">{checkOut?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                            </div>

                            <div>
                                <label className="flex items-center gap-2 text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">
                                    <Users className="w-4 h-4 text-[#17818A]" /> Number of Guests
                                </label>
                                <div className="flex items-center justify-between border border-gray-200 rounded-xl p-2">
                                    <button
                                        onClick={() => setGuests(Math.max(1, guests - 1))}
                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 text-[#0a2342] font-bold text-xl transition-colors"
                                    >-</button>
                                    <span className="text-lg font-bold text-[#0a2342]">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
                                    <button
                                        onClick={() => setGuests(guests + 1)}
                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100 text-[#0a2342] font-bold text-xl transition-colors"
                                    >+</button>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600">${pricePerNight} x {totalNights} nights</span>
                                    <span className="font-medium text-[#0a2342]">${totalPrice}</span>
                                </div>
                                <div className="flex justify-between items-center text-xl font-bold mt-4 pt-4 border-t border-gray-100">
                                    <span className="text-[#0a2342]">Total Price</span>
                                    <span className="text-[#17818A]">${totalPrice}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleBookingSubmit}
                                className="w-full cursor-pointer bg-yellow-400 text-black py-4 rounded-full text-lg font-bold shadow-lg hover:bg-yellow-500 hover:-translate-y-1 transition-all duration-300"
                            >
                                Proceed to Book
                            </button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;