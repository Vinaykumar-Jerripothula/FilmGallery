function Loading() {
  return (
    <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center">
      <div className="flex flex-col items-center">

        <div className="relative">
          <div
            className="
              w-20 h-20
              border-4
              border-zinc-700
              border-t-orange-500
              rounded-full
              animate-spin
            "
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl">🎬</span>
          </div>
        </div>

        <h1 className="mt-6 text-2xl font-bold text-white tracking-wide">
          Film Gallery
        </h1>

        <p className="mt-2 text-zinc-400 text-sm animate-pulse">
          Loading your collection...
        </p>
      </div>
    </div>
  );
}

export default Loading;