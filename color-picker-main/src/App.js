import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Palette from './Palette';
import PaletteList from './PaletteList'
import { generatePalette } from './colorHelpers'
import seedColors from './seedColors'

function App() {

   function findPalette(id) {
    return seedColors.find(function(palette){
      return palette.id === id
    })
  }
  return (
    <Switch>
          <Route exact path="/" render={() => <PaletteList palettes={seedColors} />} />
          <Route exact path="/palette/:id" render={ routeProps => <Palette
           palette={generatePalette(findPalette(routeProps.match.params.id))}
           /> } />
    </Switch>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}

export default App;
