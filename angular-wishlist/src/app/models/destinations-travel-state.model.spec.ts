import {
  reducerDestinationsTravel,
  DestinationsTravelState,
  initializeDestinationsTravelState,
  InitMyDataAction,
  NewDestinyAction
} from './destinations-travel-state.model';
import { DestinyTravel } from './destiny-travel.model';

describe('reducerDestinationsTravel', () => {
  it('should reduce init data', () => {
    const prevState: DestinationsTravelState = initializeDestinationsTravelState();
    const action: InitMyDataAction = new InitMyDataAction(['destination 1', 'destination 2']);
    const newState: DestinationsTravelState = reducerDestinationsTravel(prevState, action);
    expect(newState.items.length).toEqual(2);
    expect(newState.items[0].name).toEqual('destination 1');
  });

  it('should reduce new item added', () => {
    const prevState: DestinationsTravelState = initializeDestinationsTravelState();
    const action: NewDestinyAction = new NewDestinyAction(new DestinyTravel('barcelona', 'url'));
    const newState: DestinationsTravelState = reducerDestinationsTravel(prevState, action);
    expect(newState.items.length).toEqual(1);
    expect(newState.items[0].name).toEqual('barcelona');
  });
});
