import React from 'react';

const getRecommendation = (emotion = 'neutral') => {
  if (emotion === 'happy') return 'Brand B';
  if (emotion === 'neutral') return 'Brand A';
  return 'Brand C';
};

const Recommendation = () => {
  const recommendation = getRecommendation('neutral');

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold mb-4">We Recommend</h2>
      <p className="text-lg">Based on your preferences, we suggest: <strong>{recommendation}</strong></p>
    </div>
  );
};

export default Recommendation;
