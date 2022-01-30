import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadPageComponent } from './image-upload-page.component';

describe('ImageUploadPageComponent', () => {
  let component: ImageUploadPageComponent;
  let fixture: ComponentFixture<ImageUploadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploadPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
