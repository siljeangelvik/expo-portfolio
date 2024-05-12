import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './Card'; // Assuming Card.jsx is in the same directory

const projects = [
    {
        title: 'Holidaze',
        date: '2022-05-12',
        description: 'This project contains a single page application with a home(list of venues) page, a profile page and a detail page for each venue. The website is built with React, AntDesign, Sanity.io and Netlify.',
        imageUrl: require('../../../media/projects/holidaze-home.png'),
        githubUrl: 'https://github.com/siljeangelvik/react-antd-holidaze-exam',
        websiteUrl: 'https://exam-holidaze.netlify.app/',
    },
    {
        title: 'uShop',
        date: '2022-05-13',
        description: 'This is a simple e-commerce application that fetches data from an API and displays it on the page. The user can add and remove items from the cart, and the cart is saved in local storage. The user can also view the details of each item.',
        imageUrl: require('../../../media/projects/ushop-home.png'),
        githubUrl: 'https://github.com/siljeangelvik/react-ts-shopping-cart/tree/main',
        websiteUrl: 'https://react-ts-ecom-cart.netlify.app/',
    },
    {
        title: 'uShop',
        date: '2022-05-13',
        description: 'This is a simple e-commerce application that fetches data from an API and displays it on the page. The user can add and remove items from the cart, and the cart is saved in local storage. The user can also view the details of each item.',
        imageUrl: require('../../../media/projects/ushop-home.png'),
        githubUrl: 'https://github.com/siljeangelvik/react-ts-shopping-cart/tree/main',
        websiteUrl: 'https://react-ts-ecom-cart.netlify.app/',
    },
    {
        title: 'uShop',
        date: '2022-05-13',
        description: 'This is a simple e-commerce application that fetches data from an API and displays it on the page. The user can add and remove items from the cart, and the cart is saved in local storage. The user can also view the details of each item.',
        imageUrl: require('../../../media/projects/ushop-home.png'),
        githubUrl: 'https://github.com/siljeangelvik/react-ts-shopping-cart/tree/main',
        websiteUrl: 'https://react-ts-ecom-cart.netlify.app/',
    },
    {
        title: 'uShop',
        date: '2022-05-13',
        description: 'This is a simple e-commerce application that fetches data from an API and displays it on the page. The user can add and remove items from the cart, and the cart is saved in local storage. The user can also view the details of each item.',
        imageUrl: require('../../../media/projects/ushop-home.png'),
        githubUrl: 'https://github.com/siljeangelvik/react-ts-shopping-cart/tree/main',
        websiteUrl: 'https://react-ts-ecom-cart.netlify.app/',
    },
    {
        title: 'uShop',
        date: '2022-05-13',
        description: 'This is a simple e-commerce application that fetches data from an API and displays it on the page. The user can add and remove items from the cart, and the cart is saved in local storage. The user can also view the details of each item.',
        imageUrl: require('../../../media/projects/ushop-home.png'),
        githubUrl: 'https://github.com/siljeangelvik/react-ts-shopping-cart/tree/main',
        websiteUrl: 'https://react-ts-ecom-cart.netlify.app/',
    },
];

const Projects = () => {
    return (
        <View style={styles.container}>
            {projects.map((project, index) => (
                <Card key={index} project={project}/>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingEnd: 16,
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
});

export default Projects;
