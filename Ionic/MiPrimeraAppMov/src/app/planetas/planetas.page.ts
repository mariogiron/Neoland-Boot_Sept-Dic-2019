import { PlanetasService } from './../planetas.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.page.html',
  styleUrls: ['./planetas.page.scss'],
})
export class PlanetasPage implements OnInit {

  arrPlanetas: any[];

  constructor(
    private planetasService: PlanetasService,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {
    this.arrPlanetas = [];
  }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Recuperando planetas...'
    });
    await loading.present();
    this.planetasService.getAll()
      .then(response => {
        this.arrPlanetas = response.results;
        loading.dismiss();
      });
  }

  async lanzarAlerta(item) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: item.name,
      message: `Clima: ${item.climate}<br>Población: ${item.population}`,
      buttons: ['OK']
    });

    await alert.present();
  }

}
