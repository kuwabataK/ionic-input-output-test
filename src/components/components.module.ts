import { NgModule } from '@angular/core';
import { MyChildComponent } from './my-child/my-child';
import { IonicModule } from 'ionic-angular';
import { MyApp } from '../app/app.component';
@NgModule({
	declarations: [MyChildComponent],
	imports: [
		IonicModule.forRoot(MyApp),
	],
	exports: [MyChildComponent]
})
export class ComponentsModule {}
