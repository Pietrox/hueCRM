import {isPlatformBrowser} from '@angular/common';
import {Inject, Injectable, OnDestroy, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NB_DOCUMENT} from '@nebular/theme';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

@Injectable()
export class SeoService implements OnDestroy {
  
  private readonly destroy$ = new Subject<void>();
  private readonly dom: Document;
  private readonly isBrowser: boolean;
  private linkCanonical: HTMLLinkElement;
  
  constructor(
      private router: Router,
      @Inject(NB_DOCUMENT) document,
      @Inject(PLATFORM_ID) platformId,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.dom = document;
    
    if (this.isBrowser) {
      this.createCanonicalTag();
    }
  }
  
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  createCanonicalTag() {
    this.linkCanonical = this.dom.createElement('link');
    this.linkCanonical.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(this.linkCanonical);
    this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
  }
  
  trackCanonicalChanges() {
    if (!this.isBrowser) {
      return;
    }
    
    this.router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$),
        )
        .subscribe(() => {
          this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
        });
  }
  
  private getCanonicalUrl(): string {
    return this.dom.location.origin + this.dom.location.pathname;
  }
}
