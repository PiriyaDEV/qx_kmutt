module.exports = {
  apps: [
    {
      name: "strapi",
      cwd: "/path/to/strapi-project",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        DATABASE_HOST: process.env.DATABASE_HOSE, // database endpoint
        DATABASE_PORT: process.env.DATABASE_PORT,
        DATABASE_NAME: process.env.DATABASE_NAME, // DB name
        DATABASE_USERNAME: process.env.DATABASE_USERNAME, // your username for psql
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD, // your password for psql
      },
    },
  ],
};
