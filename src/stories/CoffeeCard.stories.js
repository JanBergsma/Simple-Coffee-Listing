import CoffeeCard from '@/components/CoffeeCard.vue'
import '../assets/base.css'

const coffeeBlends = [
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
  component: CoffeeCard
}

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const CoffeeCardAvailablePopular = {
  render: (args) => ({
    components: { CoffeeCard },
    setup() {
      return { args }
    },
    template: '<CoffeeCard v-bind="args" />'
  }),
  args: {
    coffee: coffeeBlends[0]
  }
}

export const CoffeeCardAvailableNotPopular = {
  render: (args) => ({
    components: { CoffeeCard },
    setup() {
      return { args }
    },
    template: '<CoffeeCard v-bind="args" />'
  }),
  args: {
    coffee: coffeeBlends[1]
  }
}

export const CoffeeCardNotAvailableNotPopular = {
  render: (args) => ({
    components: { CoffeeCard },
    setup() {
      return { args }
    },
    template: '<CoffeeCard v-bind="args" />'
  }),
  args: {
    coffee: coffeeBlends[2]
  }
}

export const CoffeeCardAvailableNotPopularNoRating = {
  render: (args) => ({
    components: { CoffeeCard },
    setup() {
      return { args }
    },
    template: '<CoffeeCard v-bind="args" />'
  }),
  args: {
    coffee: coffeeBlends[3],
    label: 'CoffeeCard'
  }
}
