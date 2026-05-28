module.exports = {
    reporters: [
        'default',
        [
            'jest-sonar', {
                outputDirectory: 'reports',
                outputName: 'test-report.xml',
                relativeRootDir: './',
                reportedFilePath: 'relative',
            }
        ]
    ]
}