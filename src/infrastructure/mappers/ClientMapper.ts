import { CreateClientCommand } from "../../application/commands/CreateClientCommand";
import { GetClientQuery } from "../../application/queries/GetClientQuery";

export interface IClientMapper{

}
export class ClientMapper implements IClientMapper{
    toGetClientQuery(request: any): GetClientQuery {
        const {id} = request
        return new GetClientQuery(id);
    }

    toCreateClientCommand(request: any): CreateClientCommand {
        const {
        id,
        identification,
        name,
        lastname,
        address,
        is_premium,
        age
        } = request;
        return new CreateClientCommand(
            id,
            identification,
            name,
            lastname,
            address,
            is_premium,
            age
        );
    }
}
