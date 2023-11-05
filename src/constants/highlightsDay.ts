import { IHighlightsDay } from '@interfaces/highlightsDay'

import ImgBanana from '@assets/highlights_day/banana.png'
import ImgCocaCola from '@assets/highlights_day/coca-cola.png'
import ImgLeite from '@assets/highlights_day/leite.png'
import ImgNutela from '@assets/highlights_day/nutela.png'

export const HIGHLIGHTS_DAY: IHighlightsDay[] = [
    { id: '1', name: 'Banana da terra', image: ImgBanana, price: '3,70', weight: '170g p/kg' },
    { id: '2', name: 'Nutella', image: ImgNutela, price: '9,86', weight: '140g' },
    { id: '3', name: 'Leite Integral', image: ImgLeite, price: '7,46', weight: '1L' },
    { id: '4', name: 'Coca Cola Lata', image: ImgCocaCola, price: '3,99', weight: '300ml' },
]