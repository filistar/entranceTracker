import './App.css';
import { useState } from 'react';

const locationsList = {
  dropdowns: [
    { name: 'Kakariko Well', checked: false,isPending: false },
    { name: 'Lost Woods', checked: false,isPending: false },
    { name: 'Lumberjack', checked: false,isPending: false },
    { name: 'Magic Bat', checked: false,isPending: false },
    { name: 'Sanctuary', checked: false,isPending: false },
    { name: 'Ganon', checked: false,isPending: false },
    { name: 'Uncle', checked: false,isPending: false },
    { name: 'Useless Fairy', checked: false,isPending: false }
  ],
  lightWorld: [
    { name: 'Aginah', checked: false,isPending: false },
    { name: 'Bonk Rocks', checked: false,isPending: false },
    { name: "Blind's Hideout", checked: false,isPending: false },
    { name: 'Cave 45', checked: false,isPending: false },
    { name: 'Checkerboard Cave', checked: false,isPending: false },
    { name: 'Chicken House', checked: false,isPending: false },
    { name: 'Dams', checked: false,isPending: false },
    { name: 'Graveyard Ledge', checked: false,isPending: false },
    { name: 'Ice Rod Cave', checked: false,isPending: false },
    { name: "King's Tomb", checked: false,isPending: false },
    { name: 'Library', checked: false,isPending: false },
    { name: 'Mimic Cave', checked: false,isPending: false },
    { name: 'Mini Moldorm Cave', checked: false,isPending: false },
    { name: 'Potion Shop', checked: false,isPending: false },
    { name: 'Sahasrahla', checked: false,isPending: false },
    { name: 'Sick Kid', checked: false,isPending: false },
    { name: 'Smith', checked: false,isPending: false },
    { name: 'Waterfall Fairy', checked: false,isPending: false }
  ],
  darkWorld: [
    { name: 'Bomb Shop', checked: false,isPending: false },
    { name: 'Brewery', checked: false,isPending: false },
    { name: 'C House', checked: false,isPending: false },
    { name: 'Chest Game', checked: false,isPending: false },
    { name: 'Hammer Pegs', checked: false,isPending: false },
    { name: 'Hype Cave', checked: false,isPending: false },
    { name: 'Mire Shed', checked: false,isPending: false },
    { name: 'Pyramid Fairy', checked: false,isPending: false },
    { name: 'Spike Cave', checked: false,isPending: false }
  ],
  connectors: [
    { name: 'Bumper Cave Top', checked: false,isPending: false },
    { name: 'Bumper Cave Bottom', checked: false,isPending: false },
    { name: 'Death Mountain Exit Front', checked: false,isPending: false },
    { name: 'Death Mountain Exit Back', checked: false,isPending: false },
    { name: 'Fairy Cave Top', checked: false,isPending: false },
    { name: 'Fairy Cave Bottom', checked: false,isPending: false },
    { name: 'Hookshot Cave Front', checked: false,isPending: false },
    { name: 'Hookshot Cave Back', checked: false,isPending: false },
    { name: 'Kakariko House Right', checked: false,isPending: false },
    { name: 'Kakariko House Left', checked: false,isPending: false },
    { name: 'Old Man Front', checked: false,isPending: false },
    { name: 'Old Man Back', checked: false,isPending: false },
    { name: 'Old Man Rescue Front', checked: false,isPending: false },
    { name: 'Old Man Rescue Back', checked: false,isPending: false },
    { name: 'Paradox Cave Top', checked: false,isPending: false },
    { name: 'Paradox Cave Middle', checked: false,isPending: false },
    { name: 'Paradox Cave Bottom', checked: false,isPending: false },
    { name: 'Race Game Right', checked: false,isPending: false },
    { name: 'Race Game Left', checked: false,isPending: false },
    { name: 'Spectacle Cave Top', checked: false,isPending: false },
    { name: 'Spectacle Cave Bottom', checked: false,isPending: false },
    { name: 'Spectacle Cave Middle', checked: false,isPending: false },
    { name: 'Spiral Cave Top', checked: false,isPending: false },
    { name: 'Spiral Cave Bottom', checked: false,isPending: false },
    { name: 'Super Bunny Top', checked: false,isPending: false },
    { name: 'Super Bunny Bottom', checked: false,isPending: false }
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

    selectedLocation.sort((a, b) => a.name.localeCompare(b.name))

    const buttons = selectedLocation.map((location, index) => {
      let buttonClass;
      
      buttonClass = location.checked ? checkedClass : uncheckedClass;

      if(location.isPending){
        buttonClass = 'locationPending'
      }
      return (
        <button
          key={location.name}
          onClick={(e) => {
            handleClick(e, locationType, index);
          }}
          onContextMenu={(e)=>{
            handleClick(e, locationType, index);
          }}
          className={buttonClass}
        >
          {location.name}
        </button>
      );
    });
    return buttons;
  };

  const handleClick = (e, locationType, index) => {
    if(e.type === 'click'){
      const updatedLocations = { ...locations };
      updatedLocations[locationType][index].checked = !updatedLocations[locationType][index].checked;
      if(updatedLocations[locationType][index].isPending) {
        updatedLocations[locationType][index] = {
          ...updatedLocations[locationType][index],
          isPending:false,
          checked:true
        }
      }
      setLocations(updatedLocations);
    }
    if(e.type==='contextmenu'){
      e.preventDefault();
      e.stopPropagation()
      const updatedLocations = { ...locations };
      updatedLocations[locationType][index].isPending = !updatedLocations[locationType][index].isPending;
      setLocations(updatedLocations);
    }
    
  };

  return (
    <div className="App" onContextMenu={e=> {e.preventDefault();}}>
      <div className="wrapper">
        {renderButtons(locationTypes.dropdowns, 'dropdownsChecked', 'dropdownsUnchecked')}
        {renderButtons(locationTypes.lightWorld, 'lightWorldChecked', 'lightWorldUnchecked')}
        {renderButtons(locationTypes.darkWorld, 'darkWorldChecked', 'darkWorldUnchecked')}
        {renderButtons(locationTypes.connectors, 'connectorsChecked', 'connectorsUnchecked')}
      </div>
    </div>
  );
}

export default App;
