import React from 'react';
import MovieCard from '../MovieCard';
import renderer from 'react-test-renderer';

test('MovieCard changes when hovered', () => {
  const component = renderer.create(
    <MovieCard title='Test' description='test' url='test' id='1'/>,
  );
  const instance = component.getInstance()
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  instance.getVideo = () => ({
    play: () => {}
  })
  
  tree.props.onMouseOver();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});