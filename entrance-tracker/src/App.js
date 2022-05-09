import './App.css';
import { useState } from 'react';

const locationsList = {
  dropdowns: [
    { name: 'Kakariko Well', checked: false },
    { name: 'Lost Woods', checked: false },
    { name: 'Lumberjack', checked: false },
    { name: 'Magic Bat', checked: false },
    { name: 'Sanctuary', checked: false },
    { name: 'Pyramid', checked: false },
    { name: 'Uncle', checked: false },
    { name: 'Useless Fairy', checked: false }
  ],
  lightWorld: [
    { name: 'Aginah', checked: false },
    { name: 'Bonk Rocks', checked: false },
    { name: "Blind's Hideout", checked: false },
    { name: 'Cave 45', checked: false },
    { name: 'Checkerboard Cave', checked: false },
    { name: 'Chicken House', checked: false },
    { name: 'Dams', checked: false },
    { name: 'Graveyard Ledge', checked: false },
    { name: 'Ice Rod Cave', checked: false },
    { name: "King's Tomb", checked: false },
    { name: 'Library', checked: false },
    { name: 'Mimic Cave', checked: false },
    { name: 'Mini Moldorm Cave', checked: false },
    { name: 'Potion Shop', checked: false },
    { name: 'Sahasrahla', checked: false },
    { name: 'Sick Kid', checked: false },
    { name: 'Smith', checked: false },
    { name: 'Specatcle Cave', checked: false },
    { name: 'Waterfall Fairy', checked: false }
  ],
  darkWorld: [
    { name: 'Brewery', checked: false },
    { name: 'Bomb Shop', checked: false },
    { name: 'C House', checked: false },
    { name: 'Chest Game', checked: false },
    { name: 'Hammer Pegs', checked: false },
    { name: 'Hype Cave', checked: false },
    { name: 'Mire Shed', checked: false },
    { name: 'Pyramid Fairy', checked: false },
    { name: 'Spike Cave', checked: false }
  ],
  connectors: [
    { name: 'Bumper Cave Top', checked: false },
    { name: 'Bumper Cave Bottom', checked: false },
    { name: 'Death Mountain Exit Front', checked: false },
    { name: 'Death Mountain Exit Back', checked: false },
    { name: 'Fairy Cave Top', checked: false },
    { name: 'Fairy Cave Bottom', checked: false },
    { name: 'Hookshot Cave Front', checked: false },
    { name: 'Hookshot Cave Back', checked: false },
    { name: 'Old Man Front', checked: false },
    { name: 'Old Man Back', checked: false },
    { name: 'Paradox Cave Top', checked: false },
    { name: 'Paradox Cave Middle', checked: false },
    { name: 'Paradox Cave Bottom', checked: false },
    { name: 'Spiral Cave Top', checked: false },
    { name: 'Spiral Cave Bottom', checked: false },
    { name: 'Supper Bunny Top', checked: false },
    { name: 'Supper Bunny Bottom', checked: false }
  ]
};

const locationTypes = {
  dropdowns: 'dropdowns',
  lightWorld: 'lightWorld',
  darkWorld: 'darkWorld',
  connectors: 'connectors'
};

function App() {
  const [locations, setLocations] = useState(locationsList);

  const renderButtons = (locationType, checkedClass, uncheckedClass) => {
    let selectedLocation;

    switch (locationType) {
      case locationTypes.dropdowns:
        selectedLocation = locations.dropdowns;
        break;
      case locationTypes.lightWorld:
        selectedLocation = locations.lightWorld;
        break;
      case locationTypes.darkWorld:
        selectedLocation = locations.darkWorld;
        break;
      case locationTypes.connectors:
        selectedLocation = locations.connectors;
        break;
      default:
        selectedLocation = locations.dropdowns;
    }
    const buttons = selectedLocation.map((location, index) => {
      return (
        <button
          key={location.name}
          onClick={() => {
            handleClick(locationType, index);
          }}
          className={location.checked ? checkedClass : uncheckedClass}>
          {location.name}
        </button>
      );
    });
    return buttons;
  };

  const handleClick = (locationType, index) => {
    const updatedLocations = { ...locations };
    updatedLocations[locationType][index].checked = !updatedLocations[locationType][index].checked;
    setLocations(updatedLocations);
  };

  return (
    <div className="App">
      <div className="wrapper">
        {renderButtons(locationTypes.dropdowns, 'dropdownsChecked', 'dropdownsUnchecked')}
        {renderButtons(locationTypes.lightWorld, 'lightWorldChecked', 'lightWorldUnchecked')}
        {renderButtons(locationTypes.darkWorld, 'darkWorldChecked', 'darkWorldUnchecked')}
        {renderButtons(locationTypes.connectors, 'connectorsChecked', 'connectorsUnchecked')}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
