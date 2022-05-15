module.exports = {
  apps: [{
    name: 'ghiflix-backend',
    script: './build/index.js',
    instances: 4,
    exec_mode: 'cluster',
  }],
};
