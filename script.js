const phrases = [
  `Let's try something.`,
  `I have to go to sleep.`,
  `Today is June 18th and it is Muiriel's birthday!`,
  `Muiriel is 20 now.`,
  `The password is "Muiriel".`,
  `I will be back soon.`,
  `I'm at a loss for words.`,
  `This is never going to end.`,
  `I just don't know what to say.`,
  `That was an evil bunny.`,
  `I was in the mountains.`,
  `Is it a recent picture?`,
  `I don't know if I have the time.`,
  `Education in this world disappoints me.`,
  `You're in better shape than I am.`,
  `You are in my way.`,
  `This will cost €30.`,
  `I make €100 a day.`,
  `I may give up soon and just nap instead.`,
  `It's because you don't want to be alone.`,
  `That won't happen.`,
  `Sometimes he can be a strange guy.`,
  `I'll do my best not to disturb your studying.`,
  `I can only wonder if this is the same for everyone else.`,
  `I suppose it's different when you think about it over the long term.`,
  `I miss you.`,
  `I'll call them tomorrow when I come back.`,
  `I always liked mysterious characters more.`,
  `You should sleep.`,
  `I'm going to go.`,
  `I told them to send me another ticket.`,
  `You're so impatient with me.`,
  `I can't live that kind of life.`,
  `I once wanted to be an astrophysicist.`,
  `I never liked biology.`,
  `The last person I told my idea to thought I was nuts.`,
  `If the world weren't in the shape it is now, I could trust anyone.`,
  `It is unfortunately true.`,
  `They are too busy fighting against each other to care for common ideals.`,
  `Most people think I'm crazy.`,
  `No I'm not; you are!`,
  `That's MY line!`,
  `He's kicking me!`,
  `Are you sure?`,
  `Then there is a problem...`,
  `Oh, there's a butterfly!`,
  `Hurry up.`,
  `It doesn't surprise me.`,
  `For some reason I feel more alive at night.`,
  `It depends on the context.`,
  `Are you freaking kidding me?!`,
  `That's the stupidest thing I've ever said.`,
  `I don't want to be lame; I want to be cool!!`,
  `When I grow up, I want to be a king.`,
  `America is a lovely place to be, if you are here to earn money.`,
  `I'm so fat.`,
  `So what?`,
  `I'm gonna shoot him.`,
  `I'm not a real fish, I'm just a mere plushy.`,
  `I'm just saying!`,
  `That was probably what influenced their decision.`,
  `I've always wondered what it'd be like to have siblings.`,
  `This is what I would have said.`,
  `It would take forever for me to explain everything.`,
  `That's because you're a girl.`,
  `Sometimes I can't help showing emotions.`,
  `It's a word I'd like to find a substitute for.`,
  `It would be something I'd have to program.`,
  `I don't intend to be selfish.`,
  `Let's consider the worst that could happen.`,
  `How many close friends do you have?`,
  `I may be antisocial, but it doesn't mean I don't talk to people.`,
  `This is always the way it has been.`,
  `I think it is best not to be impolite.`,
  `One can always find time.`,
  `I'd be unhappy, but I wouldn't kill myself.`,
  `Back in high school, I got up at 6 a.m. every morning.`,
  `When I woke up, I was sad.`,
  `That is somewhat explained at the end.`,
  `I thought you liked to learn new things.`,
  `Most people write about their daily life.`,
  `If I could send you a marshmallow, Trang, I would.`,
  `In order to do that, you have to take risks.`,
  `Every person who is alone is alone because they are afraid of others.`,
  `Why do you ask?`,
  `I am not an artist. I never had the knack for it.`,
  `I can't tell her now. It's not that simple anymore.`,
  `I am a flawed person, but these are flaws that can easily be fixed.`,
  `Whenever I find something I like, it's too expensive.`,
  `How long did you stay?`,
  `Maybe it will be exactly the same for him.`,
  `Innocence is a beautiful thing.`,
  `Humans were never meant to live forever.`,
  `I don't want to lose my ideas, even though some of them are a bit extreme.`,
  `I think I have a theory about that.`,
  `That is intriguing.`,
  `You are saying you intentionally hide your good looks?`,
  `I do not have an account in these forums.`,
  `If anyone was to ask what the point of the story is, I really don't know.`,
  `I didn't know where it came from.`,
];

const phraseList = document.querySelector('#phrase-list');
let searchInput = '';

let renderPhrases = () => {
  phraseList.textContent = '';
  return phrases
    .filter((phrase) => phrase.includes(searchInput))
    .map((phrase) => {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.textContent = phrase;
      tr.appendChild(td);
      phraseList.appendChild(tr);
    });
};

const handleSearchInput = (event) => {
  searchInput = event.target.value;
  renderPhrases();
};

const searchForPhrase = document.querySelector('#search-for-phrase');

searchForPhrase.addEventListener('keyup', handleSearchInput);

renderPhrases();
