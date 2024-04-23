export const appInfo = {
    version: 'V2.0'
};

export interface Page {
    icon:string;
    name:string;
    redirectTo: string;
}

export const routes: Page[] = [
    {
        icon: 'bar-chart',
        name: 'consulta de Saldo',
        redirectTo: '/balance'
    },
    {
        icon: 'help-circle',
        name: 'más información',
        redirectTo: '/info'
    },
    {
        icon: 'document-text',
        name: 'términos y condiciones',
        redirectTo: '/terms-conditions'
    },
    {
        icon: 'person',
        name: 'aviso de privacidad',
        redirectTo: '/notice-privacy'
    }
];