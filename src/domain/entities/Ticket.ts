// src/domain/entities/Ticket.ts

export class Ticket {
    public id: number;
    public num: string;
    public generationDate: Date;
    public generationTime: string;
    public state: 'activo' | 'vencido';
    public clientId: number;

    constructor(
        id: number,
        num: string,
        generationDate: Date,
        generationTime: string,
        state: 'activo' | 'vencido',
        clientId: number
    ) {
        this.id = id;
        this.num = num;
        this.generationDate = generationDate;
        this.generationTime = generationTime;
        this.state = state;
        this.clientId = clientId;
    }

    public markAsExpired(): void {
        this.state = 'vencido';
    }

    public isActive(): boolean {
        return this.state === 'activo';
    }
}
