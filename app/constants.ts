type ConstantsType = {
    WIP: boolean
    HEADER_TITLE: string
    WIP_DESCRIPTION: string
    SOLDOUT_DESCRIPTION: string
    OFFER_INFO: {
        OFFER_ACTIVE: boolean
        OFFER_ITEM: string
        OFFER_ITEM_DESCRIPTION: string
        OFFER_REG_PRICE: string
        OFFER_SALE_PRICE: string
        OFFER_SOLD_OUT: boolean
     
    }
}

export const APP_CONSTANTS: ConstantsType = {
    WIP: true,
    HEADER_TITLE: ' Coffee Giveaway ',
    WIP_DESCRIPTION: 'Claim your FREE coffee Now!',
    SOLDOUT_DESCRIPTION: 'Sorry! We SOLD OUT for today. Come Back tomorrow',    
    OFFER_INFO: {
        OFFER_ACTIVE: true, // Offer should be active only when WIP is true, else it is meaningless
        OFFER_ITEM: 'Calpresso',
        OFFER_ITEM_DESCRIPTION: `A fancy name for freshly brewed coffee in an Aeropress.`,
        OFFER_REG_PRICE: '$3.99',
        OFFER_SALE_PRICE: '$1.99',
        OFFER_SOLD_OUT: false // If sold out is false it displays the numofcups left from the DB (/offer-items call)
    }
}

const customers = [
    {
        name: 'Sara/Andreas',
        number: '3413338496',
        comments: 'UC village'
    },
    {
        name: 'tbd',
        number: '7144253992',
        comments: 'UC village'
    }, {
        name: 'Aditya',
        number: '5105705498',
        comments: 'UC village'
    }
]