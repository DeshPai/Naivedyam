
export const sample_foods: any[] = [
    {
      id:'1',
      name: 'Pizza Pepperoni',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      stars: 4.5,
      imageUrl: 'assets/food-1.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },
    {
      id:'2',
      name: 'Meatball',
      price: 20,
      cookTime: '20-30',
      favorite: true,
      origins: ['persia', 'middle east', 'china'],
      stars: 4.7,
      imageUrl: 'assets/food-2.jpg',
      tags: ['SlowFood', 'Lunch'],
    },
    {
      id:'3',
      name: 'Hamburger',
      price: 5,
      cookTime: '10-15',
      favorite: false,
      origins: ['germany', 'us'],
      stars: 3.5,
      imageUrl: 'assets/food-3.jpg',
      tags: ['FastFood', 'Burger'],
    },
    {
      id:'4',
      name: 'Fried Potatoes',
      price: 2,
      cookTime: '15-20',
      favorite: true,
      origins: ['belgium', 'france'],
      stars: 3.3,
      imageUrl: 'assets/food-4.jpg',
      tags: ['FastFood', 'Fry'],
    },
    {
      id:'5',
      name: 'Chicken Soup',
      price: 11,
      cookTime: '40-50',
      favorite: false,
      origins: ['india', 'asia'],
      stars: 3.0,
      imageUrl: 'assets/food-5.jpg',
      tags: ['SlowFood', 'Soup'],
    },
    {
      id:'6',
      name: 'Vegetables Pizza',
      price: 9,
      cookTime: '40-50',
      favorite: false,
      origins: ['italy'],
      stars: 4.0,
      imageUrl: 'assets/food-6.jpg',
      tags: ['FastFood', 'Pizza', 'Lunch'],
    },
  // new images added 
  {
    id: '7',
    price: 8,
    name: 'Veg Sweet Corn Soup',
    favorite: false,
    stars: 3.5,
    tags: ['Soup'],
    imageUrl: 'assets/Img6.jpg',
    cookTime: 10,
    origins: ['India']
},
{
  id: '8',
  price: 10,
  name: 'Mutton Shezwan Soup',
  favorite: false,
  stars: 3,
  tags: ['Soup'],
  imageUrl: 'assets/Img7.jpg',
  cookTime: 10,
  origins: ['India', 'US']
},
{
  id:' 9',
  price: 20,
  name: 'Paneer Butter Masala',
  favorite: true,
  stars: 5,
  tags: [ 'FastFood','Lunch'],
  imageUrl: 'assets/Img9.jpg',
  cookTime: 25,
  origins: ['India']
},
{
  id: '10',
  price: 20,
  name: 'Chicken Dopyaza Masala',
  favorite: true,
  stars: 5,
  tags: [ 'Lunch'],
  imageUrl: 'assets/Img10.jpg',
  cookTime: 30,
  origins: ['India']
},
{
  id: '11',
  price: 15,
  name: 'Fried rice',
  favorite: true,
  stars: 3.5,
  tags: ['FastFood','Lunch'],
  imageUrl: 'assets/Img11.jpg',
  cookTime: 20,
  origins: ['India']
},
{
  id: '12',
  price: 30,
  name: 'Chicken Tandoor',
  favorite: true,
  stars: 5,
  tags: ['Tandoor'],
  imageUrl: 'assets/Img17.jpg',
  cookTime: 30,
  origins: ['India', 'Japan']
},
{
  id: '13',
  price: 40,
  name: 'Meatballs With Garlic Sauce sprinkle with Curryleaves ',
  favorite: true,
  stars: 4,
  tags: ['FastFood','Lunch'],
  imageUrl: 'assets/MeatB-Garlic.jpg',
  cookTime: 25,
  origins: ['India','Italy']
},
{
  id: '14',
  price: 40,
  name: 'Fruit Custerd Sugar Free ',
  favorite: true,
  stars: 4,
  tags: ['Desert & Sweets & Ice-Creams'],
  imageUrl: 'assets/custerd1.jpg',
  cookTime: 15,
  origins: ['India']
},
{
  id: '15',
  price: 40,
  name: 'Mix Fruit Custerd ',
  favorite: true,
  stars: 4,
  tags: ['Desert & Sweets & Ice-Creams'],
  imageUrl: 'assets/custerd3.jpg',
  cookTime: 15,
  origins: ['India']
},
{
  id: '16',
  price: 40,
  name: 'Flavored Ice Creams ',
  favorite: true,
  stars: 4,
  tags: ['Desert & Sweets & Ice-Creams'],
  imageUrl: 'assets/desert1.jpeg',
  cookTime: 10,
  origins: ['India']
},
{
  id: '17',
  price: 40,
  name: 'IceCream With Jelly And Straberry',
  favorite: true,
  stars: 4,
  tags: ['Desert & Sweets & Ice-Creams'],
  imageUrl: 'assets/desert2.jpeg',
  cookTime: 15,
  origins: ['India']
},   {
  id: '18',
  price: 40,
  name: ' Sitaphal IceCream ',
  favorite: true,
  stars:5,
  tags: ['Desert & Sweets & Ice-Creams'],
  imageUrl: 'assets/desert4.jpeg',
  cookTime: 15,
  origins: ['India']
}

  ];

  export const sample_tags:any[] = [
    { name: 'All', count: 18 },
    { name: 'FastFood', count: 4 },
    { name: 'Pizza', count: 2 },
    { name: 'Lunch', count: 7 },
    { name: 'SlowFood', count: 2 },
    { name: 'Burger', count: 1 },
    { name: 'Fry', count: 1 },
    { name: 'Soup', count: 3 },
    { name: 'Desert & Sweets & Ice-Creams', count: 4 },
  ];

  export const sample_users: any[] = [
    {
      name: "John Doe",
      email: "john@gmail.com",
      password: "12345",
      address: "Toronto On",
      isAdmin: true,
    },
    {
      name: "Jane Doe",
      email: "jane@gmail.com",
      password: "12345",
      address: "Shanghai",
      isAdmin: false,
    },
    {
      name: "Desh Pai",
      email: "desh@gmail.com",
      password: "12345",
      address: "Goa,India",
      isAdmin: false,
    },
  ];