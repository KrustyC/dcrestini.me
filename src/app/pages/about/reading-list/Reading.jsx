import React from 'react'
import Book from './Book'

const book = {
  title: 'Paradox: The Nine Greatest Enigmas in Physics',
  description: `The book analyzes 9 great enigmas in physics. All of them used to be considered
    paradoxes but thanks to the work and intelligence of some of the greatest
    physicists of history, they've all been solved. What I love about the books is
    that the author, Jim Al-Khalili, explains through the paradoxes some of the most
    important theories and law of physics.
    All of them are explained in such a way that they can be read and understood even by
    people who has almost no knowledge about physics.`,
  author: 'Jim Al-Khalili',
  url: 'https://www.amazon.it/Paradox-Nine-Greatest-Enigmas-Physics/dp/0552778060/ref=sr_1_1?ie=UTF8&qid=1528813513&sr=8-1&keywords=paradox+nine+greatest'
}

const Reading = () => (
  <div className="columns is-mobile is-centered">
    <div className="column is-half is-narrow">
      <div className="is-three-quarters">
        <Book book={book} />
      </div>
    </div>
  </div>
)

export default Reading
