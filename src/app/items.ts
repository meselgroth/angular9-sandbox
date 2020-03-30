export const items: ServerlessComponent[] = [
    {
        name: 'Lambda',
        lambdas: [
            {
                functionObject1: {
                    name: '${self:provider.stage}-lambdaName',
                    events: [{ sns: {} }]
                },
                ObjectName: 'functionObject1',
                GetObject() { return this.functionObject1; }
            },
            {
                functionObject2: {
                    name: '${self:provider.stage}-lambda2',
                    events: [{ sns: {} }]
                },
                ObjectName: 'functionObject2',
                GetObject() { return this.functionObject2; }
            },
        ]
    }
];

export interface ServerlessComponent {
    name: string;
    lambdas: Array<ILambda>;
}

export interface ILambda {
    [key: string]: LambdaDetails | string | Function;
}

export class Lambda implements ILambda {
    [key: string]: string | Function | LambdaDetails;

    constructor(iLambda?: ILambda) {
        for (const key in iLambda) {
            if (iLambda.hasOwnProperty(key)) {
                this[key] = iLambda[key];
            }
        }
    }
    get ObjectName(): string {
        return Object.keys(this)[0];
    }
    GetObject(): LambdaDetails { return this[Object.keys(this)[0]] as LambdaDetails; }
}



export class LambdaDetails {
    name: string;
    events: object[];
}
