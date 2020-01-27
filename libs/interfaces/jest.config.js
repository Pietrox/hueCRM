module.exports = {
  name: 'interfaces',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/interfaces',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
