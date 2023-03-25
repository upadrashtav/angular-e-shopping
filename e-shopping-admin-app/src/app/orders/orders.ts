export class Orders {

    constructor (
        public id: number,
        public orderDate: string,
        public orderStatus: string,
        public products: [
          {
            productId: number,
            productTitle: string, 
            productImg: string,
            brand:string,  
            productDescription: string,
            productCategory: string,
            price: number,
            quantity: number,
            totalPrice: number
          }],
        public totalItems: number,
        public itemsSubTotal: number,
        public shipmentCharges: number,
        public totalAmount: number,
        public paymentStatus: string,
        public paymentMethodTitle: string
    ) {

    }
}