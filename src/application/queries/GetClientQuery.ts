export class GetClientQuery {
    constructor(private _clientId: number) {}

    getClientId(): number{
        return this._clientId;
    }
}
