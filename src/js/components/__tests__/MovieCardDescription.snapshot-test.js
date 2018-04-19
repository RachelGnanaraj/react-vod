import React from 'react';
import MovieCardDescription from '../MovieCardDescription';
import renderer from 'react-test-renderer';

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

test('MovieCardDescription render full text when hovered', () => {
    const component = renderer.create(
        <MovieCardDescription description={longText} expanded={true}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('MovieCardDescription slice text when not hovered', () => {
    const component = renderer.create(
        <MovieCardDescription description={longText} expanded={false}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});