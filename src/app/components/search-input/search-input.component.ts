import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})

export class SearchInputComponent implements OnInit, OnDestroy, AfterViewInit {

  input$: Observable<string>;

  @Input() maxLength: number = 30; // TODO move to constants

  @ViewChild('searchInput') searchInput: ElementRef;
  @Output() valueChanged: EventEmitter<string> = new EventEmitter();

  searchFormControl = new FormControl('', []);
  subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.input$ = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((x: any) => x.currentTarget.value),
      debounceTime(500));

    this.subscription = this.input$.pipe(
      filter((value) => this.searchFormControl.valid))
      .subscribe(x => this.valueChanged.emit(x));

    if (this.maxLength) {
      this.searchFormControl.setValidators(Validators.maxLength(this.maxLength));
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
