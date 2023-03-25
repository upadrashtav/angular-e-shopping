export class Users {

    constructor(
        public id: number,
        public username: string,
        public fullName: string,
        public street: string,
        public city: string,
        public state: string,
        public country: string,
        public pincode: string,       
        public emailid: string,
        public password: string,
        public img: string,
        public contact: string
    ) {

    }
}
