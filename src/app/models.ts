export interface ServerlessComponent {
    name: string;
    lambdas: Array<ILambda>;
}

export interface ILambda {
    [key: string]: LambdaDetails | string | Function;
}

export class Lambda implements ILambda {
    [key: string]: LambdaDetails | string | Function;

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
