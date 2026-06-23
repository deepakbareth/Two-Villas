import React, { useState } from 'react';
import { Star, Quote, User } from 'lucide-react';
// Import your freshly created data array!
import BlueDiamondReviewsData from '../../../Data/BlueDiamondReviews';
// Import a background image for the banner
// import bannerImg from '../../assets/GalleryImg/g1.png';

const BlueDiamondReviews = () => {
    const totalReviews = BlueDiamondReviewsData.length;
    const CHARACTER_LIMIT = 150; // Limit before cutting off text

    // State for "Load More" pagination
    const [visibleCount, setVisibleCount] = useState(10);

    // State to track which specific reviews are expanded
    const [expandedReviews, setExpandedReviews] = useState({});

    const displayedReviews = BlueDiamondReviewsData.slice(0, visibleCount);

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
                        // Text Truncation Logic
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
                                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-[#e6f2fc] p-5 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group relative overflow-hidden flex flex-col"
                            >
                                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-[#17818A]/10 opacity-60 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />

                                <div className="relative z-10 flex flex-col h-full">

                                    {/* Guest Info & Travel Info */}
                                    <div className="flex items-center gap-4 mb-5 pb-5 border-b border-gray-100">
                                        <div className="w-12 h-12 bg-[#17818A] rounded-full flex items-center justify-center text-white shrink-0">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-serif font-semibold text-[#0a2342] tracking-wider text-sm">{review.name}</h4>
                                            <span className="text-xs text-gray-500 font-medium block mt-1">
                                                {review.travelInfo} • {review.date}
                                            </span>
                                        </div>
                                    </div>

                                    {/* NEW: Rating Text & Title */}
                                    <div className="mb-3">
                                        <span className="text-[#c4a661] font-semibold text-xs uppercase tracking-widest block mb-1">
                                            {review.ratingText}
                                        </span>
                                        <h5 className="font-serif text-[#0a2342] text-[17px] leading-snug">
                                            {review.title}
                                        </h5>
                                    </div>

                                    {/* Review Text with "Read More" logic */}
                                    <p className="text-gray-600 font-light text-[15px] leading-relaxed mb-5  flex-grow">
                                        {displayText}

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

                                    {/* NEW: Liked Items */}
                                    {review.liked && (
                                        <div className="text-xs text-gray-500 font-medium mb-5 pb-5 border-b border-gray-100">
                                            <span className="font-serif font-semibold text-[#0a2342]">Liked: </span>{review.liked}
                                        </div>
                                    )}

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