import { Component } from '@angular/core';

@Component({
  selector: 'app-make-form',
  templateUrl: './make-form.component.html',
  styleUrls: ['./make-form.component.scss']
})
export class MakeFormComponent {

  newJsonArray: any[] = [];
  idCounter: number = 1;
  Sectionid: number = 0;

  formcomponents: any[] = [
    {
      "form": {
        "elements": [
          {
            "type": "Input",
            "Type": "text",
            "id": "",
            "label": "",
            "placeholder": "New Input Field",
            "data": "",
            "required": '',
          },
          {
            "type": "Button",
            "id": "",
            "text": "New Button",
          },
          {
            "type": "Label",
            "text": "New Label",
            "id": "",
          },
          {
            "type": "Checkbox",
            "text": "Enter the text",
            "id": "",
            "value1": "value",
            "value2": "value",
            "value3": "value",
            "value4": "value",
          },
          {
            "type": "Radio Button",
            "text": "Enter the text",
            "id": "",
            "value1": "value",
            "value2": "value",
            "value3": "value",
          },
          {
            "type": "Image",
            "id": "",
            "title": "Image Title",
          }
        ]
      }
    }
  ];


  Save(){
    console.log(this.newJsonArray);
  }

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
      if (data.type === 'Input' || data.type === 'Button' || data.type === 'Label' || data.type === 'Checkbox' || data.type === 'Radio Button' || data.type === 'Image') {
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

  //get the specific data
  getSpecificElement(itemID: any, newJsonArray: any) {
    for (let i = 0; i < this.newJsonArray.length; i++) {
      if (newJsonArray[i].id === itemID) {
        this.upDateSpecificElement(newJsonArray[i]);
      }
    }
  }

  //Update the data of specific element of html tags
  upDateSpecificElement(element: any) {
    let formElement: HTMLInputElement | HTMLLabelElement | HTMLDivElement | HTMLButtonElement | undefined;
    const workingSpace = document.querySelector('.working-space-2');
    if (!workingSpace) {
      return;
    }
    workingSpace.innerHTML = '';
    formElement = document.createElement('div');
    formElement.setAttribute('style', 'display: flex; flex-direction: column;gap: 10px;');
    if (element.type === 'Label') {
      const lineBreak = document.createElement('br');
      const label = document.createElement('label');
      label.innerText = 'Enter label Name';
      const input = document.createElement('input');
      input.style.height = '25px';
      input.value = element.text;
      input.addEventListener('input', (event) => {
        element.text = (event.target as HTMLInputElement).value;
        this.UpdatedSpace(this.newJsonArray);
      });
      formElement.appendChild(label);
      formElement.appendChild(lineBreak);
      formElement.appendChild(input);
    } else if (element.type === 'Input') {
      const lineBreak = document.createElement('br');
      const label = document.createElement('label');
      label.innerText = 'Enter the placeholder';
      const input = document.createElement('input');
      input.style.height = '25px';
      input.value = element.placeholder;
      const label_2 = document.createElement('label');
      label_2.innerText = 'This field is required or not';
      const select = document.createElement('select');
      const options = ['', 'Required', 'Not Required'];
      const label_3 = document.createElement('label');
      label_3.innerText = 'Set the type of Input';
      const type = ['text', 'email', 'password'];
      const selectType = document.createElement('select');
      selectType.style.height = '25px';
      type.forEach(element => {
        const option = document.createElement('option');
        option.setAttribute('value', element);
        option.textContent = element;
        selectType.appendChild(option);
      });

      options.forEach((optionText) => {
        const option = document.createElement('option');
        option.setAttribute('value', optionText);
        option.textContent = optionText;
        select.appendChild(option);
      });
      select.style.height = '25px';
      select.addEventListener('change', (event) => {
        element.required = (event.target as HTMLSelectElement).value;
        this.UpdatedSpace(this.newJsonArray);
      })
      selectType.addEventListener('change', (event) => {
        element.Type = (event.target as HTMLSelectElement).value;
        this.UpdatedSpace(this.newJsonArray);
      })
      input.addEventListener('input', (event) => {
        element.placeholder = (event.target as HTMLInputElement).value;
        this.UpdatedSpace(this.newJsonArray);
      });
      formElement.appendChild(label);
      formElement.appendChild(lineBreak);
      formElement.appendChild(input);
      formElement.appendChild(lineBreak);
      formElement.appendChild(label_2);
      formElement.appendChild(lineBreak);
      formElement.appendChild(select);
      formElement.appendChild(lineBreak);
      formElement.appendChild(label_3);
      formElement.appendChild(lineBreak);
      formElement.appendChild(selectType);
    } else if (element.type === 'Button') {
      const lineBreak = document.createElement('br');
      const label = document.createElement('label');
      label.innerText = 'Enter Button Name';
      const input = document.createElement('input');
      input.style.height = '25px';
      input.value = element.text;
      input.addEventListener('input', (event) => {
        element.text = (event.target as HTMLSelectElement).value;
        this.UpdatedSpace(this.newJsonArray);
      })
      formElement.appendChild(label);
      formElement.appendChild(lineBreak);
      formElement.appendChild(input);
    } else if (element.type === 'Checkbox') {
      const lineBreak = document.createElement('br');
      const label = document.createElement('label');
      label.innerText = 'Writer the question of this Check-Box';
      const input = document.createElement('input');
      input.style.height = '25px';
      input.value = element.text;
      const label_1 = document.createElement('label');
      label_1.innerText = 'Write the content of first Check-Box';
      const input_1 = document.createElement('input');
      input_1.style.height = '25px';
      input_1.value = element.value1;
      const label_2 = document.createElement('label');
      label_2.innerText = 'Write the content of second Check-Box';
      const input_2 = document.createElement('input');
      input_2.style.height = '25px';
      input_2.value = element.value2
      const label_3 = document.createElement('label');
      label_3.innerText = 'Write the content of third Check-Box';
      const input_3 = document.createElement('input');
      input_3.style.height = '25px';
      input_3.value = element.value3
      const label_4 = document.createElement('label');
      label_4.innerText = 'Write the content of fourth Check-Box';
      const input_4 = document.createElement('input');
      input_4.style.height = '25px';
      input_4.value = element.value4
      input.addEventListener('input', (event) => {
        element.text = (event.target as HTMLSelectElement).value;
        this.UpdatedSpace(this.newJsonArray);
      });
      input_1.addEventListener('input', (event) => {
        element.value1 = (event.target as HTMLSelectElement).value;
        this.UpdatedSpace(this.newJsonArray);
      });
      input_2.addEventListener('input', (event) => {
        element.value2 = (event.target as HTMLSelectElement).value;
        this.UpdatedSpace(this.newJsonArray);
      });
      input_3.addEventListener('input', (event) => {
        element.value3 = (event.target as HTMLSelectElement).value;
        this.UpdatedSpace(this.newJsonArray);
      });
      input_4.addEventListener('input', (event) => {
        element.value4 = (event.target as HTMLSelectElement).value;
        this.UpdatedSpace(this.newJsonArray);
      });
      formElement.appendChild(label);
      formElement.appendChild(lineBreak);
      formElement.appendChild(input);
      formElement.appendChild(lineBreak);
      formElement.appendChild(label_1);
      formElement.appendChild(lineBreak);
      formElement.appendChild(input_1);
      formElement.appendChild(lineBreak);
      formElement.appendChild(label_2);
      formElement.appendChild(lineBreak);
      formElement.appendChild(input_2);
      formElement.appendChild(lineBreak);
      formElement.appendChild(label_3);
      formElement.appendChild(lineBreak);
      formElement.appendChild(input_3);
      formElement.appendChild(lineBreak);
      formElement.appendChild(label_4);
      formElement.appendChild(lineBreak);
      formElement.appendChild(input_4);

    }else if (element.type === 'Radio Button'){
      const lineBreak = document.createElement('br');
      const label = document.createElement('label');
      label.innerText = 'Writer the question of this Radio button';
      const input = document.createElement('input');
      input.style.height = '25px';
      input.value = element.text;
      const label_1 = document.createElement('label');
      label_1.innerText = 'Write the content of first radio button';
      const input_1 = document.createElement('input');
      input_1.style.height = '25px';
      input_1.value = element.value1;
      const label_2 = document.createElement('label');
      label_2.innerText = 'Write the content of second radio button';
      const input_2 = document.createElement('input');
      input_2.style.height = '25px';
      input_2.value = element.value2
      const label_3 = document.createElement('label');
      label_3.innerText = 'Write the content of third radio button';
      const input_3 = document.createElement('input');
      input_3.style.height = '25px';
      input_3.value = element.value3
      input.addEventListener('input', (event) => {
        element.text = (event.target as HTMLSelectElement).value;
        this.UpdatedSpace(this.newJsonArray);
      });
      input_1.addEventListener('input', (event) => {
        element.value1 = (event.target as HTMLSelectElement).value;
        this.UpdatedSpace(this.newJsonArray);
      });
      input_2.addEventListener('input', (event) => {
        element.value2 = (event.target as HTMLSelectElement).value;
        this.UpdatedSpace(this.newJsonArray);
      });
      input_3.addEventListener('input', (event) => {
        element.value3 = (event.target as HTMLSelectElement).value;
        this.UpdatedSpace(this.newJsonArray);
      });
      formElement.appendChild(label);
      formElement.appendChild(lineBreak);
      formElement.appendChild(input);
      formElement.appendChild(lineBreak);
      formElement.appendChild(label_1);
      formElement.appendChild(lineBreak);
      formElement.appendChild(input_1);
      formElement.appendChild(lineBreak);
      formElement.appendChild(label_2);
      formElement.appendChild(lineBreak);
      formElement.appendChild(input_2);
      formElement.appendChild(lineBreak);
      formElement.appendChild(label_3);
      formElement.appendChild(lineBreak);
      formElement.appendChild(input_3);
      formElement.appendChild(lineBreak);
    }
    if (formElement) {
      const button = document.createElement('button');
      button.innerText = 'delete';
      button.addEventListener('click', (event) => {
        const item = this.newJsonArray.findIndex(obj => obj.id === element.id);
        if(item){
          this.newJsonArray.splice(item , 1);
          workingSpace.innerHTML=''
        }
        this.UpdatedSpace(this.newJsonArray);
      });
      formElement.appendChild(button);
      workingSpace.appendChild(formElement);
    }
    console.log(element);
  }


  // Create the instance of html elements
  createInputField(data: any) {
    let inputElement: HTMLInputElement | HTMLButtonElement | HTMLLabelElement | HTMLDivElement | undefined;
    const workingSpace = document.querySelector('.working-space');
    const workingSpace2 = document.querySelector('.working-space-2');
    const submit = document.getElementById('saveButton');
    if(submit){
      submit.style.display='block';
    }
    if (!workingSpace || !workingSpace2) {
      return;
    }
    workingSpace2.innerHTML = '';
    if (data.type === 'Input') {
      inputElement = document.createElement('input');
      inputElement.setAttribute('type', 'text');
      inputElement.setAttribute('placeholder', data.placeholder);
      inputElement.setAttribute('id', data.id);
      inputElement.style.height = '25px';
    } else if (data.type === 'Checkbox') {
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
    } else if (data.type === 'Radio Button') {
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
    } else if (data.type === 'Button') {
      const existingButton = workingSpace.querySelector('button');
      if (existingButton) {
        alert("You can only add One button");
        return;
      } else {
        inputElement = document.createElement('button');
        inputElement.innerText = data.text;
        inputElement.setAttribute('id', data.id);
      }

    } else if (data.type === 'Label') {
      inputElement = document.createElement('label');
      inputElement.innerText = data.text;
      inputElement.setAttribute('id', data.id);
    } else if (data.type === 'Image') {
      const existingImage = workingSpace.querySelector('img');
      if (existingImage) {
        alert("You can only add one image");
        return;
      } else {
        inputElement = document.createElement('img');
        inputElement.setAttribute('src', 'assets/default.png');
        inputElement.setAttribute('alt', 'Image');
        inputElement.setAttribute('id', data.id);
        inputElement.setAttribute('class', 'image');
        inputElement.setAttribute('style', 'width: 200px; height: 200px; border-radius: 50%;');
      }
    }



    if (inputElement) {
      inputElement.addEventListener('click', (event) => {
        const clickedElement = event.target as HTMLElement;
        console.log('Clicked element ID:', clickedElement.id);
        this.getSpecificElement(clickedElement.id, this.newJsonArray);
      });
      workingSpace.appendChild(inputElement);
    }
  }


  UpdatedSpace(elements: any[]) {
    const workingSpace = document.querySelector('.working-space');
    if (!workingSpace) {
      return;
    }
    workingSpace.innerHTML = '';

    elements.forEach((data) => {
      let inputElement: HTMLInputElement | HTMLButtonElement | HTMLLabelElement | HTMLDivElement | HTMLImageElement | undefined;

      if (data.type === 'Input') {
        inputElement = document.createElement('input');
        inputElement.setAttribute('type', data.Type);
        inputElement.setAttribute('placeholder', data.placeholder);
        inputElement.setAttribute('id', data.id);
        inputElement.style.height = '25px';
      } else if (data.type === 'Button') {
        inputElement = document.createElement('button');
        inputElement.innerText = data.text;
        inputElement.setAttribute('id', data.id);
      } else if (data.type === 'Label') {
        inputElement = document.createElement('label');
        inputElement.innerText = data.text;
        inputElement.setAttribute('id', data.id);
      } else if (data.type === 'Checkbox') {
        inputElement = document.createElement('div');
        inputElement.setAttribute('id', data.id);
        const textofcheckbox = document.createElement('label');
        textofcheckbox.innerText = data.text;
        inputElement.appendChild(textofcheckbox);
        for (let i = 1; i <= 4; i++) {
          const lineBreak = document.createElement('br');
          const checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          const label = document.createElement('label');
          label.innerText = data['value' + i];
          label.style.marginLeft = '10px';
          inputElement.appendChild(lineBreak);
          inputElement.appendChild(checkbox);
          inputElement.appendChild(label);
          
        }
      } else if (data.type === 'Radio Button') {
        inputElement = document.createElement('div');
        inputElement.setAttribute('id', data.id);
        const lineBreak = document.createElement('br');
        const textofcheckbox = document.createElement('label');
        textofcheckbox.innerText = data.text;
        inputElement.appendChild(textofcheckbox);
        inputElement.appendChild(lineBreak);
        for (let i = 1; i <= 3; i++) {
          const radiobox = document.createElement('input');
          radiobox.setAttribute('type', 'radio');
          const label = document.createElement('label');
          label.innerText = data['value' + i];
          radiobox.style.marginLeft = '10px';
          inputElement.appendChild(radiobox);
          inputElement.appendChild(label);
        }
      } else if (data.type === 'Image') {
        inputElement = document.createElement('img');
        inputElement.setAttribute('src', 'assets/default.png');
        inputElement.setAttribute('alt', 'Image');
        inputElement.setAttribute('id', data.id);
        inputElement.setAttribute('class', 'image');
        inputElement.setAttribute('style', 'width: 200px; height: 200px; border-radius: 50%;');
      }

      if (inputElement) {
        inputElement.addEventListener('click', (event) => {
          const clickedElement = event.target as HTMLElement;
          console.log('Clicked element ID:', clickedElement.id);
          this.getSpecificElement(clickedElement.id, this.newJsonArray);
        });
        workingSpace.appendChild(inputElement);
      }
    });
  }

}
