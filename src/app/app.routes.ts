import { Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormeoBuilderComponent } from './formeo-builder/formeo-builder.component';

export const routes: Routes = [
    
    { path: 'forms', component: FormBuilderComponent },
    { path: 'formeo', component: FormeoBuilderComponent },


];
