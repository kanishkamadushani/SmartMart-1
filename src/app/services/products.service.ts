import {Injectable} from '@angular/core'
import { Barcode } from './product.module'
import { AngularFirestore } from '@angular/fire/firestore';
import { Users } from './users.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService{
    formData: Barcode;
    constructor(private firestore:AngularFirestore){}

    getProductDetails(){
        return this.firestore.collection('Barcode_details').snapshotChanges();
    }
}