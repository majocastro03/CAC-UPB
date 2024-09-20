export class Appointment{
    constructor(
        public id: string,
        public id_user: string,
        public name: string,
        public last_name: string,
        public address: string,
        public description: string,
        public tipe: string,
        public date: Date,
        public time: string,
        public location: string,
        public status: 'scheduled' | 'canceled'
    ){}
    cancel(){
        this.status = 'canceled';
    }
}