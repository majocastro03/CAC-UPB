// src/domain/entities/Appointment.ts

export class Appointment {
    public id: number;
    public type: string;
    public description: string | null;
    public date: Date;
    public time: string;
    public place: string;
    public state: 'cancelada' | 'pendiente' | 'completada';
    public clientId: number;

    constructor(
        id: number,
        type: string,
        description: string | null,
        date: Date,
        time: string,
        place: string,
        state: 'cancelada' | 'pendiente' | 'completada',
        clientId: number
    ) {
        this.id = id;
        this.type = type;
        this.description = description;
        this.date = date;
        this.time = time;
        this.place = place;
        this.state = state;
        this.clientId = clientId;
    }

    public reschedule(date: Date, time: string): void {
        if (this.state !== 'completada') {
            this.date = date;
            this.time = time;
            this.state = 'pendiente';
        } else {
            throw new Error('Cannot reschedule a completed appointment');
        }
    }

    public cancel(): void {
        if (this.state !== 'completada') {
            this.state = 'cancelada';
        } else {
            throw new Error('Cannot cancel a completed appointment');
        }
    }
}
