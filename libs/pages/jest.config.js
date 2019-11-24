module.exports = {
    name: 'pages',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/libs/pages',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js'
    ]
};
