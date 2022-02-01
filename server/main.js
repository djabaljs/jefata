import { Meteor } from 'meteor/meteor';
import { AdvertsCollection }  from '../imports/api/AdvertsCollection';

const insertAdvert = advert => AdvertsCollection.insert({
    name: advert.name,
    price: advert.price,
    description: advert.description,
    createdAt: new Date(),
    images : [
        'https://media.jumiadeals.com/ci_live/b0e188f50761ef4b6059403.desktop-gallery-large.jpg',
        'https://media.jumiadeals.com/ci_live/6a5cf941d561ef4b5bd90a2.desktop-gallery-large.jpg',
        'https://media.jumiadeals.com/ci_live/9bd8566e4461ef4b5e4f44e.desktop-gallery-large.jpg',
        'https://media.jumiadeals.com/ci_live/732acc37ea61ef4b62906ad.desktop-gallery-large.jpg',
        'https://media.jumiadeals.com/ci_live/b496dcccc061ef4b654c5ea.desktop-gallery-large.jpg',
        'https://media.jumiadeals.com/ci_live/6095a481b661ef4b68d68a6.desktop-gallery-large.jpg',
        'https://media.jumiadeals.com/ci_live/d8b0dd01c661ef4b6c45931.desktop-gallery-large.jpg'
    ],
    lat: advert.lat,
    lng: advert.lng,
    userId: advert.user._id
});

Meteor.startup(() => {
   if (AdvertsCollection.find().count() === 0){
       [
           {
               name: 'Taxi compteur ford focus',
               price: '19500000',
               description: 'Ford focus année 2002 Essence Carroserie+moteur en oart état visite à jour.',
               lat: '5.3194153',
               lng: '-4.0203545',
               user: {
                   _id: 1
               }
           },
           {
            name: 'Taxi compteur ford focus',
            price: '19500000',
            description: 'Ford focus année 2002 Essence Carroserie+moteur en oart état visite à jour.',
            lat: '5.3194153',
            lng: '-4.0203545',
            user: {
                _id: 1
            }
        },
        {
            name: 'Taxi compteur ford focus',
            price: '19500000',
            description: 'Ford focus année 2002 Essence Carroserie+moteur en oart état visite à jour.',
            lat: '5.3194153',
            lng: '-4.0203545',
            user: {
                _id: 1
            }
        },
        {
            name: 'Taxi compteur ford focus',
            price: '19500000',
            description: 'Ford focus année 2002 Essence Carroserie+moteur en oart état visite à jour.',
            lat: '5.3194153',
            lng: '-4.0203545',
            user: {
                _id: 1
            }
        },
        {
            name: 'Taxi compteur ford focus',
            price: '19500000',
            description: 'Ford focus année 2002 Essence Carroserie+moteur en oart état visite à jour.',
            lat: '5.3194153',
            lng: '-4.0203545',
            user: {
                _id: 1
            }
        }
       ].map((advert) => (
           insertAdvert(advert)
       ))
   }
});
