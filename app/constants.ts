type ConstantsType = {
    WIP: boolean
    HEADER_TITLE: string
    WIP_DESCRIPTION: string
    SOLDOUT_DESCRIPTION: string
    OFFER_INFO: {
        OFFER_ACTIVE: boolean
        ITEM: string
        ITEM_DESC: string
        REG_PRICE: string
        SALE_PRICE: string
        SOLD_OUT: boolean
     
    }
}

export const APP_CONSTANTS: ConstantsType = {
    WIP: true,
    HEADER_TITLE: ' Coffee Giveaway ',
    WIP_DESCRIPTION: 'Order your FREE coffee at UC Village today!',
    SOLDOUT_DESCRIPTION: 'Sorry! We SOLD OUT for today. Come Back tomorrow',
    OFFER_INFO: {
        OFFER_ACTIVE: true,
        ITEM: 'Calpresso',
        ITEM_DESC: `Just a fancy name for freshly brewed coffee with an Aeropress.`,
        REG_PRICE: '$1.99',
        SALE_PRICE: 'only 1 cup left!',
        SOLD_OUT: false
    }
}

const customers = [
    {
        name: 'Sara/Andreas',
        number: '3413338496'
    },
    {
        name: 'tbd',
        number: '7144253992'
    }, {
        name: 'Aditya',
        number: '5105705498'
    }
]