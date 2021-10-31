(function () {
    'use strict';

    angular.module('ariaNg').config(['$compileProvider', '$qProvider', '$translateProvider', 'localStorageServiceProvider', 'NotificationProvider', 'ariaNgConstants', 'ariaNgLanguages', function ($compileProvider, $qProvider, $translateProvider, localStorageServiceProvider, NotificationProvider, ariaNgConstants, ariaNgLanguages) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);

        $qProvider.errorOnUnhandledRejections(false);

        localStorageServiceProvider
            .setPrefix(ariaNgConstants.appPrefix)
            .setStorageType('localStorage')
            .setStorageCookie(365, '/');

        var supportedLangs = [];
        var languageAliases = {};

        for (var langName in ariaNgLanguages) {
            if (!ariaNgLanguages.hasOwnProperty(langName)) {
                continue;
            }

            var language = ariaNgLanguages[langName];
            var aliases = language.aliases;

            supportedLangs.push(langName);

            if (!angular.isArray(aliases) || aliases.length < 1) {
                continue;
            }

            for (var i = 0; i < aliases.length; i++) {
                var langAlias = aliases[i];
                languageAliases[langAlias] = langName;
            }
        }

        $translateProvider.useLoader('ariaNgLanguageLoader')
            .useLoaderCache(true)
            .registerAvailableLanguageKeys(supportedLangs, languageAliases)
            .fallbackLanguage(ariaNgConstants.defaultLanguage)
            .useSanitizeValueStrategy('escapeParameters');

        NotificationProvider.setOptions({
            delay: ariaNgConstants.notificationInPageTimeout
        });
    }]);
}());
