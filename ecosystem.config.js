module.exports = {
  apps: [
    {
      name: "react-kickstore",
      script: "npx",
      args: "serve -s build/ -p 5002",
      env: {
        NODE_ENV: "production"
      },
    },
  ],
};
