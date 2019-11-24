module.exports = {
    name: 'theme',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/libs/theme',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js'
    ]
};
