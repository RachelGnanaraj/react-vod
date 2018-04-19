import React from 'react';
import MovieCard from '../MovieCard';
import renderer from 'react-test-renderer';

describe('MovieCard', () => {
    test('onMouseOver change state and run video', () => {
        const component = renderer.create(
          <MovieCard title='Test' description='test' url='test' id='1'/>,
        );

        const playMock = jest.fn();

        const instance = component.getInstance()
        instance.getVideo = () => ({
            play: playMock
          })
          
        instance.onMouseOver();

        expect(instance.state.hover).toEqual(true);
        expect(playMock.mock.calls.length).toBe(1);
    });

    test('onMouseLeave change state and pause video', () => {
        const component = renderer.create(
          <MovieCard title='Test' description='test' url='test' id='1'/>,
        );

        const pauseMock = jest.fn();

        const instance = component.getInstance()
        instance.getVideo = () => ({
            pause: pauseMock
          })
          
        instance.onMouseLeave();

        expect(instance.state.hover).toEqual(false);
        expect(pauseMock.mock.calls.length).toBe(1);
    });
})