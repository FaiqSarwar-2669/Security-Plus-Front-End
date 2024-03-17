import { Component } from '@angular/core';

@Component({
  selector: 'app-make-form',
  templateUrl: './make-form.component.html',
  styleUrls: ['./make-form.component.scss']
})
export class MakeFormComponent {

  newJsonArray: any[] = [];
  idCounter: number = 1;

  formcomponents: any[] = [
    {
      "form": {
        "elements": [
          {
            "type": "input",
            "id": "",
            "label": "",
            "placeholder": "",
            "data": "",
          },
          {
            "type": "button",
            "id": "",
            "text": "Button",
          },
          {
            "type": "label",
            "text": "",
            "id": "",
          }
        ]
      }
    }
  ];



  // for drag start
  onDragStart(event: DragEvent, item: any) {
    event.dataTransfer?.setData('text/plain', JSON.stringify(item));
  }

  // for drag over
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  // for drop
  onDrop(event: DragEvent) {
    event.preventDefault();
    const dataTransfer = event.dataTransfer;
    if (dataTransfer) {
      const data = JSON.parse(dataTransfer.getData('text/plain'));
      if (data.type === 'input' || data.type === 'button' || data.type === 'label') {
        this.addToNewJsonArray(data);
      }
    }
  }

  // Add item to the new array
  addToNewJsonArray(item: any) {
    const newItem = { ...item, id: 'item_' + this.idCounter++ };
    this.newJsonArray.push(newItem);
    console.log(this.newJsonArray);
    this.createInputField(newItem);
  }

  createInputField(data: any) {
    let inputElement: HTMLInputElement | HTMLButtonElement | HTMLLabelElement | undefined;
    const workingSpace = document.querySelector('.working-space');
    if (!workingSpace) {
      return;
    }



    if (data.type === 'input') {
      inputElement = document.createElement('input');
      inputElement.setAttribute('type', 'text');
      inputElement.setAttribute('placeholder', 'New Input Field');
      inputElement.setAttribute('id', data.id);
      inputElement.style.height = '25px';
    } else if (data.type === 'button') {

      
      const existingButton = workingSpace.querySelector('button');
      if (existingButton) {
        alert("You can only add One button");
        return; 
      }else{
        inputElement = document.createElement('button');
        inputElement.innerText = 'Button';
        inputElement.setAttribute('id', data.id);
        inputElement.addEventListener('click', () => {
          console.log('Button clicked');
        });
      }
      
    } else if (data.type === 'label') {
      inputElement = document.createElement('label');
      inputElement.innerText = 'Name';
      inputElement.setAttribute('id', data.id);
    }
    if (inputElement) {
      inputElement.addEventListener('click', (event) => {
        const clickedElement = event.target as HTMLElement;
        console.log('Clicked element ID:', clickedElement.id);
      });
      workingSpace.appendChild(inputElement);
    }
  }



}
