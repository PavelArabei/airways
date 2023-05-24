import { createAction, props } from '@ngrx/store';
import {
  AirportsRes,
  FlightLoadInformation,
  IDate,
} from '@redux/models/main-page.models';

// const PassengersCount = createAction(
//   '[MAIN PAGE] Passengers count',
//   props<PassengersCount>()
// );

const IsRoundTrip = createAction(
  '[MAIN PAGE] Is round trip',
  props<{ isRoundTrip: boolean }>()
);

const LoadAirports = createAction('[MAIN PAGE] Load Airports');

const LoadAirportsSuccess = createAction(
  '[MAIN PAGE] Load Airports Success',
  props<{ airports: AirportsRes[] }>()
);

const LoadAirportsError = createAction(
  '[MAIN PAGE] Load Airports Error',
  props<{ error: string }>()
);

const FlightForward = createAction(
  '[MAIN PAGE] Flight forward',
  props<IDate>()
);

const FlightBack = createAction('[MAIN PAGE] Flight back', props<IDate>());

const AirportForward = createAction(
  '[MAIN PAGE] Airport forward',
  props<{ airport: AirportsRes | null }>()
);

const AirportBack = createAction(
  '[MAIN PAGE] Airport back',
  props<{ airport: AirportsRes | null }>()
);

const LoadAvailableFlights = createAction(
  '[MAIN PAGE] Load available flights',
  props<FlightLoadInformation>()
);

const LoadAvailableFlightsError = createAction(
  '[MAIN PAGE] Load available flights Error',
  props<{ error: string }>()
);

const ChangeIsShownValue = createAction(
  '[MAIN PAGE] Change is shown value',
  props<{ IsShownMainPage: boolean }>()
);

export const MainPageActions = {
  // PassengersCount,
  LoadAirports,
  LoadAirportsSuccess,
  LoadAirportsError,
  FlightForward,
  FlightBack,
  AirportForward,
  AirportBack,
  IsRoundTrip,
  LoadAvailableFlights,
  LoadAvailableFlightsError,
  ChangeIsShownValue,
};
