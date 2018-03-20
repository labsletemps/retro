import React, { Component } from 'react';
import pub from './assets/banner-lt.gif';
import img_abo from './assets/abonnement666.gif';
import img_impressum from './assets/impressum666.gif';
import img_pub from './assets/pub666.gif';
import img_dl from './assets/dl-pdf.gif';
import './App.css';
import Header from './Components/Header';
import Column from './Components/Column';
import Frontpage from './Components/Frontpage';

class App extends Component {
  handleDisabledRetro() {
    let expire = new Date();
    expire = new Date(expire.getTime() + 86400);
    document.cookie ="no_retro_page=:(; path=/; domain=letemps.ch; expires=" + expire;
  }

  render() {
    return (
      <div className="App">
        <div className="oldieButGoodie">
          <a href="https://boutique.letemps.ch/abonnements?utm_source=retro" target="_blank" rel="noopener noreferrer"><img src={ pub } alt="Pub"/></a>
          <a href="https://www.letemps.ch/pdf" target="_blank" rel="noopener noreferrer" className="dl"><img src={ img_dl } alt="Télécharger PDF"/></a>
        </div>
        <div className="left">
          <Column/>
        </div>
        <div className="right">
          <Header />
          <div className="topLinks">
            <a href="http://admeira.ch/fr/brands/digital/letemps-ch"><img src={ img_pub } alt="Publcité"/></a>
            <a href="https://boutique.letemps.ch/abonnements?utm_source=retro"><img src={ img_abo } alt="Abonnements"/></a>
            <a href="https://www.letemps.ch/contact/annuaire"><img src={ img_impressum } alt="Contacts"/></a>
          </div>
          <div className="header-date">
            { (new Date().toLocaleString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: "Europe/Zurich" })) }
          </div>
          <div className="explain">
            <p>Ce week-end, nous fêtons nos 20 ans ! Vous vous trouvez donc sur la première page d’accueil du site internet du Temps, né avec notre Journal, le 18 mars 1998, aux débuts du web. Si cela vous intéresse, nous consacrons <a href="https://www.letemps.ch/node/1092885">un article à l’histoire de notre présence numérique</a>.</p>
            <p>Si vous n’êtes pas nostalgique, vous pouvez <a href="https://www.letemps.ch/" onClick={this.handleDisabledRetro}>retrouver notre page d’accueil actuelle</a></p>
          </div>
          <Frontpage/>
        </div>
      </div>
    );
  }
}

export default App;
