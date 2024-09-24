// src/domain/entities/Queue.ts

export class Queue {
    public position: number;
    public assignedTo: string;
    public attended: boolean;
    public ticketId: number;

    constructor(position: number, assignedTo: string, attended: boolean, ticketId: number) {
        this.position = position;
        this.assignedTo = assignedTo;
        this.attended = attended;
        this.ticketId = ticketId;
    }

    public markAsAttended(): void {
        this.attended = true;
    }

    public isAttended(): boolean {
        return this.attended;
    }
}
