import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './Card'; // Assuming Card.jsx is in the same directory

const projects = [
    {
        title: 'uShop',
        date: '2022-05-13',
        description: 'This is a simple e-commerce application that fetches data from an API and displays it on the page. The user can add and remove items from the cart, and the cart is saved in local storage. The user can also view the details of each item.',
        imageUrl: require('../../../media/projects/ushop-home.png'),
        githubUrl: 'https://github.com/siljeangelvik/react-ts-shopping-cart/tree/main',
        websiteUrl: 'https://react-ts-ecom-cart.netlify.app/',
        linkedInUrl: 'https://www.linkedin.com/in/siljeangelvik/'
    },
    {
        title: 'Asta',
        date: '2022-05-13',
        description: 'This is a web application for an auction house called Asta Auction. The application is built with JavaScript and TailwindCSS. The application is responsive and works well on mobile, tablet, and somewhat desktop. The application is built with a mobile-first approach.',
        imageUrl: require('../../../media/projects/asta-home.png'),
        githubUrl: 'https://github.com/siljeangelvik/semesterproject2',
        websiteUrl: 'https://silje-semesterproject2.netlify.app/',
        linkedInUrl: 'https://www.linkedin.com/in/siljeangelvik/'
    },
    {
        title: 'Holidaze',
        date: '2022-05-12',
        description: 'This project contains a single page application with a home(list of venues) page, a profile page and a detail page for each venue. The website is built with React, AntDesign, Sanity.io and Netlify.',
        imageUrl: require('../../../media/projects/holidaze-home.png'),
        githubUrl: 'https://github.com/siljeangelvik/react-antd-holidaze-exam',
        websiteUrl: 'https://exam-holidaze.netlify.app/',
        linkedInUrl: 'https://www.linkedin.com/in/siljeangelvik/'
    },
    {
        title: 'Nice Cream',
        date: '2022-05-13',
        description: 'The project is a web application for a fictional ice cream shop called Nice Cream. The web application is a single page application (SPA) that uses JavaScript to dynamically load content.',
        imageUrl: require('../../../media/projects/nicecream-home.png'),
        githubUrl: 'https://github.com/siljeangelvik/vite-project-ca-js2/tree/main',
        websiteUrl: 'https://vite-project-ca-js2.netlify.app/',
        linkedInUrl: 'https://www.linkedin.com/in/siljeangelvik/'
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
        color: '#888'
    },
});

export default Projects;