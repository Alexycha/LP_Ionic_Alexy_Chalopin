import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AstonService } from 'src/app/service/aston.service';

@Component({
  selector: 'app-aston',
  templateUrl: './aston.page.html',
  styleUrls: ['./aston.page.scss'],
})
export class AstonPage implements OnInit {
  modif!: boolean;
  aston: any = null;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private Aston: AstonService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.modif = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.Aston.get(id).subscribe((value: any) => {
      this.aston = value;
    });
  }

  async setModif() {
    if (!this.modif) {
      const alert = await this.alertCtrl.create({
        header: 'Etes-vous sur de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Confirmer',
            handler: () => { this.modif = !this.modif }
          }
        ]
      });

      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Aston.update(this.aston).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  onDelete(id: any) {
    this.Aston.delete(id);
    this.router.navigate(['/tabs/astons'])
  }

}

