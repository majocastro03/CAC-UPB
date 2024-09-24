export default class Client {
    constructor(
        public id: number,
        public identification: string,
        public name: string,
        public lastname: string,
        public address: string,
        public is_premium: boolean,
        public age: number
    ) {}
    public static create(
        id: number,
        identification: string,
        name: string,
        lastname: string,
        address: string,
        is_premium: boolean,
        age: number
    ): Client {
        return new Client(id, identification, name, lastname, address, is_premium, age);
    }

}
