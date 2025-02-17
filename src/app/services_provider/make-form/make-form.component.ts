import { Component } from '@angular/core';
import { Service } from 'src/app/services/provider_services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-make-form',
  templateUrl: './make-form.component.html',
  styleUrls: ['./make-form.component.scss']
})
export class MakeFormComponent {

  newJsonArray: any[] = [];
  idCounter: number = 1;
  Sectionid: number = 0;

  constructor(private services: Service) {
    // createInputField
    this.services.getAndUpdateform().then((res: any) => {
      // console.log(res)
      if (res && res.data) {
        const data = res.data[0].form_content;
        for (let i = 0; i < data.length; i++) {
          this.createInputField(data[i]);
        }
        this.newJsonArray = data;
        this.idCounter = data.length + 1
        console.log(data)
      }
    }).catch((err: any) => {
      console.log(err);
    })
  }
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
            "data": "",
          },
          {
            "type": "Radio Button",
            "text": "Enter the text",
            "id": "",
            "value1": "value",
            "value2": "value",
            "value3": "value",
            "data": "",
          },
          {
            "type": "Image",
            "id": "",
            "title": "Image Title",
            "data": "",
          }
        ]
      }
    }
  ];


  Save() {
    console.log(this.newJsonArray);
    let foundButton = false;
    let foundEmail = false;
    for (let i = 0; i < this.newJsonArray.length; i++) {
      if (this.newJsonArray[i].type === 'Button') {
        foundButton = true;
      }
      if (this.newJsonArray[i].Type === 'email') {
        foundEmail = true;
      }
    }
    if (!foundButton) {
      Swal.fire({
        icon: 'error',
        text: "Button not found!!!!!"
      })
      return;
    }
    if (!foundEmail) {
      Swal.fire({
        icon: 'error',
        text: "Enter at least one email field"
      })
      return;
    }
    this.services.addAndUpdateform(this.newJsonArray).then((res: any) => {
      if (res && res.message) {
        Swal.fire({
          icon: 'success',
          title: res.message
        })
      }
    }).catch((err: any) => {
      console.log(err)
      if (err && err.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.message
        })
      } else if (err && err.error.error) {
        Swal.fire({
          icon: 'error',
          title: err.error.error.form_content[0]
        })
      }
    })
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

  labelStyling(label: HTMLElement) {
    label.style.marginLeft = '10px';
    label.style.fontWeight = 'bold';
    label.style.color = '#4C489D';
    label.style.fontSize = '16px';
    return label
  }

  inputStyling(input: HTMLElement) {
    input.style.height = '35px';
    input.style.border = 'none';
    input.style.borderBottom = '2px solid #D1D1D4';
    input.style.outline = 'none';
    input.style.color = 'gray';
    input.style.background = 'none';
    input.style.borderRadius = '26px';
    input.style.padding = '10px';
    input.style.width = '100%';
    input.style.boxShadow = 'inset 2px 2px 5px rgba(0, 0, 0, 0.2)';
    input.style.transition = '.2s';
    return input
  }

  selectStyling(select: HTMLElement) {
    select.style.width = '100%';
    select.style.padding = '8px 16px';
    select.style.fontSize = '16px';
    select.style.borderRadius = '26px';
    select.style.border = '2px solid #4C489D';
    select.style.borderRadius = '8px';
    select.style.backgroundColor = '#f8f8f8';
    select.style.color = 'gray';
    select.style.boxShadow = 'inset 2px 2px 5px rgba(0, 0, 0, 0.2)';
    select.style.appearance = 'none';
    select.style.backgroundImage = 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 140 140\'%3E%3Cpolyline points=\'15,50 70,105 125,50\' stroke=\'%234C489D\' stroke-width=\'20\' fill=\'none\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")';
    select.style.backgroundRepeat = 'no-repeat';
    select.style.backgroundPosition = 'right 16px center';
    select.style.backgroundSize = '16px';
    select.style.transition = 'all 0.3s ease';
    select.style.cursor = 'pointer';
    return select;
  }

  styledButton(button: HTMLElement) {
    button.style.padding = '12px 24px';
    button.style.fontSize = '16px';
    button.style.fontWeight = 'bold';
    button.style.color = 'white';
    button.style.backgroundColor = '#4C489D';
    button.style.border = 'none';
    button.style.borderRadius = '8px';
    button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    button.style.cursor = 'pointer';
    button.style.transition = 'all 0.3s ease';
    return button
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
      this.labelStyling(label)
      const input = document.createElement('input');
      this.inputStyling(input)
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
      this.labelStyling(label)
      const input = document.createElement('input');
      this.inputStyling(input)
      input.value = element.placeholder;
      const label_2 = document.createElement('label');
      this.labelStyling(label_2)
      label_2.innerText = 'This field is required or not';
      const select = document.createElement('select');
      this.selectStyling(select)
      const options = ['', 'Required', 'Not Required'];
      const label_3 = document.createElement('label');
      this.labelStyling(label_3)
      label_3.innerText = 'Set the type of Input';
      const type = ['text', 'email', 'password'];
      const selectType = document.createElement('select');
      this.selectStyling(selectType)
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
      this.labelStyling(label)
      const input = document.createElement('input');
      this.inputStyling(input)
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
      this.labelStyling(label)
      label.innerText = 'Writer the question of this Check-Box';
      const input = document.createElement('input');
      this.inputStyling(input)
      input.value = element.text;
      const label_1 = document.createElement('label');
      label_1.innerText = 'Write the content of first Check-Box';
      this.labelStyling(label_1)
      const input_1 = document.createElement('input');
      this.inputStyling(input_1)
      input_1.value = element.value1;
      const label_2 = document.createElement('label');
      label_2.innerText = 'Write the content of second Check-Box';
      this.labelStyling(label_2)
      const input_2 = document.createElement('input');
      input_2.value = element.value2
      this.inputStyling(input_2)
      const label_3 = document.createElement('label');
      label_3.innerText = 'Write the content of third Check-Box';
      this.labelStyling(label_3)
      const input_3 = document.createElement('input');
      input_3.value = element.value3
      this.inputStyling(input_3)
      const label_4 = document.createElement('label');
      label_4.innerText = 'Write the content of fourth Check-Box';
      this.labelStyling(label_4)
      const input_4 = document.createElement('input');
      input_4.value = element.value4
      this.inputStyling(input_4)
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

    } else if (element.type === 'Radio Button') {
      const lineBreak = document.createElement('br');
      const label = document.createElement('label');
      this.labelStyling(label)
      label.innerText = 'Writer the question of this Radio button';
      const input = document.createElement('input');
      this.inputStyling(input)
      input.value = element.text;
      const label_1 = document.createElement('label');
      label_1.innerText = 'Write the content of first radio button';
      this.labelStyling(label_1)
      const input_1 = document.createElement('input');
      input_1.value = element.value1;
      this.inputStyling(input_1)
      const label_2 = document.createElement('label');
      label_2.innerText = 'Write the content of second radio button';
      this.labelStyling(label_2)
      const input_2 = document.createElement('input');
      this.inputStyling(input_2)
      input_2.value = element.value2
      const label_3 = document.createElement('label');
      label_3.innerText = 'Write the content of third radio button';
      this.labelStyling(label_3)
      const input_3 = document.createElement('input');
      this.inputStyling(input_3)
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
      this.styledButton(button)
      button.addEventListener('click', (event) => {
        const item = this.newJsonArray.findIndex(obj => obj.id === element.id);
        if (item) {
          this.newJsonArray.splice(item, 1);
          workingSpace.innerHTML = ''
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
    let inputElement: HTMLInputElement | HTMLButtonElement | HTMLLabelElement | HTMLDivElement | HTMLImageElement | undefined;
    const workingSpace = document.querySelector('.working-space');
    const workingSpace2 = document.querySelector('.working-space-2');
    const submit = document.getElementById('saveButton');
    if (submit) {
      submit.style.display = 'block';
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
      this.inputStyling(inputElement)
    } else if (data.type === 'Checkbox') {
      inputElement = document.createElement('div');
      inputElement.setAttribute('id', data.id);
      const lineBreak = document.createElement('br');
      const textofcheckbox = document.createElement('label');
      textofcheckbox.innerText = data.text;
      this.labelStyling(textofcheckbox)
      inputElement.appendChild(textofcheckbox);
      inputElement.appendChild(lineBreak);
      for (let i = 1; i <= 4; i++) {
        const lineBreak = document.createElement('br');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        const label = document.createElement('label');
        label.innerText = data['value' + i];
        label.style.marginLeft = '10px';
        this.labelStyling(label)
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
      this.labelStyling(textofcheckbox)
      inputElement.appendChild(textofcheckbox);
      inputElement.appendChild(lineBreak);
      for (let i = 1; i <= 3; i++) {
        const lineBreak = document.createElement('br');
        const radiobox = document.createElement('input');
        radiobox.setAttribute('type', 'radio');
        const label = document.createElement('label');
        this.labelStyling(label)
        label.innerText = data['value' + i];
        radiobox.style.marginLeft = '10px';
        inputElement.appendChild(radiobox);
        inputElement.appendChild(label);
      }
    } else if (data.type === 'Button') {
      const existingButton = workingSpace.querySelector('button');
      if (existingButton) {
        Swal.fire({
          icon: 'error',
          text: 'You can only add One button'
        })
        return;
      } else {
        inputElement = document.createElement('button');
        inputElement.innerText = data.text;
        this.styledButton(inputElement)
        inputElement.setAttribute('id', data.id);
      }

    } else if (data.type === 'Label') {
      inputElement = document.createElement('label');
      inputElement.innerText = data.text;
      this.labelStyling(inputElement)
      inputElement.setAttribute('id', data.id);
    } else if (data.type === 'Image') {
      const existingImage = workingSpace.querySelector('img');
      if (existingImage) {
        Swal.fire({
          icon: 'error',
          text: 'You can only add one image'
        })
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
        this.inputStyling(inputElement)
        inputElement.setAttribute('type', data.Type);
        inputElement.setAttribute('placeholder', data.placeholder);
        inputElement.setAttribute('id', data.id);
      } else if (data.type === 'Button') {
        inputElement = document.createElement('button');
        this.styledButton(inputElement)
        inputElement.innerText = data.text;
        inputElement.setAttribute('id', data.id);
      } else if (data.type === 'Label') {
        inputElement = document.createElement('label');
        this.labelStyling(inputElement)
        inputElement.innerText = data.text;
        inputElement.setAttribute('id', data.id);
      } else if (data.type === 'Checkbox') {
        inputElement = document.createElement('div');
        inputElement.setAttribute('id', data.id);
        const textofcheckbox = document.createElement('label');
        this.labelStyling(textofcheckbox)
        textofcheckbox.innerText = data.text;
        inputElement.appendChild(textofcheckbox);
        for (let i = 1; i <= 4; i++) {
          const lineBreak = document.createElement('br');
          const checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          const label = document.createElement('label');
          this.labelStyling(label)
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
        this.labelStyling(textofcheckbox)
        textofcheckbox.innerText = data.text;
        inputElement.appendChild(textofcheckbox);
        inputElement.appendChild(lineBreak);
        for (let i = 1; i <= 3; i++) {
          const radiobox = document.createElement('input');
          radiobox.setAttribute('type', 'radio');
          const label = document.createElement('label');
          this.labelStyling(label)
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
