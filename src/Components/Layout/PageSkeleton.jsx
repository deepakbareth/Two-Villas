import React from 'react';

const PageSkeleton = () => {
    return (
        <div className="w-full min-h-screen bg-[#F0F8FF] pt-25 lg:pt-27 pb-12">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-2">

                {/* 1. Hero Banner Skeleton (Two Columns matching your design) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-3 mb-16">

                    {/* Skeleton Card 1 */}
                    <div className="relative w-full aspect-square sm:aspect-[4/3.1] rounded-xl bg-gray-200/70 animate-pulse overflow-hidden shadow-sm">
                        {/* Top Nav Links Placeholder */}



                    </div>

                    {/* Skeleton Card 2 */}
                    <div className="relative w-full aspect-square sm:aspect-[4/3.1] rounded-xl bg-gray-200/70 animate-pulse overflow-hidden shadow-sm">
                        {/* Top Nav Links Placeholder */}


                    </div>
                </div>



            </div>
        </div>
    );
};

export default PageSkeleton;