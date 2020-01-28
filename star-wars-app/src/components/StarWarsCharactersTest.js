import React from "react";
import { wait, render, fireEvent, findByText } from '@testing-library/react';
import { getData } from '../api';
import App from '../App';
import StarWarsCharacters from './StarWarsCharacters';
import { act } from "react-dom/test-utils";

jest.mock('../api');

test('render App ', () => {
    render(<App/>);
});
// Renders te App comp. 
test('renders previous button', ()=> {
    const { queryByText } = render(<StarWarsCharacters/>);
    const previousButton = queryByText(/previous/i)
    const nextButton = queryByText(/next/i)
    act(()=> {
        fireEvent.click(previousButton, nextButton)
    })
    findByText(/success/i)
    
    // act(()=> {
    //     fireEvent.click(previousButton);
    // fireEvent.click(nextButton)
    // })
})
// Check to see if it render prev button
test('renders success text', ()=> {
    const { getByText, findByText } = render(<StarWarsCharacters/>);
   act(()=> {
       fireEvent.click(getByText('Previous'))
   })
findByText(/success/i)
})
//checks to see if 'Previous' was clicked.   



const startData = { next: 'ABCD', previous: 'ABCD', results: [{
    name: 'Luke Skywalker'
}]
 }

test('renders Character List', async ()=> {
    mockGetData.mockResolvedValueOnce(startData)
    const { getByText } = render(<StarWarsCharacters/>)
    expect(mockGetData).toHaveBeenCalledTimes(1)
    expect(mockGetData).toHaveBeenCalledWith('https://swapi.co/api/people')
await wait(()=> expect(getByText(/Luke Skywalker/i)))
})
// test('renders Character List', async ()=> {
//     mockGetData.mockResolvedValueOnce(startData)
// Gets orig. obj to stat test. 
//     const { getByText } = render(<StarWarsCharacters/>)
//     expect(mockGetData).toHaveBeenCalledTimes(1)
//     expect(mockGetData).toHaveBeenCalledWith('https://swapi.co/api/people')
// await wait(()=> expect(getByText(/Luke Skywalker/i)))
// Checking to see if there is text returned as the " " ;
// })

test('renders success text', ()=> {
    const { getByText, findByText, render } = render(<App/>)
    act(()=>{
        fireEvent.click(getByText("Next"));
        findByText(/success/i)
    })
} )


