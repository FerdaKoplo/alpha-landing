module.exports = {
  apps: [
    {
      name: "prod-alpha-landing",
      script: "yarn",
      args: "start",
      cwd: "/var/www/bbiz-project/alpha-landing",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
