const Shimmer = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4" data-testId="shimmer">
      {Array(9).fill("").map((e, index) => (
        <div
          key={index}
          className="Shimmer-card bg-gray-300 h-40 animate-pulse rounded-md"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;