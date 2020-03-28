export const items: ServerlessComponent[] = [
    {
        name: 'Lambda',
        lambdas: [
            {
                functionObject1: {
                    name: '${self:provider.stage}-lambdaName',
                    events: [{ sns: {} }]
                }
            },
            {
                functionObject2: {
                    name: '${self:provider.stage}-lambda2',
                    events: [{ sns: {} }]
                }
            },
        ]
    }
];

export class ServerlessComponent {
    name: string;
    lambdas: Array<Lambda>;
}

export class Lambda {
    [key: string]: LambdaDetails | string;

    // get ObjectName(): string {
    //     return Object.keys(this)[0];
    // }
}

export class LambdaDetails {
    name: string;
    events: object[];
}
