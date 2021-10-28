import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// What comp is taken for testing
// group of related test specs can be put under describe 
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // test spec 
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // App.comp.ts is taken for testing
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Unit-Testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // App.comp.ts is taken for testing
    expect(app.title).toEqual('Unit-Testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement; //  // App.comp.html is taken for testing
    expect(compiled.querySelector('.content span')?.textContent).toContain('Unit-Testing app is running!');
  });

  it('should add numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // App.comp.ts is taken for testing

    expect(app.add(10, 20)).toEqual(30);
  })
});
