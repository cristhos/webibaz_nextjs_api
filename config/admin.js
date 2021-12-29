module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e52bfd1c9c7d2cadd590284ab0d98c52'),
  },
});
