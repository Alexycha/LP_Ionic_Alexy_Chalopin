import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Aston } from 'src/app/models/aston.model';
import { AstonService } from 'src/app/service/aston.service';

@Component({
  selector: 'app-aston-new',
  templateUrl: './aston-new.page.html',
  styleUrls: ['./aston-new.page.scss'],
})
export class AstonNewPage implements OnInit {
  public aston!: Aston;

  constructor(
    private Aston: AstonService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.aston = new Aston();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Modèle ajouté',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tabs/astons']);
      }, 2000);
    });
  }


  add() {
    this.Aston.saveNewAston(this.aston).subscribe(() => {
      this.aston = new Aston();
      this.presentToast();
    })
  }

}

