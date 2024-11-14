import { Component, OnInit } from '@angular/core';
import * as formeo from 'formeo';

const {FormeoEditor, FormeoRenderer } = formeo
@Component({
  selector: 'app-formeo-builder',
  templateUrl: './formeo-builder.component.html',
  styleUrls: ['./formeo-builder.component.css']
})
export class FormeoBuilderComponent implements OnInit {

  options = {
   
    editorContainer: '.editor-wrap' // Ensure this matches your HTML container ID
  };

  formData:any =null

  renderer = new formeo.FormeoRenderer(this.options)
  
 // Set up a form builder
 editor :any

 ngAfterViewInit() {
  this.formData = this.editor.formData
  this.renderer.render(this.formData)
  // setTimeout(() => {
    
    
  
  // }, 3000);  // 2000 milliseconds = 2 seconds
}
 
  ngOnInit(): void {

    this.editor = new FormeoEditor(this.options, this.formData)
  }

}
