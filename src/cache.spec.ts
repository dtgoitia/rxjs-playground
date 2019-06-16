import { TestScheduler } from 'rxjs/testing';
import { RunHelpers } from 'rxjs/internal/testing/TestScheduler';
import { exhaustMap, mergeMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

describe('Cache', (): void => {
  describe('when the cache service is poked multiple times', (): void => {
    let scheduler: TestScheduler;
  
    beforeEach((): void => {
      scheduler = new TestScheduler((actual: unknown, expected: unknown): void => {
        expect(actual).toEqual(expected);
      });
    });

    it('emit again only when the inner observable has completed', (): void => {
      scheduler.run((helpers: RunHelpers): void => {
        const { cold, hot, expectObservable } = helpers;
  
        const values = {
          x: 'poke event',
          a: 'request started',
          b: 'request completed',
          c: 'response expired',
          n: 'none'
        };
        const subject = new BehaviorSubject(values.n);
        const poke = hot('     ---x-x----------x----------|  ', values);
        const inner = cold('   a--b---(c|)                   ', values);
        const subscription1 = '^-----------------------------';
        const expected1 = '    n--a--b---c-----a--b---c------';
        const subscription2 = '----^-------------------------';
        const expected2 = '    ----a-b---c-----a--b---c------';
        const subscription3 = '--------^---------------------';
        const expected3 = '    --------b-c-----a--b---c------';
        const subscription4 = '------------^-----------------';
        const expected4 = '    ------------c---a--b---c------';
  
        const truth$: Observable<string> = poke.pipe(
          exhaustMap((x: string): Observable<string> => inner),
          mergeMap((x: string): BehaviorSubject<string> => new BehaviorSubject(x))
        );
  
        truth$.subscribe(
          (x: string): void => {
            subject.next(x);
          },
          (err: string): void => {
            subject.error(err);
          },
          (): void => {
            subject.complete();
          }
        );
  
        expectObservable(subject, subscription1).toBe(expected1, values);
        expectObservable(subject, subscription2).toBe(expected2, values);
        expectObservable(subject, subscription3).toBe(expected3, values);
        expectObservable(subject, subscription4).toBe(expected4, values);
      });
    });
  });
});
