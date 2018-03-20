import React from 'react';
import './styles.css';

const MENU_ITEMS = [
    {
        link: 'https://www.letemps.ch/monde',
        title: 'Monde'
    },
    {
        link: 'https://www.letemps.ch/suisse',
        title: 'Suisse'
    },
    {
        link: 'https://www.letemps.ch/economie',
        title: 'Economie'
    },
    {
        link: 'https://www.letemps.ch/opinions',
        title: 'Opinions'
    },
    {
        link: 'https://www.letemps.ch/culture',
        title: 'Culture'
    },
    {
        link: 'https://www.letemps.ch/sciences',
        title: 'Sciences'
    },
    {
        link: 'https://www.letemps.ch/sport',
        title: 'Sport'
    },
    {
        link: 'https://www.letemps.ch/societe',
        title: 'Société'
    },
    {
        link: 'https://www.letemps.ch/lifestyle',
        title: 'Lifestyle'
    },
    {
        link: 'https://blogs.letemps.ch/',
        title: 'Blogs'
    },
    {
        link: 'https://www.letemps.ch/images/video',
        title: 'Vidéos'
    }
];

const listItems = MENU_ITEMS.map((item, index) =>
    <li key={index}>
        <a href={item.link}>{item.title}</a>
    </li>
);

const Menu = () => (
    <div className="menu">
        <ul>{listItems}</ul>
    </div>
);

export default Menu;