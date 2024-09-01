const products = [
    {
        id: 0,
        titel: "McLaren P1™",
        price: 3499.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./img/42172.webp",
    },
    {
        id: 1,
        titel: "Mercedes-Benz G 500 PROFESSIONAL Line",
        price: 1949.95,
        stock: 99999,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 0,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 0,
        imgpath: "./images/img/prod2.webp",
    },
    {
        id: 2,
        titel: "NASA Apollo-månebil - LRV",
        price: 1699.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod3.webp",
    },
    {
        id: 3,
        titel: "Volvo FMX-lastbil og EC230 elektrisk gravemaskine",
        price: 1549.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod4.webp",
    },
    {
        id: 4,
        titel: "Porsche GT4 e-Performance-racerbil",
        price: 1329.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod5.webp",
    },
    {
        id: 5,
        titel: "Mercedes-AMG F1 W14 E Performance",
        price: 1699.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod6.webp",
    },
    {
        id: 6,
        titel: "Koenigsegg Jesko Absolut-hyperbil - grå",
        price: 469.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod7.webp",
    },
    {
        id: 7,
        titel: "Emirates Team New Zealand AC75-yacht",
        price: 1049.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod8.webp",
    },
    {
        id: 8,
        titel: "Koenigsegg Jesko Absolut-hyperbil - hvid",
        price: 469.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod9.webp",
    },
    {
        id: 9,
        titel: "Ferrari Daytona SP3",
        price: 3499.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod10.webp",
    },
    {
        id: 10,
        titel: "Lamborghini Sián FKP 37",
        price: 3499.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod11.webp",
    },
    {
        id: 11,
        titel: "Liebherr LR 13000 bæltekran",
        price: 5299.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod12.webp",
    },
    {
        id: 12,
        titel: "McLaren Formula 1™-racerbil",
        price: 1549.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod13.webp",
    },
    {
        id: 13,
        titel: "PEUGEOT 9X8 24H Le Mans Hybrid Hypercar",
        price: 1549.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod14.webp",
    },
    {
        id: 14,
        titel: "BMW M 1000 RR",
        price: 1899.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod15.webp",
    },
    {
        id: 15,
        titel: "Porsche 911 RSR",
        price: 1549.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod16.webp",
    },
    {
        id: 16,
        titel: "2022 Ford GT",
        price: 1099.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod17.webp",
    },
    {
        id: 17,
        titel: "Jorden og Månen i kredsløb",
        price: 699.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod18.webp",
    },
    {
        id: 18,
        titel: "Ferrari Daytona SP3: The Sense of Perfection",
        price: 549.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod19.webp",
    },
    {
        id: 19,
        titel: "Yamaha MT-10 SP",
        price: 1799.95,
        stock: 3,
        info: "",
        /* If you want offer the product as NEW */
        OfferNew: 1,
        /* If you want offer the product as EXCLUSIVE */
        OfferExclusive: 1,
        imgpath: "./images/img/prod20.webp",
    }
] 