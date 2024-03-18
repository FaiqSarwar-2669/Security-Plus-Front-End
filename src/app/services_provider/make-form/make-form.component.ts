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
          },
          {
            "type": "checkbox",
            "text": "Enter the text",
            "id": "",
            "value1": "value",
            "value2": "value",
            "value3": "value",
            "value4": "value",
          },
          {
            "type": "radio",
            "text": "Enter the text",
            "id": "",
            "value1": "value",
            "value2": "value",
            "value3": "value",
          },
          {
            "type": "section",
            "id": "",
            "title": "Section Title",
            "leftElements": [],
            "rightElements": []
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
      if (data.type === 'input' || data.type === 'button' || data.type === 'label' || data.type === 'checkbox' || data.type === 'radio' || data.type === 'section') {
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

  // Create the instance of html elements
  createInputField(data: any) {
    let inputElement: HTMLInputElement | HTMLButtonElement | HTMLLabelElement | HTMLDivElement | undefined;
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
    } else if (data.type === 'checkbox') {
      inputElement = document.createElement('div');
      inputElement.setAttribute('id', data.id);
      const lineBreak = document.createElement('br');
      const textofcheckbox = document.createElement('label');
      textofcheckbox.innerText = data.text;
      inputElement.appendChild(textofcheckbox);
      inputElement.appendChild(lineBreak);
      for (let i = 1; i <= 4; i++) {
        const lineBreak = document.createElement('br');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        const label = document.createElement('label');
        label.innerText = data['value' + i];
        label.style.marginLeft = '10px';
        inputElement.appendChild(checkbox);
        inputElement.appendChild(label);
        inputElement.appendChild(lineBreak);
      }
    } else if (data.type === 'radio') {
      inputElement = document.createElement('div');
      inputElement.setAttribute('id', data.id);
      const lineBreak = document.createElement('br');
      const textofcheckbox = document.createElement('label');
      textofcheckbox.innerText = data.text;
      inputElement.appendChild(textofcheckbox);
      inputElement.appendChild(lineBreak);
      for (let i = 1; i <= 3; i++) {
        const lineBreak = document.createElement('br');
        const radiobox = document.createElement('input');
        radiobox.setAttribute('type', 'radio');
        const label = document.createElement('label');
        label.innerText = data['value' + i];
        radiobox.style.marginLeft = '10px';
        inputElement.appendChild(radiobox);
        inputElement.appendChild(label);
      }
    } else if (data.type === 'button') {
      const existingButton = workingSpace.querySelector('button');
      if (existingButton) {
        alert("You can only add One button");
        return;
      } else {
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
    } else if (data.type === 'section') {
      inputElement = document.createElement('div');
      inputElement.setAttribute('id', data.id);
      inputElement.setAttribute('class', 'section');
      inputElement.setAttribute('style', 'width: 100%; display:flex; justify-content: space-between;');
      const left_side = document.createElement('div');
      left_side.setAttribute('id', 'left-side');
      left_side.setAttribute('style', 'width: 48%; min-height: 50px; border: 1px solid #ccc; background-color: lightblue;');
      const right_side = document.createElement('div');
      right_side.setAttribute('id', 'right-side');
      right_side.setAttribute('style', 'width: 48%; min-height: 50px; border: 1px solid #ccc; background-color: lightgreen;');
      inputElement.appendChild(left_side);
      inputElement.appendChild(right_side);

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
