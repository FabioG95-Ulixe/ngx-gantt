module.exports = {
    mode: 'full',
    title: 'NgxGantt',
    siteProjectName: 'example',
    outputDir: 'dist/site',
    logoUrl: 'https://cdn.pingcode.com/open-sources/gantt/logo.png',
    repoUrl: 'https://github.com/worktile/ngx-gantt',
    defaultLocale: 'it-IT',
    navs: [
        null,
        {
            title: 'Componenti',
            path: 'components',
            locales: {
                'en-us': {
                    title: 'Component'
                }
            }
        },
        {
            title: 'Parametri',
            path: 'configuration',
            lib: 'ngx-gantt',
            locales: {
                'en-us': {
                    title: 'Configuration'
                }
            }
        },
        {
            title: 'GitHub',
            path: 'https://github.com/worktile/ngx-gantt',
            isExternal: true
        },
        {
            title: 'Changelog',
            path: 'https://github.com/worktile/ngx-gantt/blob/master/CHANGELOG.md',
            isExternal: true,
            locales: {
                'en-us': {
                    title: 'Changelog'
                }
            }
        }
    ],
    libs: [
        {
            name: 'ngx-gantt',
            rootDir: './example/src/app/configuration',
            exclude: [],
            categories: [
                {
                    id: 'config',
                    title: 'Configurazione',
                    locales: {
                        'en-us': {
                            title: 'Configuration'
                        }
                    }
                }
            ]
        }
    ]
};
