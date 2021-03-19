import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardsProvider from './CardsProvider';
import CardList from './CardList';
import NewCard from './NewCard';
import Card from './Card';
import EditCard from './EditCard';

export default function Board() {
  return (
    <CardsProvider>
      <Router>
        <div className="board-container">
          <Switch>
            <Route path="/posts/:id([0-9]+)?/edit" component={EditCard} />
            <Route path="/posts/new" component={NewCard} />
            <Route path="/posts/:id([0-9]+)?" component={Card} />
            <Route path="/" component={CardList} />
          </Switch>
        </div>
      </Router>
    </CardsProvider>
  )
}
