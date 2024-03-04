module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    reporters: [
        'default',
        [
          'jest-html-reporters',
          {
            publicPath: '.html-report/jest_html_reporters',
            filename: 'test-report.html',
          },
        ],
      ],
  };