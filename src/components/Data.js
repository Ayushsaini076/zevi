import { faker } from '@faker-js/faker';

const Data = [
    {
        id:'1',
        img:`${faker.image.urlLoremFlickr({category:'fashion',grayscale:'false'})}`,
        name:`${faker.commerce.productName()}`,
        price : `${faker.commerce.price()}`,
        nprice : `${faker.commerce.price()}`,
        rev : `${faker.number.int({min:'0',max:'1000'})}`,
        rating : `${faker.number.int({min:'1',max:'5'})}`,
    },
    {
        id:'2',
        img:`${faker.image.urlLoremFlickr({category:'fashion',grayscale:'false'})}`,
        name:`${faker.commerce.productName()}`,
        price : `${faker.commerce.price()}`,
        nprice : `${faker.commerce.price()}`,
        rev : `${faker.number.int({min:'0',max:'1000'})}`,
        rating : `${faker.number.int({min:'1',max:'5'})}`,
    },
    {
        id:'3',
        img:`${faker.image.urlLoremFlickr({category:'fashion',grayscale:'false'})}`,
        name:`${faker.commerce.productName()}`,
        price : `${faker.commerce.price()}`,
        nprice : `${faker.commerce.price()}`,
        rev : `${faker.number.int({min:'0',max:'1000'})}`,
        rating : `${faker.number.int({min:'1',max:'5'})}`,
    },
    {
        id:'4',
        img:`${faker.image.urlLoremFlickr({category:'fashion',grayscale:'false'})}`,
        name:`${faker.commerce.productName()}`,
        price : `${faker.commerce.price()}`,
        nprice : `${faker.commerce.price()}`,
        rev : `${faker.number.int({min:'0',max:'1000'})}`,
        rating : `${faker.number.int({min:'1',max:'5'})}`,
    },
    {
        id:'5',
        img:`${faker.image.urlLoremFlickr({category:'fashion',grayscale:'false'})}`,
        name:`${faker.commerce.productName()}`,
        price : `${faker.commerce.price()}`,
        nprice : `${faker.commerce.price()}`,
        rev : `${faker.number.int({min:'0',max:'1000'})}`,
        rating : `${faker.number.int({min:'1',max:'5'})}`,
    },
    {
        id:'6',
        img:`${faker.image.urlLoremFlickr({category:'fashion',grayscale:'false'})}`,
        name:`${faker.commerce.productName()}`,
        price : `${faker.commerce.price()}`,
        nprice : `${faker.commerce.price()}`,
        rev : `${faker.number.int({min:'0',max:'1000'})}`,
        rating : `${faker.number.int({min:'1',max:'5'})}`,
    },
    {
        id:'7',
        img:`${faker.image.urlLoremFlickr({category:'fashion',grayscale:'false'})}`,
        name:`${faker.commerce.productName()}`,
        price : `${faker.commerce.price()}`,
        nprice : `${faker.commerce.price()}`,
        rev : `${faker.number.int({min:'0',max:'1000'})}`,
        rating : `${faker.number.int({min:'1',max:'5'})}`,
    },

];

export default Data;