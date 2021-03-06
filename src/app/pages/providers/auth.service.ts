import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

    constructor(public afAuth: AngularFireAuth) {}

    getCurrentUser() {
        return this.afAuth.authState;
    }

    loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
    }

    resetPassword(email: string): firebase.Promise<any> {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    }

    logoutUser(): firebase.Promise<any> {
        return this.afAuth.auth.signOut();
    }

    signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
        return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
    }

}