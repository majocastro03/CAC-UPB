export class CreateClientCommand {
    constructor(
        private id: number,
        private identification: string,
        private name: string,
        private lastname: string,
        private address: string,
        private is_premium: boolean,
        private age: number
    ) {}
    getId(): number {
        return this.id;
    }
    getIdentification(): string {
        return this.identification;
    }
    getName(): string {
        return this.name;
    }
    getLastname(): string {
        return this.lastname;
    }
    getAddress(): string {
        return this.address;
    }
    isPremium(): boolean {
        return this.is_premium;
    }
    getAge(): number {
        return this.age;
    }

}
