export type MenuCategory = 'starters' | 'mains' | 'desserts' | 'tasting' | 'drinks'

export type MenuItem = {
  id: string
  category: MenuCategory
  price: number
  featured?: boolean
  image: string
  pl: { name: string; desc: string }
  en: { name: string; desc: string }
}

export const menuItems: MenuItem[] = [
  {
    id: 't1',
    category: 'tasting',
    price: 320,
    featured: true,
    image: 'tasting',
    pl: {
      name: 'Menu degustacyjne — 7 dań',
      desc: 'Podróż przez sezon: kiszonki, ryba, dziczyzna, deser. Parowanie win +180 zł.',
    },
    en: {
      name: 'Tasting menu — 7 courses',
      desc: 'A seasonal journey: ferments, fish, game, dessert. Wine pairing +180 PLN.',
    },
  },
  {
    id: 't2',
    category: 'tasting',
    price: 210,
    image: 'tasting2',
    pl: {
      name: 'Menu skrócone — 4 dania',
      desc: 'Lżejsza forma wieczoru. Dostępne także w porze lunchu w piątki i soboty.',
    },
    en: {
      name: 'Short tasting — 4 courses',
      desc: 'A lighter evening. Also available at lunch on Fridays and Saturdays.',
    },
  },
  {
    id: 's1',
    category: 'starters',
    price: 48,
    featured: true,
    image: 'beet',
    pl: {
      name: 'Burak, żurawina, chrzan',
      desc: 'Pieczony burak, żurawina fermentowana, chrzanowy śnieg, olej z koperku.',
    },
    en: {
      name: 'Beetroot, cranberry, horseradish',
      desc: 'Roasted beet, fermented cranberry, horseradish snow, dill oil.',
    },
  },
  {
    id: 's2',
    category: 'starters',
    price: 62,
    image: 'tartare',
    pl: {
      name: 'Tatar z jelenia',
      desc: 'Jeleń z Bieszczad, jałowiec, żółtko, chips z żytniego chleba.',
    },
    en: {
      name: 'Venison tartare',
      desc: 'Bieszczady venison, juniper, yolk, rye-bread chips.',
    },
  },
  {
    id: 's3',
    category: 'starters',
    price: 54,
    image: 'herring',
    pl: {
      name: 'Śledź, jabłko, szczypior',
      desc: 'Śledź bałtycki, jabłko antonówka, emulsja szczypioru, kwiaty.',
    },
    en: {
      name: 'Herring, apple, chives',
      desc: 'Baltic herring, Antonówka apple, chive emulsion, petals.',
    },
  },
  {
    id: 's4',
    category: 'starters',
    price: 46,
    image: 'soup',
    pl: {
      name: 'Zupa grzybowa',
      desc: 'Bulion z suszonych prawdziwków, kasza gryczana, masło orzechowe.',
    },
    en: {
      name: 'Forest mushroom broth',
      desc: 'Dried porcini consommé, buckwheat, hazelnut butter.',
    },
  },
  {
    id: 'm1',
    category: 'mains',
    price: 98,
    featured: true,
    image: 'pike',
    pl: {
      name: 'Sandacz, masło ziołowe, koper',
      desc: 'Sandacz z Wisły, masło z koperku i lubczyku, młode warzywa.',
    },
    en: {
      name: 'Pike-perch, herb butter, dill',
      desc: 'Vistula pike-perch, dill and lovage butter, young vegetables.',
    },
  },
  {
    id: 'm2',
    category: 'mains',
    price: 128,
    image: 'duck',
    pl: {
      name: 'Kaczka, wiśnia, dziki czosnek',
      desc: 'Pierś kaczki, wiśnia kiszona, puree z pasternaku, dziki czosnek.',
    },
    en: {
      name: 'Duck, cherry, wild garlic',
      desc: 'Duck breast, pickled cherry, parsnip puree, wild garlic.',
    },
  },
  {
    id: 'm3',
    category: 'mains',
    price: 86,
    image: 'veg',
    pl: {
      name: 'Kluski śląskie, masło, szałwia',
      desc: 'Kluski, masło orzechowe, szałwia, wędzony twaróg, szczaw.',
    },
    en: {
      name: 'Silesian dumplings, butter, sage',
      desc: 'Dumplings, brown butter, sage, smoked curd, sorrel.',
    },
  },
  {
    id: 'm4',
    category: 'mains',
    price: 142,
    image: 'lamb',
    pl: {
      name: 'Jagnięcina, rozmaryn, czosnek',
      desc: 'Siodło jagnięce, rozmaryn, czosnek pieczony, sos z czerwonego wina.',
    },
    en: {
      name: 'Lamb, rosemary, garlic',
      desc: 'Lamb saddle, rosemary, roasted garlic, red-wine jus.',
    },
  },
  {
    id: 'd1',
    category: 'desserts',
    price: 42,
    featured: true,
    image: 'apple',
    pl: {
      name: 'Szarlotka, lód śmietankowy',
      desc: 'Antonówka, kruche ciasto, lód z wanilii bourbon, karmel.',
    },
    en: {
      name: 'Apple tart, cream ice',
      desc: 'Antonówka apple, shortcrust, bourbon-vanilla ice, caramel.',
    },
  },
  {
    id: 'd2',
    category: 'desserts',
    price: 38,
    image: 'chocolate',
    pl: {
      name: 'Czekolada, malina, miód',
      desc: 'Ganache 70%, malina fermentowana, miód spadziowy, sól.',
    },
    en: {
      name: 'Chocolate, raspberry, honey',
      desc: '70% ganache, fermented raspberry, honeydew honey, salt.',
    },
  },
  {
    id: 'd3',
    category: 'desserts',
    price: 36,
    image: 'cheesecake',
    pl: {
      name: 'Sernik, porzeczka',
      desc: 'Sernik na zimno, porzeczka, kruszonka gryczana.',
    },
    en: {
      name: 'Cheesecake, currant',
      desc: 'Chilled cheesecake, currant, buckwheat crumble.',
    },
  },
  {
    id: 'r1',
    category: 'drinks',
    price: 38,
    image: 'spritz',
    pl: {
      name: 'BRZOZA Spritz',
      desc: 'Wino musujące, nalewka z pigwy, soda, tymianek.',
    },
    en: {
      name: 'BRZOZA Spritz',
      desc: 'Sparkling wine, quince cordial, soda, thyme.',
    },
  },
  {
    id: 'r2',
    category: 'drinks',
    price: 32,
    image: 'liqueur',
    pl: {
      name: 'Nalewka z aronii',
      desc: 'Domowa nalewka, lód, skórka pomarańczy.',
    },
    en: {
      name: 'Aronia liqueur',
      desc: 'House aronia liqueur, ice, orange zest.',
    },
  },
  {
    id: 'r3',
    category: 'drinks',
    price: 18,
    image: 'kombucha',
    pl: {
      name: 'Kombucha z lipy',
      desc: 'Ferment lipowy, miód, cytryna.',
    },
    en: {
      name: 'Linden kombucha',
      desc: 'Linden ferment, honey, lemon.',
    },
  },
]

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Mokotowska+48+Warsaw'
export const INSTAGRAM_URL = 'https://www.instagram.com/'
export const FACEBOOK_URL = 'https://www.facebook.com/'
