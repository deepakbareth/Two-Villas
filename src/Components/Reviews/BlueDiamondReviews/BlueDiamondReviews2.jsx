// i dont use this comp ok becouse we dont need this 








import React, { useState } from 'react';
import { Star, Quote, User } from 'lucide-react';
// Import your freshly created data array!
import BlueDiamondReviews2 from '../../../Data/BlueDiamondReviews2';

const BlueDiamondReviews = () => {
    const totalReviews = BlueDiamondReviews2.length;
    const CHARACTER_LIMIT = 150; // Limit before cutting off text

    // State for "Load More" pagination
    const [visibleCount, setVisibleCount] = useState(9);

    // State to track which specific reviews are expanded
    const [expandedReviews, setExpandedReviews] = useState({});

    // === Sorting Logic (Newest to Oldest) ===
    const sortedReviewsData = [...BlueDiamondReviews2].sort((a, b) => {
        // Helper function to extract a Date from date formats
        const extractDate = (dateString) => {
            if (!dateString) return new Date(0);

            // Looks for the Month and Year pattern (e.g., "Sep 2024", "June 2025", "May 2026")
            const match = dateString.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s(\d{4})/i);
            if (match) {
                return new Date(`${match[1]} 1, ${match[2]}`);
            }
            return new Date(0); // Fallback
        };

        const dateA = a.date || a.fullDateString;
        const dateB = b.date || b.fullDateString;
        return extractDate(dateB) - extractDate(dateA);
    });

    const displayedReviews = sortedReviewsData.slice(0, visibleCount);

    const loadMoreReviews = () => {
        setVisibleCount((prevCount) => prevCount + 9);
    };

    // Toggle function for the "Read More" button
    const toggleReview = (id) => {
        setExpandedReviews((prev) => ({
            ...prev,
            [id]: !prev[id] // Flips between true (expanded) and false (collapsed)
        }));
    };

    // === NEW: Helper function to cleanly format the Airbnb subtitle ===
    const getAirbnbSubtitle = (review) => {
        if (review.reviewerLocation) {
            return review.reviewerLocation;
        }
        if (review.platformTenureYears === 0 || review.platformTenureYears === null || review.platformTenureYears === undefined) {
            return "New to Airbnb";
        }
        if (review.platformTenureYears === 1) {
            return "1 year on Airbnb";
        }
        return `${review.platformTenureYears} years on Airbnb`;
    };

    return (
        <main className="min-h-screen bg-slate-50/50 pt-28 md:pt-36">

            <style>
                {`
          @keyframes slideFadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
            </style>

            <div className="text-center px-4 sm:px-6 md:px-8 py-10">
                <span className="text-[#c4a661] uppercase tracking-[0.3em] text-sm font-semibold mb-3 block">
                    Guest Experience
                </span>
                <h1 className="text-4xl md:text-6xl font-serif text-[#17818A] tracking-tight">
                    Blue Diamond Villa Reviews
                </h1>
            </div>

            {/* === MAIN CONTENT === */}
            <section className="py-12 md:py-15 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-8">

                {/* === FLEXBOX REVIEWS GRID === */}
                <div className="flex flex-wrap justify-center gap-6">

                    {displayedReviews.map((review, index) => {
                        const isAirbnb = review.platform === "Airbnb" || review.source === "Airbnb";
                        const isLongReview = review.text.length > CHARACTER_LIMIT;
                        const isExpanded = expandedReviews[review.id];

                        // If it's long AND not expanded, cut it off. Otherwise, show full text.
                        const displayText = isLongReview && !isExpanded
                            ? review.text.substring(0, CHARACTER_LIMIT) + "..."
                            : review.text;

                        return (
                            <div
                                key={review.id}
                                style={{
                                    animation: `slideFadeIn 0.6s ease-out ${(index % 9) * 0.1}s both`
                                }}
                                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-[#e6f2fc] p-5 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden flex flex-col"
                            >
                                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-[#17818A]/10 opacity-60 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />

                                <div className="relative z-10 flex flex-col h-full">

                                    {/* Guest Info & Travel Info */}
                                    <div className="flex items-center gap-4  pb-8 border-b border-gray-100">
                                        {/* Standard User Icon (no profile image required) */}
                                        <div className="w-12 h-12 bg-[#17818A] rounded-full flex items-center justify-center text-white shrink-0">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-serif font-semibold text-[#0a2342] tracking-wider text-sm">
                                                {isAirbnb ? review.reviewerName : review.name}
                                            </h4>
                                            <span className="text-xs text-gray-500 font-medium block mt-1">
                                                {isAirbnb ? (
                                                    getAirbnbSubtitle(review)
                                                ) : (
                                                    `${review.travelInfo || ''} ${review.travelInfo && review.date ? '•' : ''} ${review.date || ''}`
                                                )}
                                                <a target="_blank" href="https://www.airbnb.co.in/rooms/1132552971997036250/reviews?source_impression_id=p3_1782324121_P3uTG57-lLtoIE2V&review_page_entrypoint=show_all" className="text-[#17818A]  font-semibold text-[13px] ml-5 tracking-widest  underline focus:outline-none not-italic inline-block transition-colors"> <p>Visit Airbnb</p></a>
                                            </span>
                                        </div>
                                    </div>

                                    {/* === CONTENT FOR AIRBNB REVIEWS (First Screenshot style) === */}
                                    {isAirbnb && (
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="flex gap-0.5">
                                                {[...Array(review.rating || 5)].map((_, i) => (
                                                    <Star key={i} className="w-3.5 h-3.5 fill-[#c4a661] text-[#c4a661]" />
                                                ))}
                                            </div>
                                            <span className="text-xs text-gray-400 font-medium">•</span>
                                            <span className="text-xs text-gray-500 font-medium">
                                                {review.fullDateString || review.date}
                                            </span>
                                        </div>
                                    )}

                                    {/* === CONTENT FOR BOOKING.COM REVIEWS (Second Screenshot style) === */}
                                    {!isAirbnb && (
                                        <>
                                            <span className="text-[#c4a661] font-semibold text-xs uppercase tracking-widest block mb-1">
                                                {review.ratingText}
                                            </span>
                                            {review.title && (
                                                <h5 className="font-serif text-[#0a2342] text-[17px] leading-snug mb-3">
                                                    {review.title}
                                                </h5>
                                            )}
                                        </>
                                    )}

                                    {/* Review Text with "Read More" logic */}
                                    <p className="text-gray-600 font-light text-[15px] leading-relaxed mb-5 flex-grow whitespace-pre-line">
                                        {isAirbnb ? `"${displayText}"` : displayText}

                                        {/* Only show the button if the text is actually long enough to need it */}
                                        {isLongReview && (
                                            <button
                                                onClick={() => toggleReview(review.id)}
                                                className="ml-2 text-[#17818A] font-semibold text-xs cursor-pointer uppercase tracking-widest hover:underline focus:outline-none not-italic inline-block transition-colors"
                                            >
                                                {isExpanded ? "Show Less" : "Read More"}
                                            </button>
                                        )}
                                    </p>

                                    {/* Liked Items for Booking.com */}
                                    {!isAirbnb && review.liked && (
                                        <div className="text-xs text-gray-500 font-medium pb-5 border-b border-gray-100 mt-auto">
                                            <span className="font-serif font-semibold text-[#0a2342]">Liked: </span>{review.liked}
                                        </div>
                                    )}


                                    <div className="text-xs text-gray-500 font-medium  pb-5 border-b border-gray-100">
                                        <span className="font-serif font-semibold text-[#0a2342]">Liked: </span>{"cleanliness, check-in, communication, location, listing accuracy"}
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* === MORE REVIEWS BUTTON === */}
                {visibleCount < totalReviews && (
                    <div className="flex justify-center mt-16">
                        <button
                            onClick={loadMoreReviews}
                            className="bg-yellow-500 cursor-pointer font-serif text-black px-8 py-3.5  text-xl tracking-widest  rounded-full hover:bg-yellow-500 hover:shadow-lg transition-all duration-300"
                        >
                            More Reviews
                        </button>
                    </div>
                )}

            </section>
        </main>
    );
};

export default BlueDiamondReviews;