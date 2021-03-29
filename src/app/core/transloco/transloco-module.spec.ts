import { TranslocoTestingModule, TranslocoTestingOptions } from '@ngneat/transloco';
import * as en from '../../../assets/i18n/en.json';
import * as si from '../../../assets/i18n/si.json';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
    return TranslocoTestingModule.forRoot({
        langs: { en, si },
        translocoConfig: {
            availableLangs: ['en', 'si'],
            defaultLang: 'en',
        },
        preloadLangs: true,
        ...options
    });
}