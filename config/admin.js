module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fb30661e74efcede8e2510eb2c89f8cd'),
  },
});
