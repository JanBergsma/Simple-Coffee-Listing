import CoffeeCardList from '@/components/CoffeeCardList.vue'
import '../assets/main.css'

const coffeeList = [
  {
    id: 1,
    name: 'Cappuccino',
    image:
      'https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg',
    price: '$5.20',
    rating: 4.7,
    votes: 65,
    popular: true,
    available: true
  },
  {
    id: 2,
    name: 'House Coffee',
    image:
      'https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg',
    price: '$3.50',
    rating: 4.85,
    votes: 15,
    popular: true,
    available: true
  },
  {
    id: 3,
    name: 'Espresso',
    image:
      'https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/espresso.jpg',
    price: '$2.50',
    rating: 4.9,
    votes: 55,
    popular: false,
    available: true
  },
  {
    id: 4,
    name: 'Coffee Latte',
    image:
      'https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/coffee-latte.jpg',
    price: '$4.50',
    rating: 5.0,
    votes: 23,
    popular: false,
    available: true
  },
  {
    id: 5,
    name: 'Chocolate Coffee',
    image:
      'https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/chocolate-coffee.jpg',
    price: '$4.00',
    rating: '4.65',
    votes: 122,
    popular: false,
    available: false
  },
  {
    id: 6,
    name: 'Valentine Special',
    image:
      'https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/valentine-special.jpg',
    price: '$5.50',
    rating: null,
    votes: 0,
    popular: false,
    available: true
  }
]

export default {
  component: CoffeeCardList
}

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const CoffeeList = {
  render: (args) => ({
    components: { CoffeeCardList },
    setup() {
      return { args }
    },
    template: '<CoffeeCardList v-bind="args" />'
  }),
  args: {
    coffeeList: coffeeList,
    label: 'CoffeeCard'
  }
}
