import { Connection } from "mysql2";
import Client from "../../domain/entities/Client";
import MySQL from "../database/MySQL";
import { RepositoryInterface } from "../../core/infrastructure/RepositoryInterface";

export class ClientRepository implements RepositoryInterface<Client> {
    private connection: Connection;

    constructor() {
        this.initialize();
    }
    findAll(): Promise<Client[]> {
        throw new Error("Method not implemented.");
    }
    findOneById(id: number): Promise<Client | null> {
        throw new Error("Method not implemented.");
    }
    exists(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    save(entity: Client): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(id: number, partial: Partial<Client>): Promise<Client | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    private async initialize() {
        const db = await MySQL.getInstance();
    }

    private createClientFromDoc(doc: any): Client {
        return new Client(
            doc.id_client,
            doc.identification_client,
            doc.name_client,
            doc.lastname_client,
            doc.address_client,
            doc.is_premium,
            doc.age_client
        );
    }


}
