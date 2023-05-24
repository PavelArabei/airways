import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Order } from '@redux/models/basket.models';
import { BasketSelectors } from '@redux/selectors/basket.selectors';
import { BaskedActions } from '@redux/actions/bascet.actions';
import { CurrencyType } from '@redux/models/settings.models';
import { SettingsSelectors } from '@redux/selectors/settings.selectors';
import { Router } from '@angular/router';
import {
  SortOrdersSettings,
  SortSettings,
} from '@shopping/pipes/sort-orders.pipe';
import { BookingActions } from '@redux/actions/booking-page.actions';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCardComponent implements OnInit, OnDestroy {
  public totalPrice$: Observable<number> = this.store.select(
    BasketSelectors.TotalPrice
  );

  public currency$: Observable<CurrencyType> = this.store.select(
    SettingsSelectors.CurrencySelector
  );

  public sortType$: Observable<SortSettings> = this.store.select(
    BasketSelectors.Sort
  );

  private orderSubscription!: Subscription;
  private sortSubscription!: Subscription;

  public orders!: Order[];

  public promoCode = '';

  public smallPage = false;

  public sortHelper = false;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.getOrders();
    this.onResize();
    this.getSortSubscription();
  }

  ngOnDestroy(): void {
    this.orderSubscription.unsubscribe();
    this.sortSubscription.unsubscribe();
  }

  @HostListener('window:resize')
  onResize() {
    const width = window.innerWidth;
    if (width > 1100 && this.smallPage) this.smallPage = false;
    else if (width <= 1100 && !this.smallPage) this.smallPage = true;
  }

  public get ordersChecked(): number {
    return this.orders.reduce((acc, el) => {
      if (el.isChecked) acc += 1;
      return acc;
    }, 0);
  }

  public activatePromoCode() {
    this.store.dispatch(BaskedActions.PromoCode({ code: this.promoCode }));
    this.promoCode = '';
  }

  public addNewTrip() {
    this.store.dispatch(BookingActions.ClearBookingPageState());
    this.router.navigate(['/main']);
  }

  private getOrders(): void {
    const orders$: Observable<Order[]> = this.store.select(
      BasketSelectors.Orders
    );
    this.orderSubscription = orders$.subscribe((orders: Order[]) => {
      this.sortHelper = false;
      this.orders = orders;
    });
  }

  sortOrders(sortType: SortOrdersSettings) {
    this.store.dispatch(BaskedActions.SortAction({ sortType }));
  }

  private getSortSubscription() {
    this.sortSubscription = this.sortType$.subscribe(() => {
      this.sortHelper = true;
    });
  }

  payForOrders() {
    this.store.dispatch(BaskedActions.Pay());
  }
}
