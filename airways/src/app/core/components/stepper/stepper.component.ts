import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CurrentPageDirection } from '@redux/models/state.models';
import { Observable, Subscription } from 'rxjs';
import { BookingSelectors } from '@redux/selectors/booking-page.selectors';
import { BookingActions } from '@redux/actions/booking-page.actions';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnDestroy {
  public page$: Observable<CurrentPageDirection> = this.store.select(
    BookingSelectors.currentPageDirectionSelector
  );

  private flights$ = this.store.select(BookingSelectors.flightsSelector);
  private passengerInfo$ = this.store.select(
    BookingSelectors.passengersInfoSelector
  );
  private flightsSub!: Subscription;
  private passengersSub!: Subscription;

  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this.fb.group({
    thirdCtrl: ['', Validators.required],
  });

  constructor(private store: Store, private fb: FormBuilder) {
    this.addSubscription();
  }

  ngOnDestroy(): void {
    this.flightsSub.unsubscribe();
    this.passengersSub.unsubscribe();
  }

  public changePageDirection(index: number) {
    if (index === 0) this.store.dispatch(BookingActions.OnFlightSubPage());
    if (index === 1) this.store.dispatch(BookingActions.OnPassengersSubPage());
    if (index === 2) this.store.dispatch(BookingActions.OnReviewSubPage());
  }

  public changePageNameToIndex(page: string) {
    if (page === 'flight') return 0;
    if (page === 'passengers') return 1;
    return 2;
  }

  private addSubscription() {
    const firstCtrl = this.firstFormGroup.controls.firstCtrl;
    const secondCtrl = this.secondFormGroup.controls.secondCtrl;
    this.flightsSub = this.flights$.subscribe((flights) => {
      if (flights !== null) firstCtrl.setValue('true');
      else firstCtrl.setValue('');
    });
    this.passengersSub = this.passengerInfo$.subscribe((passengers) => {
      if (passengers !== null) secondCtrl.setValue('true');
      else secondCtrl.setValue('');
    });
  }
}
