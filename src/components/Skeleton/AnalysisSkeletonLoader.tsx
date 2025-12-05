'use client'

// Reusable Skeleton Card Wrapper
const SkeletonCard = ({ withRows = false, withCircle = false }: { withRows?: boolean, withCircle?: boolean }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg animate-pulse">
    {/* Circle Icon */}
    <div className="w-16 h-16 rounded-full bg-gray-300 mb-6 mx-auto"></div>

    {/* Title */}
    <div className="h-6 w-3/4 bg-gray-300 rounded mb-6 mx-auto"></div>

    {/* Fake Review Bar */}
    {!withRows && !withCircle && (
      <div className="mb-6">
        <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
        <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
      </div>
    )}

    {/* Seller Rows */}
    {withRows && (
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
            </div>
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    )}

    {/* Product Quality Circle */}
    {withCircle && (
      <div className="flex items-center justify-center mb-6">
        <div className="w-32 h-32 rounded-full bg-gray-200"></div>
      </div>
    )}

    {/* Notes */}
    <div className="space-y-3">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-4 w-full bg-gray-200 rounded"></div>
      ))}
    </div>
  </div>
);

export default function AnalysisCardSkeleton() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Fake Review Checker */}
      <SkeletonCard />

      {/* Seller Trust */}
      <SkeletonCard withRows />

      {/* Product Quality */}
      <SkeletonCard withCircle />
    </div>
  );
}
