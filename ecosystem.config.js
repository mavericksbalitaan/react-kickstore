module.exports = {
  apps: [
    {
      name: "react-kickstore",
      script: "npx",
      args: "serve -s build/ -l 5003",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 5003,
      },
    },
  ],
};
