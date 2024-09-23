import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Service } from 'src/app/services/provider_services';
import { ModalController } from '@ionic/angular';
import { ViewGuardsComponent } from 'src/app/Modaal/view-guards/view-guards.component';

@Component({
  selector: 'app-guards-data',
  templateUrl: './guards-data.component.html',
  styleUrls: ['./guards-data.component.scss']
})
export class GuardsDataComponent implements OnInit {


  guardsArray: any
  searchdata: any
  companyID: any
  companyName: any
  contractcompanies: any

  constructor(private services: Service,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.services.getguardse().then((res: any) => {
      this.guardsArray = res.data
    }).catch((err: any) => {
      console.log(err)
    })
    this.getContracts();
  }

  fetchdata() {
    const formdata = new FormData()
    formdata.append('email', this.searchdata)
    this.services.getDataForGivingGuads(formdata).then((res: any) => {
      console.log(res)
      if (res.error) {
        Swal.fire({
          icon: "error",
          title: res.error,
        });
        return
      }

      this.companyID = res.data.id
      this.companyName = res.data.bussiness_owner
      Swal.fire({
        title: "Select Users",
        html: this.renderCheckboxes(this.guardsArray),
        showCancelButton: true,
        confirmButtonText: "Submit",
        preConfirm: () => {
          const selectedUsers = this.getSelectedUserIds();
          if (selectedUsers.length === 0) {
            Swal.showValidationMessage("Please select at least one user");
            return;
          }
          return selectedUsers;
        }
      }).then(async (result) => {
        if (result.isConfirmed) {
          const formdata = new FormData()
          formdata.append('company', this.companyID)
          formdata.append('name', this.companyName)
          const selectedUserIds = this.getSelectedUserIds()
          selectedUserIds.forEach((userId: any) => {
            formdata.append('Users[]', userId);
          });
          this.services.assignContracts(formdata).then((res: any) => {
            Swal.fire({
              icon: "success",
              title: res.message,
            });
            this.ngOnInit();
          }).catch((err: any) => {
            console.log(err)
          })
        }
      }).catch((err: any) => {
        console.log(err)
      })
    }).catch((err: any) => {
      console.log(err)
    })
  }



  renderCheckboxes(users: any) {
    return users
      .map(
        (user: any) =>
          `<div 
        style="display: flex;
        align-items: flex-start;
        gap:10px;"
        ><input type="checkbox" id="${user.id}" class="user-checkbox" value="${user.id}"> <label for="${user.id}"> ${user.First_Name}  ${user.Last_Name}</label></div>`
      )
      .join("");
  }
  getSelectedUserIds() {
    const checkboxes = document.querySelectorAll(".user-checkbox:checked");
    const selectedIds: any = [];
    checkboxes.forEach((checkbox) => {
      const inputElement = checkbox as HTMLInputElement;
      selectedIds.push(inputElement.value);
    });
    return selectedIds;
  }


  getContracts() {
    this.services.getContracts().then((res: any) => {
      console.log(res)
      this.contractcompanies = res.data
    }).catch((err: any) => {
      console.log(err)
    })
  }


  async view(id: any) {
    console.log(id)
    const modal = await this.modalController.create({
      cssClass: 'custom-modal-class',
      component: ViewGuardsComponent,
      componentProps: { value: id },
    });
    await modal.present();
  }


  fired(id: any) {
    this.services.firedDuard(id).then((res: any) => {
      Swal.fire({
        icon: "success",
        title: res.message,
      });
      this.ngOnInit();
    }).catch((err: any) => {
      // Swal.fire({
      //   icon: "success",
      //   title: err.errors.error,
      // });
    })
  }

  contrctDeactive(id: any) {
    this.services.deactivateGuard(id).then((res: any) => {
      Swal.fire({
        icon: "success",
        title: res.message,
      });
      this.ngOnInit();
    }).catch((err: any) => {
      // Swal.fire({
      //   icon: "success",
      //   title: err.errors.error,
      // });
    })
  }
}
