import React from 'react';
import SimpleSlider from '../SimpleSlider';
import renderer from 'react-test-renderer';

jest.mock('react-slick', () => 'Slider');

const videos = [
    { id: 0, url: '', description: 'test', title: 'test' },
]

test('SimpleSlider render when no videos', () => {
    const component = renderer.create(
        <SimpleSlider videoData={[]}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('SimpleSlider render with videos', () => {
    const component = renderer.create(
        <SimpleSlider videoData={videos}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
