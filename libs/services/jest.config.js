module.exports = {
    name: 'services',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/libs/services',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js'
    ]
};
