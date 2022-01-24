import { Meteor } from 'meteor/meteor';
import { AdvertsCollection }  from '../imports/api/AdvertsCollection';

const insertAdvert = advert => AdvertsCollection.insert({
    name: advert.name,
    price: advert.price,
    description: advert.description,
    createdAt: new Date(),
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
           }
       ].map((advert) => (
           insertAdvert(advert)
       ))
   }
});
