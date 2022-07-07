module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "53748b09ba05ec0033f57b6c6ff66b72"),
  },
});
