module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cae6e0dd402f3e858f94577775b302cb'),
  },
});
