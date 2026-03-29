module.exports = {
  apps: [
    {
      name: "react-kickstore",
      script: "npm",
      args: "start",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 5003,
      },
    },
  ],
};
