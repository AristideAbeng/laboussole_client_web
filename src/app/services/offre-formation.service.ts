import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OffreFormationService {
  constructor(private http: HttpClient) {}
  url = 'https://dummyjson.com';

  getFormations() {
    return this.http.get(this.url + '/products');
  }
  getFormation() {
    return [
      {
        image: 'assets/image4.png',
        title: 'Redacteur, Editeur',
        description:
          "Le rédacteur est un professionnel de l'écriture qui crée du contenu textuel pour divers supports, tels que...",
      },
      {
        image: 'assets/image4.png',
        title: 'Assistant de direction',
        description:
          "Il joue un rôle crucial dans l'organisation administrative et la gestion quotidienne des tâches, per...",
      },
      {
        image: 'assets/image4.png',
        title: 'Enseignant de Langue et Littérature',
        description:
          'Le professeur de français a pour mission principale de transmettre sa passion de la langue et de la lit...',
      },
      {
        image: 'assets/image2.png',
        title: "Juriste d'entreprise",
        description:
          "Le juriste d'entreprise est un véritable conseiller juridique au sein d'une société. Il intervient dan...",
      },
      {
        image: 'assets/image2.png',
        title: 'Avocat',
        description:
          "L'avocat est un professionnel du droit qui conseille et défend ses clients dans le cadre de litiges ou de ...",}
    ];
  }

  getEtudes() {
    return [
      {
        image: 'assets/image4.png',
        title: 'Bourse et programme d’échange éducatifs pour le développement CANADA-ANASE',
        description:
          "L'initiative Bourses et programmes d’échanges éducationnels pour le développement Canada- ANASE permet aux étudiants, des pays membres de l’Association des Nations de l'Asie du Sud-Est (l’ANASE), de participer à des échanges d’études.",
      },
      {
        image: 'assets/image4.png',
        title: 'Bourse et programme d’échange éducatifs pour le développement CANADA-ANASE',
        description:
          "L'initiative Bourses et programmes d’échanges éducationnels pour le développement Canada- ANASE permet aux étudiants, des pays membres de l’Association des Nations de l'Asie du Sud-Est (l’ANASE), de participer à des échanges d’études.",
      },
      {
        image: 'assets/image2.png',
        title: 'Bourse et programme d’échange éducatifs pour le développement CANADA-ANASE',
        description:
          "L'initiative Bourses et programmes d’échanges éducationnels pour le développement Canada- ANASE permet aux étudiants, des pays membres de l’Association des Nations de l'Asie du Sud-Est (l’ANASE), de participer à des échanges d’études.",
      },
      {
        image: 'assets/image3.png',
        title: 'Bourse et programme d’échange éducatifs pour le développement CANADA-ANASE',
        description:
          "L'initiative Bourses et programmes d’échanges éducationnels pour le développement Canada- ANASE permet aux étudiants, des pays membres de l’Association des Nations de l'Asie du Sud-Est (l’ANASE), de participer à des échanges d’études.",
      },
      {
        image: 'assets/image3.png',
        title: 'Bourse et programme d’échange éducatifs pour le développement CANADA-ANASE',
        description:
          "L'initiative Bourses et programmes d’échanges éducationnels pour le développement Canada- ANASE permet aux étudiants, des pays membres de l’Association des Nations de l'Asie du Sud-Est (l’ANASE), de participer à des échanges d’études.",
      }
    ];
  }

}
