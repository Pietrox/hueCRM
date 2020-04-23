module.exports = {
  name: "hue-crm",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/hue-crm",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
