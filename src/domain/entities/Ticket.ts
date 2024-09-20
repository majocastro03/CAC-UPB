export class Ticket{
    constructor(
        public id: string,
        public userid: string,
        public appointmentid: string,
        public time: Date,
        public isPriority: boolean,
        public status: 'active' | 'expired' | 'completed'
    ){}
    expireTicket(){
        this.status = 'expired';
    }
    completeTicket(){
        this.status = 'completed';
    }
}