import { FC } from 'react'

const EVENTS = [
  {
    date: 'February 27, 2021',
    text: 'Chris was driving into downtown Denver, leaving his Missouri home after the end of a 7-year relationship. That same weekend, Karla (“Morkie”)* was sitting in her apartment in Englewood, writing a song about her own breakup the week prior.',
  },
  {
    date: 'March 15, 2021',
    text: 'Chris and Karla saw each other’s profiles on Hinge. Chris, a serial long-term monagamist, had just joined Hinge that day and instantly swiped right on Karla’s meticulous, perfectly-curated dating profile.\n\nKarla, whose longest relationship was two months and had gone on 42 first dates via dating apps, was not at all impressed with Chris’s profile which looked like he had quickly wrote it while he was on the toilet (he did) and would have normally swiped left. But she was feeling a little adventurous that day.\n\nChris and Karla matched at 2:27pm and texted the rest of the day, exchanging playlists of their favorite songs and sharing thoughts on each other’s music (which was the first hint to Karla that this kind, attentive guy might be the one).',
  },
  {
    date: 'March 17, 2021',
    text: 'Chris and Karla had their first virtual (re: pandemic) date, making a buddha bowl together over Zoom.',
  },
  {
    date: 'March 18, 2021',
    text: 'Chris looked through Karla’s Instagram and discovered the song she had written about her breakup. He listened to it on repeat, amazed at her emotional strength, and started falling in love with her.',
  },
  {
    date: 'March 19, 2021',
    text: 'Chris and Karla went on their first in-person date—walking around downtown Littleton and getting dinner at The Viewhouse, which turned into their first kiss, which turned into going back to Karla’s place and talking all night until 5am.',
  },
  {
    date: 'March 21, 2021',
    text: 'Chris and Karla said “I love you” for the first time.',
  },
  {
    date: 'April 3, 2021',
    text: 'In pure and drastic all-or-nothing fashion, Karla and her cat Zora moved in with Chris and his dog Dora (rhyming of pet names was not planned) in Chris’s 13th-floor apartment in downtown Denver.',
  },
  {
    date: 'March 18, 2022',
    text: 'Chris and Karla moved into their first house together in Colorado Springs.',
  },
  {
    date: 'July 13, 2022',
    text: 'Chris spoke with Karla’s parents and received their (ecstatic) blessing to marry her.',
  },
  {
    date: 'August 6, 2022',
    text: 'Chris and Karla got caught in a storm while paddleboarding at Rampart Reservoir. Chris believed it was too magical a moment to not propose, so he spontaneously picked up a pinecone (he had left the ring at home) and asked Karla to marry him—to which she, of course, said yes.',
  },
]

const OurStory: FC = () => (
  <div>
    <h2>Our Story</h2>
    <div>
      {EVENTS.map(({ date, text }, index) => (
        <div key={date} className={`${index % 2 ? 'left-0' : 'left-1/2'}`}>
          <div>
            <h3>{date}</h3>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default OurStory
