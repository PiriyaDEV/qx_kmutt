module.exports = ({ env }) => ({
  rest: {
    prefix: env("API_PREFIX", "/api/v1"),
    defaultLimit: 25,
    maxLimit: 100,
    withCount: true,
  },
});
