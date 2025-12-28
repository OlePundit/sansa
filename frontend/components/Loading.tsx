export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        {/* Spinner */}
        <div className="w-20 h-20 border-4 border-blue-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        
        {/* Optional: Loading text */}
        <div className="mt-4 text-center">
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    </div>
  );
}

// Alternative: Simple spinner only
export function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  );
}

// Alternative: Skeleton loading
export function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
}