import React from "react";
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_page/home/Hero.jsx';

describe('Hero Component',()=>{
    test('render hero image',()=>{
        render(<Hero />);
        const heroImage = screen.getByAltText('HeroImg');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src','media/images/homeHero.png');
    });

    test('render Sign up button',()=>{
        render(<Hero />);
        const signupButton = screen.getByRole('button',{name:'Sign up now'});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass('btn');
    });
});