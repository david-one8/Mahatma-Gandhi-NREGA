export const API_ENDPOINTS = {
  // District endpoints
  DISTRICTS: '/districts',
  DISTRICT_BY_CODE: (code) => `/districts/${code}`,
  DISTRICT_DATA: (code) => `/districts/${code}/data`,
  
  // MGNREGA data endpoints
  CURRENT_DATA: (districtCode) => `/mgnrega/current/${districtCode}`,
  HISTORICAL_DATA: (districtCode) => `/mgnrega/history/${districtCode}`,
  COMPARISON_DATA: '/mgnrega/comparison',
  STATE_SUMMARY: '/mgnrega/state-summary',
  
  // Location endpoints
  DETECT_LOCATION: '/location/detect',
  NEAREST_DISTRICT: '/location/nearest',
  
  // Analytics endpoints
  DISTRICT_RANKING: '/analytics/district-ranking',
  TRENDS: (districtCode) => `/analytics/trends/${districtCode}`,
};
